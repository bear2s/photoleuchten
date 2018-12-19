(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{206:function(e,t,n){},213:function(e,t,n){"use strict";var i={name:"Collection"},s=n(3),a=n(9),r=n.n(a),l=n(89),o=(n(206),n(8)),h=n(0).a.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],width:[Number,String]}}),c=n(53),u=n(4),d=n(1),v=n(10),m=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},g=Object(v.a)(o.a,h,c.a,u.a).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,raised:Boolean,tag:{type:String,default:"div"},tile:Boolean},computed:{classes:function(){return m({"v-card":!0,"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--raised":this.raised,"v-card--tile":this.tile},this.themeClasses)},styles:function(){var e={height:Object(d.a)(this.height)};return this.img&&(e.background='url("'+this.img+'") center center / cover no-repeat'),this.height&&(e.height=Object(d.a)(this.height)),this.maxHeight&&(e.maxHeight=Object(d.a)(this.maxHeight)),this.maxWidth&&(e.maxWidth=Object(d.a)(this.maxWidth)),this.width&&(e.width=Object(d.a)(this.width)),e}},render:function(e){var t=this.generateRouteLink(this.classes),n=t.tag,i=t.data;return i.style=this.styles,e(n,this.setBackgroundColor(this.color,i),this.$slots.default)}}),p=n(81),x=n(83),f=n(84),b=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-container",{attrs:{"fill-height":""}},[n("v-layout",{staticClass:"collection",attrs:{row:"",wrap:"","align-center":""}},[n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:""}},[n("h2",[e._v(e._s(e.isDe?"Kollektion":"Collection"))])]),e._v(" "),n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm4:""}},[n("v-card",{staticClass:"mr-5",attrs:{color:"transparent",hover:"",flat:"",ripple:"",to:e.isDe?"/produkte/wandleuchten":"/en/products/wall-lights"}},[n("pl-img",{attrs:{"file-name":"t10",alt:"goto wall lights",title:e.isDe?"wandleuchten":"wall lights",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}}),e._v("\n        "+e._s(e.isDe?"Wandleuchten":"Wall lights")+"\n      ")],1)],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm4:""}},[n("pl-img",{staticClass:"pa-5",attrs:{"file-name":"t13",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}})],1),e._v(" "),n("v-flex",{attrs:{xs12:"",sm4:""}},[n("pl-img",{staticClass:"pa-5",attrs:{"file-name":"t12",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}})],1),e._v(" "),n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm4:""}},[n("v-card",{staticClass:"ma-5",attrs:{flat:"",hover:"",ripple:"",to:e.isDe?"/produkte/lichtobjekte":"/en/products/light-objects",color:"transparent"}},[n("pl-img",{attrs:{"file-name":"t11",alt:"goto light objects",title:"light objects",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}}),e._v("\n        "+e._s(e.isDe?"Lichtobjekte":"Light objects")+"\n      ")],1)],1),e._v(" "),n("v-flex",{staticClass:"text-xs-center justify-center",attrs:{xs12:"",sm4:""}},[n("v-btn",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{large:"",outline:"",disabled:"",color:"primary"}},[e._v(e._s(e.isDe?"Entdecken":"Discover"))])],1),e._v(" "),n("v-flex",{staticClass:"text-xs-center",attrs:{xs12:"",sm4:""}},[n("v-card",{attrs:{flat:"",hover:"",ripple:"",to:e.isDe?"/produkte/leuchtkaesten":"/en/products/lightboxes",color:"transparent"}},[n("pl-img",{attrs:{"file-name":"t14",alt:"goto light boxes",title:"light boxes",sizes:"(max-width: 48em) 99vw (min-width: 48em) 32vw"}}),e._v("\n        "+e._s(e.isDe?"Leuchtkästen":"Light boxes")+"\n      ")],1)],1)],1)],1)},[],!1,null,null,null);b.options.__file="Collection.vue";t.a=b.exports;r()(b,{VBtn:l.a,VCard:g,VContainer:p.a,VFlex:x.a,VLayout:f.a})},244:function(e,t,n){"use strict";n.r(t);n(64);var i={layout:"home",components:{Collection:n(213).a},head:function(){var e=this.$route.path.replace(/\/$/,"");return{title:"Photoleuchten.com  ▶ | Handgefertigte Lichtobjekte, beleuchtete Fotografien",htmlAttrs:{lang:"de"},meta:[{hid:"description",name:"description",content:"Mit Liebe hergestellte, handgemachte Wandleuchten, Lichtobjekte und Leuchtkästen mit Fotografien, die unbeleuchtet und beleuchtet toll aussehen."}],link:[{hid:"canonical",rel:"canonical",href:"https://photoleuchten.com".concat(e)},{rel:"alternate",hreflang:"de",href:"https://photoleuchten.com"},{rel:"alternate",hreflang:"en",href:"https://photoleuchten.com/en"}]}},transition:"slide-left",name:"App",asyncData:function(e){var t=e.store;e.route;return t.dispatch("setLanguageKey","de")}},s=n(3),a=n(9),r=n.n(a),l=n(89),o=n(83),h=n(84),c=Object(s.a)(i,function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-layout",{attrs:{row:"",wrap:""}},[n("no-ssr",[e.$vuetify.breakpoint.smAndDown?n("v-flex",{staticClass:"text-xs-center headline-container",attrs:{xs12:""}},[n("h1",[e._v("\n        WANDLEUCHTEN - LICHTOBJEKTE - LEUCHTKAESTEN - BELEUCHTETE PHOTOS & PAPIERE\n      ")]),e._v(" "),n("div",{staticClass:"headline-container-inner",staticStyle:{position:"absolute"}},[n("h2",{staticClass:"white--text px-3"},[e._v("\n          handgefertigte Design-Leuchten, Unikate aus Fotografien & Licht\n        ")])]),e._v(" "),n("pl-img",{attrs:{quality:85,"file-name":"t0","img-type":"jpg",sizes:"100vw"}})],1):e._e()],1),e._v(" "),n("v-flex",{attrs:{xs12:""}},[n("h3",{staticClass:"text-xs-center"},[e._v("Willkommen bei Photoleuchten!")]),e._v(" "),n("div",{staticClass:"text-xs-center"},[n("p",[e._v("\n        Hier findet Ihr mit Liebe hergestellte, handgemachte Leuchten: Wandleuchten, Leuchtkästen, Lichtobjekte mit\n        Fotografien, die unbeleuchtet toll aussehen und beleuchtet einen völlig neuen Look bekommen.\n      ")]),e._v(" "),n("p",[e._v("\n        Die Leuchten passen durch ihre unterschiedlichen Motive, Lichtfarben - und Stärken in viele Wohnbereiche und\n        bringen eine neue Atmosphäre in einen Raum.\n      ")]),e._v(" "),n("p",[e._v("\n        Wer ein individuelles Stück für Wohn- oder Geschäftsräume sucht, das ein besonderes Licht in einen Raum\n        bringt, ist hier richtig.\n      ")]),e._v(" "),n("p",[e._v("\n        Die Wandleuchten und Lichtobjekte gibt es in verschiedenen Formaten und Größen und können individuell\n        angepasst werden.\n      ")]),e._v(" "),n("p",[e._v("\n        Alle Leuchten sind mit stromsparender LED-Technik ausgestattet.\n      ")]),e._v(" "),n("p",[e._v("\n        Sonderanfertigungen mit eigenen Motiven oder in bestimmten Größen sind jederzeit möglich.\n      ")])])]),e._v(" "),n("collection"),e._v(" "),n("v-flex",{staticClass:"text-xs-center py-5",attrs:{xs12:""}},[n("v-btn",{attrs:{large:"",outline:"",to:"/kontakt"}},[e._v("\n      Kontakt\n    ")])],1)],1)},[],!1,null,null,null);c.options.__file="index.vue";t.default=c.exports;r()(c,{VBtn:l.a,VFlex:o.a,VLayout:h.a})}}]);