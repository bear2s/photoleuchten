(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{202:function(t,e,i){},205:function(t,e,i){"use strict";var s=i(202);i.n(s).a},206:function(t,e,i){},210:function(t,e,i){"use strict";var s={21:"Salt & Pepper",22:"Macarons",23:"Tea",24:"Beach I",25:"2Blue",26:"Clouds",27:"Mushroom I",28:"Mushroom II",29:"Rice",30:"Tree I",31:"Tree II",32:"Tree III"},a={name:"SquareObjects",data:function(){return{dialog:!1,selectedMotif:null,quadMotivesLightOn:!1,showModal:!1}},computed:{quadMotives:function(){for(var t=[],e=21;e<33;e++)t.push({file:"q".concat(e,"_"),label:s[e]});return t}},watch:{selectedMotif:function(t,e){this.dialog=!!t,!t&&e&&(this.selectedMotif=null)}},methods:{onQuadMotivesLightOnChanged:function(t){this.quadMotivesLightOn=t.value},motifClicked:function(t){this.$vuetify.breakpoint.xsOnly||(this.selectedMotif=this.selectedMotif===t?null:t)}}},n=(i(205),i(5)),o=i(10),l=i.n(o),r=(i(206),i(53)),c=i(92),d=i(96),h=i(94),u=i(93),v=i(23),m=i(52),f=i(1),p=i(95),_=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var s in i)Object.prototype.hasOwnProperty.call(i,s)&&(t[s]=i[s])}return t};function w(t,e,i){return e in t?Object.defineProperty(t,e,{value:i,enumerable:!0,configurable:!0,writable:!0}):t[e]=i,t}var g={name:"v-dialog",directives:{ClickOutside:m.a},mixins:[r.a,c.a,d.a,h.a,u.a,v.a],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t;return w(t={},("v-dialog "+this.contentClass).trim(),!0),w(t,"v-dialog--active",this.isActive),w(t,"v-dialog--persistent",this.persistent),w(t,"v-dialog--fullscreen",this.fullscreen),w(t,"v-dialog--scrollable",this.scrollable),w(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},mounted:function(){this.isBooted=this.isActive,this.isActive&&this.show()},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick(function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout(function(){return t.animate=!1},150)})},closeConditional:function(t){return!(this.$refs.content.contains(t.target)||!this.isActive)&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):Object(f.h)(this.$refs.content)>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):d.a.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.$listeners.keydown&&this.bind()},bind:function(){window.addEventListener("keydown",this.onKeydown)},unbind:function(){window.removeEventListener("keydown",this.onKeydown)},onKeydown:function(t){this.$emit("keydown",t)}},render:function(t){var e=this,i=[],s={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){return e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}};this.fullscreen||(s.style={maxWidth:"none"===this.maxWidth?void 0:Object(f.a)(this.maxWidth),width:"auto"===this.width?void 0:Object(f.a)(this.width)}),this.$slots.activator&&i.push(t("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},on:{click:function(t){t.stopPropagation(),e.disabled||(e.isActive=!e.isActive)}}},[this.$slots.activator]));var a=t("div",s,this.showLazyContent(this.$slots.default));return this.transition&&(a=t("transition",{props:{name:this.transition,origin:this.origin}},[a])),i.push(t("div",{class:this.contentClasses,attrs:_({tabIndex:"-1"},this.getScopeIdAttrs()),style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(p.a,{props:{root:!0,light:this.light,dark:this.dark}},[a])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.$slots.activator||this.fullWidth?"block":"inline-block"}},i)}},x=i(81),b=i(82),y=Object(n.a)(a,function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"products"},[i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("h1",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("square_headline")))])]),t._v(" "),i("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[i("pl-img",{attrs:{quality:90,"blur-up":"","file-name":"q0","img-type":"png",sizes:"99vw"}})],1),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("h2",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("battery_powered")))])]),t._v(" "),t._l(["q1","q2","q3","q4","q5","q6"],function(e,s){return i("v-flex",{key:e+s,staticClass:"text-xs-justify pa-1",staticStyle:{position:"relative"},attrs:{xs12:"",sm4:""}},[i("pl-img",{attrs:{"file-name":e,sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}}),t._v(" "),1===s?i("div",{staticClass:"text-xs-center",staticStyle:{bottom:"10px",width:"100%",position:"absolute"}},[t._v("Salt & Pepper\n        ")]):t._e(),t._v(" "),4===s?i("div",{staticClass:"text-xs-center",staticStyle:{bottom:"10px",width:"100%",position:"absolute"}},[t._v("Beach I\n        ")]):t._e()],1)}),t._v(" "),i("v-flex",{attrs:{xs12:""}},[i("p",[t._v(t._s(t.$t("quad_desc")))])])],2),t._v(" "),i("v-layout",{staticClass:"mb-3",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:"",md8:""}},[i("no-ssr",[i("ul",{staticClass:"card pl-3",staticStyle:{height:"100%"}},[i("li",{staticClass:"pt-3"},[t._v(t._s(t.$t("battery_specs_headline")))]),t._v(" "),t._l(t.$t(["battery_specs"]),function(e,s){return i("li",{key:"---"+s},[t._v("\n              "+t._s(e)+"\n            ")])})],2)])],1),t._v(" "),i("v-flex",{staticClass:"pa-1 pb-0",attrs:{xs12:"",sm6:"",md4:""}},[i("pl-img",{attrs:{"file-name":"q7",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}})],1)],1),t._v(" "),i("v-layout",{staticClass:"justify-center mb-3",attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("h2",[t._v("\n          "+t._s(t.$t("products.selection"))+" \n          "),i("toggle-button",{attrs:{value:t.quadMotivesLightOn,color:{checked:"rgb(251, 176, 59)",unchecked:"#bfcbd9"},labels:{checked:t.$t("lightoff"),unchecked:t.$t("lighton")}},on:{change:t.onQuadMotivesLightOnChanged}})],1)]),t._v(" "),t._l(t.quadMotives,function(e,s){return i("v-flex",{key:"quad-motive-"+s,staticClass:"center-xs motive-item pr-1 pb-1",attrs:{xs6:"",sm3:"",md2:""}},[t._l([{lightOnShow:!1,fileNameEnd:"a"},{lightOnShow:!0,fileNameEnd:"b"}],function(s,a){return i("pl-img",{directives:[{name:"show",rawName:"v-show",value:t.quadMotivesLightOn===s.lightOnShow,expression:"quadMotivesLightOn === subItem.lightOnShow"}],key:e.label+"-"+a,staticClass:"list-item",staticStyle:{"":"hover { cursor: pointer }"},attrs:{"file-name":""+e.file+s.fileNameEnd,alt:e.label,sizes:"(max-width: 48em) 50vw, (min-width: 48em) 25vw, (min-width: 64em) 16vw, (max-width: 48em) 32vw"},nativeOn:{click:function(i){t.motifClicked(e.file)}}})}),t._v(" "),i("div",{staticClass:"motive-label"},[t._v(t._s(e.label))])],2)})],2),t._v(" "),i("v-dialog",{attrs:{"max-height":"50vh","max-width":"50vw"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.selectedMotif?i("div",[i("pl-img",{directives:[{name:"show",rawName:"v-show",value:!1===t.quadMotivesLightOn,expression:"quadMotivesLightOn === false"}],attrs:{slot:"body",folder:"960","file-name":t.selectedMotif+"a",sizes:"70vw"},slot:"body"}),t._v(" "),i("pl-img",{directives:[{name:"show",rawName:"v-show",value:!0===t.quadMotivesLightOn,expression:"quadMotivesLightOn === true"}],attrs:{slot:"body",folder:"960","file-name":t.selectedMotif+"b",sizes:"70vw"},slot:"body"})],1):t._e()]),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{attrs:{xs12:""}},[i("h2",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("line_powered")))])]),t._v(" "),t._l(["q8","q9","q10","q11","q12","q13"],function(e,s){return i("v-flex",{key:e+"-"+s,staticClass:"text-xs-justify pa-1",staticStyle:{position:"relative"},attrs:{xs12:"",sm4:""}},[i("pl-img",{attrs:{"file-name":e,quality:85,sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}}),t._v(" "),1===s?i("div",{staticClass:"text-xs-center",staticStyle:{bottom:"10px",width:"100%",position:"absolute"}},[t._v("La Pedrera\n        ")]):t._e(),t._v(" "),4===s?i("div",{staticClass:"text-xs-center",staticStyle:{bottom:"10px",width:"100%",position:"absolute"}},[t._v("Spirals of a temple\n        ")]):t._e()],1)})],2),t._v(" "),i("v-layout",{attrs:{row:""}},[i("v-flex",{attrs:{xs12:""}},[i("div",[i("p",[t._v(t._s(t.$t("quad_linepower_desc")))])])])],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"mb-3",attrs:{xs12:"",md8:""}},[i("ul",{staticClass:"card pl-3",staticStyle:{height:"100%"}},[i("p",{staticClass:"pt-3"},[t._v(t._s(t.$t("battery_linepower_specs1_headline")))]),t._v(" "),t._l(t.$t(["battery_linepower_specs1"]),function(e,s){return i("li",{key:"battery-spec"+s},[t._v("\n            "+t._s(e)+"\n          ")])})],2)]),t._v(" "),i("v-flex",{staticClass:"pa-1 pb-0",attrs:{xs12:"",sm6:"",md4:""}},[i("pl-img",{attrs:{"file-name":"q14","img-type":"png",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}})],1)],1),t._v(" "),i("v-layout",{attrs:{row:"",wrap:""}},[i("v-flex",{staticClass:"mb-3",attrs:{xs12:"",md8:""}},[i("ul",{staticClass:"card pl-3",staticStyle:{height:"100%"}},[i("p",{staticClass:"pt-3"},[t._v(t._s(t.$t("battery_linepower_specs2_headline")))]),t._v(" "),t._l(t.$t(["battery_linepower_specs2"]),function(e,s){return i("li",{key:"battery-spec-second-"+s},[t._v("\n            "+t._s(e)+"\n          ")])})],2)]),t._v(" "),i("v-flex",{staticClass:"pa-1 pb-0",attrs:{xs12:"",sm6:"",md4:""}},[i("pl-img",{attrs:{"file-name":"q15","img-type":"png",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}})],1)],1)],1)},[],!1,null,"9d7e6582",null);y.options.__file="SquareObjects.vue";e.a=y.exports;l()(y,{VDialog:g,VFlex:x.a,VLayout:b.a})},231:function(t,e,i){"use strict";i.r(e);i(61);var s={transition:"slide-left",components:{SquareObjects:i(210).a},asyncData:function(t){var e=t.store;t.route;return e.dispatch("setLanguageKey","en")},head:function(){var t=this.$route.path.replace(/\/$/,"");return{title:"Square light objects | Photoleuchten.com  ▶",htmlAttrs:{lang:"en"},meta:[],link:[{hid:"canonical",rel:"canonical",href:"https://photoleuchten.com".concat(t)},{rel:"alternate",hreflang:"de",href:"https://photoleuchten.com/produkte/quadratische-objekte"},{rel:"alternate",hreflang:"en",href:"https://photoleuchten.com/en/products/square-objects"}]}}},a=i(5),n=Object(a.a)(s,function(){var t=this.$createElement;return(this._self._c||t)("square-objects")},[],!1,null,null,null);n.options.__file="square-objects.vue";e.default=n.exports}}]);