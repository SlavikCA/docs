"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5018],{3905:(e,a,t)=>{t.d(a,{Zo:()=>m,kt:()=>g});var r=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function n(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);a&&(r=r.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,r)}return t}function l(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?n(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,r,i=function(e,a){if(null==e)return{};var t,r,i={},n=Object.keys(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)t=n[r],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var a=r.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):l(l({},a),e)),t},m=function(e){var a=c(e.components);return r.createElement(s.Provider,{value:a},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return r.createElement(r.Fragment,{},a)}},u=r.forwardRef((function(e,a){var t=e.components,i=e.mdxType,n=e.originalType,s=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),p=c(t),u=i,g=p["".concat(s,".").concat(u)]||p[u]||d[u]||n;return t?r.createElement(g,l(l({ref:a},m),{},{components:t})):r.createElement(g,l({ref:a},m))}));function g(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var n=t.length,l=new Array(n);l[0]=u;var o={};for(var s in a)hasOwnProperty.call(a,s)&&(o[s]=a[s]);o.originalType=e,o[p]="string"==typeof e?e:i,l[1]=o;for(var c=2;c<n;c++)l[c]=t[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},36918:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>l,default:()=>d,frontMatter:()=>n,metadata:()=>o,toc:()=>c});var r=t(87462),i=(t(67294),t(3905));const n={sidebar_position:6,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},l=void 0,o={unversionedId:"upload-image",id:"version-v1.0/upload-image",title:"Upload Images",description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required.",source:"@site/versioned_docs/version-v1.0/upload-image.md",sourceDirName:".",slug:"/upload-image",permalink:"/v1.0/upload-image",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/upload-image.md",tags:[],version:"v1.0",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},sidebar:"tutorialSidebar",previous:{title:"Authentication",permalink:"/v1.0/authentication"},next:{title:"Host Management",permalink:"/v1.0/host/"}},s={},c=[{value:"Upload Images via URL",id:"upload-images-via-url",level:3},{value:"Upload Images via Local File",id:"upload-images-via-local-file",level:3},{value:"Create Images via Volumes",id:"create-images-via-volumes",level:3},{value:"Image labels",id:"image-labels",level:3}],m={toc:c},p="wrapper";function d(e){let{components:a,...n}=e;return(0,i.kt)(p,(0,r.Z)({},m,n,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/upload-image"})),(0,i.kt)("p",null,"Currently, there are three ways that are supported to create an image: uploading images via URL, uploading images via local files, and creating images via volumes."),(0,i.kt)("h3",{id:"upload-images-via-url"},"Upload Images via URL"),(0,i.kt)("p",null,"To import virtual machine images in the ",(0,i.kt)("strong",{parentName:"p"},"Images")," page, enter a URL that can be accessed from the cluster. Description and labels are optional."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The image name will be auto-filled using the URL address's filename. You can customize the image name at any time.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(79296).Z,width:"3358",height:"1118"})),(0,i.kt)("h3",{id:"upload-images-via-local-file"},"Upload Images via Local File"),(0,i.kt)("p",null,"Currently, qcow2, raw, and ISO images are supported."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Please do not refresh the page until the file upload is finished."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(20265).Z,width:"3358",height:"1110"})),(0,i.kt)("h3",{id:"create-images-via-volumes"},"Create Images via Volumes"),(0,i.kt)("p",null,"On the ",(0,i.kt)("strong",{parentName:"p"},"Volumes")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Export Image"),". Enter image name to create image."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(65382).Z,width:"3348",height:"1504"})),(0,i.kt)("h3",{id:"image-labels"},"Image labels"),(0,i.kt)("p",null,"You can add labels to the image, which will help identify the OS type more accurately. Additionally, you can also add any custom labels when needed."),(0,i.kt)("p",null,"If you create an image from a URL, the UI will automatically recognize the OS type and image category based on the image name. However, if you created the image by uploading a local file, you will need to manually select the corresponding labels."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(38578).Z,width:"2549",height:"588"})))}d.isMDXComponent=!0},65382:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/export-image-2bfeb6369e6b56cc144acea8467c0628.png"},38578:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/image-labels-3c2e760fd6ce7beed89308c31fe51ad3.png"},20265:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/upload-image-local-7ba461f1cd94e42e19b12aabfaa3f287.png"},79296:(e,a,t)=>{t.d(a,{Z:()=>r});const r=t.p+"assets/images/upload-image-f8e52b3aefcfc7e02dc2c78cc2e1817f.png"}}]);