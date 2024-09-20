"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7995],{22985:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>w,frontMatter:()=>a,metadata:()=>o,toc:()=>l});n(67294);var r=n(3905);const a={sidebar_position:3,sidebar_label:"Multiple NICs with Non VLAN-aware Switch",title:"Multiple NICs with Non VLAN-aware Switch",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},i=void 0,o={unversionedId:"networking/best-practice/multiple-nics-non-vlan-aware-switch",id:"version-v1.0/networking/best-practice/multiple-nics-non-vlan-aware-switch",title:"Multiple NICs with Non VLAN-aware Switch",description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs.",source:"@site/versioned_docs/version-v1.0/networking/best-practice/multiple-nics-non-vlan-aware-switch.md",sourceDirName:"networking/best-practice",slug:"/networking/best-practice/multiple-nics-non-vlan-aware-switch",permalink:"/v1.0/networking/best-practice/multiple-nics-non-vlan-aware-switch",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/networking/best-practice/multiple-nics-non-vlan-aware-switch.md",tags:[],version:"v1.0",lastUpdatedAt:1726799721,formattedLastUpdatedAt:"Sep 20, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Multiple NICs with Non VLAN-aware Switch",title:"Multiple NICs with Non VLAN-aware Switch",keywords:["Harvester","harvester","Rancher","rancher","Network","network","VLAN","vlan"],description:"Harvester is built on top of Kubernetes, and uses the [CNI](https://github.com/containernetworking/cni) as the interface between network providers and Kubernetes pod networking. Naturally, we implement the Harvester network based on CNI. Moreover, the Harvester UI integrates the network configuration in order to provide a user-friendly way to configure networks for VMs."},sidebar:"api",previous:{title:"Multiple NICs with VLAN-aware Switch",permalink:"/v1.0/networking/best-practice/multiple-nics-vlan-aware-switch"},next:{title:"Single NIC with VLAN-aware Switch",permalink:"/v1.0/networking/best-practice/single-nic-vlan-aware-switch"}},s={},l=[{value:"Architecture",id:"architecture",level:2},{value:"External Switch Configuration",id:"external-switch-configuration",level:2},{value:"Create a VLAN Network in Harvester",id:"create-a-vlan-network-in-harvester",level:2},{value:"Connect a VM to the subnet of the Harvester hosts",id:"connect-a-vm-to-the-subnet-of-the-harvester-hosts",level:3}],c={toc:l},h="wrapper";function w({components:e,...t}){return(0,r.kt)(h,{...c,...t,components:e,mdxType:"MDXLayout"},(0,r.kt)("p",null,'In this best practice guide for "non VLAN-aware" switch, also known as "dummy" switch, we will introduce Harvester VLAN network and external switch configuration for common scenario.'),(0,r.kt)("h2",{id:"architecture"},"Architecture"),(0,r.kt)("p",null,"Hardware:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Three Harvester servers with dual ports network card."),(0,r.kt)("li",{parentName:"ul"},'One or more "non VLAN-aware" switch(es).')),(0,r.kt)("p",null,"Network Specification:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The host and the VM networks are in the same subnet.")),(0,r.kt)("p",null,"Cabling:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The Harvester servers are connected to the switch in a port from ",(0,r.kt)("inlineCode",{parentName:"li"},"1")," to ",(0,r.kt)("inlineCode",{parentName:"li"},"6"),".")),(0,r.kt)("p",null,"The following diagram illustrates the cabling used for this guide:"),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{alt:"mulitple-nics-non-vlan-aware.png",src:n(37980).Z,width:"921",height:"501"})),(0,r.kt)("h2",{id:"external-switch-configuration"},"External Switch Configuration"),(0,r.kt)("p",null,'Typically, a "non VLAN-aware" switch cannot be configured.'),(0,r.kt)("h2",{id:"create-a-vlan-network-in-harvester"},"Create a VLAN Network in Harvester"),(0,r.kt)("p",null,"You can create a new VLAN network on the ",(0,r.kt)("strong",{parentName:"p"},"Advanced > Networks")," page, and click the ",(0,r.kt)("strong",{parentName:"p"},"Create")," button."),(0,r.kt)("p",null,"Specify the name and a VLAN ID that you want to create for the VLAN network ",(0,r.kt)("small",null,"(You can specify the same VLAN ID in different namespaces if you have ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/rancher/virtualization-management#multi-tenancy"},"Rancher multi-tenancy")," configured)"),"."),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{alt:"create-vlan-network.png",src:n(44712).Z,width:"3472",height:"1132"})),(0,r.kt)("h3",{id:"connect-a-vm-to-the-subnet-of-the-harvester-hosts"},"Connect a VM to the subnet of the Harvester hosts"),(0,r.kt)("p",null,'The "non VLAN-aware" switch will only send out untagged network traffic to the subnet of the Harvester hosts. In Harvester, the untagged traffic is received in VLAN 1.'),(0,r.kt)("p",null,"If you need a VM to connect to the subnet of the Harvester hosts, you have to create a VLAN Network in Harvester with VLAN ID 1."),(0,r.kt)("p",null,"   ",(0,r.kt)("img",{alt:"mulitple-nics-non-vlan-aware-vlan1.png",src:n(46823).Z,width:"921",height:"501"})),(0,r.kt)("p",null,"Please refer to ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/networking/harvester-network"},"this page")," for additional information on Harvester Networking."),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"If you create a VLAN Network different from ",(0,r.kt)("inlineCode",{parentName:"p"},"1"),", the connection between VMs in different nodes will fail.")))}w.isMDXComponent=!0},44712:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/create-network-2288440fcd22445ded421874d1ddcd24.png"},46823:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mulitple-nics-non-vlan-aware-vlan1-abc87ab54eee06dc074cc595ad9e1579.png"},37980:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/mulitple-nics-non-vlan-aware-b3df21002c14289b99e41211d7ce344c.png"}}]);