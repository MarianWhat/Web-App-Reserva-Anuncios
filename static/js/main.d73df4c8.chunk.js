(this["webpackJsonpweb-app-reserva-anuncios"]=this["webpackJsonpweb-app-reserva-anuncios"]||[]).push([[0],{30:function(e,t,a){e.exports=a.p+"static/media/logo.469cfe36.svg"},34:function(e,t,a){e.exports=a(55)},49:function(e,t,a){},50:function(e,t){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(28),o=a.n(c),l=a(7),i=a.n(l),u=(a(49),a(31)),s=a(9),m=a(10),d=a(30),p=a.n(d),h=(a(50),function(e){var t=e.history,a=Object(n.useState)(""),c=Object(m.a)(a,2),o=c[0],l=c[1],u=Object(n.useState)(""),s=Object(m.a)(u,2),d=s[0],h=s[1],f=Object(n.useState)(""),E=Object(m.a)(f,2),b=E[0],v=E[1];return r.a.createElement("div",{className:"cont-formulario"},r.a.createElement("form",{className:"form-login",onSubmit:function(e){if(e.preventDefault(),!o||!d)return console.log("Debes colocar email y password"),v("Debes colocar email y password"),!1;i.a.auth().signInWithEmailAndPassword(o,d).then((function(e){console.log(e),console.log("autentificado"),t.replace("/Home")})).catch((function(e){console.error(e.message),v(e.message)}))}},r.a.createElement("div",{className:"cont-logo"},r.a.createElement("img",{src:p.a}),r.a.createElement("p",null,"Am\xe9rica Comercial")),r.a.createElement("div",null,r.a.createElement("input",{type:"text",name:"email",value:o,onChange:function(e){l(e.target.value),console.log(e.target.value)},placeholder:"email"})),r.a.createElement("div",null,r.a.createElement("input",{type:"password",name:"password",value:d,onChange:function(e){h(e.target.value),console.log(e.target.value)},placeholder:"pasword"})),r.a.createElement("button",{className:"btn",type:"submit",value:"btn"},"Login"),b&&r.a.createElement("p",{"data-testid":"mensajeError"},b)))}),f=function(e){var t=e.history;return r.a.createElement(h,{history:t})},E=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)([]),l=Object(m.a)(o,2),u=l[0],s=l[1],d=Object(n.useState)([]),p=Object(m.a)(d,2),h=p[0],f=p[1],E=function(){return i.a.auth().currentUser},b=E();b&&(console.log(b.email),i.a.firestore().collection("user").where("id","==",E().uid).get().then((function(e){var t=[];e.forEach((function(e){t=e.data().products})),s(t)})));return Object(n.useEffect)((function(){i.a.firestore().collection("plans").get().then((function(e){var t=[];e.forEach((function(e){var a={idDocumento:e.id,id:e.data().id,title:e.data().title,recargo:e.data().surcharge,horario:e.data().schedule,programaDia:e.data().dia};t.push(a)})),console.log(t),c(t)}))}),[]),i.a.firestore().collection("list-price").get().then((function(e){var t=[];e.forEach((function(e){var a={precio:e.data().ad_price,producto:e.data().name_product};t.push(a)})),f(t)})),r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement("p",null,"Bienvenido ",E())),r.a.createElement("div",null,r.a.createElement("p",null,"Elige el producto"),r.a.createElement("select",null,u.map((function(e){return r.a.createElement("option",{key:e.id},e)})))),r.a.createElement("div",null,r.a.createElement("p",null,"Elige el plan"),a.map((function(e){return r.a.createElement("div",{key:e.id},r.a.createElement("button",null,e.title," ",e.id," ",e.horario," ",e.recargo,h.map((function(e){return r.a.createElement("div",null,r.a.createElement("p",null,e.precio))}))))}))))},b=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null))},v=a(12),g=a(13),j=a(15),O=a(14),w=a(16),y=function(e){function t(){return Object(v.a)(this,t),Object(j.a)(this,Object(O.a)(t).apply(this,arguments))}return Object(w.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement("form",null,r.a.createElement("label",null,"Producto o Marca:"),r.a.createElement("br",null),r.a.createElement("input",{className:"input-generic",placeholder:"Ejem: Coca-Cola",list:"list"}),r.a.createElement(D,{data:["Product A","Producto B"]}))}}]),t}(r.a.Component),D=function(e){var t=e.data.map((function(e,t){return r.a.createElement("option",{key:t,value:e})}));return r.a.createElement("datalist",{id:"list"},t)},k=a(21),C=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(j.a)(this,Object(O.a)(t).call(this,e))).state={dia:""},a.handleClickDia=a.handleClickDia.bind(Object(k.a)(a)),a}return Object(w.a)(t,e),Object(g.a)(t,[{key:"handleClickDia",value:function(e){this.setState({dia:["Lunes","Martes","Mi\xe9rcoles","Jueves","Viernes","S\xe1bado","Domingo"][e.target.valueAsDate.getDay()]})}},{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",{id:"date",type:"date",name:"",onChange:this.handleClickDia}),r.a.createElement("p",null,"Dia seleccionado es: ",this.state.dia))}}]),t}(r.a.Component),S=function(){return i.a.firestore().collection("plans").get().then((function(e){var t=[];return e.forEach((function(e){var a={idDocumento:e.id,id:e.data().id,title:e.data().title,recargo:e.data().surcharge,horario:e.data().schedule,programaDia:e.data().dia};t.push(a)})),t}))},I=function(e){function t(e){var a;return Object(v.a)(this,t),(a=Object(j.a)(this,Object(O.a)(t).call(this,e))).state={isDay:"Lunes",isPlan:"01",planes:S()},a}return Object(w.a)(t,e),Object(g.a)(t,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(y,null),r.a.createElement(C,null),r.a.createElement(S,{dia:this.state.isDay,idPlan:this.state.isPlan}))}}]),t}(r.a.Component),P=function(){return r.a.createElement(u.a,null,r.a.createElement(s.c,null,r.a.createElement(s.a,{path:"/",component:f,exact:!0}),r.a.createElement(s.a,{path:"/Home",component:b}),r.a.createElement(s.a,{path:"/new-reserva",component:I})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.initializeApp({apiKey:"AIzaSyCEV44bwQis9WuCSFDqI_cIPRmflKxs4Gg",authDomain:"web-app-reserva-de-anuncios.firebaseapp.com",databaseURL:"https://web-app-reserva-de-anuncios.firebaseio.com",projectId:"web-app-reserva-de-anuncios",storageBucket:"web-app-reserva-de-anuncios.appspot.com",messagingSenderId:"964377975348",appId:"1:964377975348:web:239e2e054b2dbf80660861"}),o.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[34,1,2]]]);
//# sourceMappingURL=main.d73df4c8.chunk.js.map