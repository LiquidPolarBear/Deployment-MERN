(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{21:function(e,t,a){e.exports=a(51)},26:function(e,t,a){},50:function(e,t,a){},51:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(19),r=a.n(c),u=(a(26),a(3)),o=a(1),i=a(2),m=a.n(i),s=function(e){e.removeFromDom;var t=Object(n.useState)(),a=Object(o.a)(t,2),c=(a[0],a[1]);return Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/allpets").then((function(e){return c(e.data)}))}),[]),l.a.createElement("table",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Name"),l.a.createElement("th",null,"Type"),l.a.createElement("th",null,"Actions")),e.pet.map((function(e,t){return l.a.createElement("tr",{key:t},l.a.createElement("td",null,e.name),l.a.createElement("td",null,e.type),l.a.createElement("td",null,l.a.createElement(u.a,{to:"/pets/".concat(e._id)},"Details")," ",l.a.createElement(u.a,{to:"/pets/".concat(e._id,"/edit")},"Edit")))})))},p=function(){var e=Object(n.useState)([]),t=Object(o.a)(e,2),a=t[0],c=t[1],r=Object(n.useState)(!1),i=Object(o.a)(r,2),p=(i[0],i[1]);Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/allpets").then((function(e){console.log(e.data),c(e.data),p(!0)})).catch((function(e){return console.log(e.data)}))}),[]);return l.a.createElement("div",null,l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(u.a,{to:"pets/new"},"add a pet to the shelter"),l.a.createElement("h3",null,"These pets are looking for a good home"),l.a.createElement(s,{pet:a,removeFromDom:function(e){c(a.filter((function(t){return t._id!==e}))),console.log("Remove from dom"),console.log(e)}}))},E=function(e){var t=e.id,a=Object(n.useState)([]),c=Object(o.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(!1),p=Object(o.a)(s,2),E=(p[0],p[1]);Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/pet/"+t).then((function(e){console.log(e.data),i(e.data),E(!0)})).catch((function(e){return console.log(e.data)}))}),[]);return l.a.createElement("div",null,l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(u.a,{to:"/"},"back to home"),l.a.createElement("button",{onClick:function(e){m.a.delete("http://localhost:8000/api/pet/"+t).then((function(e){console.log(e),Object(u.c)("/")}))}},"Adopt ",r.name),l.a.createElement("h3",null,"Details about: ",r.name),l.a.createElement("h2",null,"Pet Type: ",r.type),l.a.createElement("h2",null,"Description: ",r.description),l.a.createElement("h2",null,"Skills: ",r.skill1,", ",r.skill2,", ",r.skill3))},b=(a(8),function(e){var t=Object(n.useState)([]),a=Object(o.a)(t,2),c=a[0],r=a[1],u=Object(n.useState)([]),i=Object(o.a)(u,2),s=(i[0],i[1],Object(n.useState)()),p=Object(o.a)(s,2),E=p[0],b=p[1],h=Object(n.useState)(),f=Object(o.a)(h,2),d=f[0],v=f[1],j=Object(n.useState)(),O=Object(o.a)(j,2),g=O[0],k=O[1],S=Object(n.useState)(),y=Object(o.a)(S,2),x=y[0],C=y[1],w=Object(n.useState)(),P=Object(o.a)(w,2),D=P[0],T=P[1],A=Object(n.useState)(),N=Object(o.a)(A,2),_=N[0],B=N[1];return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),m.a.post("http://localhost:8000/api/pet",{name:E,type:d,description:g,skill1:x,skill2:D,skill3:_}).catch((function(e){for(var t=e.response.data.errors,a=[],n=0,l=Object.keys(t);n<l.length;n++){var c=l[n];a.push(t[c].message)}r(a)}))}},c.map((function(e,t){return l.a.createElement("p",{key:t},e)})),l.a.createElement("label",null,"Pet Name:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"name",value:E,onChange:function(e){b(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Pet Type:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"type",value:d,onChange:function(e){v(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Pet Description:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"description",value:g,onChange:function(e){k(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Skill 1:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"skill1",value:x,onChange:function(e){C(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Skill 2:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"skill2",value:D,onChange:function(e){T(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Skill 3:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"skill3",value:_,onChange:function(e){B(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Add Pet"})))}),h=function(e){e.id;var t=Object(n.useState)([]),a=Object(o.a)(t,2);a[0],a[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(u.a,{to:"/"},"back to home"),l.a.createElement("h3",null,"Know a pet needing a home?"),l.a.createElement(b,null))},f=function(e){var t=e.id,a=Object(n.useState)([]),c=Object(o.a)(a,2),r=c[0],i=c[1],s=Object(n.useState)(),p=Object(o.a)(s,2),E=p[0],b=p[1],h=Object(n.useState)(),f=Object(o.a)(h,2),d=f[0],v=f[1],j=Object(n.useState)(),O=Object(o.a)(j,2),g=O[0],k=O[1],S=Object(n.useState)(),y=Object(o.a)(S,2),x=y[0],C=y[1],w=Object(n.useState)(),P=Object(o.a)(w,2),D=P[0],T=P[1],A=Object(n.useState)(),N=Object(o.a)(A,2),_=N[0],B=N[1];Object(n.useEffect)((function(){m.a.get("http://localhost:8000/api/pet/"+t).then((function(e){b(e.data.name),v(e.data.type),k(e.data.description),C(e.data.skill1),T(e.data.skill2),B(e.data.skill3)}))}),[]);return l.a.createElement("div",null,l.a.createElement("form",{onSubmit:function(e){!function(e){e.preventDefault(),m.a.put("http://localhost:8000/api/pet/"+t+"/edit",{name:E,type:d,description:g,skill1:x,skill2:D,skill3:_}).then((function(e){console.log(e),Object(u.c)("/")})).catch((function(e){for(var t=e.response.data.errors,a=[],n=0,l=Object.keys(t);n<l.length;n++){var c=l[n];a.push(t[c].message)}i(a)}))}(e)}},r.map((function(e,t){return l.a.createElement("p",{key:t},e)})),l.a.createElement("label",null,"Name:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"name",value:E,onChange:function(e){b(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Pet Type:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"type",value:d,onChange:function(e){v(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Pet Description:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"description",value:g,onChange:function(e){k(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Skill 1:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"skill1",value:x,onChange:function(e){C(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Skill 2:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"skill2",value:D,onChange:function(e){T(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("label",null,"Skill 3:"),l.a.createElement("br",null),l.a.createElement("input",{type:"text",name:"skill3",value:_,onChange:function(e){B(e.target.value)}}),l.a.createElement("br",null),l.a.createElement("input",{type:"submit",value:"Edit"})))},d=function(e){var t=e.id,a=Object(n.useState)([]),c=Object(o.a)(a,2);c[0],c[1];return l.a.createElement("div",null,l.a.createElement("h1",null,"Pet Shelter"),l.a.createElement(u.a,{to:"/"},"back to home"),l.a.createElement("h3",null,"Know a pet needing a home?"),l.a.createElement(f,{id:t}))};a(50);var v=function(){return l.a.createElement("div",{className:"App"},l.a.createElement(u.b,null,l.a.createElement(p,{path:"/"}),l.a.createElement(E,{path:"/pets/:id"}),l.a.createElement(h,{path:"/pets/new"}),l.a.createElement(d,{path:"/pets/:id/edit"})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.7444760b.chunk.js.map