webpackJsonp([0],{150:function(t,e,n){n(192);var s=n(12)(n(159),n(183),null,null);t.exports=s.exports},151:function(t,e,n){n(189);var s=n(12)(n(160),n(180),"data-v-28e15ffa",null);t.exports=s.exports},152:function(t,e,n){n(188);var s=n(12)(n(161),n(179),"data-v-25d798ed",null);t.exports=s.exports},153:function(t,e,n){var s=n(12)(n(162),n(178),null,null);t.exports=s.exports},155:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){}}},156:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{setLang:function(t){-1!==["en","de"].indexOf(t)&&(this.$store.commit("SET_LANG",t),this.$i18n.locale=this.$store.state.locale)}}}},159:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(173),a=n.n(s),o=n(174),i=n.n(o),r=n(175),l=n.n(r);e.default={components:{PlFooter:a.a,PlHeader:i.a,LangSelect:l.a}}},160:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={transition:"slide-left",asyncData:function(t){return{name:t.req?"server":"client"}},head:function(){return{title:"About Page ("+this.name+"-side)"}}}},161:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={transition:"slide-left"}},162:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={transition:"slide-left",name:"app",mounted:function(){console.log(this.$i18n)}}},164:function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,".impressum[data-v-25d798ed]{font-family:sans-serif}",""])},165:function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,".title[data-v-28e15ffa]{margin-top:50px}.info[data-v-28e15ffa]{font-weight:300;color:#9aabb1;margin:0;margin-top:10px}.button[data-v-28e15ffa]{margin-top:50px}",""])},168:function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,".pl-app{background:#424242;color:#fbb03b}.pl-app .toolbar{background:#202020;height:64px}.pl-app .toolbar .container,.pl-app .toolbar .middle-xs{height:100%}.pl-app main{min-height:calc(100vh - 128px)}",""])},169:function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,".logo[data-v-a4cba4f2]{text-decoration:none;color:inherit}.logo h1 span[data-v-a4cba4f2]:first-of-type{border:1px solid;padding-left:5px;padding-right:5px;margin-right:1rem}.nav a[data-v-a4cba4f2]{text-decoration:none;padding:0 .25rem}",""])},171:function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,".lang-select>span[data-v-d5d267f8]:hover{cursor:pointer}",""])},172:function(t,e,n){t.exports=n.p+"img/logo.05396be.png"},173:function(t,e,n){var s=n(12)(null,n(187),null,null);t.exports=s.exports},174:function(t,e,n){n(193);var s=n(12)(n(155),n(184),"data-v-a4cba4f2",null);t.exports=s.exports},175:function(t,e,n){n(195);var s=n(12)(n(156),n(186),"data-v-d5d267f8",null);t.exports=s.exports},178:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row middle-xs"},[n("div",{staticClass:"col-xs-12 end-xs"},[n("h2",[t._v(t._s(t.$t("home.headline")))])])]),n("div",{staticClass:"row middle-xs"},[n("div",{staticClass:"col-xs-12"},[n("pl-img",{attrs:{fileName:"q1",sizes:"100vw",lazy:!1}})],1)])])},staticRenderFns:[]}},179:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement;t._self._c;return t._m(1)},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"col-xs-12"},[n("h1",[t._v("Impressum")]),n("h2",[t._v("Angaben gemäß § 5 TMG:")]),t._v("\n      Sylvia Bär"),n("br"),t._v("\n      Photoleuchten"),n("br"),t._v("\n      76137 Karlsruhe"),n("br"),n("h2",[t._v("Kontakt:")]),t._v("\n      E-Mail:"),n("br"),t._v("\n      photoleuchten@yahoo.com"),n("br"),n("h2",[t._v("Umsatzsteuer-ID:")]),t._v("\n      Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:"),n("br"),t._v("\n      DE304325864\n    ")])])},function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"container impressum"},[t._m(0)])}]}},180:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"container"},[n("h1",{staticClass:"title"},[t._v("\n    This page is loaded from the "+t._s(t.name)+"\n  ")]),"client"===t.name?n("h2",{staticClass:"info"},[t._v("\n    Please refresh the page\n  ")]):t._e(),n("nuxt-link",{staticClass:"button",attrs:{to:"/"}},[t._v("\n    Home page\n  ")])],1)},staticRenderFns:[]}},183:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pl-app"},[n("pl-header"),n("div",{staticClass:"row end-xs"},[n("div",{staticClass:"col-xs-12"},[n("lang-select")],1)]),n("main",[n("div",{staticClass:"content"},[n("nuxt")],1)]),n("pl-footer")],1)},staticRenderFns:[]}},184:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"top-toolbar toolbar"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row middle-xs"},[s("div",{staticClass:"col-xs-8 start-xs"},[s("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{attrs:{src:n(172),height:"45px",width:"auto"}})])],1),s("div",{staticClass:"col-xs-4 end-xs nav"},[s("nuxt-link",{attrs:{to:"/products"}},[t._v(t._s(t.$t("links.products")))])],1)])])])},staticRenderFns:[]}},186:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lang-select"},[n("span",{on:{click:function(e){t.setLang("en")}}},[t._v("english")]),t._v("\n  |\n  "),n("span",{on:{click:function(e){t.setLang("de")}}},[t._v("deutsch")])])},staticRenderFns:[]}},187:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer toolbar"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row middle-xs"},[t._m(0),n("div",{staticClass:"col-xs-6 end-xs"},[n("a",{attrs:{href:"mailto:photoleuchten@yahoo.com"},domProps:{textContent:t._s(t.$t("links.contact"))}}),n("br"),n("nuxt-link",{attrs:{to:"impressum"},domProps:{textContent:t._s(t.$t("links.legal"))}})],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-6"},[n("span",{staticClass:"copyright"},[t._v("© photoleuchten.com 2017")])])}]}},188:function(t,e,n){var s=n(164);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(25)("459c069e",s,!0)},189:function(t,e,n){var s=n(165);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(25)("0accf905",s,!0)},192:function(t,e,n){var s=n(168);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(25)("832f4c82",s,!0)},193:function(t,e,n){var s=n(169);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(25)("48bc2ba2",s,!0)},195:function(t,e,n){var s=n(171);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(25)("66416455",s,!0)}});