"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[41749],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=a.createContext({}),c=function(e){var t=a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,o(o({ref:t},p),{},{components:n})):a.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,o=new Array(i);o[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:r,o[1]=s;for(var c=2;c<i;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},85914:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const i={sidebar_position:3,sidebar_label:"VM Import",title:"VM Import"},o=void 0,s={unversionedId:"advanced/addons/vmimport",id:"advanced/addons/vmimport",title:"VM Import",description:"Available as of v1.1.0",source:"@site/docs/advanced/addons/vmimport.md",sourceDirName:"advanced/addons",slug:"/advanced/addons/vmimport",permalink:"/v1.4/advanced/addons/vmimport",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/advanced/addons/vmimport.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"VM Import",title:"VM Import"},sidebar:"docs",previous:{title:"PCI Devices",permalink:"/v1.4/advanced/addons/pcidevices"},next:{title:"Seeder",permalink:"/v1.4/advanced/addons/seeder"}},l={},c=[{value:"vm-import-controller",id:"vm-import-controller",level:2},{value:"API",id:"api",level:2},{value:"Sources",id:"sources",level:3},{value:"VirtualMachineImport",id:"virtualmachineimport",level:3}],p={toc:c},d="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(d,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/vmimport"})),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,r.kt)("p",null,"Beginning with v1.1.0, users can import their virtual machines from VMWare and OpenStack into Harvester."),(0,r.kt)("p",null,"This is accomplished using the vm-import-controller addon."),(0,r.kt)("p",null,"To use the VM Import feature, users need to enable the vm-import-controller addon."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(97087).Z,width:"1039",height:"577"})),(0,r.kt)("p",null,"By default, vm-import-controller leverages ephemeral storage, which is mounted from /var/lib/kubelet.  "),(0,r.kt)("p",null,"During the migration, a large VM's node could run out of space on this mount, resulting in subsequent scheduling failures. "),(0,r.kt)("p",null,"To avoid this, users are advised to enable PVC-backed storage and customize the amount of storage needed. According to the best practice, the PVC size should be twice the size of the largest VM being migrated. This is essential as the PVC is used as scratch space to download the VM, and convert the disks into raw image files."),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(6978).Z,width:"1578",height:"776"})),(0,r.kt)("h2",{id:"vm-import-controller"},"vm-import-controller"),(0,r.kt)("p",null,"Currently, the following source providers are supported:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"VMWare"),(0,r.kt)("li",{parentName:"ul"},"OpenStack")),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("p",null,"The vm-import-controller introduces two CRDs."),(0,r.kt)("h3",{id:"sources"},"Sources"),(0,r.kt)("p",null,"Sources allow users to define valid source clusters."),(0,r.kt)("p",null,"For example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: migration.harvesterhci.io/v1beta1\nkind: VmwareSource\nmetadata:\n  name: vcsim\n  namespace: default\nspec:\n  endpoint: "https://vscim/sdk"\n  dc: "DCO"\n  credentials:\n    name: vsphere-credentials\n    namespace: default\n')),(0,r.kt)("p",null,"The secret contains the credentials for the vCenter endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata: \n  name: vsphere-credentials\n  namespace: default\nstringData:\n  "username": "user"\n  "password": "password"\n')),(0,r.kt)("p",null,"As part of the reconciliation process, the controller will log into vCenter and verify whether the ",(0,r.kt)("inlineCode",{parentName:"p"},"dc")," specified in the source spec is valid."),(0,r.kt)("p",null,"Once this check is passed, the source is marked as ready and can be used for VM migrations."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get vmwaresource.migration \nNAME      STATUS\nvcsim   clusterReady\n")),(0,r.kt)("p",null,"For OpenStack-based source clusters, an example definition is as follows:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: migration.harvesterhci.io/v1beta1\nkind: OpenstackSource\nmetadata:\n  name: devstack\n  namespace: default\nspec:\n  endpoint: "https://devstack/identity"\n  region: "RegionOne"\n  credentials:\n    name: devstack-credentials\n    namespace: default\n')),(0,r.kt)("p",null,"The secret contains the credentials for the OpenStack endpoint:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata: \n  name: devstack-credentials\n  namespace: default\nstringData:\n  "username": "user"\n  "password": "password"\n  "project_name": "admin"\n  "domain_name": "default"\n  "ca_cert": "pem-encoded-ca-cert"\n')),(0,r.kt)("p",null,"The OpenStack source reconciliation process attempts to list VMs in the project and marks the source as ready."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get opestacksource.migration\nNAME       STATUS\ndevstack   clusterReady\n")),(0,r.kt)("h3",{id:"virtualmachineimport"},"VirtualMachineImport"),(0,r.kt)("p",null,"The VirtualMachineImport CRD provides a way for users to define a source VM and map to the actual source cluster to perform VM export/import."),(0,r.kt)("p",null,"A sample VirtualMachineImport looks like this:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: migration.harvesterhci.io/v1beta1\nkind: VirtualMachineImport\nmetadata:\n  name: alpine-export-test\n  namespace: default\nspec: \n  virtualMachineName: "alpine-export-test"\n  networkMapping:\n  - sourceNetwork: "dvSwitch 1"\n    destinationNetwork: "default/vlan1"\n  - sourceNetwork: "dvSwitch 2"\n    destinationNetwork: "default/vlan2"\n  sourceCluster: \n    name: vcsim\n    namespace: default\n    kind: VmwareSource\n    apiVersion: migration.harvesterhci.io/v1beta1\n')),(0,r.kt)("p",null,'This will trigger the controller to export the VM named "alpine-export-test" on the VMWare source cluster to be exported, processed and recreated into the harvester cluster'),(0,r.kt)("p",null,"This can take a while based on the size of the virtual machine, but users should see ",(0,r.kt)("inlineCode",{parentName:"p"},"VirtualMachineImages")," created for each disk in the defined virtual machine."),(0,r.kt)("p",null,"The list of items in ",(0,r.kt)("inlineCode",{parentName:"p"},"networkMapping")," will define how the source network interfaces are mapped to the Harvester Networks."),(0,r.kt)("p",null,"If a match is not found, each unmatched network interface is attached to the default ",(0,r.kt)("inlineCode",{parentName:"p"},"managementNetwork"),"."),(0,r.kt)("p",null,"Once the virtual machine has been imported successfully, the object will reflect the status:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get virtualmachineimport.migration\nNAME                    STATUS\nalpine-export-test      virtualMachineRunning\nopenstack-cirros-test   virtualMachineRunning\n\n")),(0,r.kt)("p",null,"Similarly, users can define a VirtualMachineImport for an OpenStack source as well:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: migration.harvesterhci.io/v1beta1\nkind: VirtualMachineImport\nmetadata:\n  name: openstack-demo\n  namespace: default\nspec: \n  virtualMachineName: "openstack-demo" #Name or UUID for instance\n  networkMapping:\n  - sourceNetwork: "shared"\n    destinationNetwork: "default/vlan1"\n  - sourceNetwork: "public"\n    destinationNetwork: "default/vlan2"\n  sourceCluster: \n    name: devstack\n    namespace: default\n    kind: OpenstackSource\n    apiVersion: migration.harvesterhci.io/v1beta1\n')),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"OpenStack allows users to have multiple instances with the same name. In such a scenario, users are advised to use the Instance ID. The reconciliation logic tries to perform a name-to-ID lookup when a name is used.")))}u.isMDXComponent=!0},6978:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/ConfigureAddon-49285f9d972b7a2c5cd658699010766d.png"},97087:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/EnableAddon-42d0feaeb5420d41b9e5ed17a5ff28c1.png"}}]);