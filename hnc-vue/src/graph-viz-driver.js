// JS code to create force graphs
import ForceGraph3D from '3d-force-graph';
import dat from 'dat.gui'
import ForceGraph from 'force-graph';

export function ExampleGraph(el,width){
 // Code to generate random hero graph
 const img = new Image();
 img.src = require('./assets/twitter-official.svg')

 // Random tree
 const N = 25;

 const gData = {
   nodes: [...Array(N).keys()].map(i => ({ id: i, img:img })),
   links: [...Array(N).keys()]
     .filter(id => id)
     .map(id => ({
       source: id,
       target: Math.round(Math.random() * (id-1)),
       dashed: (true)
     }))
 };

 const elem = el;
 var l_width = width;


 const dashLen = 9;
 const gapLen = 10;

 const Graph = ForceGraph()(elem)
   .width(l_width)
   .height(l_width)
 //   .linkCurvature(0.5)
   .enableZoomPanInteraction(false)
   .graphData(gData)
   .nodeCanvasObject(({ img, x, y }, ctx) => {
   const size = 20;
   ctx.drawImage(img, x - size / 2, y - size / 2, size, size);})
   .nodeRelSize(8)
   .linkWidth(3)
   .linkLineDash(link => link.dashed && [dashLen, gapLen]);

 // Dash animation
 const st = +new Date();
 const dashAnimateTime = 300; // time to animate a single dash
 (function animate() {
   const t = ((+new Date() - st) % dashAnimateTime) / dashAnimateTime;
   const lineDash = t < 0.5 ? [0, gapLen * t * 2, dashLen, gapLen * (1 - t * 2)] : [dashLen * (t - 0.5) * 2, gapLen, dashLen * (1 - (t - 0.5) * 2), 0];
   Graph.linkLineDash(link => link.dashed && lineDash);

 requestAnimationFrame(animate);})();
 }


export function Render3DGraph(elem,l_width){
  function RainBowColor(length, maxLength)
  {
  
      var i = (length * 255 / maxLength);
      var r = Math.round(Math.sin(1.666 * i + 3) * 127 + 128);
      var g = Math.round(Math.sin(2.666 * i + 2) * 127 + 128);
      var b = Math.round(Math.sin(3.666 * i + 1) * 127 + 128);
      return 'rgb(' + r + ',' + g + ',' + b + ')'
  } 

  const graph = ForceGraph3D()(elem)
      .backgroundColor('#F5F5F5')
      .width(l_width)
      .height(l_width*0.75)
      .jsonUrl('https://raw.githubusercontent.com/Akshay-A-Kulkarni/Twitter-Network-Analysis/master/Miscellaneous/ClausetNewmanMoore.json')
      // .jsonUrl('https://raw.githubusercontent.com/Akshay-A-Kulkarni/Twitter-Network-Analysis/master/Miscellaneous/GirvanNewman.json')
      .nodeLabel(node => node.id)
      .enableNodeDrag(false)
      .nodeVal(node => Math.pow(node.Degree, 2))
      .nodeOpacity(0.9)
      .nodeResolution(16)
      .nodeColor(node => RainBowColor(node.CNM_Label,43))
      .nodeLabel(node =>  `<span style='background-color:#000000'>| NodeID - ${node.id} <br> |  Name : ${node.hashtag_name} <br> | CommunityLabel : ${node.CNM_Label}</span>`)
      .linkColor(link => link.color != 0 ? RainBowColor(link.color,43): 'rgb(169,169,169)')
      .linkOpacity(0.4)
      .linkWidth(0)
      .warmupTicks(100)
      .linkResolution(6);


  const linkForce = graph
    .d3Force('link')
    .distance(link => link.color == 0 ? settings.interCommunityDistance : settings.intraCommunityDistance); 

  // Define GUI
  const Settings = function() {
    this.intraCommunityDistance = 150;
    this.interCommunityDistance = 3000;
  };  
  const settings = new Settings();
  const gui = new dat.GUI({ autoPlace: false } );  
  // gui.domElement.id = cntrls;
  const controllerOne = gui.add(settings, 'intraCommunityDistance', -100, 1000);
  const controllerTwo = gui.add(settings, 'interCommunityDistance', -1000, 10000);  

  controllerOne.onChange(updateLinkDistance);
  controllerTwo.onChange(updateLinkDistance); 
  // JS code to manipulate force interactions using Edge properties I assign during generating CNM communities

  function updateLinkDistance() {
    linkForce.distance(link => link.color == 0  ? settings.interCommunityDistance : settings.intraCommunityDistance);
    graph.numDimensions(3); // Re-heat simulation
  } 

}