"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[692],{8750:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>u});var r=n(5893),a=n(1151);n(4866),n(5162),n(4996);const s={sidebar_label:"Encrypted Messages",title:"Encrypted Messages",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:7},l=void 0,o={id:"help-center/using-famedly/encrypted-messages",title:"Encrypted Messages",description:"Encrypted Messages",source:"@site/docs/help-center/using-famedly/encrypted-messages.mdx",sourceDirName:"help-center/using-famedly",slug:"/help-center/using-famedly/encrypted-messages",permalink:"/helpcenter/help-center/using-famedly/encrypted-messages",draft:!1,unlisted:!1,editUrl:"https://github.com/famedly/helpcenter/edit/main/docs/help-center/using-famedly/encrypted-messages.mdx",tags:[],version:"current",lastUpdatedBy:"Malin",lastUpdatedAt:1712569958,formattedLastUpdatedAt:"Apr 8, 2024",sidebarPosition:7,frontMatter:{sidebar_label:"Encrypted Messages",title:"Encrypted Messages",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:7},sidebar:"helpcenterSidebar",previous:{title:"QR-Verification",permalink:"/helpcenter/help-center/using-famedly/qr-verification"},next:{title:"Advanced features",permalink:"/helpcenter/help-center/using-famedly/advanced-features"}},i={},u=[{value:"Why are my messages encrypted and unreadable?",id:"why-are-my-messages-encrypted-and-unreadable",level:2}];function c(e){const t={h2:"h2",p:"p",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{class:"hero hero--primary",children:(0,r.jsxs)("div",{class:"container",children:[(0,r.jsx)("h2",{class:"hero__title",children:"Encrypted Messages"}),(0,r.jsx)("p",{class:"hero__subtitle",children:"How to deal with encrypted messages in Famedly"})]})}),"\n",(0,r.jsx)(t.h2,{id:"why-are-my-messages-encrypted-and-unreadable",children:"Why are my messages encrypted and unreadable?"}),"\n",(0,r.jsx)(t.p,{children:"This can happen if the message was sent before you have signed in to your account at\nthis device."}),"\n",(0,r.jsx)(t.p,{children:"It is also possible that the sender has blocked your device or something\nwent wrong with the internet connection."}),"\n",(0,r.jsx)(t.p,{children:"Are you able to read the message on another\nsession? Then you can transfer the message from it! Go to Settings > Devices and make sure\nthat your devices have verified each other. When you open the room the next time and both\nsessions are in the foreground, the keys will be transmitted automatically."}),"\n",(0,r.jsx)(t.p,{children:"Do you not want to lose the keys when logging out or switching devices? Make sure that you have enabled\nthe chat backup and do not lose your passphrase."})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},5162:(e,t,n)=>{n.d(t,{Z:()=>l});n(7294);var r=n(512);const a={tabItem:"tabItem_Ymn6"};var s=n(5893);function l(e){let{children:t,hidden:n,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},4866:(e,t,n)=>{n.d(t,{Z:()=>k});var r=n(7294),a=n(512),s=n(2466),l=n(6550),o=n(469),i=n(1980),u=n(7392),c=n(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:t,children:n}=e;return(0,r.useMemo)((()=>{const e=t??function(e){return d(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function p(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:n}=e;const a=(0,l.k6)(),s=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,i._X)(s),(0,r.useCallback)((e=>{if(!s)return;const t=new URLSearchParams(a.location.search);t.set(s,e),a.replace({...a.location,search:t.toString()})}),[s,a])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,s=h(e),[l,i]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:s}))),[u,d]=m({queryString:n,groupId:a}),[f,b]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,s]=(0,c.Nk)(n);return[a,(0,r.useCallback)((e=>{n&&s.set(e)}),[n,s])]}({groupId:a}),y=(()=>{const e=u??f;return p({value:e,tabValues:s})?e:null})();(0,o.Z)((()=>{y&&i(y)}),[y]);return{selectedValue:l,selectValue:(0,r.useCallback)((e=>{if(!p({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);i(e),d(e),b(e)}),[d,b,s]),tabValues:s}}var b=n(2389);const y={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(5893);function v(e){let{className:t,block:n,selectedValue:r,selectValue:l,tabValues:o}=e;const i=[],{blockElementScrollPositionUntilNextRender:u}=(0,s.o5)(),c=e=>{const t=e.currentTarget,n=i.indexOf(t),a=o[n].value;a!==r&&(u(t),l(a))},d=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=i.indexOf(e.currentTarget)+1;t=i[n]??i[0];break}case"ArrowLeft":{const n=i.indexOf(e.currentTarget)-1;t=i[n]??i[i.length-1];break}}t?.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:o.map((e=>{let{value:t,label:n,attributes:s}=e;return(0,g.jsx)("li",{role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:e=>i.push(e),onKeyDown:d,onClick:c,...s,className:(0,a.Z)("tabs__item",y.tabItem,s?.className,{"tabs__item--active":r===t}),children:n??t},t)}))})}function w(e){let{lazy:t,children:n,selectedValue:a}=e;const s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=s.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})))})}function x(e){const t=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",y.tabList),children:[(0,g.jsx)(v,{...e,...t}),(0,g.jsx)(w,{...e,...t})]})}function k(e){const t=(0,b.Z)();return(0,g.jsx)(x,{...e,children:d(e.children)},String(t))}},1151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var r=n(7294);const a={},s=r.createContext(a);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);