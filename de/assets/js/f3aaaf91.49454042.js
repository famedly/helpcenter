"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[681],{3905:(e,n,i)=>{i.d(n,{Zo:()=>p,kt:()=>h});var l=i(7294);function t(e,n,i){return n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i,e}function r(e,n){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),i.push.apply(i,l)}return i}function u(e){for(var n=1;n<arguments.length;n++){var i=null!=arguments[n]?arguments[n]:{};n%2?r(Object(i),!0).forEach((function(n){t(e,n,i[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(i,n))}))}return e}function a(e,n){if(null==e)return{};var i,l,t=function(e,n){if(null==e)return{};var i,l,t={},r=Object.keys(e);for(l=0;l<r.length;l++)i=r[l],n.indexOf(i)>=0||(t[i]=e[i]);return t}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)i=r[l],n.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(t[i]=e[i])}return t}var s=l.createContext({}),d=function(e){var n=l.useContext(s),i=n;return e&&(i="function"==typeof e?e(n):u(u({},n),e)),i},p=function(e){var n=d(e.components);return l.createElement(s.Provider,{value:n},e.children)},c="mdxType",o={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},k=l.forwardRef((function(e,n){var i=e.components,t=e.mdxType,r=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=d(i),k=t,h=c["".concat(s,".").concat(k)]||c[k]||o[k]||r;return i?l.createElement(h,u(u({ref:n},p),{},{components:i})):l.createElement(h,u({ref:n},p))}));function h(e,n){var i=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var r=i.length,u=new Array(r);u[0]=k;var a={};for(var s in n)hasOwnProperty.call(n,s)&&(a[s]=n[s]);a.originalType=e,a[c]="string"==typeof e?e:t,u[1]=a;for(var d=2;d<r;d++)u[d]=i[d];return l.createElement.apply(null,u)}return l.createElement.apply(null,i)}k.displayName="MDXCreateElement"},5162:(e,n,i)=>{i.d(n,{Z:()=>u});var l=i(7294),t=i(4334);const r={tabItem:"tabItem_Ymn6"};function u(e){let{children:n,hidden:i,className:u}=e;return l.createElement("div",{role:"tabpanel",className:(0,t.Z)(r.tabItem,u),hidden:i},n)}},4866:(e,n,i)=>{i.d(n,{Z:()=>T});var l=i(7462),t=i(7294),r=i(4334),u=i(2466),a=i(6550),s=i(1980),d=i(7392),p=i(12);function c(e){return function(e){return t.Children.map(e,(e=>{if(!e||(0,t.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:n,label:i,attributes:l,default:t}}=e;return{value:n,label:i,attributes:l,default:t}}))}function o(e){const{values:n,children:i}=e;return(0,t.useMemo)((()=>{const e=n??c(i);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,i])}function k(e){let{value:n,tabValues:i}=e;return i.some((e=>e.value===n))}function h(e){let{queryString:n=!1,groupId:i}=e;const l=(0,a.k6)(),r=function(e){let{queryString:n=!1,groupId:i}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return i??null}({queryString:n,groupId:i});return[(0,s._X)(r),(0,t.useCallback)((e=>{if(!r)return;const n=new URLSearchParams(l.location.search);n.set(r,e),l.replace({...l.location,search:n.toString()})}),[r,l])]}function m(e){const{defaultValue:n,queryString:i=!1,groupId:l}=e,r=o(e),[u,a]=(0,t.useState)((()=>function(e){let{defaultValue:n,tabValues:i}=e;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!k({value:n,tabValues:i}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${i.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const l=i.find((e=>e.default))??i[0];if(!l)throw new Error("Unexpected error: 0 tabValues");return l.value}({defaultValue:n,tabValues:r}))),[s,d]=h({queryString:i,groupId:l}),[c,m]=function(e){let{groupId:n}=e;const i=function(e){return e?`docusaurus.tab.${e}`:null}(n),[l,r]=(0,p.Nk)(i);return[l,(0,t.useCallback)((e=>{i&&r.set(e)}),[i,r])]}({groupId:l}),b=(()=>{const e=s??c;return k({value:e,tabValues:r})?e:null})();(0,t.useLayoutEffect)((()=>{b&&a(b)}),[b]);return{selectedValue:u,selectValue:(0,t.useCallback)((e=>{if(!k({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);a(e),d(e),m(e)}),[d,m,r]),tabValues:r}}var b=i(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:n,block:i,selectedValue:a,selectValue:s,tabValues:d}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,u.o5)(),o=e=>{const n=e.currentTarget,i=p.indexOf(n),l=d[i].value;l!==a&&(c(n),s(l))},k=e=>{let n=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":{const i=p.indexOf(e.currentTarget)+1;n=p[i]??p[0];break}case"ArrowLeft":{const i=p.indexOf(e.currentTarget)-1;n=p[i]??p[p.length-1];break}}n?.focus()};return t.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":i},n)},d.map((e=>{let{value:n,label:i,attributes:u}=e;return t.createElement("li",(0,l.Z)({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,key:n,ref:e=>p.push(e),onKeyDown:k,onClick:o},u,{className:(0,r.Z)("tabs__item",f.tabItem,u?.className,{"tabs__item--active":a===n})}),i??n)})))}function S(e){let{lazy:n,children:i,selectedValue:l}=e;const r=(Array.isArray(i)?i:[i]).filter(Boolean);if(n){const e=r.find((e=>e.props.value===l));return e?(0,t.cloneElement)(e,{className:"margin-top--md"}):null}return t.createElement("div",{className:"margin-top--md"},r.map(((e,n)=>(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==l}))))}function v(e){const n=m(e);return t.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},t.createElement(g,(0,l.Z)({},e,n)),t.createElement(S,(0,l.Z)({},e,n)))}function T(e){const n=(0,b.Z)();return t.createElement(v,(0,l.Z)({key:String(n)},e))}},3641:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>d,default:()=>m,frontMatter:()=>s,metadata:()=>p,toc:()=>o});var l=i(7462),t=(i(7294),i(3905)),r=i(4866),u=i(5162),a=i(4996);const s={sidebar_label:"Chats",title:"Chats",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:2},d=void 0,p={unversionedId:"help-center/using-famedly/chats",id:"help-center/using-famedly/chats",title:"Chats",description:"Chats",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/using-famedly/chats.mdx",sourceDirName:"help-center/using-famedly",slug:"/help-center/using-famedly/chats",permalink:"/helpcenter/de/help-center/using-famedly/chats",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter/de",tags:[],version:"current",lastUpdatedBy:"rvanwaveren",lastUpdatedAt:1697643248,formattedLastUpdatedAt:"18. Okt. 2023",sidebarPosition:2,frontMatter:{sidebar_label:"Chats",title:"Chats",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:2},sidebar:"helpcenterSidebar",previous:{title:"Anmeldung",permalink:"/helpcenter/de/help-center/using-famedly/login"},next:{title:"Nachrichten",permalink:"/helpcenter/de/help-center/using-famedly/messages"}},c={},o=[{value:"Direktchat starten",id:"direktchat-starten",level:2},{value:"Gruppenchat starten",id:"gruppenchat-starten",level:2},{value:"Chat beitreten",id:"chat-beitreten",level:2},{value:"Chat stummschalten",id:"chat-stummschalten",level:2},{value:"Chat verlassen",id:"chat-verlassen",level:2},{value:"Verlassene Chats l\xf6schen",id:"verlassene-chats-l\xf6schen",level:2},{value:"Gruppenchat Einstellungen",id:"gruppenchat-einstellungen",level:2},{value:"Gruppenname bearbeiten",id:"gruppenname-bearbeiten",level:3},{value:"Gruppenbeschreibung hinzuf\xfcgen oder bearbeiten",id:"gruppenbeschreibung-hinzuf\xfcgen-oder-bearbeiten",level:3},{value:"Gruppenbild festlegen",id:"gruppenbild-festlegen",level:3},{value:"Gruppenbild \xe4ndern",id:"gruppenbild-\xe4ndern",level:3},{value:"Personen zu einer Gruppe hinzuf\xfcgen",id:"personen-zu-einer-gruppe-hinzuf\xfcgen",level:3},{value:"Personen aus einer Gruppe entfernen",id:"personen-aus-einer-gruppe-entfernen",level:3},{value:"Nachrichtenversand auf Gruppen-Admins beschr\xe4nken",id:"nachrichtenversand-auf-gruppen-admins-beschr\xe4nken",level:3},{value:"Mitglieder zum Gruppen-Admin ernennen",id:"mitglieder-zum-gruppen-admin-ernennen",level:3},{value:"Das &#39;Extern&#39; Label",id:"das-extern-label",level:2},{value:"Chat Tipps und Best Practices",id:"chat-tipps-und-best-practices",level:2}],k={toc:o},h="wrapper";function m(e){let{components:n,...i}=e;return(0,t.kt)(h,(0,l.Z)({},k,i,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("div",{class:"hero hero--primary"},(0,t.kt)("div",{class:"container"},(0,t.kt)("h2",{class:"hero__title"},"Chats"),(0,t.kt)("p",{class:"hero__subtitle"},"Was ist ein Chat?"),(0,t.kt)("p",null,"Famedly bietet die Chat-Funktionalit\xe4t um Unterhaltungen zwischen mehrere Personen zu organisieren. Wir helfen dabei, Ordnung und Klarheit in der allt\xe4glich Arbeit zu schaffen. Nutzen Sie Chats f\xfcr eine bessere Organisation und Aufgabenverteilung, f\xfcr eine schnellere Entscheidungsfindung und schnellerem Arbeitsfortschritt. Famedly is kompatibel mit dem Matrix Communication Protokoll, das es m\xf6glich macht, Personen zum Chat hinzuzuf\xfcgen, die Matrix Clients von anderen Anbietern benutzen."))),(0,t.kt)("h2",{id:"direktchat-starten"},"Direktchat starten"),(0,t.kt)("p",null,"Direkte Chats in Famedly sind mit einer sicheren Ende-zu-Ende-Verschl\xfcsselung verschl\xfcsselt. Wir stellen sicher, dass nur die Teilnehmer im Chatraum die ausgetauschten Nachrichten entschl\xfcsseln und darauf zugreifen k\xf6nnen. Diese Art der Verschl\xfcsselung bietet eine sichere Umgebung f\xfcr vertrauliche Gespr\xe4che."),(0,t.kt)("p",null,"Um einen direkten Chat mit anderen Personen in Famedly zu starten, befolgen Sie diese Schritten:"),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,'Vergewissern Sie sich, dass Sie im Bereich "Chats" sind.'),(0,t.kt)("li",null,"Klicken Sie auf die ",(0,t.kt)("b",null,"+ Taste")," neben dem Filter im oberen linken Bereich Ihres Bildschirms."),(0,t.kt)("li",null,"W\xe4hlen Sie die Person, die Sie einladen m\xf6chten, aus oder suchen Sie sie."),(0,t.kt)("li",null,"Klicke auf ",(0,t.kt)("b",null,"Chat starten")," um einen Chat zu starten."))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,'Stellen Sie sicher, dass Sie sich im Bereich "Chats" befinden.'),(0,t.kt)("li",null,"Tippen Sie ",(0,t.kt)("b",null,"+ Taste")," oben rechts auf dem Bildschirm."),(0,t.kt)("li",null,"W\xe4hlen oder suchen Sie die Person, die Sie zum Chat einladen wollen."),(0,t.kt)("li",null,"Tippen Sie auf den ",(0,t.kt)("b",null,"Chat starten")," um einen Chat zu beginnen.")))),(0,t.kt)("h2",{id:"gruppenchat-starten"},"Gruppenchat starten"),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Stellen Sie sicher, dass Sie sich in dem Chat-Bereich befinden."),(0,t.kt)("li",null,"Klicken Sie auf dem ",(0,t.kt)("b",null,"+ Symbol")," neben dem Filter oben auf dem Bildschirm."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Neue Gruppe")," in der Ecke rechts oben."),(0,t.kt)("li",null,"Geben Sie die Gruppe einen Gruppenbetreff."),(0,t.kt)("li",null,"Selektieren oder suchen Sie die Personen, die Sie in die Gruppe einladen wollen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Erstellen")," um den Gruppenchat zu erstellen."))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Stellen Sie sicher, dass Sie sich in dem Chat-Bereich befinden."),(0,t.kt)("li",null,"Tippen Sie auf dem ",(0,t.kt)("b",null,"+ Symbol")," neben dem Filter oben auf dem Bildschirm."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Neue Gruppe")," in der Ecke rechts oben."),(0,t.kt)("li",null,"Geben Sie die Gruppe einen Gruppenbetreff."),(0,t.kt)("li",null,"Selektieren oder suchen Sie die Personen, die Sie in die Gruppe einladen wollen."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Erstellen")," um den Gruppenchat zu erstellen.")))),(0,t.kt)("admonition",{type:"info"},(0,t.kt)("p",{parentName:"admonition"},"Expertentipp: Suchen Sie einen Ende-zu-Ende verschl\xfcsselten Notizbuch? Erstellen Sie einfach eine Gruppe ohne Personen hinzuzuf\xfcgen, nennen Sie die Gruppe 'Notizen' und Sie haben einen sicheren Ort um Dateien und Textnachrichten aufzuheben.")),(0,t.kt)("h2",{id:"chat-beitreten"},"Chat beitreten"),(0,t.kt)("p",null,"Um an einem Chat teilzunehmen, m\xfcssen Sie von einem Mitglied dieses Chats eingeladen werden."),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Sie k\xf6nnen nur einem Chat beitreten, wenn Sie eine Einladung erhalten haben."),(0,t.kt)("li",null,"Alle Einladungen finden Sie oben in der Chat-Liste."),(0,t.kt)("li",null,"Klicken Sie auf den Chat in den Sie eingeladen wurden."),(0,t.kt)("li",null,"Einladung annehmen."))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Sie k\xf6nnen nur einem Chat beitreten, wenn Sie eine Einladung erhalten haben."),(0,t.kt)("li",null,"Alle Einladungen finden Sie oben in der Chat-Liste."),(0,t.kt)("li",null,"Tippen Sie auf den Chat in den Sie eingeladen wurden."),(0,t.kt)("li",null,"Die Einladung annehmen.")))),(0,t.kt)("admonition",{type:"danger"},(0,t.kt)("p",{parentName:"admonition"},"Wenn Sie die Einladung abgelehnt haben, m\xfcssen Sie die einladenden Person bitten, Sie erneut einzuladen.")),(0,t.kt)("h2",{id:"chat-stummschalten"},"Chat stummschalten"),(0,t.kt)("p",null,"Es ist m\xf6glich, Benachrichtigungen f\xfcr Chats stummzuschalten. Dies kann hilfreich sein, wenn viele Mitglieder in einer Gruppe kommunizieren und Sie nicht unbedingt \xfcber neue Nachrichten informiert werden m\xf6chten."),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Klicken Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Chats, den Sie stummen m\xf6chten."),(0,t.kt)("li",null,"Klicken Sie auf den ",(0,t.kt)("b",null,"Chat stummschalten"),"."))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Tippen Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Chats, den Sie stummschalten m\xf6chten."),(0,t.kt)("li",null,"Tippe auf den ",(0,t.kt)("b",null,"Chat stummschalten"),".")))),(0,t.kt)("admonition",{type:"tip"},(0,t.kt)("p",{parentName:"admonition"},"Sie k\xf6nnen die Stummschaltung des Gruppenchats wieder aufheben, indem Sie die gleichen Schritte ausf\xfchren und ",(0,t.kt)("b",null,"Stummschaltung aufheben")," ausw\xe4hlen.")),(0,t.kt)("h2",{id:"chat-verlassen"},"Chat verlassen"),(0,t.kt)("p",null,"Sie k\xf6nnen Chatr\xe4ume jederzeit verlassen und damit das Gespr\xe4ch beenden. Wenn Sie einen Chat verlassen haben, ist der Verlauf des Chats immer noch im Archiv verf\xfcgbar."),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Klicken Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke eines Chats."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Chat verlassen"),"."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Chat verlassen"),"."))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Tippen Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Chat-Bildschirms."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Chat verlassen"),"."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Chat verlassen"),".")))),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Der Chat wurde f\xfcr Sie archiviert. Sie k\xf6nnen das Archiv in den Einstellungen finden und hier \xe4ltere Inhalte zur\xfcckfinden.")),(0,t.kt)("h2",{id:"verlassene-chats-l\xf6schen"},"Verlassene Chats l\xf6schen"),(0,t.kt)("p",null,"Um Speicherplatz auf Ihrem Ger\xe4t zu sparen, k\xf6nnen Sie das Archiv leeren und alle archivierten Chats l\xf6schen. Um einen Chat auf dem Ger\xe4t l\xf6schen zu k\xf6nnen, m\xfcssen Sie ihn zuerst verlassen."),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Es ist derzeit nicht m\xf6glich, als Administrator einen Chat f\xfcr alle Mitglieder zu l\xf6schen.")),(0,t.kt)("admonition",{type:"note"},(0,t.kt)("p",{parentName:"admonition"},"Das Laden des Archivs kann einige Zeit in Anspruch nehmen.")),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Klicken Sie auf Ihr ",(0,t.kt)("b",null,"Profilbild")," oder ",(0,t.kt)("b",null,"Initialen")," in der oberen linken Ecke des Bildschirms, um die Einstellungen zu \xf6ffnen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Archiv"),"."),(0,t.kt)("li",null,"Klicken Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Bildschirms."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Archiv leeren"),"."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"L\xf6schen")))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Tippen Sie auf Ihr ",(0,t.kt)("b",null,"Profilbild")," oder ",(0,t.kt)("b",null,"Initialen")," oben links um die Einstellungen zu \xf6ffnen."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Archiv"),"."),(0,t.kt)("li",null,"Tippen Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Bildschirms."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Archiv leeren"),"."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"L\xf6schen"))))),(0,t.kt)("h2",{id:"gruppenchat-einstellungen"},"Gruppenchat Einstellungen"),(0,t.kt)("h3",{id:"gruppenname-bearbeiten"},"Gruppenname bearbeiten"),(0,t.kt)("p",null,"Der Gruppenname erscheint in der \xdcberschrift der Gruppe und Administratoren der Gruppe k\xf6nnen diesen \xe4ndern. Es gibt keine Beschr\xe4nkung der L\xe4nge der Gruppenname und es k\xf6nnen Emojis verwendet werden. Wir empfehlen jedoch, den Gruppenbetreff kurz zu halten. Kann bis zu 250 Zeichen lang sein und kann Emoji enthalten. "),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Klicken Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der Ecke rechts oben in einem Gruppenchat um das Men\xfc zu \xf6ffnen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Informationen anzeigen")," um die Gruppeneinstellungen zu \xf6ffnen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Bearbeiten")," rechtsoben."),(0,t.kt)("li",null,"\xc4ndern Sie den Namen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Speichern")," um den Prozess abzuschlie\xdfen."))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Tippen Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der Ecke rechts oben in einem Gruppenchat um das Men\xfc zu \xf6ffnen."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Informationen anzeigen")," um die Gruppeneinstellungen zu \xf6ffnen."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Bearbeiten")," rechtsoben."),(0,t.kt)("li",null,"\xc4ndern Sie den Namen."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Speichern")," um den Prozess abzuschlie\xdfen.")))),(0,t.kt)("img",{alt:"Gruppenname \xe4ndern",src:(0,a.Z)("/img/chatroom_group_details_editname.PNG.png"),width:"40%"}),(0,t.kt)("h3",{id:"gruppenbeschreibung-hinzuf\xfcgen-oder-bearbeiten"},"Gruppenbeschreibung hinzuf\xfcgen oder bearbeiten"),(0,t.kt)("p",null,"Sowohl auf Ihrem Desktop als auch auf mobilen Ger\xe4ten k\xf6nnen Sie Gruppenbeschreibungen sehen, wenn Sie Gruppendetails anzeigen. Es gibt keine Beschr\xe4nkung der L\xe4nge der Gruppenname und es k\xf6nnen Emojis verwendet werden."),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Klicken Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke des Gruppenbildschirms, um das Men\xfc zu \xf6ffnen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Informationen anzeigen"),", um die Gruppeneinstellungen zu \xf6ffnen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("code",null,"Beschreibung hinzuf\xfcgen"),", um eine Beschreibung hinzuzuf\xfcgen oder ",(0,t.kt)("code",null,"Bearbeiten")," neben dem Beschreibungskopf, um die Beschreibung zu bearbeiten."),(0,t.kt)("li",null,"Beschreibung hinzuf\xfcgen oder bearbeiten."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Speichern")," um den Prozess abzuschlie\xdfen."))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Tippen Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke einer Gruppe um das Men\xfc zu \xf6ffnen."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Informationen anzeigen")," um die Gruppeneinstellungen zu \xf6ffnen."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("code",null,"Beschreibung hinzuf\xfcgen"),", um eine Beschreibung hinzuzuf\xfcgen oder ",(0,t.kt)("code",null,"Bearbeiten")," neben dem Beschreibungskopf, um die Beschreibung zu bearbeiten."),(0,t.kt)("li",null,"Beschreibung hinzuf\xfcgen oder bearbeiten."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Speichern")," um den Prozess abzuschlie\xdfen.")))),(0,t.kt)("h3",{id:"gruppenbild-festlegen"},"Gruppenbild festlegen"),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Klicken Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der Ecke rechts oben in einem Gruppenchat um das Men\xfc zu \xf6ffnen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Informationen anzeigen")," um die Gruppeneinstellungen zu \xf6ffnen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Bearbeiten")," rechtsoben."),(0,t.kt)("li",null,"Klicken Sie auf den Platzhalter mit der Initialen der Gruppenname."),(0,t.kt)("li",null,"W\xe4hlen Sie ein Bild aus Ihrem Dateispeicher."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Speichern")," um den Prozess abzuschlie\xdfen."))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Tippen Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der Ecke rechts oben in einem Gruppenchat um das Men\xfc zu \xf6ffnen."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Informationen anzeigen")," um die Gruppeneinstellungen zu \xf6ffnen."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Bearbeiten")," rechtsoben."),(0,t.kt)("li",null,"Tippen Sie auf den Platzhalter mit der Initialen der Gruppenname."),(0,t.kt)("li",null,"W\xe4hlen Sie ein Bild aus Ihrem Dateispeicher."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Speichern")," um den Prozess abzuschlie\xdfen.")))),(0,t.kt)("h3",{id:"gruppenbild-\xe4ndern"},"Gruppenbild \xe4ndern"),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Klicken Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der Ecke rechts oben in einem Gruppenchat um das Men\xfc zu \xf6ffnen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Informationen anzeigen")," um die Gruppeneinstellungen zu \xf6ffnen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Bearbeiten")," rechtsoben."),(0,t.kt)("li",null,"Klicken Sie auf Ihr Profilbild oder Ihre Initialen."),(0,t.kt)("li",null,"W\xe4hlen Sie ein Bild aus Ihrer Dateispeicher."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Speichern")," um den Prozess abzuschlie\xdfen."))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Tippen Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der Ecke rechts oben in einem Gruppenchat um das Men\xfc zu \xf6ffnen."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Informationen anzeigen")," um die Gruppeneinstellungen zu \xf6ffnen."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Bearbeiten")," rechtsoben."),(0,t.kt)("li",null,"Tippen Sie auf Ihr Profilbild oder Ihre Initialen."),(0,t.kt)("li",null,"W\xe4hlen Sie ein Bild aus Ihrer Dateispeicher."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Speichern")," um den Prozess abzuschlie\xdfen.")))),(0,t.kt)("h3",{id:"personen-zu-einer-gruppe-hinzuf\xfcgen"},"Personen zu einer Gruppe hinzuf\xfcgen"),(0,t.kt)("p",null,"Gruppenchats sind der beste Weg, um Unterhaltungen \xfcber verschiedene Projekte, Themen oder Teams in Famedly zu organisieren. F\xfcgen Sie Personen zu Gruppen hinzu, um die richtigen Personen und Informationen an einem Ort zusammenzubringen. Sie k\xf6nnen eine unbegrenzte Anzahl von Personen zu einer Gruppe hinzuf\xfcgen. Je gr\xf6\xdfer die Gruppen werden, desto un\xfcbersichtlicher kann die Zusammenarbeit werden. Wir empfehlen daher bewusst zu \xfcberlegen, welche Personen hinzugef\xfcgt werden sollten."),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Klicken Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Teilnehmer zeigen"),"."),(0,t.kt)("li",null,"Klicken Sie auf das ",(0,t.kt)("b",null,"\uff0bSymbol")," in der Ecke rechtsoben."),(0,t.kt)("li",null,"Klicken Sie auf die Person, die Sie hinzuf\xfcgen m\xf6chten."))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Tippen Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke in einer Gruppe."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Teilnehmer zeigen"),"."),(0,t.kt)("li",null,"Tippen Sie auf das ",(0,t.kt)("b",null,"\uff0bSymbol")," in der Ecke rechtsoben."),(0,t.kt)("li",null,"Tippen Sie auf die Person, die Sie hinzuf\xfcgen m\xf6chten.")))),(0,t.kt)("img",{alt:"Teilnehmer zu Gruppen hinzuf\xfcgen",src:(0,a.Z)("/img/chatroom_group_details_addmembers.PNG.png"),width:"40%"}),(0,t.kt)("h3",{id:"personen-aus-einer-gruppe-entfernen"},"Personen aus einer Gruppe entfernen"),(0,t.kt)("p",null,"Famedly organisiert Unterhaltungen zwischen mehreren Personen in Gruppenchats. Gruppenchats sorgen f\xfcr Ordnung und \xdcbersichtlichkeit bei der Arbeit. Erstellen Sie themenbasierte Gruppen oder Gruppen f\xfcr Teams, um die Zusammenarbeit zu f\xf6rdern.\nWenn eine Person nicht mehr Teil einer Gruppe sein sollte, kann die Person entfernt werden. Administratoren einer Gruppe k\xf6nnen Personen aus der Gruppe entfernen."),(0,t.kt)("p",null,"Wenn Sie eine Person aus einer Gruppe entfernen, kann diese Person nicht mehr an der Kommunikation teilnehmen, aber hat noch Zugriff auf alte Nachrichten innerhalb der Gruppe."),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Klicken Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Teilnehmer zeigen"),"."),(0,t.kt)("li",null,"Klicken Sie auf die drei Punkte neben der Person, die Sie entfernen m\xf6chten."),(0,t.kt)("li",null,"Klicken Sie auf  ",(0,t.kt)("code",null,"Aus der Gruppe entfernen"),"."))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Tippen Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke in einer Gruppe."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Teilnehmer zeigen"),"."),(0,t.kt)("li",null,"Tippen Sie auf die drei Punkte neben der Person, die Sie entfernen m\xf6chten."),(0,t.kt)("li",null,"Tippen Sie auf  ",(0,t.kt)("code",null,"Aus der Gruppe entfernen"),".")))),(0,t.kt)("admonition",{type:"danger"},(0,t.kt)("p",{parentName:"admonition"},"Sie k\xf6nnen die Person nicht entfernen, wenn sie auch ein Administrator ist. In diesem Fall m\xfcssen Sie die Person bitten, die Gruppe eigenst\xe4ndig zu verlassen.")),(0,t.kt)("h3",{id:"nachrichtenversand-auf-gruppen-admins-beschr\xe4nken"},"Nachrichtenversand auf Gruppen-Admins beschr\xe4nken"),(0,t.kt)("p",null,"Gruppen k\xf6nnen so eingestellt werden, dass nur Administratoren Nachrichten senden k\xf6nnen. Dies kann besonders f\xfcr Gruppen mit vielen Personen n\xfctzlich sein, in denen Ank\xfcndigungen geteilt werden sollten.\nIn diesem Fall k\xf6nnen nur Administratoren einer Gruppe Ank\xfcndigungen verschicken."),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("li",null,"Klicken Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke eines Gruppenchats um die Informationen anzuzeigen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Nur Administratoren k\xf6nnen Nachrichten senden")," um die Einstellung zu aktivieren.")),(0,t.kt)(u.Z,{value:"mobil",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Tippen Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke eines Gruppenchats um die Informationen anzuzeigen."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Nur Administratoren k\xf6nnen Nachrichten senden")," um die Einstellung zu aktivieren.")))),(0,t.kt)("img",{alt:"Nachrichten verschicken auf Gruppenadministratoren beschr\xe4nken",src:(0,a.Z)("/img/chatroom_group_details_admin.PNG.png"),width:"40%"}),(0,t.kt)("h3",{id:"mitglieder-zum-gruppen-admin-ernennen"},"Mitglieder zum Gruppen-Admin ernennen"),(0,t.kt)(r.Z,{mdxType:"Tabs"},(0,t.kt)(u.Z,{value:"desktop",label:"Desktop",default:!0,mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Klicken Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke um die Gruppeninformationen zu \xf6ffnen."),(0,t.kt)("li",null,"Klicken Sie auf ",(0,t.kt)("b",null,"Teilnehmer anzeigen"),"."),(0,t.kt)("li",null,"Klicken Sie auf die drei Punkte neben der Person, die Sie zum Admin machen m\xf6chten."),(0,t.kt)("li",null,"Klicken Sie auf  ",(0,t.kt)("code",null,"Zum Admin machen"),"."))),(0,t.kt)(u.Z,{value:"mobile",label:"Mobil",mdxType:"TabItem"},(0,t.kt)("ol",null,(0,t.kt)("li",null,"Tippen Sie auf die ",(0,t.kt)("b",null,"drei Punkte")," in der oberen rechten Ecke in einer Gruppe."),(0,t.kt)("li",null,"Tippen Sie auf ",(0,t.kt)("b",null,"Teilnehmer anzeigen"),"."),(0,t.kt)("li",null,"Tippen Sie auf die drei Punkte neben der Person, die zum Admin machen m\xf6chten."),(0,t.kt)("li",null,"Tippen Sie auf  ",(0,t.kt)("code",null,"Zum Admin machen"),".")))),(0,t.kt)("admonition",{type:"danger"},(0,t.kt)("p",{parentName:"admonition"},"Sie k\xf6nnen andere Administratoren einer Gruppe nicht herabstufen.")),(0,t.kt)("h2",{id:"das-extern-label"},"Das 'Extern' Label"),(0,t.kt)("p",null,"Um sicherzustellen, dass keine Informationen unbeabsichtigt an externe Organisationen weitergegeben werden, haben wir ein 'Extern' Label eingef\xfchrt. Wenn Sie Personen zu einem Chatraum einladen oder Chatr\xe4ume mit externen Personen bereits bestehen, werden diese mit dem Label \"Extern\" gekennzeichnet."),(0,t.kt)("h2",{id:"chat-tipps-und-best-practices"},"Chat Tipps und Best Practices"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Vergewissern Sie sich, dass die von Ihnen erstellten oder betreuten Gruppenchats ein klares Thema und eine klare Beschreibung haben, damit die Leute verstehen, wof\xfcr sie verwendet werden."),(0,t.kt)("li",{parentName:"ul"},"Individualisieren Sie Ihre Gruppenchats, indem Sie ein Profilbild f\xfcr Ihren Gruppenchat erstellen"),(0,t.kt)("li",{parentName:"ul"},"Archivieren Sie Gruppenchats, wenn sie nicht mehr ben\xf6tigt werden.")))}m.isMDXComponent=!0}}]);