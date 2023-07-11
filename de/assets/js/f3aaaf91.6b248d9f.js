"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[681],{3905:(e,t,l)=>{l.d(t,{Zo:()=>c,kt:()=>k});var n=l(7294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function o(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function i(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?o(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):o(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function r(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)l=o[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var u=n.createContext({}),s=function(e){var t=n.useContext(u),l=t;return e&&(l="function"==typeof e?e(t):i(i({},t),e)),l},c=function(e){var t=s(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,c=r(e,["components","mdxType","originalType","parentName"]),p=s(l),d=a,k=p["".concat(u,".").concat(d)]||p[d]||h[d]||o;return l?n.createElement(k,i(i({ref:t},c),{},{components:l})):n.createElement(k,i({ref:t},c))}));function k(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=l.length,i=new Array(o);i[0]=d;var r={};for(var u in t)hasOwnProperty.call(t,u)&&(r[u]=t[u]);r.originalType=e,r[p]="string"==typeof e?e:a,i[1]=r;for(var s=2;s<o;s++)i[s]=l[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,l)}d.displayName="MDXCreateElement"},5162:(e,t,l)=>{l.d(t,{Z:()=>i});var n=l(7294),a=l(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:l,className:i}=e;return n.createElement("div",{role:"tabpanel",className:(0,a.Z)(o.tabItem,i),hidden:l},t)}},4866:(e,t,l)=>{l.d(t,{Z:()=>T});var n=l(7462),a=l(7294),o=l(6010),i=l(2466),r=l(6550),u=l(1980),s=l(7392),c=l(12);function p(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:l,attributes:n,default:a}}=e;return{value:t,label:l,attributes:n,default:a}}))}function h(e){const{values:t,children:l}=e;return(0,a.useMemo)((()=>{const e=t??p(l);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,l])}function d(e){let{value:t,tabValues:l}=e;return l.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:l}=e;const n=(0,r.k6)(),o=function(e){let{queryString:t=!1,groupId:l}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!l)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return l??null}({queryString:t,groupId:l});return[(0,u._X)(o),(0,a.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(n.location.search);t.set(o,e),n.replace({...n.location,search:t.toString()})}),[o,n])]}function m(e){const{defaultValue:t,queryString:l=!1,groupId:n}=e,o=h(e),[i,r]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:l}=e;if(0===l.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!d({value:t,tabValues:l}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${l.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const n=l.find((e=>e.default))??l[0];if(!n)throw new Error("Unexpected error: 0 tabValues");return n.value}({defaultValue:t,tabValues:o}))),[u,s]=k({queryString:l,groupId:n}),[p,m]=function(e){let{groupId:t}=e;const l=function(e){return e?`docusaurus.tab.${e}`:null}(t),[n,o]=(0,c.Nk)(l);return[n,(0,a.useCallback)((e=>{l&&o.set(e)}),[l,o])]}({groupId:n}),b=(()=>{const e=u??p;return d({value:e,tabValues:o})?e:null})();(0,a.useLayoutEffect)((()=>{b&&r(b)}),[b]);return{selectedValue:i,selectValue:(0,a.useCallback)((e=>{if(!d({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);r(e),s(e),m(e)}),[s,m,o]),tabValues:o}}var b=l(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:l,selectedValue:r,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),h=e=>{const t=e.currentTarget,l=c.indexOf(t),n=s[l].value;n!==r&&(p(t),u(n))},d=e=>{let t=null;switch(e.key){case"Enter":h(e);break;case"ArrowRight":{const l=c.indexOf(e.currentTarget)+1;t=c[l]??c[0];break}case"ArrowLeft":{const l=c.indexOf(e.currentTarget)-1;t=c[l]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":l},t)},s.map((e=>{let{value:t,label:l,attributes:i}=e;return a.createElement("li",(0,n.Z)({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,key:t,ref:e=>c.push(e),onKeyDown:d,onClick:h},i,{className:(0,o.Z)("tabs__item",g.tabItem,i?.className,{"tabs__item--active":r===t})}),l??t)})))}function v(e){let{lazy:t,children:l,selectedValue:n}=e;const o=(Array.isArray(l)?l:[l]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===n));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==n}))))}function y(e){const t=m(e);return a.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},a.createElement(f,(0,n.Z)({},e,t)),a.createElement(v,(0,n.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return a.createElement(y,(0,n.Z)({key:String(t)},e))}},3641:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>c,toc:()=>h});var n=l(7462),a=(l(7294),l(3905)),o=l(4866),i=l(5162),r=l(4996);const u={sidebar_label:"Chats",title:"Chats",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},s=void 0,c={unversionedId:"help-center/using-famedly/chats",id:"help-center/using-famedly/chats",title:"Chats",description:"Chats",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/using-famedly/chats.mdx",sourceDirName:"help-center/using-famedly",slug:"/help-center/using-famedly/chats",permalink:"/helpcenter/de/help-center/using-famedly/chats",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_label:"Chats",title:"Chats",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},sidebar:"helpcenterSidebar",previous:{title:"Famedly nutzen",permalink:"/helpcenter/de/using-famedly"},next:{title:"Nachrichten",permalink:"/helpcenter/de/help-center/using-famedly/messages"}},p={},h=[{value:"Direktchat starten",id:"direktchat-starten",level:2},{value:"Start group chat",id:"start-group-chat",level:2},{value:"Join chat",id:"join-chat",level:2},{value:"Mute chat",id:"mute-chat",level:2},{value:"Leave chat",id:"leave-chat",level:2},{value:"Delete left chats",id:"delete-left-chats",level:2},{value:"Group chat settings",id:"group-chat-settings",level:2},{value:"Edit a group name",id:"edit-a-group-name",level:3},{value:"Add or edit a group description",id:"add-or-edit-a-group-description",level:3},{value:"Set group picture",id:"set-group-picture",level:3},{value:"Change group picture",id:"change-group-picture",level:3},{value:"Add people to a group",id:"add-people-to-a-group",level:3},{value:"Remove people from a group",id:"remove-people-from-a-group",level:3},{value:"Restrict messaging to group admins",id:"restrict-messaging-to-group-admins",level:3},{value:"Promote members to group admin",id:"promote-members-to-group-admin",level:3},{value:"External label",id:"external-label",level:2},{value:"Chat tips and best practices",id:"chat-tips-and-best-practices",level:2}],d={toc:h},k="wrapper";function m(e){let{components:t,...l}=e;return(0,a.kt)(k,(0,n.Z)({},d,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"hero hero--primary"},(0,a.kt)("div",{class:"container"},(0,a.kt)("h2",{class:"hero__title"},"Chats"),(0,a.kt)("p",{class:"hero__subtitle"},"What is a chat?"),(0,a.kt)("p",null,"Famedly offers chat functionality for organizing conversations among multiple people. Wir helfen dabei, Ordnung und Klarheit in der allt\xe4glich Arbeit zu schaffen. Nutzen Sie Chats f\xfcr eine bessere Organisation und Aufgabenverteilung, f\xfcr eine schnellere Entscheidungsfindung und schnellerem Arbeitsfortschritt. Famedly's compatibility with the Matrix Communication protocol allows adding people using Matrix Clients from different vendors to chats."))),(0,a.kt)("h2",{id:"direktchat-starten"},"Direktchat starten"),(0,a.kt)("p",null,"Direkte Chats in Famedly sind mit einer sicheren Ende-zu-Ende-Verschl\xfcsselung verschl\xfcsselt. Wir stellen sicher, dass nur die Teilnehmer im Chatraum die ausgetauschten Nachrichten entschl\xfcsseln und darauf zugreifen k\xf6nnen. This heightened\nsecurity measure provides a secure environment for confidential conversations."),(0,a.kt)("p",null,"Um einen direkten Chat mit anderen Personen in Famedly zu starten, befolgen Sie diese Schritten:"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"web",label:"Web",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,'Vergewissern Sie sich, dass Sie im Bereich "Chats" sind.'),(0,a.kt)("li",null,"Klicken Sie auf die ",(0,a.kt)("b",null,"+ Taste")," neben dem Filter im oberen linken Bereich Ihres Bildschirms."),(0,a.kt)("li",null,"W\xe4hlen Sie die Person, die Sie einladen m\xf6chten, aus oder suchen Sie sie."),(0,a.kt)("li",null,"Klicke auf ",(0,a.kt)("b",null,"Chat starten")," um einen Chat zu starten."))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,'Stellen Sie sicher, dass Sie sich im Bereich "Chats" befinden.'),(0,a.kt)("li",null,"Tippen Sie ",(0,a.kt)("b",null,"+ Taste")," oben rechts auf dem Bildschirm."),(0,a.kt)("li",null,"W\xe4hlen oder suchen Sie die Person, die Sie zum Chat einladen wollen."),(0,a.kt)("li",null,"Tippen Sie auf den ",(0,a.kt)("b",null,"Chat starten")," um einen Chat zu beginnen.")))),(0,a.kt)("h2",{id:"start-group-chat"},"Start group chat"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"web",label:"Web",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,'Make sure you are in the "Chats" section.'),(0,a.kt)("li",null,"Click on the ",(0,a.kt)("b",null,"+\xa0Button")," next to the filter in the top left area of your screen."),(0,a.kt)("li",null,"Click on ",(0,a.kt)("b",null,"New Group")," in the top right corner."),(0,a.kt)("li",null,"Name the group accordingly."),(0,a.kt)("li",null,"Select or search the person you want to invite to the group chat."),(0,a.kt)("li",null,"Click ",(0,a.kt)("b",null,"Create")," to create a group chat."))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,'Make sure you are in the "Chats" section.'),(0,a.kt)("li",null,"Tap ",(0,a.kt)("b",null,"+ Button")," in the top right area of the screen."),(0,a.kt)("li",null,"Tap on ",(0,a.kt)("b",null,"New Group")," in the top right corner."),(0,a.kt)("li",null,"Name the group accordingly."),(0,a.kt)("li",null,"Select or search the person you want to invite to the group chat."),(0,a.kt)("li",null,"Tap the ",(0,a.kt)("b",null,"Create")," to create a group chat.")))),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},'Expert tip: Looking for a end-to-end encrypted notepad? Just create a group chat only with yourself, name it "notepad" and you have a secure place to store files and text.')),(0,a.kt)("h2",{id:"join-chat"},"Join chat"),(0,a.kt)("p",null,"To join a chat, you must be invited by a member of that chat."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"You can only join a chat if you have received an invitation."),(0,a.kt)("li",null,"All invitations can be found at the top of the chats list."),(0,a.kt)("li",null,"Click on the chat you have been invited to."),(0,a.kt)("li",null,"Accept the invitation."))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"You can only join a chat if you have received an invitation."),(0,a.kt)("li",null,"All invitations can be found at the top of the chats list."),(0,a.kt)("li",null,"Click on the chat you have been invited to."),(0,a.kt)("li",null,"Accept the invitation.")))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"If you decline the invitation, you will have to ask the inviting person again to invite you again.")),(0,a.kt)("h2",{id:"mute-chat"},"Mute chat"),(0,a.kt)("p",null,"It is possible to mute notifications for chats. This can be helpful if many members communicate in a group and you do not necessarily want to be informed about new messages."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Click on the ",(0,a.kt)("b",null,"three dots")," in the top right corner inside the chat you want to mute."),(0,a.kt)("li",null,"Click on the ",(0,a.kt)("b",null,"Mute chat"),"\xa0to mute the chat."))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Tap on the ",(0,a.kt)("b",null,"three dots")," in the top right corner inside the chat you want to mute."),(0,a.kt)("li",null,"Tap the ",(0,a.kt)("b",null,"Mute chat"),"\xa0to mute the chat.")))),(0,a.kt)("admonition",{type:"tip"},(0,a.kt)("p",{parentName:"admonition"},"You can unmute the chat again, by following the same steps and selecting ",(0,a.kt)("b",null,"Unmute chat"),".")),(0,a.kt)("h2",{id:"leave-chat"},"Leave chat"),(0,a.kt)("p",null,"You can leave chat rooms at any time and thus end the conversation. If you left a chat, the history of the chat is still available in the archive."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Click on the ",(0,a.kt)("b",null,"three dots")," in the top right corner of a chat's screen."),(0,a.kt)("li",null,"Click on ",(0,a.kt)("b",null,"Leave chat"),"."),(0,a.kt)("li",null,"Click ",(0,a.kt)("b",null,"Leave chat"),"."))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Tap the ",(0,a.kt)("b",null,"three dots")," in the top right corner of a chat's screen."),(0,a.kt)("li",null,"Tap ",(0,a.kt)("b",null,"Leave chat"),"."),(0,a.kt)("li",null,"Tap ",(0,a.kt)("b",null,"Leave chat"),".")))),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The chat has been archived for you. You can find the archive in the settings and thus read older content.")),(0,a.kt)("h2",{id:"delete-left-chats"},"Delete left chats"),(0,a.kt)("p",null,"To save disk space on your device, you can clear the archive and delete all archived chats. To be able to delete a chat on the device, you must first leave it."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"It is currently not possible to delete a chat for all members as an administrator.")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Loading the archive may take some time.")),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Click on your ",(0,a.kt)("b",null,"Profile Picture")," or ",(0,a.kt)("b",null,"Name Initials")," in the top left corner of the screen to open the settings."),(0,a.kt)("li",null,"Click on ",(0,a.kt)("b",null,"Archive"),"."),(0,a.kt)("li",null,"Click the ",(0,a.kt)("b",null,"three dots")," in the top right corner of the screen."),(0,a.kt)("li",null,"Click ",(0,a.kt)("b",null,"Clear archive"),"."),(0,a.kt)("li",null,"Click ",(0,a.kt)("b",null,"Delete")))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Tap on your ",(0,a.kt)("b",null,"Profile Picture")," or ",(0,a.kt)("b",null,"Name Initials")," in the top left corner of the screen to open the settings."),(0,a.kt)("li",null,"Tap on ",(0,a.kt)("b",null,"Archive"),"."),(0,a.kt)("li",null,"Tap the ",(0,a.kt)("b",null,"three dots")," in the top right corner of the screen."),(0,a.kt)("li",null,"Tap ",(0,a.kt)("b",null,"Clear archive"),"."),(0,a.kt)("li",null,"Tap ",(0,a.kt)("b",null,"Delete"))))),(0,a.kt)("h2",{id:"group-chat-settings"},"Group chat settings"),(0,a.kt)("h3",{id:"edit-a-group-name"},"Edit a group name"),(0,a.kt)("p",null,"The room name appears in the group header, and admins of the group can modify it. There is no limitation in the subject length and it can include emoji. However we suggest to keep the\nsubject short. Can be up to 250 characters in length and can include emoji. "),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Click on the ",(0,a.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details"),(0,a.kt)("li",null,"Click on ",(0,a.kt)("b",null,"Set Chat Name"),"."),(0,a.kt)("li",null,"Enter a name."),(0,a.kt)("li",null,"Click ",(0,a.kt)("b",null,"Done")," to finish the process."))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Tap the header of a group to open the group details."),(0,a.kt)("li",null,"Tap \u2807 in the top right corner of the screen."),(0,a.kt)("li",null,"Tap ",(0,a.kt)("b",null,"Change subject"),"."),(0,a.kt)("li",null,"Enter a subject."),(0,a.kt)("li",null,"Tap ",(0,a.kt)("b",null,"Done")," to finish the process.")))),(0,a.kt)("img",{alt:"Edit group name",src:(0,r.Z)("/img/chatroom_group_details_editname.PNG.png"),width:"40%"}),(0,a.kt)("h3",{id:"add-or-edit-a-group-description"},"Add or edit a group description"),(0,a.kt)("p",null,"From both your desktop and mobile devices, you can see group descriptions when viewing group details. There is no limitation in the subject length and it can include emoji."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Click on the ",(0,a.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,a.kt)("li",null,"Click ",(0,a.kt)("b",null,"Set chat description"),"."),(0,a.kt)("li",null,"Enter a description."),(0,a.kt)("li",null,"Click ",(0,a.kt)("b",null,"Done")," to finish the process."))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Tap on the header of a group to open the group details."),(0,a.kt)("li",null,"Tap \u2807 in the top right corner of the screen."),(0,a.kt)("li",null,"Tap on ",(0,a.kt)("b",null,"Change description"),"."),(0,a.kt)("li",null,"Enter a description."),(0,a.kt)("li",null,"Tap ",(0,a.kt)("b",null,"Done")," to finish the process.")))),(0,a.kt)("img",{alt:"Edit group name",src:(0,r.Z)("/img/chatroom_group_details_description.PNG.png"),width:"40%"}),(0,a.kt)("h3",{id:"set-group-picture"},"Set group picture"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Click on the ",(0,a.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,a.kt)("li",null,"Click on ",(0,a.kt)("b",null,"\uff0b")," next to the Group initials."),(0,a.kt)("li",null,"Select picture from your file system."),(0,a.kt)("li",null,"Click ",(0,a.kt)("b",null,"Open"),"."))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Tap the header of a group to open the group details."),(0,a.kt)("li",null,"Tap on ",(0,a.kt)("b",null,"\uff0b")," next to the Group initials."),(0,a.kt)("li",null,"Select picture from your file system."),(0,a.kt)("li",null,"Click ",(0,a.kt)("b",null,"Open"),".")))),(0,a.kt)("h3",{id:"change-group-picture"},"Change group picture"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Click on the ",(0,a.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,a.kt)("li",null,"Click on the ",(0,a.kt)("b",null,"Pencil icon")," next to the group picture."),(0,a.kt)("li",null,"Select picture from your file system."),(0,a.kt)("li",null,"Click ",(0,a.kt)("b",null,"Open"),"."))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Tap the header of a group to open the group details."),(0,a.kt)("li",null,"Tap on the ",(0,a.kt)("b",null,"Pencil icon")," next to the group picture."),(0,a.kt)("li",null,"Select picture from your file system."),(0,a.kt)("li",null,"Click ",(0,a.kt)("b",null,"Open"),".")))),(0,a.kt)("h3",{id:"add-people-to-a-group"},"Add people to a group"),(0,a.kt)("p",null,"Groups are the best way to\xa0keep conversations about various projects, topics or teams organised in Famedly. Add people to groups to bring the right people and information together in\none place. You can add an unlimited number of people to a group. The larger the groups become, the more confusing the collaboration can become. We therefore recommend consciously\nconsidering which people are added."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Click on the ",(0,a.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,a.kt)("li",null,"Click on ",(0,a.kt)("b",null,"Members"),"."),(0,a.kt)("li",null,"Click ",(0,a.kt)("b",null,"\uff0b")," in the upper right corner."),(0,a.kt)("li",null,"Click on the person you want to add."))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Tap ",(0,a.kt)("b",null,"\u2807")," in the top right corner of a group's header."),(0,a.kt)("li",null,"Select the person you want to add.")))),(0,a.kt)("img",{alt:"Add group members",src:(0,r.Z)("/img/chatroom_group_details_addmembers.PNG.png"),width:"40%"}),(0,a.kt)("h3",{id:"remove-people-from-a-group"},"Remove people from a group"),(0,a.kt)("p",null,"Famedly organises conversations between several people in groups. Groups provide order and clarity for work. Create topic-based groups or groups for teams to encourage collaboration.\nIf a person no longer needs to be part of a group, the person can be removed. Administrators of a group can remove people from the group."),(0,a.kt)("p",null,"If you remove a person from a group, that person can no longer participate in the communication, but still has access to old messages within the group."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Click on the ",(0,a.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,a.kt)("li",null,"Click on ",(0,a.kt)("b",null,"Members"),"."),(0,a.kt)("li",null,"Click on ",(0,a.kt)("b",null,"Remove User"),"."))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Tap on the header of a group to open the group details."),(0,a.kt)("li",null,"Tap on ",(0,a.kt)("b",null,"Participants"),"."),(0,a.kt)("li",null,(0,a.kt)("b",null,"Tap and hold")," on the person you want to remove."),(0,a.kt)("li",null,"Tap ",(0,a.kt)("b",null,"Remove Person Name"),".")))),(0,a.kt)("img",{alt:"Add group members",src:(0,r.Z)("/img/chatroom_group_details_participant_settings.PNG.png"),width:"40%"}),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"You cannot remove the person if they are also an administrator. In this case, you must ask the person to leave the group on their own.")),(0,a.kt)("h3",{id:"restrict-messaging-to-group-admins"},"Restrict messaging to group admins"),(0,a.kt)("p",null,"Groups can be set so that only administrators can send messages. This can be particularly useful for groups with many people in which announcements are to be shared.\nIn this case, only admins of a group can send announcements."),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},"This feature is not available on desktop."),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Tap the header of a group to open the group details."),(0,a.kt)("li",null,"Tap ",(0,a.kt)("b",null,"Restrict messaging to group admins")," to activate it.")))),(0,a.kt)("img",{alt:"Restrict messaging to group admins",src:(0,r.Z)("/img/chatroom_group_details_admin.PNG.png"),width:"40%"}),(0,a.kt)("h3",{id:"promote-members-to-group-admin"},"Promote members to group admin"),(0,a.kt)(o.Z,{mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Click on the ",(0,a.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,a.kt)("li",null,"Click on ",(0,a.kt)("b",null,"Members"),"."),(0,a.kt)("li",null,"Click on ",(0,a.kt)("b",null,"Promote to Administrator"),"."))),(0,a.kt)(i.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,a.kt)("ol",null,(0,a.kt)("li",null,"Tap on the header of a group to open the group details."),(0,a.kt)("li",null,"Tap on ",(0,a.kt)("b",null,"Participants"),"."),(0,a.kt)("li",null,(0,a.kt)("b",null,"Tap and hold")," on the person you want to remove."),(0,a.kt)("li",null,"Tap ",(0,a.kt)("b",null,"Promote to Admin"),".")))),(0,a.kt)("admonition",{type:"danger"},(0,a.kt)("p",{parentName:"admonition"},"You cannot devote other admins of a group.")),(0,a.kt)("h2",{id:"external-label"},"External label"),(0,a.kt)("p",null,'To ensure that no information is unintentionally shared with outside organisations, we have introduced an "external" label. If you invite people to chat rooms, or\nif chat rooms with external people already exist, they will be marked with the "External" label accordingly.'),(0,a.kt)("h2",{id:"chat-tips-and-best-practices"},"Chat tips and best practices"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Make sure that the group chats you\xa0create\xa0or maintain have a clear\xa0topic and description\xa0so that people understand what they\u2019re used for."),(0,a.kt)("li",{parentName:"ul"},"Make your group chats unique by setting up a profile picture for your group chat"),(0,a.kt)("li",{parentName:"ul"},"Archive group chats\xa0when they\u2019re no longer needed.")))}m.isMDXComponent=!0}}]);