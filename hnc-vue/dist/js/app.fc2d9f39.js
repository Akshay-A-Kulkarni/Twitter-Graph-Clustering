(function(t){function e(e){for(var s,r,o=e[0],c=e[1],l=e[2],u=0,h=[];u<o.length;u++)r=o[u],Object.prototype.hasOwnProperty.call(i,r)&&i[r]&&h.push(i[r][0]),i[r]=0;for(s in c)Object.prototype.hasOwnProperty.call(c,s)&&(t[s]=c[s]);d&&d(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),a()}function a(){for(var t,e=0;e<n.length;e++){for(var a=n[e],s=!0,o=1;o<a.length;o++){var c=a[o];0!==i[c]&&(s=!1)}s&&(n.splice(e--,1),t=r(r.s=a[0]))}return t}var s={},i={app:0},n=[];function r(e){if(s[e])return s[e].exports;var a=s[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,r),a.l=!0,a.exports}r.m=t,r.c=s,r.d=function(t,e,a){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(a,s,function(e){return t[e]}.bind(null,s));return a},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var d=c;n.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"034f":function(t,e,a){"use strict";var s=a("85ec"),i=a.n(s);i.a},"050b":function(t,e,a){t.exports=a.p+"img/twitter-tile.6fcdb706.svg"},"56d7":function(t,e,a){"use strict";a.r(e);a("e260"),a("e6cf"),a("cca6"),a("a79d");var s=a("2b0e"),i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("section",{staticClass:"hero is-fullheight is-default"},[t._m(0),s("div",{staticClass:"hero-body"},[s("div",{staticClass:"container has-text-centered"},[s("div",{staticClass:"columns",attrs:{id:"brand_head"}},[s("div",{ref:"logo_container",staticClass:"column is-6 is-offset-1"},[s("img",{staticClass:"float-content",attrs:{src:a("dd10"),alt:"Logo",width:"100%"}})]),t._m(1)]),s("div",{staticClass:"section"},[s("div",{staticClass:"columns is-vcentered"},[t._m(2),s("div",{staticClass:"column"},[s("div",{ref:"logo_graph",attrs:{id:"logo_graph"}}),t._m(3)])])]),s("br"),s("br"),t._m(4),s("br"),s("br"),t._m(5),s("div",{staticClass:"section has-text-left",attrs:{id:"CD"}},[s("div",{staticClass:"container tool-info"},[s("h3",{staticClass:"subtitle is-3"},[t._v("Community Detection")]),s("div",{staticClass:"columns is-vcentered"},[s("div",{ref:"cd_graph",staticClass:"column is-10 is-offset-1"}),s("div",{ref:"controls"})])])])])]),t._m(6)])])},n=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"hero-head"},[s("nav",{staticClass:"navbar"},[s("div",{staticClass:"container"},[s("div",{staticClass:"navbar-brand"},[s("a",{staticClass:"navbar-item",attrs:{href:"../"}},[s("img",{attrs:{src:a("050b"),alt:"Logo"}})]),s("span",{staticClass:"navbar-burger burger",attrs:{"data-target":"navbarMenu"}},[s("span"),s("span"),s("span")])]),s("div",{staticClass:"navbar-menu",attrs:{id:"navbarMenu"}},[s("div",{staticClass:"navbar-end"},[s("div",{staticClass:"tabs is-right"},[s("ul",[s("li",{staticClass:"is-active"},[s("a",[t._v("Home")])]),s("li",[s("a",{attrs:{href:""}},[t._v("Examples")])]),s("li",[s("a",{attrs:{href:""}},[t._v("Features")])]),s("li",[s("a",{attrs:{href:"#arch"}},[t._v("Schema")])]),s("li",[s("a",{attrs:{href:""}},[t._v("Help")])])])])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-5 is-offset-0"},[a("h1",{staticClass:"title is-2 has-text-left"},[a("span",[t._v("#")]),t._v("ashtag"),a("br"),t._v("Network"),a("br"),t._v("Clustering ")]),a("h2",{staticClass:"subtitle is-4 has-text-left"},[t._v(" Community detection for intuitive analysis on hashtag graphs ")]),a("br"),a("p",{staticClass:"has-text-justified"},[a("a",{staticClass:"button is-medium is-info is-outlined"},[t._v(" Learn more ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"column is-half has-text-justified"},[a("div",{staticClass:"content tool-info"},[a("p",{staticClass:"subtitle is-3"},[t._v("Prelude")]),a("p"),a("p",[t._v("This tool using Python and NetworkX creates graph networks using containing Hashtags as nodes linked based on co-occurrence of two such #s within a tweet.")]),a("p",[t._v("The tool scrapes aforementioned tweets containing the seed hashtag, using a Python package called Tweepy.")]),a("ul",{attrs:{type:"circle"}},[a("li",[t._v("Allows easy access to a few weeks of tweets")]),a("li",[t._v("Used to set a Minimum of 3 hashtags per tweet in order to facilitate our graph creation heuristic of hashtag co-occurrence.")]),a("li",[t._v("Removes words synonymous to the seed hashtag eg in case of '#COVID19', all variants of 'Covid' and 'Corona' would be removed as they would be redundant")])]),a("p",[t._v("This project is focused on Twitter, but our tool could be adapted to scrape hashtags from many other social networks.")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"has-text-centered is-family-monospace has-text-info is-italic"},[a("span",[t._v("Tip: drag the birds to see the live graph functionality")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"section has-text-left"},[a("h2",{staticClass:"subtitle is-3"},[t._v("Algorithms")]),a("div",{staticClass:"columns tool-info is-vcentered"},[a("div",{staticClass:"column is-vcentered  content tool-info"},[a("p",{staticClass:"is-strong"},[t._v("The final version of the tool was fitted with two different algorithms:")]),a("br"),a("p",{staticClass:"subtitle is-5"},[t._v("Clauset-Newman-Moore:")]),a("ul",{attrs:{type:"circle"}},[a("li",[t._v(" A modularity based algo. that operates faster than GN "),a("code",[t._v(" Time comp. O(log^2n) or O(nlog^2n)")]),t._v(".")]),a("li",[t._v("Works by comparing the fraction of edges within a module of nodes to the fraction that would be observed if the connects were random. It starts by treating each node as its own community, then adds the two communities that most increase the modularity.")]),a("li",[t._v("Process repeats until any further merges decreases modularity. Covid graph Modularity : 0.7892. ")])]),a("br"),a("p",{staticClass:"subtitle is-5"},[t._v("Girval-Newmann:")]),a("ul",{attrs:{type:"circle"}},[a("li",[t._v("Calculates the Betweeness-Centrality of all edges, and selectively removes the ones with the highest score. ")]),a("li",[t._v("Then recalculates and repeats until all communities have been detected.")]),a("li",[t._v("Slower than CNM (approx 10-12 minutes; "),a("code",[t._v("TC: O(E^2N)")]),t._v(", but typically returns results with higher modularity scores (Modularity: 0.8035).")])])])])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"section has-text-left ",attrs:{id:"arch"}},[s("div",{staticClass:"container tool-info"},[s("p",{staticClass:"subtitle is-3"},[t._v("Tool Architecture")]),s("div",{staticClass:"columns is-vcentered"},[s("div",{staticClass:"column is-7"},[s("img",{staticClass:"grow",attrs:{src:a("aec4"),alt:"Arch",width:"100%"}}),s("div",{staticClass:"has-text-centered is-family-monospace has-text-info is-italic"},[s("span",[s("br"),t._v("Architecture & Process Diagram")])])]),s("div",{staticClass:"column is-5 has-text-justified"},[s("ol",{staticStyle:{"font-size":"0.9rem"}},[s("li",[t._v("The data is fetched from the respective API with the given search parameters ")]),s("li",[t._v("Then tweepy establishes a stream and maintains the connection while handling connection errors and timeouts.")]),s("li",[t._v("The streamed data is filtered based on the restrictions specified and hashtag network generator code processes the tweet to extract and retain info relevant for graph building")]),s("li",[t._v("The processed data is stored periodically in Bigquery table for easy and quick access.")]),s("li",[t._v("This mined data is then fed to the custom graph generator code which returns a graph object based on the heuristic established before.")]),s("li",[t._v("The graph object is then used to compute various attributes and is then fed to community detection algorithm ")]),s("li",[t._v("Along with the graph data, the community assignments are attached to the graph obj then exported to JSON payload files for visualisation and gets stored remotely")]),s("li",[t._v("The JSON is fetched from github into the visualization environment and then processed accordingly to create rich and interactive D3/WebGL renders of a 3D network and displayed to the user for visual analysis and control.")])])])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hero-foot"},[a("footer",{staticClass:"footer"},[a("div",{staticClass:"container level"},[a("div",{staticClass:"level-item has-text-centered"},[a("div",[a("p",{staticClass:"title"},[t._v("3,456")]),a("p",{staticClass:"heading"},[t._v("Tweets")])])]),a("div",{staticClass:"level-item has-text-centered"},[a("div",[a("p",{staticClass:"heading"},[t._v("Following")]),a("p",{staticClass:"title"},[t._v("123")])])]),a("div",{staticClass:"level-item has-text-centered"},[a("div",[a("p",{staticClass:"heading"},[t._v("Followers")]),a("p",{staticClass:"title"},[t._v("456K")])])]),a("div",{staticClass:"level-item has-text-centered"},[a("div",[a("p",{staticClass:"heading"},[t._v("Likes")]),a("p",{staticClass:"title"},[t._v("789")])])])])])])}],r=(a("4de4"),a("d81d"),a("d3b7"),a("ddb0"),a("2909")),o=a("de47");function c(t,e){var s=new Image;s.src=a("e23b");var i=25,n={nodes:Object(r["a"])(Array(i).keys()).map((function(t){return{id:t,img:s}})),links:Object(r["a"])(Array(i).keys()).filter((function(t){return t})).map((function(t){return{source:t,target:Math.round(Math.random()*(t-1)),dashed:!0}}))},c=t,l=e,d=9,u=10,h=Object(o["a"])()(c).width(l).height(l).enableZoomPanInteraction(!1).graphData(n).nodeCanvasObject((function(t,e){var a=t.img,s=t.x,i=t.y,n=20;e.drawImage(a,s-n/2,i-n/2,n,n)})).nodeRelSize(8).linkWidth(3).linkLineDash((function(t){return t.dashed&&[d,u]})),f=+new Date,v=300;(function t(){var e=(+new Date-f)%v/v,a=e<.5?[0,u*e*2,d,u*(1-2*e)]:[d*(e-.5)*2,u,d*(1-2*(e-.5)),0];h.linkLineDash((function(t){return t.dashed&&a})),requestAnimationFrame(t)})()}a("99af");var l=a("ac32"),d=a("8992");function u(t,e){function a(t,e){var a=255*t/e,s=Math.round(127*Math.sin(1.666*a+3)+128),i=Math.round(127*Math.sin(2.666*a+2)+128),n=Math.round(127*Math.sin(3.666*a+1)+128);return"rgb("+s+","+i+","+n+")"}var s=Object(l["a"])()(t).backgroundColor("#F5F5F5").width(e).height(.75*e).jsonUrl("https://raw.githubusercontent.com/Akshay-A-Kulkarni/Twitter-Network-Analysis/master/Miscellaneous/ClausetNewmanMoore.json").nodeLabel((function(t){return t.id})).enableNodeDrag(!1).nodeVal((function(t){return Math.pow(t.Degree,2)})).nodeOpacity(.9).nodeResolution(16).nodeColor((function(t){return a(t.CNM_Label,43)})).nodeLabel((function(t){return"<span style='background-color:#000000'>| NodeID - ".concat(t.id," <br> |  Name : ").concat(t.hashtag_name," <br> | CommunityLabel : ").concat(t.CNM_Label,"</span>")})).linkColor((function(t){return 0!=t.color?a(t.color,43):"rgb(169,169,169)"})).linkOpacity(.4).linkWidth(0).warmupTicks(100).linkResolution(6),i=s.d3Force("link").distance((function(t){return 0==t.color?r.interCommunityDistance:r.intraCommunityDistance})),n=function(){this.intraCommunityDistance=150,this.interCommunityDistance=3e3},r=new n,o=new d["a"].GUI({autoPlace:!1}),c=o.add(r,"intraCommunityDistance",-100,1e3),u=o.add(r,"interCommunityDistance",-1e3,1e4);function h(){i.distance((function(t){return 0==t.color?r.interCommunityDistance:r.intraCommunityDistance})),s.numDimensions(3)}c.onChange(h),u.onChange(h)}var h={name:"App",components:{},methods:{},mounted:function(){var t=this.$refs.logo_graph,e=this.$refs.cd_graph,a=this.$refs.logo_container.clientWidth,s=this.$refs.cd_graph.clientWidth;c(t,a),u(e,s)}},f=h,v=(a("034f"),a("2877")),m=Object(v["a"])(f,i,n,!1,null,null,null),p=m.exports;a("92c6");s["a"].config.productionTip=!1,new s["a"]({render:function(t){return t(p)}}).$mount("#app")},"85ec":function(t,e,a){},aec4:function(t,e,a){t.exports=a.p+"img/arch.cfbe1442.png"},dd10:function(t,e,a){t.exports=a.p+"img/tgraph.e34cfd8a.svg"},e23b:function(t,e,a){t.exports=a.p+"img/twitter-official.be6d3cd8.svg"}});
//# sourceMappingURL=app.fc2d9f39.js.map