"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[64734],{2782:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>l});a(67294);var n=a(3905);const r={sidebar_position:2,sidebar_label:"Network",title:"Network",keywords:["Harvester","Network"]},o=void 0,i={unversionedId:"networking/harvester-network",id:"version-v1.1/networking/harvester-network",title:"Network",description:"Harvester provides three types of virtual networks for virtual machines (VMs), including:",source:"@site/versioned_docs/version-v1.1/networking/harvester-network.md",sourceDirName:"networking",slug:"/networking/harvester-network",permalink:"/v1.1/networking/harvester-network",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/networking/harvester-network.md",tags:[],version:"v1.1",lastUpdatedAt:1733825626,formattedLastUpdatedAt:"Dec 10, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Network",title:"Network",keywords:["Harvester","Network"]},sidebar:"api",previous:{title:"Cluster Network",permalink:"/v1.1/networking/index"},next:{title:"Harvester Network Deep Dive",permalink:"/v1.1/networking/deep-dive"}},s={},l=[{value:"Management Network",id:"management-network",level:2},{value:"How to use management network",id:"how-to-use-management-network",level:3},{value:"VLAN Network",id:"vlan-network",level:2},{value:"Create a VM Network",id:"create-a-vm-network",level:3},{value:"Create a VM with VLAN Network",id:"create-a-vm-with-vlan-network",level:3},{value:"Untagged Network",id:"untagged-network",level:2},{value:"How to use untagged network",id:"how-to-use-untagged-network",level:3}],k={toc:l},p="wrapper";function d({components:e,...t}){return(0,n.kt)(p,{...k,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/networking/harvester-network"})),(0,n.kt)("p",null,"Harvester provides three types of virtual networks for virtual machines (VMs), including:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Management Network"),(0,n.kt)("li",{parentName:"ul"},"VLAN Network"),(0,n.kt)("li",{parentName:"ul"},"Untagged Network")),(0,n.kt)("p",null,"The management network is usually used for VMs whose traffic only flows inside the cluster. If your VMs need to connect to the external network, use the VLAN network or untagged network."),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.0.1")),(0,n.kt)("p",null,"Harvester also introduced storage networking to separate the storage traffic from other cluster-wide workloads. Please refer to ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/advanced/storagenetwork"},"the storage network document")," for more details."),(0,n.kt)("h2",{id:"management-network"},"Management Network"),(0,n.kt)("p",null,"Harvester uses ",(0,n.kt)("a",{parentName:"p",href:"https://projectcalico.docs.tigera.io/getting-started/kubernetes/flannel/flannel"},"Canal")," as its default management network. It is a built-in network that can be used directly from the cluster.\nBy default, the management network IP of a VM can only be accessed within the cluster nodes, and the management network IP will change after the VM reboot. This is non-typical behaviour that needs to be taken note of since VM IPs are expected to remain unchanged after a reboot."),(0,n.kt)("p",null,"However, you can leverage the Kubernetes ",(0,n.kt)("a",{parentName:"p",href:"https://kubevirt.io/user-guide/virtual_machines/service_objects/"},"service object")," to create a stable IP for your VMs with the management network."),(0,n.kt)("h3",{id:"how-to-use-management-network"},"How to use management network"),(0,n.kt)("p",null,"Since the management network is built-in and doesn't require extra operations, you can add it directly when configuring the VM network."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(27114).Z,width:"3566",height:"1236"})),(0,n.kt)("admonition",{title:"important",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Network interfaces of VMs connected to the management network have an ",(0,n.kt)("a",{parentName:"p",href:"https://docs.tigera.io/calico/latest/networking/configuring/mtu#determine-mtu-size"},"MTU value of ",(0,n.kt)("inlineCode",{parentName:"a"},"1450")),". This is because a VXLAN overlay network typically has a slightly higher per-packet overhead."),(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("img",{src:a(82649).Z,width:"1440",height:"224"})),(0,n.kt)("p",{parentName:"admonition"},"If any of your workloads involve transmission of network traffic, you must specify the appropriate MTU value for the affected VM network interfaces and bridges.")),(0,n.kt)("h2",{id:"vlan-network"},"VLAN Network"),(0,n.kt)("p",null,"The ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-network-controller"},"Harvester network-controller")," leverages the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/k8snetworkplumbingwg/multus-cni"},"multus")," and ",(0,n.kt)("a",{parentName:"p",href:"https://www.cni.dev/plugins/current/main/bridge/"},"bridge")," CNI plugins to implement its customized L2 bridge VLAN network. It helps to connect your VMs to the host network interface and can be accessed from internal and external networks using the physical switch."),(0,n.kt)("h3",{id:"create-a-vm-network"},"Create a VM Network"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Go to ",(0,n.kt)("strong",{parentName:"p"},"Networks")," > ",(0,n.kt)("strong",{parentName:"p"},"VM Networks"),". ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("strong",{parentName:"p"},"Create"),". ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configure the following settings: "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Namespace "),(0,n.kt)("li",{parentName:"ul"},"Name "),(0,n.kt)("li",{parentName:"ul"},"Description (optional) "))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Basics")," tab, configure the following settings: "),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Type: Select ",(0,n.kt)("strong",{parentName:"li"},"L2VlanNetwork"),"."),(0,n.kt)("li",{parentName:"ul"},"Vlan ID "),(0,n.kt)("li",{parentName:"ul"},"Cluster Network ")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(99618).Z,width:"3454",height:"1492"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Route tab, select an option and then specify the related IPv4 addresses."),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Auto(DHCP): The Harvester network controller retrieves the CIDR and gateway addresses from the DHCP server. You can specify the DHCP server address. ")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(1745).Z,width:"3450",height:"1084"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Manual: Specify the CIDR and gateway addresses. ")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(26145).Z,width:"3450",height:"1046"})),(0,n.kt)("admonition",{parentName:"li",title:"important",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"Harvester uses the information to verify that all nodes can access the VM network you are creating. If that is the case, the ",(0,n.kt)("em",{parentName:"p"},"Network connectivity")," column on the ",(0,n.kt)("strong",{parentName:"p"},"VM Networks")," screen indicates that the network is active. Otherwise, the screen indicates that an error has occurred.")))),(0,n.kt)("h3",{id:"create-a-vm-with-vlan-network"},"Create a VM with VLAN Network"),(0,n.kt)("p",null,"You can now create a new VM using the VLAN network configured above:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Create")," button on the ",(0,n.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,n.kt)("li",{parentName:"ul"},"Specify the required parameters and click the ",(0,n.kt)("strong",{parentName:"li"},"Networks")," tab."),(0,n.kt)("li",{parentName:"ul"},"Either configure the default network to be a VLAN network or select an additional network to add.")),(0,n.kt)("h2",{id:"untagged-network"},"Untagged Network"),(0,n.kt)("p",null,"As is known, the traffic under a VLAN network has a VLAN ID tag and we can use the VLAN network with ",(0,n.kt)("inlineCode",{parentName:"p"},"PVID")," (default 1) to communicate with any normal untagged traffic. However, some network devices may not expect to receive an explicitly tagged VLAN ID that matches the native VLAN on the switch the uplink belongs to. That's the reason why we provide the untagged network."),(0,n.kt)("h3",{id:"how-to-use-untagged-network"},"How to use untagged network"),(0,n.kt)("p",null,"The usage of untagged network is similar to ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/networking/harvester-network#how-to-use-vlan-network"},"the VLAN network"),"."),(0,n.kt)("p",null,"To create a new untagged network, go to the ",(0,n.kt)("strong",{parentName:"p"},"Networks > Networks")," page and click the ",(0,n.kt)("strong",{parentName:"p"},"Create")," button. You have to specify the name, select the type ",(0,n.kt)("inlineCode",{parentName:"p"},"Untagged Network")," and choose the cluster network."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(91220).Z,width:"3454",height:"1006"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Starting with Harvester v1.1.2, Harvester supports updating and deleting VM networks. Make sure to stop all affected VMs before updating or deleting VM networks.")))}d.isMDXComponent=!0},91220:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-untagged-network-b8fd83d075ff3707598f4aa121927607.png"},82649:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/management-network-mtu-bac788e06c4be3e127d1956501ee163a.png"},27114:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/management-network-7e0ec51483792bed6b8124c98be4844d.png"},1745:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-network-auto-3618d9cd389a84ca8185fb09b041592e.png"},26145:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-network-manual-d1eeea0862b8c37ac58c6cf08033c069.png"},99618:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-vlan-network-b49901aa27b8a9a0433047ddd118cb98.png"}}]);