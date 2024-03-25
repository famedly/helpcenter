"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[820],{3718:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>u});var n=r(5893),s=r(1151);r(4866),r(5162),r(4996);const a={sidebar_label:"Advanced features",title:"Advanced features",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:8},i=void 0,l={id:"help-center/using-famedly/advanced-features",title:"Advanced features",description:"Advanced features",source:"@site/docs/help-center/using-famedly/advanced-features.mdx",sourceDirName:"help-center/using-famedly",slug:"/help-center/using-famedly/advanced-features",permalink:"/helpcenter/help-center/using-famedly/advanced-features",draft:!1,unlisted:!1,editUrl:"https://github.com/famedly/helpcenter/edit/main/docs/help-center/using-famedly/advanced-features.mdx",tags:[],version:"current",lastUpdatedBy:"Niklas Zender",lastUpdatedAt:1711359302,formattedLastUpdatedAt:"Mar 25, 2024",sidebarPosition:8,frontMatter:{sidebar_label:"Advanced features",title:"Advanced features",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:8},sidebar:"helpcenterSidebar",previous:{title:"Encrypted Messages",permalink:"/helpcenter/help-center/using-famedly/encrypted-messages"},next:{title:"Root or Jailbreak",permalink:"/helpcenter/help-center/using-famedly/root-or-jailbreak"}},o={},u=[{value:"General",id:"general",level:2},{value:"Change history visibility of a room",id:"change-history-visibility-of-a-room",level:3},{value:"Ignore users",id:"ignore-users",level:3},{value:"Get reported events",id:"get-reported-events",level:3},{value:"Force logout user",id:"force-logout-user",level:3},{value:"Send server notice",id:"send-server-notice",level:3}];function c(e){const t={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{class:"hero hero--primary",children:(0,n.jsxs)("div",{class:"container",children:[(0,n.jsx)("h2",{class:"hero__title",children:"Advanced features"}),(0,n.jsx)("p",{class:"hero__subtitle",children:"We have some advanced features."}),(0,n.jsx)("p",{children:"We want to test these features first before implementing complicated UI components."})]})}),"\n",(0,n.jsx)(t.h2,{id:"general",children:"General"}),"\n",(0,n.jsx)(t.p,{children:"All advanced features are available via chat commands. You can enter the commands in the textfield of a chatroom and press send. The advanced features need to be enabled per customer."}),"\n",(0,n.jsx)(t.h3,{id:"change-history-visibility-of-a-room",children:"Change history visibility of a room"}),"\n",(0,n.jsx)(t.p,{children:"The user needs to be admin of a room."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/setHistoryVisibility <invited/joined/shared/worldReadable>"})," -> This changes the history visibility in this room."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"ignore-users",children:"Ignore users"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/ignore <@mxid>"})," -> This adds a user to the ignore list."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/unignore <@mxid>"})," -> This removes the user from the ignore list."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/ignoreList"})," -> This command posts the list of ignored users into the notes room."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"get-reported-events",children:"Get reported events"}),"\n",(0,n.jsx)("b",{children:"The user needs to be OrgAdmin."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/getReports <limit>"})," -> This command gets the reported events from the server and posts them in the notes room. (limit is optional)"]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"force-logout-user",children:"Force logout user"}),"\n",(0,n.jsx)("b",{children:"The user needs to be OrgAdmin."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/forceLogout <user-id>"})," -> This command remotes logout a user."]}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"send-server-notice",children:"Send server notice"}),"\n",(0,n.jsx)("b",{children:"The user needs to be OrgAdmin."}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"/serverNotice <message>"})," -> The server notice is then sent to all users in the visible contact list."]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},5162:(e,t,r)=>{r.d(t,{Z:()=>i});r(7294);var n=r(512);const s={tabItem:"tabItem_Ymn6"};var a=r(5893);function i(e){let{children:t,hidden:r,className:i}=e;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r,children:t})}},4866:(e,t,r)=>{r.d(t,{Z:()=>T});var n=r(7294),s=r(512),a=r(2466),i=r(6550),l=r(469),o=r(1980),u=r(7392),c=r(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:r,attributes:n,default:s}}=e;return{value:t,label:r,attributes:n,default:s}}))}(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function p(e){let{queryString:t=!1,groupId:r}=e;const s=(0,i.k6)(),a=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,o._X)(a),(0,n.useCallback)((e=>{if(!a)return;const t=new URLSearchParams(s.location.search);t.set(a,e),s.replace({...s.location,search:t.toString()})}),[a,s])]}function f(e){const{defaultValue:t,queryString:r=!1,groupId:s}=e,a=h(e),[i,o]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=r.find((e=>e.default))??r[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:a}))),[u,d]=p({queryString:r,groupId:s}),[f,v]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[s,a]=(0,c.Nk)(r);return[s,(0,n.useCallback)((e=>{r&&a.set(e)}),[r,a])]}({groupId:s}),b=(()=>{const e=u??f;return m({value:e,tabValues:a})?e:null})();(0,l.Z)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),v(e)}),[d,v,a]),tabValues:a}}var v=r(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=r(5893);function x(e){let{className:t,block:r,selectedValue:n,selectValue:i,tabValues:l}=e;const o=[],{blockElementScrollPositionUntilNextRender:u}=(0,a.o5)(),c=e=>{const t=e.currentTarget,r=o.indexOf(t),s=l[r].value;s!==n&&(u(t),i(s))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const r=o.indexOf(e.currentTarget)+1;t=o[r]??o[0];break}case"ArrowLeft":{const r=o.indexOf(e.currentTarget)-1;t=o[r]??o[o.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:l.map((e=>{let{value:t,label:r,attributes:a}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:e=>o.push(e),onKeyDown:d,onClick:c,...a,className:(0,s.Z)("tabs__item",b.tabItem,a?.className,{"tabs__item--active":n===t}),children:r??t},t)}))})}function y(e){let{lazy:t,children:r,selectedValue:s}=e;const a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=a.find((e=>e.props.value===s));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:a.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})))})}function j(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,s.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,{...e,...t}),(0,g.jsx)(y,{...e,...t})]})}function T(e){const t=(0,v.Z)();return(0,g.jsx)(j,{...e,children:d(e.children)},String(t))}},1151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>i});var n=r(7294);const s={},a=n.createContext(s);function i(e){const t=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:t},e.children)}}}]);