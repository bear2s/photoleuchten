(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{190:function(e,t,l){"use strict";var n={name:"ContactForm",data(){return{valid:!1,message:"",messageRules:[e=>!!e||this.$t("required_field")],email:"",emailRules:[e=>!!e||this.$t("required_field"),e=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||this.$t("enter_valid_email")]}},i18n:{messages:{en:{first_name:"First name",last_name:"Last name",email_address:"Email",message:"Message",required_field:"Required field",enter_valid_email:"Please enter a valid email address"},de:{first_name:"Vorname",last_name:"Nachname",email_address:"E-Mail",message:"Nachricht/Anfrage",required_field:"Pflichtfeld",enter_valid_email:"Bitte eine gültige E-Mail-Adresse eingeben"}}}},r=l(7),o=l(10),m=l.n(o),c=l(80),d=l(74),h=l(209),f=l(75),v=l(227),_=l(202),component=Object(r.a)(n,function(){var e=this,t=e.$createElement,l=e._self._c||t;return l("v-form",{staticStyle:{"max-width":"800px",margin:"auto"},attrs:{action:"https://formspree.io/photoleuchten@yahoo.com",method:"POST"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[l("v-layout",{attrs:{row:"",wrap:""}},[l("v-flex",{staticClass:"xs12"},[l("h1",[e._v(e._s(e.isDe?"Kontakt":"Contact"))])]),e._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{label:e.$t("first_name"),name:"firstname"}})],1),e._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{label:e.$t("last_name"),name:"lastname"}})],1),e._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-text-field",{attrs:{label:e.$t("email_address"),rules:e.emailRules,required:"",name:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),e._v(" "),l("v-flex",{attrs:{xs12:""}},[l("v-textarea",{attrs:{label:e.$t("message"),rules:e.messageRules,name:"body",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1),e._v(" "),l("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[l("v-btn",{attrs:{disabled:!e.valid,type:"submit"}},[e._v(e._s(e.$t("send"))+"\n      ")])],1)],1)],1)},[],!1,null,null,null);t.a=component.exports;m()(component,{VBtn:c.a,VFlex:d.a,VForm:h.a,VLayout:f.a,VTextField:v.a,VTextarea:_.a})},212:function(e,t,l){"use strict";l.r(t);l(33);var n={name:"Kontakt",head(){var path=this.$route.path.replace(/\/$/,"");return{title:"Kontakt | Photoleuchten.com  ▶",htmlAttrs:{lang:"de"},meta:[{hid:"description",name:"description",content:"Tritt in Kontakt mit PHOTOLEUCHTEN."}],link:[{hid:"canonical",rel:"canonical",href:"https://photoleuchten.com".concat(path)},{rel:"alternate",hreflang:"de",href:"https://photoleuchten.com/kontakt"},{rel:"alternate",hreflang:"en",href:"https://photoleuchten.com/en/contact"}]}},components:{ContactForm:l(190).a},transition:"slide-left",asyncData(e){var{store:t,route:l}=e;return t.dispatch("setLanguageKey","de")}},r=l(7),o=l(10),m=l.n(o),c=l(74),d=l(75),component=Object(r.a)(n,function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{"xs-12":""}},[t("contact-form")],1)],1)},[],!1,null,null,null);t.default=component.exports;m()(component,{VFlex:c.a,VLayout:d.a})}}]);