webpackJsonp([4],{"4EHq":function(t,e,s){"use strict";var i=s("NTpS"),n=s("J34g"),r=s("VU/8"),a=r(i.a,n.a,null,null,null);e.a=a.exports},"6MF9":function(t,e,s){"use strict";e.a={name:"pl-top-toolbar-items",props:{products:{type:Array,default:function(){return[]}}},computed:{productsLinkActive:function(){var t=this.$route.name.toLowerCase();return t.includes("products")||t.includes("produkte")}}}},"9VNp":function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-toolbar-items",{staticClass:"hidden-xs-only"},[s("v-btn",{attrs:{flat:"",to:"/",exact:""}},[t._v("HOME")]),t.products.length?s("v-menu",{attrs:{bottom:"",left:""}},[s("v-btn",{class:{"btn--active":t.productsLinkActive},attrs:{slot:"activator",flat:"",dark:""},slot:"activator"},[t._v("\n      "+t._s(t.$t("links.products"))+" ▼\n    ")]),s("v-list",t._l(t.products,function(e,i){return s("v-list-tile",{key:i,attrs:{router:"",to:e.to}},[s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}))],1):t._e(),s("v-btn",{attrs:{flat:"",to:"/"+("de"===t.$store.state.locale?"ueber":"about")}},[t._v(t._s(t.$t("links.about")))]),s("v-btn",{attrs:{flat:"",to:"/"+t.$t("links.contact").toLowerCase()}},[t._v(t._s(t.$t("links.contact")))])],1)},n=[],r={render:i,staticRenderFns:n};e.a=r},B5Ch:function(t,e,s){"use strict";var i=s("jRvF"),n=s("KpGn"),r=s("zyl+"),a=s("4EHq");e.a={head:function(){var t="de"===this.$store.state.locale;return{title:t?"Lichtobjekte - Leuchtkästen - beleuchtete Fotos und Papiere":"Light Objects - Light Boxes - illuminated Photos and Papers",htmlAttrs:{lang:this.$store.state.locale},meta:[{hid:"description",name:"description",content:t?"Handgefertigte Lichtobjekte, illuminierte Rahmen, Fotos mit Hintergrundbeleuchtung, Papiere mit Hintergrundbeleuchtung, Rahmen in verschiedenen Formen und Größen erhältlich, LED-Beleuchtung, individuelle Kundenanfertigung möglich":"Handcrafted light objects, illuminated frames, photos with background lighting, papers with background lighting, frames available in various shapes and sizes, LED lighting, individual customer production possible"},{hid:"keywords",name:"keywords",content:t?"Sylvia Bär, kunst, künstler, künstlerin, lichtobjekte, karlsruhe, handgefertigt, innenarchitektur, lichtsystem, design":"Sylvia Bär, art, artist, light objects, karlsruhe, handcrafted, interior design, light system, design"}]}},components:{PlFooter:i.a,PlTopToolbarItems:n.a,SidebarContent:a.a,LanguageSelect:r.a},data:function(){return{drawer:!1}},computed:{isDe:function(){return"de"===this.$store.state.locale},items:function(){return[{icon:"info",title:this.$t("links.about"),to:this.isDe?"/about":"/ueber"},{icon:"mail",title:this.$t("links.contact"),to:"/"+this.$t("links.contact")}]},products:function(){return[{title:this.$t("products.quad.headline"),to:this.isDe?"/produkte/quadratische-objekte":"/products/square-objects"},{title:this.$t("products.round.headline"),to:this.isDe?"/produkte/runde-objekte":"/products/round-objects"},{title:this.$t("products.framed.headline"),to:this.isDe?"/produkte/gerahmte-objekte":"/products/framed-objects"}]}}}},Bcr7:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-app",{attrs:{dark:""}},[i("v-navigation-drawer",{attrs:{persistent:"",fixed:"",permanent:!1,temporary:"",app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[i("v-toolbar",{attrs:{flat:"",app:""}},[i("v-toolbar-title",[i("nuxt-link",{staticClass:"logo-link",attrs:{to:"/"}},[i("pl-img",{staticClass:"pt-1",attrs:{fileName:"logo","img-type":"png",sizes:"252px",height:"40px",width:"auto"}})],1)],1)],1),i("sidebar-content",{ref:"sidebar",attrs:{items:t.items,products:t.products}})],1),i("v-toolbar",{attrs:{fixed:"",app:""}},[i("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){t.drawer=!t.drawer}}},[i("img",{attrs:{src:s("Z074"),width:"24px"}})]),i("v-toolbar-title",[i("nuxt-link",{staticClass:"logo-link",attrs:{to:"/"}},[i("pl-img",{staticClass:"hidden-xs-only pt-1",attrs:{fileName:"logo","img-type":"png",sizes:"252px",height:"40px",width:"auto"}}),i("img",{staticClass:"pt-2 hidden-sm-and-up",attrs:{src:s("tU+p"),height:"40px",width:"auto"}})],1)],1),i("v-spacer"),i("pl-top-toolbar-items",{attrs:{products:t.products}}),i("language-select")],1),i("v-content",[i("v-container",{attrs:{fluid:""}},[i("nuxt")],1)],1),i("pl-footer")],1)},n=[],r={render:i,staticRenderFns:n};e.a=r},J34g:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-list",[s("v-list-tile",{attrs:{router:"",exact:"",to:"/",value:!1}},[s("v-list-tile-action"),s("v-list-tile-content",[s("v-list-tile-title",[t._v("Home")])],1)],1),s("v-list-group",[s("v-list-tile",{attrs:{slot:"item"},slot:"item"},[s("v-list-tile-action"),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(t.$t("links.products"))+" ▼")])],1)],1),t._l(t.products,function(e){return s("v-list-tile",{key:e.title,attrs:{router:"",to:e.to}},[s("v-list-tile-action"),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2),t._l(t.items,function(e,i){return s("v-list-tile",{key:i,attrs:{router:"",to:e.to}},[s("v-list-tile-action"),s("v-list-tile-content",[s("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})],2)},n=[],r={render:i,staticRenderFns:n};e.a=r},KpGn:function(t,e,s){"use strict";var i=s("6MF9"),n=s("9VNp"),r=s("VU/8"),a=r(i.a,n.a,null,null,null);e.a=a.exports},Ma2J:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s("B5Ch"),n=s("Bcr7"),r=s("VU/8"),a=r(i.a,n.a,null,null,null);e.default=a.exports},NTpS:function(t,e,s){"use strict";e.a={name:"sidebar-content",props:{items:{type:Array,default:function(){return[]}},products:{type:Array,default:function(){return[]}}}}},SeKK:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-menu",{attrs:{bottom:"",left:""}},[s("v-btn",{staticStyle:{"text-transform":"lowercase",color:"inherit"},attrs:{slot:"activator",icon:"",dark:""},slot:"activator"},[t._v("\n    "+t._s(t.$store.state.locale)+"\n  ")]),s("v-list",t._l(t.items,function(e,i){return s("v-list-tile",{key:i,on:{click:function(s){t.setLang(e.lang)}}},[s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.lang)+" - "+t._s(e.title))])],1)],1)}))],1)},n=[],r={render:i,staticRenderFns:n};e.a=r},Y8Bd:function(t,e,s){"use strict";e.a={name:"pl-footer",data:function(){return{startYear:"2017",year:""+(new Date).getFullYear()}},computed:{copyright:function(){return(this.year===this.startYear?this.year:this.startYear+" - "+this.year)+" PHOTOLEUCHTEN.COM ALL RIGHTS RESERVED"}}}},Z074:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAQAAAAB/ecQqAAAAAnRSTlMAAHaTzTgAAAAWSURBVHgBY6AFYP4PBAewUoPbFMoBAE11OPW6yVcZAAAAAElFTkSuQmCC"},aqU3:function(t,e,s){"use strict";e.a={name:"language-select",data:function(){return{items:[{lang:"en",title:"english"},{lang:"de",title:"deutsch"}]}},methods:{setLang:function(t){this.$store.commit("SET_LANG",t),this.$i18n.locale=t}}}},bpq2:function(t,e,s){"use strict";var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-footer",{staticClass:"pt-4 pb-1",attrs:{fixed:!1,app:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-right pb-1",attrs:{xs12:""}},[s("nuxt-link",{attrs:{to:"/contact"},domProps:{textContent:t._s(t.$t("links.contact"))}})],1),s("v-flex",{staticClass:"text-xs-right pb-1",attrs:{xs12:""}},[s("nuxt-link",{attrs:{to:"/impressum"},domProps:{textContent:t._s(t.$t("links.legal"))}})],1),s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("span",[t._v("© "+t._s(t.copyright))])])],1)],1)},n=[],r={render:i,staticRenderFns:n};e.a=r},jRvF:function(t,e,s){"use strict";var i=s("Y8Bd"),n=s("bpq2"),r=s("VU/8"),a=r(i.a,n.a,null,null,null);e.a=a.exports},"tU+p":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABVCAMAAAAPK1hoAAAAM1BMVEX///9HcEz////////////////////////////////////////////////////////////vgbwFAAAAEXRSTlP/ACBAEICf378wj6/vz1BgcHsE1ccAAAE9SURBVHgB7dgHjsJADIVhe3qIQ3L/y255SGmDWmy2+lelfSiPDv2u2LqrqquuhvhRslYzfRRdddVVV139YSre9IOpGkslVEu0UmOjXW0wUW90KuvVNFJXUauFHkkrpcnK6tRMaLozmiuhrFIHQkt3N0GjNpw/864ZZxWFGtbD7UYJ11U8qSqfqhjlujqtx99t0K6rODfxqYSzL6uYdeKuSaXGx6F2tZUyVweVWl+yAIWnc4tSzXwKUlOqkvhQErwKlCqVZ++NSatS7tHCapXKOkIq6ypqlSTjmRCyELqzXkW1tUrrJFpVqCuzWm3zyZU7G6icyt68JTZRmdMyCshxhmmhnurVxVrFVUZrNREmMFZ5xN6DsRrX156lyiNt2alpMlfBNnMVZbFWUZpLE3O176Wq/6fpqquuuvqregetjRzWhJcXxwAAAABJRU5ErkJggg=="},"zyl+":function(t,e,s){"use strict";var i=s("aqU3"),n=s("SeKK"),r=s("VU/8"),a=r(i.a,n.a,null,null,null);e.a=a.exports}});
//# sourceMappingURL=default.e087b7f71a981c583a1d.js.map