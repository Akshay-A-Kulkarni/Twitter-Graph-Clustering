from _generateGraph import HashtagGraph
from tqdm import tqdm
import time
import networkx as nx
import pandas as pd
import numpy as np
import snap

class CommunityDetector:

    def __init__(self, filepath = "data/Hashtag_Raw_Data/COVID19_hashtags7.csv", name_arg = "ClausetNewmanMoore_SY_Test", max_subgraph = True, savepath = "data/Hashtag_Raw_Data/detected_communites_sytest.txt"):
        self.filepath = filepath
        self.name_arg = name_arg
        self.max_subgraph = max_subgraph
        self.savepath = savepath

    def buildNxGraph(self):
        '''
        Creates a Networkx graph object from specified filepath.
        '''
        H = HashtagGraph(name = self.name_arg, ret_maximal_subgraph = self.max_subgraph)
        H.load_raw_csv(self.filepath)
        networkxGraph = H.Graph
        return networkxGraph, H

    def buildSnapGraph(self, networkxGraph = None):
        '''
        Creates a SNAP graph object from a NetworkX Graph Object
        '''
        if networkxGraph == None:
            networkxGraph, H = self.buildNxGraph()
        # Initialize empty "SNAP" Graph
        G = snap.TUNGraph().New()
        # Add nodes to empty Graph
        for n in list(networkxGraph.nodes):
            G.AddNode(n)
        # Add edges to graph
        for src, trgt in list(networkxGraph.edges):
            G.AddEdge(src,trgt)
        print("SNAP Graph construction complete.")
        return G, H

    def writeTxt(self, CmtyV, modularity):
        '''
        Helper method to write detected communities to a text file for easy viewing.  
        '''
        with open(self.savepath, 'w') as file_object:
            file_object.write("Modularity: %f \n" % modularity)
            i = 1
            for Cmty in CmtyV:
                file_object.write(f"Community {i}: \n")
                file_object.write(str(list(Cmty)))
                file_object.write("\n")
                i += 1

    def detectCommunities(self, algo = "CNM", snapgraph = None, H = None, nxGraph = None, write = True, printout = True):
        '''
        Detect communities using Clauset-Newman-Moore modularity-based greedy
        algorithm or Girvan-Neman betweeness-centrality based algorithm.

        Returns results as a dictionary and saves a text-file version.
        '''
        # Creates a SNAP Graph Object if none is provided
        if snapgraph == None:
            snapgraph, H = self.buildSnapGraph(networkxGraph = nxGraph)
            # G = snapgraph
        # Detect community and calculate modularity
        networkxGraph = H.Graph
        start = time.time()
        CmtyV = snap.TCnComV()
        if algo == "CNM":
            modularity = snap.CommunityCNM(snapgraph, CmtyV)
        else:
            modularity = snap.CommunityGirvanNewman(snapgraph, CmtyV)
        if printout == True:
            i = 1
            for Cmty in CmtyV:
                print(f"Community {i}: ")
                print(list(Cmty))
                # communities.append(list(Cmty))
                print("\n")
                i += 1
        print("The modularity of the network is %f" % modularity)
        print(f"Time : {time.time()-start} seconds")
        # Save to text file at savepath if write = True
        if write == True:
            self.writeTxt(CmtyV, modularity)
        # Create a dataframe of community assignments
        communities = []
        for i, cmty in enumerate(CmtyV):
            for c in cmty:
                communities.append((c, i+1))
        community_df = pd.DataFrame(communities, columns = ['hashtag_id', 'CNM_Label'])
        # Export labeleed graph as a JSON file.
        nx.set_node_attributes(networkxGraph, community_df.set_index('hashtag_id').to_dict('index'))
        print("Community labelled graph exported as ", self.name_arg, ".json")
        H.exportGraph("JSON")
