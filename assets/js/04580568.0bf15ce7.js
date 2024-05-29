"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[94029],{8585:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const o={sidebar_position:1,sidebar_label:"Harvester Node Driver",title:"Harvester Node Driver",keywords:["Harvester","harvester","Rancher","rancher","Harvester Node Driver"],description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."},s=void 0,i={unversionedId:"rancher/node/node-driver",id:"version-v1.1/rancher/node/node-driver",title:"Harvester Node Driver",description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters.",source:"@site/versioned_docs/version-v1.1/rancher/node/node-driver.md",sourceDirName:"rancher/node",slug:"/rancher/node/node-driver",permalink:"/v1.1/rancher/node/node-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/rancher/node/node-driver.md",tags:[],version:"v1.1",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Harvester Node Driver",title:"Harvester Node Driver",keywords:["Harvester","harvester","Rancher","rancher","Harvester Node Driver"],description:"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."},sidebar:"tutorialSidebar",previous:{title:"Virtualization Management",permalink:"/v1.1/rancher/virtualization-management"},next:{title:"Creating an RKE1 Kubernetes Cluster",permalink:"/v1.1/rancher/node/rke1-cluster"}},l={},d=[{value:"Harvester Node Driver",id:"harvester-node-driver",level:2},{value:"Support Matrix",id:"support-matrix",level:3},{value:"Known Issues",id:"known-issues",level:2},{value:"Volumes created by the Harvester CSI driver in the host Harvester cluster would be deleted after editing/deleting the guest cluster",id:"volumes-created-by-the-harvester-csi-driver-in-the-host-harvester-cluster-would-be-deleted-after-editingdeleting-the-guest-cluster",level:3},{value:"RKE1 Kubernetes Cluster",id:"rke1-kubernetes-cluster",level:2},{value:"RKE2 Kubernetes Cluster",id:"rke2-kubernetes-cluster",level:2},{value:"K3s Kubernetes Cluster",id:"k3s-kubernetes-cluster",level:2},{value:"Topology Spread Constraints",id:"topology-spread-constraints",level:2},{value:"Sync Topology Labels to the Guest Cluster Node",id:"sync-topology-labels-to-the-guest-cluster-node",level:3}],u={toc:d},p="wrapper";function h(e){let{components:t,...o}=e;return(0,n.kt)(p,(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/node-driver"})),(0,n.kt)("p",null,"The Harvester node driver is used to provision VMs in the Harvester cluster. In this section, you'll learn how to configure Rancher to use the Harvester node driver to launch and manage Kubernetes clusters."),(0,n.kt)("p",null,"A node driver is the same as a ",(0,n.kt)("a",{parentName:"p",href:"https://docs.docker.com/machine/"},"Docker Machine driver"),", and the project repo is available at ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/docker-machine-driver-harvester"},"harvester/docker-machine-driver-harvester"),"."),(0,n.kt)("p",null,"You can now provision RKE1/RKE2 Kubernetes clusters in Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.3+")," with the built-in Harvester node driver.\nAdditionally, Harvester now can provide built-in ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/cloud-provider"},"Load Balancer support")," as well as Harvester cluster ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/csi-driver"},"storage passthrough")," support to the guest Kubernetes cluster."),(0,n.kt)("p",null,"While you can ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/upload-image#upload-images-via-local-file"},"upload and view ",(0,n.kt)("inlineCode",{parentName:"a"},".ISO")," images in the Harvester UI"),", the same capability is not available in the Rancher UI. For more information on this, see the ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/virtualization-admin/#harvester-node-driver"},"Rancher docs"),"."),(0,n.kt)("h2",{id:"harvester-node-driver"},"Harvester Node Driver"),(0,n.kt)("p",null,"The Harvester node driver is enabled by default from Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.3"),". You can go to ",(0,n.kt)("inlineCode",{parentName:"p"},"Cluster Management")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"Drivers")," > ",(0,n.kt)("inlineCode",{parentName:"p"},"Node Drivers")," page to manage the Harvester node driver manually."),(0,n.kt)("p",null,"When the Harvester node driver is enabled, you can create Kubernetes clusters on top of the Harvester cluster and manage them from Rancher."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"rke1-cluster",src:r(72703).Z,width:"5118",height:"1972"})),(0,n.kt)("h3",{id:"support-matrix"},"Support Matrix"),(0,n.kt)("p",null,"Refer to ",(0,n.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-rancher/support-matrix/all-supported-versions/rancher-v2-6-9"},"Rancher Downstream Cluster Support Matrix")),(0,n.kt)("h2",{id:"known-issues"},"Known Issues"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Summary"),(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Last Updated"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/issues/3272"},"Volumes created by the Harvester CSI driver in the host Harvester cluster would be deleted after editing/deleting the guest cluster")),(0,n.kt)("td",{parentName:"tr",align:null},"Resolved"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-05-08")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/issues/5827"},"Rancher loses ability to manage/scale guest clusters when the corresponding API tokens expire")),(0,n.kt)("td",{parentName:"tr",align:null},(0,n.kt)("a",{parentName:"td",href:"https://harvesterhci.io/kb/renew_harvester_cloud_credentials"},"Temporary Workaround Exists")),(0,n.kt)("td",{parentName:"tr",align:null},"2024-05-17")))),(0,n.kt)("h3",{id:"volumes-created-by-the-harvester-csi-driver-in-the-host-harvester-cluster-would-be-deleted-after-editingdeleting-the-guest-cluster"},"Volumes created by the Harvester CSI driver in the host Harvester cluster would be deleted after editing/deleting the guest cluster"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:null},"Status"),(0,n.kt)("th",{parentName:"tr",align:null},"Last updated"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:null},"Resolved(Rancher >=v2.7.2)"),(0,n.kt)("td",{parentName:"tr",align:null},"2023-05-08")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Workaround"),": You can temporarily change the Harvester node driver version to ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/docker-machine-driver-harvester/releases/tag/v0.6.3"},"v0.6.3")," from the Rancher UI."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the Rancher UI and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Cluster Management")," > ",(0,n.kt)("inlineCode",{parentName:"li"},"Drivers")," > ",(0,n.kt)("inlineCode",{parentName:"li"},"Node Drivers"),". In the ",(0,n.kt)("inlineCode",{parentName:"li"},"Node Drivers")," list, find ",(0,n.kt)("inlineCode",{parentName:"li"}," Harvester")," and then click ",(0,n.kt)("inlineCode",{parentName:"li"},"\u22ee"),"  > ",(0,n.kt)("inlineCode",{parentName:"li"},"View in API"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit"),"."),(0,n.kt)("li",{parentName:"ol"},"Uncheck the ",(0,n.kt)("inlineCode",{parentName:"li"},"builtin")," checkbox."),(0,n.kt)("li",{parentName:"ol"},"Change the ",(0,n.kt)("inlineCode",{parentName:"li"},"*url")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"https://releases.rancher.com/harvester-node-driver/v0.6.3/docker-machine-driver-harvester-amd64.tar.gz"),"."),(0,n.kt)("li",{parentName:"ol"},"Change the ",(0,n.kt)("inlineCode",{parentName:"li"},"checksum")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"159516f8f438e9b1726418ec8608625384aba1857bc89dff4a6ff16b31357c28"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Show Request")," > ",(0,n.kt)("inlineCode",{parentName:"li"},"Send Request"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Reload")," until the value of ",(0,n.kt)("inlineCode",{parentName:"li"},"status.appliedChecksum")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"status.appliedURL")," change to the value we set.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Changes to the node driver cannot be persisted. In other words, the changes will be lost after you restart the Rancher container.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"To use this workaround, you need to ensure that the connection to the url is stable.\nIf your environment is an air-gapped environment, you need to download the file and host it on the Intranet.")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Starting with v0.6.3, the Harvester node driver has removed the ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," auto-injection from the backend. If the image you are using does not contain the ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," package, you can use ",(0,n.kt)("inlineCode",{parentName:"p"},"userdata")," config to install and boot ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent"),". Otherwise, the cluster will not be provisioned successfully."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"#cloud-config\npackage_update: true\npackages:\n- qemu-guest-agent\nruncmd:\n- - systemctl\n  - enable\n  - '--now'\n  - qemu-guest-agent.service\n"))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Resolution"),": Rancher v2.7.2 has been released with the fixed node driver version v0.6.3 for this issue. And Rancher v2.7.2 UI will do the ",(0,n.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," auto-injection."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Affected versions"),":"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Rancher: v2.6.x,v2.7.0,v2.7.1")),(0,n.kt)("h2",{id:"rke1-kubernetes-cluster"},"RKE1 Kubernetes Cluster"),(0,n.kt)("p",null,"Click to learn ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/node/rke1-cluster"},"how to create RKE1 Kubernetes Clusters"),"."),(0,n.kt)("h2",{id:"rke2-kubernetes-cluster"},"RKE2 Kubernetes Cluster"),(0,n.kt)("p",null,"Click to learn ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/node/rke2-cluster"},"how to create RKE2 Kubernetes Clusters"),"."),(0,n.kt)("h2",{id:"k3s-kubernetes-cluster"},"K3s Kubernetes Cluster"),(0,n.kt)("p",null,"Click to learn ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/node/k3s-cluster"},"how to create k3s Kubernetes Clusters"),"."),(0,n.kt)("h2",{id:"topology-spread-constraints"},"Topology Spread Constraints"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.0.3")),(0,n.kt)("p",null,"In your guest Kubernetes cluster, you can use ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/"},"topology spread constraints")," to control how workloads are spread across the Harvester VMs among failure-domains such as regions and zones. This can help to achieve high availability as well as efficient resource utilization of your cluster resources."),(0,n.kt)("p",null,"The minimum RKE2 versions required to support the sync topology label feature are as follows:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Supported RKE2 Version"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">","=  v1.24.3+rke2r1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">","=  v1.23.9+rke2r1")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},">","=  v1.22.12+rke2r1")))),(0,n.kt)("p",null,"In addition, the cloud provider version installed via the ",(0,n.kt)("inlineCode",{parentName:"p"},"Apps")," of RKE/K3s must be >= v0.1.4"),(0,n.kt)("h3",{id:"sync-topology-labels-to-the-guest-cluster-node"},"Sync Topology Labels to the Guest Cluster Node"),(0,n.kt)("p",null,"During the cluster installation, the Harvester node driver will automatically help synchronize topology labels from VM nodes to guest cluster nodes. Currently, only ",(0,n.kt)("inlineCode",{parentName:"p"},"region")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"zone")," topology labels are supported."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Label synchronization will only take effect during guest node initialization. To avoid node drifts to another region or zone, it is recommended to add the ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/node/rke2-cluster#add-node-affinity"},"node affinity rules")," during the cluster provisioning, so that the VMs can be scheduled to the same zone even after rebuilding.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Configuring topology labels on the Harvester nodes through ",(0,n.kt)("inlineCode",{parentName:"p"},"Hosts > Edit Config > Labels"),". e.g., add the topology labels as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"topology.kubernetes.io/region: us-east-1\ntopology.kubernetes.io/zone: us-east-1a\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(13950).Z,width:"4374",height:"1820"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Creating a guest Kubernetes cluster using the Harvester node driver and it is recommended to add the ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/node/rke2-cluster#add-node-affinity"},"node affinity rules"),", this will help to avoid node drifting to other zones after VM rebuilding.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"After the cluster is successfully deployed, confirm that guest Kubernetes node labels are successfully synchronized from the Harvester VM node.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Now deploy workloads on your guest Kubernetes cluster, and you should be able to manage them using the ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/concepts/scheduling-eviction/topology-spread-constraints/"},"topology spread constraints"),"."))))}h.isMDXComponent=!0},13950:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/node-add-affinity-labels-427cc8103802bf12cb3c6c8ac89086f3.png"},72703:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke1-node-driver-f8868c55d2aa08ff3d613ef8c6ce673b.png"}}]);