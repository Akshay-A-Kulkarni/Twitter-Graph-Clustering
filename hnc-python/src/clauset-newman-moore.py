import snap
import time
import pandas as pd
import networkx as nx
from _generateGraph import HashtagGraph

H = HashtagGraph(name="ClausetNewmanMoore", ret_maximal_subgraph=True)
H.load_raw_csv("data/Hashtag_Raw_Data/COVID19_hashtags7.csv")

networkxGraph = H.Graph

G = snap.TUNGraph.New()

for n in list(networkxGraph.nodes):
    G.AddNode(n)
for src, trgt in list(networkxGraph.edges):
    G.AddEdge(src, trgt)

start = time.time()
CommunityVec = snap.TCnComV()
modularity = snap.CommunityCNM(G, CommunityVec)

print("The modularity of the network is %f" % modularity)
print(f"Time : {time.time()-start} seconds")

communities = []
for i, cmty in enumerate(CommunityVec):
    for c in cmty:
        communities.append((c, i+1, networkxGraph.degree[c]))

community_df = pd.DataFrame(communities, columns=['hashtag_id', 'CNM_Label', 'Degree'])

nx.set_node_attributes(networkxGraph, community_df.set_index('hashtag_id').to_dict('index'))

for i, j in networkxGraph.edges:
    if networkxGraph.nodes[i]['CNM_Label'] == networkxGraph.nodes[j]['CNM_Label']:
        networkxGraph.edges[i, j]['color'] = networkxGraph.nodes[i]['CNM_Label']
    else:
        networkxGraph.edges[i, j]['color'] = 0

# Dont even have to re attach the reference
H.exportGraph("JSON")


