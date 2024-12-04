"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[36447],{6599:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>o,contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>l,toc:()=>s});a(67294);var r=a(3905);const n={id:"requirements",sidebar_position:1,sidebar_label:"Hardware and Network Requirements",title:"Hardware and Network Requirements",keywords:["Installation Requirements"],description:"Outline the Harvester installation requirements"},i=void 0,l={unversionedId:"install/requirements",id:"version-v1.2/install/requirements",title:"Hardware and Network Requirements",description:"Outline the Harvester installation requirements",source:"@site/versioned_docs/version-v1.2/install/requirements.md",sourceDirName:"install",slug:"/install/requirements",permalink:"/v1.2/install/requirements",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/install/requirements.md",tags:[],version:"v1.2",lastUpdatedAt:1733305603,formattedLastUpdatedAt:"Dec 4, 2024",sidebarPosition:1,frontMatter:{id:"requirements",sidebar_position:1,sidebar_label:"Hardware and Network Requirements",title:"Hardware and Network Requirements",keywords:["Installation Requirements"],description:"Outline the Harvester installation requirements"},sidebar:"api",previous:{title:"Glossary",permalink:"/v1.2/getting-started/glossary"},next:{title:"ISO Installation",permalink:"/v1.2/install/index"}},o={},s=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"CPU Specifications",id:"cpu-specifications",level:3},{value:"Network Requirements",id:"network-requirements",level:2},{value:"Port Requirements for Harvester Nodes",id:"port-requirements-for-harvester-nodes",level:3},{value:"Port Requirements for Integrating Harvester with Rancher",id:"port-requirements-for-integrating-harvester-with-rancher",level:3},{value:"Port Requirements for K3s or RKE/RKE2 Clusters",id:"port-requirements-for-k3s-or-rkerke2-clusters",level:3}],m={toc:s},d="wrapper";function p({components:t,...e}){return(0,r.kt)(d,{...m,...e,components:t,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/requirements"})),(0,r.kt)("p",null,"As an HCI solution on bare metal servers, there are minimum node hardware and network requirements for installing and running Harvester."),(0,r.kt)("p",null,"A three-node cluster is required to fully realize the multi-node features of Harvester. The first node that is added to the cluster is by default the management node. When the cluster has three or more nodes, the two nodes added after the first are automatically promoted to management nodes to form a high availability (HA) cluster."),(0,r.kt)("p",null,"Certain versions of Harvester support the deployment of ",(0,r.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/advanced/singlenodeclusters"},"single-node clusters"),". Such clusters do not support high availability, multiple replicas, and live migration."),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null,"Harvester nodes have the following hardware requirements and recommendations for installation and testing."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Hardware"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Development/Testing"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Production"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,r.kt)("td",{parentName:"tr",align:"left"},"x86_64 (with hardware-assisted virtualization); 8 cores minimum"),(0,r.kt)("td",{parentName:"tr",align:"left"},"x86_64 (with hardware-assisted virtualization); 16 cores minimum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"32 GB minimum"),(0,r.kt)("td",{parentName:"tr",align:"left"},"64 GB minimum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk capacity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"250 GB minimum (180 GB minimum when using multiple disks)"),(0,r.kt)("td",{parentName:"tr",align:"left"},"500 GB minimum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk performance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5,000+ random IOPS per disk (SSD/NVMe); management node storage must meet ",(0,r.kt)("a",{parentName:"td",href:"(https://www.suse.com/support/kb/doc/?id=000020100)"},"etcd")," speed requirements. Only local disks and hardware RAID are supported."),(0,r.kt)("td",{parentName:"tr",align:"left"},"5,000+ random IOPS per disk (SSD/NVMe); management node storage must meet ",(0,r.kt)("a",{parentName:"td",href:"(https://www.suse.com/support/kb/doc/?id=000020100)"},"etcd")," speed requirements. Only local disks and hardware RAID are supported.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Network card count"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Management cluster network: 1 NIC required, 2 NICs recommended; VM workload network: 1 NIC required, at least 2 NICs recommended"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Management cluster network: 1 NIC required, 2 NICs recommended; VM workload network: 1 NIC required, at least 2 NICs recommended")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Network card speed"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1 Gbps Ethernet minimum"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10 Gbps Ethernet minimum")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Network switch"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port trunking for VLAN support"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Port trunking for VLAN support")))),(0,r.kt)("admonition",{title:"important",type:"info"},(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"For best results, use ",(0,r.kt)("a",{parentName:"li",href:"https://www.suse.com/partners/ihv/yes/"},"YES-certified hardware")," for SUSE Linux Enterprise Server (SLES) 15 SP3 or SP4. Harvester is built on SLE technology and YES-certified hardware has additional validation of driver and system board compatibility. Laptops and nested virtualization are not supported."),(0,r.kt)("li",{parentName:"ul"},"Each node must have a unique ",(0,r.kt)("inlineCode",{parentName:"li"},"product_uuid")," (fetched from ",(0,r.kt)("inlineCode",{parentName:"li"},"/sys/class/dmi/id/product_uuid"),") to prevent errors from occurring during VM live migration and other operations. For more information, see ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4025"},"Issue #4025"),"."),(0,r.kt)("li",{parentName:"ul"},"Harvester has a ",(0,r.kt)("a",{parentName:"li",href:"/v1.2/networking/index#built-in-cluster-network"},"built-in management cluster network")," (",(0,r.kt)("inlineCode",{parentName:"li"},"mgmt"),"). To achieve high availability and the best performance in production environments, use at least two NICs in each node to set up a bonded NIC for the management network (see step 6 in ",(0,r.kt)("a",{parentName:"li",href:"/v1.2/install/index#installation-steps"},"ISO Installation"),"). You can also create ",(0,r.kt)("a",{parentName:"li",href:"/v1.2/networking/index#custom-cluster-network"},"custom cluster networks")," for VM workloads. Each custom cluster network requires at least two additional NICs to set up a bonded NIC in every involved node of the Harvester cluster. For more information, see ",(0,r.kt)("a",{parentName:"li",href:"/v1.2/networking/index#concepts"},"Cluster Network"),"."),(0,r.kt)("li",{parentName:"ul"},"During testing, you can use only one NIC for the ",(0,r.kt)("a",{parentName:"li",href:"/v1.2/networking/index#built-in-cluster-network"},"built-in management cluster network")," (",(0,r.kt)("inlineCode",{parentName:"li"},"mgmt"),"), and for testing the ",(0,r.kt)("a",{parentName:"li",href:"/v1.2/networking/harvester-network#create-a-vm-network"},"VM network")," that is also carried by ",(0,r.kt)("inlineCode",{parentName:"li"},"mgmt"),". High availability and optimal performance are not guaranteed."))),(0,r.kt)("h3",{id:"cpu-specifications"},"CPU Specifications"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"../vm/live-migration/"},"Live Migration")," functions correctly only if the CPUs of all physical servers in the ",(0,r.kt)("a",{parentName:"p",href:"../glossary#harvester-cluster"},"Harvester cluster")," have the same specifications. This requirement applies to all operations that rely on Live Migration functionality, such as automatic VM migration when ",(0,r.kt)("a",{parentName:"p",href:"../host/#node-maintenance"},"Maintenance Mode")," is enabled."),(0,r.kt)("p",null,"Newer CPUs (even those from the same vendor, generation, and family) can have varying capabilities that may be exposed to VM operating systems. To ensure VM stability, Live Migration checks if the CPU capabilities are consistent, and blocks migration attempts when the source and destination are incompatible. "),(0,r.kt)("p",null,"When creating clusters, adding more hosts to a cluster, and replacing hosts, always use CPUs with the same specifications to prevent operational constraints."),(0,r.kt)("h2",{id:"network-requirements"},"Network Requirements"),(0,r.kt)("p",null,"Harvester nodes have the following network requirements for installation."),(0,r.kt)("h3",{id:"port-requirements-for-harvester-nodes"},"Port Requirements for Harvester Nodes"),(0,r.kt)("p",null,"Harvester nodes require the following port connections or inbound rules. Typically, all outbound traffic is allowed."),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Protocol"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Port"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Source"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2379"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Etcd client port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2381"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Etcd health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2380"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Etcd peer port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10010"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Containerd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6443"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9345"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10252"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10257"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager secure port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10251"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-scheduler health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10259"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-scheduler secure port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10250"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kubelet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-proxy health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10258"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud-controller-manager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9091"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canal calico-node felix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9099"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canal CNI health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8472"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canal CNI with VxLAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2112"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-vip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6444"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RKE2 agent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6060"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Node-disk-manager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10246/10247/10248/10249"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx worker process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8181"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8444"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10245"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"80"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9796"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Node-exporter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"30000-32767"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NodePort port range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"22"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sshd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"68"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Wicked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3260"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"iscsid")))),(0,r.kt)("h3",{id:"port-requirements-for-integrating-harvester-with-rancher"},"Port Requirements for Integrating Harvester with Rancher"),(0,r.kt)("p",null,"If you want to ",(0,r.kt)("a",{parentName:"p",href:"/v1.2/rancher/index"},"integrate Harvester with Rancher"),", you need to make sure that all Harvester nodes can connect to TCP port ",(0,r.kt)("strong",{parentName:"p"},"443")," of the Rancher load balancer."),(0,r.kt)("p",null,"When provisioning VMs with Kubernetes clusters from Rancher into Harvester, you need to be able to connect to TCP port ",(0,r.kt)("strong",{parentName:"p"},"443")," of the Rancher load balancer. Otherwise, the cluster won't be manageable by Rancher. For more information, refer to ",(0,r.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters"},"Rancher Architecture"),"."),(0,r.kt)("h3",{id:"port-requirements-for-k3s-or-rkerke2-clusters"},"Port Requirements for K3s or RKE/RKE2 Clusters"),(0,r.kt)("p",null,"For the port requirements for guest clusters deployed inside Harvester VMs, refer to the following links:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/#networking"},"K3s Networking")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"RKE Ports")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://docs.rke2.io/install/requirements#networking"},"RKE2 Networking"))))}p.isMDXComponent=!0}}]);