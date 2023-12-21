"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3732],{3905:(e,t,i)=>{i.d(t,{Zo:()=>c,kt:()=>g});var r=i(67294);function n(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function a(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,r)}return i}function o(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?a(Object(i),!0).forEach((function(t){n(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):a(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,r,n=function(e,t){if(null==e)return{};var i,r,n={},a=Object.keys(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||(n[i]=e[i]);return n}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)i=a[r],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(n[i]=e[i])}return n}var m=r.createContext({}),s=function(e){var t=r.useContext(m),i=t;return e&&(i="function"==typeof e?e(t):o(o({},t),e)),i},c=function(e){var t=s(e.components);return r.createElement(m.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},v=r.forwardRef((function(e,t){var i=e.components,n=e.mdxType,a=e.originalType,m=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=s(i),v=n,g=u["".concat(m,".").concat(v)]||u[v]||p[v]||a;return i?r.createElement(g,o(o({ref:t},c),{},{components:i})):r.createElement(g,o({ref:t},c))}));function g(e,t){var i=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=i.length,o=new Array(a);o[0]=v;var l={};for(var m in t)hasOwnProperty.call(t,m)&&(l[m]=t[m]);l.originalType=e,l[u]="string"==typeof e?e:n,o[1]=l;for(var s=2;s<a;s++)o[s]=i[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,i)}v.displayName="MDXCreateElement"},10350:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var r=i(87462),n=(i(67294),i(3905));const a={sidebar_position:6,sidebar_label:"Live Migration",title:"Live Migration",keywords:["Harvester","harvester","Rancher","rancher","Live Migration"],Description:"Live migration means moving a virtual machine to a different host without downtime."},o=void 0,l={unversionedId:"vm/live-migration",id:"version-v1.1/vm/live-migration",title:"Live Migration",description:"Live migration means moving a virtual machine to a different host without downtime.",source:"@site/versioned_docs/version-v1.1/vm/live-migration.md",sourceDirName:"vm",slug:"/vm/live-migration",permalink:"/v1.1/vm/live-migration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/vm/live-migration.md",tags:[],version:"v1.1",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Live Migration",title:"Live Migration",keywords:["Harvester","harvester","Rancher","rancher","Live Migration"],Description:"Live migration means moving a virtual machine to a different host without downtime."},sidebar:"tutorialSidebar",previous:{title:"VM Backup, Snapshot & Restore",permalink:"/v1.1/vm/backup-restore"},next:{title:"Hot-Plug Volumes",permalink:"/v1.1/vm/hotplug-volume"}},m={},s=[{value:"Starting a Migration",id:"starting-a-migration",level:2},{value:"Aborting a Migration",id:"aborting-a-migration",level:2},{value:"Migration Timeouts",id:"migration-timeouts",level:2},{value:"Completion Timeout",id:"completion-timeout",level:3},{value:"Progress Timeout",id:"progress-timeout",level:3}],c={toc:s},u="wrapper";function p(e){let{components:t,...a}=e;return(0,n.kt)(u,(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/live-migration"})),(0,n.kt)("p",null,"Live migration means moving a virtual machine to a different host without downtime."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Live migration is not allowed when the virtual machine is using a management network of bridge interface type."),(0,n.kt)("li",{parentName:"ul"},"Live migration is not allowed when the virtual machine has any volume of the ",(0,n.kt)("inlineCode",{parentName:"li"},"CD-ROM")," type. Such volumes should be ejected before live migration."),(0,n.kt)("li",{parentName:"ul"},"Live migration is not allowed when the virtual machine has any volume of the ",(0,n.kt)("inlineCode",{parentName:"li"},"Container Disk")," type. Such volumes should be removed before live migration."),(0,n.kt)("li",{parentName:"ul"},"Live migration is not allowed when the virtual machine has any  ",(0,n.kt)("inlineCode",{parentName:"li"},"PCIDevice")," passthrough enabled. Such devices need to be removed before live migration."))),(0,n.kt)("h2",{id:"starting-a-migration"},"Starting a Migration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,n.kt)("li",{parentName:"ol"},"Find the virtual machine that you want to migrate and select ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Migrate"),"."),(0,n.kt)("li",{parentName:"ol"},"Choose the node to which you want to migrate the virtual machine. Click ",(0,n.kt)("strong",{parentName:"li"},"Apply"),".")),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(88250).Z,width:"4266",height:"1958"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:i(12091).Z,width:"4274",height:"1664"})),(0,n.kt)("h2",{id:"aborting-a-migration"},"Aborting a Migration"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,n.kt)("li",{parentName:"ol"},"Find the virtual machine in migrating status that you want to abort. Select ",(0,n.kt)("strong",{parentName:"li"},"\u22ee > Abort Migration"),".")),(0,n.kt)("h2",{id:"migration-timeouts"},"Migration Timeouts"),(0,n.kt)("h3",{id:"completion-timeout"},"Completion Timeout"),(0,n.kt)("p",null,"The live migration process will copy virtual machine memory pages and disk blocks to the destination. In some cases, the virtual machine can write to different memory pages or disk blocks at a higher rate than these can be copied. As a result, the migration process is prevented from being completed in a reasonable amount of time. "),(0,n.kt)("p",null,"Live migration will be aborted if it exceeds the completion timeout of 800s per GiB of data. For example, a virtual machine with 8 GiB of memory will time out after 6400 seconds."),(0,n.kt)("h3",{id:"progress-timeout"},"Progress Timeout"),(0,n.kt)("p",null,"Live migration will also be aborted when copying memory doesn't make any progress in 150s."))}p.isMDXComponent=!0},88250:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/migrate-action-192c7bb5e368831a1a95bb8aa5583fa8.png"},12091:(e,t,i)=>{i.d(t,{Z:()=>r});const r=i.p+"assets/images/migrate-8c73e32fe486a552edc9130043bff0c4.png"}}]);