webpackJsonp([2],{Et1h:function(e,t,n){(e.exports=n("FZ+f")(!1)).push([e.i,".title[data-v-0c41d7d6]{margin-top:50px}.info[data-v-0c41d7d6]{font-weight:300;color:#9aabb1;margin:0;margin-top:10px}",""])},GK7c:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("SP67"),i=n("Q+UP"),r=!1;var s=function(e){r||n("xJ4n")},l=n("VU/8")(a.a,i.a,!1,s,"data-v-0c41d7d6",null);l.options.__file="pages/ueber.vue",t.default=l.exports},JPEe:function(e,t,n){"use strict";t.a={name:"contact",transition:"slide-left",asyncData:function(e){var t=e.store,n=e.route;return t.dispatch("setLanguageKey","contact"===n.name?"en":"de")},data:function(){var e=this;return{valid:!1,message:"",messageRules:[function(t){return!!t||e.$t("required_field")}],email:"",emailRules:[function(t){return!!t||e.$t("required_field")},function(t){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(t)||e.$t("enter_valid_email")}]}}}},"Q+UP":function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)};a._withStripped=!0;var i={render:a,staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("h2",[e._v("ÜBER PHOTOLEUCHTEN")]),n("p",[e._v("\n      Inspirierende, großformatige Fotografien in einem eigens dafür geschaffenem Rahmen leuchten zu lassen, war die\n      Idee und Geburt von PHOTOLEUCHTEN.\n    ")]),n("p",[e._v("\n      Den Anfang bildeten verschiedene auf Planen gedruckte Motive, die auf einen Holzrahmen gespannt und von innen\n      beleuchtet wurden.\n      Inzwischen sind zu den bespannten Rahmen quadratische Lichtkästen mit illuminierten Fotografien und große runde\n      Lichtobjekte, die z.B. mit einem strukturiertem Japanpapier bespannt sind oder als Frontseite einen Fotodruck\n      auf Acrylglas haben, hinzu gekommen. Die Rahmen werden von einer lokalen Schreinerei gefertigt. Sie werden dort\n      auch und lackiert oder von mir weiterbearbeitet, z.B. mit Blattmetall vergoldet. Die Basis für die Motive bilden\n      meine eigenen Fotografien, aus denen durch die Wahl des Ausschnitts, der Farben, der Kontraste etc. ein Bild\n      geschaffen wird, das durch die Ausleuchtung einen speziellen Effekt erfährt. Das jeweilige Motiv, der Rahmen und\n      das Licht (Lichtstärke - und Farbe) sind individuell aufeinander abgestimmt und werden mit viel Liebe zum Detail\n      entworfen und gebaut.\n    ")]),n("p",[e._v("\n      Die Leuchten sollen dem Betrachter in unbeleuchteten und beleuchtetem Zustand Freude bereiten und einen Raum in\n      neuem Licht erstrahlen lassen.\n    ")]),n("p",[e._v("\n      Alle Leuchten und Lichtobjekte sind handgefertigte Unikate und in verschiedenen Größen und technischen\n      Ausstattungen erhältlich.\n    ")]),n("p",[e._v("\n      Auf Wunsch gestalte ich auch Lichtobjekte nach individuellen Wünschen oder eigenen Motiven. Anfragen und\n      Bestellungen gerne an "),n("a",{attrs:{href:"mailto:photoleuchten@yahoo.com"}},[e._v("photoleuchten@yahoo.com")]),e._v(".\n    ")]),n("p",{staticClass:"mt-3"},[e._v("\n      Sylvia Bär"),n("br"),e._v("\n      Designerin und Inhaberin von PHOTOLEUCHTEN.\n    ")])])],1)}]};t.a=i},SP67:function(e,t,n){"use strict";t.a={transition:"slide-left",asyncData:function(e){return e.store.dispatch("setLanguageKey","de")}}},Vzjs:function(e,t,n){"use strict";var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{"xs-12":""}},[n("v-form",{staticStyle:{"max-width":"800px",margin:"auto"},attrs:{action:"https://formspree.io/photoleuchten@yahoo.com",method:"POST"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:e.$t("first_name"),name:"firstname"}})],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:e.$t("last_name"),name:"lastname"}})],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:e.$t("email_address"),required:"",rules:e.emailRules,name:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{attrs:{xs12:""}},[n("v-text-field",{attrs:{label:e.$t("message"),name:"body",required:"",rules:e.messageRules,"multi-line":""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1)],1),n("v-layout",{attrs:{row:""}},[n("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[n("v-btn",{attrs:{disabled:!e.valid,type:"submit"}},[e._v(e._s(e.$t("send"))+"\n          ")])],1)],1)],1)],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};t.a=i},fBFx:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("JPEe"),i=n("Vzjs"),r=n("VU/8")(a.a,i.a,!1,null,null,null);r.options.__file="pages/contact.vue",t.default=r.exports},hRDj:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("jQ0w"),i=n("VU/8")(a.a,null,!1,null,null,null);i.options.__file="pages/kontakt.vue",t.default=i.exports},jQ0w:function(e,t,n){"use strict";var a=n("fBFx");a.default.name="kontakt",t.a=a.default},xJ4n:function(e,t,n){var a=n("Et1h");"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);n("rjj0")("bac6cd64",a,!1)}});