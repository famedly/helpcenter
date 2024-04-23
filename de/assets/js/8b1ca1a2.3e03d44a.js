"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[120],{6981:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>i,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>u});var r=n(5893),o=n(1151),c=n(2991);const s={slug:"/ihr-konto",title:"Ihr Konto",hide_title:!0},i=void 0,l={id:"help-center/your-account/index",title:"Ihr Konto",description:"Ihr Konto",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/your-account/index.mdx",sourceDirName:"help-center/your-account",slug:"/ihr-konto",permalink:"/helpcenter/de/ihr-konto",draft:!1,unlisted:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter/de",tags:[],version:"current",lastUpdatedBy:"Nicolas Werner",lastUpdatedAt:1713863225e3,frontMatter:{slug:"/ihr-konto",title:"Ihr Konto",hide_title:!0},sidebar:"helpcenterSidebar",previous:{title:"Erweiterte Funktionen",permalink:"/helpcenter/de/help-center/using-famedly/advanced-features"},next:{title:"Einstellungen",permalink:"/helpcenter/de/help-center/your-account/account-settings"}},a={},u=[];function d(e){const t={hr:"hr",...(0,o.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{class:"hero hero--primary",children:(0,r.jsx)("div",{class:"container",children:(0,r.jsx)("h2",{class:"hero__title",children:"Ihr Konto"})})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(c.Z,{}),"\n",(0,r.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>j});n(7294);var r=n(512),o=n(3438),c=n(3692),s=n(8824),i=n(3919),l=n(5999),a=n(2503);const u={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function h(e){let{href:t,children:n}=e;return(0,d.jsx)(c.Z,{href:t,className:(0,r.Z)("card padding--lg",u.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:o,description:c}=e;return(0,d.jsxs)(h,{href:t,children:[(0,d.jsxs)(a.Z,{as:"h2",className:(0,r.Z)("text--truncate",u.cardTitle),title:o,children:[n," ",o]}),c&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",u.cardDescription),title:c,children:c})]})}function m(e){let{item:t}=e;const n=(0,o.LM)(t),r=function(){const{selectMessage:e}=(0,s.c)();return t=>e(t,(0,l.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription.plurals",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t}))}();return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??r(t.items.length)}):null}function f(e){let{item:t}=e;const n=(0,i.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,o.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function x(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(f,{item:t});case"category":return(0,d.jsx)(m,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function g(e){let{className:t}=e;const n=(0,o.jA)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(g,{...e});const c=(0,o.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:c.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(x,{item:e})},t)))})}},8824:(e,t,n)=>{n.d(t,{c:()=>a});var r=n(7294),o=n(2263);const c=["zero","one","two","few","many","other"];function s(e){return c.filter((t=>e.includes(t)))}const i={locale:"en",pluralForms:s(["one","other"]),select:e=>1===e?"one":"other"};function l(){const{i18n:{currentLocale:e}}=(0,o.Z)();return(0,r.useMemo)((()=>{try{return function(e){const t=new Intl.PluralRules(e);return{locale:e,pluralForms:s(t.resolvedOptions().pluralCategories),select:e=>t.select(e)}}(e)}catch(t){return console.error(`Failed to use Intl.PluralRules for locale "${e}".\nDocusaurus will fallback to the default (English) implementation.\nError: ${t.message}\n`),i}}),[e])}function a(){const e=l();return{selectMessage:(t,n)=>function(e,t,n){const r=e.split("|");if(1===r.length)return r[0];r.length>n.pluralForms.length&&console.error(`For locale=${n.locale}, a maximum of ${n.pluralForms.length} plural forms are expected (${n.pluralForms.join(",")}), but the message contains ${r.length}: ${e}`);const o=n.select(t),c=n.pluralForms.indexOf(o);return r[Math.min(c,r.length-1)]}(n,t,e)}}},1151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>s});var r=n(7294);const o={},c=r.createContext(o);function s(e){const t=r.useContext(c);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(c.Provider,{value:t},e.children)}}}]);