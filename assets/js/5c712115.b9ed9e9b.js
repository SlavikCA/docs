"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[88661],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>u});var n=t(67294);function i(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function r(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function s(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?r(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function o(e,a){if(null==e)return{};var t,n,i=function(e,a){if(null==e)return{};var t,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||(i[t]=e[t]);return i}(e,a);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)t=r[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=n.createContext({}),m=function(e){var a=n.useContext(l),t=a;return e&&(t="function"==typeof e?e(a):s(s({},a),e)),t},p=function(e){var a=m(e.components);return n.createElement(l.Provider,{value:a},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},g=n.forwardRef((function(e,a){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=m(t),g=i,u=c["".concat(l,".").concat(g)]||c[g]||d[g]||r;return t?n.createElement(u,s(s({ref:a},p),{},{components:t})):n.createElement(u,s({ref:a},p))}));function u(e,a){var t=arguments,i=a&&a.mdxType;if("string"==typeof e||i){var r=t.length,s=new Array(r);s[0]=g;var o={};for(var l in a)hasOwnProperty.call(a,l)&&(o[l]=a[l]);o.originalType=e,o[c]="string"==typeof e?e:i,s[1]=o;for(var m=2;m<r;m++)s[m]=t[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},48553:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>m});var n=t(87462),i=(t(67294),t(3905));const r={id:"upload-image",sidebar_position:6,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},s=void 0,o={unversionedId:"upload-image",id:"version-v1.2/upload-image",title:"Upload Images",description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required.",source:"@site/versioned_docs/version-v1.2/upload-image.md",sourceDirName:".",slug:"/upload-image",permalink:"/v1.2/upload-image",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/upload-image.md",tags:[],version:"v1.2",sidebarPosition:6,frontMatter:{id:"upload-image",sidebar_position:6,sidebar_label:"Upload Images",title:"Upload Images",keywords:["Harvester","harvester","Rancher","rancher","Import Images"],description:"To import virtual machine images in the **Images** page, enter a URL that can be accessed from the cluster. The image name will be auto-filled using the URL address's filename. You can always customize it when required."},sidebar:"docs",previous:{title:"Authentication",permalink:"/v1.2/authentication"},next:{title:"Host Management",permalink:"/v1.2/host/"}},l={},m=[{value:"Upload Images via URL",id:"upload-images-via-url",level:3},{value:"Upload Images via Local File",id:"upload-images-via-local-file",level:3},{value:"HTTP 413 Error in Rancher Multi-Cluster Management",id:"http-413-error-in-rancher-multi-cluster-management",level:4},{value:"Create Images via Volumes",id:"create-images-via-volumes",level:3},{value:"Image StorageClass",id:"image-storageclass",level:3},{value:"Image Labels",id:"image-labels",level:3},{value:"Known Issues",id:"known-issues",level:3}],p={toc:m},c="wrapper";function d(e){let{components:a,...r}=e;return(0,i.kt)(c,(0,n.Z)({},p,r,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Currently, there are three ways that are supported to create an image: uploading images via URL, uploading images via local files, and creating images via volumes."),(0,i.kt)("h3",{id:"upload-images-via-url"},"Upload Images via URL"),(0,i.kt)("p",null,"To import virtual machine images in the ",(0,i.kt)("strong",{parentName:"p"},"Images")," page, enter a URL that can be accessed from the cluster. Description and labels are optional."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The image name will be auto-filled using the URL address's filename. You can customize the image name at any time.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(16654).Z,width:"5120",height:"1512"})),(0,i.kt)("h3",{id:"upload-images-via-local-file"},"Upload Images via Local File"),(0,i.kt)("p",null,"Currently, qcow2, raw, and ISO images are supported."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},"Please do not refresh the page until the file upload is finished."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(65739).Z,width:"5120",height:"1616"})),(0,i.kt)("h4",{id:"http-413-error-in-rancher-multi-cluster-management"},"HTTP 413 Error in Rancher Multi-Cluster Management"),(0,i.kt)("p",null,"You can upload images from the ",(0,i.kt)("a",{parentName:"p",href:"/v1.2/rancher/virtualization-management#importing-harvester-cluster"},(0,i.kt)("strong",{parentName:"a"},"Multi-Cluster Management"))," screen on the ",(0,i.kt)("strong",{parentName:"p"},"Rancher UI"),". When the status of an image is ",(0,i.kt)("em",{parentName:"p"},"Uploading")," but the progress indicator displays ",(0,i.kt)("em",{parentName:"p"},"0%")," for an extended period, check the HTTP response status code. ",(0,i.kt)("em",{parentName:"p"},"413")," indicates that the size of the request body exceeds the limit."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(52803).Z,width:"1921",height:"791"})),(0,i.kt)("p",null,"The maximum request body size should be specific to the cluster that is hosting Rancher (for example, RKE2 clusters have a default limit of 1 MB but no such limit exists in K3s clusters)."),(0,i.kt)("p",null,"The current workaround is to upload images from the ",(0,i.kt)("strong",{parentName:"p"},"Harvester UI"),". If you choose to upload images from the Rancher UI, you may need to configure related settings on the ingress server (for example, ",(0,i.kt)("a",{parentName:"p",href:"https://kubernetes.github.io/ingress-nginx/user-guide/nginx-configuration/annotations/#custom-max-body-size"},(0,i.kt)("inlineCode",{parentName:"a"},"proxy-body-size"))," in NGINX)."),(0,i.kt)("p",null,"If Rancher is deployed on an RKE2 cluster, perform the following steps:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Edit the Rancher ingress."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ kubectl -n cattle-system edit ingress rancher\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Specify a value for ",(0,i.kt)("inlineCode",{parentName:"p"},"nginx.ingress.kubernetes.io/proxy-body-size"),"."),(0,i.kt)("p",{parentName:"li"},"Example:\n",(0,i.kt)("img",{src:t(59688).Z,width:"1905",height:"719"}))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the stuck image, and then restart the upload process."))),(0,i.kt)("h3",{id:"create-images-via-volumes"},"Create Images via Volumes"),(0,i.kt)("p",null,"On the ",(0,i.kt)("strong",{parentName:"p"},"Volumes")," page, click ",(0,i.kt)("strong",{parentName:"p"},"Export Image"),". Enter the image name and select a StorageClass to create an image."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(37998).Z,width:"2538",height:"1164"})),(0,i.kt)("h3",{id:"image-storageclass"},"Image StorageClass"),(0,i.kt)("p",null,"When creating an image, you can select a ",(0,i.kt)("a",{parentName:"p",href:"/v1.2/advanced/storageclass"},"StorageClass")," and use its pre-defined parameters like replicas, node selectors and disk selectors ."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The image will not use the ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," selected here directly. It's just a ",(0,i.kt)("inlineCode",{parentName:"p"},"StorageClass")," template."),(0,i.kt)("p",{parentName:"admonition"},"Instead, it will create a special StorageClass under the hood with a prefix name of ",(0,i.kt)("inlineCode",{parentName:"p"},"longhorn-"),". This is automatically done by the Harvester backend, but it will inherit the parameters from the StorageClass you have selected.")),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(70764).Z,width:"2536",height:"896"})),(0,i.kt)("h3",{id:"image-labels"},"Image Labels"),(0,i.kt)("p",null,"You can add labels to the image, which will help identify the OS type more accurately. Also, you can add any custom labels for filtering if needed."),(0,i.kt)("p",null,"If your image name or URL contains any valid information, the UI will automatically recognize the OS type and image category for you. If not, you can also manually specify those corresponding labels on the UI."),(0,i.kt)("p",null,(0,i.kt)("img",{src:t(76223).Z,width:"4382",height:"1498"})),(0,i.kt)("h3",{id:"known-issues"},"Known Issues"),(0,i.kt)("p",null,"Attempts to download images while ",(0,i.kt)("a",{parentName:"p",href:"/v1.2/advanced/storagenetwork"},"storage network settings")," are being configured will fail. Use the following workaround to download images without triggering an HTTP 502 error:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Obtain the name and namespace of the ",(0,i.kt)("strong",{parentName:"p"},"image"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ kubectl get virtualmachineimages.harvesterhci.io -A -o json | jq -r \'.items[] | select(.spec.displayName == "<image name from Harvester GUI>") | .metadata.namespace + "/" + .metadata.name\'\n')),(0,i.kt)("p",{parentName:"li"},"Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ kubectl get virtualmachineimages.harvesterhci.io -A -o json | jq -r \'.items[] | select(.spec.displayName == "jammy-server-cloudimg-amd64.img") | .metadata.namespace + "/" + .metadata.name\'\ndefault/image-h6dwf\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Obtain the name of the related ",(0,i.kt)("strong",{parentName:"p"},"backing image"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ kubectl get backingimage -A -o json | jq -r \'.items[] | select(.metadata.annotations["harvesterhci.io/imageId"] == "<image namespace>/<image name>") | .metadata.name\'\n')),(0,i.kt)("p",{parentName:"li"},"Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ kubectl get backingimage -A -o json | jq -r \'.items[] | select(.metadata.annotations["harvesterhci.io/imageId"] == "default/image-h6dwf") | .metadata.name\'\ndefault-image-h6dwf\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Obtain the image file path from the ",(0,i.kt)("strong",{parentName:"p"},"backing image manager"),"."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ kubectl get backingimagemanagers.longhorn.io -A -o json | jq -r '.items[] | select(.spec.backingImages.\"<backing image name>\" != null) | .spec'\n")),(0,i.kt)("p",{parentName:"li"},"Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},'$ kubectl get backingimagemanagers.longhorn.io -A -o json | jq -r \'.items[] | select(.spec.backingImages."default-image-h6dwf" != null) | .spec\'\n{\n  "backingImages": {\n    "default-image-dp85d": "df08a47d",\n    "default-image-h6dwf": "dda82f44"\n  },\n  "diskPath": "/var/lib/harvester/defaultdisk",\n  "diskUUID": "ac97e1b6-7a2e-4125-9589-2247ea8fa93f",\n  "image": "longhornio/backing-image-manager:v1.6.0",\n  "nodeID": "img-encrypter"\n}\n'))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Connect to the corresponding node and then check if the file path matches."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ ls <diskPath>/backing-images/<backing image name>-<backimg image UUID>\n")),(0,i.kt)("p",{parentName:"li"},"Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ ls /var/lib/harvester/defaultdisk/backing-images/default-image-h6dwf-dda82f44\nbacking  backing.cfg\n"))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Download the image."),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ scp <diskPath>/backing-images/<backing image name>-<backimg image UUID>/backing <destination host>\n")),(0,i.kt)("p",{parentName:"li"},"Example:"),(0,i.kt)("pre",{parentName:"li"},(0,i.kt)("code",{parentName:"pre"},"$ scp /var/lib/harvester/defaultdisk/backing-images/default-image-h6dwf-dda82f44/backing rancher@host:~/iso\n")))),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Related issue:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4807"},"[BUG] Download backing image failed with HTTP 502 error if Storage Network configured"))))))}d.isMDXComponent=!0},76223:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/image-labels-d742377d68f63e01883436d86f3422e6.png"},70764:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/image-storageclass-04b9f064d14c26ae62e8b9a0a94ccbc9.png"},52803:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/img-413-code-b4a9eb417b96524f89c30c340dd4e871.png"},59688:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/img-ingress-client-body-08dae9c4bfd54713df86da980c5206d6.png"},65739:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/upload-image-local-4a9a097f0a1cc582797a58411f0940a0.png"},16654:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/upload-image-400a8a7376f481a4347e81d134a80b89.png"},37998:(e,a,t)=>{t.d(a,{Z:()=>n});const n=t.p+"assets/images/export-volume-to-image-1-0281e9ded41ab207e1869b372061aae1.png"}}]);