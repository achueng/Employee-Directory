(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{45:function(e,t,c){},46:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c(1),a=c.n(r),i=c(16),s=c.n(i),j=c(17);var d=function(){return Object(n.jsx)(j.a,{fluid:!0,className:"p-4 bg-info",children:Object(n.jsx)("h1",{className:"text-center text-light font-weight-bold",children:"Employee Directory"})})},l=c(20),b=c(21),h=c(18);var o=function(e){var t=e.data;return Object(n.jsxs)(h.a,{striped:!0,bordered:!0,responsive:!0,children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{}),Object(n.jsx)("th",{children:"Name"}),Object(n.jsx)("th",{children:"Email"}),Object(n.jsx)("th",{children:"City"}),Object(n.jsx)("th",{children:"Age"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.image,alt:e.name})}),Object(n.jsx)("td",{children:e.name}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:e.city}),Object(n.jsx)("td",{children:e.age})]})}))})]})},u=c(19),O=c.n(u),x=function(){return O.a.get("https://randomuser.me/api/?results=20&nat=us")};var m=function(){var e=Object(r.useState)([]),t=Object(b.a)(e,2),c=t[0],a=t[1];return Object(r.useEffect)((function(){x().then((function(e){var t=e.data.results.map((function(e){return{image:e.picture.thumbnail,name:"".concat(e.name.first," ").concat(e.name.last),email:e.email,city:e.location.city,age:e.dob.age}}));a(t)})).catch((function(e){return console.log(e)}))}),[]),Object(n.jsx)(o,{data:c})};var f=function(){return Object(n.jsxs)(a.a.Fragment,{children:[Object(n.jsx)(d,{}),Object(n.jsx)(l.a,{children:Object(n.jsx)(m,{})})]})};c(44),c(45);s.a.render(Object(n.jsx)(a.a.StrictMode,{children:Object(n.jsx)(f,{})}),document.getElementById("root"))}},[[46,1,2]]]);
//# sourceMappingURL=main.228f127d.chunk.js.map