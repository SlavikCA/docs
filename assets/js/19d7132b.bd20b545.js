"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6447],{3905:(t,e,r)=>{r.d(e,{Zo:()=>s,kt:()=>g});var a=r(67294);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function o(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var m=a.createContext({}),d=function(t){var e=a.useContext(m),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=d(t.components);return a.createElement(m.Provider,{value:e},t.children)},p="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},f=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,m=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),p=d(r),f=n,g=p["".concat(m,".").concat(f)]||p[f]||k[f]||l;return r?a.createElement(g,i(i({ref:e},s),{},{components:r})):a.createElement(g,i({ref:e},s))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=f;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[p]="string"==typeof t?t:n,i[1]=o;for(var d=2;d<l;d++)i[d]=r[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}f.displayName="MDXCreateElement"},56200:(t,e,r)=>{r.r(e),r.d(e,{assets:()=>m,contentTitle:()=>i,default:()=>k,frontMatter:()=>l,metadata:()=>o,toc:()=>d});var a=r(87462),n=(r(67294),r(3905));const l={id:"requirements",sidebar_position:1,sidebar_label:"Hardware and Network Requirements",title:"Hardware and Network Requirements",keywords:["Installation Requirements"],Description:"Outline the Harvester installation requirements"},i=void 0,o={unversionedId:"install/requirements",id:"version-v1.2/install/requirements",title:"Hardware and Network Requirements",description:"As an HCI solution on bare metal servers, there are minimum node hardware and network requirements for installing and running Harvester.",source:"@site/versioned_docs/version-v1.2/install/requirements.md",sourceDirName:"install",slug:"/install/requirements",permalink:"/v1.2/install/requirements",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/install/requirements.md",tags:[],version:"v1.2",sidebarPosition:1,frontMatter:{id:"requirements",sidebar_position:1,sidebar_label:"Hardware and Network Requirements",title:"Hardware and Network Requirements",keywords:["Installation Requirements"],Description:"Outline the Harvester installation requirements"},sidebar:"docs",previous:{title:"Harvester Overview",permalink:"/v1.2/"},next:{title:"ISO Installation",permalink:"/v1.2/install/index"}},m={},d=[{value:"Hardware Requirements",id:"hardware-requirements",level:2},{value:"Network Requirements",id:"network-requirements",level:2},{value:"Port Requirements for Harvester Nodes",id:"port-requirements-for-harvester-nodes",level:3},{value:"Port Requirements for Integrating Harvester with Rancher",id:"port-requirements-for-integrating-harvester-with-rancher",level:3},{value:"Port Requirements for K3s or RKE/RKE2 Clusters",id:"port-requirements-for-k3s-or-rkerke2-clusters",level:3}],s={toc:d},p="wrapper";function k(t){let{components:e,...r}=t;return(0,n.kt)(p,(0,a.Z)({},s,r,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/requirements"})),(0,n.kt)("p",null,"As an HCI solution on bare metal servers, there are minimum node hardware and network requirements for installing and running Harvester."),(0,n.kt)("p",null,"A three-node cluster is required to fully realize the multi-node features of Harvester. The first node that is added to the cluster is by default the management node. When the cluster has three or more nodes, the two nodes added after the first are automatically promoted to management nodes to form a high availability (HA) cluster."),(0,n.kt)("p",null,"Certain versions of Harvester support the deployment of ",(0,n.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/advanced/singlenodeclusters"},"single-node clusters"),". Such clusters do not support high availability, multiple replicas, and live migration."),(0,n.kt)("h2",{id:"hardware-requirements"},"Hardware Requirements"),(0,n.kt)("p",null,"Harvester nodes have the following hardware requirements and recommendations for installation and testing."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Requirements and Recommendations"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"x86_64 only. Hardware-assisted virtualization is required. 8-core processor minimum for testing; 16-core or above required for production")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Memory"),(0,n.kt)("td",{parentName:"tr",align:"left"},"32 GB minimum for testing; 64 GB or above required for production")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk Capacity"),(0,n.kt)("td",{parentName:"tr",align:"left"},"250 GB minimum for testing (180 GB minimum when using multiple disks); 500 GB or above required for production")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Disk Performance"),(0,n.kt)("td",{parentName:"tr",align:"left"},"5,000+ random IOPS per disk(SSD/NVMe). Management nodes (first 3 nodes) must be ",(0,n.kt)("a",{parentName:"td",href:"https://www.suse.com/support/kb/doc/?id=000020100"},"fast enough for etcd"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network Card"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1 Gbps Ethernet minimum for testing; 10Gbps Ethernet required for production")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Network Switch"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Trunking of ports required for VLAN support")))),(0,n.kt)("admonition",{title:"important",type:"info"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Use server-class hardware to achieve the best results. Laptops and nested virtualization are not supported."),(0,n.kt)("li",{parentName:"ul"},"Each node must have a unique ",(0,n.kt)("inlineCode",{parentName:"li"},"product_uuid")," (fetched from ",(0,n.kt)("inlineCode",{parentName:"li"},"/sys/class/dmi/id/product_uuid"),") to prevent errors from occurring during VM live migration and other operations. For more information, see ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4025"},"Issue #4025"),"."))),(0,n.kt)("h2",{id:"network-requirements"},"Network Requirements"),(0,n.kt)("p",null,"Harvester nodes have the following network requirements for installation."),(0,n.kt)("h3",{id:"port-requirements-for-harvester-nodes"},"Port Requirements for Harvester Nodes"),(0,n.kt)("p",null,"Harvester nodes require the following port connections or inbound rules. Typically, all outbound traffic is allowed."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Protocol"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Port"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Source"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2379"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Etcd client port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2381"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Etcd health checks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2380"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Etcd peer port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10010"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Containerd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6443"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9345"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10252"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager health checks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10257"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager secure port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10251"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-scheduler health checks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10259"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-scheduler secure port")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10250"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubelet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10256"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-proxy health checks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10258"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-controller-manager")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9091"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Canal calico-node felix")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9099"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Canal CNI health checks")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8472"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Canal CNI with VxLAN")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2112"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-vip")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6444"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RKE2 agent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6060"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-disk-manager")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10246/10247/10248/10249"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx worker process")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8181"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8444"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10245"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"80"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9796"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-exporter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"30000-32767"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NodePort port range")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sshd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"68"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Wicked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3260"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester management and compute nodes"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iscsid")))),(0,n.kt)("h3",{id:"port-requirements-for-integrating-harvester-with-rancher"},"Port Requirements for Integrating Harvester with Rancher"),(0,n.kt)("p",null,"If you want to ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/rancher/index"},"integrate Harvester with Rancher"),", you need to make sure that all Harvester nodes can connect to TCP port ",(0,n.kt)("strong",{parentName:"p"},"443")," of the Rancher load balancer."),(0,n.kt)("p",null,"When provisioning VMs with Kubernetes clusters from Rancher into Harvester, you need to be able to connect to TCP port ",(0,n.kt)("strong",{parentName:"p"},"443")," of the Rancher load balancer. Otherwise, the cluster won't be manageable by Rancher. For more information, refer to ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/reference-guides/rancher-manager-architecture/communicating-with-downstream-user-clusters"},"Rancher Architecture"),"."),(0,n.kt)("h3",{id:"port-requirements-for-k3s-or-rkerke2-clusters"},"Port Requirements for K3s or RKE/RKE2 Clusters"),(0,n.kt)("p",null,"For the port requirements for guest clusters deployed inside Harvester VMs, refer to the following links:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/#networking"},"K3s Networking")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"RKE Ports")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://docs.rke2.io/install/requirements#networking"},"RKE2 Networking"))))}k.isMDXComponent=!0}}]);