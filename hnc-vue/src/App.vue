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
                                    <li><a href="#intro">Prelude</a></li>
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
                        <h2 class="subtitle is-4 has-text-left">
                            Community detection for intuitive analysis on hashtag graphs
                        </h2>
                        <br>
                        <p class="has-text-justified">
                            <a class="button is-medium is-info is-outlined">
                                Learn more
                            </a>
                        </p>
                    </div>
                </div>
                <div class="section" id="intro">
                    <div class="columns is-vcentered">
                    <div class="column is-half has-text-justified">
                        <div class="content tool-info">
                        <p class="subtitle is-3">Prelude<p>
                        <p>This tool using Python and NetworkX creates graph networks using  containing Hashtags as nodes linked based on co-occurrence of two such #s within a tweet.</p>
                        <p>The tool scrapes aforementioned tweets containing the seed hashtag, using a Python package called Tweepy.</p>
                        <ul type="circle">
                            <li>Allows easy access to a few weeks of tweets</li>
                            <li>Used to set a Minimum of 3 hashtags per tweet in order to facilitate our graph creation heuristic of hashtag co-occurrence.</li>
                            <li>Removes words synonymous to the seed hashtag eg in case of '#COVID19', all variants of 'Covid' and 'Corona' would be removed as they would be redundant</li>
                        </ul>
                        <p>This project is focused on Twitter, but our tool could be adapted to scrape hashtags from many other social networks.</p>
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
                <h2 class="subtitle is-3">Algorithms</h2>
                <div class="columns tool-info is-vcentered">
                    <div class="column is-vcentered  content tool-info">
                        <p class="is-strong">The final version of the  tool was fitted with two different algorithms:</p>
                        <br>
                        <p class="subtitle is-5">Clauset-Newman-Moore:</p>
                        <ul type="circle">
                            <li> A modularity based algo. that operates faster than GN <code> Time comp. O(log^2n) or O(nlog^2n)</code>.</li>
                            <li>Works by comparing the fraction of edges within a module of nodes to the fraction that would be observed if the connects were random. It starts by treating each node as its own community, then adds the two communities that most increase the modularity.</li>
                            <li>Process repeats until any further merges decreases modularity. Covid graph Modularity : 0.7892. </li>
                        </ul>
                        <br>
                        <p class="subtitle is-5">Girval-Newmann:</p>
                         <ul type="circle">
                            <li>Calculates the Betweeness-Centrality of all edges, and selectively removes the ones with the highest score. </li>
                            <li>Then recalculates and repeats until all communities have been detected.</li>
                            <li>Slower than CNM (approx 10-12 minutes; <code>TC: O(E^2N)</code>, but typically returns results with higher modularity scores (Modularity: 0.8035).</li>
                        </ul>
                    </div>
                </div>
            </div>
            <br><br>
            <div class="section has-text-left" id="arch">
                <div class="container tool-info">
                    <p class="subtitle is-3">Tool Architecture</p>
                        <div class="columns is-vcentered">
                            <div class="column is-7">                            
                                <img src="./assets/arch.png" class="grow" alt="Arch" width="100%">
                                <div class="has-text-centered is-family-monospace has-text-info is-italic">
                                    <span><br>Architecture & Process Diagram</span>
                                </div>  
                            </div>
                            <div class="column is-5 has-text-justified">
                                <ol style="font-size:0.9rem">
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
                        </div>
                </div>
            </div>
            <div class="section has-text-left" id="CD">
                <div class="container tool-info">
                    <h3 class="subtitle is-3">Community Detection</h3>
                    <div class="columns is-vcentered">
                        <div class="column is-10 is-offset-1" ref="cd_graph"></div>
                    <div ref="controls"></div>
                    </div>
                </div>
            </div>
        </div>
        </div>

        <div class="hero-foot">
        <footer class="footer">
            <p class="subtitle is-6">Developed With:</p>
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
      methods:{},
      mounted(){
        const elem1 = this.$refs.logo_graph;
        const elem2 = this.$refs.cd_graph;
        var l_width = this.$refs.logo_container.clientWidth;
        var l_width2 = this.$refs.cd_graph.clientWidth;

        ExampleGraph(elem1,l_width);
        Render3DGraph(elem2,l_width2);
        },
    }
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Open+Sans:ital,wght@0,300;0,400;0,700;1,400&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@600&display=swap');

html {
  font-size: 16px;
  scroll-behavior: smooth;
}


body {
    background-color: #F5F5F5;
    font-family: 'Roboto',-apple-system,"BlinkMacSystemFont",'Open Sans', sans-serif;
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

.multiline {
  white-space: pre-wrap;
}

@keyframes float {
	0% {
		/* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
		transform: translatey(0px);
	}
	50% {
		/* box-shadow: 0 25px 15px 0px rgba(0,0,0,0.2); */
		transform: translatey(-50px);
	}
	100% {
		/* box-shadow: 0 5px 15px 0px rgba(0,0,0,0.6); */
		transform: translatey(0px);
	}
}

.grow { transition: all .2s ease-in-out; }
.grow:hover { transform: scale(1.2); }

.float-content{
    line-height: 1.25;
    background-color: transparent;
    overflow: hidden;
	animation: float 10s ease-in-out infinite;
}

.tool-info{
    font-family: 'Open Sans', sans-serif;
    font-size: 1rem;
}


#brand_head {
    margin-top: 10%;
    font-weight: 300;
    break-inside: 1.25;
    /* font-size: 5rem; */
}

#brand_head h1 {
    font-family: 'Roboto', sans-serif;
    font-size: 4.5rem;
    letter-spacing: 0.3px;
    -webkit-text-stroke-width: 0.05px;
    -webkit-text-stroke-color: black;
     /* background: -webkit-linear-gradient(0deg,#1DA1F2,black);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent; */
}

h1 span{
    color: #1DA1F2;
    font-size: 5.5rem;
    font-family: 'Montserrat', sans-serif;
    -webkit-text-stroke-width: 2.0px;
    -webkit-text-stroke-color: black;
}
</style>
