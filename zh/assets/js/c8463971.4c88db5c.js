"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[951],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},h="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),h=c(r),d=n,m=h["".concat(l,".").concat(d)]||h[d]||p[d]||i;return r?a.createElement(m,o(o({ref:t},u),{},{components:r})):a.createElement(m,o({ref:t},u))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=r[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},90201:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const i={id:"index",sidebar_position:1,sidebar_label:"Rancher Integration",title:"Rancher Integration",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],Description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},o=void 0,s={unversionedId:"rancher/index",id:"version-v1.2/rancher/index",title:"Rancher Integration",description:"Rancher is an open-source multi-cluster management platform. Starting with Rancher v2.6.1, Rancher has integrated Harvester by default to centrally manage VMs and containers.",source:"@site/versioned_docs/version-v1.2/rancher/rancher-integration.md",sourceDirName:"rancher",slug:"/rancher/index",permalink:"/zh/v1.2/rancher/index",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/rancher/rancher-integration.md",tags:[],version:"v1.2",sidebarPosition:1,frontMatter:{id:"index",sidebar_position:1,sidebar_label:"Rancher Integration",title:"Rancher Integration",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],Description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},sidebar:"docs",previous:{title:"Rancher Manager",permalink:"/zh/v1.2/advanced/addons/rancher-vcluster"},next:{title:"Virtualization Management",permalink:"/zh/v1.2/rancher/virtualization-management"}},l={},c=[{value:"Deploying Rancher server",id:"deploying-rancher-server",level:2},{value:"Virtualization management",id:"virtualization-management",level:2},{value:"Creating Kubernetes clusters using the Harvester node driver",id:"creating-kubernetes-clusters-using-the-harvester-node-driver",level:2},{value:"Harvester baremetal container workload support (experimental)",id:"harvester-baremetal-container-workload-support-experimental",level:2},{value:"Key Features",id:"key-features",level:3}],u={toc:c},h="wrapper";function p(e){let{components:t,...i}=e;return(0,n.kt)(h,(0,a.Z)({},u,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/rancher-integration"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher"},"Rancher")," is an open-source multi-cluster management platform. Starting with Rancher v2.6.1, Rancher has integrated Harvester by default to centrally manage VMs and containers."),(0,n.kt)("p",null,"Users can import and manage multiple Harvester clusters using the Rancher ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.2/rancher/virtualization-management"},"Virtualization Management")," feature. Leveraging the Rancher's ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/authentication-config"},"authentication")," feature and ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/manage-role-based-access-control-rbac"},"RBAC control")," for ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.2/rancher/virtualization-management#multi-tenancy"},"multi-tenancy")," support."),(0,n.kt)("p",null,"For a comprehensive overview of the support matrix, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/"},"Harvester & Rancher Support Matrix"),"."),(0,n.kt)("p",null,"For the network requirements, please refer to the doc ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.2/install/requirements#network-requirements"},"here"),"."),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/fyxDm3HVwWI",title:"YouTube video player",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"virtualization-management",src:r(88085).Z,width:"5114",height:"1796"})),(0,n.kt)("h2",{id:"deploying-rancher-server"},"Deploying Rancher server"),(0,n.kt)("p",null,"To use Rancher with Harvester, please install Rancher on a separate server. If you want to try out the integration features, you can create a VM in Harvester and install the Rancher server by following the ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"},"Helm CLI quick start"),"."),(0,n.kt)("p",null,"For production setup, please use one of the following guides to deploy and provision Rancher and a Kubernetes cluster with the provider of your choice:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/pages-for-subheaders/deploy-rancher-manager"},"AWS")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/aws-marketplace"},"AWS Marketplace")," (uses Amazon EKS)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/azure"},"Azure")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/digitalocean"},"DigitalOcean")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/gcp"},"GCP")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/hetzner-cloud"},"Hetzner Cloud")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/vagrant"},"Vagrant")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/equinix-metal"},"Equinix Metal")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/outscale-qs"},"Outscale")," (uses Terraform)")),(0,n.kt)("p",null,"If you prefer, the following guide will take you through the same process in individual steps. Use this if you want to run Rancher in a different provider, on prem, or if you want to see how easy it is."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://ranchermanager.docs.rancher.com/v2.7/getting-started/quick-start-guides/deploy-rancher-manager/helm-cli"},"Manual Install"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Do not install Rancher with Docker in production"),". Otherwise, your environment may be damaged, and your cluster may not be abled to be recovered. Installing Rancher in Docker should only be used for quick evaluation and testing purposes.")),(0,n.kt)("h2",{id:"virtualization-management"},"Virtualization management"),(0,n.kt)("p",null,"With Rancher's virtualization management feature, you can import and manage your Harvester cluster. By clicking one of the imported clusters, you can easily access and manage a range of Harvester cluster resources, including hosts, VMs, images, volumes, and more.\nAdditionally, the virtualization management feature leverages Rancher's existing capabilities, such as authentication with various auth providers and multi-tenancy support."),(0,n.kt)("p",null,"For in-depth insights, please refer to the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.2/rancher/virtualization-management"},"virtualization management")," page."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"import-cluster",src:r(79546).Z,width:"2559",height:"988"})),(0,n.kt)("h2",{id:"creating-kubernetes-clusters-using-the-harvester-node-driver"},"Creating Kubernetes clusters using the Harvester node driver"),(0,n.kt)("p",null,"You can launch a Kubernetes cluster from Rancher using the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.2/rancher/node/node-driver"},"Harvester node driver"),". When Rancher deploys Kubernetes onto these nodes, you can choose between Rancher Kubernetes Engine (RKE) or RKE2 distributions."),(0,n.kt)("p",null,"One benefit of installing Kubernetes on node pools hosted by the node driver is that if a node loses connectivity with the cluster, Rancher can automatically create another node to join the cluster to ensure that the count of the node pool is as expected."),(0,n.kt)("p",null,"Starting from Rancher version ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.1"),", the Harvester node driver is included by default. You can refer to the ",(0,n.kt)("a",{parentName:"p",href:"/zh/v1.2/rancher/node/node-driver"},"node-driver")," page for more details."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"harvester-node-driver",src:r(32779).Z,width:"3058",height:"1466"})),(0,n.kt)("h2",{id:"harvester-baremetal-container-workload-support-experimental"},"Harvester baremetal container workload support (experimental)"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of Harvester v1.2.0 + Rancher v2.7.6")),(0,n.kt)("p",null,"Starting with Rancher v2.7.6, Harvester introduces a new feature that enables you to deploy and manage container workloads directly to the underlying Harvester cluster. With this feature, you can seamlessly combine the power of virtual machines with the flexibility of containerization, allowing for a more versatile and efficient infrastructure setup."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"harvester-container-dashboard",src:r(63328).Z,width:"5098",height:"2582"})),(0,n.kt)("p",null,"This guide will walk you through enabling and using this experimental feature, highlighting its capabilities and best practices."),(0,n.kt)("p",null,"To enable this new feature flag, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click the hamburger menu and choose the ",(0,n.kt)("strong",{parentName:"li"},"Global Settings")," tab."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Feature Flags")," and locate the new feature flag ",(0,n.kt)("inlineCode",{parentName:"li"},"harvester-baremetal-container-workload"),"."),(0,n.kt)("li",{parentName:"ol"},"Click the drop-down menu and select ",(0,n.kt)("strong",{parentName:"li"},"Activate")," to enable this feature."),(0,n.kt)("li",{parentName:"ol"},"If the feature state changes to ",(0,n.kt)("strong",{parentName:"li"},"Active"),", the feature is successfully enabled.")),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"harvester-baremetal-container-workload-feature",src:r(37381).Z,width:"5036",height:"1814"})),(0,n.kt)("h3",{id:"key-features"},"Key Features"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Unified Dashboard View:"),"\nOnce you've enabled the feature, you can explore the dashboard view of the Harvester cluster, just like you would with other standard Kubernetes clusters. This unified experience simplifies the management and monitoring of both your virtual machines and container workloads from a single, user-friendly interface."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Deploy Custom Workloads:"),"\nThis feature lets you deploy custom container workloads directly to the bare-metal Harvester cluster. While this functionality is experimental, it introduces exciting possibilities for optimizing your infrastructure. However, we recommend deploying container and VM workloads in separate namespaces to ensure clarity and separation."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Critical system components such as monitoring, logging, Rancher, KubeVirt, and Longhorn are all managed by the Harvester cluster itself. You can't upgrade or modify these components. Therefore, exercise caution and avoid making changes to these critical system components."),(0,n.kt)("li",{parentName:"ul"},"It is essential not to deploy any workloads to the system namespaces ",(0,n.kt)("inlineCode",{parentName:"li"},"cattle-system"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"harvester-system"),", or ",(0,n.kt)("inlineCode",{parentName:"li"},"longhorn-system"),". Keeping your workloads in separate namespaces is crucial to maintaining clarity and preserving the integrity of the system components."),(0,n.kt)("li",{parentName:"ul"},"For best practices, we recommend deploying container and VM workloads in separate namespaces."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"With this feature enabled, your Harvester cluster does not appear on the ",(0,n.kt)("strong",{parentName:"p"},"Continuous Delivery")," page in the Rancher UI. Please check the issue ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/4482"},"#4482")," for further updates.")))}p.isMDXComponent=!0},37381:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harvester-baremetal-container-workload-feature-cf0debef00919e57068c1effad8948ea.png"},63328:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harvester-container-dashboard-5b4d2c48134341574bf6d37e2a02b9d8.png"},32779:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/harvester-node-driver-0f96d4d50096df390e979d33a58fea16.png"},79546:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/import-harvester-cluster-f79a5e502100ff314e9e6405e39c7dcc.png"},88085:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/virtualization-management-18bf128eb90c9308b712a84414bbdff3.png"}}]);