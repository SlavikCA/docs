"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[12328],{81419:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>c,frontMatter:()=>a,metadata:()=>o,toc:()=>d});t(67294);var n=t(3905);const a={sidebar_position:1,sidebar_label:"Harvester Node Driver",title:"Harvester Node Driver",keywords:["Harvester","harvester","Rancher","rancher","Harvester Node Driver"],description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."},s=void 0,o={unversionedId:"rancher/node/node-driver",id:"version-v0.3/rancher/node/node-driver",title:"Harvester Node Driver",description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters.",source:"@site/versioned_docs/version-v0.3/rancher/node/node-driver.md",sourceDirName:"rancher/node",slug:"/rancher/node/node-driver",permalink:"/v0.3/rancher/node/node-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/rancher/node/node-driver.md",tags:[],version:"v0.3",lastUpdatedAt:1722560913,formattedLastUpdatedAt:"Aug 2, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Node Driver",title:"Harvester Node Driver",keywords:["Harvester","harvester","Rancher","rancher","Harvester Node Driver"],description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."},sidebar:"api",previous:{title:"Virtualization Management",permalink:"/v0.3/rancher/virtualization-management"},next:{title:"Creating an RKE1 Kubernetes Cluster",permalink:"/v0.3/rancher/node/rke1-cluster"}},i={},d=[{value:"Enable Harvester Node Driver",id:"enable-harvester-node-driver",level:2},{value:"RKE1 Kubernetes Cluster",id:"rke1-kubernetes-cluster",level:2},{value:"RKE2 Kubernetes Cluster",id:"rke2-kubernetes-cluster",level:2}],l={toc:d},v="wrapper";function c({components:e,...r}){return(0,n.kt)(v,{...l,...r,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/node-driver"})),(0,n.kt)("p",null,"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."),(0,n.kt)("p",null,"A node driver is the same as a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine driver"),", and the project repo is available at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/docker-machine-driver-harvester"},"harvester/docker-machine-driver-harvester"),"."),(0,n.kt)("p",null,"Users can now provision RKE1/RKE2 Kubernetes clusters in Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.1")," or above using the built-in Harvester node driver.\nAdditionally, Harvester now can provide built-in ",(0,n.kt)("a",{parentName:"p",href:"/v0.3/rancher/cloud-provider"},"Load Balancer support")," as well as raw cluster ",(0,n.kt)("a",{parentName:"p",href:"/v0.3/rancher/csi-driver"},"persistent storage")," support to the guest Kubernetes cluster."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Currently only Rancher v2.6.1 or above is compatible with Harvester v0.3.0.")),(0,n.kt)("h2",{id:"enable-harvester-node-driver"},"Enable Harvester Node Driver"),(0,n.kt)("p",null,"The Harvester node driver is not enabled by default from the Rancher UI. Click the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster Management")," tab to enable the Harvester node driver."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Drivers")," page, then click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Node Drivers")," tab "),(0,n.kt)("li",{parentName:"ol"},"Select the Harvester node driver, then click ",(0,n.kt)("inlineCode",{parentName:"li"},"Activate")," to enable the Harvester node driver")),(0,n.kt)("p",null,(0,n.kt)("img",{src:t(94967).Z,width:"3570",height:"1836"})),(0,n.kt)("p",null,"Now users can spin up Kubernetes clusters on top of the Harvester cluster and manage them there."),(0,n.kt)("h2",{id:"rke1-kubernetes-cluster"},"RKE1 Kubernetes Cluster"),(0,n.kt)("p",null,"Click to learn ",(0,n.kt)("a",{parentName:"p",href:"/v0.3/rancher/node/rke1-cluster"},"how to create RKE1 Kubernetes Clusters"),"."),(0,n.kt)("h2",{id:"rke2-kubernetes-cluster"},"RKE2 Kubernetes Cluster"),(0,n.kt)("p",null,"Click to learn ",(0,n.kt)("a",{parentName:"p",href:"/v0.3/rancher/node/rke2-cluster"},"how to create RKE2 Kubernetes Clusters"),"."))}c.isMDXComponent=!0},94967:(e,r,t)=>{t.d(r,{Z:()=>n});const n=t.p+"assets/images/enable-node-driver-226d5881768edb6fc02eff1afffb2f80.png"}}]);