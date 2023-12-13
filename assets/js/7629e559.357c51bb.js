"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[95106],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>h});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),d=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},c=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=d(r),m=a,h=u["".concat(l,".").concat(m)]||u[m]||p[m]||o;return r?n.createElement(h,s(s({ref:t},c),{},{components:r})):n.createElement(h,s({ref:t},c))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,s[1]=i;for(var d=2;d<o;d++)s[d]=r[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86079:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const o={id:"singlenodeclusters",sidebar_position:7,sidebar_label:"Single-Node Clusters",title:"Single-Node Clusters",keywords:["Single Node"],Description:"Support for deployment of single-node clusters"},s=void 0,i={unversionedId:"advanced/singlenodeclusters",id:"version-v1.2/advanced/singlenodeclusters",title:"Single-Node Clusters",description:"As of Harvester release v1.2.0, single-node clusters are supported for implementations that require minimal initial deployment resources or that can tolerate lower resiliency. You can create single-node clusters using the standard installation methods (ISO, USB, and PXE boot).",source:"@site/versioned_docs/version-v1.2/advanced/singlenodeclusters.md",sourceDirName:"advanced",slug:"/advanced/singlenodeclusters",permalink:"/v1.2/advanced/singlenodeclusters",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/advanced/singlenodeclusters.md",tags:[],version:"v1.2",sidebarPosition:7,frontMatter:{id:"singlenodeclusters",sidebar_position:7,sidebar_label:"Single-Node Clusters",title:"Single-Node Clusters",keywords:["Single Node"],Description:"Support for deployment of single-node clusters"},sidebar:"docs",previous:{title:"Rancher Manager",permalink:"/v1.2/advanced/addons/rancher-vcluster"},next:{title:"Rancher Integration",permalink:"/v1.2/rancher/index"}},l={},d=[{value:"Prerequisites",id:"prerequisites",level:2}],c={toc:d},u="wrapper";function p(e){let{components:t,...r}=e;return(0,a.kt)(u,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/advanced/singlenodeclusters"})),(0,a.kt)("p",null,"As of Harvester release v1.2.0, single-node clusters are supported for implementations that require minimal initial deployment resources or that can tolerate lower resiliency. You can create single-node clusters using the standard installation methods (",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/install/index"},"ISO"),", ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/install/usb-install"},"USB"),", and ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/install/pxe-boot-install"},"PXE boot"),")."),(0,a.kt)("p",null,"Single-node clusters support most Harvester features, including the creation of RKE2 clusters and node upgrades (with some limitations). However, this deployment type has the following key disadvantages:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"No high availability: Errors and updates that require rebooting of the node cause downtime to running VMs."),(0,a.kt)("li",{parentName:"ul"},"No multi-replica support: Only one replica is created for each volume in Longhorn."),(0,a.kt)("li",{parentName:"ul"},"No live migration and zero-downtime support during upgrades.")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"Before you begin deploying your single-node cluster, ensure that the following requirements are addressed."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Hardware: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/install/requirements#hardware-requirements"},"Use server-class hardware")," with sufficient resources to run Harvester and a production workload. Laptops and nested virtualization are not supported.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Network: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/install/requirements#port-requirements-for-harvester-nodes"},"Configure ports")," based on the type of traffic to be transmitted among VMs.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"StorageClass: ",(0,a.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/advanced/storageclass#creating-a-storageclass"},"Create a new default StorageClass")," with the ",(0,a.kt)("strong",{parentName:"p"},"Number of Replicas"),' parameter set to "1". This ensures that only one replica is created for each volume in Longhorn.'),(0,a.kt)("admonition",{parentName:"li",title:"important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"The default StorageClass ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-longhorn")," has a replica count value of ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),' for high availability. If you use this StorageClass to create volumes for your single-node cluster, Longhorn is unable to create the configured number of replicas. This results in volumes being marked as "Degraded" on the Longhorn UI.')))))}p.isMDXComponent=!0}}]);