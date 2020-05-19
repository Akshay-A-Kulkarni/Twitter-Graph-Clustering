import pandas as pd
import numpy as np


class LoadData:
    """
    Simple class tailored specifically to import & inspect files from the Twitter SNAP folder.
    """

    def __init__(self):
        self.prefix = "~/Documents/github/Twitter-Network-Analysis/src/data/"
        self.filenames = ["Attribute.txt", "Class_info.txt", "edgelist.txt", "Statistics.txt", "vertex2aid.txt"]

    def load_files(self, sub_folder):
        """
        Loads all files into Pandas DataFrames

        Return: unpacked [Dataframe] objects.
        """
        sub_folder = sub_folder
        attributes = pd.read_csv(self.prefix + sub_folder + self.filenames[0], header=None, delim_whitespace=True,
                                 encoding="ISO-8859-1")
        edgeList = pd.read_csv(self.prefix + sub_folder + self.filenames[2], header=None, delim_whitespace=True)
        stats = pd.read_csv(self.prefix + sub_folder + self.filenames[3], header=None)
        vertex2aid = pd.read_csv(self.prefix + sub_folder + self.filenames[4], header=None, delim_whitespace=True)
        return attributes, edgeList, stats, vertex2aid

    def inspectDf(self, sub_folder):
        """
        Generates summaries for all loaded dataframes

        Return: None
        """
        # Reports the shapes of the above four data files
        attributes, edgeList, stats, vertex2aid = self.load_files(sub_folder)
        shapes = {" 'Attributes.txt' ": ["Dimensions: " + str(np.shape(attributes)), "Type: " + str(type(attributes))],
                  " 'edgelist.txt' ": ["Dimensions: " + str(np.shape(edgeList)), "Type: " + str(type(edgeList))],
                  " 'Statistics.txt' ": ["Dimensions: " + str(np.shape(stats)), "Type: " + str(type(stats))],
                  " 'vertex2aid.txt' ": ["Dimensions: " + str(np.shape(vertex2aid)), "Type: " + str(type(vertex2aid))]}
        for key, value in shapes.items():
            print(key, ":", value)
