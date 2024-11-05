"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[46917],{22257:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>s});r(67294);var n=r(3905);const a={sidebar_position:3,sidebar_label:"Creating an RKE2 Kubernetes Cluster",title:"Creating an RKE2 Kubernetes Cluster"},i=void 0,l={unversionedId:"rancher/node/rke2-cluster",id:"version-v1.0/rancher/node/rke2-cluster",title:"Creating an RKE2 Kubernetes Cluster",description:"Users can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.1+ using the built-in Harvester node driver.",source:"@site/versioned_docs/version-v1.0/rancher/node/rke2-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/rke2-cluster",permalink:"/v1.0/rancher/node/rke2-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/rancher/node/rke2-cluster.md",tags:[],version:"v1.0",lastUpdatedAt:1730768941,formattedLastUpdatedAt:"Nov 5, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Creating an RKE2 Kubernetes Cluster",title:"Creating an RKE2 Kubernetes Cluster"},sidebar:"api",previous:{title:"Creating an RKE1 Kubernetes Cluster",permalink:"/v1.0/rancher/node/rke1-cluster"},next:{title:"Creating an K3s Kubernetes Cluster",permalink:"/v1.0/rancher/node/k3s-cluster"}},o={},s=[{value:"Create Your Cloud Credentials",id:"create-your-cloud-credentials",level:3},{value:"Create RKE2 Kubernetes Cluster",id:"create-rke2-kubernetes-cluster",level:3},{value:"Add Node Affinity",id:"add-node-affinity",level:4},{value:"Using Harvester RKE2 Node Driver in Air Gapped Environment",id:"using-harvester-rke2-node-driver-in-air-gapped-environment",level:3}],d={toc:s},p="wrapper";function u({components:e,...t}){return(0,n.kt)(p,{...d,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/rke2-cluster"})),(0,n.kt)("p",null,"Users can now provision RKE2 Kubernetes clusters on top of the Harvester cluster in Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.1+")," using the built-in Harvester node driver."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"rke2-cluster",src:r(11045).Z,width:"5118",height:"2002"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Harvester RKE2 node driver is in tech preview."),(0,n.kt)("li",{parentName:"ul"},"VLAN network is required for Harvester node driver."))),(0,n.kt)("h3",{id:"create-your-cloud-credentials"},"Create Your Cloud Credentials"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Harvester"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter your cloud credential name"),(0,n.kt)("li",{parentName:"ol"},'Select "Imported Harvester" or "External Harvester".'),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-harvester-cloud-credentials",src:r(61901).Z,width:"5118",height:"1614"})),(0,n.kt)("h3",{id:"create-rke2-kubernetes-cluster"},"Create RKE2 Kubernetes Cluster"),(0,n.kt)("p",null,"Users can create a RKE2 Kubernetes cluster from the ",(0,n.kt)("strong",{parentName:"p"},"Cluster Management")," page via the RKE2 node driver."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Clusters")," menu."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create")," button."),(0,n.kt)("li",{parentName:"ol"},"Toggle Switch to ",(0,n.kt)("strong",{parentName:"li"},"RKE2/K3s"),"."),(0,n.kt)("li",{parentName:"ol"},"Select Harvester node driver."),(0,n.kt)("li",{parentName:"ol"},"Select a ",(0,n.kt)("strong",{parentName:"li"},"Cloud Credential"),"."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"Cluster Name")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"Namespace")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"Image")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"Network Name")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Enter ",(0,n.kt)("strong",{parentName:"li"},"SSH User")," (required)."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Create"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"create-rke2-harvester-cluster",src:r(5919).Z,width:"3080",height:"1766"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"RKE2 v1.21.5+rke2r2 or above provides a built-in Harvester Cloud Provider and Guest CSI driver integration."),(0,n.kt)("li",{parentName:"ul"},"Currently only imported Harvester clusters are supported automatically."))),(0,n.kt)("h4",{id:"add-node-affinity"},"Add Node Affinity"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.0.3 + Rancher v2.6.7")),(0,n.kt)("p",null,"The Harvester node driver now supports scheduling a group of machines to particular nodes through the node affinity rules, which can provide high availability and better resource utilization."),(0,n.kt)("p",null,"Node affinity can be added to the machine pools during the cluster creation:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Show Advanced")," button and click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Add Node Selector"),(0,n.kt)("img",{alt:"affinity-add-node-selector",src:r(64490).Z,width:"3668",height:"1478"})),(0,n.kt)("li",{parentName:"ol"},"Set priority to ",(0,n.kt)("inlineCode",{parentName:"li"},"Required")," if you wish the scheduler to schedule the machines only when the rules are met."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Add Rule")," to specify the node affinity rules, e.g., for the ",(0,n.kt)("a",{parentName:"li",href:"/v1.0/rancher/node/node-driver#topology-spread-constraints"},"topology spread constraints")," use case, you can add the ",(0,n.kt)("inlineCode",{parentName:"li"},"region")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"zone")," labels as follows:",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"key: topology.kubernetes.io/region\noperator: in list \nvalues: us-east-1\n---\nkey: topology.kubernetes.io/zone\noperator: in list \nvalues: us-east-1a\n")),(0,n.kt)("img",{alt:"affinity-add-rules",src:r(72710).Z,width:"3634",height:"1290"})),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create")," to save the node template. After the cluster is installed, you can check whether its machine nodes are scheduled accordingly to the affinity rules.")),(0,n.kt)("h3",{id:"using-harvester-rke2-node-driver-in-air-gapped-environment"},"Using Harvester RKE2 Node Driver in Air Gapped Environment"),(0,n.kt)("p",null,"RKE2 provisioning relies on the ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," to get the IP of the virtual machine. However, it may not be feasible to install ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," in an air gapped environment."),(0,n.kt)("p",null,"You can address the installation constraints with the following options:"),(0,n.kt)("p",null,"Option 1. Use a VM image with ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," installed."),(0,n.kt)("p",null,"Option 2. Configure the ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud init")," user data to enable the VMs to install ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," via an HTTP(S) proxy."),(0,n.kt)("p",null,"Example user data in Harvester node template:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"#cloud-config\napt:\n  http_proxy: http://192.168.0.1:3128\n  https_proxy: http://192.168.0.1:3128\n")))}u.isMDXComponent=!0},64490:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/affinity-rke2-add-node-selector-43c8e7c2785ab6a07a2c90791d84f9c3.png"},72710:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/affinity-rke2-add-rules-6934a0009ec40592576d46f06523c040.png"},61901:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-cloud-credentials-802de79d7c98f1d103be549480f02365.png"},5919:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-rke2-harvester-cluster-69f3e90ce583758d3fb637b41d103772.png"},11045:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rke2-k3s-node-driver-cc17f742cf8fe7fdf8fcf814c34754cb.png"}}]);