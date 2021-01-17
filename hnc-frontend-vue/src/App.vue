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
                          <br><br>
                            <span class="is-large is-info">
                                👇 Scroll down to find out more !
                            </span>
                        </div>
                    </div>
                </div>
                <br><br><br>
                <br><br><br>
                <p class="is-family-monospace" style="font-size:0.7rem">
                                      ⌘ Note : If you experience stuttering below try enabling Hardware Acceleration in your browser to allow GPU rendering of interactive elements.
                </p>
                <br>
                <br>
                <div class="section has-text-left" id="intro">
                        <!-- calling imported component from Intro.vue -->
                        <IntroSection />
                </div>
                <br><br>
                <div class="section has-text-left" id="alg">
                        <!-- calling imported component from Algo.vue -->
                        <Algorithms />
                </div>
                <br><br>
                <div class="section has-text-left" id="arch">
                        <!-- calling imported component from Arch.vue -->
                        <Architecture />                    
                </div>
                 <div class="section has-text-left" id="CD">
                        <!-- calling imported component from Graph.vue -->
                        <Graph3D />                    
                </div> 
            </div>
            </div>
            <br><br>
            <span class="is-centered is-italic is-family-monospace" style="font-size:0.8rem">Head over to the <a href="https://github.com/Akshay-A-Kulkarni/Twitter-Graph-Clustering">Github Repo</a> to check out all the code of the functionality and components as well as assets such as logos and grpahics that were built from scratch.</span>
            <br><br>
        <div class="hero-foot">
        <footer class="footer">
         <p class="subtitle is-6">Built with:</p>
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
                        <img class="grayscale" src="./assets/figma_logo.svg" width="50px">
                        <br>
                        <p class="heading" style="margin-top:10px;">Figma</p>
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
    // Importing all Components 
    import IntroSection from './components/Intro.vue'
    import Algorithms from './components/Algo.vue'
    import Architecture from './components/Arch.vue'
    import Graph3D from './components/Graph.vue'


    export default {
      name: 'App',
      components: {
          IntroSection,
          Algorithms,
          Architecture,
          Graph3D
      },
      data: function () {
        },

      methods:{
      },

      mounted: function (){
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
    box-shadow: 0 1em 1em -0.125em rgba(29, 161, 242, 0.2);
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
		transform: translatey(-50px);
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
