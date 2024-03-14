"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[16899],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var d=a.createContext({}),s=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},m=function(e){var t=s(e.components);return a.createElement(d.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,d=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),p=s(n),k=i,h=p["".concat(d,".").concat(k)]||p[k]||c[k]||o;return n?a.createElement(h,r(r({ref:t},m),{},{components:n})):a.createElement(h,r({ref:t},m))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=k;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l[p]="string"==typeof e?e:i,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},64641:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var a=n(87462),i=(n(67294),n(3905));const o={sidebar_position:2,sidebar_label:"Create a Windows Virtual Machine",title:"Create a Windows Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Windows","windows","Virtual Machine","virtual machine","Create a Windows VM"],description:"Create one or more Windows virtual machines from the Virtual Machines page."},r=void 0,l={unversionedId:"vm/create-windows-vm",id:"vm/create-windows-vm",title:"Create a Windows Virtual Machine",description:"Create one or more Windows virtual machines from the Virtual Machines page.",source:"@site/docs/vm/create-windows-vm.md",sourceDirName:"vm",slug:"/vm/create-windows-vm",permalink:"/v1.3/vm/create-windows-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/create-windows-vm.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Create a Windows Virtual Machine",title:"Create a Windows Virtual Machine",keywords:["Harvester","harvester","Rancher","rancher","Windows","windows","Virtual Machine","virtual machine","Create a Windows VM"],description:"Create one or more Windows virtual machines from the Virtual Machines page."},sidebar:"docs",previous:{title:"Create a Virtual Machine",permalink:"/v1.3/vm/index"},next:{title:"Edit a Virtual Machine",permalink:"/v1.3/vm/edit-vm"}},d={},s=[{value:"How to Create a Windows VM",id:"how-to-create-a-windows-vm",level:2},{value:"Header Section",id:"header-section",level:3},{value:"Basics Tab",id:"basics-tab",level:3},{value:"Volumes Tab",id:"volumes-tab",level:3},{value:"Networks Tab",id:"networks-tab",level:3},{value:"Node Scheduling Tab",id:"node-scheduling-tab",level:3},{value:"Advanced Options Tab",id:"advanced-options-tab",level:3},{value:"Footer Section",id:"footer-section",level:3},{value:"Installation of Windows",id:"installation-of-windows",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"Windows ISO unable to boot when using EFI mode",id:"windows-iso-unable-to-boot-when-using-efi-mode",level:3},{value:"VM crashes when reserved memory not enough",id:"vm-crashes-when-reserved-memory-not-enough",level:3},{value:"BSoD (Blue Screen of Death) at first boot time of Windows",id:"bsod-blue-screen-of-death-at-first-boot-time-of-windows",level:3}],m={toc:s},p="wrapper";function c(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,a.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/create-windows-vm"})),(0,i.kt)("p",null,"Create one or more virtual machines from the ",(0,i.kt)("strong",{parentName:"p"},"Virtual Machines")," page."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For creating Linux virtual machines, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/v1.3/vm/index"},"this page"),".")),(0,i.kt)("h2",{id:"how-to-create-a-windows-vm"},"How to Create a Windows VM"),(0,i.kt)("h3",{id:"header-section"},"Header Section"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create a single VM instance or multiple VM instances."),(0,i.kt)("li",{parentName:"ol"},"Set the VM name."),(0,i.kt)("li",{parentName:"ol"},"(Optional) Provide a description for the VM."),(0,i.kt)("li",{parentName:"ol"},"(Optional) Select the VM template ",(0,i.kt)("inlineCode",{parentName:"li"},"windows-iso-image-base-template"),". This template will add a volume with the ",(0,i.kt)("inlineCode",{parentName:"li"},"virtio")," drivers for Windows.")),(0,i.kt)("h3",{id:"basics-tab"},"Basics Tab"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Configure the number of ",(0,i.kt)("inlineCode",{parentName:"li"},"CPU")," cores assigned to the VM."),(0,i.kt)("li",{parentName:"ol"},"Configure the amount of ",(0,i.kt)("inlineCode",{parentName:"li"},"Memory")," assigned to the VM.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-windows-vm",src:n(5867).Z,width:"1920",height:"1080"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"As mentioned above, it is recommended that you use the Windows VM template. The ",(0,i.kt)("inlineCode",{parentName:"p"},"Volumes")," section will describe the options which the Windows VM template created automatically.")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"The ",(0,i.kt)("inlineCode",{parentName:"p"},"bootOrder")," values need to be set with the installation image first. If you change it, your VM might not boot into the installation disk.")),(0,i.kt)("h3",{id:"volumes-tab"},"Volumes Tab"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"first volume")," is an ",(0,i.kt)("inlineCode",{parentName:"li"},"Image Volume")," with the following values: ",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"cdrom-disk")," is set by default. You can keep it or change it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Type"),": Select ",(0,i.kt)("inlineCode",{parentName:"li"},"cd-rom"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Image"),": Select the Windows image to be installed. See ",(0,i.kt)("a",{parentName:"li",href:"/v1.3/upload-image"},"Upload Images")," for the full description on how to create new images."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Size"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"20")," is set by default. You can change it if your image has a bigger size."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Bus"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"SATA")," is set by default. It's recommended you don't change it."))),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"second volume")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"Volume")," with the following values:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"rootdisk")," is set by default. You can keep it or change it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Type"),": Select ",(0,i.kt)("inlineCode",{parentName:"li"},"disk"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"StorageClass"),": You can use the default StorageClass ",(0,i.kt)("inlineCode",{parentName:"li"},"harvester-longhorn")," or specify a custom one."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Size"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"32")," is set by default. See the disk space requirements for ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows-server/get-started/hardware-requirements#storage-controller-and-disk-space-requirements"},"Windows Server")," and ",(0,i.kt)("a",{parentName:"li",href:"https://docs.microsoft.com/en-us/windows/whats-new/windows-11-requirements#hardware-requirements"},"Windows 11")," before changing this value."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Bus"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"VirtIO")," is set by default. You can keep it or change it to the other available options, ",(0,i.kt)("inlineCode",{parentName:"li"},"SATA")," or ",(0,i.kt)("inlineCode",{parentName:"li"},"SCSI"),"."))),(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"third volume")," is a ",(0,i.kt)("inlineCode",{parentName:"li"},"Container")," with the following values:",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"virtio-container-disk")," is set by default. You can keep it or change it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Type"),": Select ",(0,i.kt)("inlineCode",{parentName:"li"},"cd-rom"),"."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Docker Image"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"registry.suse.com/suse/vmdp/vmdp:2.5.4.2")," is set by default. We recommend not changing this value."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Bus"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"SATA")," is set by default. We recommend not changing this value."))),(0,i.kt)("li",{parentName:"ol"},"You can add additional disks using the buttons ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Volume"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Existing Volume"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Add VM Image"),", or ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Container"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-windows-vm-volumes",src:n(14602).Z,width:"1920",height:"1080"})),(0,i.kt)("h3",{id:"networks-tab"},"Networks Tab"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"The ",(0,i.kt)("strong",{parentName:"li"},"Management Network")," is added by default with the following values: ",(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Name"),":  The value ",(0,i.kt)("inlineCode",{parentName:"li"},"default")," is set by default. You can keep it or change it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Model"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"e1000")," is set by default. You can keep it or change it to the other available options from the dropdown."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Network"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"management Network")," is set by default. You can't change this option if no other network has been created. See ",(0,i.kt)("a",{parentName:"li",href:"/v1.3/networking/harvester-network"},"Harvester Network")," for the full description on how to create new networks."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Type"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"masquerade")," is set by default. You can keep it or change it to the other available option, ",(0,i.kt)("inlineCode",{parentName:"li"},"bridge"),"."))),(0,i.kt)("li",{parentName:"ol"},"You can add additional networks by clicking  ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Network"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-windows-vm-networks",src:n(33766).Z,width:"1920",height:"1080"})),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Changing the ",(0,i.kt)("inlineCode",{parentName:"p"},"Node Scheduling")," settings can impact Harvester features, such as disabling ",(0,i.kt)("inlineCode",{parentName:"p"},"Live migration"),".")),(0,i.kt)("h3",{id:"node-scheduling-tab"},"Node Scheduling Tab"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Node Scheduling")," is set to ",(0,i.kt)("inlineCode",{parentName:"li"},"Run VM on any available node")," by default. You can keep it or change it to the other available options from the dropdown.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-windows-vm-scheduling",src:n(16765).Z,width:"1920",height:"1080"})),(0,i.kt)("h3",{id:"advanced-options-tab"},"Advanced Options Tab"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"OS Type"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"Windows")," is set by default. It's recommended you don't change it."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("inlineCode",{parentName:"li"},"Machine Type"),": The value ",(0,i.kt)("inlineCode",{parentName:"li"},"None")," is set by default. It's recommended you don't change it. See the ",(0,i.kt)("a",{parentName:"li",href:"https://kubevirt.io/user-guide/virtual_machines/virtual_hardware/#machine-type"},"KubeVirt Machine Type")," documentation before you change this value."),(0,i.kt)("li",{parentName:"ol"},"(Optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"Hostname"),": Set the VM hostname."),(0,i.kt)("li",{parentName:"ol"},"(Optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"Cloud Config"),": Both ",(0,i.kt)("inlineCode",{parentName:"li"},"User Data")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Network Data")," values are set with default values. Currently, these configurations are not applied to Windows-based VMs."),(0,i.kt)("li",{parentName:"ol"},"(Optional) ",(0,i.kt)("inlineCode",{parentName:"li"},"Enable TPM"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Booting in EFI mode"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"Secure Boot"),": Both the TPM 2.0 device and UEFI firmware with Secure Boot are hard requirements for Windows 11.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Currently, only non-persistent vTPMs are supported, and their state is erased after each VM shutdown. Therefore, ",(0,i.kt)("a",{parentName:"p",href:"https://learn.microsoft.com/en-us/windows/security/information-protection/bitlocker/bitlocker-overview"},"Bitlocker")," should not be enabled.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"create-windows-vm-advanced",src:n(14895).Z,width:"2553",height:"1064"})),(0,i.kt)("h3",{id:"footer-section"},"Footer Section"),(0,i.kt)("p",null,"Once all the settings are in place, click on ",(0,i.kt)("inlineCode",{parentName:"p"},"Create")," to create the VM."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you need to add advanced settings, you can edit the VM configuration directly by clicking on ",(0,i.kt)("inlineCode",{parentName:"p"},"Edit as YAML"),".\nAnd if you want to cancel all changes made, click ",(0,i.kt)("inlineCode",{parentName:"p"},"Cancel"),".")),(0,i.kt)("h2",{id:"installation-of-windows"},"Installation of Windows"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the VM you just created, and click ",(0,i.kt)("inlineCode",{parentName:"p"},"Start")," to boot up the VM.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Boot into the installer, and follow the instructions given by the installer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(Optional) If you are using ",(0,i.kt)("inlineCode",{parentName:"p"},"virtio")," based volumes, you will need to load the specific driver to allow the installer to detect them. If you're using VM template ",(0,i.kt)("inlineCode",{parentName:"p"},"windows-iso-image-base-template"),", the instruction is as follows:"),(0,i.kt)("ol",{parentName:"li"},(0,i.kt)("li",{parentName:"ol"},"Click on ",(0,i.kt)("inlineCode",{parentName:"li"},"Load driver"),", and then click ",(0,i.kt)("inlineCode",{parentName:"li"},"Browse")," on the dialog box, and find a CD-ROM drive with a ",(0,i.kt)("inlineCode",{parentName:"li"},"VMDP-WIN")," prefix. Next, find the driver directory according to the Windows version you're installing; for example, Windows Server 2012r2 should expand ",(0,i.kt)("inlineCode",{parentName:"li"},"win8.1-2012r2")," and choose the ",(0,i.kt)("inlineCode",{parentName:"li"},"pvvx")," directory inside.\n",(0,i.kt)("img",{alt:"find-virtio-driver-directory",src:n(44098).Z,width:"477",height:"384"})),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"OK")," to allow the installer to scan this directory for drivers, choose ",(0,i.kt)("inlineCode",{parentName:"li"},"SUSE Block Driver for Windows"),", and click ",(0,i.kt)("inlineCode",{parentName:"li"},"Next")," to load the driver.\n",(0,i.kt)("img",{alt:"select-virtio-block-driver",src:n(38846).Z,width:"656",height:"498"})),(0,i.kt)("li",{parentName:"ol"},"Wait for the installer to load up the driver. If you choose the correct driver version the ",(0,i.kt)("inlineCode",{parentName:"li"},"virtio")," volumes will be detected once the driver is loaded.\n",(0,i.kt)("img",{alt:"installer-found-virtio-drive",src:n(43726).Z,width:"641",height:"485"})))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"(Optional) If you are using other ",(0,i.kt)("inlineCode",{parentName:"p"},"virtio")," based hardware like network adapter, you will need to install those drivers manually after completing the installation. To install drivers, open the VMDP driver disk, and use the installer based on your platform."))),(0,i.kt)("p",null,"The support matrix of VMDP driver pack for Windows are as follows (assume the VMDP CD-ROM drive path is E):"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"Version"),(0,i.kt)("th",{parentName:"tr",align:"center"},"Supported"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Driver path"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows 7"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2008"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2008r2"),(0,i.kt)("td",{parentName:"tr",align:"center"},"No"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"N/A"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows 8 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win8-2012\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2012 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win8-2012\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows 8.1 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win8.1-2012r2\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2012r2 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win8.1-2012r2\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows 10 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win10-server\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2016 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win10-server\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2019 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win10-server\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows 11 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win10-2004\\x86(x64)\\pvvx"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Windows Server 2022 x86(x64)"),(0,i.kt)("td",{parentName:"tr",align:"center"},"Yes"),(0,i.kt)("td",{parentName:"tr",align:"left"},(0,i.kt)("inlineCode",{parentName:"td"},"E:\\win10-2004\\x86(x64)\\pvvx"))))),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you didn't use the ",(0,i.kt)("inlineCode",{parentName:"p"},"windows-iso-image-base-template")," template, and you still need ",(0,i.kt)("inlineCode",{parentName:"p"},"virtio")," devices, please make sure to add your custom Windows virtio driver to allow it to detect the hardware correctly.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"For full instructions on how to install the VMDP guest driver and tools see the documentation at ",(0,i.kt)("a",{parentName:"p",href:"https://documentation.suse.com/sle-vmdp/2.5/html/vmdp/index.html"},"https://documentation.suse.com/sle-vmdp/2.5/html/vmdp/index.html"))),(0,i.kt)("h2",{id:"known-issues"},"Known Issues"),(0,i.kt)("h3",{id:"windows-iso-unable-to-boot-when-using-efi-mode"},"Windows ISO unable to boot when using EFI mode"),(0,i.kt)("p",null,"When using EFI mode with Windows, you may find the system booted with other devices like HDD or UEFI shell like the one below:"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"efi-shell",src:n(57667).Z,width:"800",height:"608"})),(0,i.kt)("p",null,"That's because Windows will prompt a ",(0,i.kt)("inlineCode",{parentName:"p"},"Press any key to boot from CD or DVD...")," to let the user decide whether to boot from the installer ISO or not, and it needs human intervention to allow the system to boot from CD or DVD."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"boot-from-cd",src:n(41456).Z,width:"818",height:"621"})),(0,i.kt)("p",null,"Alternately if the system has already booted into the UEFI shell, you can type in ",(0,i.kt)("inlineCode",{parentName:"p"},"reset")," to force the system to reboot again. Once the prompt appears you can press any key to let system boot from Windows ISO."),(0,i.kt)("h3",{id:"vm-crashes-when-reserved-memory-not-enough"},"VM crashes when reserved memory not enough"),(0,i.kt)("p",null,"There is a known issue with Windows VM when it is allocated more than 8GiB without enough reserve memory configured. The VM crashes without warning."),(0,i.kt)("p",null,"This can be fixed by allocating at least 256MiB of reserved memory to the template on the Advanced Options tab. If ",(0,i.kt)("inlineCode",{parentName:"p"},"256MiB")," doesn't work, try ",(0,i.kt)("inlineCode",{parentName:"p"},"512MiB"),"."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"reserved-memory-config",src:n(25587).Z,width:"2538",height:"760"})),(0,i.kt)("h3",{id:"bsod-blue-screen-of-death-at-first-boot-time-of-windows"},"BSoD (Blue Screen of Death) at first boot time of Windows"),(0,i.kt)("p",null,"There is a known issue with Windows VM using Windows Server 2016 and above, a BSoD with error code ",(0,i.kt)("inlineCode",{parentName:"p"},"KMODE_EXCEPTION_NOT_HANDLED")," may appears at the first boot time of Windows. We are still looking into it and will fix this issue in the future release."),(0,i.kt)("p",null,"As a workaround, you can create or modify the file ",(0,i.kt)("inlineCode",{parentName:"p"},"/etc/modprobe.d/kvm.conf")," within the installation of Harvester by updating ",(0,i.kt)("inlineCode",{parentName:"p"},"/oem/99_custom.yaml")," like below:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-YAML"},'name: Harvester Configuration\nstages:\n  initramfs:\n  - commands: # ...\n    files:\n    - path: /etc/modprobe.d/kvm.conf\n      permissions: 384\n      owner: 0\n      group: 0\n      content: |\n          options kvm ignore_msrs=1\n      encoding: ""\n      ownerstring: ""\n      # ...\n')),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"This is still an experimental solution. For more information, please refer to ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/276"},"this issue")," and please let us know if you have encountered any issues after applying this workaround.")))}c.isMDXComponent=!0},41456:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/boot-from-cd-5d0271f20ded1ac63970bc78f9da9ec5.png"},14895:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-windows-vm-advanced-df5a302dd1495cc699f10c23bb355062.png"},33766:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-windows-vm-networks-1a29d10728925ba8f4edc495d26a7421.png"},16765:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-windows-vm-scheduling-ffa18f9b5afd614db7aa8a50082f827e.png"},14602:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-windows-vm-volumes-b654694515256a1d4a14655cc5241b90.png"},5867:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-windows-vm-bd4beb4bebfe8c490ddd02d838760d56.png"},57667:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/efi-shell-830d79cf172af786bad73c8dc479fe31.png"},44098:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/find-virtio-driver-directory-5be0d2673d0b8c1c34d87a6962da065f.png"},43726:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/installer-found-virtio-drive-09000201fe0e2d95e1aec7e2a84e35b3.png"},25587:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/reserved-memory-config-80c67e0df116c7fe39dd98dbd1bb1bb8.png"},38846:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/select-virtio-block-driver-d72f63b4b89cb0c8fe7b4b8b9eb9971b.png"}}]);