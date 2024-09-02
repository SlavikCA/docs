"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[97202],{99793:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>n,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>m});i(67294);var o=i(3905);const a={sidebar_position:6,sidebar_label:"Live Migration",title:"Live Migration",keywords:["Harvester","harvester","Rancher","rancher","Live Migration"],description:"Live migration means moving a virtual machine to a different host without downtime."},n=void 0,l={unversionedId:"vm/live-migration",id:"vm/live-migration",title:"Live Migration",description:"Live migration means moving a virtual machine to a different host without downtime.",source:"@site/docs/vm/live-migration.md",sourceDirName:"vm",slug:"/vm/live-migration",permalink:"/v1.4/vm/live-migration",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/live-migration.md",tags:[],version:"current",lastUpdatedAt:1725241489,formattedLastUpdatedAt:"Sep 2, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Live Migration",title:"Live Migration",keywords:["Harvester","harvester","Rancher","rancher","Live Migration"],description:"Live migration means moving a virtual machine to a different host without downtime."},sidebar:"api",previous:{title:"VM Backup, Snapshot & Restore",permalink:"/v1.4/vm/backup-restore"},next:{title:"Hot-Plug Volumes",permalink:"/v1.4/vm/hotplug-volume"}},r={},m=[{value:"How Migration Works",id:"how-migration-works",level:2},{value:"Starting a Migration",id:"starting-a-migration",level:2},{value:"Aborting a Migration",id:"aborting-a-migration",level:2},{value:"Migration Timeouts",id:"migration-timeouts",level:2},{value:"Completion Timeout",id:"completion-timeout",level:3},{value:"Progress Timeout",id:"progress-timeout",level:3},{value:"Limitation",id:"limitation",level:2}],s={toc:m},d="wrapper";function u({components:e,...t}){return(0,o.kt)(d,{...s,...t,components:e,mdxType:"MDXLayout"},(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/live-migration"})),(0,o.kt)("p",null,"Live migration means moving a virtual machine to a different host without downtime."),(0,o.kt)("admonition",{type:"note"},(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Live migration is not allowed when the virtual machine is using a management network of bridge interface type."),(0,o.kt)("li",{parentName:"ul"},"Live migration is not allowed when the virtual machine has any volume of the ",(0,o.kt)("inlineCode",{parentName:"li"},"CD-ROM")," type. Such volumes should be ejected before live migration."),(0,o.kt)("li",{parentName:"ul"},"Live migration is not allowed when the virtual machine has any volume of the ",(0,o.kt)("inlineCode",{parentName:"li"},"Container Disk")," type. Such volumes should be removed before live migration."),(0,o.kt)("li",{parentName:"ul"},"Live migration is not allowed when the virtual machine has any ",(0,o.kt)("inlineCode",{parentName:"li"},"PCIDevice")," passthrough enabled. Such devices need to be removed before live migration."))),(0,o.kt)("h2",{id:"how-migration-works"},"How Migration Works"),(0,o.kt)("p",null,"Each node has multiple CPU models that are labeled with different keys."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Primary CPU model: ",(0,o.kt)("inlineCode",{parentName:"li"},"host-model-cpu.node.kubevirt.io/{cpu-model}")),(0,o.kt)("li",{parentName:"ul"},"Supported CPU models: ",(0,o.kt)("inlineCode",{parentName:"li"},"cpu-model.node.kubevirt.io/{cpu-model}")),(0,o.kt)("li",{parentName:"ul"},"Supported CPU models for migration: ",(0,o.kt)("inlineCode",{parentName:"li"},"cpu-model-migration.node.kubevirt.io/{cpu-model}"))),(0,o.kt)("p",null,"During live migration, the system checks the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.domain.cpu.model")," in the VirtualMachineInstance (VMI) CR, which is derived from ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.template.spec.domain.cpu.model")," in the VirtualMachine (VM) CR. If the value of ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.template.spec.domain.cpu.model")," is not set, the system uses the default value ",(0,o.kt)("inlineCode",{parentName:"p"},"host-model"),"."),(0,o.kt)("p",null,"When ",(0,o.kt)("inlineCode",{parentName:"p"},"host-model")," is used, the process fetches the value of the primary CPU model and fills ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.NodeSelectors")," of the newly created pod with the label ",(0,o.kt)("inlineCode",{parentName:"p"},"cpu-model-migration.node.kubevirt.io/{cpu-model}"),". "),(0,o.kt)("p",null,"Alternatively, you can customize the CPU model in ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.domain.cpu.model"),". For example, if the CPU model is ",(0,o.kt)("inlineCode",{parentName:"p"},"XYZ"),", the process fills ",(0,o.kt)("inlineCode",{parentName:"p"},"spec.NodeSelectors")," of the newly created pod with the label ",(0,o.kt)("inlineCode",{parentName:"p"},"cpu-model.node.kubevirt.io/XYZ"),"."),(0,o.kt)("p",null,"However, ",(0,o.kt)("inlineCode",{parentName:"p"},"host-model")," only allows migration of the VM to a node with same CPU model. For more information, see ",(0,o.kt)("a",{parentName:"p",href:"#limitation"},"Limitations"),"."),(0,o.kt)("h2",{id:"starting-a-migration"},"Starting a Migration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,o.kt)("li",{parentName:"ol"},"Find the virtual machine that you want to migrate and select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Migrate"),"."),(0,o.kt)("li",{parentName:"ol"},"Choose the node to which you want to migrate the virtual machine. Click ",(0,o.kt)("strong",{parentName:"li"},"Apply"),".")),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(60666).Z,width:"4266",height:"1958"})),(0,o.kt)("p",null,"When you have ",(0,o.kt)("a",{parentName:"p",href:"/v1.4/vm/create-windows-vm#node-scheduling-tab"},"node scheduling rules")," configured for a VM, you must ensure that the target nodes you are migrating to meet the VM's runtime requirements. The list of nodes you get to search and select from will be generated based on:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"VM scheduling rules."),(0,o.kt)("li",{parentName:"ul"},"Possibly node rules from the network configuration.")),(0,o.kt)("p",null,(0,o.kt)("img",{src:i(66707).Z,width:"4274",height:"1664"})),(0,o.kt)("h2",{id:"aborting-a-migration"},"Aborting a Migration"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"Go to the ",(0,o.kt)("strong",{parentName:"li"},"Virtual Machines")," page."),(0,o.kt)("li",{parentName:"ol"},"Find the virtual machine in migrating status that you want to abort. Select ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Abort Migration"),".")),(0,o.kt)("h2",{id:"migration-timeouts"},"Migration Timeouts"),(0,o.kt)("h3",{id:"completion-timeout"},"Completion Timeout"),(0,o.kt)("p",null,"The live migration process will copy virtual machine memory pages and disk blocks to the destination. In some cases, the virtual machine can write to different memory pages or disk blocks at a higher rate than these can be copied. As a result, the migration process is prevented from being completed in a reasonable amount of time. "),(0,o.kt)("p",null,"Live migration will be aborted if it exceeds the completion timeout of 800s per GiB of data. For example, a virtual machine with 8 GiB of memory will time out after 6400 seconds."),(0,o.kt)("h3",{id:"progress-timeout"},"Progress Timeout"),(0,o.kt)("p",null,"Live migration will also be aborted when copying memory doesn't make any progress in 150s."),(0,o.kt)("h2",{id:"limitation"},"Limitation"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"host-model")," only allows migration of the VM to a node with same CPU model. However, specifying a CPU model is not always required. When no CPU model is specified, you must shut down the VM, assign a CPU model that is supported by all nodes, and then restart the VM."),(0,o.kt)("p",null,"Example:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"A node: ",(0,o.kt)("inlineCode",{parentName:"li"},"host-model-cpu.node.kubevirt.io/XYZ")," ",(0,o.kt)("inlineCode",{parentName:"li"},"cpu-model-migration.node.kubevirt.io/XYZ")," ",(0,o.kt)("inlineCode",{parentName:"li"},"cpu-model.node.kubevirt.io/123")),(0,o.kt)("li",{parentName:"ul"},"B node: ",(0,o.kt)("inlineCode",{parentName:"li"},"host-model-cpu.node.kubevirt.io/ABC")," ",(0,o.kt)("inlineCode",{parentName:"li"},"cpu-model-migration.node.kubevirt.io/ABC")," ",(0,o.kt)("inlineCode",{parentName:"li"},"cpu-model.node.kubevirt.io/123"))),(0,o.kt)("p",null,"Migrating a VM with ",(0,o.kt)("inlineCode",{parentName:"p"},"host-model")," is not possible because the values of ",(0,o.kt)("inlineCode",{parentName:"p"},"host-model-cpu.node.kubevirt.io")," are not identical. However, both nodes support the ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," CPU model, so you can migrate any VM with the ",(0,o.kt)("inlineCode",{parentName:"p"},"123")," CPU model using either of the following methods:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Cluster level: Run ",(0,o.kt)("inlineCode",{parentName:"li"},"kubectl edit kubevirts.kubevirt.io -n harvester-system")," and add ",(0,o.kt)("inlineCode",{parentName:"li"},'spec.configuration.cpuModel: "123"'),". This change also affects newly created VMs."),(0,o.kt)("li",{parentName:"ul"},"Individual VMs: Modify the VM configuration to include ",(0,o.kt)("inlineCode",{parentName:"li"},'spec.template.spec.domain.cpu.model: "123"'),".")),(0,o.kt)("p",null,"Both methods require the restarting the VMs. If you are certain that all nodes in the cluster support a specific CPU model, you can define this at the cluster level before creating any VMs. In doing so, you eliminate the need to restart the VMs (to assign the CPU model) during live migration."))}u.isMDXComponent=!0},60666:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/migrate-action-192c7bb5e368831a1a95bb8aa5583fa8.png"},66707:(e,t,i)=>{i.d(t,{Z:()=>o});const o=i.p+"assets/images/migrate-8c73e32fe486a552edc9130043bff0c4.png"}}]);