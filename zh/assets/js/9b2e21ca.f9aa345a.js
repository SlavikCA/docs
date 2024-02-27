"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[57944],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=p(r),h=n,m=c["".concat(s,".").concat(h)]||c[h]||u[h]||i;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=h;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:n,o[1]=l;for(var p=2;p<i;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},24042:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer."},o=void 0,l={unversionedId:"rancher/cloud-provider",id:"version-v1.2/rancher/cloud-provider",title:"Harvester Cloud Provider",description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer.",source:"@site/versioned_docs/version-v1.2/rancher/cloud-provider.md",sourceDirName:"rancher",slug:"/rancher/cloud-provider",permalink:"/zh/v1.2/rancher/cloud-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/rancher/cloud-provider.md",tags:[],version:"v1.2",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer."},sidebar:"docs",previous:{title:"Creating an K3s Kubernetes Cluster",permalink:"/zh/v1.2/rancher/node/k3s-cluster"},next:{title:"Harvester CSI Driver",permalink:"/zh/v1.2/rancher/csi-driver"}},s={},p=[{value:"Backward Compatibility Notice",id:"backward-compatibility-notice",level:3},{value:"Deploying",id:"deploying",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying to the RKE1 Cluster with Harvester Node Driver",id:"deploying-to-the-rke1-cluster-with-harvester-node-driver",level:3},{value:"Deploying to the RKE2 Cluster with Harvester Node Driver",id:"deploying-to-the-rke2-cluster-with-harvester-node-driver",level:3},{value:"Deploying to the RKE2 custom cluster (experimental)",id:"deploying-to-the-rke2-custom-cluster-experimental",level:3},{value:"Deploying to the K3s cluster with Harvester node driver (experimental)",id:"deploying-to-the-k3s-cluster-with-harvester-node-driver-experimental",level:3},{value:"Upgrade Cloud Provider",id:"upgrade-cloud-provider",level:2},{value:"Upgrade RKE2",id:"upgrade-rke2",level:3},{value:"Upgrade RKE/K3s",id:"upgrade-rkek3s",level:3},{value:"Load Balancer Support",id:"load-balancer-support",level:2},{value:"IPAM",id:"ipam",level:3},{value:"Health checks",id:"health-checks",level:2}],d={toc:p},c="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(c,(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/cloud-provider"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/zh/v1.2/rancher/node/rke1-cluster"},"RKE1")," and ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.2/rancher/node/rke2-cluster"},"RKE2")," clusters can be provisioned in Rancher using the built-in Harvester Node Driver. Harvester provides ",(0,n.kt)("a",{parentName:"p",href:"#load-balancer-support"},"load balancer")," and Harvester cluster ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.2/rancher/csi-driver"},"storage passthrough")," support to the guest Kubernetes cluster."),(0,n.kt)("p",null,"In this page we will learn:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How to deploy the Harvester cloud provider in both RKE1 and RKE2 cluster."),(0,n.kt)("li",{parentName:"ul"},"How to use the ",(0,n.kt)("a",{parentName:"li",href:"#load-balancer-support"},"Harvester load balancer"),".")),(0,n.kt)("h3",{id:"backward-compatibility-notice"},"Backward Compatibility Notice"),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Please note a known backward compatibility issue if you're using the Harvester cloud provider version ",(0,n.kt)("strong",{parentName:"p"},"v0.2.2")," or higher. If your Harvester version is below ",(0,n.kt)("strong",{parentName:"p"},"v1.2.0")," and you intend to use newer RKE2 versions (i.e., >= ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.26.6+rke2r1"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.25.11+rke2r1"),", ",(0,n.kt)("inlineCode",{parentName:"p"},"v1.24.15+rke2r1"),"), it is essential to upgrade your Harvester cluster to v1.2.0 or a higher version before proceeding with the upgrade of the guest Kubernetes cluster or Harvester cloud provider."),(0,n.kt)("p",{parentName:"admonition"},"For a detailed support matrix, please refer to the ",(0,n.kt)("strong",{parentName:"p"},"Harvester CCM & CSI Driver with RKE2 Releases")," section of the official ",(0,n.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/"},"website"),".")),(0,n.kt)("h2",{id:"deploying"},"Deploying"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester virtual machines."),(0,n.kt)("li",{parentName:"ul"},"The Harvester virtual machines run as guest Kubernetes nodes are in the same namespace."),(0,n.kt)("li",{parentName:"ul"},"The Harvester virtual machine guests' hostnames match their corresponding Harvester virtual machine names. Guest cluster Harvester VMs can't have different hostnames than their Harvester VM names when using the Harvester CSI driver. We hope ",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4396"},"to remove this limitation")," in a future release of Harvester.")),(0,n.kt)("h3",{id:"deploying-to-the-rke1-cluster-with-harvester-node-driver"},"Deploying to the RKE1 Cluster with Harvester Node Driver"),(0,n.kt)("p",null,"When spinning up an RKE cluster using the Harvester node driver, you can perform two steps to deploy the ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester")," cloud provider:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester(Out-of-tree)")," option."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(91855).Z,width:"2180",height:"223"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Cloud Provider")," from the Rancher marketplace."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(13417).Z,width:"2548",height:"389"})))),(0,n.kt)("h3",{id:"deploying-to-the-rke2-cluster-with-harvester-node-driver"},"Deploying to the RKE2 Cluster with Harvester Node Driver"),(0,n.kt)("p",null,"When spinning up an RKE2 cluster using the Harvester node driver, select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester")," cloud provider. The node driver will then help deploy both the CSI driver and CCM automatically."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{src:r(60830).Z,width:"2238",height:"646"})),(0,n.kt)("h3",{id:"deploying-to-the-rke2-custom-cluster-experimental"},"Deploying to the RKE2 custom cluster (experimental)"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(37083).Z,width:"3496",height:"1846"})),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"generate_addon.sh")," to generate a cloud-config and place it into the directory ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/kubernetes/cloud-config")," on every custom node."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"curl -sfL https://raw.githubusercontent.com/harvester/cloud-provider-harvester/master/deploy/generate_addon.sh | bash -s <serviceaccount name> <namespace> \n")),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"generate_addon.sh")," script depends on ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"jq")," to operate the Harvester cluster."),(0,n.kt)("p",{parentName:"admonition"},"The script needs access to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Cluster")," kubeconfig to work. You can find the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file from one of the Harvester management nodes in the ",(0,n.kt)("inlineCode",{parentName:"p"},"/etc/rancher/rke2/rke2.yaml")," path."),(0,n.kt)("p",{parentName:"admonition"},"The namespace needs to be the namespace in which the guest cluster will be created.")))),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Configure the ",(0,n.kt)("strong",{parentName:"li"},"Cloud Provider")," to ",(0,n.kt)("inlineCode",{parentName:"li"},"Harvester")," and select ",(0,n.kt)("strong",{parentName:"li"},"Create")," to spin up the cluster.\n",(0,n.kt)("img",{src:r(67535).Z,width:"2496",height:"1498"}))),(0,n.kt)("h3",{id:"deploying-to-the-k3s-cluster-with-harvester-node-driver-experimental"},"Deploying to the K3s cluster with Harvester node driver (experimental)"),(0,n.kt)("p",null,"When spinning up a K3s cluster using the Harvester node driver, you can perform the following steps to deploy the harvester cloud provider:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Use ",(0,n.kt)("inlineCode",{parentName:"p"},"generate_addon.sh")," to generate cloud config."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"curl -sfL https://raw.githubusercontent.com/harvester/cloud-provider-harvester/master/deploy/generate_addon.sh | bash -s <serviceaccount name> <namespace>\n")),(0,n.kt)("p",{parentName:"li"},"The output will look as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"########## cloud config ############\napiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: <CACERT>\n    server: https://HARVESTER-ENDPOINT/k8s/clusters/local\n  name: local\ncontexts:\n- context:\n    cluster: local\n    namespace: default\n    user: harvester-cloud-provider-default-local\n  name: harvester-cloud-provider-default-local\ncurrent-context: harvester-cloud-provider-default-local\nkind: Config\npreferences: {}\nusers:\n- name: harvester-cloud-provider-default-local\n  user:\n    token: <TOKEN>\n    \n    \n########## cloud-init user data ############\nwrite_files:\n- encoding: b64\n  content: <CONTENT>\n  owner: root:root\n  path: /etc/kubernetes/cloud-config\n  permissions: '0644'\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Copy and paste the ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-init user data")," content to ",(0,n.kt)("strong",{parentName:"p"},"Machine Pools >Show Advanced > User Data"),".\n",(0,n.kt)("img",{src:r(66324).Z,width:"2010",height:"1088"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Add the following ",(0,n.kt)("inlineCode",{parentName:"p"},"HelmChart")," yaml of ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-cloud-provider")," to ",(0,n.kt)("strong",{parentName:"p"},"Cluster Configuration > Add-On Config > Additional Manifest"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: harvester-cloud-provider\n  namespace: kube-system\nspec:\n  targetNamespace: kube-system\n  bootstrap: true\n  repo: https://charts.harvesterhci.io/\n  chart: harvester-cloud-provider\n  version: 0.2.2\n  helmVersion: v3\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(65231).Z,width:"2316",height:"1235"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Disable the ",(0,n.kt)("inlineCode",{parentName:"p"},"in-tree")," cloud provider in the following ways:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit as YAML")," button.")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(97513).Z,width:"2324",height:"1230"})),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Disable ",(0,n.kt)("inlineCode",{parentName:"li"},"servicelb")," and set ",(0,n.kt)("inlineCode",{parentName:"li"},"disable-cloud-controller: true")," to disable the default K3s cloud controller.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"    machineGlobalConfig:\n      disable:\n        - servicelb\n      disable-cloud-controller: true\n")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"cloud-provider=external")," to use the Harvester cloud provider.")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"    machineSelectorConfig:\n      - config:\n          kubelet-arg:\n          - cloud-provider=external\n          protect-kernel-defaults: false\n")),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(4273).Z,width:"1398",height:"1153"})))),(0,n.kt)("p",null,"With these settings in place a K3s cluster should provision successfully while using the external cloud provider."),(0,n.kt)("h2",{id:"upgrade-cloud-provider"},"Upgrade Cloud Provider"),(0,n.kt)("h3",{id:"upgrade-rke2"},"Upgrade RKE2"),(0,n.kt)("p",null,"The cloud provider can be upgraded by upgrading the RKE2 version. You can upgrade the RKE2 cluster via the Rancher UI as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"Find the guest cluster that you want to upgrade and select \u22ee ",(0,n.kt)("strong",{parentName:"li"},"> Edit Config"),"."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Kubernetes Version"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("h3",{id:"upgrade-rkek3s"},"Upgrade RKE/K3s"),(0,n.kt)("p",null,"RKE/K3s upgrade cloud provider via the Rancher UI, as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > RKE/K3s Cluster > Apps > Installed Apps"),"."),(0,n.kt)("li",{parentName:"ol"},"Find the cloud provider chart and select \u22ee ",(0,n.kt)("strong",{parentName:"li"},"> Edit/Upgrade"),"."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Version"),". "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Next > Update"),".")),(0,n.kt)("h2",{id:"load-balancer-support"},"Load Balancer Support"),(0,n.kt)("p",null,"Once you've deployed the Harvester cloud provider, you can leverage the Kubernetes ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service to expose a microservice within the guest cluster to the external world. Creating a Kubernetes ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service assigns a dedicated Harvester load balancer to the service, and you can make adjustments through the ",(0,n.kt)("inlineCode",{parentName:"p"},"Add-on Config")," within the Rancher UI."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(30623).Z,width:"3068",height:"988"})),(0,n.kt)("h3",{id:"ipam"},"IPAM"),(0,n.kt)("p",null,"Harvester's built-in load balancer offers both ",(0,n.kt)("strong",{parentName:"p"},"DHCP")," and ",(0,n.kt)("strong",{parentName:"p"},"Pool")," modes, and you can configure it by adding the annotation ",(0,n.kt)("inlineCode",{parentName:"p"},"cloudprovider.harvesterhci.io/ipam: $mode")," to its corresponding service. Starting from Harvester cloud provider >= v0.2.0, it also introduces a unique ",(0,n.kt)("strong",{parentName:"p"},"Share IP")," mode. A service shares its load balancer IP with other services in this mode."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"DCHP:")," A DHCP server is required. The Harvester load balancer will request an IP address from the DHCP server.")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Pool:")," An ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.2/networking/ippool"},"IP pool")," must be configured first. The Harvester load balancer controller will allocate an IP for the load balancer service following ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.2/networking/ippool#selection-policy"},"the IP pool selection policy"),".")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("strong",{parentName:"p"},"Share IP:")," When creating a new load balancer service, you can re-utilize an existing load balancer service IP. The new service is referred to as a secondary service, while the currently chosen service is the primary one. To specify the primary service in the secondary service, you can add the annotation ",(0,n.kt)("inlineCode",{parentName:"p"},"cloudprovider.harvesterhci.io/primary-service: $primary-service-name"),".  However, there are two known limitations:"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Services that share the same IP address can't use the same port."),(0,n.kt)("li",{parentName:"ul"},"Secondary services cannot share their IP with additional services.")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Modifying the ",(0,n.kt)("inlineCode",{parentName:"p"},"IPAM")," mode isn't allowed. You must create a new service if you intend to change the ",(0,n.kt)("inlineCode",{parentName:"p"},"IPAM")," mode.")),(0,n.kt)("h2",{id:"health-checks"},"Health checks"),(0,n.kt)("p",null,"Beginning with Harvester cloud provider v0.2.0, additional health checks of the ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service within the guest Kubernetes cluster are no longer necessary. Instead, you can configure ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-a-tcp-liveness-probe"},"liveness")," and ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/tasks/configure-pod-container/configure-liveness-readiness-startup-probes/#define-readiness-probes"},"readiness")," probes for your workloads. Consequently, any unavailable pods will be automatically removed from the load balancer endpoints to achieve the same desired outcome."))}u.isMDXComponent=!0},66324:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cloud-config-userdata-8578bb17090db81956d319d54b6ee7d3.png"},67535:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/create-custom-rke2-e44a04b870f56c65b818571cf71ae0da.png"},37083:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/custom-8454eeefeca134d7084eb3c36f0bc250.png"},97513:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/edit-k3s-cluster-yaml-57987c1e6b13eeca3c09b8efd1c6838e.png"},65231:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/external-cloud-provider-addon-fe7c7599805e615aec470224221f9ac7.png"},13417:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install-harvester-cloud-provider-b0d92a6086c0f150b419e02fb4663a75.png"},4273:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/k3s-cluster-yaml-content-for-harvester-cloud-provider-5c6769285a078298e5873e18aa3747f1.png"},30623:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/lb-svc-30c5203b63d74ff88f155f8edf334fab.png"},91855:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke-cloud-provider-1b375dbb96aba32a2b7f2b81357e98b8.png"},60830:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke2-cloud-provider-bcb7c991d0e6f041009c4920472d8ea8.png"}}]);