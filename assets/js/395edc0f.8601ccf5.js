"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[476],{4002:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=n(5893),s=n(1151),i=n(2991);const l={slug:"/using-famedly",title:"Using Famedly",hide_title:!0},c=void 0,o={id:"help-center/using-famedly/index",title:"Using Famedly",description:"Using Famedly",source:"@site/docs/help-center/using-famedly/index.mdx",sourceDirName:"help-center/using-famedly",slug:"/using-famedly",permalink:"/helpcenter/using-famedly",draft:!1,unlisted:!1,editUrl:"https://github.com/famedly/helpcenter/edit/main/docs/help-center/using-famedly/index.mdx",tags:[],version:"current",lastUpdatedBy:"Nicolas Werner",lastUpdatedAt:1713863225e3,frontMatter:{slug:"/using-famedly",title:"Using Famedly",hide_title:!0},sidebar:"helpcenterSidebar",previous:{title:"First login",permalink:"/helpcenter/help-center/first-steps/first-login"},next:{title:"Login",permalink:"/helpcenter/help-center/using-famedly/login"}},a={},u=[];function d(e){const t={hr:"hr",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{class:"hero hero--primary",children:(0,r.jsx)("div",{class:"container",children:(0,r.jsx)("h2",{class:"hero__title",children:"Using Famedly"})})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(i.Z,{}),"\n",(0,r.jsx)(t.hr,{})]})}function m(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>y});n(7294);var r=n(512),s=n(3438),i=n(3692),l=n(8824),c=n(3919),o=n(5999),a=n(2503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(i.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function h(e){let{href:t,icon:n,title:s,description:i}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:s,children:[n," ",s]}),i&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:i,children:i})]})}function p(e){let{item:t}=e;const n=(0,s.LM)(t),r=function(){const{selectMessage:e}=(0,l.c)();return t=>e(t,(0,o.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(h,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,s.xz)(t.docId??void 0);return(0,d.jsx)(h,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function g(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(p,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,s.jA)();return(0,d.jsx)(y,{items:n.items,className:t})}function y(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const i=(0,s.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:i.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(g,{item:e})},t)))})}},8824:(e,t,n)=>{n.d(t,{c:()=>a});var r=n(7294),s=n(2263);const i=["zero","one","two","few","many","other"];function l(e){return i.filter((t=>e.includes(t)))}const c={locale:"en",pluralForms:l(["one","other"]),select:e=>1===e?"one":"other"};function o(){const{i18n:{currentLocale:e}}=(0,s.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:l(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),c}}),[e])}function a(){const e=o();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const s=n.select(t),i=n.pluralForms.indexOf(s);return r[Math.min(i,r.length-1)]}(n,t,e)}}},1151:(e,t,n)=>{n.d(t,{Z:()=>c,a:()=>l});var r=n(7294);const s={},i=r.createContext(s);function l(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);