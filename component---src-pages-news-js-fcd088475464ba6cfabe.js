(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{244:function(e,a,t){"use strict";t.r(a);t(164);var r=t(0),l=t.n(r),c=t(232),n=t(231),m=t(234),s=t(30),i=t(233),o=t.n(i),d=function(e){var a=e.article;return l.a.createElement(s.Link,{to:"/news/"+a.slug,className:"post-card"},l.a.createElement("div",{className:"row m-0"},l.a.createElement("div",{className:"col-md-4 p-0"},l.a.createElement("img",{src:a.cover?a.cover.childImageSharp.resize.src:o.a,alt:a.slug+"'s image"})),l.a.createElement("div",{className:"col-md-8 d-flex p-0 align-items-center"},l.a.createElement("div",null,a.categories?a.categories.map((function(e,a){return l.a.createElement("div",{key:a,className:"tag mt-4 "+e},e)})):null,l.a.createElement("h6",{className:"w-75 px-3 text-uppercase"},a.title),l.a.createElement("p",{className:"px-3"},a.description),l.a.createElement("div",{className:"post-card-footer"},l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-calendar-alt"})," ",a.date),l.a.createElement("span",null,l.a.createElement("i",{className:"fa fa-user"})," @",a.author," "))))))};t.d(a,"pageQuery",(function(){return u}));a.default=function(e){var a=e.data.allMarkdownRemark.edges,t=Object(r.useState)(""),s=t[0],i=t[1],o=a.filter((function(e){if(e.node.frontmatter.title.toLowerCase().startsWith(s.toLowerCase()))return 1})).map((function(e){return l.a.createElement("div",{key:e.node.id,className:"p-2"},l.a.createElement(d,{article:e.node.frontmatter}))}));return l.a.createElement(c.a,null,l.a.createElement(n.a,{title:"News"}),l.a.createElement(m.a,{title:"News"}),l.a.createElement("div",{className:"row m-0 p-1"},l.a.createElement("div",{className:"col-md-8 col-lg-9 p-2 order-2 order-md-1"},l.a.createElement("div",{className:"row mx-2 my-4"},o)),l.a.createElement("div",{className:"col-md-4 col-lg-3 order-md-2 order-1 px-2 py-4"},l.a.createElement("div",{className:"card p-4 position-sticky",style:{top:"1rem"},id:"filter-card"},l.a.createElement("h5",{className:"my-3"},"Search & Filter"),l.a.createElement("div",{className:"mx-2"},l.a.createElement("div",null,"Search by Name"),l.a.createElement("input",{id:"search-box",type:"text",className:"form w-100 p-2 mt-2",placeholder:"Search Here",onChange:function(e){return i(e.target.value)}}),l.a.createElement("hr",null))))))};var u="147840799"}}]);
//# sourceMappingURL=component---src-pages-news-js-fcd088475464ba6cfabe.js.map