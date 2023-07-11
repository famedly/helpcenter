"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[426],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>m});var a=l(7294);function r(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function n(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,a)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?n(Object(l),!0).forEach((function(t){r(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):n(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,a,r=function(e,t){if(null==e)return{};var l,a,r={},n=Object.keys(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||(r[l]=e[l]);return r}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)l=n[a],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(r[l]=e[l])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var l=e.components,r=e.mdxType,n=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(l),h=r,m=d["".concat(u,".").concat(h)]||d[h]||p[h]||n;return l?a.createElement(m,i(i({ref:t},c),{},{components:l})):a.createElement(m,i({ref:t},c))}));function m(e,t){var l=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=l.length,i=new Array(n);i[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<n;s++)i[s]=l[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,l)}h.displayName="MDXCreateElement"},5162:(e,t,l)=>{l.d(t,{Z:()=>i});var a=l(7294),r=l(6010);const n={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:l,className:i}=e;return a.createElement("div",{role:"tabpanel",className:(0,r.Z)(n.tabItem,i),hidden:l},t)}},4866:(e,t,l)=>{l.d(t,{Z:()=>w});var a=l(7462),r=l(7294),n=l(6010),i=l(2466),o=l(6550),u=l(1980),s=l(7392),c=l(12);function d(e){return function(e){return r.Children.map(e,(e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:l,attributes:a,default:r}}=e;return{value:t,label:l,attributes:a,default:r}}))}function p(e){const{values:t,children:l}=e;return(0,r.useMemo)((()=>{const e=t??d(l);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function h(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function m(e){let{queryString:t=!1,groupId:l}=e;const a=(0,o.k6)(),n=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,u._X)(n),(0,r.useCallback)((e=>{if(!n)return;const t=new URLSearchParams(a.location.search);t.set(n,e),a.replace({...a.location,search:t.toString()})}),[n,a])]}function f(e){const{defaultValue:t,queryString:l=!1,groupId:a}=e,n=p(e),[i,o]=(0,r.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=l.find((e=>e.default))??l[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:n}))),[u,s]=m({queryString:l,groupId:a}),[d,f]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,n]=(0,c.Nk)(l);return[a,(0,r.useCallback)((e=>{l&&n.set(e)}),[l,n])]}({groupId:a}),b=(()=>{const e=u??d;return h({value:e,tabValues:n})?e:null})();(0,r.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:i,selectValue:(0,r.useCallback)((e=>{if(!h({value:e,tabValues:n}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,n]),tabValues:n}}var b=l(2389);const k={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:l,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,i.o5)(),p=e=>{const t=e.currentTarget,l=c.indexOf(t),a=s[l].value;a!==o&&(d(t),u(a))},h=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;t=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;t=c[l]??c[c.length-1];break}}t?.focus()};return r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,n.Z)("tabs",{"tabs--block":l},t)},s.map((e=>{let{value:t,label:l,attributes:i}=e;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:h,onClick:p},i,{className:(0,n.Z)("tabs__item",k.tabItem,i?.className,{"tabs__item--active":o===t})}),l??t)})))}function v(e){let{lazy:t,children:l,selectedValue:a}=e;const n=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=n.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return r.createElement("div",{className:"margin-top--md"},n.map(((e,t)=>(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function g(e){const t=f(e);return r.createElement("div",{className:(0,n.Z)("tabs-container",k.tabList)},r.createElement(y,(0,a.Z)({},e,t)),r.createElement(v,(0,a.Z)({},e,t)))}function w(e){const t=(0,b.Z)();return r.createElement(g,(0,a.Z)({key:String(t)},e))}},9564:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>f,frontMatter:()=>u,metadata:()=>c,toc:()=>p});var a=l(7462),r=(l(7294),l(3905)),n=l(4866),i=l(5162),o=l(4996);const u={sidebar_label:"Share files",title:"Share files",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:4},s=void 0,c={unversionedId:"help-center/using-famedly/share-files",id:"help-center/using-famedly/share-files",title:"Share files",description:"Share files",source:"@site/docs/help-center/using-famedly/share-files.mdx",sourceDirName:"help-center/using-famedly",slug:"/help-center/using-famedly/share-files",permalink:"/helpcenter/help-center/using-famedly/share-files",draft:!1,editUrl:"https://github.com/famedly/helpcenter/edit/main/docs/docs/help-center/using-famedly/share-files.mdx",tags:[],version:"current",lastUpdatedBy:"Niklas Zender",lastUpdatedAt:1689080953,formattedLastUpdatedAt:"Jul 11, 2023",sidebarPosition:4,frontMatter:{sidebar_label:"Share files",title:"Share files",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:4},sidebar:"helpcenterSidebar",previous:{title:"Messages",permalink:"/helpcenter/help-center/using-famedly/messages"},next:{title:"Audio & Video",permalink:"/helpcenter/help-center/using-famedly/audio-video"}},d={},p=[{value:"Share files in Famedly",id:"share-files-in-famedly",level:2},{value:"Share images and videos",id:"share-images-and-videos",level:2},{value:"Download files and pictures",id:"download-files-and-pictures",level:2},{value:"Make image sections unrecognizable",id:"make-image-sections-unrecognizable",level:2}],h={toc:p},m="wrapper";function f(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},h,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{class:"hero hero--primary"},(0,r.kt)("div",{class:"container"},(0,r.kt)("h2",{class:"hero__title"},"Share files"),(0,r.kt)("p",{class:"hero__subtitle"},"Sharing files can improve your work."),(0,r.kt)("p",null,"In Famedly it is possible to share various files."))),(0,r.kt)("h2",{id:"share-files-in-famedly"},"Share files in Famedly"),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"Open a group or private chat you want to share the file with."),(0,r.kt)("li",null,"Click on the ",(0,r.kt)("b",null,"Paperclip icon"),"."),(0,r.kt)("li",null,"Select the file you want to share and confirm."))),(0,r.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"Open a group or private chat you want to share the file with."),(0,r.kt)("li",null,"Click on the ",(0,r.kt)("b",null,"Paperclip icon"),"."),(0,r.kt)("li",null,"Select ",(0,r.kt)("b",null,"Document"),"."),(0,r.kt)("li",null,"Select the file you want to share and confirm.")))),(0,r.kt)("img",{alt:"Create Groupchat",src:(0,o.Z)("/img/chatroom_private_1.PNG.png"),width:"40%"}),(0,r.kt)("img",{alt:"Create Groupchat",src:(0,o.Z)("/img/chatroom_private_mediasharing_1.PNG.png"),width:"40%"}),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"share-images-and-videos"},"Share images and videos"),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"Open a group or private chat you want to share the picture or video with."),(0,r.kt)("li",null,"Click on the ",(0,r.kt)("b",null,"paperclip icon"),"."),(0,r.kt)("li",null,"Select the image/video from your file system."),(0,r.kt)("li",null,"Click ",(0,r.kt)("b",null,"Yes")," to confirm sharing."))),(0,r.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"Open a group or private chat you want to share the picture or video with."),(0,r.kt)("li",null,"Tap ",(0,r.kt)("b",null,"Video"),", ",(0,r.kt)("b",null,"Gallery")," or ",(0,r.kt)("b",null,"Camera"),"."),(0,r.kt)("li",null,"Select a picture/video or take a picture/video with the camera."),(0,r.kt)("li",null,"Optional: Tap ",(0,r.kt)("b",null,"Black icon")," if you want to blacken parts of the picture."),(0,r.kt)("li",null,"Tap the ",(0,r.kt)("b",null,"Checkmark icon"),".")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Files can also be dragged and dropped into the chat room where they would like to be sent.")),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"download-files-and-pictures"},"Download files and pictures"),(0,r.kt)("p",null,"You are able to download files and pictures that you received in a chat."),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"Open the chat with the file you want to download."),(0,r.kt)("li",null,"Click on the file, then on the download arrow in the top right corner."),(0,r.kt)("li",null,"Confirm the notification."))),(0,r.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"Open the chat with the file you want to download."),(0,r.kt)("li",null,"Click on the file an then on the arrow in the top right corner."),(0,r.kt)("li",null,"Confirm the notification.")))),(0,r.kt)("hr",null),(0,r.kt)("h2",{id:"make-image-sections-unrecognizable"},"Make image sections unrecognizable"),(0,r.kt)(n.Z,{mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,r.kt)("ol",null,(0,r.kt)("li",null,"Follow the steps of sharing an image."),(0,r.kt)("li",null,"Before tapping the ",(0,r.kt)("b",null,"Checkmark icon")," you can select the colors black or white by clicking on the small painter scroll icon in the bottom right corner of the app when you have selected an picture."),(0,r.kt)("li",null,"Tap the ",(0,r.kt)("b",null,"Checkmark icon")," after you are finished.")))))}f.isMDXComponent=!0}}]);