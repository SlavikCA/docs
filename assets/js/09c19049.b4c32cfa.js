"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1348],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=s(a),u=o,h=m["".concat(p,".").concat(u)]||m[u]||d[u]||r;return a?n.createElement(h,l(l({ref:t},c),{},{components:a})):n.createElement(h,l({ref:t},c))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,l=new Array(r);l[0]=u;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[m]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<r;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},77797:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>d,frontMatter:()=>r,metadata:()=>i,toc:()=>s});var n=a(87462),o=(a(67294),a(3905));const r={sidebar_position:5,sidebar_label:"IP Pool",title:"IP Pool",keywords:["IP Pool"]},l=void 0,i={unversionedId:"networking/ippool",id:"version-v1.2/networking/ippool",title:"IP Pool",description:"Available as of v1.2.0",source:"@site/versioned_docs/version-v1.2/networking/ippool.md",sourceDirName:"networking",slug:"/networking/ippool",permalink:"/v1.2/networking/ippool",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/networking/ippool.md",tags:[],version:"v1.2",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"IP Pool",title:"IP Pool",keywords:["IP Pool"]},sidebar:"docs",previous:{title:"Load Balancer",permalink:"/v1.2/networking/loadbalancer"},next:{title:"Logging",permalink:"/v1.2/logging/harvester-logging"}},p={},s=[{value:"Features",id:"features",level:2},{value:"How to create",id:"how-to-create",level:2},{value:"Selection policy",id:"selection-policy",level:2},{value:"Examples",id:"examples",level:3},{value:"Allocation policy",id:"allocation-policy",level:2}],c={toc:s},m="wrapper";function d(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"Available as of v1.2.0")),(0,o.kt)("p",null,"Harvester IP Pool is a built-in IP address management (IPAM) solution exclusively available to Harvester load balancers (LBs)."),(0,o.kt)("h2",{id:"features"},"Features"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Multiple IP ranges:")," Each IP pool can contain multiple IP ranges or CIDRs."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Allocation history:")," The IP pool keeps track of the allocation history of every IP address and prioritizes assigning previously allocated addresses by load balancer name.",(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"status:\n  allocatedHistory:\n    192.168.178.8: default/rke2-default-lb-pool-2fab9ac0\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("strong",{parentName:"li"},"Scope:")," IP pools can be confined to a particular network, project, namespace, or guest cluster.")),(0,o.kt)("h2",{id:"how-to-create"},"How to create"),(0,o.kt)("p",null,"To create a new IP pool:"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Networks")," > ",(0,o.kt)("strong",{parentName:"li"},"IP Pools")," page and select ",(0,o.kt)("strong",{parentName:"li"},"Create"),"."),(0,o.kt)("li",{parentName:"ol"},"Specify the ",(0,o.kt)("strong",{parentName:"li"},"Name")," of the IP pool."),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Range")," tab to specify the ",(0,o.kt)("strong",{parentName:"li"},"IP ranges")," for the IP pool. You can add multiple IP ranges.\n",(0,o.kt)("img",{src:a(44345).Z,width:"3476",height:"1138"})),(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Selector")," tab to specify the ",(0,o.kt)("strong",{parentName:"li"},"Scope")," and ",(0,o.kt)("strong",{parentName:"li"},"Priority")," of the IP pool.\n",(0,o.kt)("img",{src:a(21154).Z,width:"3504",height:"1208"}))),(0,o.kt)("h2",{id:"selection-policy"},"Selection policy"),(0,o.kt)("p",null,"Each IP pool will have a specific range, and you can specify the corresponding requirements in the LB ",(0,o.kt)("inlineCode",{parentName:"p"},"annotations"),". IP pools that meet the specified requirements will automatically assign IP addresses to LBs."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"LBs utilize the following annotations to express requirements (all annotations are optional):",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"loadbalancer.harvesterhci.io/network")," specifies the VM network the guest cluster nodes use."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"loadbalancer.harvesterhci.io/project")," and ",(0,o.kt)("inlineCode",{parentName:"li"},"loadbalancer.harvesterhci.io/namespace")," identify the project and namespace of the VMs that comprise the guest cluster."),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"loadbalancer.harvesterhci.io/cluster")," denotes the name of the guest cluster."))),(0,o.kt)("li",{parentName:"ul"},"The IP pool has a selector, including network and scope, to match the requirements of the LB.",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"Network is a hard condition. The optional IP pool must match the value of the LB annotation ",(0,o.kt)("inlineCode",{parentName:"li"},"loadbalancer.harvesterhci.io/network"),"."),(0,o.kt)("li",{parentName:"ul"},"Every IP pool, except the global IP pool, has a unique scope different from others if its priority is ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),". The project, namespace, or cluster name of LBs should be in the scope of the IP pool if they want to get an IP from this pool."))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"spec.selector.priority")," specifies the priority of the IP Pool. The larger the number, the higher the priority. If the priority is not ",(0,o.kt)("inlineCode",{parentName:"li"},"0"),", the value should differ. The priority helps you to migrate the old IP pool to the new one."),(0,o.kt)("li",{parentName:"ul"},"If the IP Pool has a scope that matches all projects, namespaces, and guest clusters, it's called a global IP pool, and only one global IP pool is allowed. If there is no IP pool matching the requirements of the LB, the IPAM will allocate an IP address from the global IP pool if it exists.")),(0,o.kt)("h3",{id:"examples"},"Examples"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example 1:")," You wish to set up an IP pool within the range ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.100.0/24")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespace. In this scenario, all load balancers within the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespace will receive an IP address from this designated IP pool:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.harvesterhci.io/v1beta1\nkind: IPPool\nmetadata:\n  name: default-ip-pool\nspec:\n  ranges:\n  - subnet: 192.168.100.0/24\n  selector:\n    scope:\n      namespace: default\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example 2:")," You have a guest cluster ",(0,o.kt)("inlineCode",{parentName:"p"},"rke2")," deployed within the network ",(0,o.kt)("inlineCode",{parentName:"p"},"default/vlan1"),", and its ",(0,o.kt)("inlineCode",{parentName:"p"},"project/namespace")," name is ",(0,o.kt)("inlineCode",{parentName:"p"},"product/default"),". If you want to configure an exclusive IP pool range ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.10.10-192.168.10.20")," for it. Refer to the following ",(0,o.kt)("inlineCode",{parentName:"p"},"YAML")," config:"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.harvesterhci.io/v1beta1\nkind: IPPool\nmetadata:\n  name: rke2-ip-pool\nspec:\n  ranges:\n  - subnet: 192.168.10.0/24\n    rangeStart: 192.168.10.10\n    rangeEnd: 192.168.10.20\n  selector:\n    network: default/vlan1\n    scope:\n      project: product\n      namespace: default\n      cluster: rke2\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example 3:")," If you have specified the IP pool ",(0,o.kt)("inlineCode",{parentName:"p"},"default-ip-pool")," for the ",(0,o.kt)("inlineCode",{parentName:"p"},"default")," namespace, you want to migrate the IP pool ",(0,o.kt)("inlineCode",{parentName:"p"},"default-ip-pool")," to a different IP pool ",(0,o.kt)("inlineCode",{parentName:"p"},"default-ip-pool-2")," with range ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.200.0/24"),". It's not allowed to specify over one IP pool for the same scope, but you can give the IP pool ",(0,o.kt)("inlineCode",{parentName:"p"},"default-ip-pool-2")," a higher priority than ",(0,o.kt)("inlineCode",{parentName:"p"},"default-ip-pool"),". Refer to the following ",(0,o.kt)("inlineCode",{parentName:"p"},"YAML")," config:")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: networking.harvesterhci.io/v1beta1\nkind: IPPool\nmetadata:\n  name: default-ip-pool-2\nspec:\n  ranges:\n  - subnet: 192.168.200.0/24\n  selector:\n    priority: 1  # The priority is higher than default-ip-pool\n    scope:\n      namespace: default\n"))),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Example 4:")," You want to configure a global IP pool with a CIDR range of ",(0,o.kt)("inlineCode",{parentName:"p"},"192.168.20.0/24"),":"),(0,o.kt)("pre",{parentName:"li"},(0,o.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: networking.harvesterhci.io/v1beta1\nkind: IPPool\nmetadata:\n  name: global-ip-pool\nspec:\n  ranges:\n  - subnet: 192.168.20.0/24\n  selector:\n    scope:\n      project: "*"\n      namespace: "*"\n      cluster: "*"\n')))),(0,o.kt)("h2",{id:"allocation-policy"},"Allocation policy"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"The IP pool prioritizes the allocation of previously assigned IP addresses based on their allocation history."),(0,o.kt)("li",{parentName:"ul"},"IP addresses are assigned in ascending order.")),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("p",{parentName:"admonition"},"Starting with Harvester v1.2.0,  the ",(0,o.kt)("inlineCode",{parentName:"p"},"vip-pools")," setting is deprecated. Following the upgrade, this setting will be automatically migrated to the Harvester IP pools.")))}d.isMDXComponent=!0},21154:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/ippool-scope-bceb3ec439ec83235fa7c2779980b892.png"},44345:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/multiple-ranges-6319a81c47e46a445e56de10ba318a43.png"}}]);