"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[85],{3595:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>u,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>c,toc:()=>d});var n=t(5893),a=t(1151),s=t(4866),l=t(5162);const i={sidebar_label:"Manage members",title:"Manage members",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},o=void 0,c={id:"help-center/administration/members",title:"Manage members",description:"Members",source:"@site/docs/help-center/administration/members.mdx",sourceDirName:"help-center/administration",slug:"/help-center/administration/members",permalink:"/helpcenter/help-center/administration/members",draft:!1,unlisted:!1,editUrl:"https://github.com/famedly/helpcenter/edit/main/docs/help-center/administration/members.mdx",tags:[],version:"current",lastUpdatedBy:"Nicolas Werner",lastUpdatedAt:1713863225e3,sidebarPosition:1,frontMatter:{sidebar_label:"Manage members",title:"Manage members",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},sidebar:"helpcenterSidebar",previous:{title:"Administration",permalink:"/helpcenter/administration"},next:{title:"Manage groups",permalink:"/helpcenter/help-center/administration/group"}},u={},d=[{value:"Add members",id:"add-members",level:2},{value:"Search members",id:"search-members",level:2}];function h(e){const r={admonition:"admonition",h2:"h2",hr:"hr",p:"p",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)("div",{class:"hero hero--primary",children:(0,n.jsxs)("div",{class:"container",children:[(0,n.jsx)("h2",{class:"hero__title",children:"Members"}),(0,n.jsx)("p",{class:"hero__subtitle",children:"What are Members?"}),(0,n.jsx)("p",{children:"Members are all persons that are working wihin your organization."})]})}),"\n",(0,n.jsx)(r.h2,{id:"add-members",children:"Add members"}),"\n",(0,n.jsx)(r.p,{children:"Add a new member to your organization."}),"\n",(0,n.jsx)(s.Z,{children:(0,n.jsx)(l.Z,{value:"desktop",label:"Desktop",default:!0,children:(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["Go to the ",(0,n.jsx)("b",{children:"Members"})," section."]}),(0,n.jsxs)("li",{children:["Click on ",(0,n.jsx)("b",{children:"+ Add Member"}),"."]}),(0,n.jsx)("li",{children:"Fill out the necessary information."}),(0,n.jsx)("li",{children:"Click on Create."})]})})}),"\n",(0,n.jsx)(r.admonition,{type:"note",children:(0,n.jsx)(r.p,{children:"By clicking Create QR-code for login a welcome-page will be created for the new user. It contains al necessary information for a seemles start (name of the organization, server address, username, onetime start password, QR-code for the use off the app)."})}),"\n",(0,n.jsx)(r.h2,{id:"search-members",children:"Search members"}),"\n",(0,n.jsx)(r.p,{children:"You are able to search for members in admin panel."}),"\n",(0,n.jsx)(s.Z,{children:(0,n.jsx)(l.Z,{value:"desktop",label:"Desktop",default:!0,children:(0,n.jsxs)("ol",{children:[(0,n.jsxs)("li",{children:["Go to the ",(0,n.jsx)("b",{children:"Members"})," section."]}),(0,n.jsxs)("li",{children:["Click on ",(0,n.jsx)("b",{children:"\ud83d\udd0d\xa0Search \u2026"}),"."]}),(0,n.jsx)("li",{children:"Begin to type in the name, username or E-mail address of the person you are searching for."}),(0,n.jsx)("li",{children:"While typing all possible search results are displayed below."})]})})}),"\n",(0,n.jsx)(r.hr,{})]})}function m(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(h,{...e})}):h(e)}},5162:(e,r,t)=>{t.d(r,{Z:()=>l});t(7294);var n=t(512);const a={tabItem:"tabItem_Ymn6"};var s=t(5893);function l(e){let{children:r,hidden:t,className:l}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:t,children:r})}},4866:(e,r,t)=>{t.d(r,{Z:()=>w});var n=t(7294),a=t(512),s=t(2466),l=t(6550),i=t(469),o=t(1980),c=t(7392),u=t(12);function d(e){return n.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:r}=e;return!!r&&"object"==typeof r&&"value"in r}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:r,children:t}=e;return(0,n.useMemo)((()=>{const e=r??function(e){return d(e).map((e=>{let{props:{value:r,label:t,attributes:n,default:a}}=e;return{value:r,label:t,attributes:n,default:a}}))}(t);return function(e){const r=(0,c.l)(e,((e,r)=>e.value===r.value));if(r.length>0)throw new Error(`Docusaurus error: Duplicate values "${r.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[r,t])}function m(e){let{value:r,tabValues:t}=e;return t.some((e=>e.value===r))}function b(e){let{queryString:r=!1,groupId:t}=e;const a=(0,l.k6)(),s=function(e){let{queryString:r=!1,groupId:t}=e;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:r,groupId:t});return[(0,o._X)(s),(0,n.useCallback)((e=>{if(!s)return;const r=new URLSearchParams(a.location.search);r.set(s,e),a.replace({...a.location,search:r.toString()})}),[s,a])]}function p(e){const{defaultValue:r,queryString:t=!1,groupId:a}=e,s=h(e),[l,o]=(0,n.useState)((()=>function(e){let{defaultValue:r,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${r}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return r}const n=t.find((e=>e.default))??t[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:r,tabValues:s}))),[c,d]=b({queryString:t,groupId:a}),[p,f]=function(e){let{groupId:r}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(r),[a,s]=(0,u.Nk)(t);return[a,(0,n.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:a}),v=(()=>{const e=c??p;return m({value:e,tabValues:s})?e:null})();(0,i.Z)((()=>{v&&o(v)}),[v]);return{selectedValue:l,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);o(e),d(e),f(e)}),[d,f,s]),tabValues:s}}var f=t(2389);const v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function g(e){let{className:r,block:t,selectedValue:n,selectValue:l,tabValues:i}=e;const o=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),u=e=>{const r=e.currentTarget,t=o.indexOf(r),a=i[t].value;a!==n&&(c(r),l(a))},d=e=>{let r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=o.indexOf(e.currentTarget)+1;r=o[t]??o[0];break}case"ArrowLeft":{const t=o.indexOf(e.currentTarget)-1;r=o[t]??o[o.length-1];break}}r?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},r),children:i.map((e=>{let{value:r,label:t,attributes:s}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:n===r?0:-1,"aria-selected":n===r,ref:e=>o.push(e),onKeyDown:d,onClick:u,...s,className:(0,a.Z)("tabs__item",v.tabItem,s?.className,{"tabs__item--active":n===r}),children:t??r},r)}))})}function j(e){let{lazy:r,children:t,selectedValue:a}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(r){const e=s.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map(((e,r)=>(0,n.cloneElement)(e,{key:r,hidden:e.props.value!==a})))})}function y(e){const r=p(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",v.tabList),children:[(0,x.jsx)(g,{...e,...r}),(0,x.jsx)(j,{...e,...r})]})}function w(e){const r=(0,f.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(r))}},1151:(e,r,t)=>{t.d(r,{Z:()=>i,a:()=>l});var n=t(7294);const a={},s=n.createContext(a);function l(e){const r=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function i(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),n.createElement(s.Provider,{value:r},e.children)}}}]);