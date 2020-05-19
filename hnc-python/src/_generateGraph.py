import os
import json
import numpy as np
import networkx as nx
import pandas as pd
import matplotlib.pyplot as plt
from itertools import combinations
from networkx.readwrite import json_graph


class HashtagGraph:
    """
    Class to process a specific format of CSV generated from mined tweets to Generate a Networkx Graph object

    @init_params:
        name: Name of Graph
        ret_maximal_subgraph: Whether to return full graph or just the biggest connected subgraph.
    """
    def __init__(self, name=None, ret_maximal_subgraph = True):
        """
        Initialising Object and member variables
        """
        self.name = name
        self.path = None
        self.inputDF = None
        self.Graph = None
        self.MaxFilter = None
        self.edgelist = None
        self.maximal_subgraph = ret_maximal_subgraph

    def load_raw_csv(self, path, maxfilter=None):
        """
        Loading the csv file from disk to object

        Args:
                path (String): pathname to input file
                maxfilter (int) : sample the graph by node ids

        Returns:
                None : Assigns Dataframe to the object to be processed further
        """
        if self.name is None:
            self.name = os.path.basename(path)
        self.path = os.path.dirname(path)
        # Loading file to dataframe
        inputDF = pd.read_csv(path)
        if "Unnamed: 0" in inputDF.columns:
            inputDF = inputDF.drop(["Unnamed: 0"], axis=1)
        # Assigning id's to distinct hashtags
        inputDF['hashtag_id'] = inputDF.groupby(['hashtag_x']).ngroup()
        inputDF.columns = ["tweet_id", "hashtag_name", "tweet_hashtag_count", "hashtag_id"]  # Renaming Columns
        self.inputDF = inputDF
        self.MaxFilter = maxfilter
        self.__load_as_graph()

    def getNodeList(self):
        """
        Generating a table of Nodes with with Names.

        Returns:
                DataFrame : DataFrame consisting of HashTag_ID & HashTag Name
        """

        nodelist = self.inputDF.copy().drop_duplicates(
            ['hashtag_name', 'hashtag_id'])[['hashtag_name', 'hashtag_id']].copy()
        nodelist_df = nodelist.sort_values(by=['hashtag_id'])
        return nodelist_df

    def getEdgeList(self):
        """
        Generating a table of Edges of the Graph with Source and Target Columns

          Returns:
                  DataFrame : Dataframe consisting of Source & Target Name
          """

        if self.edgelist is None:
            edge_list_src = self.inputDF.copy()[["tweet_id", "hashtag_id"]]
            list_of_edges = []
            # Creating edges
            for i, group in edge_list_src.groupby(['tweet_id'])['hashtag_id']:
                # generate all combinations without replacement
                # from the group of similar column pairs
                for u, v in combinations(group, 2):
                    list_of_edges.append(sorted([u, v]))
            self.edgelist = list_of_edges
            del list_of_edges
        edge_list_df = pd.DataFrame(self.edgelist, columns=["Source", "Target"]).sort_values(by=['Source', "Target"])

        edge_list_df = edge_list_df\
            .groupby(edge_list_df.columns.tolist())\
            .size()\
            .reset_index()\
            .rename(columns={0: 'Edge_Freq'})

        return edge_list_df

    def __load_as_graph(self):
        """
         Loading the df to networkx object

         Returns:
                None : binds networkx graph to object instance
        """
        graph = None

        if self.Graph is None:
            edge_df = self.getEdgeList()
            if self.MaxFilter is not None:
                edge_df = edge_df.query('`Source` <= {} & `Target` <= {}'.format(self.MaxFilter, self.MaxFilter))
            # Creating Graph obj with edge attrs
            graph = nx.from_pandas_edgelist(edge_df, "Source", "Target", ['Edge_Freq'])
            # Setting Node Attrs
            node_df = self.getNodeList().set_index('hashtag_id')
            node_attrs = node_df.to_dict('index')
            nx.set_node_attributes(graph, node_attrs)

            # Extracting Maximally Connected Subgraph
            if self.maximal_subgraph is True:

                def connected_component_subgraphs(input_graph):
                    for c in nx.connected_components(input_graph):
                        yield input_graph.subgraph(c).copy()

                graph = max(connected_component_subgraphs(graph), key=len)
        self.Graph = graph

    def plotGraph(self):
        """
        Generating a plot of the Graph using the Kamada-Kawai force directed layout.
        """
        fig, ax = plt.subplots(1, 1, figsize=(20, 20))
        nx.draw_kamada_kawai(self.Graph, ax=ax)

    def exportGraph(self, export_type):
        """
        Exporting the graph to disk in a set format

        Args:
                export_type (String): 'SNAP', 'JSON'
        Returns:
                None : writes files to disk
        """
        if export_type == "SNAP":
            self.getNodeList().to_csv(self.path+self.name+"_NodeList.csv", index=False)
            self.getEdgeList().to_csv(self.path+self.name+"_EdgeList.csv", index=False)
            print("Export done")
        if export_type == "JSON":
            data = json_graph.node_link_data(self.Graph)
            with open(self.name+'.json', 'w') as f:
                json.dump(data, f, indent=4)
            print("Export done")


if __name__ == "__main__":
    # print(help(HashtagGraph()))
    x = HashtagGraph(name="Test", ret_maximal_subgraph=True)
    x.load_raw_csv("Data/Hashtag_Raw_Data/COVID19_hashtags7.csv")
    G = x.Graph
    print(pd.DataFrame(sorted(G.nodes), columns=["Nodes"]))
