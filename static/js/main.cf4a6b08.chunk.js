(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{33:function(e,t,c){},51:function(e,t,c){},57:function(e,t,c){},58:function(e,t,c){},59:function(e,t,c){},60:function(e,t,c){},62:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c(25),r=c.n(s),o=c(9),l=c(2);c(33);var i=function(e){return Object(n.jsx)("div",{className:"jumbotron jumobotron-fluid bg-dark text-white text-center",children:Object(n.jsx)("div",{className:"container",children:e.children})})};var j=function(e){return Object(n.jsx)("div",{className:"container",style:e.style,children:e.children})};var h=function(e){return Object(n.jsx)("div",{className:"row",children:e.children})};var d=function(e){var t=e.size.split(" ").map((function(e){return"col-"+e})).join(" ");return Object(n.jsx)("div",{className:t,children:e.children})};var b=function(){return Object(n.jsxs)("div",{children:[Object(n.jsxs)(i,{children:[Object(n.jsx)("h1",{className:"display-4",children:"Employee Directory"}),Object(n.jsx)("h2",{className:"display-8",children:"A Searchable Directory of All Employees"})]}),Object(n.jsxs)(j,{style:{marginTop:30},children:[Object(n.jsx)(h,{children:Object(n.jsx)(d,{size:"md-12",children:Object(n.jsx)("h1",{children:"Employee Directory"})})}),Object(n.jsx)(h,{children:Object(n.jsxs)(d,{size:"md-12",children:[Object(n.jsxs)("p",{children:["A simple employee directory using sample data. To see the directory click ",Object(n.jsx)("b",{children:"Search"})," in the navigation bar above."]}),Object(n.jsxs)("p",{children:["The search box can be used to filter the list. Clicking on the",Object(n.jsx)("b",{children:" Name"})," column header will sort the names in the list."]})]})})]})]})},m=c(11),u=c(26),x=c.n(u),O=function(){return x.a.get("https://randomuser.me/api/?results=200&nat=us")};var p=function(e){var t=e.employeeList,c=e.onClick;return Object(n.jsx)("div",{className:"table-responsive-md",id:"employeeTableContainer",children:Object(n.jsxs)("table",{className:"table table-hover table-striped",children:[Object(n.jsx)("caption",{className:"topCaption",children:"Click the Name header to sort"}),Object(n.jsx)("thead",{className:"thead-dark",children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Image"}),Object(n.jsx)("th",{scope:"col",className:"headerSortDown",onClick:c,"data-value":"name",children:"Name"}),Object(n.jsx)("th",{scope:"col",children:"Phone"}),Object(n.jsx)("th",{scope:"col",children:"Email"}),Object(n.jsx)("th",{scope:"col",children:"Date of Birth"})]})}),Object(n.jsx)("tbody",{children:t.map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{alt:e.email,src:e.picture.thumbnail})}),Object(n.jsxs)("td",{children:[e.name.first," ",e.name.last]}),Object(n.jsx)("td",{children:e.phone}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:new Date(e.dob.date).toLocaleDateString("en-US")})]},t)}))})]})})};var v=function(e){var t=e.handleInputChange,c=e.name,a=e.value;return Object(n.jsx)("form",{className:"search",children:Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"language",children:"Search Term:"}),Object(n.jsx)("input",{value:a,onChange:t,name:c,type:"text",className:"form-control",placeholder:"Type here to search by name",id:"term"})]})})};var f=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),c=t[0],s=t[1],r=Object(a.useState)([]),o=Object(m.a)(r,2),l=o[0],j=o[1],h=Object(a.useState)(""),b=Object(m.a)(h,2),u=b[0],x=b[1],f=Object(a.useState)("asc"),g=Object(m.a)(f,2),y=g[0],N=g[1];return Object(a.useEffect)((function(){console.log("Using Effect..."),0===c.length?(console.log("loadEmployees()"),O().then((function(e){if(0===e.data.length)throw new Error("Empty Set Returned");var t=e.data.results;s(t)})).catch((function(e){throw e}))):0!==c.length&&(console.log(l),function(){if(console.log("filter employees"),console.log(u,u.length),0!==u.length){var e=u.toLowerCase();console.log(e);var t=c.filter((function(t){return!!"".concat(t.name.first.toLowerCase()," ").concat(t.name.last.toLowerCase()).match(e)&&(console.log(t.name.first),!0)}));j(t),console.log(l)}else j(c)}())}),[u,c]),Object(n.jsxs)("div",{children:[Object(n.jsx)(i,{children:Object(n.jsx)("h1",{className:"display-4",children:"Employee Directory"})}),Object(n.jsx)(d,{size:"md-4",children:Object(n.jsx)(v,{handleInputChange:function(e){e.preventDefault();var t=e.target.value;console.log(t),x(t)},name:"search",value:u})}),Object(n.jsx)(p,{employeeList:l,onClick:function(e){console.log("table header click",e.target),function(){if("asc"===y){var e=l.sort((function(e,t){var c="".concat(e.name.first.toLowerCase()," ").concat(e.name.last.toLowerCase()),n="".concat(t.name.first.toLowerCase()," ").concat(t.name.last.toLowerCase());return c<n?-1:c>n?1:0}));return j(e),void N("desc")}if("desc"===y){var t=l.sort((function(e,t){var c="".concat(e.name.first.toLowerCase()," ").concat(e.name.last.toLowerCase()),n="".concat(t.name.first.toLowerCase()," ").concat(t.name.last.toLowerCase());return c>n?-1:c<n?1:0}));j(t),N("asc")}console.log(l)}()}})]})};c(51);var g=function(){return Object(n.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-light bg-light",children:[Object(n.jsx)(o.b,{className:"navbar-brand",to:"/",children:"Employee Directory"}),Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{className:"navbar-nav",children:[Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.b,{to:"/about",className:"/"===window.location.pathname||"/about"===window.location.pathname?"nav-link active":"nav-link",children:"About"})}),Object(n.jsx)("li",{className:"nav-item",children:Object(n.jsx)(o.b,{to:"/search",className:"/search"===window.location.pathname?"nav-link active":"nav-link",children:"Search"})})]})})]})};c(57);var y=function(){return Object(n.jsx)("div",{className:"footer",children:Object(n.jsx)("footer",{className:"footer bg-dark text-white m-auto p-3 col-sm-12",children:Object(n.jsx)("div",{className:"col-lg-12 text-center",children:Object(n.jsx)("span",{className:"text-muted",children:" Employee Directory \xa9 2020 "})})})})};c(58);var N=function(e){return Object(n.jsx)("main",{className:"wrapper",children:e.children})};c(59);var w=function(){return Object(n.jsxs)(o.a,{children:[Object(n.jsx)(g,{}),Object(n.jsxs)("div",{className:"container col-md-12",children:[Object(n.jsxs)(N,{children:[Object(n.jsx)(l.a,{exact:!0,path:"/",component:b}),Object(n.jsx)(l.a,{exact:!0,path:"/about",component:b}),Object(n.jsx)(l.a,{exact:!0,path:"/search",component:f})]}),Object(n.jsx)(y,{})]})]})};c(60),c(61);r.a.render(Object(n.jsx)(w,{}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.cf4a6b08.chunk.js.map