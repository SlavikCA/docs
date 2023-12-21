"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8526],{3905:(e,t,i)=>{i.d(t,{Zo:()=>l,kt:()=>u});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function o(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var c=n.createContext({}),d=function(e){var t=n.useContext(c),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},l=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,c=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=d(i),v=a,u=p["".concat(c,".").concat(v)]||p[v]||h[v]||r;return i?n.createElement(u,s(s({ref:t},l),{},{components:i})):n.createElement(u,s({ref:t},l))}));function u(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=v;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[p]="string"==typeof e?e:a,s[1]=o;for(var d=2;d<r;d++)s[d]=i[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}v.displayName="MDXCreateElement"},32374:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>r,metadata:()=>o,toc:()=>d});var n=i(87462),a=(i(67294),i(3905));const r={sidebar_position:6,sidebar_label:"PCI Devices",title:"PCI Devices (Experimental)"},s=void 0,o={unversionedId:"advanced/pcidevices",id:"version-v1.1/advanced/pcidevices",title:"PCI Devices (Experimental)",description:"Available as of v1.1.0",source:"@site/versioned_docs/version-v1.1/advanced/pcidevices.md",sourceDirName:"advanced",slug:"/advanced/pcidevices",permalink:"/v1.1/advanced/pcidevices",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/advanced/pcidevices.md",tags:[],version:"v1.1",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"PCI Devices",title:"PCI Devices (Experimental)"},sidebar:"tutorialSidebar",previous:{title:"VM Import",permalink:"/v1.1/advanced/vmimport"},next:{title:"Rancher Integration",permalink:"/v1.1/rancher/index"}},c={},d=[{value:"Enabling Passthrough on a PCI Device",id:"enabling-passthrough-on-a-pci-device",level:2},{value:"Attaching PCI Devices to a VM",id:"attaching-pci-devices-to-a-vm",level:2},{value:"Using a passed-through PCI Device inside the VM",id:"using-a-passed-through-pci-device-inside-the-vm",level:2},{value:"Installing drivers for your PCI device inside the VM",id:"installing-drivers-for-your-pci-device-inside-the-vm",level:2},{value:"Known Issues",id:"known-issues",level:2}],l={toc:d},p="wrapper";function h(e){let{components:t,...r}=e;return(0,a.kt)(p,(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/pcidevices"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"PCIDevice")," in Harvester represents a host device with a PCI address.\nThe devices can be passed through the hypervisor to a VM by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"PCIDeviceClaim")," resource,\nor by using the UI to enable passthrough. Passing a device through the hypervisor means that\nthe VM can directly access the device, and effectively owns the device. A VM can even install\nits own drivers for that device."),(0,a.kt)("p",null,"This is accomplished by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon."),(0,a.kt)("p",null,"To use the PCI devices feature, users need to enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon first."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(93400).Z,width:"1572",height:"596"})),(0,a.kt)("h2",{id:"enabling-passthrough-on-a-pci-device"},"Enabling Passthrough on a PCI Device"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced -> PCI Devices")," page:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(25199).Z,width:"1440",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Search for your device by vendor name (e.g. NVIDIA, Intel, etc.) or device name."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(9902).Z,width:"1440",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the devices you want to enable for passthrough:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(80007).Z,width:"1440",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then click ",(0,a.kt)("strong",{parentName:"p"},"Enable Passthrough")," and read the warning message. If you still want to enable these devices, click ",(0,a.kt)("strong",{parentName:"p"},"Enable")," and wait for all devices to be ",(0,a.kt)("inlineCode",{parentName:"p"},"Enabled"),"."),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please do not use ",(0,a.kt)("inlineCode",{parentName:"p"},"host-owned")," PCI devices (e.g., management and VLAN NICs). Incorrect device allocation may cause damage to your cluster, including node failure.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(60684).Z,width:"1440",height:"810"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:i(90003).Z,width:"1440",height:"810"})))),(0,a.kt)("h2",{id:"attaching-pci-devices-to-a-vm"},"Attaching PCI Devices to a VM"),(0,a.kt)("p",null,"After enabling these PCI devices, you can navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Virtual Machines")," page and select ",(0,a.kt)("strong",{parentName:"p"},"Edit Config")," to pass these devices."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(22659).Z,width:"1440",height:"810"})),(0,a.kt)("p",null,"Select ",(0,a.kt)("strong",{parentName:"p"},"PCI Devices")," and use the ",(0,a.kt)("strong",{parentName:"p"},"Available PCI Devices")," drop-down. Select the devices you want to attach from the list displayed and then click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:i(15465).Z,width:"1440",height:"810"})),(0,a.kt)("h2",{id:"using-a-passed-through-pci-device-inside-the-vm"},"Using a passed-through PCI Device inside the VM"),(0,a.kt)("p",null,"Boot the VM up, and run ",(0,a.kt)("inlineCode",{parentName:"p"},"lspci")," inside the VM, the attached PCI devices will show up, although the PCI address in the VM won't necessarily match the PCI address in the host. "),(0,a.kt)("h2",{id:"installing-drivers-for-your-pci-device-inside-the-vm"},"Installing drivers for your PCI device inside the VM"),(0,a.kt)("p",null,"This is just like installing drivers in the host. The PCI passthrough feature will bind the host device to the ",(0,a.kt)("inlineCode",{parentName:"p"},"vfio-pci")," driver, which gives VMs the ability to use their own drivers. ",(0,a.kt)("a",{parentName:"p",href:"https://tobilehman.com/posts/suse-harvester-pci/#toc"},"Here is a screenshot")," of NVIDIA drivers being installed in a VM. It includes a CUDA example that proves that the device drivers work."),(0,a.kt)("h2",{id:"known-issues"},"Known Issues"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"The 1.1.0 version of PCI passthrough matches VMs to devices using ",(0,a.kt)("inlineCode",{parentName:"li"},"vendorId:deviceId"),". This means that if there is more than one device with the same ",(0,a.kt)("inlineCode",{parentName:"li"},"vendorId:deviceId")," pair, then KubeVirt will choose which device to allocate to a VM in a way that is essentially random. This will be addressed in 1.1.2 with the new deviceplugin implementation.")))}h.isMDXComponent=!0},25199:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/advanced-pcidevices-index-10becdf0d781a4e708413d422356740e.png"},90003:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/enable-pcidevices-done-6abc17f90036b1314c0085cd7ebe4808.png"},60684:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/enable-pcidevices-inprogress-c687c20689e9d90b585c892b4ab731c2.png"},9902:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/search-pcidevices-e72c0e5794891383d5de58edea8f58b0.png"},80007:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/select-pcidevices-9f4f0947bfb5f60b38f542f98f08575b.png"},15465:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/vm-pcidevices-attach-8909167894055bfbd363b32fcad812e1.png"},22659:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/vm-pcidevices-edit-config-fce9da60aa378d6213ba7a8352acfc16.png"},93400:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/EnableAddon-2d1d07ec9a24c2f478806943fb79214b.png"}}]);