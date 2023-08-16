"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5946],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>h});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),p=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(s,".").concat(h)]||u[h]||c[h]||i;return r?a.createElement(m,l(l({ref:t},d),{},{components:r})):a.createElement(m,l({ref:t},d))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=u;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},19768:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const i={sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher Integration"]},l=void 0,o={unversionedId:"rancher/csi-driver",id:"rancher/csi-driver",title:"Harvester CSI Driver",description:"The Harvester Container Storage Interface (CSI) Driver provides a standard CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance.",source:"@site/docs/rancher/csi-driver.md",sourceDirName:"rancher",slug:"/rancher/csi-driver",permalink:"/dev/rancher/csi-driver",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/rancher/csi-driver.md",tags:[],version:"current",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"Harvester CSI Driver",title:"Harvester CSI Driver",keywords:["Harvester","harvester","Rancher Integration"]},sidebar:"tutorialSidebar",previous:{title:"Harvester Cloud Provider",permalink:"/dev/rancher/cloud-provider"},next:{title:"Resource Quotas",permalink:"/dev/rancher/resource-quota"}},s={},p=[{value:"Deploying",id:"deploying",level:2},{value:"Prerequisites",id:"prerequisites",level:3},{value:"Deploying with Harvester RKE1 Node Driver",id:"deploying-with-harvester-rke1-node-driver",level:3},{value:"Deploying with Harvester RKE2 Node Driver",id:"deploying-with-harvester-rke2-node-driver",level:3},{value:"Install CSI Driver Manually in the RKE2 Cluster",id:"install-csi-driver-manually-in-the-rke2-cluster",level:4},{value:"Prerequisites",id:"prerequisites-1",level:4},{value:"Deploy Harvester CSI Driver",id:"deploy-harvester-csi-driver",level:4},{value:"Deploying with Harvester K3s Node Driver",id:"deploying-with-harvester-k3s-node-driver",level:3},{value:"Passthrough Custom StorageClass",id:"passthrough-custom-storageclass",level:2},{value:"Prerequisites",id:"prerequisites-2",level:3},{value:"Deploying",id:"deploying-1",level:3}],d={toc:p};function c(e){let{components:t,...i}=e;return(0,n.kt)("wrapper",(0,a.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/csi-driver"})),(0,n.kt)("p",null,"The Harvester Container Storage Interface (CSI) Driver provides a standard CSI interface used by guest Kubernetes clusters in Harvester. It connects to the host cluster and hot-plugs host volumes to the virtual machines (VMs) to provide native storage performance."),(0,n.kt)("h2",{id:"deploying"},"Deploying"),(0,n.kt)("h3",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"The Kubernetes cluster is built on top of Harvester virtual machines."),(0,n.kt)("li",{parentName:"ul"},"The Harvester virtual machines that run the guest Kubernetes nodes are\nall in the same Harvester namespace."),(0,n.kt)("li",{parentName:"ul"},"The Harvester virtual machine guests' hostnames match their corresponding Harvester\nvirtual machine names. Guest cluster Harvester VMs can't have different hostnames\nthan their Harvester VM names when using the Harvester CSI driver. We hope\n",(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4396"},"to remove this limitation")," in\na future release of Harvester.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Currently, the Harvester CSI driver only supports single-node read-write(RWO) volumes. Please follow the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1992"},"issue #1992")," for future multi-node ",(0,n.kt)("inlineCode",{parentName:"p"},"read-only"),"(ROX) and ",(0,n.kt)("inlineCode",{parentName:"p"},"read-write"),"(RWX) support.")),(0,n.kt)("h3",{id:"deploying-with-harvester-rke1-node-driver"},"Deploying with Harvester RKE1 Node Driver"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Select ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester(Out-of-tree)")," option (optional. If you don't need to use the Cloud Provider feature at the same time, you can select the ",(0,n.kt)("inlineCode",{parentName:"p"},"None")," option)."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:r(91855).Z,width:"2180",height:"223"}))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Install ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver")," from the Rancher marketplace."),(0,n.kt)("p",{parentName:"li"},"  ",(0,n.kt)("img",{src:r(89796).Z,width:"2542",height:"405"})))),(0,n.kt)("h3",{id:"deploying-with-harvester-rke2-node-driver"},"Deploying with Harvester RKE2 Node Driver"),(0,n.kt)("p",null,"When spinning up a Kubernetes cluster using Rancher RKE2 node driver, the Harvester CSI driver will be deployed when Harvester cloud provider is selected."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"select-harvester-cloud-provider",src:r(60830).Z,width:"2238",height:"646"})),(0,n.kt)("h4",{id:"install-csi-driver-manually-in-the-rke2-cluster"},"Install CSI Driver Manually in the RKE2 Cluster"),(0,n.kt)("p",null,"If you prefer to deploy the Harvester CSI driver without enabling the Harvester cloud provider, you can choose either ",(0,n.kt)("inlineCode",{parentName:"p"},"Default - RKE2 Embedded")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"External")," in the ",(0,n.kt)("inlineCode",{parentName:"p"},"Cloud Provider")," field. If you are using Rancher v2.6, select ",(0,n.kt)("inlineCode",{parentName:"p"},"None")," instead."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(1776).Z,width:"1608",height:"805"})),(0,n.kt)("h4",{id:"prerequisites-1"},"Prerequisites"),(0,n.kt)("p",null,"Ensure that you have the following prerequisites in place:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"You have ",(0,n.kt)("inlineCode",{parentName:"li"},"kubectl")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"jq")," installed on your system."),(0,n.kt)("li",{parentName:"ul"},"You have the ",(0,n.kt)("inlineCode",{parentName:"li"},"kubeconfig")," file for your bare-metal Harvester cluster. ",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"export KUBECONFIG=/path/to/your/harvester-kubeconfig\n")))),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(40518).Z,width:"1603",height:"731"})),(0,n.kt)("p",null,"Perform the following steps to deploy the Harvester CSI Driver manually:"),(0,n.kt)("h4",{id:"deploy-harvester-csi-driver"},"Deploy Harvester CSI Driver"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Generate cloud-config."),(0,n.kt)("p",{parentName:"li"},"You can generate the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubeconfig")," file using the ",(0,n.kt)("a",{parentName:"p",href:"https://raw.githubusercontent.com/harvester/harvester-csi-driver/master/deploy/generate_addon_csi.sh"},"generate_addon_csi.sh")," script. It is available on the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester-csi-driver"},"harvester/harvester-csi-driver")," repo. You can follow the steps below to get the ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-config")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-init")," data:"),(0,n.kt)("p",{parentName:"li"},"The ",(0,n.kt)("inlineCode",{parentName:"p"},"<serviceaccount name>"),' usually corresponds to your guest cluster name (the value of "Cluster Name" in the figure below), and ',(0,n.kt)("inlineCode",{parentName:"p"},"<namespace>"),' should match the namespace (the value of "Namespace") of the guest cluster.'),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# ./generate_addon_csi.sh <serviceaccount name> <namespace> RKE2\n")),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"########## cloud-config ############\napiVersion: v1\nclusters:\n- cluster: <token>\n    server: https://<YOUR HOST HARVESTER VIP>:6443\n  name: default\ncontexts:\n- context:\n    cluster: default\n    namespace: default\n    user: rke2-guest-01-default-default\n  name: rke2-guest-01-default-default\ncurrent-context: rke2-guest-01-default-default\nkind: Config\npreferences: {}\nusers:\n- name: rke2-guest-01-default-default\n  user:\n    token: <token>\n\n########## cloud-init user data ############\nwrite_files:\n  - encoding: b64\n    content: YXBpVmVyc2lvbjogdjEKY2x1c3RlcnM6Ci0gY2x1c3RlcjoKICAgIGNlcnRpZmljYXRlLWF1dGhvcml0eS1kYXRhOiBMUzB0TFMxQ1JVZEpUaUJEUlZKVVNVWkpRMEZVUlMwdExTMHRDazFKU1VKbFZFTkRRVklyWjBGM1NVSkJaMGxDUVVSQlMwSm5aM0ZvYTJwUFVGRlJSRUZxUVd0TlUwbDNTVUZaUkZaUlVVUkVRbXg1WVRKVmVVeFlUbXdLWTI1YWJHTnBNV3BaVlVGNFRtcG5NVTE2VlhoT1JGRjNUVUkwV0VSVVNYcE5SRlY1VDFSQk5VMVVRVEJOUm05WVJGUk5lazFFVlhsT2FrRTFUVlJCTUFwTlJtOTNTa1JGYVUxRFFVZEJNVlZGUVhkM1dtTnRkR3hOYVRGNldsaEtNbHBZU1hSWk1rWkJUVlJaTkU1VVRURk5WRkV3VFVSQ1drMUNUVWRDZVhGSENsTk5ORGxCWjBWSFEwTnhSMU5OTkRsQmQwVklRVEJKUVVKSmQzRmFZMDVTVjBWU2FsQlVkalJsTUhFMk0ySmxTSEZEZDFWelducGtRa3BsU0VWbFpHTUtOVEJaUTNKTFNISklhbWdyTDJab2VXUklNME5ZVURNeFZXMWxTM1ZaVDBsVGRIVnZVbGx4YVdJMGFFZE5aekpxVVdwQ1FVMUJORWRCTVZWa1JIZEZRZ292ZDFGRlFYZEpRM0JFUVZCQ1owNVdTRkpOUWtGbU9FVkNWRUZFUVZGSUwwMUNNRWRCTVZWa1JHZFJWMEpDVWpaRGEzbEJOSEZqYldKSlVESlFWVW81Q2xacWJWVTNVV2R2WjJwQlMwSm5aM0ZvYTJwUFVGRlJSRUZuVGtsQlJFSkdRV2xCZUZKNU4xUTNRMVpEYVZWTVdFMDRZazVaVWtWek1HSnBZbWxVSzJzS1kwRnhlVmt5Tm5CaGMwcHpMM2RKYUVGTVNsQnFVVzVxZEcwMVptNTZWR3AxUVVsblRuTkdibFozWkZRMldXWXpieTg0ZFRsS05tMWhSR2RXQ2kwdExTMHRSVTVFSUVORlVsUkpSa2xEUVZSRkxTMHRMUzBLCiAgICBzZXJ2ZXI6IGh0dHBzOi8vMTkyLjE2OC4wLjEzMTo2NDQzCiAgbmFtZTogZGVmYXVsdApjb250ZXh0czoKLSBjb250ZXh0OgogICAgY2x1c3RlcjogZGVmYXVsdAogICAgbmFtZXNwYWNlOiBkZWZhdWx0CiAgICB1c2VyOiBya2UyLWd1ZXN0LTAxLWRlZmF1bHQtZGVmYXVsdAogIG5hbWU6IHJrZTItZ3Vlc3QtMDEtZGVmYXVsdC1kZWZhdWx0CmN1cnJlbnQtY29udGV4dDogcmtlMi1ndWVzdC0wMS1kZWZhdWx0LWRlZmF1bHQKa2luZDogQ29uZmlnCnByZWZlcmVuY2VzOiB7fQp1c2VyczoKLSBuYW1lOiBya2UyLWd1ZXN0LTAxLWRlZmF1bHQtZGVmYXVsdAogIHVzZXI6CiAgICB0b2tlbjogZXlKaGJHY2lPaUpTVXpJMU5pSXNJbXRwWkNJNklreGhUazQxUTBsMWFsTnRORE5TVFZKS00waE9UbGszTkV0amNVeEtjM1JSV1RoYVpUbGZVazA0YW1zaWZRLmV5SnBjM01pT2lKcmRXSmxjbTVsZEdWekwzTmxjblpwWTJWaFkyTnZkVzUwSWl3aWEzVmlaWEp1WlhSbGN5NXBieTl6WlhKMmFXTmxZV05qYjNWdWRDOXVZVzFsYzNCaFkyVWlPaUprWldaaGRXeDBJaXdpYTNWaVpYSnVaWFJsY3k1cGJ5OXpaWEoyYVdObFlXTmpiM1Z1ZEM5elpXTnlaWFF1Ym1GdFpTSTZJbkpyWlRJdFozVmxjM1F0TURFdGRHOXJaVzRpTENKcmRXSmxjbTVsZEdWekxtbHZMM05sY25acFkyVmhZMk52ZFc1MEwzTmxjblpwWTJVdFlXTmpiM1Z1ZEM1dVlXMWxJam9pY210bE1pMW5kV1Z6ZEMwd01TSXNJbXQxWW1WeWJtVjBaWE11YVc4dmMyVnlkbWxqWldGalkyOTFiblF2YzJWeWRtbGpaUzFoWTJOdmRXNTBMblZwWkNJNkltTXlZak5sTldGaExUWTBNMlF0TkRkbU1pMDROemt3TFRjeU5qWXpNbVl4Wm1aaU5pSXNJbk4xWWlJNkluTjVjM1JsYlRwelpYSjJhV05sWVdOamIzVnVkRHBrWldaaGRXeDBPbkpyWlRJdFozVmxjM1F0TURFaWZRLmFRZmU1d19ERFRsSWJMYnUzWUVFY3hmR29INGY1VnhVdmpaajJDaWlhcXB6VWI0dUYwLUR0cnRsa3JUM19ZemdXbENRVVVUNzNja1BuQmdTZ2FWNDhhdmlfSjJvdUFVZC04djN5d3M0eXpjLVFsTVV0MV9ScGJkUURzXzd6SDVYeUVIREJ1dVNkaTVrRWMweHk0X0tDQ2IwRHQ0OGFoSVhnNlMwRDdJUzFfVkR3MmdEa24wcDVXUnFFd0xmSjdEbHJDOFEzRkNUdGhpUkVHZkUzcmJGYUdOMjdfamR2cUo4WXlJQVd4RHAtVHVNT1pKZUNObXRtUzVvQXpIN3hOZlhRTlZ2ZU05X29tX3FaVnhuTzFEanllbWdvNG9OSEpzekp1VWliRGxxTVZiMS1oQUxYSjZXR1Z2RURxSTlna1JlSWtkX3JqS2tyY3lYaGhaN3lTZ3o3QQo=\n    owner: root:root\n    path: /var/lib/rancher/rke2/etc/config-files/cloud-provider-config\n    permissions: '0644'\n")),(0,n.kt)("p",{parentName:"li"},"Copy and paste the output below ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-init user data")," to ",(0,n.kt)("strong",{parentName:"p"},"Machine Pools >Show Advanced > User Data"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Set up cloud-provider-config."),(0,n.kt)("p",{parentName:"li"},"The cloud-provider-config should be created after you apply the above cloud-init user data."),(0,n.kt)("p",{parentName:"li"},"You can check again on the path ",(0,n.kt)("inlineCode",{parentName:"p"},"/var/lib/rancher/rke2/etc/config-files/cloud-provider-config"),"."),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"If you want to change the cloud-provider-config path, you should update the cloud-init user data."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Install Harvester CSI Driver."),(0,n.kt)("p",{parentName:"li"},"Install the ",(0,n.kt)("inlineCode",{parentName:"p"},"Harvester CSI Driver")," chart from the Rancher marketplace. (Note: by default, you do not need to change the ",(0,n.kt)("inlineCode",{parentName:"p"},"cloud-config")," path).\n",(0,n.kt)("img",{src:r(26601).Z,width:"3000",height:"1460"})),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(62870).Z,width:"3002",height:"1524"})))),(0,n.kt)("p",null,"By following the above steps, you should be able to see those CSI driver pods are up and running, and you can verify it by provisioning a new PVC using the default storageClass ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester"),"."),(0,n.kt)("h3",{id:"deploying-with-harvester-k3s-node-driver"},"Deploying with Harvester K3s Node Driver"),(0,n.kt)("p",null,"You can follow the ",(0,n.kt)("a",{parentName:"p",href:"/dev/rancher/csi-driver#deploy-harvester-csi-driver"},"Deploy Harvester CSI Driver")," steps described in the RKE2 section for ",(0,n.kt)("strong",{parentName:"p"},"Prerequisites")," "),(0,n.kt)("p",null,"The only difference is that you need to change the script command as follows:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"# ./generate_addon_csi.sh <serviceaccount name> <namespace> k3s\n")),(0,n.kt)("h2",{id:"passthrough-custom-storageclass"},"Passthrough Custom StorageClass"),(0,n.kt)("p",null,"Starting with Harvester CSI driver v0.1.15, you can create a PersistentVolumeClaim (PVC) based on a different StorageClass."),(0,n.kt)("p",null,"Harvester CSI driver v0.1.15 is supported out of the box starting with the following RKE2 versions; for RKE1 you need to manually install the CSI driver chart:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"v1.23.16+rke2r1 and later"),(0,n.kt)("li",{parentName:"ul"},"v1.24.10+rke2r1 and later"),(0,n.kt)("li",{parentName:"ul"},"v1.25.6+rke2r1 and later"),(0,n.kt)("li",{parentName:"ul"},"v1.26.1+rke2r1 and later"),(0,n.kt)("li",{parentName:"ul"},"v1.27.1+rke2r1 and later")),(0,n.kt)("h3",{id:"prerequisites-2"},"Prerequisites"),(0,n.kt)("p",null,"Please add the following additional perquisites to your Harvester cluster. The Harvester CSI driver requires proper ",(0,n.kt)("strong",{parentName:"p"},"RBAC")," to display error messages. This is important for displaying an error message when creating a PVC with a StorageClass that does not exist, as shown in the following figure."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(52289).Z,width:"1900",height:"874"})),(0,n.kt)("p",null,"Perform the following steps to setup ",(0,n.kt)("strong",{parentName:"p"},"RBAC")," to enable seeing error messages."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new ",(0,n.kt)("inlineCode",{parentName:"p"},"clusterrole")," named ",(0,n.kt)("inlineCode",{parentName:"p"},"harvesterhci.io:csi-driver")," with the following manifest."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  labels:\n    app.kubernetes.io/component: apiserver\n    app.kubernetes.io/name: harvester\n    app.kubernetes.io/part-of: harvester\n  name: harvesterhci.io:csi-driver\nrules:\n- apiGroups:\n  - storage.k8s.io\n  resources:\n  - storageclasses\n  verbs:\n  - get\n  - list\n  - watch\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Then create the ",(0,n.kt)("inlineCode",{parentName:"p"},"clusterrolebinding")," to associate with  the new ",(0,n.kt)("inlineCode",{parentName:"p"},"clusterrole")," with the following manifest."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: <namespace>-<serviceaccount name>\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: harvesterhci.io:csi-driver\nsubjects:\n- kind: ServiceAccount\n  name: <serviceaccount name>\n  namespace: <namespace>\n")))),(0,n.kt)("p",null,"Make sure the ",(0,n.kt)("inlineCode",{parentName:"p"},"serviceaccount name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace")," are the same as your cloud provider. Perform the following steps to see the ",(0,n.kt)("inlineCode",{parentName:"p"},"serviceaccount name")," and ",(0,n.kt)("inlineCode",{parentName:"p"},"namespace")," for your cloud provider."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the ",(0,n.kt)("inlineCode",{parentName:"p"},"rolebinding")," for your cloud provider ."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"# kubectl get rolebinding -A |grep harvesterhci.io:cloudprovider\ndefault                                 default-rke2-guest-01                                ClusterRole/harvesterhci.io:cloudprovider             7d1h\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Get the ",(0,n.kt)("inlineCode",{parentName:"p"},"subjects")," info on this ",(0,n.kt)("inlineCode",{parentName:"p"},"rolebinding"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get rolebinding default-rke2-guest-01 -n default -o yaml |yq -e '.subjects'\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Find the ",(0,n.kt)("inlineCode",{parentName:"p"},"ServiceAccount")," info as follows:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"- kind: ServiceAccount\n  name: rke2-guest-01\n  namespace: default\n")))),(0,n.kt)("h3",{id:"deploying-1"},"Deploying"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Create a new StorageClass that you would like to use in your guest k8s cluster. You can refer to the ",(0,n.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/dev/advanced/storageclass"},"StorageClasses")," for more details."),(0,n.kt)("p",{parentName:"li"},"As show in the following figure, create a new StorageClass named ",(0,n.kt)("strong",{parentName:"p"},"replica-2"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(26287).Z,width:"1908",height:"775"})),(0,n.kt)("p",{parentName:"li"},"For example, create a new StorageClass on the downstream cluster as follows associated with the StorageClass created on the Harvester Cluster named ",(0,n.kt)("strong",{parentName:"p"},"replica-2"),"."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:r(8703).Z,width:"1910",height:"875"})),(0,n.kt)("admonition",{parentName:"li",type:"note"},(0,n.kt)("p",{parentName:"admonition"},"When choosing a ",(0,n.kt)("strong",{parentName:"p"},"Provisioner"),", select ",(0,n.kt)("strong",{parentName:"p"},"Harvester (CSI)"),". The parameter ",(0,n.kt)("strong",{parentName:"p"},"Host StorageClass")," should be the StorageClass created on the Harvester Cluster."))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"You can now create a PVC based on this new ",(0,n.kt)("strong",{parentName:"p"},"StorageClass"),", which uses the ",(0,n.kt)("strong",{parentName:"p"},"Host StorageClass")," to provision volumes on the bare-metal cluster."))))}c.isMDXComponent=!0},40518:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/creating_guest_cluster-9a704a8caf1f5d20e80a4e85b864d8e5.png"},62870:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/donot_change_cloud_config_path-f1a6f8a068fb6d7f19fe33b7a3cd97bc.png"},8703:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/downstream-cluster-sc-creation-378d43228c1d54eede232eb32d86dd0e.png"},52289:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/error_event_csi_driver-39ba293ec4c085eb58a01a396ac1f65a.png"},89796:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install-harvester-csi-driver-28489139ba34a16156cfea27c6eb005f.png"},26601:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/install_csi_rancher_marketplace-a6e0b7ac479a8ae72c4b31ad18d3ad9e.png"},1776:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/non-harvester-cloud-provider-8e3bc5542bd27800a302340c0b2ceef3.png"},91855:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke-cloud-provider-1b375dbb96aba32a2b7f2b81357e98b8.png"},60830:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/rke2-cloud-provider-bcb7c991d0e6f041009c4920472d8ea8.png"},26287:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/sc-replica-2-7f41f9357e62f4d917a590f31c04b98a.png"}}]);