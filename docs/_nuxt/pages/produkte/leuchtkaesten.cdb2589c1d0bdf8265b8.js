(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{215:function(t,e,n){},220:function(t,e,n){"use strict";var o=n(215);n.n(o).a},221:function(t,e,n){},227:function(t,e,n){"use strict";var o={21:"Salt & Pepper",22:"Macarons",23:"Tea",24:"Beach I",25:"2Blue",26:"Clouds",27:"Mushroom I",28:"Mushroom II",29:"Rice",30:"Tree I",31:"Tree II",32:"Tree III"},r={name:"SquareObjects",data:function(){return{dialog:!1,selectedMotif:null,quadMotivesLightOn:!1,showModal:!1}},computed:{quadMotives:function(){for(var t=[],i=21;i<33;i++)t.push({file:"q".concat(i,"_"),label:o[i]});return t}},watch:{selectedMotif:function(t,e){this.dialog=!!t,!t&&e&&(this.selectedMotif=null)}},methods:{onQuadMotivesLightOnChanged:function(t){this.quadMotivesLightOn=t.value},motifClicked:function(t){this.$vuetify.breakpoint.xsOnly||(this.selectedMotif=this.selectedMotif===t?null:t)}}},l=(n(220),n(8)),c=n(14),h=n.n(c),d=(n(221),n(68)),v=n(104),f=n(108),m=n(106),w=n(105),x=n(25),_=n(67),y=n(1),k=n(107),C=n(6),O=Object.assign||function(t){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var e in source)Object.prototype.hasOwnProperty.call(source,e)&&(t[e]=source[e])}return t};function $(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var M={name:"v-dialog",directives:{ClickOutside:_.a},mixins:[d.a,v.a,f.a,m.a,w.a,x.a],props:{disabled:Boolean,persistent:Boolean,fullscreen:Boolean,fullWidth:Boolean,noClickAnimation:Boolean,light:Boolean,dark:Boolean,maxWidth:{type:[String,Number],default:"none"},origin:{type:String,default:"center center"},width:{type:[String,Number],default:"auto"},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"}},data:function(){return{animate:!1,animateTimeout:null,stackClass:"v-dialog__content--active",stackMinZIndex:200}},computed:{classes:function(){var t;return $(t={},("v-dialog "+this.contentClass).trim(),!0),$(t,"v-dialog--active",this.isActive),$(t,"v-dialog--persistent",this.persistent),$(t,"v-dialog--fullscreen",this.fullscreen),$(t,"v-dialog--scrollable",this.scrollable),$(t,"v-dialog--animated",this.animate),t},contentClasses:function(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator:function(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive:function(t){t?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind())},fullscreen:function(t){this.isActive&&(t?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},beforeMount:function(){var t=this;this.$nextTick(function(){t.isBooted=t.isActive,t.isActive&&t.show()})},mounted:function(){"v-slot"===Object(y.i)(this,"activator",!0)&&Object(C.a)("v-dialog's activator slot must be bound, try '<template #activator=\"data\"><v-btn v-on=\"data.on>'",this)},beforeDestroy:function(){"undefined"!=typeof window&&this.unbind()},methods:{animateClick:function(){var t=this;this.animate=!1,this.$nextTick(function(){t.animate=!0,clearTimeout(t.animateTimeout),t.animateTimeout=setTimeout(function(){return t.animate=!1},150)})},closeConditional:function(t){return!(!this.isActive||this.$refs.content.contains(t.target))&&(this.persistent?(this.noClickAnimation||this.overlay!==t.target||this.animateClick(),!1):this.activeZIndex>=this.getMaxZIndex())},hideScroll:function(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):f.a.options.methods.hideScroll.call(this)},show:function(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$refs.content.focus(),this.bind()},bind:function(){window.addEventListener("focusin",this.onFocusin)},unbind:function(){window.removeEventListener("focusin",this.onFocusin)},onKeydown:function(t){if(t.keyCode===y.l.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;var e=this.getActivator();this.$nextTick(function(){return e&&e.focus()})}this.$emit("keydown",t)},onFocusin:function(t){var e=t.target;if(![document,this.$refs.content].includes(e)&&!this.$refs.content.contains(e)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some(function(t){return t.contains(e)})){var n=this.$refs.content.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');n.length&&n[0].focus()}},getActivator:function(t){if(this.$refs.activator)return this.$refs.activator.children.length>0?this.$refs.activator.children[0]:this.$refs.activator;if(t&&(this.activatedBy=t.currentTarget||t.target),this.activatedBy)return this.activatedBy;if(this.activatorNode){var e=Array.isArray(this.activatorNode)?this.activatorNode[0]:this.activatorNode,n=e&&e.elm;if(n)return n}return null},genActivator:function(){var t=this;if(!this.hasActivator)return null;var e=this.disabled?{}:{click:function(e){e.stopPropagation(),t.getActivator(e),t.disabled||(t.isActive=!t.isActive)}};if("scoped"===Object(y.i)(this,"activator")){var n=this.$scopedSlots.activator({on:e});return this.activatorNode=n,n}return this.$createElement("div",{staticClass:"v-dialog__activator",class:{"v-dialog__activator--disabled":this.disabled},ref:"activator",on:e},this.$slots.activator)}},render:function(t){var e=this,n=[],data={class:this.classes,ref:"dialog",directives:[{name:"click-outside",value:function(){e.isActive=!1},args:{closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],on:{click:function(t){t.stopPropagation()}}};this.fullscreen||(data.style={maxWidth:"none"===this.maxWidth?void 0:Object(y.b)(this.maxWidth),width:"auto"===this.width?void 0:Object(y.b)(this.width)}),n.push(this.genActivator());var dialog=t("div",data,this.showLazyContent(this.$slots.default));return this.transition&&(dialog=t("transition",{props:{name:this.transition,origin:this.origin}},[dialog])),n.push(t("div",{class:this.contentClasses,attrs:O({tabIndex:"-1"},this.getScopeIdAttrs()),on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.$createElement(k.a,{props:{root:!0,light:this.light,dark:this.dark}},[dialog])])),t("div",{staticClass:"v-dialog__container",style:{display:!this.hasActivator||this.fullWidth?"block":"inline-block"}},n)}},A=n(91),S=n(92),component=Object(l.a)(r,function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"products"},[n("v-layout",{attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("h1",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("square_headline_1")))]),t._v(" "),n("h2",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("square_headline")))])]),t._v(" "),n("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[n("pl-img",{attrs:{quality:90,"blur-up":"","file-name":"q0","img-type":"png",sizes:"99vw"}})],1),t._v(" "),n("v-flex",{attrs:{xs12:""}},[n("h2",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("battery_powered")))])]),t._v(" "),t._l(["q1","q2","q3","q4","q5","q6"],function(e,i){return n("v-flex",{key:e+i,staticClass:"text-xs-justify pa-1",staticStyle:{position:"relative"},attrs:{xs12:"",sm4:""}},[n("pl-img",{attrs:{"file-name":e,sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}}),t._v(" "),1===i?n("div",{staticClass:"text-xs-center",staticStyle:{bottom:"10px",width:"100%",position:"absolute"}},[t._v("Salt & Pepper\n      ")]):t._e(),t._v(" "),4===i?n("div",{staticClass:"text-xs-center",staticStyle:{bottom:"10px",width:"100%",position:"absolute"}},[t._v("Beach I\n      ")]):t._e()],1)}),t._v(" "),n("v-flex",{staticClass:"my-5",attrs:{xs12:""}},t._l(t.$t(["quad_desc"]),function(p,i){return n("p",{key:"quad_desc_"+i,staticClass:"text-xs-center"},[t._v("\n        "+t._s(p)+"\n      ")])}),0)],2),t._v(" "),n("v-layout",{staticClass:"mb-3",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:"",md8:""}},[n("no-ssr",[n("ul",{staticClass:"card pl-3",staticStyle:{height:"100%"}},[n("p",{staticClass:"pt-3"},[t._v(t._s(t.$t("battery_specs_headline")))]),t._v(" "),t._l(t.$t(["battery_specs"]),function(e,i){return n("li",{key:"---"+i},[t._v("\n            "+t._s(e)+"\n          ")])})],2)])],1),t._v(" "),n("v-flex",{staticClass:"pa-1 pb-0",attrs:{xs12:"",sm6:"",md4:""}},[n("pl-img",{attrs:{"file-name":"q7",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}})],1)],1),t._v(" "),n("v-layout",{staticClass:"justify-center mb-3",attrs:{row:"",wrap:""}},[n("v-flex",{attrs:{xs12:""}},[n("h2",{staticClass:"text-xs-center"},[t._v("\n        "+t._s(t.$t("products.selection"))+" \n        "),n("toggle-button",{attrs:{value:t.quadMotivesLightOn,color:{checked:"rgb(251, 176, 59)",unchecked:"#bfcbd9"},labels:{checked:t.$t("lightoff"),unchecked:t.$t("lighton")}},on:{change:t.onQuadMotivesLightOnChanged}})],1)]),t._v(" "),t._l(t.quadMotives,function(e,i){return n("v-flex",{key:"quad-motive-"+i,staticClass:"center-xs motive-item pr-1 pb-1",attrs:{xs6:"",sm3:"",md2:""}},[t._l([{lightOnShow:!1,fileNameEnd:"a"},{lightOnShow:!0,fileNameEnd:"b"}],function(o,s){return n("pl-img",{directives:[{name:"show",rawName:"v-show",value:t.quadMotivesLightOn===o.lightOnShow,expression:"quadMotivesLightOn === subItem.lightOnShow"}],key:e.label+"-"+s,staticClass:"list-item",staticStyle:{"":"hover { cursor: pointer }"},attrs:{"file-name":""+e.file+o.fileNameEnd,alt:e.label,sizes:"(max-width: 48em) 50vw, (min-width: 48em) 25vw, (min-width: 64em) 16vw, (max-width: 48em) 32vw"},nativeOn:{click:function(n){return t.motifClicked(e.file)}}})}),t._v(" "),n("div",{staticClass:"motive-label"},[t._v(t._s(e.label))])],2)})],2),t._v(" "),n("v-dialog",{attrs:{"max-height":"50vh","max-width":"50vw"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.selectedMotif?n("div",[n("pl-img",{directives:[{name:"show",rawName:"v-show",value:!1===t.quadMotivesLightOn,expression:"quadMotivesLightOn === false"}],attrs:{slot:"body",folder:"960","file-name":t.selectedMotif+"a",sizes:"70vw"},slot:"body"}),t._v(" "),n("pl-img",{directives:[{name:"show",rawName:"v-show",value:!0===t.quadMotivesLightOn,expression:"quadMotivesLightOn === true"}],attrs:{slot:"body",folder:"960","file-name":t.selectedMotif+"b",sizes:"70vw"},slot:"body"})],1):t._e()])],1)},[],!1,null,"0a7a9d58",null);e.a=component.exports;h()(component,{VDialog:M,VFlex:A.a,VLayout:S.a})},261:function(t,e,n){"use strict";n.r(e);n(51),n(77);var o,r=n(15),l={name:"Leuchtkaesten",transition:"slide-left",components:{SquareObjects:n(227).a},created:(o=Object(r.a)(regeneratorRuntime.mark(function t(){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.abrupt("return",this.$store.dispatch("setLanguageKey","de"));case 1:case"end":return t.stop()}},t,this)})),function(){return o.apply(this,arguments)}),head:function(){var path=this.$route.path.replace(/\/$/,"");return{title:"Photo-Leuchtkästen | Photoleuchten.com  ▶",htmlAttrs:{lang:"de"},meta:[{hid:"description",name:"description",content:"Finde deine handgemachte Leuchtbox in der Motivauswahl. Fotokunst in batteriebetriebenen LED-Leuchtkästen aus Holz mit unterschiedlichen Fotografien."}],link:[{hid:"canonical",rel:"canonical",href:"https://photoleuchten.com".concat(path)},{rel:"alternate",hreflang:"de",href:"https://photoleuchten.com/produkte/leuchtkaesten"},{rel:"alternate",hreflang:"en",href:"https://photoleuchten.com/en/products/light-boxes"}]}}},c=n(8),component=Object(c.a)(l,function(){var t=this.$createElement;return(this._self._c||t)("square-objects")},[],!1,null,null,null);e.default=component.exports}}]);