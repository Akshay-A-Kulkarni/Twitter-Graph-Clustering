<template>
    <div>
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
</template>
<script>
export default {
    name:'Algorithms',
    data: () => ({})
}
</script>
