"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[97117],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>k});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=n.createContext({}),d=function(e){var t=n.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},m=function(e){var t=d(e.components);return n.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,m=s(e,["components","mdxType","originalType","parentName"]),p=d(a),c=i,k=p["".concat(l,".").concat(c)]||p[c]||h[c]||o;return a?n.createElement(k,r(r({ref:t},m),{},{components:a})):n.createElement(k,r({ref:t},m))}));function k(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:i,r[1]=s;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},20862:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const o={id:"host-management",sidebar_position:1,sidebar_label:"Host Management",title:"Host Management"},r=void 0,s={unversionedId:"host/host-management",id:"version-v1.2/host/host-management",title:"Host Management",description:"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are three or more nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster.",source:"@site/versioned_docs/version-v1.2/host/host.md",sourceDirName:"host",slug:"/host/",permalink:"/zh/v1.2/host/",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/host/host.md",tags:[],version:"v1.2",sidebarPosition:1,frontMatter:{id:"host-management",sidebar_position:1,sidebar_label:"Host Management",title:"Host Management"},sidebar:"docs",previous:{title:"Upload Images",permalink:"/zh/v1.2/upload-image"},next:{title:"Create a Virtual Machine",permalink:"/zh/v1.2/vm/index"}},l={},d=[{value:"Node Maintenance",id:"node-maintenance",level:2},{value:"Cordoning a Node",id:"cordoning-a-node",level:2},{value:"Deleting a Node",id:"deleting-a-node",level:2},{value:"Multi-disk Management",id:"multi-disk-management",level:2},{value:"Add Additional Disks",id:"add-additional-disks",level:3},{value:"Storage Tags",id:"storage-tags",level:3},{value:"Setup",id:"setup",level:4},{value:"Remove disks",id:"remove-disks",level:3},{value:"Identify the disk to remove (Harvester dashboard)",id:"identify-the-disk-to-remove-harvester-dashboard",level:4},{value:"Evict replicas (Longhorn dashboard)",id:"evict-replicas-longhorn-dashboard",level:4},{value:"Remove the disk (Harvester dashboard)",id:"remove-the-disk-harvester-dashboard",level:4},{value:"Ksmtuned Mode",id:"ksmtuned-mode",level:2},{value:"Quick Run",id:"quick-run",level:3},{value:"Parameters",id:"parameters",level:3},{value:"NTP Configuration",id:"ntp-configuration",level:2}],m={toc:d},p="wrapper";function h(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Users can view and manage Harvester nodes from the host page. The first node always defaults to be a management node of the cluster. When there are three or more nodes, the two other nodes that first joined are automatically promoted to management nodes to form a HA cluster."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"Because Harvester is built on top of Kubernetes and uses etcd as its database, the maximum node fault toleration is one when there are three management nodes.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"host.png",src:a(11705).Z,width:"5118",height:"2170"})),(0,i.kt)("h2",{id:"node-maintenance"},"Node Maintenance"),(0,i.kt)("p",null,"For admin users, you can click ",(0,i.kt)("strong",{parentName:"p"},"Enable Maintenance Mode")," to evict all VMs from a node automatically. It will leverage the ",(0,i.kt)("inlineCode",{parentName:"p"},"VM live migration")," feature to migrate all VMs to other nodes automatically. Note that at least two active nodes are required to use this feature."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"node-maintenance.png",src:a(272).Z,width:"4394",height:"1932"})),(0,i.kt)("h2",{id:"cordoning-a-node"},"Cordoning a Node"),(0,i.kt)("p",null,"Cordoning a node marks it as unschedulable. This feature is useful for performing short tasks on the node during small maintenance windows, like reboots, upgrades, or decommissions. When you\u2019re done, power back on and make the node schedulable again by uncordoning it."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"cordon-node.png",src:a(7721).Z,width:"4402",height:"1878"})),(0,i.kt)("h2",{id:"deleting-a-node"},"Deleting a Node"),(0,i.kt)("p",null,"Deleting a node is done in two phases:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Delete the node from Harvester"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Hosts")," page"),(0,i.kt)("li",{parentName:"ul"},"On the node you want to modify, click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Delete")))),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Uninstall RKE2 from the node"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Login to the node as root"),(0,i.kt)("li",{parentName:"ul"},"Run ",(0,i.kt)("inlineCode",{parentName:"li"},"rke2-uninstall.sh")," to delete the whole RKE2 service.")))),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You will lose all data of the control plane node after deleting the RKE2 service.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"There's a ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1497"},"known issue")," about node hard delete.\nOnce resolved, the last step can be skipped.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"delete.png",src:a(91810).Z,width:"4398",height:"1888"})),(0,i.kt)("h2",{id:"multi-disk-management"},"Multi-disk Management"),(0,i.kt)("h3",{id:"add-additional-disks"},"Add Additional Disks"),(0,i.kt)("p",null,"Users can view and add multiple disks as additional data volumes from the edit host page."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,i.kt)("li",{parentName:"ol"},"On the node you want to modify, click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit Config",src:a(91902).Z,width:"2878",height:"1178"})),(0,i.kt)("ol",{start:3},(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Storage")," tab and click ",(0,i.kt)("strong",{parentName:"li"},"Add Disk"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Add Disks",src:a(43752).Z,width:"2878",height:"1672"})),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"As of Harvester v1.0.2, we no longer support adding partitions as additional disks. If you want to add it as an additional disk, be sure to delete all partitions first (e.g., using ",(0,i.kt)("inlineCode",{parentName:"p"},"fdisk"),").")),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Select an additional raw block device to add as an additional data volume.",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"Force Formatted")," option is required if the block device has never been force-formatted.")))),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Force Format",src:a(27355).Z,width:"2880",height:"2244"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Last, you can click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),' again to check the newly added disk. Meanwhile, you can also add the "Host/Disk" tag (details are described in the ',(0,i.kt)("a",{parentName:"li",href:"#storage-tags"},"next section"),").")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Check Result",src:a(89798).Z,width:"2880",height:"2424"})),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"In order for Harvester to identify the disks, each disk needs to have a unique ",(0,i.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/World_Wide_Name"},"WWN"),". Otherwise, Harvester will refuse to add the disk.\nIf your disk does not have a WWN, you can format it with the ",(0,i.kt)("inlineCode",{parentName:"p"},"EXT4")," filesystem to help Harvester recognize the disk.")),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If you are testing Harvester in a QEMU environment, you'll need to use QEMU v6.0 or later. Previous versions of QEMU will always generate the same WWN for NVMe disks emulation. This will cause Harvester to not add the additional disks, as explained above. However, you can still add a virtual disk with the SCSI controller. The WWN information could be added manually along with the disk attach operation. For more details, please refer to the ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/vagrant-rancherd/blob/2782981b6017754d016f5b72d630dff4895f7ad6/scripts/attach-disk.sh#L75"},"script"),".")),(0,i.kt)("h3",{id:"storage-tags"},"Storage Tags"),(0,i.kt)("p",null,"The storage tag feature enables only certain nodes or disks to be used for storing Longhorn volume data. For example, performance-sensitive data can use only the high-performance disks which can be tagged as ",(0,i.kt)("inlineCode",{parentName:"p"},"fast"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"ssd")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"nvme"),", or only the high-performance nodes tagged as ",(0,i.kt)("inlineCode",{parentName:"p"},"baremetal"),"."),(0,i.kt)("p",null,"This feature supports both disks and nodes."),(0,i.kt)("h4",{id:"setup"},"Setup"),(0,i.kt)("p",null,"The tags can be set up through the Harvester UI on the host page:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Hosts")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Edit Config")," -> ",(0,i.kt)("inlineCode",{parentName:"li"},"Storage")),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Add Host/Disk Tags")," to start typing and hit enter to add new tags."),(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("inlineCode",{parentName:"li"},"Save")," to update tags."),(0,i.kt)("li",{parentName:"ol"},"On the ",(0,i.kt)("a",{parentName:"li",href:"/zh/v1.2/advanced/storageclass"},"StorageClasses")," page, create a new storage class and select those defined tags on the ",(0,i.kt)("inlineCode",{parentName:"li"},"Node Selector")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"Disk Selector")," fields.")),(0,i.kt)("p",null,"All the existing scheduled volumes on the node or disk won\u2019t be affected by the new tags."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"When multiple tags are specified for a volume, the disk and the nodes (that the disk belongs to) must have all the specified tags to become usable.")),(0,i.kt)("h3",{id:"remove-disks"},"Remove disks"),(0,i.kt)("p",null,"Before removing a disk, you must first evict Longhorn replicas on the disk."),(0,i.kt)("admonition",{type:"note"},(0,i.kt)("p",{parentName:"admonition"},"The replica data would be rebuilt to another disk automatically to keep the high availability.")),(0,i.kt)("h4",{id:"identify-the-disk-to-remove-harvester-dashboard"},"Identify the disk to remove (Harvester dashboard)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,i.kt)("li",{parentName:"ol"},"On the node containing the disk, select the node name and go to the ",(0,i.kt)("strong",{parentName:"li"},"Storage")," tab."),(0,i.kt)("li",{parentName:"ol"},"Find the disk you want to remove. Let's assume we want to remove ",(0,i.kt)("inlineCode",{parentName:"li"},"/dev/sdb"),", and the disk's mount point is ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/harvester/extra-disks/1b805b97eb5aa724e6be30cbdb373d04"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Find disk to remove",src:a(96104).Z,width:"3772",height:"1526"})),(0,i.kt)("h4",{id:"evict-replicas-longhorn-dashboard"},"Evict replicas (Longhorn dashboard)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Please follow ",(0,i.kt)("a",{parentName:"li",href:"/zh/v1.2/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},"this session")," to enable the embedded Longhorn dashboard."),(0,i.kt)("li",{parentName:"ol"},"Visit the Longhorn dashboard and go to the ",(0,i.kt)("strong",{parentName:"li"},"Node")," page."),(0,i.kt)("li",{parentName:"ol"},"Expand the node containing the disk. Confirm the mount point ",(0,i.kt)("inlineCode",{parentName:"li"},"/var/lib/harvester/extra-disks/1b805b97eb5aa724e6be30cbdb373d04")," is in the disks list. ")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Check the removing disk",src:a(75056).Z,width:"3616",height:"726"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Edit node and disks"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit node and disks",src:a(6825).Z,width:"3616",height:"728"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Scroll to the disk you want to remove.")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Scheduling")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"Disable"),"."),(0,i.kt)("li",{parentName:"ul"},"Set ",(0,i.kt)("inlineCode",{parentName:"li"},"Eviction Requested")," to ",(0,i.kt)("inlineCode",{parentName:"li"},"True"),"."),(0,i.kt)("li",{parentName:"ul"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Save"),". Do not select the delete icon.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Evict disk",src:a(10052).Z,width:"1608",height:"966"})),(0,i.kt)("ol",{start:6},(0,i.kt)("li",{parentName:"ol"},"The disk will be disabled. Please wait until the disk replica count becomes ",(0,i.kt)("inlineCode",{parentName:"li"},"0")," to proceed with removing the disk.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Wait replicas",src:a(27073).Z,width:"3618",height:"728"})),(0,i.kt)("h4",{id:"remove-the-disk-harvester-dashboard"},"Remove the disk (Harvester dashboard)"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,i.kt)("li",{parentName:"ol"},"On the node containing the disk, select ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Storage")," tab and select ",(0,i.kt)("strong",{parentName:"li"},"x"),"  to remove the disk.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Remove disk",src:a(8893).Z,width:"3774",height:"1520"})),(0,i.kt)("ol",{start:4},(0,i.kt)("li",{parentName:"ol"},"Select ",(0,i.kt)("strong",{parentName:"li"},"Save")," to remove the disk.")),(0,i.kt)("h2",{id:"ksmtuned-mode"},"Ksmtuned Mode"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,i.kt)("p",null,"Ksmtuned is a KSM automation tool deployed as a DaemonSet to run Ksmtuned on each node. It will start or stop the KSM by watching the available memory percentage ratio (",(0,i.kt)("strong",{parentName:"p"},"i.e. Threshold Coefficient"),"). By default, you need to manually enable Ksmtuned on each node UI. You will be able to see the KSM statistics from the node UI after 1-2 minutes.(check ",(0,i.kt)("a",{parentName:"p",href:"https://www.kernel.org/doc/html/latest/admin-guide/mm/ksm.html#ksm-daemon-sysfs-interface"},"KSM")," for more details)."),(0,i.kt)("h3",{id:"quick-run"},"Quick Run"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Go to the ",(0,i.kt)("strong",{parentName:"li"},"Hosts")," page."),(0,i.kt)("li",{parentName:"ol"},"On the node you want to modify, click ",(0,i.kt)("strong",{parentName:"li"},"\u22ee > Edit Config"),"."),(0,i.kt)("li",{parentName:"ol"},"Select the ",(0,i.kt)("strong",{parentName:"li"},"Ksmtuned")," tab and select ",(0,i.kt)("strong",{parentName:"li"},"Run")," in ",(0,i.kt)("strong",{parentName:"li"},"Run Strategy"),"."),(0,i.kt)("li",{parentName:"ol"},"(Optional) You can modify ",(0,i.kt)("strong",{parentName:"li"},"Threshold Coefficient")," as needed.")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Edit Ksmtuned",src:a(39413).Z,width:"2150",height:"984"})),(0,i.kt)("ol",{start:5},(0,i.kt)("li",{parentName:"ol"},"Click ",(0,i.kt)("strong",{parentName:"li"},"Save")," to update."),(0,i.kt)("li",{parentName:"ol"},"Wait for about 1-2 minutes and you can check its ",(0,i.kt)("strong",{parentName:"li"},"Statistics")," by clicking ",(0,i.kt)("strong",{parentName:"li"},"Your Node > Ksmtuned tab"),".")),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"View Ksmtuned Statistics",src:a(39937).Z,width:"2002",height:"402"})),(0,i.kt)("h3",{id:"parameters"},"Parameters"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Run Strategy:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Stop:")," Stop Ksmtuned and KSM. VMs can still use shared memory pages."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Run:")," Run Ksmtuned."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Prune:")," Stop Ksmtuned and prune KSM memory pages.")),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Threshold Coefficient"),": configures the available memory percentage ratio. If the available memory is less than the threshold, KSM will be started; otherwise, KSM will be stopped."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Merge Across Nodes:")," specifies if pages from different NUMA nodes can be merged."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Mode:")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Standard:")," The default mode. The control node ksmd uses about 20% of a single CPU. It uses the following parameters:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Boost: 0\nDecay: 0\nMaximum Pages: 100\nMinimum Pages: 100\nSleep Time: 20\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"High-performance:")," Node ksmd uses 20% to 100% of a single CPU and has higher scanning and merging efficiency. It uses the following parameters:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Boost: 200\nDecay: 50\nMaximum Pages: 10000\nMinimum Pages: 100\nSleep Time: 20\n")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Customized:")," You can customize the configuration to reach the performance that you want.")),(0,i.kt)("p",null,"Ksmtuned uses the following parameters to control KSM efficiency:"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Parameters"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Boost"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of scanned pages is incremented each time if the available memory is less than the ",(0,i.kt)("strong",{parentName:"td"},"Threshold Coefficient"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Decay"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The number of scanned pages is decremented each time if the available memory is greater than the ",(0,i.kt)("strong",{parentName:"td"},"Threshold Coefficient"),".")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Maximum Pages"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Maximum number of pages per scan.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Minimum Pages"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The minimum number of pages per scan, also the configuration for the first run.")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Sleep Time (ms)"),(0,i.kt)("td",{parentName:"tr",align:"left"},"The interval between two scans, which is calculated with the formula (",(0,i.kt)("strong",{parentName:"td"},"Sleep Time")," ","*"," 16 ","*"," 1024","*"," 1024 / Total Memory). Minimum: 10ms.")))),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"For example, assume you have a 512GiB memory node that uses the following parameters:")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-yaml"},"Boost: 300\nDecay: 100\nMaximum Pages: 5000\nMinimum Pages: 1000\nSleep Time: 50\n")),(0,i.kt)("p",null,"When Ksmtuned starts, initialize ",(0,i.kt)("inlineCode",{parentName:"p"},"pages_to_scan")," in KSM to 1000 (",(0,i.kt)("strong",{parentName:"p"},"Minimum Pages"),") and set ",(0,i.kt)("inlineCode",{parentName:"p"},"sleep_millisecs")," to 10 (50 ","*"," 16 ","*"," 1024 ","*"," 1024 / 536870912 KiB < 10)."),(0,i.kt)("p",null,"KSM starts when the available memory falls below the ",(0,i.kt)("strong",{parentName:"p"},"Threshold Coefficient"),". If it detects that it is running, ",(0,i.kt)("inlineCode",{parentName:"p"},"pages_to_scan")," increments by 300 (",(0,i.kt)("strong",{parentName:"p"},"Boost"),") every minute until it reaches 5000 (",(0,i.kt)("strong",{parentName:"p"},"Maximum Pages"),")."),(0,i.kt)("p",null,"KSM will stop when the available memory is above the ",(0,i.kt)("strong",{parentName:"p"},"Threshold Coefficient"),". If it detects that it is stopped, ",(0,i.kt)("inlineCode",{parentName:"p"},"pages_to_scan")," decrements by 100 (",(0,i.kt)("strong",{parentName:"p"},"Decay"),") every minute until it reaches 1000 (",(0,i.kt)("strong",{parentName:"p"},"Minimum Pages"),")."),(0,i.kt)("h2",{id:"ntp-configuration"},"NTP Configuration"),(0,i.kt)("p",null,"Time synchronization is an important aspect of distributed cluster architecture. Because of this, Harvester now provides a simpler way for configuring NTP settings."),(0,i.kt)("p",null,"In previous Harvester versions, NTP settings were mainly configurable ",(0,i.kt)("a",{parentName:"p",href:"https://docs.harvesterhci.io/v1.2/install/harvester-configuration#osntp_servers"},"during the installation process"),". To modify the settings, you needed to manually update the configuration file on each node."),(0,i.kt)("p",null,"Beginning with version v1.2.0, Harvester is supporting NTP configuration on the Harvester UI Settings screen (",(0,i.kt)("strong",{parentName:"p"},"Advanced")," > ",(0,i.kt)("strong",{parentName:"p"},"Settings"),"). You can configure NTP settings for the entire Harvester cluster at any time, and the settings are applied to all nodes in the cluster."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(93593).Z,width:"1906",height:"877"})),(0,i.kt)("p",null,"You can set up multiple NTP servers at once."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(22639).Z,width:"1618",height:"808"})),(0,i.kt)("p",null,"You can check the settings in the ",(0,i.kt)("inlineCode",{parentName:"p"},"node.harvesterhci.io/ntp-service")," annotation in Kubernetes nodes: "),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"ntpSyncStatus"),": Status of the connection to NTP servers (possible values: ",(0,i.kt)("inlineCode",{parentName:"li"},"disabled"),", ",(0,i.kt)("inlineCode",{parentName:"li"},"synced")," and ",(0,i.kt)("inlineCode",{parentName:"li"},"unsynced"),")"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"currentNtpServers"),": List of existing NTP servers")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},'$ kubectl get nodes harvester-node-0 -o yaml |yq -e \'.metadata.annotations.["node.harvesterhci.io/ntp-service"]\'\n{"ntpSyncStatus":"synced","currentNtpServers":"0.suse.pool.ntp.org 1.suse.pool.ntp.org"}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"Note:")),(0,i.kt)("ol",{parentName:"blockquote"},(0,i.kt)("li",{parentName:"ol"},"Do not modify the NTP configuration file on each node. Harvester will automatically sync the settings that you configured on the Harvester UI to the nodes."),(0,i.kt)("li",{parentName:"ol"},"If you upgraded Harvester from an earlier version, the ",(0,i.kt)("strong",{parentName:"li"},"ntp-servers")," list on the Settings screen will be empty (see screenshot). You must manually configure the NTP settings because Harvester is unaware of the previous settings and is unable to detect conflicts."))),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(55290).Z,width:"1544",height:"245"})))}h.isMDXComponent=!0},43752:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/add-disks-770f1d364a4d956ff1f57a224e76bbc0.png"},89798:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/check-added-disks-1e2efd9b76545d051ce4006a549f7032.png"},7721:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/cordon-nodes-1bd56c52995e6d73b2328bddc5f7e4fa.png"},91810:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/delete-node-66bb510f8160cf410a14ccafe973dbda.png"},91902:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-config-1ea18d102ade6b702a763f4cbb7ac694.png"},39413:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/edit-ksmtuned-14bde13e55cb1f5615d01d4258e8f5ce.png"},27355:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/force-format-disks-7fbfbe35486660cc6f4d0f72f9537915.png"},55290:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/harvester-ntp-settings-empty-17a0c85f9c08d558f06f97eb67927305.png"},22639:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/harvester-ntp-settings-multiple-c63a4bd21618d58889aade68d25749c8.png"},93593:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/harvester-ntp-settings-616b9206fb3897e2dd6b6b4d57155296.png"},11705:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/host-59f511ef325881a27dfe07b04af4b5a2.png"},272:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/node-maintenance-f7a92cb91c2123bd985fe26c2c3f283c.png"},96104:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-harvester-find-disk-2b6cd0af1cf2f2be035635ec40763d66.png"},8893:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-harvester-remove-94cef82d865bc4ae4afaf9552831cb1d.png"},6825:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-longhorn-nodes-edit-ae615edafa3907358bd7733a48c813cd.png"},10052:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-longhorn-nodes-evict-disk-d15ebcea68f64c4fb2a007bccc8b89ab.png"},75056:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-longhorn-nodes-cfb6fd5ae28f64f63345dd3e33de2a84.png"},27073:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/remove-disks-longhorn-wait-replicas-9a6c61abe6fe4310d4e63533c3f4b2b4.png"},39937:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/view-ksmtuned-statistics-c3e0cac6dc3344b72e8726a6cca8990e.png"}}]);