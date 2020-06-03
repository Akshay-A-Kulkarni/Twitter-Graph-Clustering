<template>
    <div>
        <h2 class="subtitle is-2">Community Detection</h2><br>
        <p class="title is-4">🦠 - Network </p>
        <div class="subtitle is-6">
            <ul type="circle">
             <li>This graph was generated from 10,000+ tweets using #COVID19 as the seed hashtag</li>
            </ul>
        </div>
        <br>
        <div class="columns tool-info is-gapless is-vcentered">
            <div class="column is-9 is-vcentered">
                <div class="container" ref="cd_graph"></div>
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
</template>
<script>
    import { Render3DGraph } from '../graph-viz-driver.js';
    import VueSlider from 'vue-slider-component'
    import 'vue-slider-component/theme/antd.css'

export default {
    name:"Graph3D",
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
        const cd_graph_elem = this.$refs.cd_graph;
        var cd_graph_width = this.$refs.cd_graph.clientWidth;


        this.graph_obj = Render3DGraph(cd_graph_elem,cd_graph_width);

        this.linkForce = this.graph_obj.d3Force('link')
                                       .distance(link => link.color == 0 ? this.interCommunityDistance : this.intraCommunityDistance); 

    }
}
</script>
