"use strict";(self.webpackChunk_agoralabs_sh_kibisis_website=self.webpackChunk_agoralabs_sh_kibisis_website||[]).push([[865],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>h});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var i=a.createContext({}),u=function(e){var t=a.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=u(r),m=n,h=c["".concat(i,".").concat(m)]||c[m]||d[m]||o;return r?a.createElement(h,s(s({ref:t},p),{},{components:r})):a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l[c]="string"==typeof e?e:n,s[1]=l;for(var u=2;u<o;u++)s[u]=r[u];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},5162:(e,t,r)=>{r.d(t,{Z:()=>s});var a=r(7294),n=r(6010);const o={tabItem:"tabItem_Ymn6"};function s(e){let{children:t,hidden:r,className:s}=e;return a.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,s),hidden:r},t)}},4866:(e,t,r)=>{r.d(t,{Z:()=>y});var a=r(7462),n=r(7294),o=r(6010),s=r(2466),l=r(6550),i=r(1980),u=r(7392),p=r(12);function c(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:r,attributes:a,default:n}}=e;return{value:t,label:r,attributes:a,default:n}}))}function d(e){const{values:t,children:r}=e;return(0,n.useMemo)((()=>{const e=t??c(r);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,r])}function m(e){let{value:t,tabValues:r}=e;return r.some((e=>e.value===t))}function h(e){let{queryString:t=!1,groupId:r}=e;const a=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:r}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return r??null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(a.location.search);t.set(o,e),a.replace({...a.location,search:t.toString()})}),[o,a])]}function b(e){const{defaultValue:t,queryString:r=!1,groupId:a}=e,o=d(e),[s,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:r}=e;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:r}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${r.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=r.find((e=>e.default))??r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:o}))),[i,u]=h({queryString:r,groupId:a}),[c,b]=function(e){let{groupId:t}=e;const r=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,o]=(0,p.Nk)(r);return[a,(0,n.useCallback)((e=>{r&&o.set(e)}),[r,o])]}({groupId:a}),f=(()=>{const e=i??c;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{f&&l(f)}),[f]);return{selectedValue:s,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,o]),tabValues:o}}var f=r(2389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function v(e){let{className:t,block:r,selectedValue:l,selectValue:i,tabValues:u}=e;const p=[],{blockElementScrollPositionUntilNextRender:c}=(0,s.o5)(),d=e=>{const t=e.currentTarget,r=p.indexOf(t),a=u[r].value;a!==l&&(c(t),i(a))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const r=p.indexOf(e.currentTarget)+1;t=p[r]??p[0];break}case"ArrowLeft":{const r=p.indexOf(e.currentTarget)-1;t=p[r]??p[p.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":r},t)},u.map((e=>{let{value:t,label:r,attributes:s}=e;return n.createElement("li",(0,a.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>p.push(e),onKeyDown:m,onClick:d},s,{className:(0,o.Z)("tabs__item",g.tabItem,s?.className,{"tabs__item--active":l===t})}),r??t)})))}function k(e){let{lazy:t,children:r,selectedValue:a}=e;const o=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===a));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function w(e){const t=b(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",g.tabList)},n.createElement(v,(0,a.Z)({},e,t)),n.createElement(k,(0,a.Z)({},e,t)))}function y(e){const t=(0,f.Z)();return n.createElement(w,(0,a.Z)({key:String(t)},e))}},5885:(e,t,r)=>{r.d(t,{Z:()=>u});var a=r(6010),n=r(7294),o=r(941);const s="container_ywjC",l="container__outer_AkfP",i="image_KV1M",u=e=>{let{label:t,maxWidth:r="400px",imageSources:u}=e;return n.createElement("div",{className:(0,a.Z)(s,l)},n.createElement("div",{className:s,style:{maxWidth:r}},n.createElement(o.Z,{alt:t,"aria-label":t,className:i,sources:u})))}},1710:(e,t,r)=>{r.d(t,{Nf:()=>a,Vo:()=>o,ZZ:()=>n,jt:()=>l,of:()=>s});const a="https://agoralabs.sh",n="https://chromewebstore.google.com/detail/kibisis/hcgejekffjilpgbommjoklpneekbkajb",o="https://microsoftedge.microsoft.com/addons/detail/kibisis/bajncpocmkioafbijldokfbjajelkbmc",s="https://github.com/agoralabs-sh/kibisis-web-extension/issues/new?assignees=kieranroneill&labels=%F0%9F%90%9B+bug&projects=&template=bug_report_template.yml&title=%5BBug%5D%3A+",l="https://github.com/agoralabs-sh/kibisis-web-extension/issues/new?assignees=&labels=%E2%9C%A8+feature&projects=&template=feature_request_template.yml&title=%5BFeature%5D%3A+"},1454:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>h,contentTitle:()=>d,default:()=>v,frontMatter:()=>c,metadata:()=>m,toc:()=>b});var a=r(7462),n=(r(7294),r(3905)),o=r(4866),s=r(5162),l=r(5885),i=r(1710),u=r(8525),p=r(9914);const c={title:"Version 1.10.1 Release",description:"Version 1.10.1 provides Kibisis with some updates to allow for more robust connecting to dapps",slug:"version-1-10-1-release",authors:["kieran"],tags:["arc-0200","arc-0027","dapp","explorer","permissions","release","use-wallet"],image:"/static/images/new_release_logo_in_space.png"},d=void 0,m={permalink:"/blog/version-1-10-1-release",source:"@site/blog/2024-01-25-1-10-1-new-release/index.mdx",title:"Version 1.10.1 Release",description:"Version 1.10.1 provides Kibisis with some updates to allow for more robust connecting to dapps",date:"2024-01-25T00:00:00.000Z",formattedDate:"January 25, 2024",tags:[{label:"arc-0200",permalink:"/blog/tags/arc-0200"},{label:"arc-0027",permalink:"/blog/tags/arc-0027"},{label:"dapp",permalink:"/blog/tags/dapp"},{label:"explorer",permalink:"/blog/tags/explorer"},{label:"permissions",permalink:"/blog/tags/permissions"},{label:"release",permalink:"/blog/tags/release"},{label:"use-wallet",permalink:"/blog/tags/use-wallet"}],readingTime:3.4,hasTruncateMarker:!1,authors:[{name:"Kieran O'Neill",title:"Builder at Agora Labs",url:"https://kieranoneill.com",email:"kieran@agoralabs.sh",imageURL:"https://agoralabs.sh/images/builder_kieran-512x512.png",key:"kieran"}],frontMatter:{title:"Version 1.10.1 Release",description:"Version 1.10.1 provides Kibisis with some updates to allow for more robust connecting to dapps",slug:"version-1-10-1-release",authors:["kieran"],tags:["arc-0200","arc-0027","dapp","explorer","permissions","release","use-wallet"],image:"/static/images/new_release_logo_in_space.png"},prevItem:{title:"Version 1.11.0 Release",permalink:"/blog/version-1-11-1-release"},nextItem:{title:"Version 1.9.0 Release",permalink:"/blog/version-1-9-0-release"}},h={authorsImageUrls:[void 0]},b=[{value:"Overview",id:"overview",level:2},{value:"Features",id:"features",level:2},{value:"UseWallet Support",id:"usewallet-support",level:3},{value:"Hide ARC-200 Asset",id:"hide-arc-200-asset",level:3},{value:"Pera Explorer Integration",id:"pera-explorer-integration",level:3},{value:"Remove Downloads Permission",id:"remove-downloads-permission",level:3},{value:"Implementation Of The Proposed ARC-0027",id:"implementation-of-the-proposed-arc-0027",level:3},{value:"Fixes",id:"fixes",level:2},{value:"Closing Words",id:"closing-words",level:2}],f={toc:b},g="wrapper";function v(e){let{components:t,...c}=e;return(0,n.kt)(g,(0,a.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Kibisis release 3D pixel icon in space",src:r(6187).Z,width:"1500",height:"500"})),(0,n.kt)("h2",{id:"overview"},"Overview"),(0,n.kt)("p",null,"We are proud to present a new milestone in the development of Kibisis: v1.10.1!"),(0,n.kt)("p",null,"This new update mainly focuses on some underlying infrastructure work that allows Kibisis to more robustly connect with dapps."),(0,n.kt)("p",null,"Below you will find more details about what is new in this release."),(0,n.kt)("h2",{id:"features"},"Features"),(0,n.kt)("h3",{id:"usewallet-support"},"UseWallet Support"),(0,n.kt)("p",null,"The star feature in this release is support for the popular provider connector ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/TxnLab/use-wallet"},"UseWallet"),", produced by the excellent team over at ",(0,n.kt)("a",{parentName:"p",href:"https://www.txnlab.dev/"},"TxnLab"),"."),(0,n.kt)("p",null,"Kibisis will now be integrated as a provider with UseWallet, which means a lot of existing dapps will be able to support Kibisis as a wallet to sign your transactions."),(0,n.kt)("p",null,"For the dapp developers out there, all that is needed to allow Kibisis is specifying the Kibisis provider ID:"),(0,n.kt)(o.Z,{defaultValue:"javascript",values:[{label:"JavaScript",value:"javascript"},{label:"TypeScript",value:"typescript"}],mdxType:"Tabs"},(0,n.kt)(s.Z,{value:"javascript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-javascript"},"import React from 'react';\nimport { PROVIDER_ID, WalletProvider, useInitializeProviders } from '@txnlab/use-wallet';\n\nexport const App = () => {\n  const providers = useInitializeProviders({\n    providers: [\n      // ... other providers\n      { id: PROVIDER_ID.KIBISIS },\n    ],\n  });\n\n  return (\n    <WalletProvider value={providers}>\n      <div className=\"App\">{/* ... */}</div>\n    </WalletProvider>\n  );\n};\n\n"))),(0,n.kt)(s.Z,{value:"typescript",mdxType:"TabItem"},(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-typescript"},"import React, { FC } from 'react';\nimport { PROVIDER_ID, SupportedProviders, WalletProvider, useInitializeProviders } from '@txnlab/use-wallet';\n\nexport const App: FC = () => {\n  const providers: SupportedProviders | null = useInitializeProviders({\n    providers: [\n      // ... other providers\n      { id: PROVIDER_ID.KIBISIS },\n    ],\n  });\n\n  return (\n    <WalletProvider value={providers}>\n      <div className=\"App\">{/* ... */}</div>\n    </WalletProvider>\n  );\n};\n")))),(0,n.kt)("p",null,"A MASSIVE thank you to ",(0,n.kt)("a",{href:"https://github.com/drichar",rel:"noreferrer",target:"_blank"},"Doug Richar")," for their invaluable support in getting such an important milestone for Kibisis over line."),(0,n.kt)("h3",{id:"hide-arc-200-asset"},"Hide ARC-200 Asset"),(0,n.kt)("p",null,'A new button is now available on the asset page that allows you to "hide" an ARC-200 asset. This simply hides the asset from the asset holdings list.'),(0,n.kt)(l.Z,{label:"Hide ARC-200 asset",maxWidth:"400px",imageSources:{dark:u.Z,light:p.Z},mdxType:"BlogScreenshotImage"}),(0,n.kt)("p",null,"You can re-add the ARC-200 asset at any time without any impact to your funds."),(0,n.kt)("p",null,"Credit goes to the ever awesome ",(0,n.kt)("a",{href:"https://github.com/d13co",rel:"noreferrer",target:"_blank"},"D13")," for their work in suggesting and implementing this feature."),(0,n.kt)("h3",{id:"pera-explorer-integration"},"Pera Explorer Integration"),(0,n.kt)("p",null,"With the release of Pera Explorer for Algorand MainNet and TestNets, it will now appear as an option in preferred block explorer list, and, in the case of Algorand TestNet, the default block explorer."),(0,n.kt)("h3",{id:"remove-downloads-permission"},"Remove Downloads Permission"),(0,n.kt)("p",null,"We have moved the Strong Password Policy (the policy that sets out guidelines for passwords) to the external Kibisis website here: ",(0,n.kt)("a",{parentName:"p",href:"https://kibis.is/strong-password-policy"},"https://kibis.is/strong-password-policy"),"."),(0,n.kt)("p",null,"This means that we have removed the feature that allowed you to download the document locally, which, in-turn also removes the downloads permission."),(0,n.kt)("h3",{id:"implementation-of-the-proposed-arc-0027"},"Implementation Of The Proposed ARC-0027"),(0,n.kt)("p",null,"A new ARC has been proposed: ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/algorandfoundation/ARCs/pull/272"},"ARC-0027"),". This ARC proposes the use of ",(0,n.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/en-US/docs/Web/API/Broadcast_Channel_API"},"BroadcastChannel")," to securely handle communications between a browser extension and a webpage."),(0,n.kt)("p",null,"Version 1.10.1 has revamped its underlying infrastructure to move away from script injecting and to use the proposed ARC-0027."),(0,n.kt)("h2",{id:"fixes"},"Fixes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"When importing an account on registration, the registration app should close and open the main app."),(0,n.kt)("li",{parentName:"ul"},"Allow MainNet for Algorand correctly enables when confirming.")),(0,n.kt)("h2",{id:"closing-words"},"Closing Words"),(0,n.kt)("p",null,"Thank you for your continued interest in Kibisis! We hope you are enjoying using it."),(0,n.kt)("p",null,"Remember, if you see any bugs, please report the issue ",(0,n.kt)("a",{href:i.of,rel:"noreferrer",target:"_blank"},"here"),". If you would like to make any suggestions on new features, you can fill out a feature request ",(0,n.kt)("a",{href:i.jt,rel:"noreferrer",target:"_blank"},"here"),"."))}v.isMDXComponent=!0},8525:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/hide_arc200_asset-dark-71109f862b1ce22dea6e80c30daea9d8.png"},9914:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/hide_arc200_asset-light-ff31a48f6fd291ae86fb197ef8fefce1.png"},6187:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/new_release_logo_in_space-e0e11055886291bafd09a8e7199d3f19.png"}}]);