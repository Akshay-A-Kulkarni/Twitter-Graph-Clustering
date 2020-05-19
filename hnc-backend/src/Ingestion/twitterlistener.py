# Class for ingesting Twitter data from its Streaming Endpoint.
import base64
import json
import time

import pandas as pd
from tweepy import StreamListener


class TwitterStreamListener(StreamListener):
    """
    Class to implementing the stream listener interface

    """
    def __init__(self, batch_size, max_cap):
        super(TwitterStreamListener, self).__init__()
        self.count = 0
        self.filecount = 0
        self.tweets = []
        self.batch_size = batch_size
        self.max_cap = max_cap

    def save_as_csv(self, tweet_batch):
        pd.DataFrame(tweet_batch).to_csv("tweettest"+".csv")
        self.filecount += 1

    def on_status(self, status):
        if not status.user.location:
            return
        if len(status.entities['hashtags']) < 2:
            return
        tid = status.id
        text = status.text
        hts = status.entities['hashtags']
        loc = status.user.location
        date = status.created_at
        tw_data = dict(date=date, id=tid, text=text, hashtags=hts, location=loc)

        self.tweets.append(tw_data)

        if len(self.tweets) >= self.batch_size:
            self.save_as_csv(self.tweets)
            self.tweets = []

        if(self.count % 50) == 0:
            print("Captured Tweet Count : {}".format(self.count))

        if self.count >= self.max_cap:
            return False

        self.count += 1

        return True

    def on_timeout(self):
        time.sleep(120)
        return True  # To continue listening

    def on_error(self, status_code):
        print(status_code)
        raise ConnectionError
