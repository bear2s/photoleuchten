webpackJsonp([2],{"+x6L":function(t,a,n){"use strict";var s=n("yqLL"),e=n("YXP+"),o=n("0phU");a.a={components:{PlFooter:s.a,PlHeader:e.a,LangSelect:o.a}}},"/V+z":function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("footer",{staticClass:"footer toolbar"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row middle-xs"},[n("div",{staticClass:"col-xs-6"},[n("span",{staticClass:"copyright"},[t._v("© "+t._s(t.copyright))])]),n("div",{staticClass:"col-xs-6 end-xs"},[n("nuxt-link",{attrs:{to:"contact"},domProps:{textContent:t._s(t.$t("links.contact"))}}),n("br"),n("nuxt-link",{attrs:{to:"impressum"},domProps:{textContent:t._s(t.$t("links.legal"))}})],1)])])])},e=[],o={render:s,staticRenderFns:e};a.a=o},"0phU":function(t,a,n){"use strict";function s(t){n("Up8Q")}var e=n("vpaZ"),o=n("CJ8B"),i=n("VU/8"),r=s,c=i(e.a,o.a,r,"data-v-d5d267f8",null);a.a=c.exports},Bcr7:function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"pl-app"},[n("pl-header"),n("div",{staticClass:"row end-xs"},[n("div",{staticClass:"col-xs-12"},[n("lang-select")],1)]),n("main",[n("div",{staticClass:"content"},[n("nuxt")],1)]),n("pl-footer")],1)},e=[],o={render:s,staticRenderFns:e};a.a=o},CJ8B:function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"lang-select"},[n("span",{on:{click:function(a){t.setLang("en")}}},[t._v("english")]),t._v("\n  |\n  "),n("span",{on:{click:function(a){t.setLang("de")}}},[t._v("deutsch")])])},e=[],o={render:s,staticRenderFns:e};a.a=o},"L/4e":function(t,a,n){var s=n("XGtE");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("2fc4dff1",s,!0)},Ma2J:function(t,a,n){"use strict";function s(t){n("L/4e")}Object.defineProperty(a,"__esModule",{value:!0});var e=n("+x6L"),o=n("Bcr7"),i=n("VU/8"),r=s,c=i(e.a,o.a,r,null,null);a.default=c.exports},TW85:function(t,a,n){var s=n("psMv");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("5e52fcff",s,!0)},Up8Q:function(t,a,n){var s=n("naTJ");"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n("rjj0")("71decdfd",s,!0)},XGtE:function(t,a,n){a=t.exports=n("FZ+f")(!1),a.push([t.i,".pl-app{background:#424242;color:#fbb03b}.pl-app .toolbar{background:#202020;height:64px}.pl-app .toolbar .container,.pl-app .toolbar .middle-xs{height:100%}.pl-app main{min-height:calc(100vh - 128px)}.pl-app main .content{margin-top:2rem}",""])},"YXP+":function(t,a,n){"use strict";function s(t){n("TW85")}var e=n("o+Pn"),o=n("VU/8"),i=s,r=o(null,e.a,i,"data-v-a4cba4f2",null);a.a=r.exports},iPC3:function(t,a,n){t.exports=n.p+"img/logo.05396be.png"},mFur:function(t,a,n){"use strict";var s=new Date;a.a={data:function(){return{startYear:"2017",year:""+s.getFullYear()}},computed:{copyright:function(){return"photoleuchten.com "+(this.year===this.startYear?this.year:this.startYear+" - "+this.year)}}}},naTJ:function(t,a,n){a=t.exports=n("FZ+f")(!1),a.push([t.i,".lang-select>span[data-v-d5d267f8]:hover{cursor:pointer}",""])},"o+Pn":function(t,a,n){"use strict";var s=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("header",{staticClass:"top-toolbar toolbar"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row middle-xs"},[s("div",{staticClass:"col-xs-6 start-xs"},[s("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{attrs:{src:n("iPC3"),height:"45px",width:"auto"}})])],1),s("div",{staticClass:"col-xs-6 end-xs nav"},[s("nuxt-link",{attrs:{to:"/products"}},[t._v(t._s(t.$t("links.products")))]),s("nuxt-link",{attrs:{to:"/about"}},[t._v(t._s(t.$t("links.about")))]),s("nuxt-link",{attrs:{to:"/contact"}},[t._v(t._s(t.$t("links.contact")))])],1)])])])},e=[],o={render:s,staticRenderFns:e};a.a=o},psMv:function(t,a,n){a=t.exports=n("FZ+f")(!1),a.push([t.i,".logo[data-v-a4cba4f2]{text-decoration:none;color:inherit}.logo h1 span[data-v-a4cba4f2]:first-of-type{border:1px solid;padding-left:5px;padding-right:5px;margin-right:1rem}.nav a[data-v-a4cba4f2]{text-transform:uppercase;text-decoration:none;padding:0 .25rem}.nav a.nuxt-link-active[data-v-a4cba4f2]{text-decoration:underline}",""])},vpaZ:function(t,a,n){"use strict";a.a={methods:{setLang:function(t){-1!==["en","de"].indexOf(t)&&(this.$store.commit("SET_LANG",t),this.$i18n.locale=this.$store.state.locale)}}}},yqLL:function(t,a,n){"use strict";var s=n("mFur"),e=n("/V+z"),o=n("VU/8"),i=o(s.a,e.a,null,null,null);a.a=i.exports}});
//# sourceMappingURL=default.29505b52bd01a67d368a.js.map