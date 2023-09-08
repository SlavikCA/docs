"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[4361],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),l=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=l(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),p=l(n),u=r,f=p["".concat(d,".").concat(u)]||p[u]||m[u]||o;return n?a.createElement(f,s(s({ref:t},c),{},{components:n})):a.createElement(f,s({ref:t},c))}));function f(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,s=new Array(o);s[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i[p]="string"==typeof e?e:r,s[1]=i;for(var l=2;l<o;l++)s[l]=n[l];return a.createElement.apply(null,s)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},80238:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>l});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:4,sidebar_label:"Addons",title:"Addons"},s=void 0,i={unversionedId:"advanced/addons",id:"advanced/addons",title:"Addons",description:"Harvester makes optional functionality available as Addons.",source:"@site/docs/advanced/addons.md",sourceDirName:"advanced",slug:"/advanced/addons",permalink:"/v1.2/advanced/addons",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/addons.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Addons",title:"Addons"},sidebar:"docs",previous:{title:"Storage Network",permalink:"/v1.2/advanced/storagenetwork"},next:{title:"PCI Devices",permalink:"/v1.2/advanced/addons/pcidevices"}},d={},l=[],c={toc:l},p="wrapper";function m(e){let{components:t,...o}=e;return(0,r.kt)(p,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/addons"})),(0,r.kt)("p",null,"Harvester makes optional functionality available as Addons."),(0,r.kt)("p",null,"One of the key reasons for the same is to ensure that Harvester installation footprint can be kept low while allowing users to enable/disable functionality based on their use case or requirements."),(0,r.kt)("p",null,"Some level of customization is allowed for each addon, which depends on the underlying addon."),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,r.kt)("p",null,"Harvester v1.2.0 ships with five Addons:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v1.2/advanced/addons/pcidevices"},"pcidevices-controller")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v1.2/advanced/addons/vmimport"},"vm-import-controller")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v1.2/monitoring/harvester-monitoring"},"rancher-monitoring")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v1.2/logging/harvester-logging"},"rancher-logging")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"/v1.2/advanced/addons/seeder"},"harvester-seeder"))),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(37170).Z,width:"1942",height:"519"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"p"},"harvester-seeder")," is released as an experimental feature in Harvester v1.2.0 and has an ",(0,r.kt)("strong",{parentName:"p"},"Experimental")," label added to the ",(0,r.kt)("strong",{parentName:"p"},"Name"),".")),(0,r.kt)("p",null,"You can enable a ",(0,r.kt)("strong",{parentName:"p"},"Disabled")," by choosing an addon and selecting ",(0,r.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,r.kt)("strong",{parentName:"p"},"Enable")," from the ",(0,r.kt)("strong",{parentName:"p"},"Basic")," tab."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(94664).Z,width:"2191",height:"346"})),(0,r.kt)("p",null,"When the addon is enabled successfully, the ",(0,r.kt)("strong",{parentName:"p"},"State")," will be ",(0,r.kt)("strong",{parentName:"p"},"DeploySuccessful"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(41013).Z,width:"1702",height:"61"})),(0,r.kt)("p",null,"You can disable an ",(0,r.kt)("strong",{parentName:"p"},"Enabled")," by choosing an addon and selecting ",(0,r.kt)("strong",{parentName:"p"},"\u22ee")," > ",(0,r.kt)("strong",{parentName:"p"},"Disable")," or from the ",(0,r.kt)("strong",{parentName:"p"},"Basic")," tab."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(15365).Z,width:"2184",height:"451"})),(0,r.kt)("p",null,"When the addon is disabled successfully, the ",(0,r.kt)("strong",{parentName:"p"},"State")," will be ",(0,r.kt)("strong",{parentName:"p"},"Disabled"),"."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"When an addon is disabled, the configuration data is stored to reuse when the addon is enabled again.")))}m.isMDXComponent=!0},37170:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/AddonsV120-fec17286ee7243f32bf50c892ff42908.png"},41013:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/deploy-successful-addon-fcdfaf7cb9af7dfe204f97d42a304b5e.png"},15365:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/disable-rancher-monitoring-addon-bd7371d23572de40cbaaaf7c3001d6e2.png"},94664:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/enable-rancher-logging-addon-5119e0cadca2ddc7c72fa878fe0e87bb.png"}}]);