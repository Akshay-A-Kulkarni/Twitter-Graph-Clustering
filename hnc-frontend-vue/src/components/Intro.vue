<template>
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
</template>
<script>
import { ExampleGraph } from '../graph-viz-driver.js';

export default {
    name:"IntroSection",
    data: () => ({}),
    mounted: function (){
        const logo_graph_elem = this.$refs.logo_graph;
        var logo_graph_width = this.$refs.logo_graph.clientWidth;
        
        ExampleGraph(logo_graph_elem,logo_graph_width);
    }
}
</script>

