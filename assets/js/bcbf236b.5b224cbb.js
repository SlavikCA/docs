"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[61551],{46327:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const l={sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer."},i=void 0,o={unversionedId:"rancher/cloud-provider",id:"version-v1.1/rancher/cloud-provider",title:"Harvester Cloud Provider",description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer.",source:"@site/versioned_docs/version-v1.1/rancher/cloud-provider.md",sourceDirName:"rancher",slug:"/rancher/cloud-provider",permalink:"/v1.1/rancher/cloud-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/rancher/cloud-provider.md",tags:[],version:"v1.1",lastUpdatedAt:1718156635,formattedLastUpdatedAt:"Jun 12, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Harvester Cloud Provider",title:"Harvester Cloud Provider",keywords:["Harvester","harvester","RKE","rke","RKE2","rke2","Harvester Cloud Provider"],description:"The Harvester cloud provider used by the guest cluster in Harvester provides a CSI interface and cloud controller manager (CCM) which implements a built-in load balancer."},sidebar:"api",previous:{title:"Creating an K3s Kubernetes Cluster",permalink:"/v1.1/rancher/node/k3s-cluster"},next:{title:"Harvester CSI Driver",permalink:"/v1.1/rancher/csi-driver"}},d={},s=[{value:"Deploying",id:"deploying",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying to the RKE1 Cluster with Harvester Node Driver",id:"deploying-to-the-rke1-cluster-with-harvester-node-driver",level:3},{value:"Deploying to the RKE2 Cluster with Harvester Node Driver",id:"deploying-to-the-rke2-cluster-with-harvester-node-driver",level:3},{value:"Deploying to the K3s Cluster with Harvester Node Driver Experimental",id:"deploying-to-the-k3s-cluster-with-harvester-node-driver-experimental",level:3},{value:"Upgrade Cloud Provider",id:"upgrade-cloud-provider",level:2},{value:"Upgrade RKE2",id:"upgrade-rke2",level:3},{value:"Upgrade RKE/K3s",id:"upgrade-rkek3s",level:3},{value:"Load Balancer Support",id:"load-balancer-support",level:2},{value:"IPAM",id:"ipam",level:3},{value:"Health Checks",id:"health-checks",level:3}],c={toc:s},p="wrapper";function u(e){let{components:t,...l}=e;return(0,n.kt)(p,(0,a.Z)({},c,l,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/rancher/cloud-provider"})),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/node/rke1-cluster"},"RKE1")," and ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/node/rke2-cluster"},"RKE2")," clusters can be provisioned in Rancher using the built-in Harvester Node Driver. Harvester provides ",(0,n.kt)("a",{parentName:"p",href:"#load-balancer-support"},"load balancer")," and Harvester cluster ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/rancher/csi-driver"},"storage passthrough")," support to the guest Kubernetes cluster."),(0,n.kt)("p",null,"In this page we will learn:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"How to deploy the Harvester cloud provider in both RKE1 and RKE2."),(0,n.kt)("li",{parentName:"ul"},"How to use the ",(0,n.kt)("a",{parentName:"li",href:"#load-balancer-support"},"Harvester load balancer"),".")),(0,n.kt)("h2",{id:"deploying"},"Deploying"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester virtual machines."),(0,n.kt)("li",{parentName:"ul"},"The Harvester virtual machines run as guest Kubernetes nodes are in the same namespace.")),(0,n.kt)("h3",{id:"deploying-to-the-rke1-cluster-with-harvester-node-driver"},"Deploying to the RKE1 Cluster with Harvester Node Driver"),(0,n.kt)("p",null,"When spinning up an RKE cluster using the Harvester node driver, you can perform two steps to deploy the ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester")," cloud provider:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester(Out-of-tree)")," option."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(54688).Z,width:"2180",height:"223"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Cloud Provider")," from the Rancher marketplace."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(2627).Z,width:"2548",height:"389"})))),(0,n.kt)("h3",{id:"deploying-to-the-rke2-cluster-with-harvester-node-driver"},"Deploying to the RKE2 Cluster with Harvester Node Driver"),(0,n.kt)("p",null,"When spinning up an RKE2 cluster using the Harvester node driver, select the ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester")," cloud provider. The node driver will then help deploy both the CSI driver and CCM automatically."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{src:r(76152).Z,width:"2238",height:"646"})),(0,n.kt)("h3",{id:"deploying-to-the-k3s-cluster-with-harvester-node-driver-experimental"},"Deploying to the K3s Cluster with Harvester Node Driver ","[Experimental]"),(0,n.kt)("p",null,"When spinning up a K3s cluster using the Harvester node driver, you can perform the following steps to deploy the harvester cloud provider:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Generate and inject cloud config for ",(0,n.kt)("inlineCode",{parentName:"li"},"harvester-cloud-provider"))),(0,n.kt)("p",null,"The cloud provider needs a kubeconfig file to work, a limited scoped one can be generated using the ",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/harvester/cloud-provider-harvester/master/deploy/generate_addon.sh"},"generate_addon.sh")," script available in the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/cloud-provider-harvester"},"harvester/cloud-provider-harvester")," repo."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"The script depends on ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"jq")," to operate the Harvester cluster"),(0,n.kt)("p",{parentName:"admonition"},"The script needs access to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Cluster")," kubeconfig to work."),(0,n.kt)("p",{parentName:"admonition"},"The namespace needs to be the namespace in which the guest cluster will be created.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"./deploy/generate_addon.sh <serviceaccount name> <namespace>\n")),(0,n.kt)("p",null,"The output will look as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'# ./deploy/generate_addon.sh harvester-cloud-provider default\nCreating target directory to hold files in ./tmp/kube...done\nCreating a service account in default namespace: harvester-cloud-provider\nW1104 16:10:21.234417    4319 helpers.go:663] --dry-run is deprecated and can be replaced with --dry-run=client.\nserviceaccount/harvester-cloud-provider configured\n\nCreating a role in default namespace: harvester-cloud-provider\nrole.rbac.authorization.k8s.io/harvester-cloud-provider unchanged\n\nCreating a rolebinding in default namespace: harvester-cloud-provider\nW1104 16:10:21.986771    4369 helpers.go:663] --dry-run is deprecated and can be replaced with --dry-run=client.\nrolebinding.rbac.authorization.k8s.io/harvester-cloud-provider configured\n\nGetting uid of service account harvester-cloud-provider on default\nService Account uid: ea951643-53d2-4ea8-a4aa-e1e72a9edc91\n\nCreating a user token secret in default namespace: harvester-cloud-provider-token\nSecret name: harvester-cloud-provider-token\n\nExtracting ca.crt from secret...done\nGetting user token from secret...done\nSetting current context to: local\nCluster name: local\nEndpoint: https://HARVESTER_ENDPOINT/k8s/clusters/local\n\nPreparing k8s-harvester-cloud-provider-default-conf\nSetting a cluster entry in kubeconfig...Cluster "local" set.\nSetting token credentials entry in kubeconfig...User "harvester-cloud-provider-default-local" set.\nSetting a context entry in kubeconfig...Context "harvester-cloud-provider-default-local" created.\nSetting the current-context in the kubeconfig file...Switched to context "harvester-cloud-provider-default-local".\n########## cloud config ############\napiVersion: v1\nclusters:\n- cluster:\n    certificate-authority-data: <CACERT>\n    server: https://HARVESTER-ENDPOINT/k8s/clusters/local\n  name: local\ncontexts:\n- context:\n    cluster: local\n    namespace: default\n    user: harvester-cloud-provider-default-local\n  name: harvester-cloud-provider-default-local\ncurrent-context: harvester-cloud-provider-default-local\nkind: Config\npreferences: {}\nusers:\n- name: harvester-cloud-provider-default-local\n  user:\n    token: <TOKEN>\n    \n    \n########## cloud-init user data ############\nwrite_files:\n- encoding: b64\n  content: <CONTENT>\n  owner: root:root\n  path: /etc/kubernetes/cloud-config\n  permissions: \'0644\'\n')),(0,n.kt)("p",null,"Copy and paste the output below ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-init user data")," to ",(0,n.kt)("strong",{parentName:"p"},"Machine Pools >Show Advanced > User Data"),"."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(75116).Z,width:"2307",height:"1026"})),(0,n.kt)("ol",{start:3},(0,n.kt)("li",{parentName:"ol"},"Add the following ",(0,n.kt)("inlineCode",{parentName:"li"},"HelmChart")," yaml of ",(0,n.kt)("inlineCode",{parentName:"li"},"harvester-cloud-provider")," to ",(0,n.kt)("strong",{parentName:"li"},"Cluster Configuration > Add-On Config > Additional Manifest"))),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"apiVersion: helm.cattle.io/v1\nkind: HelmChart\nmetadata:\n  name: harvester-cloud-provider\n  namespace: kube-system\nspec:\n  targetNamespace: kube-system\n  bootstrap: true\n  repo: https://charts.harvesterhci.io/\n  chart: harvester-cloud-provider\n  version: 0.1.13\n  helmVersion: v3\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(18764).Z,width:"2316",height:"1235"})),(0,n.kt)("ol",{start:4},(0,n.kt)("li",{parentName:"ol"},"Disable the in-tree cloud provider by")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit as YAML")," button")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(60498).Z,width:"2324",height:"1230"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Disable ",(0,n.kt)("inlineCode",{parentName:"li"},"servicelb")," and Set ",(0,n.kt)("inlineCode",{parentName:"li"},"disable-cloud-controller: true")," to disable default k3s cloud controller.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"    machineGlobalConfig:\n      disable:\n        - servicelb\n      disable-cloud-controller: true\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Add ",(0,n.kt)("inlineCode",{parentName:"li"},"cloud-provider=external")," to use harvester cloud provider.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},"    machineSelectorConfig:\n      - config:\n          kubelet-arg:\n          - cloud-provider=external\n          protect-kernel-defaults: false\n")),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(93969).Z,width:"1398",height:"1153"})),(0,n.kt)("p",null,"With these settings in place a K3s cluster should provision successfully while using the external cloud provider."),(0,n.kt)("h2",{id:"upgrade-cloud-provider"},"Upgrade Cloud Provider"),(0,n.kt)("h3",{id:"upgrade-rke2"},"Upgrade RKE2"),(0,n.kt)("p",null,"The cloud provider can be upgraded by upgrading the RKE2 version. You can upgrade the RKE2 cluster via the Rancher UI as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > Cluster Management"),"."),(0,n.kt)("li",{parentName:"ol"},"Find the guest cluster that you want to upgrade and select \u22ee ",(0,n.kt)("strong",{parentName:"li"},"> Edit Config"),"."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Kubernetes Version"),"."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".")),(0,n.kt)("h3",{id:"upgrade-rkek3s"},"Upgrade RKE/K3s"),(0,n.kt)("p",null,"RKE/K3s upgrade cloud provider via the Rancher UI, as follows:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"\u2630 > RKE/K3s Cluster > Apps > Installed Apps"),"."),(0,n.kt)("li",{parentName:"ol"},"Find the cloud provider chart and select \u22ee ",(0,n.kt)("strong",{parentName:"li"},"> Edit/Upgrade"),"."),(0,n.kt)("li",{parentName:"ol"},"Select ",(0,n.kt)("strong",{parentName:"li"},"Version"),". "),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("strong",{parentName:"li"},"Next > Update"),".")),(0,n.kt)("h2",{id:"load-balancer-support"},"Load Balancer Support"),(0,n.kt)("p",null,"After deploying the ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester Cloud provider"),", you can use the Kubernetes ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service to expose a microservice inside the guest cluster to the external world. When you create a Kubernetes ",(0,n.kt)("inlineCode",{parentName:"p"},"LoadBalancer")," service, a Harvester load balancer is assigned to the service and you can edit it through the ",(0,n.kt)("inlineCode",{parentName:"p"},"Add-on Config")," in the Rancher UI."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{src:r(3658).Z,width:"3474",height:"1174"})),(0,n.kt)("h3",{id:"ipam"},"IPAM"),(0,n.kt)("p",null,"Harvester's built-in load balancer supports both ",(0,n.kt)("inlineCode",{parentName:"p"},"pool")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"dhcp")," modes. You can select the mode in the Rancher UI. Harvester adds the annotation ",(0,n.kt)("inlineCode",{parentName:"p"},"cloudprovider.harvesterhci.io/ipam")," to the service behind."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"pool: You should configure an IP address pool in Harvester's ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings")," in advance. The Harvester LoadBalancer controller will allocate an IP address from the IP address pool for the load balancer."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(83074).Z,width:"3482",height:"932"})," ")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"dhcp:  A DHCP server is required. The Harvester LoadBalancer controller will request an IP address from the DHCP server."))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"It is not allowed to modify the IPAM mode. You need to create a new service if you want to modify the IPAM mode.")),(0,n.kt)("h3",{id:"health-checks"},"Health Checks"),(0,n.kt)("p",null,"The Harvester load balancer supports TCP health checks. You can specify the parameters in the Rancher UI if you enable the ",(0,n.kt)("inlineCode",{parentName:"p"},"Health Check")," option."),(0,n.kt)("p",null,"  ",(0,n.kt)("img",{src:r(83312).Z,width:"3024",height:"1450"})),(0,n.kt)("p",null,"Alternatively, you can specify the parameters by adding annotations to the service manually. The following annotations are supported:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Annotation Key"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Value Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Required"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-port")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"true"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the port. The prober will access the address composed of the backend server IP and the port.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-success-threshold")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the health check success threshold. The default value is 1. The backend server will start forwarding traffic if the number of times the prober continuously detects an address successfully reaches the threshold.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-failure-threshold")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the health check failure threshold. The default value is 3. The backend server will stop forwarding traffic if the number of health check failures reaches the threshold.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-periodseconds")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the health check period. The default value is 5 seconds.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},(0,n.kt)("inlineCode",{parentName:"td"},"cloudprovider.harvesterhci.io/healthcheck-timeoutseconds")),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"false"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Specifies the timeout of every health check. The default value is 3 seconds.")))))}u.isMDXComponent=!0},75116:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/cloud-config-userdata-809b17a8acfc153692c19ce88ae18122.png"},60498:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/edit-k3s-cluster-yaml-57987c1e6b13eeca3c09b8efd1c6838e.png"},18764:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/external-cloud-provider-addon-fe7c7599805e615aec470224221f9ac7.png"},83312:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/health-check-530254bf13d824edd8587eac0d30016d.png"},2627:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install-harvester-cloud-provider-b0d92a6086c0f150b419e02fb4663a75.png"},93969:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/k3s-cluster-yaml-content-for-harvester-cloud-provider-5c6769285a078298e5873e18aa3747f1.png"},3658:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/lb-svc-e475b5a9a67cfcd1f5d37c2d550fc917.png"},54688:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke-cloud-provider-1b375dbb96aba32a2b7f2b81357e98b8.png"},76152:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke2-cloud-provider-bcb7c991d0e6f041009c4920472d8ea8.png"},83074:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/vip-pool-d544f501f104efd9aa4dd3e9015efd9d.png"}}]);