webpackJsonp([3],{"4EHq":function(t,e,s){"use strict";var n=s("NTpS"),r=s("J34g"),i=s("VU/8"),a=i(n.a,r.a,null,null,null);e.a=a.exports},"6MF9":function(t,e,s){"use strict";e.a={name:"pl-top-toolbar-items",props:{products:{type:Array,default:function(){return[]}}},computed:{productsLinkActive:function(){var t=this.$route.name.toLowerCase();return t.includes("products")||t.includes("produkte")}}}},"9VNp":function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-toolbar-items",{staticClass:"hidden-xs-only"},[s("v-btn",{attrs:{flat:"",to:"/",exact:""}},[t._v("Home")]),t.products.length?s("v-menu",{attrs:{bottom:"",left:""}},[s("v-btn",{class:{"btn--active":t.productsLinkActive},attrs:{slot:"activator",flat:"",dark:""},slot:"activator"},[t._v("\n      "+t._s(t.$t("links.products"))+"\n      "),s("v-icon",[t._v("arrow_drop_down")])],1),s("v-list",t._l(t.products,function(e,n){return s("v-list-tile",{key:n,attrs:{router:"",to:e.to}},[s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)}))],1):t._e(),s("v-btn",{attrs:{flat:"",to:"/about"}},[t._v(t._s(t.$t("links.about")))]),s("v-btn",{attrs:{flat:"",to:"/"+t.$t("links.contact").toLowerCase()}},[t._v(t._s(t.$t("links.contact")))])],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},B5Ch:function(t,e,s){"use strict";var n=s("jRvF"),r=s("KpGn"),i=s("zyl+"),a=s("4EHq");e.a={components:{PlFooter:n.a,PlTopToolbarItems:r.a,SidebarContent:a.a,LanguageSelect:i.a},data:function(){return{drawer:!1}},computed:{items:function(){return[{icon:"info",title:this.$t("links.about"),to:"/about"},{icon:"mail",title:this.$t("links.contact"),to:"/contact"}]},products:function(){return[{title:this.$t("products.round.headline"),to:"/products/round-objects"},{title:this.$t("products.quad.headline"),to:"/products/square-objects"},{title:this.$t("products.framed.headline"),to:"/products/framed-objects"}]}}}},Bcr7:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{attrs:{dark:""}},[n("v-navigation-drawer",{attrs:{persistent:!0,permanent:!1,temporary:!0,app:""},model:{value:t.drawer,callback:function(e){t.drawer=e},expression:"drawer"}},[n("v-toolbar",{attrs:{flat:"",app:""}},[n("v-toolbar-title",[n("nuxt-link",{staticClass:"logo-link",attrs:{to:"/"}},[n("img",{staticClass:"pt-2",attrs:{src:s("iPC3"),height:"40px",width:"auto"}})])],1)],1),n("sidebar-content",{ref:"sidebar",attrs:{items:t.items,products:t.products}})],1),n("v-toolbar",{attrs:{fixed:"",app:""}},[n("v-toolbar-side-icon",{staticClass:"hidden-sm-and-up",on:{click:function(e){t.drawer=!t.drawer}}}),n("v-toolbar-title",[n("nuxt-link",{staticClass:"logo-link",attrs:{to:"/"}},[n("img",{staticClass:"pt-2 hidden-xs-only",attrs:{src:s("iPC3"),height:"40px",width:"auto"}}),n("img",{staticClass:"pt-2 hidden-sm-and-up",attrs:{src:s("tU+p"),height:"40px",width:"auto"}})])],1),n("v-spacer"),n("pl-top-toolbar-items",{attrs:{products:t.products}}),n("language-select")],1),n("main",[n("v-content",[n("v-container",{attrs:{fluid:""}},[n("nuxt")],1)],1)],1),n("pl-footer")],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},J34g:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-list",[s("v-list-tile",{attrs:{router:"",exact:"",to:"/",value:!1}},[s("v-list-tile-action",[s("v-icon",[t._v("home")])],1),s("v-list-tile-content",[s("v-list-tile-title",[t._v("Home")])],1)],1),s("v-list-group",[s("v-list-tile",{attrs:{slot:"item"},slot:"item"},[s("v-list-tile-action",[s("v-icon",[t._v("list")])],1),s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(t.$t("links.products")))])],1),s("v-list-tile-action",[s("v-icon",[t._v("arrow_drop_down")])],1)],1),t._l(t.products,function(e){return s("v-list-tile",{key:e.title,attrs:{router:"",to:e.to}},[s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.title))])],1)],1)})],2),t._l(t.items,function(e,n){return s("v-list-tile",{key:n,attrs:{router:"",to:e.to}},[s("v-list-tile-action",[s("v-icon",{domProps:{innerHTML:t._s(e.icon)}})],1),s("v-list-tile-content",[s("v-list-tile-title",{domProps:{textContent:t._s(e.title)}})],1)],1)})],2)},r=[],i={render:n,staticRenderFns:r};e.a=i},KpGn:function(t,e,s){"use strict";var n=s("6MF9"),r=s("9VNp"),i=s("VU/8"),a=i(n.a,r.a,null,null,null);e.a=a.exports},Ma2J:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=s("B5Ch"),r=s("Bcr7"),i=s("VU/8"),a=i(n.a,r.a,null,null,null);e.default=a.exports},NTpS:function(t,e,s){"use strict";e.a={name:"sidebar-content",props:{items:{type:Array,default:function(){return[]}},products:{type:Array,default:function(){return[]}}}}},SeKK:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-menu",{attrs:{bottom:"",left:""}},[s("v-btn",{attrs:{slot:"activator",icon:"",dark:""},slot:"activator"},[s("v-icon",[t._v("language")])],1),s("v-list",t._l(t.items,function(e,n){return s("v-list-tile",{key:n,on:{click:function(s){t.setLang(e.lang)}}},[s("v-list-tile-content",[s("v-list-tile-title",[t._v(t._s(e.lang)+" - "+t._s(e.title))])],1)],1)}))],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},Y8Bd:function(t,e,s){"use strict";e.a={name:"pl-footer",data:function(){return{startYear:"2017",year:""+(new Date).getFullYear()}},computed:{copyright:function(){return(this.year===this.startYear?this.year:this.startYear+" - "+this.year)+" PHOTOLEUCHTEN.COM ALL RIGHTS RESERVED"}}}},aqU3:function(t,e,s){"use strict";e.a={name:"language-select",data:function(){return{items:[{lang:"en",title:"english"},{lang:"de",title:"deutsch"}]}},methods:{setLang:function(t){this.$store.commit("SET_LANG",t),this.$i18n.locale=t}}}},bpq2:function(t,e,s){"use strict";var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-footer",{staticClass:"pt-4 pb-1",attrs:{fixed:!1,app:""}},[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"text-xs-right pb-1",attrs:{xs12:""}},[s("nuxt-link",{attrs:{to:"/contact"},domProps:{textContent:t._s(t.$t("links.contact"))}})],1),s("v-flex",{staticClass:"text-xs-right pb-1",attrs:{xs12:""}},[s("nuxt-link",{attrs:{to:"/impressum"},domProps:{textContent:t._s(t.$t("links.legal"))}})],1),s("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[s("span",[t._v("© "+t._s(t.copyright))])])],1)],1)},r=[],i={render:n,staticRenderFns:r};e.a=i},iPC3:function(t,e,s){t.exports=s.p+"img/logo.05396be.png"},jRvF:function(t,e,s){"use strict";var n=s("Y8Bd"),r=s("bpq2"),i=s("VU/8"),a=i(n.a,r.a,null,null,null);e.a=a.exports},"tU+p":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFUAAABVCAMAAAAPK1hoAAAAM1BMVEX///9HcEz////////////////////////////////////////////////////////////vgbwFAAAAEXRSTlP/ACBAEICf378wj6/vz1BgcHsE1ccAAAE9SURBVHgB7dgHjsJADIVhe3qIQ3L/y255SGmDWmy2+lelfSiPDv2u2LqrqquuhvhRslYzfRRdddVVV139YSre9IOpGkslVEu0UmOjXW0wUW90KuvVNFJXUauFHkkrpcnK6tRMaLozmiuhrFIHQkt3N0GjNpw/864ZZxWFGtbD7UYJ11U8qSqfqhjlujqtx99t0K6rODfxqYSzL6uYdeKuSaXGx6F2tZUyVweVWl+yAIWnc4tSzXwKUlOqkvhQErwKlCqVZ++NSatS7tHCapXKOkIq6ypqlSTjmRCyELqzXkW1tUrrJFpVqCuzWm3zyZU7G6icyt68JTZRmdMyCshxhmmhnurVxVrFVUZrNREmMFZ5xN6DsRrX156lyiNt2alpMlfBNnMVZbFWUZpLE3O176Wq/6fpqquuuvqregetjRzWhJcXxwAAAABJRU5ErkJggg=="},"zyl+":function(t,e,s){"use strict";var n=s("aqU3"),r=s("SeKK"),i=s("VU/8"),a=i(n.a,r.a,null,null,null);e.a=a.exports}});
//# sourceMappingURL=default.2c91b17a08d7478dfe77.js.map