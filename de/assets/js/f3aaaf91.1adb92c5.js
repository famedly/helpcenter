"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[681],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>k});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=l.createContext({}),s=function(e){var t=l.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return l.createElement(u.Provider,{value:t},e.children)},d="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},h=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=s(n),h=i,k=d["".concat(u,".").concat(h)]||d[h]||c[h]||r;return n?l.createElement(k,a(a({ref:t},p),{},{components:n})):l.createElement(k,a({ref:t},p))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,a=new Array(r);a[0]=h;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<r;s++)a[s]=n[s];return l.createElement.apply(null,a)}return l.createElement.apply(null,n)}h.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>a});var l=n(7294),i=n(6010);const r={tabItem:"tabItem_Ymn6"};function a(e){let{children:t,hidden:n,className:a}=e;return l.createElement("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,a),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>T});var l=n(7462),i=n(7294),r=n(6010),a=n(2466),o=n(6550),u=n(1980),s=n(7392),p=n(12);function d(e){return function(e){return i.Children.map(e,(e=>{if(!e||(0,i.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:l,default:i}}=e;return{value:t,label:n,attributes:l,default:i}}))}function c(e){const{values:t,children:n}=e;return(0,i.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function h(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function k(e){let{queryString:t=!1,groupId:n}=e;const l=(0,o.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(r),(0,i.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(l.location.search);t.set(r,e),l.replace({...l.location,search:t.toString()})}),[r,l])]}function m(e){const{defaultValue:t,queryString:n=!1,groupId:l}=e,r=c(e),[a,o]=(0,i.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const l=n.find((e=>e.default))??n[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:t,tabValues:r}))),[u,s]=k({queryString:n,groupId:l}),[d,m]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[l,r]=(0,p.Nk)(n);return[l,(0,i.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:l}),b=(()=>{const e=u??d;return h({value:e,tabValues:r})?e:null})();(0,i.useLayoutEffect)((()=>{b&&o(b)}),[b]);return{selectedValue:a,selectValue:(0,i.useCallback)((e=>{if(!h({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),m(e)}),[s,m,r]),tabValues:r}}var b=n(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function f(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const p=[],{blockElementScrollPositionUntilNextRender:d}=(0,a.o5)(),c=e=>{const t=e.currentTarget,n=p.indexOf(t),l=s[n].value;l!==o&&(d(t),u(l))},h=e=>{let t=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const n=p.indexOf(e.currentTarget)+1;t=p[n]??p[0];break}case"ArrowLeft":{const n=p.indexOf(e.currentTarget)-1;t=p[n]??p[p.length-1];break}}t?.focus()};return i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:a}=e;return i.createElement("li",(0,l.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>p.push(e),onKeyDown:h,onClick:c},a,{className:(0,r.Z)("tabs__item",g.tabItem,a?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:l}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===l));return e?(0,i.cloneElement)(e,{className:"margin-top--md"}):null}return i.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==l}))))}function y(e){const t=m(e);return i.createElement("div",{className:(0,r.Z)("tabs-container",g.tabList)},i.createElement(f,(0,l.Z)({},e,t)),i.createElement(v,(0,l.Z)({},e,t)))}function T(e){const t=(0,b.Z)();return i.createElement(y,(0,l.Z)({key:String(t)},e))}},3641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>u,metadata:()=>p,toc:()=>c});var l=n(7462),i=(n(7294),n(3905)),r=n(4866),a=n(5162),o=n(4996);const u={sidebar_label:"Chats",title:"Chats",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},s=void 0,p={unversionedId:"help-center/using-famedly/chats",id:"help-center/using-famedly/chats",title:"Chats",description:"Chats",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/using-famedly/chats.mdx",sourceDirName:"help-center/using-famedly",slug:"/help-center/using-famedly/chats",permalink:"/helpcenter/de/help-center/using-famedly/chats",draft:!1,editUrl:"https://github.com/famedly/helpcenter/edit/main/docs/docs/help-center/using-famedly/chats.mdx",tags:[],version:"current",lastUpdatedBy:"Niklas Zender",lastUpdatedAt:1689080953,formattedLastUpdatedAt:"11. Juli 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Chats",title:"Chats",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},sidebar:"helpcenterSidebar",previous:{title:"Famedly nutzen",permalink:"/helpcenter/de/using-famedly"},next:{title:"Nachrichten",permalink:"/helpcenter/de/help-center/using-famedly/messages"}},d={},c=[{value:"Direktchat starten",id:"direktchat-starten",level:2},{value:"Gruppenchat starten",id:"gruppenchat-starten",level:2},{value:"Chat beitreten",id:"chat-beitreten",level:2},{value:"Chat stummschalten",id:"chat-stummschalten",level:2},{value:"Chat verlassen",id:"chat-verlassen",level:2},{value:"Verlassene Chats l\xf6schen",id:"verlassene-chats-l\xf6schen",level:2},{value:"Gruppenchat Einstellungen",id:"gruppenchat-einstellungen",level:2},{value:"Gruppenname bearbeiten",id:"gruppenname-bearbeiten",level:3},{value:"Gruppenbeschreibung hinzuf\xfcgen oder bearbeiten",id:"gruppenbeschreibung-hinzuf\xfcgen-oder-bearbeiten",level:3},{value:"Set group picture",id:"set-group-picture",level:3},{value:"Change group picture",id:"change-group-picture",level:3},{value:"Add people to a group",id:"add-people-to-a-group",level:3},{value:"Remove people from a group",id:"remove-people-from-a-group",level:3},{value:"Restrict messaging to group admins",id:"restrict-messaging-to-group-admins",level:3},{value:"Promote members to group admin",id:"promote-members-to-group-admin",level:3},{value:"External label",id:"external-label",level:2},{value:"Chat tips and best practices",id:"chat-tips-and-best-practices",level:2}],h={toc:c},k="wrapper";function m(e){let{components:t,...n}=e;return(0,i.kt)(k,(0,l.Z)({},h,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("div",{class:"hero hero--primary"},(0,i.kt)("div",{class:"container"},(0,i.kt)("h2",{class:"hero__title"},"Chats"),(0,i.kt)("p",{class:"hero__subtitle"},"Was ist ein Chat?"),(0,i.kt)("p",null,"Famedly bietet die Chat-Funktionalit\xe4t um Unterhaltungen zwischen mehrere Personen zu organisieren. Wir helfen dabei, Ordnung und Klarheit in der allt\xe4glich Arbeit zu schaffen. Nutzen Sie Chats f\xfcr eine bessere Organisation und Aufgabenverteilung, f\xfcr eine schnellere Entscheidungsfindung und schnellerem Arbeitsfortschritt. Famedly is kompatibel mit dem Matrix Communication Protokoll, das es m\xf6glich macht, Personen zum Chat hinzuzuf\xfcgen, die Matrix Clients von anderen Anbietern benutzen."))),(0,i.kt)("h2",{id:"direktchat-starten"},"Direktchat starten"),(0,i.kt)("p",null,"Direkte Chats in Famedly sind mit einer sicheren Ende-zu-Ende-Verschl\xfcsselung verschl\xfcsselt. Wir stellen sicher, dass nur die Teilnehmer im Chatraum die ausgetauschten Nachrichten entschl\xfcsseln und darauf zugreifen k\xf6nnen. Diese Art der Verschl\xfcsselung bietet eine sichere Umgebung f\xfcr vertrauliche Gespr\xe4che."),(0,i.kt)("p",null,"Um einen direkten Chat mit anderen Personen in Famedly zu starten, befolgen Sie diese Schritten:"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"web",label:"Web",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,'Vergewissern Sie sich, dass Sie im Bereich "Chats" sind.'),(0,i.kt)("li",null,"Klicken Sie auf die ",(0,i.kt)("b",null,"+ Taste")," neben dem Filter im oberen linken Bereich Ihres Bildschirms."),(0,i.kt)("li",null,"W\xe4hlen Sie die Person, die Sie einladen m\xf6chten, aus oder suchen Sie sie."),(0,i.kt)("li",null,"Klicke auf ",(0,i.kt)("b",null,"Chat starten")," um einen Chat zu starten."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,'Stellen Sie sicher, dass Sie sich im Bereich "Chats" befinden.'),(0,i.kt)("li",null,"Tippen Sie ",(0,i.kt)("b",null,"+ Taste")," oben rechts auf dem Bildschirm."),(0,i.kt)("li",null,"W\xe4hlen oder suchen Sie die Person, die Sie zum Chat einladen wollen."),(0,i.kt)("li",null,"Tippen Sie auf den ",(0,i.kt)("b",null,"Chat starten")," um einen Chat zu beginnen.")))),(0,i.kt)("h2",{id:"gruppenchat-starten"},"Gruppenchat starten"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"web",label:"Web",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Stellen Sie sicher, dass Sie sich in dem Chat-Bereich befinden."),(0,i.kt)("li",null,"Klicken Sie auf dem ",(0,i.kt)("b",null,"+ Symbol")," neben dem Filter oben auf dem Bildschirm."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Neue Gruppe")," in der Ecke rechts oben."),(0,i.kt)("li",null,"Geben Sie die Gruppe einen Gruppenbetreff."),(0,i.kt)("li",null,"Selektieren oder suchen Sie die Personen, die Sie in die Gruppe einladen wollen."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Erstellen")," um den Gruppenchat zu erstellen."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Stellen Sie sicher, dass Sie sich in dem Chat-Bereich befinden."),(0,i.kt)("li",null,"Tippen Sie auf dem ",(0,i.kt)("b",null,"+ Symbol")," neben dem Filter oben auf dem Bildschirm."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Neue Gruppe")," in der Ecke rechts oben."),(0,i.kt)("li",null,"Geben Sie die Gruppe einen Gruppenbetreff."),(0,i.kt)("li",null,"Selektieren oder suchen Sie die Personen, die Sie in die Gruppe einladen wollen."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Erstellen")," um den Gruppenchat zu erstellen.")))),(0,i.kt)("admonition",{type:"info"},(0,i.kt)("p",{parentName:"admonition"},"Expertentipp: Suchen Sie einen Ende-zu-Ende verschl\xfcsselten Notizbuch? Erstellen Sie einfach eine Gruppe mit sich selbst, nennen Sie die Gruppe 'Notizen' und Sie haben einen sicheren Ort um Dateien und Textnachrichten aufzuheben.")),(0,i.kt)("h2",{id:"chat-beitreten"},"Chat beitreten"),(0,i.kt)("p",null,"Um an einem Chat teilzunehmen, m\xfcssen Sie von einem Mitglied dieses Chats eingeladen werden."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Sie k\xf6nnen nur einem Chat beitreten, wenn Sie eine Einladung erhalten haben."),(0,i.kt)("li",null,"Alle Einladungen finden Sie oben in der Chat-Liste."),(0,i.kt)("li",null,"Klicken Sie auf den Chat in den Sie eingeladen wurden."),(0,i.kt)("li",null,"Einladung annehmen."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Sie k\xf6nnen nur einem Chat beitreten, wenn Sie eine Einladung erhalten haben."),(0,i.kt)("li",null,"Alle Einladungen finden Sie oben in der Chat-Liste."),(0,i.kt)("li",null,"Tippen Sie auf den Chat in den Sie eingeladen wurden."),(0,i.kt)("li",null,"Die Einladung annehmen.")))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"Wenn Sie die Einladung abgelehnt haben, m\xfcssen Sie die einladenden Person bitten, Sie erneut einzuladen.")),(0,i.kt)("h2",{id:"chat-stummschalten"},"Chat stummschalten"),(0,i.kt)("p",null,"Es ist m\xf6glich, Benachrichtigungen f\xfcr Chats stummzuschalten. Dies kann hilfreich sein, wenn viele Mitglieder in einer Gruppe kommunizieren und Sie nicht unbedingt \xfcber neue Nachrichten informiert werden m\xf6chten."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Klicken Sie auf die ",(0,i.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Chats, den Sie stummen m\xf6chten."),(0,i.kt)("li",null,"Klicken Sie auf den ",(0,i.kt)("b",null,"Chat stummschalten"),"."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tippen Sie auf die ",(0,i.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Chats, den Sie stummschalten m\xf6chten."),(0,i.kt)("li",null,"Tippe auf den ",(0,i.kt)("b",null,"Chat stummschalten"),".")))),(0,i.kt)("admonition",{type:"tip"},(0,i.kt)("p",{parentName:"admonition"},"Sie k\xf6nnen die Stummschaltung des Gruppenchats wieder aufheben, indem Sie die gleichen Schritte ausf\xfchren und ",(0,i.kt)("b",null,"Stummschaltung aufheben")," ausw\xe4hlen.")),(0,i.kt)("h2",{id:"chat-verlassen"},"Chat verlassen"),(0,i.kt)("p",null,"Sie k\xf6nnen Chatr\xe4ume jederzeit verlassen und damit das Gespr\xe4ch beenden. Wenn Sie einen Chat verlassen haben, ist der Verlauf des Chats immer noch im Archiv verf\xfcgbar."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Klicken Sie auf die ",(0,i.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke eines Chats."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Chat verlassen"),"."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Chat verlassen"),"."))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tippen Sie auf die ",(0,i.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Chat-Bildschirms."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Chat verlassen"),"."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Chat verlassen"),".")))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Der Chat wurde f\xfcr Sie archiviert. Sie k\xf6nnen das Archiv in den Einstellungen finden und hier \xe4ltere Inhalte zur\xfcckfinden.")),(0,i.kt)("h2",{id:"verlassene-chats-l\xf6schen"},"Verlassene Chats l\xf6schen"),(0,i.kt)("p",null,"Um Speicherplatz auf Ihrem Ger\xe4t zu sparen, k\xf6nnen Sie das Archiv leeren und alle archivierten Chats l\xf6schen. Um einen Chat auf dem Ger\xe4t l\xf6schen zu k\xf6nnen, m\xfcssen Sie ihn zuerst verlassen."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Es ist derzeit nicht m\xf6glich, als Administrator einen Chat f\xfcr alle Mitglieder zu l\xf6schen.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Das Laden des Archivs kann einige Zeit in Anspruch nehmen.")),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Klicken Sie auf Ihr ",(0,i.kt)("b",null,"Profilbild")," oder ",(0,i.kt)("b",null,"Initialen")," in der oberen linken Ecke des Bildschirms, um die Einstellungen zu \xf6ffnen."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Archiv"),"."),(0,i.kt)("li",null,"Klicken Sie auf die ",(0,i.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Bildschirms."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"Archiv leeren"),"."),(0,i.kt)("li",null,"Klicken Sie auf ",(0,i.kt)("b",null,"L\xf6schen")))),(0,i.kt)(a.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tippen Sie auf Ihr ",(0,i.kt)("b",null,"Profilbild")," oder ",(0,i.kt)("b",null,"Initialen")," oben links um die Einstellungen zu \xf6ffnen."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Archiv"),"."),(0,i.kt)("li",null,"Tippen Sie auf die ",(0,i.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Bildschirms."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"Archiv leeren"),"."),(0,i.kt)("li",null,"Tippen Sie auf ",(0,i.kt)("b",null,"L\xf6schen"))))),(0,i.kt)("h2",{id:"gruppenchat-einstellungen"},"Gruppenchat Einstellungen"),(0,i.kt)("h3",{id:"gruppenname-bearbeiten"},"Gruppenname bearbeiten"),(0,i.kt)("p",null,"Der Gruppenname erscheint in der \xdcberschrift der Gruppe und Administratoren der Gruppe k\xf6nnen diesen \xe4ndern. Es gibt keine Beschr\xe4nkung der L\xe4nge der Gruppenname und es k\xf6nnen Emojis verwendet werden. Wir empfehlen jedoch, den Gruppenbetreff kurz zu halten. Kann bis zu 250 Zeichen lang sein und kann Emoji enthalten. "),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the menu."),(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"Show Information")," to open the group settings."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"Edit")," in the top right corner."),(0,i.kt)("li",null,"Edit the name."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"Save")," to finish the process."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the menu."),(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"Show Information")," to open the group settings."),(0,i.kt)("li",null,"Tap on ",(0,i.kt)("b",null,"Edit")," in the top right corner."),(0,i.kt)("li",null,"Edit the name."),(0,i.kt)("li",null,"Tap ",(0,i.kt)("b",null,"Save")," to finish the process.")))),(0,i.kt)("img",{alt:"Edit group name",src:(0,o.Z)("/img/chatroom_group_details_editname.PNG.png"),width:"40%"}),(0,i.kt)("h3",{id:"gruppenbeschreibung-hinzuf\xfcgen-oder-bearbeiten"},"Gruppenbeschreibung hinzuf\xfcgen oder bearbeiten"),(0,i.kt)("p",null,"Sowohl auf Ihrem Desktop als auch auf mobilen Ger\xe4ten k\xf6nnen Sie Gruppenbeschreibungen sehen, wenn Sie Gruppendetails anzeigen. Es gibt keine Beschr\xe4nkung der L\xe4nge der Gruppenname und es k\xf6nnen Emojis verwendet werden."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the menu."),(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"Show Information")," to open the group settings."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("code",null,"Add description")," to add a description or ",(0,i.kt)("code",null,"Edit")," next to the description header to edit the description."),(0,i.kt)("li",null,"Add or edit the description."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"Save")," to finish the process."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the menu."),(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"Show Information")," to open the group settings."),(0,i.kt)("li",null,"Tap on ",(0,i.kt)("code",null,"Add description")," to add a description or ",(0,i.kt)("code",null,"Edit")," next to the description header to edit the description."),(0,i.kt)("li",null,"Add or edit the description."),(0,i.kt)("li",null,"Tap ",(0,i.kt)("b",null,"Save")," to finish the process.")))),(0,i.kt)("h3",{id:"set-group-picture"},"Set group picture"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the menu."),(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"Show Information")," to open the group settings."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"Edit")," in the top right corner."),(0,i.kt)("li",null,"Click on the placeholder image with the group name initials."),(0,i.kt)("li",null,"Select picture from your file system."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"Save")," to finish the process."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the menu."),(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"Show Information")," to open the group settings."),(0,i.kt)("li",null,"Tap on ",(0,i.kt)("b",null,"Edit")," in the top right corner."),(0,i.kt)("li",null,"Tap on the placeholder image with the group name initials."),(0,i.kt)("li",null,"Select picture from your file system."),(0,i.kt)("li",null,"Tap ",(0,i.kt)("b",null,"Save")," to finish the process.")))),(0,i.kt)("h3",{id:"change-group-picture"},"Change group picture"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the menu."),(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"Show Information")," to open the group settings."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"Edit")," in the top right corner."),(0,i.kt)("li",null,"Click the avatar."),(0,i.kt)("li",null,"Select picture from your file system."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"Save")," to finish the process."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the menu."),(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"Show Information")," to open the group settings."),(0,i.kt)("li",null,"Tap on ",(0,i.kt)("b",null,"Edit")," in the top right corner."),(0,i.kt)("li",null,"Tap the avatar."),(0,i.kt)("li",null,"Select picture from your file system."),(0,i.kt)("li",null,"Tap ",(0,i.kt)("b",null,"Save")," to finish the process.")))),(0,i.kt)("h3",{id:"add-people-to-a-group"},"Add people to a group"),(0,i.kt)("p",null,"Groups are the best way to\xa0keep conversations about various projects, topics or teams organised in Famedly. Add people to groups to bring the right people and information together in\none place. You can add an unlimited number of people to a group. The larger the groups become, the more confusing the collaboration can become. We therefore recommend consciously\nconsidering which people are added."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"Members"),"."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"\uff0b")," in the upper right corner."),(0,i.kt)("li",null,"Click on the person you want to add."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Tap on ",(0,i.kt)("b",null,"Members"),"."),(0,i.kt)("li",null,"Tap ",(0,i.kt)("b",null,"\uff0b")," in the upper right corner."),(0,i.kt)("li",null,"Tap on the person you want to add.")))),(0,i.kt)("img",{alt:"Add group members",src:(0,o.Z)("/img/chatroom_group_details_addmembers.PNG.png"),width:"40%"}),(0,i.kt)("h3",{id:"remove-people-from-a-group"},"Remove people from a group"),(0,i.kt)("p",null,"Famedly organises conversations between several people in groups. Groups provide order and clarity for work. Create topic-based groups or groups for teams to encourage collaboration.\nIf a person no longer needs to be part of a group, the person can be removed. Administrators of a group can remove people from the group."),(0,i.kt)("p",null,"If you remove a person from a group, that person can no longer participate in the communication, but still has access to old messages within the group."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"Members"),"."),(0,i.kt)("li",null,"Click on the three dots menu next to the person name you wan to remove."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("code",null,"Remove from group"),"."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Tap on ",(0,i.kt)("b",null,"Members"),"."),(0,i.kt)("li",null,"Tap on the three dots menu next to the person name you wan to remove."),(0,i.kt)("li",null,"Tap on ",(0,i.kt)("code",null,"Remove from group"),".")))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"You cannot remove the person if they are also an administrator. In this case, you must ask the person to leave the group on their own.")),(0,i.kt)("h3",{id:"restrict-messaging-to-group-admins"},"Restrict messaging to group admins"),(0,i.kt)("p",null,"Groups can be set so that only administrators can send messages. This can be particularly useful for groups with many people in which announcements are to be shared.\nIn this case, only admins of a group can send announcements."),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Click ",(0,i.kt)("b",null,"Restrict messaging to group admins")," to activate it.")),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Tap on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Tap ",(0,i.kt)("b",null,"Restrict messaging to group admins")," to activate it.")))),(0,i.kt)("img",{alt:"Restrict messaging to group admins",src:(0,o.Z)("/img/chatroom_group_details_admin.PNG.png"),width:"40%"}),(0,i.kt)("h3",{id:"promote-members-to-group-admin"},"Promote members to group admin"),(0,i.kt)(r.Z,{mdxType:"Tabs"},(0,i.kt)(a.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"Members"),"."),(0,i.kt)("li",null,"Click on the three dots menu next to the person name you wan to remove."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("code",null,"Promote to Admin"),"."))),(0,i.kt)(a.Z,{value:"mobile",label:"Mobile",mdxType:"TabItem"},(0,i.kt)("ol",null,(0,i.kt)("li",null,"Click on the ",(0,i.kt)("b",null,"three dots")," in the top right corner of a group's screen to open the group details."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("b",null,"Members"),"."),(0,i.kt)("li",null,"Click on the three dots menu next to the person name you wan to remove."),(0,i.kt)("li",null,"Click on ",(0,i.kt)("code",null,"Promote to Admin"),".")))),(0,i.kt)("admonition",{type:"danger"},(0,i.kt)("p",{parentName:"admonition"},"You cannot demote other admins of a group.")),(0,i.kt)("h2",{id:"external-label"},"External label"),(0,i.kt)("p",null,'To ensure that no information is unintentionally shared with outside organisations, we have introduced an "external" label. If you invite people to chat rooms, or\nif chat rooms with external people already exist, they will be marked with the "External" label accordingly.'),(0,i.kt)("h2",{id:"chat-tips-and-best-practices"},"Chat tips and best practices"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Make sure that the group chats you\xa0create\xa0or maintain have a clear\xa0topic and description\xa0so that people understand what they\u2019re used for."),(0,i.kt)("li",{parentName:"ul"},"Make your group chats unique by setting up a profile picture for your group chat"),(0,i.kt)("li",{parentName:"ul"},"Archive group chats\xa0when they\u2019re no longer needed.")))}m.isMDXComponent=!0}}]);