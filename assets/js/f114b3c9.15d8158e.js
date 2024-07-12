"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[66069],{60977:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>s,default:()=>u,frontMatter:()=>i,metadata:()=>r,toc:()=>l});n(67294);var a=n(3905);const i={sidebar_position:5,sidebar_label:"VM",title:"VM"},s=void 0,r={unversionedId:"troubleshooting/vm",id:"version-v1.1/troubleshooting/vm",title:"VM",description:"The following sections contain information useful in troubleshooting issues related to Harvester VM management.",source:"@site/versioned_docs/version-v1.1/troubleshooting/vm.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/vm",permalink:"/v1.1/troubleshooting/vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/troubleshooting/vm.md",tags:[],version:"v1.1",lastUpdatedAt:1720781072,formattedLastUpdatedAt:"Jul 12, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"VM",title:"VM"},sidebar:"api",previous:{title:"Monitoring",permalink:"/v1.1/troubleshooting/monitoring"},next:{title:"FAQ",permalink:"/v1.1/faq"}},o={},l=[{value:"VM Start Button is Not Visible",id:"vm-start-button-is-not-visible",level:2},{value:"Issue Description",id:"issue-description",level:3},{value:"VM General Operations",id:"vm-general-operations",level:3},{value:"General VM Related Objects",id:"general-vm-related-objects",level:3},{value:"A Running VM",id:"a-running-vm",level:4},{value:"A VM Stopped Using the Harvester UI",id:"a-vm-stopped-using-the-harvester-ui",level:4},{value:"A VM Stopped Using the VM&#39;s Poweroff Command",id:"a-vm-stopped-using-the-vms-poweroff-command",level:4},{value:"Issue Analysis",id:"issue-analysis",level:3},{value:"Root Cause",id:"root-cause",level:4},{value:"Workaround",id:"workaround",level:3},{value:"Related Issue",id:"related-issue",level:3}],d={toc:l},p="wrapper";function u({components:e,...t}){return(0,a.kt)(p,{...d,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/troubleshooting/vm"})),(0,a.kt)("p",null,"The following sections contain information useful in troubleshooting issues related to Harvester VM management."),(0,a.kt)("h2",{id:"vm-start-button-is-not-visible"},"VM Start Button is Not Visible"),(0,a.kt)("h3",{id:"issue-description"},"Issue Description"),(0,a.kt)("p",null,"On rare occasions, the ",(0,a.kt)("strong",{parentName:"p"},"Start")," button is unavailable on the Harvester UI for VMs that are ",(0,a.kt)("em",{parentName:"p"},"Off"),". Without that button, users are unable to start the VMs."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(69907).Z,width:"3114",height:"1244"})),(0,a.kt)("h3",{id:"vm-general-operations"},"VM General Operations"),(0,a.kt)("p",null,"On the Harvester UI, the ",(0,a.kt)("strong",{parentName:"p"},"Stop")," button is visible after a VM is created and started."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(66939).Z,width:"3178",height:"1526"})),(0,a.kt)("p",null,"The ",(0,a.kt)("strong",{parentName:"p"},"Start")," button is visible after the VM is stopped."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(66086).Z,width:"3190",height:"1238"})),(0,a.kt)("p",null,"When the VM is powered off from inside the VM, both the ",(0,a.kt)("strong",{parentName:"p"},"Start")," and ",(0,a.kt)("strong",{parentName:"p"},"Restart")," buttons are visible."),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(20542).Z,width:"3174",height:"1376"})),(0,a.kt)("h3",{id:"general-vm-related-objects"},"General VM Related Objects"),(0,a.kt)("h4",{id:"a-running-vm"},"A Running VM"),(0,a.kt)("p",null,"The objects ",(0,a.kt)("inlineCode",{parentName:"p"},"vm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"vmi"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"pod"),", which are all related to the VM, exist. The status of all three objects is ",(0,a.kt)("inlineCode",{parentName:"p"},"Running"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," # kubectl get vm\nNAME   AGE     STATUS    READY\nvm8    7m25s   Running   True\n\n # kubectl get vmi\nNAME   AGE   PHASE     IP            NODENAME   READY\nvm8    78s   Running   10.52.0.199   harv41     True\n\n # kubectl get pod\nNAME                      READY   STATUS    RESTARTS   AGE\nvirt-launcher-vm8-tl46h   1/1     Running   0          80s\n")),(0,a.kt)("h4",{id:"a-vm-stopped-using-the-harvester-ui"},"A VM Stopped Using the Harvester UI"),(0,a.kt)("p",null,"Only the object ",(0,a.kt)("inlineCode",{parentName:"p"},"vm")," exists and its status is ",(0,a.kt)("inlineCode",{parentName:"p"},"Stopped"),". Both ",(0,a.kt)("inlineCode",{parentName:"p"},"vmi")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"pod")," disappear."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," # kubectl get vm\nNAME   AGE    STATUS    READY\nvm8    123m   Stopped   False\n\n # kubectl get vmi\nNo resources found in default namespace.\n\n # kubectl get pod\nNo resources found in default namespace.\n # \n")),(0,a.kt)("h4",{id:"a-vm-stopped-using-the-vms-poweroff-command"},"A VM Stopped Using the VM's Poweroff Command"),(0,a.kt)("p",null,"The objects ",(0,a.kt)("inlineCode",{parentName:"p"},"vm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"vmi"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"pod"),", which are all related to the VM, exist. The status of ",(0,a.kt)("inlineCode",{parentName:"p"},"vm")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Stopped"),", while the status of ",(0,a.kt)("inlineCode",{parentName:"p"},"pod")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"Completed"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"}," # kubectl get vm\nNAME   AGE    STATUS    READY\nvm8    134m   Stopped   False\n\n # kubectl get vmi\nNAME   AGE     PHASE       IP            NODENAME   READY\nvm8    2m49s   Succeeded   10.52.0.199   harv41     False\n\n # kubectl get pod\nNAME                      READY   STATUS      RESTARTS   AGE\nvirt-launcher-vm8-tl46h   0/1     Completed   0          2m54s\n\n")),(0,a.kt)("h3",{id:"issue-analysis"},"Issue Analysis"),(0,a.kt)("p",null,"When the issue occurs, the objects ",(0,a.kt)("inlineCode",{parentName:"p"},"vm"),", ",(0,a.kt)("inlineCode",{parentName:"p"},"vmi"),", and ",(0,a.kt)("inlineCode",{parentName:"p"},"pod")," exist. The status of the objects is similar to that of ",(0,a.kt)("strong",{parentName:"p"},"A VM Stopped Using the VM's Poweroff Command"),"."),(0,a.kt)("p",null,"Example:"),(0,a.kt)("p",null,"The VM ",(0,a.kt)("inlineCode",{parentName:"p"},"ocffm031v000")," is not ready (",(0,a.kt)("inlineCode",{parentName:"p"},'status: "False"'),") because the virt-launcher pod is terminating (",(0,a.kt)("inlineCode",{parentName:"p"},'reason: "PodTerminating"'),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'- apiVersion: kubevirt.io/v1\n  kind: VirtualMachine\n...\n  status:\n    conditions:\n    - lastProbeTime: "2023-07-20T08:37:37Z"\n      lastTransitionTime: "2023-07-20T08:37:37Z"\n      message: virt-launcher pod is terminating\n      reason: PodTerminating\n      status: "False"\n      type: Ready\n')),(0,a.kt)("p",null,"Similarly, the VMI (virtual machine instance) ",(0,a.kt)("inlineCode",{parentName:"p"},"ocffm031v000")," is not ready (",(0,a.kt)("inlineCode",{parentName:"p"},'status: "False"'),") because the virt-launcher pod is terminating (",(0,a.kt)("inlineCode",{parentName:"p"},'reason: "PodTerminating"'),")."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'- apiVersion: kubevirt.io/v1\n  kind: VirtualMachineInstance\n...\n    name: ocffm031v000\n...\n  status:\n    activePods:\n      ec36a1eb-84a5-4421-b57b-2c14c1975018: aibfredg02\n    conditions:\n    - lastProbeTime: "2023-07-20T08:37:37Z"\n      lastTransitionTime: "2023-07-20T08:37:37Z"\n      message: virt-launcher pod is terminating\n      reason: PodTerminating\n      status: "False"\n      type: Ready\n')),(0,a.kt)("p",null,"On the other hand, the pod ",(0,a.kt)("inlineCode",{parentName:"p"},"virt-launcher-ocffm031v000-rrkss")," is not ready (",(0,a.kt)("inlineCode",{parentName:"p"},'status: "False"'),") because the pod has run to completion (",(0,a.kt)("inlineCode",{parentName:"p"},'reason: "PodCompleted"'),")."),(0,a.kt)("p",null,"The underlying container ",(0,a.kt)("inlineCode",{parentName:"p"},"0d7a0f64f91438cb78f026853e6bebf502df1bdeb64878d351fa5756edc98deb")," is terminated, and the ",(0,a.kt)("inlineCode",{parentName:"p"},"exitCode")," is 0."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'- apiVersion: v1\n  kind: Pod\n...\n    name: virt-launcher-ocffm031v000-rrkss\n...\n    ownerReferences:\n    - apiVersion: kubevirt.io/v1\n...\n      kind: VirtualMachineInstance\n      name: ocffm031v000\n      uid: 8d2cf524-7e73-4713-86f7-89e7399f25db\n    uid: ec36a1eb-84a5-4421-b57b-2c14c1975018\n...\n  status:\n    conditions:\n    - lastProbeTime: "2023-07-18T13:48:56Z"\n      lastTransitionTime: "2023-07-18T13:48:56Z"\n      message: the virtual machine is not paused\n      reason: NotPaused\n      status: "True"\n      type: kubevirt.io/virtual-machine-unpaused\n    - lastProbeTime: "null"\n      lastTransitionTime: "2023-07-18T13:48:55Z"\n      reason: PodCompleted\n      status: "True"\n      type: Initialized\n    - lastProbeTime: "null"\n      lastTransitionTime: "2023-07-20T08:38:56Z"\n      reason: PodCompleted\n      status: "False"\n      type: Ready\n    - lastProbeTime: "null"\n      lastTransitionTime: "2023-07-20T08:38:56Z"\n      reason: PodCompleted\n      status: "False"\n      type: ContainersReady\n...\n    containerStatuses:\n    - containerID: containerd://0d7a0f64f91438cb78f026853e6bebf502df1bdeb64878d351fa5756edc98deb\n      image: registry.suse.com/suse/sles/15.4/virt-launcher:0.54.0-150400.3.3.2\n      imageID: sha256:43bb08efdabb90913534b70ec7868a2126fc128887fb5c3c1b505ee6644453a2\n      lastState: {}\n      name: compute\n      ready: false\n      restartCount: 0\n      started: false\n      state:\n        terminated:\n          containerID: containerd://0d7a0f64f91438cb78f026853e6bebf502df1bdeb64878d351fa5756edc98deb\n          exitCode: 0\n          finishedAt: "2023-07-20T08:38:55Z"\n          reason: Completed\n          startedAt: "2023-07-18T13:50:17Z"\n')),(0,a.kt)("p",null,"A critical difference is that the ",(0,a.kt)("inlineCode",{parentName:"p"},"Stop")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Start")," actions appear in the ",(0,a.kt)("inlineCode",{parentName:"p"},"stateChangeRequests")," property of ",(0,a.kt)("inlineCode",{parentName:"p"},"vm"),"."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"  status:\n    conditions:\n...\n    printableStatus: Stopped\n    stateChangeRequests:\n    - action: Stop\n      uid: 8d2cf524-7e73-4713-86f7-89e7399f25db\n    - action: Start\n")),(0,a.kt)("h4",{id:"root-cause"},"Root Cause"),(0,a.kt)("p",null,"The root cause of this issue is under investigation."),(0,a.kt)("p",null,"It is notable that the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/blob/7357d0b660557566bf9ff2e83790635aea71d1bc/pkg/api/vm/formatter.go#L166"},"source code")," checks the status of ",(0,a.kt)("inlineCode",{parentName:"p"},"vm")," and assumes that the object is starting. No ",(0,a.kt)("inlineCode",{parentName:"p"},"Start")," and ",(0,a.kt)("inlineCode",{parentName:"p"},"Restart")," operations are added to the object."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"func (vf *vmformatter) canStart(vm *kubevirtv1.VirtualMachine, vmi *kubevirtv1.VirtualMachineInstance) bool {\n    if vf.isVMStarting(vm) {\n        return false\n    }\n..\n}\n\nfunc (vf *vmformatter) canRestart(vm *kubevirtv1.VirtualMachine, vmi *kubevirtv1.VirtualMachineInstance) bool {\n    if vf.isVMStarting(vm) {\n        return false\n    }\n...\n}\n\nfunc (vf *vmformatter) isVMStarting(vm *kubevirtv1.VirtualMachine) bool {\n    for _, req := range vm.Status.StateChangeRequests {\n        if req.Action == kubevirtv1.StartRequest {\n            return true\n        }\n    }\n    return false\n}\n")),(0,a.kt)("h3",{id:"workaround"},"Workaround"),(0,a.kt)("p",null,"To address the issue, you can force delete the pod using the command ",(0,a.kt)("inlineCode",{parentName:"p"},"kubectl delete pod virt-launcher-ocffm031v000-rrkss -n namespace --force"),"."),(0,a.kt)("p",null,"After the pod is successfully deleted, the ",(0,a.kt)("inlineCode",{parentName:"p"},"Start")," button becomes visible again on the Harvester UI."),(0,a.kt)("h3",{id:"related-issue"},"Related Issue"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/4659"},"https://github.com/harvester/harvester/issues/4659")))}u.isMDXComponent=!0},20542:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/actively-powered-off-vm-8ddfe55dc03b4d18550c11ccdbfbc192.png"},66086:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/start-vm-after-vm-is-stopped-from-webui-ff846e390db001228d2e1752d8ad9856.png"},66939:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/stop-vm-from-webui-2ed8b8aa96c707a3bdffb7c5d1a34c41.png"},69907:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/vm-start-button-is-not-visible-7fe4f7c2d61c26a48e2ceb29f7ed8ab5.png"}}]);