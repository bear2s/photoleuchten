webpackJsonp([0],{154:function(t,e,n){n(196);var s=n(12)(n(163),n(187),null,null);t.exports=s.exports},159:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={mounted:function(){}}},160:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={methods:{setLang:function(t){-1!==["en","de"].indexOf(t)&&(this.$store.commit("SET_LANG",t),this.$i18n.locale=this.$store.state.locale)}}}},163:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=n(177),o=n.n(s),a=n(178),i=n.n(a),r=n(179),l=n.n(r);e.default={components:{PlFooter:o.a,PlHeader:i.a,LangSelect:l.a}}},172:function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,".pl-app{background:#424242;color:#fbb03b}.pl-app .toolbar{background:#202020;height:64px}.pl-app .toolbar .container,.pl-app .toolbar .middle-xs{height:100%}.pl-app main{min-height:calc(100vh - 128px)}",""])},173:function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,".logo[data-v-a4cba4f2]{text-decoration:none;color:inherit}.logo h1 span[data-v-a4cba4f2]:first-of-type{border:1px solid;padding-left:5px;padding-right:5px;margin-right:1rem}.nav a[data-v-a4cba4f2]{text-decoration:none;padding:0 .25rem}",""])},175:function(t,e,n){e=t.exports=n(13)(void 0),e.push([t.i,".lang-select>span[data-v-d5d267f8]:hover{cursor:pointer}",""])},176:function(t,e,n){t.exports=n.p+"img/logo.05396be.png"},177:function(t,e,n){var s=n(12)(null,n(191),null,null);t.exports=s.exports},178:function(t,e,n){n(197);var s=n(12)(n(159),n(188),"data-v-a4cba4f2",null);t.exports=s.exports},179:function(t,e,n){n(199);var s=n(12)(n(160),n(190),"data-v-d5d267f8",null);t.exports=s.exports},187:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"pl-app"},[n("pl-header"),n("div",{staticClass:"row end-xs"},[n("div",{staticClass:"col-xs-12"},[n("lang-select")],1)]),n("main",[n("div",{staticClass:"content"},[n("nuxt")],1)]),n("pl-footer")],1)},staticRenderFns:[]}},188:function(t,e,n){t.exports={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"top-toolbar toolbar"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row middle-xs"},[s("div",{staticClass:"col-xs-8 start-xs"},[s("nuxt-link",{staticClass:"logo",attrs:{to:"/"}},[s("img",{attrs:{src:n(176),height:"45px",width:"auto"}})])],1),s("div",{staticClass:"col-xs-4 end-xs nav"},[s("nuxt-link",{attrs:{to:"/products"}},[t._v(t._s(t.$t("links.products")))])],1)])])])},staticRenderFns:[]}},190:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"lang-select"},[n("span",{on:{click:function(e){t.setLang("en")}}},[t._v("english")]),t._v("\n  |\n  "),n("span",{on:{click:function(e){t.setLang("de")}}},[t._v("deutsch")])])},staticRenderFns:[]}},191:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("footer",{staticClass:"footer toolbar"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row middle-xs"},[t._m(0),n("div",{staticClass:"col-xs-6 end-xs"},[n("a",{attrs:{href:"mailto:photoleuchten@yahoo.com"},domProps:{textContent:t._s(t.$t("links.contact"))}}),n("br"),n("nuxt-link",{attrs:{to:"impressum"},domProps:{textContent:t._s(t.$t("links.legal"))}})],1)])])])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-xs-6"},[n("span",{staticClass:"copyright"},[t._v("© photoleuchten.com 2017")])])}]}},196:function(t,e,n){var s=n(172);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(25)("832f4c82",s,!0)},197:function(t,e,n){var s=n(173);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(25)("48bc2ba2",s,!0)},199:function(t,e,n){var s=n(175);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(25)("66416455",s,!0)}});