"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[697],{5243:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>c,metadata:()=>o,toc:()=>d});var r=n(5893),i=n(1151),s=n(2991);const c={slug:"/first-steps",title:"Administration",hide_title:!0},a=void 0,o={id:"help-center/administration/index",title:"Administration",description:"Administration",source:"@site/docs/help-center/administration/index.mdx",sourceDirName:"help-center/administration",slug:"/first-steps",permalink:"/helpcenter/first-steps",draft:!1,unlisted:!1,editUrl:"https://github.com/famedly/helpcenter/edit/main/docs/help-center/administration/index.mdx",tags:[],version:"current",lastUpdatedBy:"Malin",lastUpdatedAt:1712569958,formattedLastUpdatedAt:"Apr 8, 2024",frontMatter:{slug:"/first-steps",title:"Administration",hide_title:!0},sidebar:"helpcenterSidebar",previous:{title:"Encryption & Security",permalink:"/helpcenter/help-center/your-account/encryption-security"},next:{title:"Manage members",permalink:"/helpcenter/help-center/administration/members"}},l={},d=[];function m(e){const t={hr:"hr",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{class:"hero hero--primary",children:(0,r.jsx)("div",{class:"container",children:(0,r.jsx)("h2",{class:"hero__title",children:"Administration"})})}),"\n",(0,r.jsx)("br",{}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(s.Z,{}),"\n",(0,r.jsx)(t.hr,{})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},2991:(e,t,n)=>{n.d(t,{Z:()=>j});n(7294);var r=n(512),i=n(3438),s=n(3692),c=n(3919),a=n(5999),o=n(2503);const l={cardContainer:"cardContainer_fWXF",cardTitle:"cardTitle_rnsV",cardDescription:"cardDescription_PWke"};var d=n(5893);function m(e){let{href:t,children:n}=e;return(0,d.jsx)(s.Z,{href:t,className:(0,r.Z)("card padding--lg",l.cardContainer),children:n})}function p(e){let{href:t,icon:n,title:i,description:s}=e;return(0,d.jsxs)(m,{href:t,children:[(0,d.jsxs)(o.Z,{as:"h2",className:(0,r.Z)("text--truncate",l.cardTitle),title:i,children:[n," ",i]}),s&&(0,d.jsx)("p",{className:(0,r.Z)("text--truncate",l.cardDescription),title:s,children:s})]})}function u(e){let{item:t}=e;const n=(0,i.LM)(t);return n?(0,d.jsx)(p,{href:n,icon:"\ud83d\uddc3\ufe0f",title:t.label,description:t.description??(0,a.I)({message:"{count} items",id:"theme.docs.DocCard.categoryDescription",description:"The default description for a category card in the generated index about how many items this category includes"},{count:t.items.length})}):null}function h(e){let{item:t}=e;const n=(0,c.Z)(t.href)?"\ud83d\udcc4\ufe0f":"\ud83d\udd17",r=(0,i.xz)(t.docId??void 0);return(0,d.jsx)(p,{href:t.href,icon:n,title:t.label,description:t.description??r?.description})}function f(e){let{item:t}=e;switch(t.type){case"link":return(0,d.jsx)(h,{item:t});case"category":return(0,d.jsx)(u,{item:t});default:throw new Error(`unknown item type ${JSON.stringify(t)}`)}}function x(e){let{className:t}=e;const n=(0,i.jA)();return(0,d.jsx)(j,{items:n.items,className:t})}function j(e){const{items:t,className:n}=e;if(!t)return(0,d.jsx)(x,{...e});const s=(0,i.MN)(t);return(0,d.jsx)("section",{className:(0,r.Z)("row",n),children:s.map(((e,t)=>(0,d.jsx)("article",{className:"col col--6 margin-bottom--lg",children:(0,d.jsx)(f,{item:e})},t)))})}},1151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>c});var r=n(7294);const i={},s=r.createContext(i);function c(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);