webpackJsonp([1],{43:function(e,t,s){var i=s(2)(s(47),s(55),null,null);e.exports=i.exports},44:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={name:"PlImg",props:{fileName:{type:String,required:!0},imgType:{type:String,default:"jpg"},folder:{type:String,default:"1920+"},lazy:{type:Boolean,default:!0},sizes:{type:String,default:"100vw"},imgSizes:{type:Array,default:function(){return["1920","1280","960","640","320"]}}},computed:{sizesComputed:function(){return 960===this.folder?["960","640","320"]:this.imgSizes},srcComputed:function(){return"/img/"+this.folder+"/"+this.fileName+"-"+this.sizesComputed[this.sizesComputed.length-1]+"."+this.imgType},srcsetComputed:function(){var e=this,t="";return this.sizesComputed.forEach(function(s,i){var r=i>0?" ":"",n=i!==e.sizesComputed.length-1?",":"";t+=r+"/img/"+e.folder+"/"+e.fileName+"-"+s+"."+e.imgType+" "+s+"w"+n}),t}}}},47:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s(54),r=s.n(i);t.default={name:"app",components:{PlImg:r.a},data:function(){return{nav2:!1,quadImgs:["q5","q2","q4","q3"],roundImgs:["r1","r5","r6","r4","r3","r7"]}}}},54:function(e,t,s){var i=s(2)(s(44),s(56),null,null);e.exports=i.exports},55:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"container"},[e._m(0),s("div",{staticClass:"row middle-xs"},[s("div",{staticClass:"col-xs-12"},[s("pl-img",{attrs:{fileName:"q1",sizes:"100vw",lazy:!1}})],1)]),s("div",{staticClass:"row middle-xs"},[s("h3",{staticClass:"col-xs-12"},[e._v("Quadratische Leuchtkästen")]),e._l(e.quadImgs,function(e,t){return s("div",{key:t,staticClass:"col-xs-6 col-sm-3"},[s("pl-img",{attrs:{fileName:e,sizes:"20vw",lazy:!0}})],1)})],2),s("div",{staticClass:"row middle-xs"},[s("h3",{staticClass:"col-xs-12"},[e._v("Runde Lichtobjekte")]),e._l(e.roundImgs,function(e,t){return s("div",{key:t,staticClass:"col-xs-6 col-sm-3"},[s("pl-img",{attrs:{fileName:e,sizes:"32vw",lazy:!0}})],1)})],2)])},staticRenderFns:[function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"row middle-xs"},[s("div",{staticClass:"col-xs-12 end-xs"},[s("h2",[e._v("Wandleuchten - Lichtobjekte - Photo + Licht")])])])}]}},56:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;return(e._self._c||t)("img",{attrs:{src:e.srcComputed,srcset:e.srcsetComputed,sizes:e.sizes}})},staticRenderFns:[]}}});