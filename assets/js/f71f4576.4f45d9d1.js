"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[21351],{25468:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>r,contentTitle:()=>i,default:()=>c,frontMatter:()=>s,metadata:()=>o,toc:()=>l});n(67294);var a=n(3905);const s={sidebar_position:10,sidebar_label:"CloudInit CRD",title:"CloudInit CRD"},i=void 0,o={unversionedId:"advanced/cloudinitcrd",id:"version-v1.3/advanced/cloudinitcrd",title:"CloudInit CRD",description:"Available as of v1.3.0",source:"@site/versioned_docs/version-v1.3/advanced/cloudinitcrd.md",sourceDirName:"advanced",slug:"/advanced/cloudinitcrd",permalink:"/v1.3/advanced/cloudinitcrd",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/advanced/cloudinitcrd.md",tags:[],version:"v1.3",lastUpdatedAt:1725241489,formattedLastUpdatedAt:"Sep 2, 2024",sidebarPosition:10,frontMatter:{sidebar_position:10,sidebar_label:"CloudInit CRD",title:"CloudInit CRD"},sidebar:"api",previous:{title:"vGPU Support",permalink:"/v1.3/advanced/vgpusupport"},next:{title:"Rancher Integration",permalink:"/v1.3/rancher/rancher-integration"}},r={},l=[{value:"Background",id:"background",level:2},{value:"Getting Started",id:"getting-started",level:2}],d={toc:l},u="wrapper";function c({components:e,...t}){return(0,a.kt)(u,{...d,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/cloudinitcrd"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.3.0")),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",{parentName:"p"},"CloudInit")," CRD to configure Harvester operating system settings either manually or using GitOps solutions."),(0,a.kt)("h2",{id:"background"},"Background"),(0,a.kt)("p",null,"The Harvester operating system uses the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rancher/elemental-toolkit"},"elemental-toolkit"),", which has a unique form of ",(0,a.kt)("a",{parentName:"p",href:"https://rancher.github.io/elemental-toolkit/docs/reference/cloud_init/"},"cloud-init support"),". "),(0,a.kt)("p",null,"Settings configured during the Harvester installation process are written to the ",(0,a.kt)("inlineCode",{parentName:"p"},"elemental")," cloud-init file in the ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem")," directory. Because the Harvester operating system is immutable, the cloud-init file ensures that node-specific settings are applied on each reboot. "),(0,a.kt)("p",null,"The Harvester ",(0,a.kt)("inlineCode",{parentName:"p"},"CloudInit")," CRD exposes the cloud-init file through a Kubernetes CRD. This allows you to modify node-specific settings after installation without needing to take steps to make the root filesystem writable."),(0,a.kt)("p",null,"In addition, the ",(0,a.kt)("inlineCode",{parentName:"p"},"CloudInit")," CRD is persisted and synchronized with the underlying hosts so that changes made directly to the Harvester operating system are not lost whenever nodes are rebooted and upgraded."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"The ",(0,a.kt)("inlineCode",{parentName:"p"},"CloudInit")," CRD is a cluster-scoped resource. Ensure that your user account has the permissions required to access the resource (via Rancher role-based access control).")),(0,a.kt)("h2",{id:"getting-started"},"Getting Started"),(0,a.kt)("p",null,"The following example adds SSH keys to all nodes in an existing Harvester cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: node.harvesterhci.io/v1beta1\nkind: CloudInit\nmetadata:\n  name: my-ssh-keys\nspec:\n  matchSelector: \n    harvesterhci.io/managed: "true"\n  filename: 99-my-ssh-keys\n  contents: |\n    stages:\n      network:\n        - name: "add my ssh keys"\n          authorized_keys:\n            rancher:\n            - ssh-rsa key1\n            - ssh-rsa key2\n  paused: false\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"spec")," field contains the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"matchSelector (required)"),": Label selector used to identify the nodes that the change must be applied to. ",(0,a.kt)("inlineCode",{parentName:"li"},'harvesterhci.io/managed: "true"')," is a Harvester-specific label that you can use to select all nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"filename (required)"),": Name of the file in ",(0,a.kt)("inlineCode",{parentName:"li"},"/oem"),". cloud-init files in ",(0,a.kt)("inlineCode",{parentName:"li"},"/oem")," are applied in alphabetical order. This can be used to ensure that file changes are applied during booting."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"content (required)"),": Inline content for the Elemental cloud-init resource that is written to target nodes."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"paused (optional)"),": Used to pause ",(0,a.kt)("inlineCode",{parentName:"li"},"CloudInit")," CRD reconciliation. The Harvester controllers monitor Elemental cloud-init files that are managed by the ",(0,a.kt)("inlineCode",{parentName:"li"},"CloudInit")," CRD. Direct changes made to these files are immediately reconciled back to the defined state unless the CRD is paused. ")),(0,a.kt)("p",null,"Once the object is created, you can log in to the target nodes to verify the results."),(0,a.kt)("p",null,"In the following example, a file named ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/99-my-ssh-keys.yaml")," is created and subsequently monitored by the Harvester controllers."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'harvester-qhgd4:/oem # more 99-my-ssh-keys.yaml\nstages:\n  network:\n    - name: "add my ssh keys"\n      authorized_keys:\n        rancher:\n        - ssh-rsa key1\n        - ssh-rsa key2\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," subresource can be used to track the rollout of a change to the underlying Harvester nodes."),(0,a.kt)("p",null,"In the following example, the ",(0,a.kt)("inlineCode",{parentName:"p"},"status")," values indicate that the change was applied to all three nodes in the cluster."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'status:\n  rollouts:\n    harvester-kfs2c:\n      conditions:\n      - lastTransitionTime: "2024-08-26T03:57:33Z"\n        message: ""\n        reason: CloudInitApplicable\n        status: "True"\n        type: Applicable\n      - lastTransitionTime: "2024-08-26T03:57:33Z"\n        message: Local file checksum is the same as the CloudInit checksum\n        reason: CloudInitChecksumMatch\n        status: "False"\n        type: OutOfSync\n      - lastTransitionTime: "2024-08-26T03:57:33Z"\n        message: 99-my-ssh-keys.yaml is present under /oem\n        reason: CloudInitPresentOnDisk\n        status: "True"\n        type: Present\n    harvester-qhgd4:\n      conditions:\n      - lastTransitionTime: "2024-08-26T03:57:33Z"\n        message: ""\n        reason: CloudInitApplicable\n        status: "True"\n        type: Applicable\n      - lastTransitionTime: "2024-08-26T04:00:00Z"\n        message: Local file checksum is the same as the CloudInit checksum\n        reason: CloudInitChecksumMatch\n        status: "False"\n        type: OutOfSync\n      - lastTransitionTime: "2024-08-26T04:00:00Z"\n        message: 99-my-ssh-keys.yaml is present under /oem\n        reason: CloudInitPresentOnDisk\n        status: "True"\n        type: Present\n    harvester-rmvzg:\n      conditions:\n      - lastTransitionTime: "2024-08-26T03:57:33Z"\n        message: ""\n        reason: CloudInitApplicable\n        status: "True"\n        type: Applicable\n      - lastTransitionTime: "2024-08-26T03:57:33Z"\n        message: Local file checksum is the same as the CloudInit checksum\n        reason: CloudInitChecksumMatch\n        status: "False"\n        type: OutOfSync\n      - lastTransitionTime: "2024-08-26T03:57:33Z"\n        message: 99-my-ssh-keys.yaml is present under /oem\n        reason: CloudInitPresentOnDisk\n        status: "True"\n        type: Present\n')),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"Once the cloud-init changes are applied, you must reboot the nodes to ensure that the ",(0,a.kt)("inlineCode",{parentName:"p"},"elemental-toolkit")," applies the requested changes to the operating system.")),(0,a.kt)("p",null,"Deleting the ",(0,a.kt)("inlineCode",{parentName:"p"},"CloudInit")," CRD results in the removal of associated files from the underlying Harvester nodes. As with other cloud-init resources, the effects of this change are not exhibited until the impacted nodes are rebooted."),(0,a.kt)("p",null,"You are encouraged to leverage ",(0,a.kt)("a",{parentName:"p",href:"https://fleet.rancher.io"},"Fleet")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"CloudInit")," CRD to manage changes to the Harvester operating system."))}c.isMDXComponent=!0}}]);