// JS code to manipulate force interactions using Edge properties I assign during generating CNM communities

//  Graph --- NOT BEING USED
// var GraphJson;
// fetch('https://raw.githubusercontent.com/Akshay-A-Kulkarni/Twitter-Network-Analysis/master/Miscellaneous/GirvanNewman.json')
// // fetch('https://raw.githubusercontent.com/Akshay-A-Kulkarni/Twitter-Network-Analysis/master/Miscellaneous/ClausetNewmanMoore.json')
//   .then((response) => {
//     return response.json();
//   })
//   .then((data) => {
//     GraphJson = data;
//   });


function RainBowColor(length, maxLength)
    {
        frequency1=1.666;
        frequency2=2.666;
        frequency3=3.666;
    
        var i = (length * 255 / maxLength);
        var r = Math.round(Math.sin(frequency1 * i + 3) * 127 + 128);
        var g = Math.round(Math.sin(frequency2 * i + 2) * 127 + 128);
        var b = Math.round(Math.sin(frequency3 * i + 1) * 127 + 128);
        return 'rgb(' + r + ',' + g + ',' + b + ')'
    } 

export function render3dGraph (){
  const graph = ForceGraph3D()
    (document.getElementById('3d-graph'))
      .backgroundColor('white')
      .jsonUrl('https://raw.githubusercontent.com/Akshay-A-Kulkarni/Twitter-Network-Analysis/master/Miscellaneous/ClausetNewmanMoore.json')
      // .jsonUrl('https://raw.githubusercontent.com/Akshay-A-Kulkarni/Twitter-Network-Analysis/master/Miscellaneous/GirvanNewman.json')
      .nodeLabel(node => node.id)
      .enableNodeDrag(false)
      .nodeVal(node => Math.pow(node.Degree, 2))
      .nodeOpacity(0.9)
      .nodeResolution(64)
      .nodeColor(node => RainBowColor(node.CNM_Label,43))
      .nodeLabel(node =>  `<span style='background-color:#000000'>NodeID - ${node.id} |  Name : ${node.hashtag_name} | CommunityLabel : ${node.CNM_Label}</span>`)
      .linkColor(link => link.color != 0 ? RainBowColor(link.color,43): 'rgb(169,169,169)')
      .onNodeClick(node => window.open(`https://twitter.com/hashtag/${node.hashtag_name}`, '_blank'))
      .linkOpacity(0.4)
      .linkWidth(2)
      .linkResolution(12);  

  const linkForce = graph
    .d3Force('link')
    .distance(link => link.color == 0 ? settings.interCommunityDistance : settings.intraCommunityDistance); 

  //Define GUI
  const Settings = function() {
    this.intraCommunityDistance = 150;
    this.interCommunityDistance = 3000;
  };  

  const settings = new Settings();
  const gui = new dat.GUI();  

  const controllerOne = gui.add(settings, 'intraCommunityDistance', -100, 1000);
  const controllerTwo = gui.add(settings, 'interCommunityDistance', -1000, 10000);  

  controllerOne.onChange(updateLinkDistance);
  controllerTwo.onChange(updateLinkDistance); 

  function updateLinkDistance() {
    linkForce.distance(link => link.color == 0  ? settings.interCommunityDistance : settings.intraCommunityDistance);
    graph.numDimensions(3); // Re-heat simulation
  } 

  }