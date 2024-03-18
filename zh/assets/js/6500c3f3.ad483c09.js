"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[74429],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>m});var n=r(67294);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),p=s(r),u=i,m=p["".concat(l,".").concat(u)]||p[u]||v[u]||a;return r?n.createElement(m,o(o({ref:t},c),{},{components:r})):n.createElement(m,o({ref:t},c))}));function m(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,o=new Array(a);o[0]=u;var d={};for(var l in t)hasOwnProperty.call(t,l)&&(d[l]=t[l]);d.originalType=e,d[p]="string"==typeof e?e:i,o[1]=d;for(var s=2;s<a;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},88403:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>v,frontMatter:()=>a,metadata:()=>d,toc:()=>s});var n=r(87462),i=(r(67294),r(3905));const a={sidebar_position:6,sidebar_label:"Nvidia Driver Toolkit",title:"Nvidia Driver Toolkit"},o=void 0,d={unversionedId:"advanced/addons/nvidiadrivertoolkit",id:"version-v1.3/advanced/addons/nvidiadrivertoolkit",title:"Nvidia Driver Toolkit",description:"Available as of v1.3.0",source:"@site/versioned_docs/version-v1.3/advanced/addons/nvidiadrivertoolkit.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/nvidiadrivertoolkit",permalink:"/zh/v1.3/advanced/addons/nvidiadrivertoolkit",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/advanced/addons/nvidiadrivertoolkit.md",tags:[],version:"v1.3",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Nvidia Driver Toolkit",title:"Nvidia Driver Toolkit"},sidebar:"docs",previous:{title:"Managed DHCP",permalink:"/zh/v1.3/advanced/addons/managed-dhcp"},next:{title:"Single-Node Clusters",permalink:"/zh/v1.3/advanced/singlenodeclusters"}},l={},s=[],c={toc:s},p="wrapper";function v(e){let{components:t,...a}=e;return(0,i.kt)(p,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/advanced/nvidiadrivertoolkit"})),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v1.3.0")),(0,i.kt)("p",null,"nvidia-driver-toolkit is an add-on that allows you to deploy out-of-band NVIDIA GRID KVM drivers to your existing Harvester clusters."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The toolkit only includes the correct Harvester OS image, build utilities, and kernel headers that allow NVIDIA drivers to be compiled and loaded from the container. You must download the NVIDIA KVM drivers using a valid NVIDIA subscription. For guidance on identifying the correct driver for your NVIDIA GPU, see the ",(0,i.kt)("a",{parentName:"p",href:"https://www.nvidia.com/en-au/drivers/vgpu-software-driver/"},"NVIDIA documentation"),".")),(0,i.kt)("p",null,"The Harvester ISO does not include the nvidia-driver-toolkit container image. Because of its size, the image is pulled from Docker Hub by default. If you have an air-gapped environment, you can download and push the image to your private registry. The ",(0,i.kt)("strong",{parentName:"p"},"Image Repository")," and ",(0,i.kt)("strong",{parentName:"p"},"Image Tag")," fields on the ",(0,i.kt)("strong",{parentName:"p"},"nvidia-driver-toolkit")," screen provide information about the image that you must download."),(0,i.kt)("p",null,(0,i.kt)("img",{src:r(58671).Z,width:"2313",height:"509"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Each new Harvester version will be released with the correct nvidia-driver-toolkit image to ensure that all dependencies required to install the NVIDIA vGPU KVM drivers are available in the image.")),(0,i.kt)("p",null,"To enable the addon, users need to perform the following:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Provide the ",(0,i.kt)("inlineCode",{parentName:"li"},"Driver Location"),": which is an http location where nvidia vgpu kvm driver file is located (as shown in the example)"),(0,i.kt)("li",{parentName:"ul"},"update the ",(0,i.kt)("inlineCode",{parentName:"li"},"Image Repository")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Image Tag")," if needed")),(0,i.kt)("p",null,"Once the addon is enabled, a nvidia-driver-toolkit daemonset is deployed to the cluster."),(0,i.kt)("p",null,"On pod startup, the entrypoint script will download the nvidia driver from the speificied ",(0,i.kt)("inlineCode",{parentName:"p"},"Driver Location"),", install the driver and load the kernel drivers."),(0,i.kt)("p",null,"The ",(0,i.kt)("inlineCode",{parentName:"p"},"PCIDevices")," addon can now leverage this addon to manage the lifecycle of the vGPU devices on nodes containing supported GPU ",(0,i.kt)("a",{parentName:"p",href:"/zh/v1.3/advanced/vgpusupport"},"devices"),"."))}v.isMDXComponent=!0},58671:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/nvidia-driver-toolkit-0b8402112136eac0f408667ff01c3df7.png"}}]);