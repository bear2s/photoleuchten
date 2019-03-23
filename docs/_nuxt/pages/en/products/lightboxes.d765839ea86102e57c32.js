(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{169:function(t,e,n){},174:function(t,e,n){"use strict";var o=n(169);n.n(o).a},175:function(t,e,n){},181:function(t,e,n){"use strict";const o={21:"Salt & Pepper",22:"Macarons",23:"Tea",24:"Beach I",25:"2Blue",26:"Clouds",27:"Mushroom I",28:"Mushroom II",29:"Rice",30:"Tree I",31:"Tree II",32:"Tree III"};var l={name:"SquareObjects",data:()=>({dialog:!1,selectedMotif:null,quadMotivesLightOn:!1,showModal:!1}),computed:{quadMotives(){const t=[];for(let i=21;i<33;i++)t.push({file:"q".concat(i,"_"),label:o[i]});return t}},watch:{selectedMotif(t,e){this.dialog=!!t,!t&&e&&(this.selectedMotif=null)}},methods:{onQuadMotivesLightOnChanged(t){this.quadMotivesLightOn=t.value},motifClicked(t){this.$vuetify.breakpoint.xsOnly||(this.selectedMotif=this.selectedMotif===t?null:t)}}},r=(n(174),n(7)),c=n(9),h=n.n(c),d=(n(175),n(40)),v=n(79),f=n(83),m=n(81),w=n(80),x=n(17),_=n(39),y=n(1),k=n(82),C=n(5),O=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var M={name:"v-dialog",directives:{ClickOutside:_.a},mixins:[d.a,v.a,f.a,m.a,w.a,x.a],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t;return $(t={},("v-dialog "+this.contentClass).trim(),!0),$(t,"v-dialog--active",this.isActive),$(t,"v-dialog--persistent",this.persistent),$(t,"v-dialog--fullscreen",this.fullscreen),$(t,"v-dialog--scrollable",this.scrollable),$(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount:function(){var t=this;this.$nextTick(function(){t.isBooted=t.isActive,t.isActive&&t.show()})},mounted:function(){"v-slot"===Object(y.h)(this,"activator",!0)&&Object(C.a)("v-dialog's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick(function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout(function(){return t.animate=!1},150)})},closeConditional:function(t){return!(this.$refs.content.contains(t.target)||!this.isActive)&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):Object(y.i)(this.$refs.content)>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):f.a.options.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.$listeners.keydown&&this.bind()},bind:function(){window.addEventListener("keydown",this.onKeydown)},unbind:function(){window.removeEventListener("keydown",this.onKeydown)},onKeydown:function(t){this.$emit("keydown",t)},genActivator:function(){var t=this;if(!this.hasActivator)return null;var e=this.disabled?{}:{click:function(e){e.stopPropagation(),t.disabled||(t.isActive=!t.isActive)}};if("scoped"===Object(y.h)(this,"activator")){var n=this.$scopedSlots.activator({on:e});return this.activatorNode=n,n}return this.$createElement("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},on:e},this.$slots.activator)}},render:function(t){var e=this,n=[],data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){return e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}};this.fullscreen||(data.style={maxWidth:"none"===this.maxWidth?void 0:Object(y.a)(this.maxWidth),width:"auto"===this.width?void 0:Object(y.a)(this.width)}),n.push(this.genActivator());var dialog=t("div",data,this.showLazyContent(this.$slots.default));return this.transition&&(dialog=t("transition",{props:{name:this.transition,origin:this.origin}},[dialog])),n.push(t("div",{class:this.contentClasses,attrs:O({tabIndex:"-1"},this.getScopeIdAttrs()),style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(k.a,{props:{root:!0,light:this.light,dark:this.dark}},[dialog])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},n)}},S=n(66),A=n(67),component=Object(r.a)(l,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("h1",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("square_headline_1")))]),t._v(" "),n("h2",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("square_headline")))])]),t._v(" "),n("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[n("pl-img",{attrs:{quality:90,"blur-up":"","file-name":"q0","img-type":"png",sizes:"99vw"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("h2",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("battery_powered")))])]),t._v(" "),t._l(["q1","q2","q3","q4","q5","q6"],function(e,i){return n("v-flex",{key:e+i,staticClass:"text-xs-justify pa-1",staticStyle:{position:"relative"},attrs:{xs12:"",sm4:""}},[n("pl-img",{attrs:{"file-name":e,sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}}),t._v(" "),1===i?n("div",{staticClass:"text-xs-center",staticStyle:{bottom:"10px",width:"100%",position:"absolute"}},[t._v("Salt & Pepper\n      ")]):t._e(),t._v(" "),4===i?n("div",{staticClass:"text-xs-center",staticStyle:{bottom:"10px",width:"100%",position:"absolute"}},[t._v("Beach I\n      ")]):t._e()],1)}),t._v(" "),n("v-flex",{staticClass:"my-5",attrs:{xs12:""}},t._l(t.$t(["quad_desc"]),function(p,i){return n("p",{key:"quad_desc_"+i,staticClass:"text-xs-center"},[t._v("\n        "+t._s(p)+"\n      ")])}),0)],2),t._v(" "),n("v-layout",{staticClass:"mb-3",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md8:""}},[n("no-ssr",[n("ul",{staticClass:"card pl-3",staticStyle:{height:"100%"}},[n("p",{staticClass:"pt-3"},[t._v(t._s(t.$t("battery_specs_headline")))]),t._v(" "),t._l(t.$t(["battery_specs"]),function(e,i){return n("li",{key:"---"+i},[t._v("\n            "+t._s(e)+"\n          ")])})],2)])],1),t._v(" "),n("v-flex",{staticClass:"pa-1 pb-0",attrs:{xs12:"",sm6:"",md4:""}},[n("pl-img",{attrs:{"file-name":"q7",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}})],1)],1),t._v(" "),n("v-layout",{staticClass:"justify-center mb-3",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("h2",{staticClass:"text-xs-center"},[t._v("\n        "+t._s(t.$t("products.selection"))+" \n        "),n("toggle-button",{attrs:{value:t.quadMotivesLightOn,color:{checked:"rgb(251, 176, 59)",unchecked:"#bfcbd9"},labels:{checked:t.$t("lightoff"),unchecked:t.$t("lighton")}},on:{change:t.onQuadMotivesLightOnChanged}})],1)]),t._v(" "),t._l(t.quadMotives,function(e,i){return n("v-flex",{key:"quad-motive-"+i,staticClass:"center-xs motive-item pr-1 pb-1",attrs:{xs6:"",sm3:"",md2:""}},[t._l([{lightOnShow:!1,fileNameEnd:"a"},{lightOnShow:!0,fileNameEnd:"b"}],function(o,s){return n("pl-img",{directives:[{name:"show",rawName:"v-show",value:t.quadMotivesLightOn===o.lightOnShow,expression:"quadMotivesLightOn === subItem.lightOnShow"}],key:e.label+"-"+s,staticClass:"list-item",staticStyle:{"":"hover { cursor: pointer }"},attrs:{"file-name":""+e.file+o.fileNameEnd,alt:e.label,sizes:"(max-width: 48em) 50vw, (min-width: 48em) 25vw, (min-width: 64em) 16vw, (max-width: 48em) 32vw"},nativeOn:{click:function(n){return t.motifClicked(e.file)}}})}),t._v(" "),n("div",{staticClass:"motive-label"},[t._v(t._s(e.label))])],2)})],2),t._v(" "),n("v-dialog",{attrs:{"max-height":"50vh","max-width":"50vw"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.selectedMotif?n("div",[n("pl-img",{directives:[{name:"show",rawName:"v-show",value:!1===t.quadMotivesLightOn,expression:"quadMotivesLightOn === false"}],attrs:{slot:"body",folder:"960","file-name":t.selectedMotif+"a",sizes:"70vw"},slot:"body"}),t._v(" "),n("pl-img",{directives:[{name:"show",rawName:"v-show",value:!0===t.quadMotivesLightOn,expression:"quadMotivesLightOn === true"}],attrs:{slot:"body",folder:"960","file-name":t.selectedMotif+"b",sizes:"70vw"},slot:"body"})],1):t._e()])],1)},[],!1,null,"0a7a9d58",null);e.a=component.exports;h()(component,{VDialog:M,VFlex:S.a,VLayout:A.a})},218:function(t,e,n){"use strict";n.r(e);n(49);var o=n(10),l={name:"Lightboxes",transition:"slide-left",components:{SquareObjects:n(181).a},created(){var t=this;return Object(o.a)(function*(){return t.$store.dispatch("setLanguageKey","en")})()},head(){const path=this.$route.path.replace(/\/$/,"");return{title:"Photo light boxes | Photoleuchten.com  ▶",htmlAttrs:{lang:"en"},meta:[{hid:"description",name:"description",content:"Find your handmade light box in the motif selection. Photo art in battery-powered wooden  LED light boxes with different photographs."}],link:[{hid:"canonical",rel:"canonical",href:"https://photoleuchten.com".concat(path)},{rel:"alternate",hreflang:"de",href:"https://photoleuchten.com/produkte/leuchtkaesten"},{rel:"alternate",hreflang:"en",href:"https://photoleuchten.com/en/products/lightboxes"}]}}},r=n(7),component=Object(r.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("square-objects")},[],!1,null,null,null);e.default=component.exports}}]);