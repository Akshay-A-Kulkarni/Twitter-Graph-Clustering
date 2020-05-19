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
                                    <ul>
                                        <li>This tool with Python and NetworkX creates graph networks containing Hashtags as nodes which are linked based on co-occurrence of two such #s within a scraped tweet.</li>
                                        <br>
                                        <li>The tool scrapes aforementioned tweets containing the seed hashtag, using a Python package called Tweepy.</li>
                                        <br>
                                        <li>This project is focused on Twitter, but our tool could be adapted to scrape hashtags from many other social networks.</li>
                                    </ul>
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
                                        <li>Calculates the Betweeness-Centrality of all edges which is the measure of the extent to which a vertex lies on paths between other vertices. </li>
                                        <li>The algorithm selectively removes edges with the highest score and Then recalculates and repeats until all communities have been detected.</li>
                                        <li>Slower than CNM (approx 10-12 minutes; <code>TC: O(E^2N)</code>, but typically returns results with higher modularity scores (Modularity: 0.8035).</li>
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
                    <div class="column is-4 is-vcentered">
                        <div style="height:100%;">
                            <p>&nbsp;
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
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div class="hero-foot">
        <footer class="footer">
         <p class="subtitle is-6">Developed Using:</p>
            <div class="container level">
                    <div class="level-item has-text-centered">
                      <div>
                        <img class="grayscale" src="./assets/python.svg" width="75px">
                        <br>
                        <p class="heading" style="margin-top:10px;">Python</p>
                      </div>
                    </div>
                    <div class="level-item has-text-centered">
                      <div>
                        <img class="grayscale" src="./assets/js.svg" width="75px">
                        <br>
                        <p class="heading" style="margin-top:10px;">JavaScript</p>
                      </div>
                    </div>
                    <div class="level-item has-text-centered">
                      <div>
                        <img class="grayscale" src="./assets/vue.svg" width="75px">
                        <br>
                        <p class="heading" style="margin-top:10px;">Vue.js</p>
                      </div>
                    </div>
                    <div class="level-item has-text-centered">
                      <div>
                        <img class="grayscale" src="./assets/bulma.svg" width="50px">
                        <br>
                        <p class="heading" style="margin-top:10px;">Bulma</p>
                      </div>
                    </div>
                    <div class="level-item has-text-centered">
                        <div>
                        <img class="title" src="./assets/render.png" width="75px">
                        <br>
                        <p class="heading" style="margin-top:10px;">Render</p>
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

    export default {
      name: 'App',
      components: {},
      data: function () {
            return {
                intraCommunityDistance : 150,
                interCommunityDistance : 3000,
                graph_obj:null
            }
        },

      methods:{
          updateLinkForce: function(graph) {
                return graph.d3Force('link')
                                 .distance(link => link.color == 0 ? this.interCommunityDistance : this.intraCommunityDistance); 
          }
          
      },

      mounted: function (){
        const elem1 = this.$refs.logo_graph;
        const elem2 = this.$refs.cd_graph;
        var l_width = this.$refs.logo_container.clientWidth;
        var l_width2 = this.$refs.cd_graph.clientWidth;

        ExampleGraph(elem1,l_width);
        this.graph_obj = Render3DGraph(elem2,l_width2);

        this.updateLinkForce(this.graph_obj);
            

        // function updateLinkDistance() {
        //    linkForce.distance(link => link.color == 0  ? this.interCommunityDistance : this.intraCommunityDistance);
        //    graph.numDimensions(3); // Re-heat simulation
        //  }
        
        // updateLinkDistance();
         // Define GUI
        //  const Settings = function() {
        //    this.intraCommunityDistance = 150;
        //    this.interCommunityDistance = 3000;
        //  };  

        //  const settings = new Settings();

        //  const gui = new dat.GUI({ autoPlace: false } );  
         // gui.domElement.id = cntrls;
        //  const controllerOne = gui.add(settings, 'intraCommunityDistance', -100, 1000);
        //  const controllerTwo = gui.add(settings, 'interCommunityDistance', -1000, 10000);  

        //  controllerOne.onChange(updateLinkDistance);
        //  controllerTwo.onChange(updateLinkDistance); 
        },
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@500&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

html {
  font-size: 16px;
  scroll-behavior: smooth;
}


body {
    background-color: #F5F5F5;
    font-family: 'Inter',-apple-system,"BlinkMacSystemFont",'Open Sans', sans-serif;
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

.card-content{
    border-color: #1DA1F2;
    box-shadow: 0 2em 2em -0.125em rgba(29, 161, 242, 0.1);
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
.grow-lots:hover { transform: scale(1.2); }

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
    font-family: 'Roboto', sans-serif;
    font-size: 5rem;
    letter-spacing: 0.5px;
    -webkit-text-stroke-width: 0.05px;
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
