"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[889],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>u});var i=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,i,a=function(e,t){if(null==e)return{};var n,i,a={},s=Object.keys(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)n=s[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=i.createContext({}),d=function(e){var t=i.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},l=function(e){var t=d(e.components);return i.createElement(o.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.createElement(i.Fragment,{},t)}},v=i.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=d(n),v=a,u=p["".concat(o,".").concat(v)]||p[v]||h[v]||s;return n?i.createElement(u,r(r({ref:t},l),{},{components:n})):i.createElement(u,r({ref:t},l))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,r=new Array(s);r[0]=v;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[p]="string"==typeof e?e:a,r[1]=c;for(var d=2;d<s;d++)r[d]=n[d];return i.createElement.apply(null,r)}return i.createElement.apply(null,n)}v.displayName="MDXCreateElement"},1176:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var i=n(87462),a=(n(67294),n(3905));const s={sidebar_position:2,sidebar_label:"PCI Devices",title:"PCI Devices"},r=void 0,c={unversionedId:"advanced/addons/pcidevices",id:"advanced/addons/pcidevices",title:"PCI Devices",description:"Available as of v1.1.0",source:"@site/docs/advanced/addons/pcidevices.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/pcidevices",permalink:"/v1.3/advanced/addons/pcidevices",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/addons/pcidevices.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"PCI Devices",title:"PCI Devices"},sidebar:"docs",previous:{title:"Addons",permalink:"/v1.3/advanced/addons"},next:{title:"VM Import",permalink:"/v1.3/advanced/addons/vmimport"}},o={},d=[{value:"Enabling Passthrough on a PCI Device",id:"enabling-passthrough-on-a-pci-device",level:2},{value:"Attaching PCI Devices to a VM",id:"attaching-pci-devices-to-a-vm",level:2},{value:"Using a passed-through PCI Device inside the VM",id:"using-a-passed-through-pci-device-inside-the-vm",level:2},{value:"Installing drivers for your PCI device inside the VM",id:"installing-drivers-for-your-pci-device-inside-the-vm",level:2},{value:"SRIOV Network Devices",id:"sriov-network-devices",level:2}],l={toc:d},p="wrapper";function h(e){let{components:t,...s}=e;return(0,a.kt)(p,(0,i.Z)({},l,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/pcidevices"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,a.kt)("p",null,"A ",(0,a.kt)("inlineCode",{parentName:"p"},"PCIDevice")," in Harvester represents a host device with a PCI address.\nThe devices can be passed through the hypervisor to a VM by creating a ",(0,a.kt)("inlineCode",{parentName:"p"},"PCIDeviceClaim")," resource,\nor by using the UI to enable passthrough. Passing a device through the hypervisor means that\nthe VM can directly access the device, and effectively owns the device. A VM can even install\nits own drivers for that device."),(0,a.kt)("p",null,"This is accomplished by using the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon."),(0,a.kt)("p",null,"To use the PCI devices feature, users need to enable the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon first."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(97087).Z,width:"1039",height:"577"})),(0,a.kt)("p",null,"Once the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon is deployed successfully, it can take a few minutes for it to scan and the PCIDevice CRDs to become available.\n",(0,a.kt)("img",{src:n(23208).Z,width:"1854",height:"650"})),(0,a.kt)("h2",{id:"enabling-passthrough-on-a-pci-device"},"Enabling Passthrough on a PCI Device"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Now go to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced -> PCI Devices")," page:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(34990).Z,width:"1440",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Search for your device by vendor name (e.g. NVIDIA, Intel, etc.) or device name."),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(34807).Z,width:"1440",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Select the devices you want to enable for passthrough:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(94036).Z,width:"1440",height:"810"}))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Then click ",(0,a.kt)("strong",{parentName:"p"},"Enable Passthrough")," and read the warning message. If you still want to enable these devices, click ",(0,a.kt)("strong",{parentName:"p"},"Enable")," and wait for all devices to be ",(0,a.kt)("inlineCode",{parentName:"p"},"Enabled"),"."),(0,a.kt)("admonition",{parentName:"li",type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"Please do not use ",(0,a.kt)("inlineCode",{parentName:"p"},"host-owned")," PCI devices (e.g., management and VLAN NICs). Incorrect device allocation may cause damage to your cluster, including node failure.")),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(99054).Z,width:"1440",height:"810"})),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{src:n(24873).Z,width:"1440",height:"810"})))),(0,a.kt)("h2",{id:"attaching-pci-devices-to-a-vm"},"Attaching PCI Devices to a VM"),(0,a.kt)("p",null,"After enabling these PCI devices, you can navigate to the ",(0,a.kt)("strong",{parentName:"p"},"Virtual Machines")," page and select ",(0,a.kt)("strong",{parentName:"p"},"Edit Config")," to pass these devices."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(32081).Z,width:"1440",height:"810"})),(0,a.kt)("p",null,"Select ",(0,a.kt)("strong",{parentName:"p"},"PCI Devices")," and use the ",(0,a.kt)("strong",{parentName:"p"},"Available PCI Devices")," drop-down. Select the devices you want to attach from the list displayed and then click ",(0,a.kt)("strong",{parentName:"p"},"Save"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(2148).Z,width:"1440",height:"810"})),(0,a.kt)("h2",{id:"using-a-passed-through-pci-device-inside-the-vm"},"Using a passed-through PCI Device inside the VM"),(0,a.kt)("p",null,"Boot the VM up, and run ",(0,a.kt)("inlineCode",{parentName:"p"},"lspci")," inside the VM, the attached PCI devices will show up, although the PCI address in the VM won't necessarily match the PCI address in the host. "),(0,a.kt)("h2",{id:"installing-drivers-for-your-pci-device-inside-the-vm"},"Installing drivers for your PCI device inside the VM"),(0,a.kt)("p",null,"This is just like installing drivers in the host. The PCI passthrough feature will bind the host device to the ",(0,a.kt)("inlineCode",{parentName:"p"},"vfio-pci")," driver, which gives VMs the ability to use their own drivers. ",(0,a.kt)("a",{parentName:"p",href:"https://tobilehman.com/posts/suse-harvester-pci/#toc"},"Here is a screenshot")," of NVIDIA drivers being installed in a VM. It includes a CUDA example that proves that the device drivers work."),(0,a.kt)("h2",{id:"sriov-network-devices"},"SRIOV Network Devices"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(32443).Z,width:"302",height:"318"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," addon can now scan network interfaces on the underlying hosts and check if they support SRIOV Virtual Functions (VFs). If a valid device is found, ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," will generate a new ",(0,a.kt)("inlineCode",{parentName:"p"},"SRIOVNetworkDevice")," object."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(70420).Z,width:"2313",height:"357"})),(0,a.kt)("p",null,"To create VFs on a SriovNetworkDevice, you can click ",(0,a.kt)("strong",{parentName:"p"},"\u22ee > Enable")," and then define the ",(0,a.kt)("strong",{parentName:"p"},"Number of Virtual Functions"),".\n",(0,a.kt)("img",{src:n(70200).Z,width:"614",height:"309"})),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(74301).Z,width:"668",height:"289"})),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," will define the VFs on the network interface and report the new PCI device status for the newly created VFs."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(42106).Z,width:"2319",height:"152"})),(0,a.kt)("p",null,"On the next re-scan, the ",(0,a.kt)("inlineCode",{parentName:"p"},"pcidevices-controller")," will create the PCIDevices for VFs. This can take up to 1 minute."),(0,a.kt)("p",null,"You can now navigate to the ",(0,a.kt)("strong",{parentName:"p"},"PCI Devices")," page to view the new devices."),(0,a.kt)("p",null,"We have also introduced a new filter to help you filter PCI devices by the underlying network interface."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(55160).Z,width:"2326",height:"228"})),(0,a.kt)("p",null,"The newly created PCI device can be passed through to virtual machines like any other PCI device.\n",(0,a.kt)("img",{src:n(91772).Z,width:"2311",height:"442"})))}h.isMDXComponent=!0},23208:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/PcideviceEnabled-0360b54035ff09b417de7c295741b17d.png"},70200:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/SriovNetworkDeviceEnable-da813b9d6089e04a7db22e8e854f01f0.png"},55160:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/SriovNetworkDevicesFilter-64ec6f52634a226ff04c54d8d4dccd2e.png"},91772:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/SriovNetworkDevicesFilterResult-59c6772dc178318eb91ab186f558ecd5.png"},32443:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/SriovNetworkDevicesLink-fe6f72a776c8716d3500963f4def615c.png"},70420:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/SriovNetworkDevicesList-07aa1c1929ed631a33a44fda291a5d63.png"},42106:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/SriovNetworkDevicesVFStatus-056a48920d22af72bff4217c434bf4e6.png"},74301:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/SriovNetworkVFDefinition-df67600dbe4ac7119ff1099b631c130c.png"},34990:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/advanced-pcidevices-index-10becdf0d781a4e708413d422356740e.png"},24873:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/enable-pcidevices-done-6abc17f90036b1314c0085cd7ebe4808.png"},99054:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/enable-pcidevices-inprogress-c687c20689e9d90b585c892b4ab731c2.png"},34807:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/search-pcidevices-e72c0e5794891383d5de58edea8f58b0.png"},94036:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/select-pcidevices-9f4f0947bfb5f60b38f542f98f08575b.png"},2148:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/vm-pcidevices-attach-8909167894055bfbd363b32fcad812e1.png"},32081:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/vm-pcidevices-edit-config-fce9da60aa378d6213ba7a8352acfc16.png"},97087:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/EnableAddon-42d0feaeb5420d41b9e5ed17a5ff28c1.png"}}]);