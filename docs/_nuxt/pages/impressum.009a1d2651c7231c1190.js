webpackJsonp([1],{"+JfF":function(t,e,s){"use strict";function a(t){s("tj7/")}Object.defineProperty(e,"__esModule",{value:!0});var i=s("C0uU"),l=s("/AdJ"),r=s("VU/8"),n=a,o=r(i.a,l.a,n,"data-v-25d798ed",null);e.default=o.exports},"/AdJ":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},i=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("h4",[t._v("Impressum")]),s("h5",[t._v("Angaben gemäß § 5 TMG:")]),s("p",[t._v("\n      Sylvia Bär"),s("br"),t._v("\n      Photoleuchten"),s("br"),t._v("\n      76137 Karlsruhe\n    ")]),s("h5",[t._v("Kontakt:")]),s("p",[t._v("\n      E-Mail:"),s("br"),t._v("\n      photoleuchten@yahoo.com\n    ")]),s("h5",[t._v("Umsatzsteuer-ID:")]),s("p",[t._v("\n      Umsatzsteuer-Identifikationsnummer gemäß §27 a Umsatzsteuergesetz:"),s("br"),t._v("\n      DE304325864\n    ")])])],1)}],l={render:a,staticRenderFns:i};e.a=l},"1r+G":function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h1",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("square_headline")))])]),s("v-flex",{attrs:{xs12:""}},[s("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[s("pl-img",{attrs:{fileName:"q0",imgType:"png",sizes:"99vw",quality:85}})],1)],1)],1),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("h2",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("battery_powered")))])])],1),s("v-layout",{attrs:{row:"",wrap:""}},[t._l(["q1","q2","q3","q4","q5","q6"],function(t,e){return s("v-flex",{key:e,staticClass:"text-xs-justify pa-1",attrs:{xs4:""}},[s("pl-img",{attrs:{fileName:t,sizes:"33vw"}})],1)}),s("v-flex",{attrs:{xs12:""}},[s("div",[s("p",[t._v(t._s(t.$t("quad_desc")))])])])],2),s("v-layout",[s("v-flex",{staticClass:"pa-1 pb-0",attrs:{xs12:"",sm4:""}},[s("pl-img",{attrs:{fileName:"q7",sizes:"(max-width: 48em) 99vw (min-width: 48em) 33vw"}})],1)],1),s("v-container",{staticClass:"pa-0",attrs:{"fill-height":""}},[s("v-layout",{staticClass:"mb-3",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("ul",{staticClass:"card mr-1",staticStyle:{height:"100%"}},[s("p",{staticClass:"pt-3"},[t._v(t._s(t.$t("battery_specs_headline")))]),t._l(t.$t(["battery_specs"]),function(e,a){return s("li",{key:a},[t._v("\n            "+t._s(e)+"\n          ")])})],2)])],1)],1),s("v-layout",{staticClass:"justify-center mb-3",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h2",[t._v("\n        "+t._s(t.$t("products.selection"))+" \n        "),s("toggle-button",{attrs:{value:t.quadMotivesLightOn,color:{checked:"rgb(251, 176, 59)",unchecked:"#bfcbd9"},labels:{checked:t.$t("lightoff"),unchecked:t.$t("lighton")}},on:{change:t.onQuadMotivesLightOnChanged}})],1)]),t._l(t.quadMotives,function(e,a){return s("v-flex",{key:a,staticClass:"center-xs motive-item pr-1 pb-1",attrs:{xs4:"",sm3:"",md2:""}},[t._l([{lightOnShow:!1,fileNameEnd:"a"},{lightOnShow:!0,fileNameEnd:"b"}],function(a,i){return s("pl-img",{directives:[{name:"show",rawName:"v-show",value:t.quadMotivesLightOn===a.lightOnShow,expression:"quadMotivesLightOn === subItem.lightOnShow"}],key:i,staticClass:"list-item",staticStyle:{"":"hover { cursor: pointer }"},attrs:{fileName:""+e.file+a.fileNameEnd,sizes:"(min-width: 64em) 16vw, (min-width: 48em) 25vw, (max-width: 48em) 33vw"},nativeOn:{click:function(s){t.motifClicked(e.file)}}})}),s("div",{staticClass:"motive-label"},[t._v(t._s(e.label))])],2)})],2),s("v-dialog",{attrs:{"max-height":"50vh","max-width":"50vw"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.selectedMotif?s("div",[s("pl-img",{directives:[{name:"show",rawName:"v-show",value:!1===t.quadMotivesLightOn,expression:"quadMotivesLightOn === false"}],attrs:{slot:"body",folder:"960",fileName:t.selectedMotif+"a",sizes:"70vw"},slot:"body"}),s("pl-img",{directives:[{name:"show",rawName:"v-show",value:!0===t.quadMotivesLightOn,expression:"quadMotivesLightOn === true"}],attrs:{slot:"body",folder:"960",fileName:t.selectedMotif+"b",sizes:"70vw"},slot:"body"})],1):t._e()]),s("div",{staticClass:"row middle-xs"},[s("div",{staticClass:"col-xs-12"},[s("h1",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("line_powered")))]),s("p",[t._v(t._s(t.$t("coming_soon")))])])])],1)},i=[],l={render:a,staticRenderFns:i};e.a=l},BGzC:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{"xs-12":""}},[s("v-form",{staticStyle:{"max-width":"800px",margin:"auto"},attrs:{action:"https://formspree.io/photoleuchten@yahoo.com",method:"POST"},model:{value:t.valid,callback:function(e){t.valid=e},expression:"valid"}},[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:t.$t("first_name"),name:"firstname"}})],1)],1),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:t.$t("last_name"),name:"lastname"}})],1)],1),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:t.$t("email_address"),required:"",rules:t.emailRules,name:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("v-text-field",{attrs:{label:t.$t("message"),name:"body",required:"",rules:t.messageRules,"multi-line":""},model:{value:t.message,callback:function(e){t.message=e},expression:"message"}})],1)],1),s("v-layout",{attrs:{row:""}},[s("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[s("v-btn",{attrs:{disabled:!t.valid,type:"submit"}},[t._v(t._s(t.$t("send"))+"\n          ")])],1)],1)],1)],1)],1)},i=[],l={render:a,staticRenderFns:i};e.a=l},C0uU:function(t,e,s){"use strict";e.a={transition:"slide-left"}},Gf8P:function(t,e,s){"use strict";var a=s("fBFx");a.default.name="kontakt",e.a=a.default},KOeH:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,".impressum[data-v-25d798ed]{font-family:sans-serif}",""])},Qi3H:function(t,e,s){e=t.exports=s("FZ+f")(!1),e.push([t.i,".motive-item .list-item[data-v-642abf36]{height:auto;width:100%}.motive-item .list-item[data-v-642abf36]:hover{cursor:pointer}.modal-body img[data-v-642abf36]{max-width:90vw;max-height:90vh}",""])},RuJG:function(t,e,s){"use strict";var a={21:"Salt & Pepper",22:"Macarons",23:"Tea",24:"Beach I",25:"2Blue",26:"Clouds",27:"Mushroom I",28:"Mushroom II",29:"Rice",30:"Tree I",31:"Tree II",32:"Tree III"};e.a={transition:"slide-left",data:function(){return{dialog:!1,selectedMotif:null,quadMotivesLightOn:!1,showModal:!1}},computed:{quadMotives:function(){for(var t=[],e=21;e<33;e++)t.push({file:"q"+e+"_",label:a[e]});return t}},watch:{selectedMotif:function(t,e){this.dialog=!!t,!t&&e&&(this.selectedMotif=null)}},methods:{onQuadMotivesLightOnChanged:function(t){this.quadMotivesLightOn=t.value},motifClicked:function(t){this.selectedMotif=this.selectedMotif===t?null:t}}}},UhFg:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("XzY1"),i=s("VU/8"),l=i(a.a,null,null,null,null);e.default=l.exports},XzY1:function(t,e,s){"use strict";var a=s("c4Yy");e.a=a.default},c4Yy:function(t,e,s){"use strict";function a(t){s("pcjv")}Object.defineProperty(e,"__esModule",{value:!0});var i=s("RuJG"),l=s("1r+G"),r=s("VU/8"),n=a,o=r(i.a,l.a,n,"data-v-642abf36",null);e.default=o.exports},fBFx:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("wyKe"),i=s("BGzC"),l=s("VU/8"),r=l(a.a,i.a,null,null,null);e.default=r.exports},hRDj:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("Gf8P"),i=s("VU/8"),l=i(a.a,null,null,null,null);e.default=l.exports},pcjv:function(t,e,s){var a=s("Qi3H");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("1c56d968",a,!0)},"tj7/":function(t,e,s){var a=s("KOeH");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("3707d234",a,!0)},wyKe:function(t,e,s){"use strict";e.a={name:"contact",transition:"slide-left",data:function(){var t=this;return{valid:!1,message:"",messageRules:[function(e){return!!e||t.$t("required_field")}],email:"",emailRules:[function(e){return!!e||t.$t("required_field")},function(e){return/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||t.$t("enter_valid_email")}]}}}}});
//# sourceMappingURL=impressum.009a1d2651c7231c1190.js.map