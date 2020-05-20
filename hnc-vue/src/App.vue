<template>
  <div id="app">
        <section class="hero is-fullheight is-default">
        <div class="hero-head">
            <nav class="navbar">
                <div class="container">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="../">
                            <!-- <img src="./assets/twitter-tile.svg" alt="Logo"> -->
                        </a>
                        <span class="navbar-burger burger" data-target="navbarMenu">
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </div>
                    <div id="navbarMenu" class="navbar-menu">
                        <div class="navbar-end">
                            <div class="tabs is-right">
                                <ul>
                                    <li class="is-active"><a>Home</a></li>
                                    <li><a href="#intro">Intro</a></li>
                                    <li><a href="#alg">Algo</a></li>
                                    <li><a href="#arch">Schema</a></li>
                                    <li><a href="#CD">3D-Graph</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
        <div class="hero-body">
            <div class="container has-text-centered">
                <div class="columns" id='brand_head'>
                    <br><br>
                    <div ref="logo_container" class="column is-6 is-offset-1">
                        <img class="float-content" src="./assets/tgraph.svg" alt="Logo" width="100%">
                    </div>
                    <div class="column is-5 is-offset-0">
                        <h1 class="title is-2 has-text-left">
                            <span>#</span>ashtag<br>Network<br>Clustering
                        </h1>
                        <br>
                        <h2 class="subtitle is-4 has-text-left">
                            Community detection for intuitive analysis on hashtag graphs
                        </h2>
                        <br>
                        <br>
                        <div class="has-text-justified float-content">
                            <span class="is-large is-info">
                                👇 Scroll down to find out more !
                            </span>
                        </div>
                    </div>
                </div>
                <br>
                <br>
                <br>
                <div class="section has-text-left" id="intro">
                    <div class="columns is-vcentered">
                    <div class="column is-half has-text-left">
                        <h2 class="subtitle is-2">Intro</h2>
                        <div class="content is-medium tool-info">
                        <div class="card grow">
                            <div class="card-content">
                                <p class="title is-5 is-italic">
                                    Learn more from social networks   
                                    <br>
                                    <br>
                                </p>
                                <div class="subtitle is-6">
                                    <p>
                                        Network graphs are ubiquitous and have applications in various spaces such as computer science, social media analysis and even protein and drug interaction analyses. 
                                        This tool uses such graph networks built from scraped hashtags from live tweets using Python and NetworkX along with network clustering algorithms and NLP techniques to glean information about discussions surrounding COVID19. 
                                        <br><br>
                                        The tool uses two algorithms namely Clauset-Newman-Moore and Girvan-Newman to conduct the graph-based clustering yielding quite interesting results. Clusters consisting of labels thematically centered 
                                        around medical professionals and appreciation of medical professionals and many other covid related topics can be seen.
                                        <br><br>
                                        With more work, this can become an end-to-end tool to allow users or organizations to extract & analyze information from tweets to learn more about the zeitgeist around areas of their interest.
                                    </p>
                                    <!-- <ul>
                                        <li>This tool  creates graph networks containing Hashtags as nodes which are linked based on co-occurrence of two such #s within a scraped tweet.</li>
                                        <br>
                                        <li>The tool scrapes aforementioned tweets containing the seed hashtag, using a Python package called Tweepy.</li>
                                        <br>
                                        <li>This project is focused on Twitter, but our tool could be adapted to scrape hashtags from many other social networks.</li>
                                    </ul> -->
                                    <!-- <ul type="circle">
                                        <li>Allows easy access to a few weeks of tweets</li>
                                        <li>Used to set a Minimum of 3 hashtags per tweet in order to facilitate our graph creation heuristic of hashtag co-occurrence.</li>
                                        <li>Removes words synonymous to the seed hashtag eg in case of '#COVID19', all variants of 'Covid' and 'Corona' would be removed as they would be redundant</li>
                                    </ul> -->
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                    <div class="column">
                        <div id='logo_graph' ref="logo_graph"></div>
                        <div class="has-text-centered is-family-monospace has-text-info is-italic">
                               <span>Tip: drag the birds to see the live graph functionality</span>
                        </div>
                    </div>
                </div>
            </div>
            <br><br>
            
            <div class="section has-text-left" id="alg">
                <h2 class="subtitle is-2">Algorithms</h2><br>
                <p class="is-strong">The final version of the  tool was fitted with two different algorithms:</p>
                <br>
                <div class="columns tool-info">
                    <div class="column is-6 content tool-info is-medium">
                        <div class="card grow">
                            <div class="card-content">
                                <p class="title is-4">
                                    Clauset-Newman-Moore: 
                                    <br>
                                    <br>
                                </p>
                                <div class="subtitle is-6">
                                    <ul type="circle">
                                        <li> A modularity based algo. that operates faster than GN <code> Time comp. O(log^2n) or O(nlog^2n)</code>.</li>
                                        <li> It starts by treating each node as its own community, then adds the two communities that most increase the modularity.</li>
                                        <li> Process repeats until any further merges decreases modularity. Covid graph Modularity : 0.7892. </li>
                                    </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                    <div class="column is-6 content tool-info is-medium">
                        <div class="card grow">
                            <div class="card-content">
                                <p class="title is-4">
                                    Girvan-Newmann:
                                    <br>
                                    <br> 
                                </p>
                                <div class="subtitle is-6">
                                    <ul type="circle">
                                        <li>Calculates the Betweeness-Centrality of all edges which is the measure of no. of shortest paths passing through that vertex. </li>
                                        <li>The algorithm selectively removes edges with the highest score and repeats until all communities have been detected.</li>
                                        <li>Slower than CNM (<code>TC: O(E^2N)</code>, but typically returns results with higher modularity scores (Modularity: 0.8035).</li>
                                     </ul>
                                </div>
                              </div>
                            </div>
                    </div>
                </div>
            </div>
            <br><br>
            <div class="section has-text-left" id="arch">
                <h2 class="subtitle is-2">Architecture Schema</h2>
                 <br>
                <div class="content">
                        <div class="columns is-vcentered">
                            <div class="column is-10 is-offset-1">                            
                                <img src="./assets/arch.png" class="grow-lots" alt="Arch" width="100%">
                                <div class="has-text-centered is-family-monospace has-text-info is-italic">
                                    <span><br><br><br> Architecture & Process Diagram</span>
                                </div>  
                            </div>
                        </div>
                        
                        <!-- <div class="content is-medium has-text-justified">
                                <ol>
                                    <li>The data is fetched from the respective API with the given search parameters </li>
                                    <li>Then tweepy establishes a stream and maintains the connection while handling connection errors and timeouts.</li>
                                    <li>The streamed data is filtered based on the restrictions specified and hashtag network generator code processes the tweet to extract and retain info relevant for graph building</li>
                                    <li>The processed data is stored periodically in Bigquery table for easy and quick access.</li>
                                    <li>This mined data is then fed to the custom graph generator code which returns a graph object based on the heuristic established before.</li>
                                    <li>The graph object is then used to compute various attributes and is then fed to community detection algorithm </li>
                                    <li>Along with the graph data, the community assignments are attached to the graph obj then exported to JSON payload files for visualisation and gets stored remotely</li>
                                    <li>The JSON is fetched from github into the visualization environment and then processed accordingly to create rich and interactive D3/WebGL renders of a 3D network and displayed to the user for visual analysis and control.</li>
                                </ol>
                        </div>
                         -->
                </div>
            </div>
            <div class="section has-text-left" id="CD">
                <h2 class="subtitle is-2">Community Detection</h2><br>
                <div class="columns tool-info is-gapless is-vcentered">
                    <!-- <div class="column is-1" style="width:20vw;">
                        <div class="card grow">
                            <div class="card-content">
                                <p class="title is-4">
                                    🦠 - Network 
                                    <br>
                                </p>
                                <div class="subtitle is-6">
                                    <p>This graph was generated from 10,000+ tweets using #COVID19 as the seed hashtag</p>
                                </div>
                              </div>
                            </div>
                    </div> -->
                    <div class="column is-9 is-vcentered">
                        <div class="container" ref="cd_graph"></div>
                    <!-- <div ref="controls"></div> -->
                    </div>
                    <div class="column is-4 is-vcentered is-offset-2">
                        <div style="height:100%;">
                            <p>&nbsp;
                                <br><br><br>
                                <br><br><br>
                                <br><br><br>
                                <br><br><br>
                                <br><br><br>
                                <br><br><br>
                                <br><br><br>
                                <br><br><br>
                                <br><br><br>
                            </p>
                        </div>
                        <div class="content">
                            <div class="card grow">
                            <div class="card-content">
                                <p class="title is-5">
                                    3D Force Graph 
                                    <br>
                                    <br>
                                </p>
                                <div class="subtitle is-7">
                                    <ul type="circle">
                                        <li> Degree contrast can be observed by the node sizes  </li>
                                        <li> Node and edge Community membership is represented by colors  </li>
                                        <li> Additional information about the nodes can be accessed by hovering over nodes. </li>
                                    </ul>
                                <div>
                                    <p>Inter Community Distance</p>
                                     <vue-slider 
                                        v-model="interCommunityDistance"
                                        @change="updateLinkForce()"
                                        :min="0"
                                        :max="10000"
                                        :interval="1"/>
                                     <br>
                                     <p>Intra Community Distance</p>
                                     <vue-slider 
                                        v-model="intraCommunityDistance"
                                        @change="updateLinkForce()"
                                        :min="-100"
                                        :max="2000"
                                        :interval="1"/>
                                </div>
                                   
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        <br><br>
        <span class="is-centered is-italic is-family-monospace" style="font-size:0.8rem">Head over to the <a href="https://github.com/Akshay-A-Kulkarni/Twitter-Graph-Clustering">Github Repo</a> to check out all the code of the functionality and components as well as assets such as logos and grpahics that were built from scratch.</span>
        <br><br>
        <div class="hero-foot">
        <footer class="footer">
         <p class="subtitle is-6">Developed Using:</p>
            <div class="container level">
                    <div class="level-item has-text-centered grow">
                      <div>
                        <img class="grayscale" src="./assets/python.svg" width="75px">
                        <br>
                        <p class="heading" style="margin-top:10px;">Python</p>
                      </div>
                    </div>
                    <div class="level-item has-text-centered grow">
                      <div>
                        <img class="grayscale" src="./assets/js.png" width="75px">
                        <br>
                        <p class="heading" style="margin-top:10px;">JavaScript</p>
                      </div>
                    </div>
                    <div class="level-item has-text-centered grow">
                      <div>
                        <img class="grayscale" src="./assets/vue.svg" width="75px">
                        <br>
                        <p class="heading" style="margin-top:10px;">Vue.js</p>
                      </div>
                    </div>
                    <div class="level-item has-text-centered grow">
                      <div>
                        <img class="grayscale" src="./assets/bulma.svg" width="50px">
                        <br>
                        <p class="heading" style="margin-top:10px;">Bulma</p>
                      </div>
                    </div>
                    <div class="level-item has-text-centered grow">
                        <div>
                        <img class="title" src="./assets/g-a.png" width="75px">
                        <br>
                        <p class="heading" style="margin-top:10px;">Github-Actions</p>
                        </div>
                    </div>
                     <div class="level-item has-text-centered grow">
                        <div>
                        <img class="title" src="./assets/surge.svg" width="75px">
                        <br>
                        <p class="heading" style="margin-top:10px;">Surge.sh</p>
                        </div>
                    </div>
            </div>
        </footer>
        </div>
    </section>
  </div>
</template>


<script>
    import { ExampleGraph, Render3DGraph} from './graph-viz-driver.js';
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'

    export default {
      name: 'App',
      components: {
          VueSlider
      },
      data: function () {
            return {
                intraCommunityDistance : 500,
                interCommunityDistance : 5000,
                graph_obj : null,
                linkForce : null
            }
        },

      methods:{
          updateLinkForce: function() {
                this.linkForce.distance(link => link.color == 0 ? this.interCommunityDistance : this.intraCommunityDistance)
                this.graph_obj.numDimensions(3);
          } 
      },

      mounted: function (){
        const elem1 = this.$refs.logo_graph;
        const elem2 = this.$refs.cd_graph;
        var l_width = this.$refs.logo_container.clientWidth;
        var l_width2 = this.$refs.cd_graph.clientWidth;

        ExampleGraph(elem1,l_width);
        this.graph_obj = Render3DGraph(elem2,l_width2);

        this.linkForce = this.graph_obj.d3Force('link')
                                       .distance(link => link.color == 0 ? this.interCommunityDistance : this.intraCommunityDistance); 

        },
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

html {
  font-size: 17px;
  scroll-behavior: smooth;
}


body {
    background-color: #F5F5F5;
    font-family: BlinkMacSystemFont,-apple-system,'Open Sans', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale; 
    }

#app {
  text-align: center;
  color: #2c3e50;
  line-height: 1.15;
}

#divider{
    border-color:darkgray;
    border-style: solid; 
    border-width: 0.5px;
}

