webpackJsonp([2,4],{"/gs7":function(e,t,s){"use strict";function i(e){s("kqND")}var n=s("dzWy"),o=s("R41Y"),a=s("VU/8"),r=i,l=a(n.a,o.a,r,"data-v-8e1836c0",null);t.a=l.exports},"1r+G":function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs12:""}},[s("h5",{staticClass:"text-xs-center"},[e._v(e._s(e.$t("battery_powered")))])])],1),s("v-layout",{attrs:{row:"",wrap:""}},[e._l(["q1","q2","q3","q4","q5","q6"],function(e,t){return s("v-flex",{key:t,staticClass:"text-xs-justify",attrs:{xs4:""}},[s("pl-img",{attrs:{fileName:e,sizes:"33vw"}})],1)}),s("v-flex",{attrs:{xs12:""}},[s("div",{domProps:{innerHTML:e._s(e.$t("quad_desc"))}})])],2),s("h4",[e._v(e._s(e.$t("products.specs")))]),s("v-layout",{attrs:{row:"",wrap:""}},[s("v-flex",{attrs:{xs12:"",sm8:""}},[s("p",{domProps:{innerHTML:e._s(e.$t("specs_description"))}})]),s("v-flex",{attrs:{xs12:"",sm4:""}},[s("pl-img",{attrs:{fileName:"q7",sizes:"33vw"}})],1)],1),s("v-layout",{attrs:{row:""}},[s("v-flex",{attrs:{xs8:""}},[s("h4",[e._v("\n        "+e._s(e.$t("products.selection"))+" \n        "),s("toggle-button",{attrs:{value:e.quadMotivesLightOn,color:{checked:"rgb(251, 176, 59)",unchecked:"#bfcbd9"},labels:{checked:e.$t("lightoff"),unchecked:e.$t("lighton")}},on:{change:e.onQuadMotivesLightOnChanged}})],1)])],1),s("v-layout",{staticClass:"justify-center",attrs:{row:"",wrap:""}},e._l(e.quadMotives,function(t,i){return s("v-flex",{key:i,staticClass:"center-xs motive-item pr-1 pb-1",attrs:{xs4:"",sm3:"",md2:""},nativeOn:{click:function(s){e.motifClicked(t.file)}}},[e._l([{lightOnShow:!1,fileNameEnd:"a"},{lightOnShow:!0,fileNameEnd:"b"}],function(i,n){return s("pl-img",{directives:[{name:"show",rawName:"v-show",value:e.quadMotivesLightOn===i.lightOnShow,expression:"quadMotivesLightOn === subItem.lightOnShow"}],key:n,staticClass:"list-item button",attrs:{folder:"960",fileName:""+t.file+i.fileNameEnd,sizes:"(min-width: 64em) 16vw, (min-width: 48em) 25vw, (max-width: 48em) 33vw"}})}),s("div",{staticClass:"motive-label"},[e._v(e._s(t.label))])],2)})),s("v-layout",{attrs:{row:"","justify-center":""}},[s("v-dialog",{attrs:{"max-height":"50vh","max-width":"50vw",width:"600px"},model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[e.selectedMotif?s("div",[s("pl-img",{directives:[{name:"show",rawName:"v-show",value:!1===e.quadMotivesLightOn,expression:"quadMotivesLightOn === false"}],attrs:{slot:"body",folder:"960",fileName:e.selectedMotif+"a",sizes:"70vw"},slot:"body"}),s("pl-img",{directives:[{name:"show",rawName:"v-show",value:!0===e.quadMotivesLightOn,expression:"quadMotivesLightOn === true"}],attrs:{slot:"body",folder:"960",fileName:e.selectedMotif+"b",sizes:"70vw"},slot:"body"})],1):e._e()])],1),s("div",{staticClass:"row middle-xs"},[s("div",{staticClass:"col-xs-12"},[s("h4",{},[e._v(e._s(e.$t("line_powered")))]),s("p",[e._v(e._s(e.$t("coming_soon")))])])])],1)},n=[],o={render:i,staticRenderFns:n};t.a=o},"AR+X":function(e,t,s){var i=s("Qi3H");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s("rjj0")("1c56d968",i,!0)},OWxZ:function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,'.vue-js-switch[data-v-8e1836c0]{display:inline-block;position:relative;overflow:hidden;vertical-align:middle;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;cursor:pointer;line-height:22px;height:22px}.vue-js-switch .v-switch-input[data-v-8e1836c0]{display:none}.vue-js-switch .v-switch-label[data-v-8e1836c0]{position:absolute;top:0;font-size:10px;font-weight:600;line-height:22px;height:22px;color:#fff}.vue-js-switch .v-switch-label.v-left[data-v-8e1836c0]{left:10px}.vue-js-switch .v-switch-label.v-right[data-v-8e1836c0]{right:10px}.vue-js-switch .v-switch-core[data-v-8e1836c0]{margin:0;display:inline-block;position:relative;border:1px solid #bfcbd9;outline:0;border-radius:12px;-webkit-box-sizing:border-box;box-sizing:border-box;background:#bfcbd9;-webkit-transition:border-color .3s,background-color .3s;-o-transition:border-color .3s,background-color .3s;transition:border-color .3s,background-color .3s;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;width:50px;width:var(--toggle-width);height:22px}.vue-js-switch .v-switch-core[data-v-8e1836c0]:before{display:block;content:"";overflow:hidden;-webkit-transform:translate(2px,2px);transform:translate(2px,2px);top:0;left:0;position:absolute;border-radius:100%;-webkit-transition:-webkit-transform .3s;transition:-webkit-transform .3s;-o-transition:transform .3s;transition:transform .3s;transition:transform .3s,-webkit-transform .3s;width:16px;height:16px;z-index:20;background-color:#fff}.vue-js-switch.toggled .v-switch-core[data-v-8e1836c0]:before{-webkit-transform:translate(30px,2px);transform:translate(30px,2px);-webkit-transform:translate(var(--toggle-transform-distance),2px);transform:translate(var(--toggle-transform-distance),2px)}.vue-js-switch.disabled[data-v-8e1836c0]{pointer-events:none;cursor:not-allowed;opacity:.6}',""])},Qi3H:function(e,t,s){t=e.exports=s("FZ+f")(!1),t.push([e.i,".motive-item .list-item[data-v-642abf36]{height:auto;width:100%}.modal-body img[data-v-642abf36]{max-width:90vw;max-height:90vh}",""])},R41Y:function(e,t,s){"use strict";var i=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("label",{staticClass:"vue-js-switch",class:{toggled:e.toggled,disabled:e.disabled}},[s("input",{staticClass:"v-switch-input",attrs:{type:"checkbox"},on:{change:function(t){t.stopPropagation(),e.toggle(t)}}}),s("span",{staticClass:"v-switch-core",style:e.coreStyle}),e.labels?s("div",[e.toggled?s("span",{staticClass:"v-switch-label v-left"},[e._v(e._s(e.labelChecked))]):s("span",{staticClass:"v-switch-label v-right"},[e._v(e._s(e.labelUnchecked))])]):e._e()])},n=[],o={render:i,staticRenderFns:n};t.a=o},RuJG:function(e,t,s){"use strict";var i=s("/gs7"),n={21:"Salt & Pepper",22:"Macarons",23:"Tea",24:"Beach I",25:"2Blue",26:"Clouds",27:"Mushroom I",28:"Mushroom II",29:"Rice",30:"Tree I",31:"Tree II",32:"Tree III"};t.a={transition:"slide-left",components:{ToggleButton:i.a},data:function(){return{dialog:!1,selectedMotif:null,quadMotivesLightOn:!1,showModal:!1}},computed:{quadMotives:function(){for(var e=[],t=21;t<33;t++)e.push({file:"q"+t+"_",label:n[t]});return e}},watch:{selectedMotif:function(e,t){this.dialog=!!e,!e&&t&&(this.selectedMotif=null)}},methods:{onQuadMotivesLightOnChanged:function(e){this.quadMotivesLightOn=e.value},motifClicked:function(e){this.selectedMotif=this.selectedMotif===e?null:e}},i18n:{messages:{en:{battery_powered:"battery-powered",line_powered:"line-powered",quad_desc:'\n<p>The square light boxes are battery powered and very flexible - they can be hung on the wall, placed on the floor or on a shelf.\nAs motifs, there are detailed photographs, e.g. "Salt & Pepper" or different nature photographs.\nThe motif is printed on an acrylic glass plate and fixed from the inside with picture clips. It can be replaced easily. Each frame is a single piece of carpentry.</p>\n',specs_description:'\nHandmade individual item<br/>\n<span class="desc_point">Frame:</span> white painted wood<br/>\n<span class="desc_point">Dimensions:</span> 42 cm x 42 cm x 8 cm<br/>\n<span class="desc_point">Image:</span> photo print on perspex 30 cm x 30 cm<br/>\n<span class="desc_point">Lighting:</span> battery powerd LED array<br/>\nMotif can be easily changed<br/>\n<span class="desc_point">Price:</span> 240 €'},de:{battery_powered:"batteriebetrieben",line_powered:"netzbetrieben",quad_desc:'\n<p>Die quadratischen Leuchtkästen sind batteriebetrieben und sehr flexibel - sie können an die Wand gehängt, auf den Boden oder auf ein Regal gestellt werden.\nAls Motive gibt es Detailfotografien, wie z.B. "Salt & Pepper" oder verschiedene Naturaufnahmen.\nDas Motiv ist auf einer Acrylglasplatte gedruckt und von innen mit Bilderklemmen befestigt. Es kann jederzeit ausgetauscht werden. Jeder Rahmen ist ein schreinergefertigtes Einzelstück.</p>\n',specs_description:'\nHandgefertigtes Einzelstück<br/>\n<span class="desc_point">Rahmen:</span> Holzrahmen weiss lackiert<br/>\n<span class="desc_point">Abmessungen:</span> 42 cm x 42 cm x 8 cm<br/>\n<span class="desc_point">Bild:</span> Fotodruck auf Acrylglas 30 cm x 30 cm<br/>\n<span class="desc_point">Beleuchtung:</span> batteriebetriebene weisse LEDs (Monobatterien 3 St.)<br/>\nMotiv kann gewechselt werden<br/>\n<span class="desc_point">Preis:</span> 240 €'}}}}},UhFg:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=s("XzY1"),n=s("VU/8"),o=n(i.a,null,null,null,null);t.default=o.exports},XzY1:function(e,t,s){"use strict";var i=s("c4Yy");t.a=i.default},c4Yy:function(e,t,s){"use strict";function i(e){s("AR+X")}Object.defineProperty(t,"__esModule",{value:!0});var n=s("RuJG"),o=s("1r+G"),a=s("VU/8"),r=i,l=a(n.a,o.a,r,"data-v-642abf36",null);t.default=l.exports},dzWy:function(e,t,s){"use strict";var i=s("pFYg"),n=s.n(i),o=function(e,t){return"object"===(void 0===e?"undefined":n()(e))&&e.hasOwnProperty(t)};t.a={name:"ToggleButton",props:{value:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},sync:{type:Boolean,default:!1},scale:{type:Number,default:1},color:{type:[String,Object],validator:function(e){return"object"===(void 0===e?"undefined":n()(e))?e.checked||e.unchecked:"string"==typeof e}},labels:{type:[Boolean,Object],default:!1,validator:function(e){return"object"===(void 0===e?"undefined":n()(e))?e.checked||e.unchecked:"boolean"==typeof e}},width:{type:Number,default:75}},computed:{colorChecked:function(){return"object"!==n()(this.color)?this.color||"#75C791":o(this.color,"checked")?this.color.checked:"#75C791"},colorUnchecked:function(){return o(this.color,"unchecked")?this.color.unchecked:"#bfcbd9"},colorCurrent:function(){return this.toggled?this.colorChecked:this.colorUnchecked},labelChecked:function(){return o(this.labels,"checked")?this.labels.checked:"on"},labelUnchecked:function(){return o(this.labels,"unchecked")?this.labels.unchecked:"off"},coreStyle:function(){return{"background-color":this.colorCurrent,"border-color":this.colorCurrent,"--toggle-width":this.width+"px","--toggle-transform-distance":this.width-20+"px"}}},watch:{value:function(e){this.sync&&(this.toggled=e)}},data:function(){return{toggled:this.value}},methods:{toggle:function(e){this.toggled=!this.toggled,this.$emit("change",{value:this.toggled,srcEvent:e})}}}},kqND:function(e,t,s){var i=s("OWxZ");"string"==typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);s("rjj0")("222bad8f",i,!0)}});
//# sourceMappingURL=quadratische-objekte.959a2bed7aa4f8ae82b5.js.map