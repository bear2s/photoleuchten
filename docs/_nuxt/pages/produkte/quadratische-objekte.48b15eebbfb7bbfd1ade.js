webpackJsonp([3],{"16Cu":function(t,e,s){(t.exports=s("FZ+f")(!1)).push([t.i,".motive-item .list-item[data-v-63b28af4]{height:auto;width:100%}.motive-item .list-item[data-v-63b28af4]:hover{cursor:pointer}.modal-body img[data-v-63b28af4]{max-width:90vw;max-height:90vh}",""])},"3HXj":function(t,e,s){"use strict";var a={21:"Salt & Pepper",22:"Macarons",23:"Tea",24:"Beach I",25:"2Blue",26:"Clouds",27:"Mushroom I",28:"Mushroom II",29:"Rice",30:"Tree I",31:"Tree II",32:"Tree III"};e.a={transition:"slide-left",asyncData:function(t){var e=t.store,s=t.route;return e.dispatch("setLanguageKey","products-square-objects"===s.name?"en":"de")},data:function(){return{dialog:!1,selectedMotif:null,quadMotivesLightOn:!1,showModal:!1}},computed:{quadMotives:function(){for(var t=[],e=21;e<33;e++)t.push({file:"q"+e+"_",label:a[e]});return t}},watch:{selectedMotif:function(t,e){this.dialog=!!t,!t&&e&&(this.selectedMotif=null)}},methods:{onQuadMotivesLightOnChanged:function(t){this.quadMotivesLightOn=t.value},motifClicked:function(t){this.selectedMotif=this.selectedMotif===t?null:t}}}},LNXA:function(t,e,s){"use strict";var a=s("c4Yy");e.a=a.default},UhFg:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("LNXA"),i=s("VU/8")(a.a,null,!1,null,null,null);i.options.__file="pages/produkte/quadratische-objekte.vue",e.default=i.exports},c4Yy:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("3HXj"),i=s("udHa"),l=!1;var o=function(t){l||s("pLfJ")},r=s("VU/8")(a.a,i.a,!1,o,"data-v-63b28af4",null);r.options.__file="pages/products/square-objects.vue",e.default=r.exports},pLfJ:function(t,e,s){var a=s("16Cu");"string"==typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);s("rjj0")("21d235d7",a,!1)},udHa:function(t,e,s){"use strict";var a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h1",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("square_headline")))])]),s("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[s("pl-img",{attrs:{fileName:"q0",imgType:"png",sizes:"99vw",quality:85}})],1),s("v-flex",{attrs:{xs12:""}},[s("h2",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("battery_powered")))])]),t._l(["q1","q2","q3","q4","q5","q6"],function(e,a){return s("v-flex",{key:a,staticClass:"text-xs-justify pa-1",staticStyle:{position:"relative"},attrs:{xs4:""}},[s("pl-img",{attrs:{fileName:e,sizes:"32vw"}}),1===a?s("div",{staticClass:"text-xs-center",staticStyle:{bottom:"10px",width:"100%",position:"absolute"}},[t._v("Salt & Pepper")]):t._e(),4===a?s("div",{staticClass:"text-xs-center",staticStyle:{bottom:"10px",width:"100%",position:"absolute"}},[t._v("Beach I")]):t._e()],1)}),s("v-flex",{attrs:{xs12:""}},[s("p",[t._v(t._s(t.$t("quad_desc")))])])],2),s("v-layout",{staticClass:"mb-3",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",md8:""}},[s("ul",{staticClass:"card pl-3",staticStyle:{height:"100%"}},[s("p",{staticClass:"pt-3"},[t._v(t._s(t.$t("battery_specs_headline")))]),t._l(t.$t(["battery_specs"]),function(e,a){return s("li",{key:a},[t._v("\n          "+t._s(e)+"\n        ")])})],2)]),s("v-flex",{staticClass:"pa-1 pb-0",attrs:{xs12:"",sm6:"",md4:""}},[s("pl-img",{attrs:{fileName:"q7",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}})],1)],1),s("v-layout",{staticClass:"justify-center mb-3",attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h2",[t._v("\n        "+t._s(t.$t("products.selection"))+" \n        "),s("toggle-button",{attrs:{value:t.quadMotivesLightOn,color:{checked:"rgb(251, 176, 59)",unchecked:"#bfcbd9"},labels:{checked:t.$t("lightoff"),unchecked:t.$t("lighton")}},on:{change:t.onQuadMotivesLightOnChanged}})],1)]),t._l(t.quadMotives,function(e,a){return s("v-flex",{key:a,staticClass:"center-xs motive-item pr-1 pb-1",attrs:{xs4:"",sm3:"",md2:""}},[t._l([{lightOnShow:!1,fileNameEnd:"a"},{lightOnShow:!0,fileNameEnd:"b"}],function(a,i){return s("pl-img",{directives:[{name:"show",rawName:"v-show",value:t.quadMotivesLightOn===a.lightOnShow,expression:"quadMotivesLightOn === subItem.lightOnShow"}],key:i,staticClass:"list-item",staticStyle:{"":"hover { cursor: pointer }"},attrs:{fileName:""+e.file+a.fileNameEnd,sizes:"(min-width: 64em) 16vw, (min-width: 48em) 25vw, (max-width: 48em) 32vw"},nativeOn:{click:function(s){t.motifClicked(e.file)}}})}),s("div",{staticClass:"motive-label"},[t._v(t._s(e.label))])],2)})],2),s("v-dialog",{attrs:{"max-height":"50vh","max-width":"50vw"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[t.selectedMotif?s("div",[s("pl-img",{directives:[{name:"show",rawName:"v-show",value:!1===t.quadMotivesLightOn,expression:"quadMotivesLightOn === false"}],attrs:{slot:"body",folder:"960",fileName:t.selectedMotif+"a",sizes:"70vw"},slot:"body"}),s("pl-img",{directives:[{name:"show",rawName:"v-show",value:!0===t.quadMotivesLightOn,expression:"quadMotivesLightOn === true"}],attrs:{slot:"body",folder:"960",fileName:t.selectedMotif+"b",sizes:"70vw"},slot:"body"})],1):t._e()]),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:""}},[s("h2",{staticClass:"text-xs-center"},[t._v(t._s(t.$t("line_powered")))])]),t._l(["q8","q9","q10","q11","q12","q13"],function(e,a){return s("v-flex",{key:a,staticClass:"text-xs-justify pa-1",staticStyle:{position:"relative"},attrs:{xs4:""}},[s("pl-img",{attrs:{fileName:e,quality:85,sizes:"32vw"}}),1===a?s("div",{staticClass:"text-xs-center",staticStyle:{bottom:"10px",width:"100%",position:"absolute"}},[t._v("La Pedrera")]):t._e(),4===a?s("div",{staticClass:"text-xs-center",staticStyle:{bottom:"10px",width:"100%",position:"absolute"}},[t._v("Spirals of a temple")]):t._e()],1)})],2),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("div",[s("p",[t._v(t._s(t.$t("quad_linepower_desc")))])])])],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"mb-3",attrs:{xs12:"",md8:""}},[s("ul",{staticClass:"card pl-3",staticStyle:{height:"100%"}},[s("p",{staticClass:"pt-3"},[t._v(t._s(t.$t("battery_linepower_specs1_headline")))]),t._l(t.$t(["battery_linepower_specs1"]),function(e,a){return s("li",{key:a},[t._v("\n          "+t._s(e)+"\n        ")])})],2)]),s("v-flex",{staticClass:"pa-1 pb-0",attrs:{xs12:"",sm6:"",md4:""}},[s("pl-img",{attrs:{fileName:"q14",imgType:"png",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}})],1)],1),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{staticClass:"mb-3",attrs:{xs12:"",md8:""}},[s("ul",{staticClass:"card pl-3",staticStyle:{height:"100%"}},[s("p",{staticClass:"pt-3"},[t._v(t._s(t.$t("battery_linepower_specs2_headline")))]),t._l(t.$t(["battery_linepower_specs2"]),function(e,a){return s("li",{key:a},[t._v("\n          "+t._s(e)+"\n        ")])})],2)]),s("v-flex",{staticClass:"pa-1 pb-0",attrs:{xs12:"",sm6:"",md4:""}},[s("pl-img",{attrs:{fileName:"q15",imgType:"png",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}})],1)],1)],1)};a._withStripped=!0;var i={render:a,staticRenderFns:[]};e.a=i}});