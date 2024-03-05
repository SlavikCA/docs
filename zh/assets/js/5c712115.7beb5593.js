"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[88661],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>g});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var l=n.createContext({}),m=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},p=function(e){var t=m(e.components);return n.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(a),u=r,g=c["".concat(l,".").concat(u)]||c[u]||d[u]||i;return a?n.createElement(g,s(s({ref:t},p),{},{components:a})):n.createElement(g,s({ref:t},p))}));function g(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,s=new Array(i);s[0]=u;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:r,s[1]=o;for(var m=2;m<i;m++)s[m]=a[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},48553:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>i,metadata:()=>o,toc:()=>m});var n=a(87462),r=(a(67294),a(3905));const i={id:"upload-image",sidebar_position:6,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},s=void 0,o={unversionedId:"upload-image",id:"version-v1.2/upload-image",title:"Upload Images",description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required.",source:"@site/versioned_docs/version-v1.2/upload-image.md",sourceDirName:".",slug:"/upload-image",permalink:"/zh/v1.2/upload-image",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/upload-image.md",tags:[],version:"v1.2",sidebarPosition:6,frontMatter:{id:"upload-image",sidebar_position:6,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},sidebar:"docs",previous:{title:"Authentication",permalink:"/zh/v1.2/authentication"},next:{title:"Host Management",permalink:"/zh/v1.2/host/"}},l={},m=[{value:"Upload Images via URL",id:"upload-images-via-url",level:3},{value:"Upload Images via Local File",id:"upload-images-via-local-file",level:3},{value:"HTTP 413 Error in Rancher Multi-Cluster Management",id:"http-413-error-in-rancher-multi-cluster-management",level:4},{value:"Create Images via Volumes",id:"create-images-via-volumes",level:3},{value:"Image StorageClass",id:"image-storageclass",level:3},{value:"Image Labels",id:"image-labels",level:3}],p={toc:m},c="wrapper";function d(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"Currently, there are three ways that are supported to create an image: uploading images via URL, uploading images via local files, and creating images via volumes."),(0,r.kt)("h3",{id:"upload-images-via-url"},"Upload Images via URL"),(0,r.kt)("p",null,"To import virtual machine images in the ",(0,r.kt)("strong",{parentName:"p"},"Images")," page, enter a URL that can be accessed from the cluster. Description and labels are optional."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The image name will be auto-filled using the URL address's filename. You can customize the image name at any time.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(16654).Z,width:"5120",height:"1512"})),(0,r.kt)("h3",{id:"upload-images-via-local-file"},"Upload Images via Local File"),(0,r.kt)("p",null,"Currently, qcow2, raw, and ISO images are supported."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Please do not refresh the page until the file upload is finished."))),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(65739).Z,width:"5120",height:"1616"})),(0,r.kt)("h4",{id:"http-413-error-in-rancher-multi-cluster-management"},"HTTP 413 Error in Rancher Multi-Cluster Management"),(0,r.kt)("p",null,"You can upload images from the ",(0,r.kt)("a",{parentName:"p",href:"/zh/v1.2/rancher/virtualization-management#importing-harvester-cluster"},(0,r.kt)("strong",{parentName:"a"},"Multi-Cluster Management"))," screen on the ",(0,r.kt)("strong",{parentName:"p"},"Rancher UI"),". When the status of an image is ",(0,r.kt)("em",{parentName:"p"},"Uploading")," but the progress indicator displays ",(0,r.kt)("em",{parentName:"p"},"0%")," for an extended period, check the HTTP response status code. ",(0,r.kt)("em",{parentName:"p"},"413")," indicates that the size of the request body exceeds the limit."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(52803).Z,width:"1921",height:"791"})),(0,r.kt)("p",null,"The maximum request body size should be specific to the cluster that is hosting Rancher (for example, RKE2 clusters have a default limit of 1 MB but no such limit exists in K3s clusters)."),(0,r.kt)("p",null,"The current workaround is to upload images from the ",(0,r.kt)("strong",{parentName:"p"},"Harvester UI"),". If you choose to upload images from the Rancher UI, you may need to configure related settings on the ingress server (for example, ",(0,r.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#custom-max-body-size"},(0,r.kt)("inlineCode",{parentName:"a"},"proxy-body-size"))," in NGINX)."),(0,r.kt)("p",null,"If Rancher is deployed on an RKE2 cluster, perform the following steps:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Edit the Rancher ingress."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system edit ingress rancher\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Specify a value for ",(0,r.kt)("inlineCode",{parentName:"p"},"nginx.ingress.kubernetes.io/proxy-body-size"),"."),(0,r.kt)("p",{parentName:"li"},"Example:\n",(0,r.kt)("img",{src:a(59688).Z,width:"1905",height:"719"}))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Delete the stuck image, and then restart the upload process."))),(0,r.kt)("h3",{id:"create-images-via-volumes"},"Create Images via Volumes"),(0,r.kt)("p",null,"On the ",(0,r.kt)("strong",{parentName:"p"},"Volumes")," page, click ",(0,r.kt)("strong",{parentName:"p"},"Export Image"),". Enter the image name and select a StorageClass to create an image."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(37998).Z,width:"2538",height:"1164"})),(0,r.kt)("h3",{id:"image-storageclass"},"Image StorageClass"),(0,r.kt)("p",null,"When creating an image, you can select a ",(0,r.kt)("a",{parentName:"p",href:"/zh/v1.2/advanced/storageclass"},"StorageClass")," and use its pre-defined parameters like replicas, node selectors and disk selectors ."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"The image will not use the ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageClass")," selected here directly. It's just a ",(0,r.kt)("inlineCode",{parentName:"p"},"StorageClass")," template."),(0,r.kt)("p",{parentName:"admonition"},"Instead, it will create a special StorageClass under the hood with a prefix name of ",(0,r.kt)("inlineCode",{parentName:"p"},"longhorn-"),". This is automatically done by the Harvester backend, but it will inherit the parameters from the StorageClass you have selected.")),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(70764).Z,width:"2536",height:"896"})),(0,r.kt)("h3",{id:"image-labels"},"Image Labels"),(0,r.kt)("p",null,"You can add labels to the image, which will help identify the OS type more accurately. Also, you can add any custom labels for filtering if needed."),(0,r.kt)("p",null,"If your image name or URL contains any valid information, the UI will automatically recognize the OS type and image category for you. If not, you can also manually specify those corresponding labels on the UI."),(0,r.kt)("p",null,(0,r.kt)("img",{src:a(76223).Z,width:"4382",height:"1498"})))}d.isMDXComponent=!0},76223:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-labels-d742377d68f63e01883436d86f3422e6.png"},70764:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/image-storageclass-04b9f064d14c26ae62e8b9a0a94ccbc9.png"},52803:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img-413-code-b4a9eb417b96524f89c30c340dd4e871.png"},59688:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/img-ingress-client-body-08dae9c4bfd54713df86da980c5206d6.png"},65739:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upload-image-local-4a9a097f0a1cc582797a58411f0940a0.png"},16654:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/upload-image-400a8a7376f481a4347e81d134a80b89.png"},37998:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/export-volume-to-image-1-0281e9ded41ab207e1869b372061aae1.png"}}]);