"""
MainFile to initialize the stream and collect tweets
"""
import time
from tweepy import API
from tweepy import Stream
from tweepy import OAuthHandler

from Ingestion.twitterlistener import TwitterStreamListener
from Ingestion.keydecryptor import DecryptAPIKeys

# Import Encrypted Keys
from Ingestion.encryptedkeychain import *


# Decrypting API keys
cipher = DecryptAPIKeys(password=input("Input Password to decrypt : "))
enc_keys = [TWITTER_CONSUMER_KEY, TWITTER_CONSUMER_SECRET, TWITTER_KEY, TWITTER_SECRET_KEY]
decrypted_keys = cipher.decrypt_keys(enc_keys)

auth = OAuthHandler(decrypted_keys[0], decrypted_keys[1])
auth.set_access_token(decrypted_keys[2], decrypted_keys[3])

api = API(auth, wait_on_rate_limit_notify=True, wait_on_rate_limit=True)

listener = TwitterStreamListener(batch_size=10, max_cap=10)

stream = Stream(auth=api.auth, listener=listener)

start = time.time()
try:
    print("Starting Stream")
    stream.filter(track=['COVID19', "CoronaVirus", "COVID-19"], languages=['en'])
except KeyboardInterrupt:
    print("Manually Stopped")
except ConnectionError:
    print("Something Went Wrong")
finally:
    print("Done")
    print("time elapsed : " + str((time.time() - start)/60) + " mins.")
    stream.disconnect()
