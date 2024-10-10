"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[31339],{39696:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>m,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>d});a(67294);var r=a(3905);const n={sidebar_position:1,sidebar_label:"Requirements",title:"Requirements",keywords:["Installation Requirements"],description:"Outline the Harvester installation requirements"},l=void 0,i={unversionedId:"install/requirements",id:"version-v1.0/install/requirements",title:"Requirements",description:"Outline the Harvester installation requirements",source:"@site/versioned_docs/version-v1.0/install/requirements.md",sourceDirName:"install",slug:"/install/requirements",permalink:"/v1.0/install/requirements",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/install/requirements.md",tags:[],version:"v1.0",lastUpdatedAt:1728548032,formattedLastUpdatedAt:"Oct 10, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Requirements",title:"Requirements",keywords:["Installation Requirements"],description:"Outline the Harvester installation requirements"},sidebar:"api",previous:{title:"Harvester Overview",permalink:"/v1.0/"},next:{title:"ISO Installation",permalink:"/v1.0/install/iso-install"}},m={},d=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Networking",id:"networking",level:2},{value:"Harvester Hosts Inbound Rules",id:"harvester-hosts-inbound-rules",level:3},{value:"Integrating Harvester with Rancher",id:"integrating-harvester-with-rancher",level:3},{value:"Guest clusters",id:"guest-clusters",level:4}],s={toc:d},o="wrapper";function p({components:t,...e}){return(0,r.kt)(o,{...s,...e,components:t,mdxType:"MDXLayout"},(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/requirements"})),(0,r.kt)("p",null,"As an HCI solution on bare metal servers, Harvester has some minimum requirements as outlined below."),(0,r.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,r.kt)("p",null,"To get the Harvester server up and running the following minimum hardware is required:"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Requirements"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,r.kt)("td",{parentName:"tr",align:"left"},"x86_64 only. Hardware-assisted virtualization is required. 8-core processor minimum; 16-core or above preferred")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,r.kt)("td",{parentName:"tr",align:"left"},"32 GB minimum, 64 GB or above preferred")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk Capacity"),(0,r.kt)("td",{parentName:"tr",align:"left"},"140 GB minimum for testing, 500 GB or above preferred for production")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Disk Performance"),(0,r.kt)("td",{parentName:"tr",align:"left"},"5,000+ random IOPS per disk(SSD/NVMe). Management nodes (first 3 nodes) must be ",(0,r.kt)("a",{parentName:"td",href:"https://www.suse.com/support/kb/doc/?id=000020100"},"fast enough for etcd"))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Network Card"),(0,r.kt)("td",{parentName:"tr",align:"left"},"1 Gbps Ethernet minimum for testing, 10Gbps Ethernet recommended for production")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"Network Switch"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Trunking of ports required for VLAN support")))),(0,r.kt)("p",null,"  We recommend server-class hardware for best results. Laptops and nested virtualization are not officially supported."),(0,r.kt)("h2",{id:"networking"},"Networking"),(0,r.kt)("h3",{id:"harvester-hosts-inbound-rules"},"Harvester Hosts Inbound Rules"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"left"},"Protocol"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Port"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Source"),(0,r.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2379"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Etcd client port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2381"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Etcd health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2380"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Etcd peer port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10010"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Containerd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6443"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9345"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10252"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10257"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager secure port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10251"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-scheduler health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10259"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-scheduler secure port")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10250"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kubelet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10256"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-proxy health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10258"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Cloud-controller-manager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9091"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canal calico-node felix")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9099"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canal CNI health checks")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8472"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Canal CNI with VxLAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"2112"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Kube-vip")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6444"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"RKE2 agent")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"6060"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Node-disk-manager")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10246/10247/10248/10249"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx worker process")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8181"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"8444"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"10245"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"80"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Nginx")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"9796"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Node-exporter")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"30000-32767"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"NodePort port range")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"22"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"sshd")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"68"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Wicked")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,r.kt)("td",{parentName:"tr",align:"left"},"3260"),(0,r.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,r.kt)("td",{parentName:"tr",align:"left"},"iscsid")))),(0,r.kt)("p",null,"Typically, all outbound traffic will be allowed."),(0,r.kt)("h3",{id:"integrating-harvester-with-rancher"},"Integrating Harvester with Rancher"),(0,r.kt)("p",null,"If you want to ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/rancher/rancher-integration"},"integrate Harvester with Rancher"),", you need to make sure, that all Harvester nodes can connect to TCP port 443 of the Rancher load balancer."),(0,r.kt)("p",null,"The VMs of Kubernetes clusters, that are provisioned from Rancher into Harvester, also need to be able to connect to TCP port 443 of the Rancher load balancer. Otherwise the cluster won't be manageable by Rancher. For more information see also ",(0,r.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/overview/architecture/"},"Rancher Architecture"),"."),(0,r.kt)("h4",{id:"guest-clusters"},"Guest clusters"),(0,r.kt)("p",null,"As for the port requirements for the guest clusters deployed inside Harvester virtual machines, refer to the following links."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"K3s: ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/#networking"},"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/#networking")),(0,r.kt)("li",{parentName:"ul"},"RKE: ",(0,r.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"https://rancher.com/docs/rke/latest/en/os/#ports")),(0,r.kt)("li",{parentName:"ul"},"RKE2: ",(0,r.kt)("a",{parentName:"li",href:"https://docs.rke2.io/install/requirements#networking"},"https://docs.rke2.io/install/requirements#networking"))))}p.isMDXComponent=!0}}]);