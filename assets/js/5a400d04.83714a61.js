"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[25343],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>k});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),d=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=d(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),c=d(r),m=a,k=c["".concat(s,".").concat(m)]||c[m]||u[m]||i;return r?n.createElement(k,o(o({ref:t},p),{},{components:r})):n.createElement(k,o({ref:t},p))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:a,o[1]=l;for(var d=2;d<i;d++)o[d]=r[d];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},10523:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=r(87462),a=(r(67294),r(3905));const i={sidebar_position:2,sidebar_label:"Creating an RKE1 Kubernetes Cluster",title:"Creating an RKE1 Kubernetes Cluster"},o=void 0,l={unversionedId:"rancher/node/rke1-cluster",id:"version-v1.1/rancher/node/rke1-cluster",title:"Creating an RKE1 Kubernetes Cluster",description:"You can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher v2.6.3+ with the built-in Harvester node driver.",source:"@site/versioned_docs/version-v1.1/rancher/node/rke1-cluster.md",sourceDirName:"rancher/node",slug:"/rancher/node/rke1-cluster",permalink:"/v1.1/rancher/node/rke1-cluster",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/rancher/node/rke1-cluster.md",tags:[],version:"v1.1",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Creating an RKE1 Kubernetes Cluster",title:"Creating an RKE1 Kubernetes Cluster"},sidebar:"tutorialSidebar",previous:{title:"Harvester Node Driver",permalink:"/v1.1/rancher/node/node-driver"},next:{title:"Creating an RKE2 Kubernetes Cluster",permalink:"/v1.1/rancher/node/rke2-cluster"}},s={},d=[{value:"Create Your Cloud Credentials",id:"create-your-cloud-credentials",level:3},{value:"Create Node Template",id:"create-node-template",level:3},{value:"Add Node Affinity",id:"add-node-affinity",level:4},{value:"Create RKE1 Kubernetes Cluster",id:"create-rke1-kubernetes-cluster",level:3},{value:"Using Harvester RKE1 Node Driver in Air Gapped Environment",id:"using-harvester-rke1-node-driver-in-air-gapped-environment",level:3}],p={toc:d},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/node/rke1-cluster"})),(0,a.kt)("p",null,"You can now provision RKE1 Kubernetes clusters on top of the Harvester cluster in Rancher ",(0,a.kt)("inlineCode",{parentName:"p"},"v2.6.3+")," with the built-in Harvester node driver."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"rke1-cluster",src:r(72703).Z,width:"5118",height:"1972"})),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"VLAN network is required for Harvester node driver."),(0,a.kt)("li",{parentName:"ul"},"Harvester node driver only supports cloud images."))),(0,a.kt)("p",null,"When you create a Kubernetes cluster hosted by the Harvester infrastructure, ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/#node-templates"},"node templates")," are used to provision the cluster nodes. These templates use Docker Machine configuration options to define an operating system image and settings/parameters for the node."),(0,a.kt)("p",null,"Node templates can use ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud credentials")," to access the credentials information required to provision nodes in the infrastructure providers. The same ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud credentials")," can be used by multiple node templates. By using ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud credentials"),", you do not have to re-enter access keys for the same cloud provider. ",(0,a.kt)("inlineCode",{parentName:"p"},"Cloud credentials")," are stored as Kubernetes secrets."),(0,a.kt)("p",null,"You can create ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud credentials")," in two contexts:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/#node-templates"},"During the creation of a node template")," for a cluster."),(0,a.kt)("li",{parentName:"ul"},"In the User Settings page")),(0,a.kt)("p",null,"All ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud credentials")," are bound to your user profile and cannot be shared with other users."),(0,a.kt)("h3",{id:"create-your-cloud-credentials"},"Create Your Cloud Credentials"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),"."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Harvester"),"."),(0,a.kt)("li",{parentName:"ol"},"Enter your cloud credential name."),(0,a.kt)("li",{parentName:"ol"},'Select "Imported Harvester Cluster".'),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-harvester-cloud-credentials",src:r(18331).Z,width:"1920",height:"969"})),(0,a.kt)("h3",{id:"create-node-template"},"Create Node Template"),(0,a.kt)("p",null,"You can use the Harvester node driver to create node templates and eventually node pools for your Kubernetes cluster."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Configure the  ",(0,a.kt)("strong",{parentName:"li"},"Cloud Credentials"),"."),(0,a.kt)("li",{parentName:"ol"},"Configure ",(0,a.kt)("strong",{parentName:"li"},"Instance Options"),":",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Configure the CPU, memory, and disk"),(0,a.kt)("li",{parentName:"ul"},"Select an OS image that is compatible with the ",(0,a.kt)("inlineCode",{parentName:"li"},"cloud-init")," config."),(0,a.kt)("li",{parentName:"ul"},"Select a network that the node driver is able to connect to; currently, only ",(0,a.kt)("inlineCode",{parentName:"li"},"VLAN")," is supported."),(0,a.kt)("li",{parentName:"ul"},"Enter the SSH User; the username will be used to ssh to nodes. For example, a default user of the Ubuntu cloud image will be ",(0,a.kt)("inlineCode",{parentName:"li"},"ubuntu"),"."))),(0,a.kt)("li",{parentName:"ol"},"(Optional) Configure ",(0,a.kt)("strong",{parentName:"li"},"Advanced Options")," if you want to customise the cloud-init config of the VMs:"),(0,a.kt)("li",{parentName:"ol"},"Enter a ",(0,a.kt)("strong",{parentName:"li"},"RANCHER TEMPLATE")," name.")),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(82e3).Z,width:"1691",height:"1027"})),(0,a.kt)("p",null,"See ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/cluster-provisioning/rke-clusters/node-pools/"},"nodes hosted by an infrastructure provider")," for more information."),(0,a.kt)("h4",{id:"add-node-affinity"},"Add Node Affinity"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.0.3 + Rancher v2.6.7")),(0,a.kt)("p",null,"The Harvester node driver now supports scheduling a group of machines to particular nodes through the node affinity rules, which can provide high availability and better resource utilization."),(0,a.kt)("p",null,"Node affinity can be added to the node template during the cluster creation, click ",(0,a.kt)("inlineCode",{parentName:"p"},"Add Node Template")," or edit your existing node template via ",(0,a.kt)("inlineCode",{parentName:"p"},"RKE1 Configuration > Node Templates"),":"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Check the ",(0,a.kt)("inlineCode",{parentName:"li"},"Advanced Options")," tab and click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Node Selector"),(0,a.kt)("img",{alt:"affinity-add-node-selector",src:r(54750).Z,width:"3366",height:"1144"})),(0,a.kt)("li",{parentName:"ol"},"Set priority to ",(0,a.kt)("inlineCode",{parentName:"li"},"Required")," if you wish the scheduler to schedule the machines only when the rules are met."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Add Rule")," to specify the node affinity rules, e.g., for the ",(0,a.kt)("a",{parentName:"li",href:"/v1.1/rancher/node/node-driver#topology-spread-constraints"},"topology spread constraints")," use case, you can add the ",(0,a.kt)("inlineCode",{parentName:"li"},"region")," and ",(0,a.kt)("inlineCode",{parentName:"li"},"zone")," labels as follows:",(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},"key: topology.kubernetes.io/region\noperator: in list \nvalues: us-east-1\n---\nkey: topology.kubernetes.io/zone\noperator: in list \nvalues: us-east-1a\n")),(0,a.kt)("img",{alt:"affinity-add-rules",src:r(34924).Z,width:"3336",height:"1382"})),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," to save the node template. After the cluster is installed, you can check whether its machine nodes are scheduled accordingly to the affinity rules.")),(0,a.kt)("h3",{id:"create-rke1-kubernetes-cluster"},"Create RKE1 Kubernetes Cluster"),(0,a.kt)("p",null,"Users can create an RKE1 Kubernetes cluster from the ",(0,a.kt)("strong",{parentName:"p"},"Cluster Management")," page via the Harvester RKE1 node driver."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"Clusters")," menu."),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create")," button."),(0,a.kt)("li",{parentName:"ol"},"Toggle Switch to ",(0,a.kt)("strong",{parentName:"li"},"RKE1"),"."),(0,a.kt)("li",{parentName:"ol"},"Select Harvester node driver."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Cluster Name")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Name Prefix")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Enter ",(0,a.kt)("strong",{parentName:"li"},"Template")," (required)."),(0,a.kt)("li",{parentName:"ol"},"Select ",(0,a.kt)("strong",{parentName:"li"},"etcd")," and ",(0,a.kt)("strong",{parentName:"li"},"Control Plane")," (required)."),(0,a.kt)("li",{parentName:"ol"},"On the ",(0,a.kt)("strong",{parentName:"li"},"Cluster Options")," configure ",(0,a.kt)("inlineCode",{parentName:"li"},"Cloud Provider")," to ",(0,a.kt)("inlineCode",{parentName:"li"},"Harvester")," if you want to use the Harvester ",(0,a.kt)("a",{parentName:"li",href:"/v1.1/rancher/cloud-provider"},"Cloud Provider")," and ",(0,a.kt)("a",{parentName:"li",href:"/v1.1/rancher/csi-driver"},"CSI Diver"),".\n",(0,a.kt)("img",{src:r(76107).Z,width:"3890",height:"676"})),(0,a.kt)("li",{parentName:"ol"},"Click ",(0,a.kt)("strong",{parentName:"li"},"Create"),".")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"create-rke-harvester-cluster",src:r(46671).Z,width:"1919",height:"970"})),(0,a.kt)("h3",{id:"using-harvester-rke1-node-driver-in-air-gapped-environment"},"Using Harvester RKE1 Node Driver in Air Gapped Environment"),(0,a.kt)("p",null,"RKE1 provisioning relies on the ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," to get the IP of the virtual machine, and ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," to set up the RKE cluster. However, It may not be feasible to install ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," in an air gapped environment."),(0,a.kt)("p",null,"You can address the installation constraints with the following options:"),(0,a.kt)("p",null,"Option 1. Use a VM image with ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," installed."),(0,a.kt)("p",null,"Option 2. Configure the ",(0,a.kt)("inlineCode",{parentName:"p"},"cloud init")," user data to enable the VMs to install ",(0,a.kt)("inlineCode",{parentName:"p"},"qemu-guest-agent")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"docker")," via an HTTP(S) proxy."),(0,a.kt)("p",null,"Example user data in Harvester node template:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'#cloud-config\napt:\n  http_proxy: http://192.168.0.1:3128\n  https_proxy: http://192.168.0.1:3128\nwrite_files:\n- path: /etc/environment\n  content: |\n    HTTP_PROXY="http://192.168.0.1:3128"\n    HTTPS_PROXY="http://192.168.0.1:3128"\n  append: true\n')))}u.isMDXComponent=!0},54750:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/affinity-add-node-selector-739dd8629cc51f0ccb8a087daf6555a4.png"},34924:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/affinity-add-rules-8bcdbdc4b934146124eb7b92a0d0bb27.png"},18331:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-cloud-credentials-b3b6813e1a8b52c1e0fa45e740f27a23.png"},46671:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/create-rke-harvester-cluster-d8038687882cd19796516efe89c597c6.png"},76107:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/enable-harvester-cloud-provider-033d0453f241f5d84af1fa0335c9a027.png"},82e3:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/node-template-2a9949f1cb7e0acc9b6d9859ed838592.png"},72703:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/rke1-node-driver-f8868c55d2aa08ff3d613ef8c6ce673b.png"}}]);