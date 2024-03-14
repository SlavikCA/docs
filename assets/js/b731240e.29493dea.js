"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[87964],{3905:(e,t,o)=>{o.d(t,{Zo:()=>s,kt:()=>v});var r=o(67294);function n(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,r)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){n(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function l(e,t){if(null==e)return{};var o,r,n=function(e,t){if(null==e)return{};var o,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)o=a[r],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(n[o]=e[o])}return n}var p=r.createContext({}),m=function(e){var t=r.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var o=e.components,n=e.mdxType,a=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=m(o),d=n,v=u["".concat(p,".").concat(d)]||u[d]||c[d]||a;return o?r.createElement(v,i(i({ref:t},s),{},{components:o})):r.createElement(v,i({ref:t},s))}));function v(e,t){var o=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=o.length,i=new Array(a);i[0]=d;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:n,i[1]=l;for(var m=2;m<a;m++)i[m]=o[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,o)}d.displayName="MDXCreateElement"},99482:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>a,metadata:()=>l,toc:()=>m});var r=o(87462),n=(o(67294),o(3905));const a={sidebar_position:4,sidebar_label:"Export a Volume to Image",title:"Export a Volume to Image",keywords:["Volume"],description:"Export volume to image from the Volume page."},i=void 0,l={unversionedId:"volume/export-volume",id:"version-v1.1/volume/export-volume",title:"Export a Volume to Image",description:"Export volume to image from the Volume page.",source:"@site/versioned_docs/version-v1.1/volume/export-volume.md",sourceDirName:"volume",slug:"/volume/export-volume",permalink:"/v1.1/volume/export-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/volume/export-volume.md",tags:[],version:"v1.1",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Export a Volume to Image",title:"Export a Volume to Image",keywords:["Volume"],description:"Export volume to image from the Volume page."},sidebar:"tutorialSidebar",previous:{title:"Clone a Volume",permalink:"/v1.1/volume/clone-volume"},next:{title:"Volume Snapshots",permalink:"/v1.1/volume/volume-snapshots"}},p={},m=[],s={toc:m},u="wrapper";function c(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/volume/export-volume"})),(0,n.kt)("p",null,"You can select and export an existing volume to an image by following the steps below:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Export Image")," option."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"export-volume-to-image-1",src:o(20596).Z,width:"2560",height:"726"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Namespace")," of the new image.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"Name")," of the new image.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select an existing ",(0,n.kt)("inlineCode",{parentName:"p"},"StorageClass"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"(Optional) You can download the exported image from the ",(0,n.kt)("inlineCode",{parentName:"p"},"Images")," page by clicking the ",(0,n.kt)("inlineCode",{parentName:"p"},"\u22ee")," button and selecting the ",(0,n.kt)("inlineCode",{parentName:"p"},"Download")," option."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{alt:"export-volume-to-image-2",src:o(46744).Z,width:"659",height:"391"})))))}c.isMDXComponent=!0},20596:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/export-volume-to-image-1-7eadd6b18692690838773948966a5836.png"},46744:(e,t,o)=>{o.d(t,{Z:()=>r});const r=o.p+"assets/images/export-volume-to-image-2-5697ce35fbe6270578c515b14431058e.png"}}]);