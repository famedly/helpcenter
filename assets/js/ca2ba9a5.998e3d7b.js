"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[697],{5243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>m,frontMatter:()=>o,metadata:()=>a,toc:()=>d});var r=n(5893),i=n(1151),s=n(2991);const o={slug:"/administration",title:"Administration",hide_title:!0},c=void 0,a={id:"help-center/administration/index",title:"Administration",description:"Administration",source:"@site/docs/help-center/administration/index.mdx",sourceDirName:"help-center/administration",slug:"/administration",permalink:"/helpcenter/administration",draft:!1,unlisted:!1,editUrl:"https://github.com/famedly/helpcenter/edit/main/docs/help-center/administration/index.mdx",tags:[],version:"current",lastUpdatedBy:"Malin",lastUpdatedAt:1722326279e3,frontMatter:{slug:"/administration",title:"Administration",hide_title:!0},sidebar:"helpcenterSidebar",previous:{title:"Encryption & Security",permalink:"/helpcenter/help-center/your-account/encryption-security"},next:{title:"Manage members",permalink:"/helpcenter/help-center/administration/members"}},l={},d=[];function u(e){const t={hr:"hr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{class:"hero hero--primary",children:(0,r.jsx)("div",{class:"container",children:(0,r.jsx)("h2",{class:"hero__title",children:"Administration"})})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(s.Z,{}),"\n",(0,r.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>j});n(7294);var r=n(512),i=n(3438),s=n(3692),o=n(8824),c=n(3919),a=n(5999),l=n(2503);const d={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var u=n(5893);function m(e){let{href:t,children:n}=e;return(0,u.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",d.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:i,description:s}=e;return(0,u.jsxs)(m,{href:t,children:[(0,u.jsxs)(l.Z,{as:"h2",className:(0,r.Z)("text--truncate",d.cardTitle),title:i,children:[n," ",i]}),s&&(0,u.jsx)("p",{className:(0,r.Z)("text--truncate",d.cardDescription),title:s,children:s})]})}function p(e){let{item:t}=e;const n=(0,i.LM)(t),r=function(){const{selectMessage:e}=(0,o.c)();return t=>e(t,(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,u.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,u.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,u.jsx)(f,{item:t});case"category":return(0,u.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,i.jA)();return(0,u.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,u.jsx)(g,{...e});const s=(0,i.MN)(t);return(0,u.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,u.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,u.jsx)(x,{item:e})},t)))})}},8824:(e,t,n)=>{n.d(t,{c:()=>l});var r=n(7294),i=n(2263);const s=["zero","one","two","few","many","other"];function o(e){return s.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:o(["one","other"]),select:e=>1===e?"one":"other"};function a(){const{i18n:{currentLocale:e}}=(0,i.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:o(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function l(){const e=a();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const i=n.select(t),s=n.pluralForms.indexOf(i);return r[Math.min(s,r.length-1)]}(n,t,e)}}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>o});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);