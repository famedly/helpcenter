"use strict";(self.webpackChunkhelpcenter=self.webpackChunkhelpcenter||[]).push([[338],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),d=s(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,l(l({ref:t},c),{},{components:n})):r.createElement(h,l({ref:t},c))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[d]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var r=n(7294),a=n(4334);const i={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>S});var r=n(7462),a=n(7294),i=n(4334),l=n(2466),o=n(6550),u=n(1980),s=n(7392),c=n(12);function d(e){return function(e){return a.Children.map(e,(e=>{if(!e||(0,a.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:r,default:a}}=e;return{value:t,label:n,attributes:r,default:a}}))}function p(e){const{values:t,children:n}=e;return(0,a.useMemo)((()=>{const e=t??d(n);return function(e){const t=(0,s.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:n}=e;const r=(0,o.k6)(),i=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,u._X)(i),(0,a.useCallback)((e=>{if(!i)return;const t=new URLSearchParams(r.location.search);t.set(i,e),r.replace({...r.location,search:t.toString()})}),[i,r])]}function f(e){const{defaultValue:t,queryString:n=!1,groupId:r}=e,i=p(e),[l,o]=(0,a.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=n.find((e=>e.default))??n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:i}))),[u,s]=h({queryString:n,groupId:r}),[d,f]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,i]=(0,c.Nk)(n);return[r,(0,a.useCallback)((e=>{n&&i.set(e)}),[n,i])]}({groupId:r}),k=(()=>{const e=u??d;return m({value:e,tabValues:i})?e:null})();(0,a.useLayoutEffect)((()=>{k&&o(k)}),[k]);return{selectedValue:l,selectValue:(0,a.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);o(e),s(e),f(e)}),[s,f,i]),tabValues:i}}var k=n(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function g(e){let{className:t,block:n,selectedValue:o,selectValue:u,tabValues:s}=e;const c=[],{blockElementScrollPositionUntilNextRender:d}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(d(t),u(r))},m=e=>{let t=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const n=c.indexOf(e.currentTarget)+1;t=c[n]??c[0];break}case"ArrowLeft":{const n=c.indexOf(e.currentTarget)-1;t=c[n]??c[c.length-1];break}}t?.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t)},s.map((e=>{let{value:t,label:n,attributes:l}=e;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:p},l,{className:(0,i.Z)("tabs__item",b.tabItem,l?.className,{"tabs__item--active":o===t})}),n??t)})))}function v(e){let{lazy:t,children:n,selectedValue:r}=e;const i=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=i.find((e=>e.props.value===r));return e?(0,a.cloneElement)(e,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},i.map(((e,t)=>(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function y(e){const t=f(e);return a.createElement("div",{className:(0,i.Z)("tabs-container",b.tabList)},a.createElement(g,(0,r.Z)({},e,t)),a.createElement(v,(0,r.Z)({},e,t)))}function S(e){const t=(0,k.Z)();return a.createElement(y,(0,r.Z)({key:String(t)},e))}},2574:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(7462),a=(n(7294),n(3905));n(4866),n(5162);const i={sidebar_label:"Fehlerbehebung",title:"Fehlerbehebung",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},l=void 0,o={unversionedId:"help-center/your-account/troubleshoot",id:"help-center/your-account/troubleshoot",title:"Fehlerbehebung",description:"Fehlerbehebung und Zur\xfccksetzen",source:"@site/i18n/de/docusaurus-plugin-content-docs/current/help-center/your-account/troubleshoot.mdx",sourceDirName:"help-center/your-account",slug:"/help-center/your-account/troubleshoot",permalink:"/helpcenter/de/help-center/your-account/troubleshoot",draft:!1,editUrl:"https://crowdin.com/project/famedly-helpcenter/de",tags:[],version:"current",lastUpdatedBy:"Niklas Zender",lastUpdatedAt:1694453866,formattedLastUpdatedAt:"11. Sept. 2023",sidebarPosition:1,frontMatter:{sidebar_label:"Fehlerbehebung",title:"Fehlerbehebung",hide_title:!0,displayed_sidebar:"helpcenterSidebar",sidebar_position:1},sidebar:"helpcenterSidebar",previous:{title:"Einstellungen",permalink:"/helpcenter/de/help-center/your-account/account-settings"},next:{title:"Verschl\xfcsselung & Sicherheit",permalink:"/helpcenter/de/help-center/your-account/encryption-security"}},u={},s=[{value:"Allgemein",id:"allgemein",level:2},{value:"Mobil",id:"mobil",level:2},{value:"Browser",id:"browser",level:2},{value:"Browser zur\xfccksetzen",id:"browser-zur\xfccksetzen",level:3},{value:"Chrome",id:"chrome",level:4},{value:"Safari",id:"safari",level:4},{value:"Firefox",id:"firefox",level:4},{value:"Microsoft Edge",id:"microsoft-edge",level:4},{value:"Aufzeichnen von HAR-Dateien",id:"aufzeichnen-von-har-dateien",level:3}],c={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,a.kt)(d,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("div",{class:"hero hero--primary"},(0,a.kt)("div",{class:"container"},(0,a.kt)("h2",{class:"hero__title"},"Fehlerbehebung und Zur\xfccksetzen"),(0,a.kt)("h3",null,"Manchmal funktioniert nicht alles wie beabsichtigt. Lesen Sie weiter, um zu erfahren, wie Sie Famedly zur\xfccksetzen k\xf6nnen."))),(0,a.kt)("h2",{id:"allgemein"},"Allgemein"),(0,a.kt)("p",null,"Wenn etwas nicht funktioniert, k\xf6nnen Sie unseren Support erreichen, indem Sie auf den Knopf mit einem Fragezeichen (\u2753) klicken. Dies finden Sie in der unteren linken Ecke auf dem Desktop und in der oberen rechten Ecke auf mobilen Ger\xe4ten."),(0,a.kt)("p",null,"Du kannst auch ein Support-Ticket erstellen, indem Sie auf den folgenden Link klicken: ",(0,a.kt)("a",{parentName:"p",href:"https://famedly.atlassian.net/servicedesk/customer/portal/7"},"Support-Ticket erstellen")," ."),(0,a.kt)("h2",{id:"mobil"},"Mobil"),(0,a.kt)("p",null,"Wenn Famedly auf Ihrem mobilen Ger\xe4t nicht korrekt funktioniert, haben Sie folgende M\xf6glichkeiten:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Die App neu starten."),(0,a.kt)("li",{parentName:"ul"},"Das mobile Ger\xe4t neu starten.")),(0,a.kt)("h2",{id:"browser"},"Browser"),(0,a.kt)("p",null,"Wenn Famedly im Browser nicht korrekt funktioniert, haben Sie folgende M\xf6glichkeiten:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Schlie\xdfen Sie den Browser."),(0,a.kt)("li",{parentName:"ul"},"\xd6ffnen Sie Famedly erneut.")),(0,a.kt)("p",null,'Wenn Famedly nach diesen Schritten immer noch nicht korrekt funktioniert, befolgen Sie bitte die Anweisungen im Kapitel "Browser zur\xfccksetzen" um Ihren Browser zur\xfcckzusetzen.'),(0,a.kt)("admonition",{type:"warning"},(0,a.kt)("p",{parentName:"admonition"},"Das Zur\xfccksetzen des App- oder Browser-Caches f\xfchrt zur Abmeldung von Ihrem aktiven Famedly-Konto. Stellen Sie sicher, dass Sie Ihre Anmeldedaten und die Passphrase griffbereit haben, um sich nach dem Zur\xfccksetzen wieder anzumelden und auf das Chat-Backup zugreifen zu k\xf6nnen!")),(0,a.kt)("h3",{id:"browser-zur\xfccksetzen"},"Browser zur\xfccksetzen"),(0,a.kt)("h4",{id:"chrome"},"Chrome"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xd6ffnen Sie die Entwickleroptionen mit ",(0,a.kt)("inlineCode",{parentName:"li"},"cmd + Option + i")," f\xfcr Mac oder ",(0,a.kt)("inlineCode",{parentName:"li"},"Strg + Umschalt + i")," f\xfcr Windows."),(0,a.kt)("li",{parentName:"ul"},"Lassen Sie die Entwickler-Konsole ge\xf6ffnet und klicken Sie mit der rechten Maustaste auf die Aktualisierungsschaltfl\xe4che oben."),(0,a.kt)("li",{parentName:"ul"},"W\xe4hlen Sie ",(0,a.kt)("inlineCode",{parentName:"li"},"Cache leeren und erneut laden"),"."),(0,a.kt)("li",{parentName:"ul"},"Navigieren Sie zu ",(0,a.kt)("inlineCode",{parentName:"li"},"Anwendung")," und erweitern Sie die Cookies auf der linken Seite."),(0,a.kt)("li",{parentName:"ul"},"Klicken Sie mit der rechten Maustaste auf den Famedly Link und w\xe4hlen Sie ",(0,a.kt)("inlineCode",{parentName:"li"},"L\xf6schen"),".")),(0,a.kt)("h4",{id:"safari"},"Safari"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xd6ffnen Sie das ",(0,a.kt)("inlineCode",{parentName:"li"},"Safari Men\xfc")," in Ihrer Systemleiste und w\xe4hlen Sie ",(0,a.kt)("inlineCode",{parentName:"li"},"Einstellungen"),"."),(0,a.kt)("li",{parentName:"ul"},"W\xe4hlen Sie im Bereich ",(0,a.kt)("inlineCode",{parentName:"li"},"Datenschutz")," ",(0,a.kt)("inlineCode",{parentName:"li"},"Website-Daten verwalten"),"."),(0,a.kt)("li",{parentName:"ul"},'Suche Sie nach "Famedly", w\xe4hlen Sie es aus und klicken Sie dann auf ',(0,a.kt)("inlineCode",{parentName:"li"},"Alle entfernen"),".")),(0,a.kt)("h4",{id:"firefox"},"Firefox"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Klicken Sie links neben der URL auf das ",(0,a.kt)("inlineCode",{parentName:"li"},"\ud83d\udd12")," Symbol."),(0,a.kt)("li",{parentName:"ul"},"Klicken Sie auf ",(0,a.kt)("inlineCode",{parentName:"li"},"Cookies und Websitedaten l\xf6schen"),"."),(0,a.kt)("li",{parentName:"ul"},"Klicken Sie auf ",(0,a.kt)("inlineCode",{parentName:"li"},"Entfernen"),".")),(0,a.kt)("h4",{id:"microsoft-edge"},"Microsoft Edge"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\xd6ffnen Sie die Entwickleroptionen mit ",(0,a.kt)("inlineCode",{parentName:"li"},"cmd + Option + i")," f\xfcr Mac oder ",(0,a.kt)("inlineCode",{parentName:"li"},"Strg + Umschalt + i")," f\xfcr Windows."),(0,a.kt)("li",{parentName:"ul"},"Lassen Sie die Entwickler-Konsole ge\xf6ffnet und klicken Sie mit der rechten Maustaste auf die Aktualisierungsschaltfl\xe4che oben."),(0,a.kt)("li",{parentName:"ul"},"W\xe4hlen Sie ",(0,a.kt)("inlineCode",{parentName:"li"},"Cache leeren und erneut laden"),"."),(0,a.kt)("li",{parentName:"ul"},"Navigieren Sie zu ",(0,a.kt)("inlineCode",{parentName:"li"},"Anwendung")," und erweitern Sie die Cookies auf der linken Seite."),(0,a.kt)("li",{parentName:"ul"},"Klicken Sie mit der rechten Maustaste auf den Famedly Link und w\xe4hlen Sie ",(0,a.kt)("inlineCode",{parentName:"li"},"L\xf6schen"),".")),(0,a.kt)("h3",{id:"aufzeichnen-von-har-dateien"},"Aufzeichnen von HAR-Dateien"),(0,a.kt)("p",null,"HAR ist ein Archivdateiformat, das Informationen \xfcber Ihre Sitzung mit Software aufzeichnet. Wenn Sie ein Problem mit Famedly beheben m\xf6chten, kann es manchmal hilfreich sein, eine HAR-Datei aufzuzeichnen und mit unserem Support zu teilen."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://support.google.com/admanager/answer/10358597?hl=de"},"Anleitung f\xfcr Chrome")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://firefox-source-docs.mozilla.org/devtools-user/network_monitor/index.html#opening-the-network-monitor"},"Anleitung f\xfcr Firefox")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://developer.apple.com/safari/tools/#current"},"Anleitung f\xfcr Safari")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://learn.microsoft.com/en-us/microsoft-edge/devtools-guide-chromium/network/"},"Edge instructions"))))}p.isMDXComponent=!0}}]);