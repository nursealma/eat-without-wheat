(this["webpackJsonpceliac-allies"]=this["webpackJsonpceliac-allies"]||[]).push([[0],{14:function(e,t,c){"use strict";c.r(t);var a=c(0),s=c(1),n=c.n(s),r=c(6),i=c.n(r),l=c(4),u=c.n(l),o=c(7),j=c(2),b=(c(5),function(e){var t=e.title,c=e.summary,s=e.image;e.sourceUrl;return Object(a.jsxs)("div",{className:"recipe",children:[Object(a.jsx)("h2",{children:t}),Object(a.jsxs)("p",{children:["     ",c.replace(/<[^>]+>/g,"")]}),Object(a.jsx)("img",{src:s,alt:t})]})}),h=function(){var e=Object(s.useState)([]),t=Object(j.a)(e,2),c=t[0],n=t[1],r=Object(s.useState)(""),i=Object(j.a)(r,2),l=i[0],h=i[1],d=Object(s.useState)(""),p=Object(j.a)(d,2),m=p[0],O=p[1],f=Object(s.useState)(!1),x=Object(j.a)(f,2),v=x[0],g=x[1];Object(s.useEffect)((function(){(function(){var e=Object(o.a)(u.a.mark((function e(){var t,c;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://api.spoonacular.com/recipes/complexSearch?apiKey=".concat("1a74f33e4640408f85eaf6592023379a","&query=").concat(m,"&intolerances=gluten&addRecipeInformation=true"));case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,n(c.results),c.results.length>0?g(!0):g(!1),console.log(c.results);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[m]);return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"header",children:[Object(a.jsx)("h1",{children:"Eat Without Wheat"}),Object(a.jsx)("h3",{children:"enter a keyword below and see a selection of gluten-free dishes "})]}),Object(a.jsxs)("form",{className:"search-form",onSubmit:function(e){e.preventDefault(),O(l),h("")},children:[Object(a.jsx)("input",{type:"text",className:"search-bar",value:l,onChange:function(e){h(e.target.value)}}),Object(a.jsx)("button",{type:"submit",className:"search-button",children:"search"})]}),Object(a.jsx)("div",{className:"recipes",children:!0===v?c.map((function(e,t){return Object(a.jsx)(b,{title:e.title,summary:e.summary,image:e.image},t)})):Object(a.jsx)("h1",{children:"please enter a valid ingredient"})})]})};i.a.render(Object(a.jsx)(n.a.StrictMode,{children:Object(a.jsx)(h,{})}),document.getElementById("root"))},5:function(e,t,c){}},[[14,1,2]]]);
//# sourceMappingURL=main.e61157ed.chunk.js.map