(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{103:function(e,t,a){"use strict";var l={name:"ContactForm",data(){return{valid:!1,message:"",messageRules:[e=>!!e||this.$t("required_field")],email:"",emailRules:[e=>!!e||this.$t("required_field"),e=>/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(e)||this.$t("enter_valid_email")]}},i18n:{messages:{en:{first_name:"First name",last_name:"Last name",email_address:"Email",message:"Message",required_field:"Required field",enter_valid_email:"Please enter a valid email address"},de:{first_name:"Vorname",last_name:"Nachname",email_address:"E-Mail",message:"Nachricht/Anfrage",required_field:"Pflichtfeld",enter_valid_email:"Bitte eine gültige E-Mail-Adresse eingeben"}}}},s=a(4),n=a(7),r=a.n(n),i=a(39),o=a(33),m=a(122),c=a(34),u=a(144),d=a(115),v=Object(s.a)(l,function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-form",{staticStyle:{"max-width":"800px",margin:"auto"},attrs:{action:"https://formspree.io/photoleuchten@yahoo.com",method:"POST"},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"xs12"},[a("h1",[e._v(e._s(e.isDe?"Kontakt":"Contact"))])]),e._v(" "),a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:e.$t("first_name"),name:"firstname"}})],1)],1),e._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:e.$t("last_name"),name:"lastname"}})],1)],1),e._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-text-field",{attrs:{label:e.$t("email_address"),rules:e.emailRules,required:"",name:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1)],1),e._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{attrs:{xs12:""}},[a("v-textarea",{attrs:{label:e.$t("message"),rules:e.messageRules,name:"body",required:""},model:{value:e.message,callback:function(t){e.message=t},expression:"message"}})],1)],1),e._v(" "),a("v-layout",{attrs:{row:""}},[a("v-flex",{staticClass:"text-xs-right",attrs:{xs12:""}},[a("v-btn",{attrs:{disabled:!e.valid,type:"submit"}},[e._v(e._s(e.$t("send"))+"\n      ")])],1)],1)],1)},[],!1,null,null,null);v.options.__file="ContactForm.vue";t.a=v.exports;r()(v,{VBtn:i.a,VFlex:o.a,VForm:m.a,VLayout:c.a,VTextField:u.a,VTextarea:d.a})},131:function(e,t,a){"use strict";a.r(t);var l={name:"Contact",components:{ContactForm:a(103).a},transition:"slide-left",asyncData(e){let t=e.store;e.route;return t.dispatch("setLanguageKey","en")},head(){return{title:"Contact | Photoleuchten.com  ▶",htmlAttrs:{lang:"en"},meta:[],link:[{hid:"canonical",rel:"canonical",href:`https://photoleuchten.com${this.$route.path.replace(/\/$/,"")}`},{rel:"alternate",hreflang:"de",href:"https://photoleuchten.com/kontakt"},{rel:"alternate",hreflang:"en",href:"https://photoleuchten.com/en/contact"}]}}},s=a(4),n=a(7),r=a.n(n),i=a(33),o=a(34),m=Object(s.a)(l,function(){var e=this.$createElement,t=this._self._c||e;return t("v-layout",{attrs:{row:""}},[t("v-flex",{attrs:{"xs-12":""}},[t("contact-form")],1)],1)},[],!1,null,null,null);m.options.__file="contact.vue";t.default=m.exports;r()(m,{VFlex:i.a,VLayout:o.a})}}]);