.card{
    box-shadow: 0 2em 2em -0.125em rgba(29, 161, 242, 0.2);
    /* outline: 1px solid #0198fa; */
    padding: 10px 10px;
    border: 1px solid transparent;
    -webkit-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    }

.card:hover {
  outline: 0px solid transparent;
  padding: 10px 10px;
  border: 1px solid #0198fa;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}

@keyframes float {
	0% {
		/* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
		transform: translatey(0px);
	}
	50% {
		/* box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2); */
		transform: translatey(-20px);
	}
	100% {
		/* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
		transform: translatey(0px);
	}
}

.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.05); }

.grow-lots { transition: all .2s ease-in-out; }
.grow-lots:hover { transform: scale(1.2);}

.float-content{
    line-height: 1.25;
    background-color: transparent;
    overflow: hidden;
	animation: float 5s ease-in-out infinite;
}

.tool-info{
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
}

#brand_head {
    margin-top: 11%;
    font-weight: 300;
    break-inside: 1.25;
    /* font-size: 5rem; */
}

#brand_head h1 {
    font-family: -apple-system,system-ui,BlinkMacSystemFont,'Roboto', sans-serif;
    font-weight: 600;
    font-size: 5rem;
    letter-spacing: 0.5px;
    -webkit-text-stroke-width: 2.0px;
    -webkit-text-stroke-color: black;
}

h1 span{
    color: #1DA1F2;
    font-size: 6rem;
    font-family: 'Montserrat', sans-serif;
    -webkit-text-stroke-width: 2.0px;
    -webkit-text-stroke-color: black;
}
</style>
