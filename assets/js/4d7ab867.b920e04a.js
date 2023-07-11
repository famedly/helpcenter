"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[380],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,c=function(e,t){if(null==e)return{};var r,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(c[r]=e[r]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(c[r]=e[r])}return c}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,c=e.mdxType,o=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),p=u(r),d=c,f=p["".concat(l,".").concat(d)]||p[d]||m[d]||o;return r?n.createElement(f,i(i({ref:t},s),{},{components:r})):n.createElement(f,i({ref:t},s))}));function f(e,t){var r=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var o=r.length,i=new Array(o);i[0]=d;var a={};for(var l in t)hasOwnProperty.call(t,l)&&(a[l]=t[l]);a.originalType=e,a[p]="string"==typeof e?e:c,i[1]=a;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2991:(e,t,r)=>{r.d(t,{Z:()=>h});var n=r(7294),c=r(6010),o=r(3438),i=r(9960),a=r(3919),l=r(5999);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};function s(e){let{href:t,children:r}=e;return n.createElement(i.Z,{href:t,className:(0,c.Z)("card padding--lg",u.cardContainer)},r)}function p(e){let{href:t,icon:r,title:o,description:i}=e;return n.createElement(s,{href:t},n.createElement("h2",{className:(0,c.Z)("text--truncate",u.cardTitle),title:o},r," ",o),i&&n.createElement("p",{className:(0,c.Z)("text--truncate",u.cardDescription),title:i},i))}function m(e){let{item:t}=e;const r=(0,o.Wl)(t);return r?n.createElement(p,{href:r,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function d(e){let{item:t}=e;const r=(0,a.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",c=(0,o.xz)(t.docId??void 0);return n.createElement(p,{href:t.href,icon:r,title:t.label,description:t.description??c?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return n.createElement(d,{item:t});case"category":return n.createElement(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function y(e){let{className:t}=e;const r=(0,o.jA)();return n.createElement(h,{items:r.items,className:t})}function h(e){const{items:t,className:r}=e;if(!t)return n.createElement(y,e);const i=(0,o.MN)(t);return n.createElement("section",{className:(0,c.Z)("row",r)},i.map(((e,t)=>n.createElement("article",{key:t,className:"col col--6 margin-bottom--lg"},n.createElement(f,{item:e})))))}},6389:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>l,toc:()=>s});var n=r(7462),c=(r(7294),r(3905)),o=r(2991);const i={slug:"/your-account",title:"Your Account",hide_title:!0},a=void 0,l={unversionedId:"help-center/your-account/index",id:"help-center/your-account/index",title:"Your Account",description:"Your account",source:"@site/docs/help-center/your-account/index.mdx",sourceDirName:"help-center/your-account",slug:"/your-account",permalink:"/helpcenter/your-account",draft:!1,editUrl:"https://gitlab.com/famedly/company/helpcenter/-/tree/main",tags:[],version:"current",frontMatter:{slug:"/your-account",title:"Your Account",hide_title:!0},sidebar:"helpcenterSidebar",previous:{title:"Audio & Video",permalink:"/helpcenter/help-center/using-famedly/audio-video"},next:{title:"Settings",permalink:"/helpcenter/help-center/your-account/account-settings"}},u={},s=[],p={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,c.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("div",{class:"hero hero--primary"},(0,c.kt)("div",{class:"container"},(0,c.kt)("h2",{class:"hero__title"},"Your account"))),(0,c.kt)("br",null),(0,c.kt)("hr",null),(0,c.kt)(o.Z,{mdxType:"DocCardList"}),(0,c.kt)("hr",null))}d.isMDXComponent=!0}}]);