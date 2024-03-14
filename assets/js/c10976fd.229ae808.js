"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[36178],{3905:(e,r,t)=>{t.d(r,{Zo:()=>u,kt:()=>d});var a=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)t=i[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),m=n,d=p["".concat(c,".").concat(m)]||p[m]||h[m]||i;return t?a.createElement(d,o(o({ref:r},u),{},{components:t})):a.createElement(d,o({ref:r},u))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,o=new Array(i);o[0]=m;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var l=2;l<i;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73220:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var a=t(87462),n=(t(67294),t(3905));const i={sidebar_position:1,sidebar_label:"Rancher Integration",title:"Rancher Integration",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},o=void 0,s={unversionedId:"rancher/rancher-integration",id:"version-v1.1/rancher/rancher-integration",title:"Rancher Integration",description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1.",source:"@site/versioned_docs/version-v1.1/rancher/rancher-integration.md",sourceDirName:"rancher",slug:"/rancher/rancher-integration",permalink:"/v1.1/rancher/rancher-integration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/rancher/rancher-integration.md",tags:[],version:"v1.1",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"Rancher Integration",title:"Rancher Integration",keywords:["Harvester","harvester","Rancher","rancher","Rancher Integration"],description:"Rancher is an open source multi-cluster management platform. Harvester has integrated Rancher by default starting with Rancher v2.6.1."},sidebar:"tutorialSidebar",previous:{title:"PCI Devices",permalink:"/v1.1/advanced/pcidevices"},next:{title:"Virtualization Management",permalink:"/v1.1/rancher/virtualization-management"}},c={},l=[{value:"Rancher &amp; Harvester Support Matrix",id:"rancher--harvester-support-matrix",level:2},{value:"Deploying Rancher Server",id:"deploying-rancher-server",level:2},{value:"Virtualization Management",id:"virtualization-management",level:2},{value:"Creating Kubernetes Clusters using the Harvester Node Driver",id:"creating-kubernetes-clusters-using-the-harvester-node-driver",level:2}],u={toc:l},p="wrapper";function h(e){let{components:r,...i}=e;return(0,n.kt)(p,(0,a.Z)({},u,i,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/rancher/index"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://github.com/rancher/rancher"},"Rancher")," is an open-source multi-cluster management platform. Starting with Rancher v2.6.1, Rancher has integrated Harvester by default to centrally manage VMs and containers."),(0,n.kt)("h2",{id:"rancher--harvester-support-matrix"},"Rancher & Harvester Support Matrix"),(0,n.kt)("p",null,"For the support matrix, please see ",(0,n.kt)("a",{parentName:"p",href:"https://www.suse.com/suse-harvester/support-matrix/all-supported-versions/harvester-v1-1-1/#anchor-h4-item2"},"Harvester & Rancher Support Matrix"),"."),(0,n.kt)("p",null,"Users can now import and manage multiple Harvester clusters using the Rancher ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/virtualization-management"},"Virtualization Management")," page and leverage the Rancher ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.6/pages-for-subheaders/authentication-config"},"authentication")," feature and RBAC control for ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"multi-tenancy")," support."),(0,n.kt)("div",{class:"text-center"},(0,n.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/fyxDm3HVwWI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"virtualization-management",src:t(66755).Z,width:"5114",height:"1796"})),(0,n.kt)("h2",{id:"deploying-rancher-server"},"Deploying Rancher Server"),(0,n.kt)("p",null,"To use Rancher with Harvester, please install the Rancher and Harvester in two separated servers. If you want to try out the integration features, you can create a VM in Harvester and install Rancher v2.6.3 or above (the latest stable version is recommended)."),(0,n.kt)("p",null,"Use one of the following guides to deploy and provision Rancher and a Kubernetes cluster with the provider of your choice:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/amazon-aws-qs/"},"AWS")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/amazon-aws-marketplace-qs/"},"AWS Marketplace")," (uses Amazon EKS)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/microsoft-azure-qs/"},"Azure")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/digital-ocean-qs/"},"DigitalOcean")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/google-gcp-qs/"},"GCP")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/hetzner-cloud-qs/"},"Hetzner Cloud")," (uses Terraform)"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/quickstart-vagrant/"},"Vagrant")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/equinix-metal-qs/"},"Equinix Metal"))),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},(0,n.kt)("strong",{parentName:"p"},"Do not install Rancher with Docker in production"),". Otherwise, your environment may be damaged and your cluster may not be recovered. Installing Rancher in Docker should only be used for quick evaluation and testing purposes."),(0,n.kt)("p",{parentName:"admonition"},"To install Rancher with Docker:"),(0,n.kt)("ol",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ol"},"Begin creation of a custom cluster by provisioning a Linux host. Your host can be any of the following:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A cloud-hosted virtual machine (VM)"),(0,n.kt)("li",{parentName:"ul"},"An on-premises VM"),(0,n.kt)("li",{parentName:"ul"},"A bare-metal server"))),(0,n.kt)("li",{parentName:"ol"},"Log into your Linux host using your preferred shell, such as PuTTy or a remote terminal connection."),(0,n.kt)("li",{parentName:"ol"},"From your shell, enter the following command:")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# for a quick evaluation, you can run the Rancher server with the following command\n$ sudo docker run -d --restart=unless-stopped -v /opt/rancher:/var/lib/rancher -p 80:80 -p 443:443 --privileged rancher/rancher:v2.6.9\n"))),(0,n.kt)("h2",{id:"virtualization-management"},"Virtualization Management"),(0,n.kt)("p",null,"With Rancher's Virtualization Management feature, you can now import and manage Harvester clusters.\nBy clicking on one of the clusters, you are able to view and manage the imported Harvester cluster resources like Hosts, VMs, images, volumes, etc. Additionally, the ",(0,n.kt)("inlineCode",{parentName:"p"},"Virtualization Management")," leverages existing Rancher features such as authentication with various auth providers and multi-tenant support."),(0,n.kt)("p",null,"For more details, please check the ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/virtualization-management"},"virtualization management")," page."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"import-cluster",src:t(18530).Z,width:"2559",height:"988"})),(0,n.kt)("h2",{id:"creating-kubernetes-clusters-using-the-harvester-node-driver"},"Creating Kubernetes Clusters using the Harvester Node Driver"),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/node/node-driver"},"Harvester node driver")," is used to provision VMs in the Harvester cluster, which Rancher uses to launch and manage guest Kubernetes clusters."),(0,n.kt)("p",null,"Starting with Rancher ",(0,n.kt)("inlineCode",{parentName:"p"},"v2.6.1"),", the Harvester node driver has been added by default. Users can reference the ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/node/node-driver"},"node-driver")," page for more details."))}h.isMDXComponent=!0},18530:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/import-harvester-cluster-f79a5e502100ff314e9e6405e39c7dcc.png"},66755:(e,r,t)=>{t.d(r,{Z:()=>a});const a=t.p+"assets/images/virtualization-management-18bf128eb90c9308b712a84414bbdff3.png"}}]);