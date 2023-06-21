(this["webpackJsonpreact_product-categories-practice"]=this["webpackJsonpreact_product-categories-practice"]||[]).push([[0],{16:function(e,a,t){},18:function(e,a,t){"use strict";t.r(a);var c=t(1),s=t(8),n=t.n(s),i=(t(14),t(15),t(9)),r=t(5),l=t(7),d=(t(16),t(3)),o=t.n(d),j=[{id:1,name:"Roma",sex:"m"},{id:2,name:"Anna",sex:"f"},{id:3,name:"Max",sex:"m"},{id:4,name:"John",sex:"m"}],h=[{id:1,title:"Grocery",icon:"\ud83c\udf5e",ownerId:2},{id:2,title:"Drinks",icon:"\ud83c\udf7a",ownerId:1},{id:3,title:"Fruits",icon:"\ud83c\udf4f",ownerId:2},{id:4,title:"Electronics",icon:"\ud83d\udcbb",ownerId:1},{id:5,title:"Clothes",icon:"\ud83d\udc5a",ownerId:3}],b=t(0),m=[{id:1,name:"Milk",categoryId:2},{id:2,name:"Bread",categoryId:1},{id:3,name:"Eggs",categoryId:1},{id:4,name:"Jacket",categoryId:5},{id:5,name:"Sugar",categoryId:1},{id:6,name:"Banana",categoryId:3},{id:7,name:"Beer",categoryId:2},{id:8,name:"Socks",categoryId:5},{id:9,name:"Apples",categoryId:3}].map((function(e){var a=h.find((function(a){return a.id===e.categoryId})),t=j.find((function(e){return e.id===a.ownerId}));return Object(l.a)(Object(l.a)({},e),{},{category:a,user:t})})),x=function(){var e=Object(c.useState)(""),a=Object(r.a)(e,2),t=a[0],s=a[1],n=Object(c.useState)([]),l=Object(r.a)(n,2),d=l[0],x=l[1],u=Object(c.useState)(""),O=Object(r.a)(u,2),f=O[0],p=O[1],y=m.filter((function(e){return t&&f?e.user.name===t&&e.name.toLowerCase().includes(f.toLowerCase()):t?e.user.name===t:f?e.name.toLowerCase().includes(f.toLowerCase()):e}));return Object(b.jsx)("div",{className:"section",children:Object(b.jsxs)("div",{className:"container",children:[Object(b.jsx)("h1",{className:"title",children:"Product Categories"}),Object(b.jsx)("div",{className:"block",children:Object(b.jsxs)("nav",{className:"panel",children:[Object(b.jsx)("p",{className:"panel-heading",children:"Filters"}),Object(b.jsxs)("p",{className:"panel-tabs has-text-weight-bold",children:[Object(b.jsx)("a",{"data-cy":"FilterAllUsers",href:"#/",onClick:function(){s("")},className:o()("",{"is-active":""===t}),children:"All"}),j.map((function(e){return Object(b.jsx)("a",{"data-cy":"FilterUser",href:"#/",onClick:function(){s(e.name)},className:o()("",{"is-active":t===e.name}),children:e.name})}))]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsxs)("p",{className:"control has-icons-left has-icons-right",children:[Object(b.jsx)("input",{"data-cy":"SearchField",type:"text",className:"input",placeholder:"Search",value:f,onChange:function(e){return p(e.target.value)}}),Object(b.jsx)("span",{className:"icon is-left",children:Object(b.jsx)("i",{className:"fas fa-search","aria-hidden":"true"})}),Object(b.jsx)("span",{className:"icon is-right",children:f&&Object(b.jsx)("button",{"data-cy":"ClearButton",type:"button",className:"delete",onClick:function(){return p("")}})})]})}),Object(b.jsxs)("div",{className:"panel-block is-flex-wrap-wrap",children:[Object(b.jsx)("a",{href:"#/","data-cy":"AllCategories",className:"button is-success mr-6 is-outlined",children:"All"}),h.map((function(e){return Object(b.jsx)("a",{"data-cy":"Category",className:o()("button mr-2 my-1",{"is-info":d.includes(e.title)}),href:"#/",onClick:function(){x([].concat(Object(i.a)(d),[e.title]))},children:e.title})}))]}),Object(b.jsx)("div",{className:"panel-block",children:Object(b.jsx)("a",{"data-cy":"ResetAllButton",href:"#/",className:"button is-link is-outlined is-fullwidth",onClick:function(){p(""),s(""),x([])},children:"Reset all filters"})})]})}),Object(b.jsxs)("div",{className:"box table-container",children:[0===y.length&&Object(b.jsx)("p",{"data-cy":"NoMatchingMessage",children:"No products matching selected criteria"}),y.length>0&&Object(b.jsxs)("table",{"data-cy":"ProductTable",className:"table is-striped is-narrow is-fullwidth",children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["ID",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Product",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-down"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["Category",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort-up"})})})]})}),Object(b.jsx)("th",{children:Object(b.jsxs)("span",{className:"is-flex is-flex-wrap-nowrap",children:["User",Object(b.jsx)("a",{href:"#/",children:Object(b.jsx)("span",{className:"icon",children:Object(b.jsx)("i",{"data-cy":"SortIcon",className:"fas fa-sort"})})})]})})]})}),Object(b.jsx)("tbody",{children:y.map((function(e){return Object(b.jsxs)("tr",{"data-cy":"Product",children:[Object(b.jsx)("td",{className:"has-text-weight-bold","data-cy":"ProductId",children:e.id}),Object(b.jsx)("td",{"data-cy":e.name,children:e.name}),Object(b.jsx)("td",{"data-cy":"ProductCategory",children:"".concat(e.category.icon," - ").concat(e.category.title)}),Object(b.jsx)("td",{"data-cy":"ProductUser",className:o()("",{"has-text-danger":"f"===e.user.sex,"has-text-link":"m"===e.user.sex}),children:e.user.name})]})}))})]})]})]})})};n.a.render(Object(b.jsx)(x,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.9e19e4ee.chunk.js.map