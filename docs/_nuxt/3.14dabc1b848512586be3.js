(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{218:function(t,n,e){},241:function(t,n,e){"use strict";var o=e(218);e.n(o).a},242:function(t,n,e){},244:function(t,n,e){"use strict";e.r(n);var o=e(127).version,r={name:"HomeParallaxSection",data:function(){return{bust:o}},computed:{ww:function(){return window&&window.innerWidth<=400?400:window&&window.innerWidth<=600?600:window&&window.innerWidth<=800?800:window&&window.innerWidth<=1e3?1e3:window&&window.innerWidth<=1200?1200:window&&window.innerWidth<=1400?1400:window&&window.innerWidth<=1600?1600:window&&window.innerWidth<=1800?1800:window&&window.innerWidth<=2e3?2e3:window&&window.innerWidth<=2400?2400:window&&window.innerWidth<=2800?2800:"auto"},wh:function(){return window&&window.innerHeight||500}}},l=(e(241),e(7)),w=e(12),h=e.n(w),d=(e(242),e(0).a.extend({name:"translatable",props:{height:Number},data:function(){return{elOffsetTop:0,parallax:0,parallaxDist:0,percentScrolled:0,scrollTop:0,windowHeight:0,windowBottom:0}},computed:{imgHeight:function(){return this.objHeight()}},beforeDestroy:function(){window.removeEventListener("scroll",this.translate,!1),window.removeEventListener("resize",this.translate,!1)},methods:{calcDimensions:function(){var t=this.$el.getBoundingClientRect();this.scrollTop=window.pageYOffset,this.parallaxDist=this.imgHeight-this.height,this.elOffsetTop=t.top+this.scrollTop,this.windowHeight=window.innerHeight,this.windowBottom=this.scrollTop+this.windowHeight},listeners:function(){window.addEventListener("scroll",this.translate,!1),window.addEventListener("resize",this.translate,!1)},objHeight:function(){throw new Error("Not implemented !")},translate:function(){this.calcDimensions(),this.percentScrolled=(this.windowBottom-this.elOffsetTop)/(parseInt(this.height)+this.windowHeight),this.parallax=Math.round(this.parallaxDist*this.percentScrolled)}}})),c=e(3),f=Object(c.a)(d).extend({name:"v-parallax",props:{alt:{type:String,default:""},height:{type:[String,Number],default:500},src:String},data:function(){return{isBooted:!1}},computed:{styles:function(){return{display:"block",opacity:this.isBooted?1:0,transform:"translate(-50%, "+this.parallax+"px)"}}},watch:{parallax:function(){this.isBooted=!0}},mounted:function(){this.init()},methods:{init:function(){var t=this,img=this.$refs.img;img&&(img.complete?(this.translate(),this.listeners()):img.addEventListener("load",function(){t.translate(),t.listeners()},!1))},objHeight:function(){return this.$refs.img.naturalHeight}},render:function(t){var n=t("div",{staticClass:"v-parallax__image-container"},[t("img",{staticClass:"v-parallax__image",style:this.styles,attrs:{src:this.src,alt:this.alt},ref:"img"})]),content=t("div",{staticClass:"v-parallax__content"},this.$slots.default);return t("div",{staticClass:"v-parallax",style:{height:this.height+"px"},on:this.$listeners},[n,content])}}),component=Object(l.a)(r,function(){var t=this.$createElement,n=this._self._c||t;return n("section",{staticStyle:{position:"relative"}},[[n("pl-img",{attrs:{quality:95,"file-name":"t0","img-type":"jpg",height:this.wh,width:this.ww,sizes:"100vw"}})]],2)},[],!1,null,"2cbe6c50",null);n.default=component.exports;h()(component,{VParallax:f})}}]);