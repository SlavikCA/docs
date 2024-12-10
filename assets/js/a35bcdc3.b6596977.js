"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[44126],{41793:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>r,toc:()=>l});n(67294);var a=n(3905);const s={sidebar_position:8,sidebar_label:"Witness Node",title:"Witness Node"},o=void 0,r={unversionedId:"advanced/witness",id:"version-v1.3/advanced/witness",title:"Witness Node",description:"Available as of v1.3.0",source:"@site/versioned_docs/version-v1.3/advanced/witness.md",sourceDirName:"advanced",slug:"/advanced/witness",permalink:"/v1.3/advanced/witness",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/advanced/witness.md",tags:[],version:"v1.3",lastUpdatedAt:1733825626,formattedLastUpdatedAt:"Dec 10, 2024",sidebarPosition:8,frontMatter:{sidebar_position:8,sidebar_label:"Witness Node",title:"Witness Node"},sidebar:"api",previous:{title:"Custom SUSE VM Images",permalink:"/v1.3/advanced/customsuseimages"},next:{title:"vGPU Support",permalink:"/v1.3/advanced/vgpusupport"}},i={},l=[{value:"Creating a Harvester Cluster with a Witness Node",id:"creating-a-harvester-cluster-with-a-witness-node",level:2},{value:"Workloads on the Witness Node",id:"workloads-on-the-witness-node",level:2},{value:"Upgrade a Cluster with a Witness Node",id:"upgrade-a-cluster-with-a-witness-node",level:2},{value:"Longhorn Replicas in Clusters with a Witness Node",id:"longhorn-replicas-in-clusters-with-a-witness-node",level:2},{value:"Limitations",id:"limitations",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"1. When creating a cluster with a witness node, the <strong>Network Config: Create</strong> screen on the Harvester UI is unable to identify any NICs that can be used with all nodes.",id:"1-when-creating-a-cluster-with-a-witness-node-the-network-config-create-screen-on-the-harvester-ui-is-unable-to-identify-any-nics-that-can-be-used-with-all-nodes",level:3},{value:"2. When selecting a target node for VM migration, the target list includes the witness node.",id:"2-when-selecting-a-target-node-for-vm-migration-the-target-list-includes-the-witness-node",level:3}],d={toc:l},c="wrapper";function h({components:e,...t}){return(0,a.kt)(c,{...d,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/advanced/witness/"})),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"Available as of v1.3.0")),(0,a.kt)("p",null,"Harvester clusters deployed in production environments require a control plane for node and pod management. A typical three-node cluster has three management nodes that each contain the complete set of control plane components. One key component is etcd, which Kubernetes uses to store its data (configuration, state, and metadata). The etcd node count must always be an odd number (for example, 3 is the default count in Harvester) to ensure that a quorum is maintained."),(0,a.kt)("p",null,"Some situations may require you to avoid deploying workloads and user data to management nodes. In these situations, one cluster node can be assigned the ",(0,a.kt)("em",{parentName:"p"},"witness")," role, which limits it to functioning as an etcd cluster member. The witness node is responsible for establishing a member quorum (a majority of nodes), which must agree on updates to the cluster state."),(0,a.kt)("p",null,"Witness nodes do not store any data, but the ",(0,a.kt)("a",{parentName:"p",href:"https://etcd.io/docs/v3.3/op-guide/hardware/"},"hardware recommendations")," for etcd nodes must still be considered. Using hardware with limited resources significantly affects cluster performance, as described in the article ",(0,a.kt)("a",{parentName:"p",href:"https://www.suse.com/support/kb/doc/?id=000020100"},"Slow etcd performance (performance testing and optimization)"),". "),(0,a.kt)("p",null,"Harvester v1.3.0 supports clusters with two management nodes and one witness node (and optionally, one or more worker nodes). For more information about node roles in Harvester, see ",(0,a.kt)("a",{parentName:"p",href:"/v1.3/host/#role-management"},"Role Management"),"."),(0,a.kt)("admonition",{title:"important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"A node can be assigned the ",(0,a.kt)("em",{parentName:"p"},"witness")," role only at the time it joins a cluster. Each cluster can have only one witness node.")),(0,a.kt)("h2",{id:"creating-a-harvester-cluster-with-a-witness-node"},"Creating a Harvester Cluster with a Witness Node"),(0,a.kt)("p",null,"You can assign the ",(0,a.kt)("em",{parentName:"p"},"witness")," role to a node when it joins a newly created cluster."),(0,a.kt)("p",null,"In the following example, a cluster with three nodes was created and the node ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-node-1")," was assigned the ",(0,a.kt)("em",{parentName:"p"},"witness")," role. ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-node-1")," consumes less resources and only has etcd capabilities."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"NAME\u2191               STATUS   ROLE                         VERSION               PODS     CPU      MEM    %CPU    %MEM    CPU/A    MEM/A AGE        \nharvester-node-0    Ready    control-plane,etcd,master    v1.27.10+rke2r1         70    1095    10143      10      63    10000    15976 4d13h      \nharvester-node-1    Ready    etcd                         v1.27.10+rke2r1          7     258     2258       2      14    10000    15976 4d13h      \nharvester-node-2    Ready    control-plane,etcd,master    v1.27.10+rke2r1         36     840     6905       8      43    10000    15976 4d13h      \n")),(0,a.kt)("p",null,"Because the cluster must have three nodes, the promote controller will promote the other two nodes. After that, the cluster will have two control-plane nodes and one witness node."),(0,a.kt)("h2",{id:"workloads-on-the-witness-node"},"Workloads on the Witness Node"),(0,a.kt)("p",null,"The witness node only runs the following essential workloads:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"harvester-node-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"cloud-controller-manager")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"etcd")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"kube-proxy")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rke2-canal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("strong",{parentName:"li"},"rke2-multus"))),(0,a.kt)("h2",{id:"upgrade-a-cluster-with-a-witness-node"},"Upgrade a Cluster with a Witness Node"),(0,a.kt)("p",null,"The general upgrade requirements and procedures apply to clusters with a witness node. However, the existence of degraded volumes in such clusters may cause upgrade operations to fail. "),(0,a.kt)("h2",{id:"longhorn-replicas-in-clusters-with-a-witness-node"},"Longhorn Replicas in Clusters with a Witness Node"),(0,a.kt)("p",null,"Harvester uses Longhorn, a distributed block storage system, for management of block device volumes. Longhorn is provisioned to management and worker nodes but not to witness nodes, which do not store any data."),(0,a.kt)("p",null,"Longhorn creates replicas of each volume to increase availability. Replicas contain a chain of snapshots of the volume, with each snapshot storing the change from a previous snapshot. In Harvester, the default StorageClass ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-longhorn")," has a replica count value of ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),"."),(0,a.kt)("h2",{id:"limitations"},"Limitations"),(0,a.kt)("p",null,"Witness nodes do not store any data. This means that in three-node clusters (no worker nodes), only two replicas are created for each Longhorn volume. However, the default StorageClass ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester-longhorn")," has a replica count value of ",(0,a.kt)("inlineCode",{parentName:"p"},"3")," for high availability. If you use this StorageClass to create volumes, Longhorn is unable to create the configured number of replicas. This results in volumes being marked as ",(0,a.kt)("strong",{parentName:"p"},"Degraded")," on the Longhorn UI."),(0,a.kt)("p",null,"In summary, you must use a StorageClass that matches the cluster configuration."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"2 management nodes + 1 witness node: Create a new default StorageClass with the ",(0,a.kt)("strong",{parentName:"li"},"Number of Replicas")," parameter set to ",(0,a.kt)("strong",{parentName:"li"},"2"),". This ensures that only two replicas are created for each Longhorn volume."),(0,a.kt)("li",{parentName:"ul"},"2 management nodes + 1 witness node + 1 or more worker nodes: You can use the existing default StorageClass.")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"new storageclass replica 2",src:n(2043).Z,width:"2484",height:"1398"}),"\n",(0,a.kt)("img",{alt:"set to default",src:n(3721).Z,width:"2484",height:"1382"})),(0,a.kt)("p",null,"If you already created volumes using the original default StorageClass, you can modify the replica count on the ",(0,a.kt)("strong",{parentName:"p"},"Volume")," screen of the ",(0,a.kt)("a",{parentName:"p",href:"../troubleshooting/harvester/#access-embedded-rancher-and-longhorn-dashboards"},"embedded Longhorn UI"),"."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"redirect-to-longhorn-volume-page",src:n(70166).Z,width:"2484",height:"1302"}),"\n",(0,a.kt)("img",{alt:"update-replica-count-to-2",src:n(45418).Z,width:"2968",height:"1266"})),(0,a.kt)("h2",{id:"known-issues"},"Known Issues"),(0,a.kt)("h3",{id:"1-when-creating-a-cluster-with-a-witness-node-the-network-config-create-screen-on-the-harvester-ui-is-unable-to-identify-any-nics-that-can-be-used-with-all-nodes"},"1. When creating a cluster with a witness node, the ",(0,a.kt)("strong",{parentName:"h3"},"Network Config: Create")," screen on the Harvester UI is unable to identify any NICs that can be used with all nodes."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{alt:"create network config with all nodes",src:n(5787).Z,width:"2474",height:"1378"}),"\n",(0,a.kt)("img",{alt:"no uplink",src:n(52782).Z,width:"2472",height:"1380"})),(0,a.kt)("p",null,"  The workaround is to select a non-witness node and then select a NIC that can be used with that specific node."),(0,a.kt)("p",null,"  ",(0,a.kt)("img",{alt:"create network config with specific node",src:n(73192).Z,width:"2488",height:"1384"}),"\n",(0,a.kt)("img",{alt:"get uplink",src:n(93997).Z,width:"2480",height:"1358"})),(0,a.kt)("p",null,"You must repeat this procedure for every non-witness node in the cluster. The same uplink settings can be used across nodes."),(0,a.kt)("p",null,"  Related issue: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/5325"},"[BUG] Unable to select NIC to create network config when cluster contains witness node")),(0,a.kt)("h3",{id:"2-when-selecting-a-target-node-for-vm-migration-the-target-list-includes-the-witness-node"},"2. When selecting a target node for VM migration, the target list includes the witness node."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"vm migration target witness node",src:n(63528).Z,width:"2476",height:"1312"})),(0,a.kt)("p",null,"Do not select the witness node as the migration target. If you do, VM migration will fail."),(0,a.kt)("p",null,"  Related issue: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/5338"},"[BUG] The witness node should not be selected as a migration target")))}h.isMDXComponent=!0},5787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-policy-with-all-nodes-9a55b7b3b495855b4851344ef15ef545.png"},73192:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/create-policy-with-specific-node-25c1f971ac03e9716718e0fd3ea11f8d.png"},93997:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/get-uplink-1db9e1dccd2b0756a147fc7756e80fe8.png"},2043:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/new-storageclass-rep-2-72240608567a3dbf98c303937954a676.png"},52782:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/no-uplink-1659be520b15cdad80ba08493c65bc90.png"},70166:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/redirect-to-longhorn-vol-page-ee8c5faadf493ab5d4eebe47f1241f53.png"},3721:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/set-to-default-sc-3ffe198a600fba8c8338ba9ef6fe8f76.png"},45418:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/update-replica-2-90956cad9610aaaa47caaf85d3f1f431.png"},63528:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vm-migration-witness-node-f2ffdffe66cb7951cceb1551f0a34f50.png"}}]);