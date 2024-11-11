"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[93484],{58136:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>p});n(67294);var a=n(3905);const o={sidebar_position:6,sidebar_label:"Harvester Network Best Practice",title:"Harvester Network Best Practice",keywords:["Harvester","Networking","Best Practice"]},r=void 0,i={unversionedId:"networking/best-practice",id:"version-v1.2/networking/best-practice",title:"Harvester Network Best Practice",description:"Replace Ethernet NICs",source:"@site/versioned_docs/version-v1.2/networking/best-practice.md",sourceDirName:"networking",slug:"/networking/best-practice",permalink:"/v1.2/networking/best-practice",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/networking/best-practice.md",tags:[],version:"v1.2",lastUpdatedAt:1731291261,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:6,frontMatter:{sidebar_position:6,sidebar_label:"Harvester Network Best Practice",title:"Harvester Network Best Practice",keywords:["Harvester","Networking","Best Practice"]},sidebar:"api",previous:{title:"IP Pool",permalink:"/v1.2/networking/ippool"},next:{title:"Logging",permalink:"/v1.2/logging/harvester-logging"}},l={},p=[{value:"Replace Ethernet NICs",id:"replace-ethernet-nics",level:2},{value:"Pre-Replacement Checks",id:"pre-replacement-checks",level:3},{value:"Collect Information",id:"collect-information",level:3},{value:"Enable Maintenance Mode",id:"enable-maintenance-mode",level:3},{value:"(Optional) Update the Network Config",id:"optional-update-the-network-config",level:3},{value:"(Optional) Drain the Node",id:"optional-drain-the-node",level:3},{value:"Replace the Nics",id:"replace-the-nics",level:3},{value:"(Optional) Update the Network Config Again",id:"optional-update-the-network-config-again",level:3},{value:"Disable Maintenance Mode",id:"disable-maintenance-mode",level:3},{value:"Troubleshooting",id:"troubleshooting",level:3}],s={toc:p},d="wrapper";function m({components:e,...t}){return(0,a.kt)(d,{...s,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/networking/best-practice"})),(0,a.kt)("h2",{id:"replace-ethernet-nics"},"Replace Ethernet NICs"),(0,a.kt)("p",null,"You may want to replace the Ethernet NICs of a bare-metal node in a Harvester cluster for various reasons, including the following:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Malfunction or damage")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Insufficent hardware capacity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Missing features"))),(0,a.kt)("p",null,"You can follow the steps below and run them in each node step by step."),(0,a.kt)("h3",{id:"pre-replacement-checks"},"Pre-Replacement Checks"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Verify that the installed Harvester version supports the new NICs.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Test the new NICs in non-production environment.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/vm/access-to-the-vm#access-with-the-harvester-ui"},(0,a.kt)("strong",{parentName:"a"},"Virtual Machines")," screen of the Harvester UI"),", verify that the status of all VMs is either ",(0,a.kt)("em",{parentName:"p"},"Running")," or ",(0,a.kt)("em",{parentName:"p"},"Stopped"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"On the ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},"embedded Longhorn dashboard"),", verify that the status of all Longhorn volumes is ",(0,a.kt)("em",{parentName:"p"},"Healthy"),".")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) On the ",(0,a.kt)("strong",{parentName:"p"},"Harvester Support")," screen, generate a ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/troubleshooting/harvester#generate-a-support-bundle"},"support bundle")," for comparison purposes."))),(0,a.kt)("h3",{id:"collect-information"},"Collect Information"),(0,a.kt)("p",null,"Before any action is taken, it is important to collect the current network information and status."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Harvester network configuration: By default, Harvester creates a bond interface named ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-bo")," for the management network and one new bond interface for each cluster network. Harvester saves network configuration details in the file ",(0,a.kt)("inlineCode",{parentName:"p"},"/oem/90_custom.yaml"),"."),(0,a.kt)("p",{parentName:"li"},"  Example: A NIC named ",(0,a.kt)("inlineCode",{parentName:"p"},"ens3")," was added to the ",(0,a.kt)("inlineCode",{parentName:"p"},"mgmt-bo")," bond interface."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"- path: /etc/sysconfig/network/ifcfg-mgmt-bo\n  permissions: 384\n  owner: 0\n  group: 0\n  content: |+\n    STARTMODE='onboot'\n    BONDING_MASTER='yes'\n    BOOTPROTO='none'\n    POST_UP_SCRIPT=\"wicked:setup_bond.sh\"\n    BONDING_SLAVE_0='ens3'\n    BONDING_MODULE_OPTS='miimon=100 mode=active-backup '\n    DHCLIENT_SET_DEFAULT_ROUTE='no'\n  encoding: \"\"\n  ownerstring: \"\"\n\n- path: /etc/sysconfig/network/ifcfg-ens3\n  permissions: 384\n  owner: 0\n  group: 0\n  content: |\n    STARTMODE='hotplug'\n    BOOTPROTO='none'\n  encoding: \"\"\n  ownerstring: \"\"\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Physical NICs: You can use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"ip link")," to retrieve related information, including the state of each NIC and the corresponding master (if applicable)."),(0,a.kt)("p",{parentName:"li"},"  Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ ip link | grep master -1\n\n2: ens3: <BROADCAST,MULTICAST,SLAVE,UP,LOWER_UP> mtu 1500 qdisc pfifo_fast master mgmt-bo state UP mode DEFAULT group default qlen 1000\n    link/ether 52:54:00:03:3a:e4 brd ff:ff:ff:ff:ff:ff\n--\n\n4: mgmt-bo: <BROADCAST,MULTICAST,MASTER,UP,LOWER_UP> mtu 1500 qdisc noqueue master mgmt-br state UP mode DEFAULT group default qlen 1000\n    link/ether 52:54:00:03:3a:e4 brd ff:ff:ff:ff:ff:ff\n\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"PCI devices: You can use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"lspci")," to retrieve a list of devices, which allows you to quickly identify the network NICs. To retrieve detailed information about each device, use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"lspci -v"),"."),(0,a.kt)("p",{parentName:"li"},"  Example (",(0,a.kt)("inlineCode",{parentName:"p"},"lspci"),"):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ lspci\n00:03.0 Ethernet controller: Intel Corporation 82540EM Gigabit Ethernet Controller (rev 03)\n")),(0,a.kt)("p",{parentName:"li"},"  Example (",(0,a.kt)("inlineCode",{parentName:"p"},"lspci -v"),"):"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"$ lspci -v\n00:03.0 Ethernet controller: Intel Corporation 82540EM Gigabit Ethernet Controller (rev 03)\n  Subsystem: Red Hat, Inc. QEMU Virtual Machine\n  Physical Slot: 3\n  Flags: bus master, fast devsel, latency 0, IRQ 11\n  Memory at fc080000 (32-bit, non-prefetchable) [size=128K]\n  I/O ports at c000 [size=64]\n  Expansion ROM at fc000000 [disabled] [size=512K]\n  Kernel driver in use: e1000\n  Kernel modules: e1000\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Linux kernel log: You can use the command ",(0,a.kt)("inlineCode",{parentName:"p"},"dmesg")," to display kernel messages, which include most of the required information. If you save the messages to ",(0,a.kt)("inlineCode",{parentName:"p"},"kernel.log"),", you can check the driver and link status."),(0,a.kt)("p",{parentName:"li"},"  Harvester places sub-NICs into the bond interfaces. In the following example, an additional bond interface named ",(0,a.kt)("inlineCode",{parentName:"p"},"data-bo")," is created in the cluster."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'$ grep "(slave" kernel.log  (or: dmesg | grep "(slave")\n\nJan 08 00:35:00 localhost kernel: mgmt-bo: (slave eno5): Enslaving as a backup interface with an up link\nJan 08 00:35:00 localhost kernel: mgmt-bo: (slave ens4f0): Enslaving as a backup interface with an up link\nJan 08 00:37:34 localhost kernel: data-bo: (slave eno6): Enslaving as a backup interface with an up link\nJan 08 00:37:35 localhost kernel: data-bo: (slave ens4f1): Enslaving as a backup interface with an up link\n')),(0,a.kt)("p",{parentName:"li"},"  The NICs are renamed."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'$ grep "renamed" kernel.log\n\nJan 08 00:34:48 localhost kernel: tg3 0000:02:00.0 eno1: renamed from eth2 // eth2 / eno1 is not used by Harvester\nJan 08 00:34:48 localhost kernel: tg3 0000:02:00.3 eno4: renamed from eth6 // eth6 / eno4 is not used by Harvester\nJan 08 00:34:48 localhost kernel: tg3 0000:02:00.2 eno3: renamed from eth5 // eth5 / eno3 is not used by Harvester\nJan 08 00:34:48 localhost kernel: tg3 0000:02:00.1 eno2: renamed from eth3 // eth3 / eno2 is not used by Harvester\nJan 08 00:34:49 localhost kernel: i40e 0000:5d:00.0 eno5: renamed from eth0\nJan 08 00:34:49 localhost kernel: i40e 0000:af:00.0 ens4f0: renamed from eth4\nJan 08 00:34:49 localhost kernel: i40e 0000:5d:00.1 eno6: renamed from eth1\nJan 08 00:34:49 localhost kernel: i40e 0000:af:00.1 ens4f1: renamed from eth2\n')),(0,a.kt)("p",{parentName:"li"},"  The NIC driver of ",(0,a.kt)("inlineCode",{parentName:"p"},"eno5(0000:5d:00.0)")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"(intel) i40e 10Gbps Full Duplex"),"."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'$ grep "0000:5d:00.0" kernel.log\n\nJan 08 00:34:47 localhost kernel: i40e 0000:5d:00.0: fw 8.71.63306 api 1.11 nvm 10.54.7 [8086:1572] [103c:22fc]\nJan 08 00:34:47 localhost kernel: i40e 0000:5d:00.0: MAC address: 48:df:37:24:c2:00\nJan 08 00:34:47 localhost kernel: i40e 0000:5d:00.0: FW LLDP is enabled\nJan 08 00:34:47 localhost kernel: i40e 0000:5d:00.0 eth0: NIC Link is Up, 10 Gbps Full Duplex, Flow Control: None\nJan 08 00:34:47 localhost kernel: i40e 0000:5d:00.0: PCI-Express: Speed 8.0GT/s Width x8\nJan 08 00:34:47 localhost kernel: i40e 0000:5d:00.0: Features: PF-id[0] VFs: 64 VSIs: 66 QP: 112 RSS FD_ATR FD_SB NTUPLE DCB VxLAN Geneve PTP VEPA\nJan 08 00:34:49 localhost kernel: i40e 0000:5d:00.0 eno5: renamed from eth0\n')),(0,a.kt)("p",{parentName:"li"},"  The enabled NICs are detected."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'$ grep "is Up" kernel.log\n\nJan 08 00:34:47 localhost kernel: i40e 0000:5d:00.0 eth0: NIC Link is Up, 10 Gbps Full Duplex, Flow Control: None\nJan 08 00:34:48 localhost kernel: i40e 0000:5d:00.1 eth1: NIC Link is Up, 10 Gbps Full Duplex, Flow Control: None\nJan 08 00:34:48 localhost kernel: i40e 0000:af:00.0 eth4: NIC Link is Up, 10 Gbps Full Duplex, Flow Control: None\nJan 08 00:34:49 localhost kernel: i40e 0000:af:00.1 eth2: NIC Link is Up, 10 Gbps Full Duplex, Flow Control: None\n')))),(0,a.kt)("h3",{id:"enable-maintenance-mode"},"Enable Maintenance Mode"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) Stop VMs that cannot or must not be migrated.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"/v1.2/host/#node-maintenance"},"Enable maintenance mode")," on the target node to automatically migrate all VMs to other nodes."))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Wait for everything to become ready, and then repeat the steps in the ",(0,a.kt)("a",{parentName:"p",href:"#pre-check"},"Pre-check")," section.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Manually stop a VM in the following situations:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The VM fails to migrate.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The VM has selectors that prevent it from migrating to other nodes.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The VM has special hardware (for example, PCI passthrough or vGPUs) that prevent it from migrating to other nodes."))))),(0,a.kt)("h3",{id:"optional-update-the-network-config"},"(Optional) Update the Network Config"),(0,a.kt)("p",null,"There are one or more ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/networking/index#how-to-create-a-new-cluster-network"},"Network Config")," under every ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/networking/index#cluster-network"},"Cluster Network")," on Harvester. Each ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Config")," is backed by a ",(0,a.kt)("inlineCode",{parentName:"p"},"VlanConfig")," CRD object."),(0,a.kt)("admonition",{title:"important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Config")," is ",(0,a.kt)("strong",{parentName:"p"},"required")," if the new NICs will be placed in different physical slots or will have different uplink parameters.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the node."),(0,a.kt)("p",{parentName:"li"},"When a Harvester cluster node belongs to a ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Config"),", the ",(0,a.kt)("inlineCode",{parentName:"p"},"Node")," object has a label with the key ",(0,a.kt)("inlineCode",{parentName:"p"},"network.harvesterhci.io/vlanconfig"),"."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"apiVersion: v1\nkind: Node\nmetadata:\n  labels:\n    ...\n    network.harvesterhci.io/vlanconfig: vlan123\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Remove this node from the ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Config"),"."),(0,a.kt)("p",{parentName:"li"},"When the new NICs are placed in different slots, you must change the ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Config")," to exclude this node. You can delete the VlanConfig if the ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Config")," object selects only this node from ",(0,a.kt)("inlineCode",{parentName:"p"},"nodeSelector"),"."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"apiVersion: network.harvesterhci.io/v1beta1\nkind: VlanConfig\nspec:\n  clusterNetwork: data\n  nodeSelector:\n    kubernetes.io/hostname: node123  // select one or more nodes\n  uplink:\n    bondOptions:\n      miimon: 100\n      mode: 802.3ad\n    linkAttributes:\n      mtu: 1500\n      txQLen: -1\n    nics:\n    - enp0s1\n    - enp0s2\n")),(0,a.kt)("p",{parentName:"li"},"When VMs are still running on an affected node, the network webhook returns an error.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"Node")," object."),(0,a.kt)("p",{parentName:"li"},"Depending on the situation, either the label ",(0,a.kt)("inlineCode",{parentName:"p"},"network.harvesterhci.io/vlanconfig")," changes or is removed.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"VlanStatus")," object."),(0,a.kt)("p",{parentName:"li"},"Depending on the situation, either the status of the ",(0,a.kt)("inlineCode",{parentName:"p"},"VlanStatus")," object's ",(0,a.kt)("inlineCode",{parentName:"p"},"ready")," condition changes to ",(0,a.kt)("inlineCode",{parentName:"p"},'"True"')," or the object is deleted."),(0,a.kt)("p",{parentName:"li"},"Example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},'apiVersion: network.harvesterhci.io/v1beta1\nkind: VlanStatus\nmetadata:\n...\nstatus:\n  clusterNetwork: data\n  conditions:\n  - lastUpdateTime: "2024-02-03T18:32:41Z"\n    status: "True"\n    type: ready\n  linkMonitor: public\n  localAreas:\n  - cidr: 10.190.186.0/24\n    vlanID: 2013\n  node: node123\n  vlanConfig: vlan123\n')))),(0,a.kt)("h3",{id:"optional-drain-the-node"},"(Optional) Drain the Node"),(0,a.kt)("p",null,"You may find that some Longhorn replicas remain active on the node even after completing the previously outlined procedures."),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Drain the node. (This is optional in Harvester.)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Scenario 1: The ",(0,a.kt)("inlineCode",{parentName:"p"},"numReplicas")," value of all volumes is ",(0,a.kt)("inlineCode",{parentName:"p"},"3"),", which means that each Longhorn volume has three active replicas."),(0,a.kt)("p",{parentName:"li"},"The Longhorn Engine recognizes that it can no longer communicate with the replica on the drained node, and then marks that replica as failed. None of the replicas hold any special significance to Longhorn so it functions as long as it can communicate with at least one replica.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Scenario 2: Some Longhorn volumes have ",(0,a.kt)("em",{parentName:"p"},"fewer")," than three active replicas, or you manually attached volumes using the Harvester UI or Longhorn UI."),(0,a.kt)("p",{parentName:"li"},"You must manually detach the replicas or move them to other nodes, and then ",(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.4.3/volumes-and-nodes/maintenance/#updating-the-node-os-or-container-runtime"},"drain the node")," using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl drain --ignore-daemonsets <node name>"),". The option ",(0,a.kt)("inlineCode",{parentName:"p"},"--ignore-daemonsets")," is required because Longhorn deploys daemonsets such as Longhorn Manager, Longhorn CSI plugin, and Longhorn Engine image."),(0,a.kt)("p",{parentName:"li"},"Replicas running on the node are stopped and marked as ",(0,a.kt)("inlineCode",{parentName:"p"},"Failed"),". Longhorn Engine processes running on the node are migrated with the pod to other nodes. Once the node is fully drained, no replicas and engine processes should remain running on the node.")))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replenish replicas."),(0,a.kt)("p",{parentName:"li"},"After a node is shut down, Longhorn does not start rebuilding the replicas on other nodes until the ",(0,a.kt)("inlineCode",{parentName:"p"},"replica-replenishment-wait-interval")," (default value: 600 seconds) is reached. If the node comes back online before the wait interval value is reached, Longhorn reuses the replicas. Otherwise, Longhorn rebuilds the replicas on another node."),(0,a.kt)("p",{parentName:"li"},"During system maintenance, you can modify the ",(0,a.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.4.3/references/settings/#replica-replenishment-wait-interval"},(0,a.kt)("inlineCode",{parentName:"a"},"replica-replenishment-wait-interval"))," value using the ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},"embedded Longhorn UI")," to enable faster replica rebuilding."),(0,a.kt)("p",{parentName:"li"},"Harvester v1.3.0 uses Longhorn v1.6.0, while Harvester v1.2.1 uses Longhorn v1.4.3."))),(0,a.kt)("h3",{id:"replace-the-nics"},"Replace the Nics"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Shut the node down.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Replace the NICs.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Restart the node.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},(0,a.kt)("a",{parentName:"p",href:"#collect-information"},"Collect information")," about the current network configuration and status."))),(0,a.kt)("p",null,"If you observe any abnormalities, generate a ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/troubleshooting/harvester#generate-a-support-bundle"},"support bundle")," for troubleshooting purposes."),(0,a.kt)("h3",{id:"optional-update-the-network-config-again"},"(Optional) Update the Network Config Again"),(0,a.kt)("admonition",{title:"important",type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Updating the ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Config")," is ",(0,a.kt)("strong",{parentName:"p"},"required")," if the new NICs will be placed in different physical slots.")),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add the node to the ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Config"),"."),(0,a.kt)("p",{parentName:"li"},"You must create a new ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Config")," or change the ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Config")," to include this node.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"Node")," object."),(0,a.kt)("p",{parentName:"li"},"The label ",(0,a.kt)("inlineCode",{parentName:"p"},"network.harvesterhci.io/vlanconfig")," reflects the specific ",(0,a.kt)("inlineCode",{parentName:"p"},"Network Config")," used.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Check the ",(0,a.kt)("inlineCode",{parentName:"p"},"VlanStatus")," object."),(0,a.kt)("p",{parentName:"li"},"The status of the ",(0,a.kt)("inlineCode",{parentName:"p"},"VlanStatus")," object's ",(0,a.kt)("inlineCode",{parentName:"p"},"ready")," condition changes to ",(0,a.kt)("inlineCode",{parentName:"p"},'"True"'),"."))),(0,a.kt)("h3",{id:"disable-maintenance-mode"},"Disable Maintenance Mode"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Wait for the node to be moved back to the cluster.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Disable maintenance mode.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) Start the VMs that you manually stopped.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"(Optional) Manually ",(0,a.kt)("a",{parentName:"p",href:"/v1.2/vm/live-migration#starting-a-migration"},"migrate VMs")," to this node."))),(0,a.kt)("h3",{id:"troubleshooting"},"Troubleshooting"),(0,a.kt)("p",null,"Harvester uses multiple network-related pods and CRDs. When troubleshooting, check the pod logs and the status of CRD objects."),(0,a.kt)("p",null,"Pods:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ kubectl get pods -n harvester-system\nNAME                                                    READY   STATUS    RESTARTS      AGE\nharvester-network-controller-cnf22                      1/1     Running   2 (60m ago)   3d22h  // Network controller agent daemonSet, deployed in each node\nharvester-network-controller-manager-859c4bd874-xcllf   1/1     Running   2 (60m ago)   3d22h  // Network controller\nharvester-network-webhook-56b877d5d5-z42dp              1/1     Running   2 (60m ago)   3d22h\n")),(0,a.kt)("p",null,"CRDs:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"clusternetworks.network.harvesterhci.io\nlinkmonitors.network.harvesterhci.io\nvlanconfigs.network.harvesterhci.io\nvlanstatuses.network.harvesterhci.io\n")))}m.isMDXComponent=!0}}]);