"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[432],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>f});var r=n(7294);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,i=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),m=c,f=d["".concat(o,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(f,a(a({ref:t},u),{},{components:n})):r.createElement(f,a({ref:t},u))}));function f(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[d]="string"==typeof e?e:c,a[1]=l;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2991:(e,t,n)=>{n.d(t,{Z:()=>h});var r=n(7294),c=n(4334),i=n(3438),a=n(9960),l=n(3919),o=n(5999);const s={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function u(e){let{href:t,children:n}=e;return r.createElement(a.Z,{href:t,className:(0,c.Z)("card padding--lg",s.cardContainer)},n)}function d(e){let{href:t,icon:n,title:i,description:a}=e;return r.createElement(u,{href:t},r.createElement("h2",{className:(0,c.Z)("text--truncate",s.cardTitle),title:i},n," ",i),a&&r.createElement("p",{className:(0,c.Z)("text--truncate",s.cardDescription),title:a},a))}function p(e){let{item:t}=e;const n=(0,i.Wl)(t);return n?r.createElement(d,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function m(e){let{item:t}=e;const n=(0,l.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,i.xz)(t.docId??void 0);return r.createElement(d,{href:t.href,icon:n,title:t.label,description:t.description??c?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return r.createElement(m,{item:t});case"category":return r.createElement(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const n=(0,i.jA)();return r.createElement(h,{items:n.items,className:t})}function h(e){const{items:t,className:n}=e;if(!t)return r.createElement(y,e);const a=(0,i.MN)(t);return r.createElement("section",{className:(0,c.Z)("row",n)},a.map(((e,t)=>r.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},r.createElement(f,{item:e})))))}},5943:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>o,toc:()=>u});var r=n(7462),c=(n(7294),n(3905)),i=n(2991);const a={slug:"/using-famedly",title:"Famedly nutzen",hide_title:!0},l=void 0,o={unversionedId:"help-center/using-famedly/index",id:"help-center/using-famedly/index",title:"Famedly nutzen",description:"Famedly nutzen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/using-famedly/index.mdx",sourceDirName:"help-center/using-famedly",slug:"/using-famedly",permalink:"/helpcenter/de/using-famedly",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter/de",tags:[],version:"current",lastUpdatedBy:"Malin",lastUpdatedAt:1695193634,formattedLastUpdatedAt:"20. Sept. 2023",frontMatter:{slug:"/using-famedly",title:"Famedly nutzen",hide_title:!0},sidebar:"helpcenterSidebar",previous:{title:"Erste Anmeldung",permalink:"/helpcenter/de/help-center/first-steps/first-login"},next:{title:"Anmeldung",permalink:"/helpcenter/de/help-center/using-famedly/login"}},s={},u=[],d={toc:u},p="wrapper";function m(e){let{components:t,...n}=e;return(0,c.kt)(p,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("div",{class:"hero hero--primary"},(0,c.kt)("div",{class:"container"},(0,c.kt)("h2",{class:"hero__title"},"Famedly nutzen"))),(0,c.kt)("br",null),(0,c.kt)("hr",null),(0,c.kt)(i.Z,{mdxType:"DocCardList"}),(0,c.kt)("hr",null))}m.isMDXComponent=!0}}]);