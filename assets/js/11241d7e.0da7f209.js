"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[10134],{3905:(e,t,r)=>{r.d(t,{Zo:()=>d,kt:()=>m});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),p=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},d=function(e){var t=p(e.components);return a.createElement(l.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=p(r),h=n,m=u["".concat(l,".").concat(h)]||u[h]||c[h]||s;return r?a.createElement(m,o(o({ref:t},d),{},{components:r})):a.createElement(m,o({ref:t},d))}));function m(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,o=new Array(s);o[0]=h;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<s;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},13620:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>c,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var a=r(87462),n=(r(67294),r(3905));const s={sidebar_position:4,sidebar_label:"Upgrade from v1.1.1/v1.1.2 to v1.1.3",title:"Upgrade from v1.1.1/v1.1.2 to v1.1.3"},o=void 0,i={unversionedId:"upgrade/v1-1-1-to-v1-1-3",id:"version-v1.1/upgrade/v1-1-1-to-v1-1-3",title:"Upgrade from v1.1.1/v1.1.2 to v1.1.3",description:"General information",source:"@site/versioned_docs/version-v1.1/upgrade/v1-1-1-to-v1-1-3.md",sourceDirName:"upgrade",slug:"/upgrade/v1-1-1-to-v1-1-3",permalink:"/v1.1/upgrade/v1-1-1-to-v1-1-3",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/upgrade/v1-1-1-to-v1-1-3.md",tags:[],version:"v1.1",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Upgrade from v1.1.1/v1.1.2 to v1.1.3",title:"Upgrade from v1.1.1/v1.1.2 to v1.1.3"},sidebar:"tutorialSidebar",previous:{title:"Troubleshooting",permalink:"/v1.1/upgrade/troubleshooting"},next:{title:"Authentication",permalink:"/v1.1/authentication"}},l={},p=[{value:"General information",id:"general-information",level:2},{value:"Known Issues",id:"known-issues",level:2},{value:"1. The upgrade process is stuck when pre-draining a node. (Case 1)",id:"1-the-upgrade-process-is-stuck-when-pre-draining-a-node-case-1",level:3},{value:"2. The upgrade process is stuck when pre-draining a node. (Case 2)",id:"2-the-upgrade-process-is-stuck-when-pre-draining-a-node-case-2",level:3},{value:"3. The upgrade process is stuck on the first node.",id:"3-the-upgrade-process-is-stuck-on-the-first-node",level:3},{value:"4. The status of a Fleet bundle after the upgrade indicates that deployment errors occurred.",id:"4-the-status-of-a-fleet-bundle-after-the-upgrade-indicates-that-deployment-errors-occurred",level:3},{value:"5. The upgrade process stops after the upgrade repository is created.",id:"5-the-upgrade-process-stops-after-the-upgrade-repository-is-created",level:3},{value:"6. The upgrade is stuck in the &quot;Pre-drained&quot; state.",id:"6-the-upgrade-is-stuck-in-the-pre-drained-state",level:3}],d={toc:p},u="wrapper";function c(e){let{components:t,...s}=e;return(0,n.kt)(u,(0,a.Z)({},d,s,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/upgrade/v1-1-1-to-v1-1-3"})),(0,n.kt)("h2",{id:"general-information"},"General information"),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},"Upgrade")," button appears on the Dashboard screen whenever a new Harvester version that you can upgrade to becomes available. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/upgrade/index#start-an-upgrade"},"Start an upgrade"),"."),(0,n.kt)("p",null,"For air-gapped environments, see ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/upgrade/index#prepare-an-air-gapped-upgrade"},"Prepare an air-gapped upgrade"),"."),(0,n.kt)("h2",{id:"known-issues"},"Known Issues"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"1-the-upgrade-process-is-stuck-when-pre-draining-a-node-case-1"},"1. The upgrade process is stuck when pre-draining a node. (Case 1)"),(0,n.kt)("p",null,"Starting from v1.1.0, Harvester waits for all volumes to become healthy before upgrading a node (for clusters with three or more nodes). "),(0,n.kt)("p",null,"When this issue occurs, you can check the health of the affected volumes on the ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},"embedded Longhorn UI"),". You can also check the pre-drain job logs. For more troubleshooting information, see ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/upgrade/troubleshooting#phase-4-upgrade-nodes"},"Phase 4: Upgrade nodes"),"."),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"2-the-upgrade-process-is-stuck-when-pre-draining-a-node-case-2"},"2. The upgrade process is stuck when pre-draining a node. (Case 2)"),(0,n.kt)("p",null,"An upgrade is stuck, as shown in the screenshot below:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(9859).Z,width:"1128",height:"470"})),(0,n.kt)("p",null,"Harvester is unable to proceed with the upgrade and the status of two or more nodes is ",(0,n.kt)("inlineCode",{parentName:"p"},"SchedulingDisabled"),"."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get nodes\nNAME    STATUS                     ROLES                       AGE   VERSION\nnode1   Ready                      control-plane,etcd,master   20d   v1.24.7+rke2r1\nnode2   Ready,SchedulingDisabled   control-plane,etcd,master   20d   v1.24.7+rke2r1\nnode3   Ready,SchedulingDisabled   control-plane,etcd,master   20d   v1.24.7+rke2r1\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3216"},"[BUG] Multiple nodes pre-drains in an upgrade")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3216#issuecomment-1328607004"},"https://github.com/harvester/harvester/issues/3216#issuecomment-1328607004"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"3-the-upgrade-process-is-stuck-on-the-first-node"},"3. The upgrade process is stuck on the first node."),(0,n.kt)("p",null,"Harvester attempts to upgrade the first node but is unable to proceed. The upgrade eventually fails because the job is not completed by the expected end time."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(27667).Z,width:"1140",height:"918"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2894"},"[BUG] Upgrade stuck in upgrading first node: Job was active longer than specified deadline")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/2894#issuecomment-1274069690"},"https://github.com/harvester/harvester/issues/2894#issuecomment-1274069690"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"4-the-status-of-a-fleet-bundle-after-the-upgrade-indicates-that-deployment-errors-occurred"},"4. The status of a Fleet bundle after the upgrade indicates that deployment errors occurred."),(0,n.kt)("p",null,"After an upgrade is completed, the status of a bundle managed by Fleet may be ",(0,n.kt)("inlineCode",{parentName:"p"},"ErrApplied(1) [Cluster fleet-local/local: another operation (install/upgrade/rollback) is in progress]"),". The errors that occurred while deploying the bundle may block the next Harvester upgrade or managedChart update if not addressed."),(0,n.kt)("p",null,"To check the status of bundles, run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"kubectl get bundles -A\n")),(0,n.kt)("p",null,"The following output indicates that the issue exists in your cluster."),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"NAMESPACE     NAME                                          BUNDLEDEPLOYMENTS-READY   STATUS\nfleet-local   fleet-agent-local                             0/1                       ErrApplied(1) [Cluster fleet-local/local: another operation (install/upgrade/rollback) is in progress]\nfleet-local   local-managed-system-agent                    1/1\nfleet-local   mcc-harvester                                 1/1\nfleet-local   mcc-harvester-crd                             1/1\nfleet-local   mcc-local-managed-system-upgrade-controller   1/1\nfleet-local   mcc-rancher-logging                           1/1\nfleet-local   mcc-rancher-logging-crd                       1/1\nfleet-local   mcc-rancher-monitoring                        1/1\nfleet-local   mcc-rancher-monitoring-crd                    1/1\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3616"},"[BUG] Harvester single node upgrade will get another operation (install/upgrade/rollback) is in progress error")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3616#issuecomment-1489892688"},"https://github.com/harvester/harvester/issues/3616#issuecomment-1489892688"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"5-the-upgrade-process-stops-after-the-upgrade-repository-is-created"},"5. The upgrade process stops after the upgrade repository is created."),(0,n.kt)("p",null,"Harvester is unable to retrieve the ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-release.yaml")," file and proceed with the upgrade. The following error message is displayed: ",(0,n.kt)("inlineCode",{parentName:"p"},'Get "http://upgrade-repo-hvst-upgrade-mldzx.harvester-system/harvester-iso/harvester-release.yaml": context deadline exceeded (Client.Timeout exceeded while awaiting headers)'),"\ncontext deadline exceeded (Client.Timeout exceeded while awaiting headers)` message:"),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(565).Z,width:"1600",height:"801"})),(0,n.kt)("p",null,"This issue was fixed in v1.1.2. For v1.1.0 and v1.1.1 users, however, the workaround is to ",(0,n.kt)("a",{parentName:"p",href:"/v1.1/upgrade/troubleshooting#start-over-an-upgrade"},"restart the upgrade process"),"."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3729"},"https://github.com/harvester/harvester/issues/3729")))),(0,n.kt)("li",{parentName:"ul"},"Workaround:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"/v1.1/upgrade/troubleshooting#start-over-an-upgrade"},"Start over an upgrade"))))),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"6-the-upgrade-is-stuck-in-the-pre-drained-state"},'6. The upgrade is stuck in the "Pre-drained" state.'),(0,n.kt)("p",null,"This issue could be caused by a misconfigured pod disruption budget (PDB)."),(0,n.kt)("p",null,(0,n.kt)("img",{src:r(60077).Z,width:"1130",height:"530"})),(0,n.kt)("p",null,"You can perform the following steps to confirm the cause and use the current workaround. In this example, the affected node is ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-node-1"),"."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the name of the ",(0,n.kt)("inlineCode",{parentName:"p"},"instance-manager-e")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"instance-manager-r")," pod on the node."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl get pods -n longhorn-system --field-selector spec.nodeName=harvester-node-1 | grep instance-manager\ninstance-manager-r-d4ed2788          1/1     Running   0              3d8h\n")),(0,n.kt)("p",{parentName:"li"},"The output shows that the ",(0,n.kt)("inlineCode",{parentName:"p"},"instance-manager-r-d4ed2788")," pod is on the node. ")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the Rancher logs and verify that the ",(0,n.kt)("inlineCode",{parentName:"p"},"instance-manager-e")," or ",(0,n.kt)("inlineCode",{parentName:"p"},"instance-manager-r")," pod cannot be drained."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'$ kubectl logs deployment/rancher -n cattle-system\n...\n2023-03-28T17:10:52.199575910Z 2023/03/28 17:10:52 [INFO] [planner] rkecluster fleet-local/local: waiting: draining etcd node(s) custom-4f8cb698b24a,custom-a0f714579def\n2023-03-28T17:10:55.034453029Z evicting pod longhorn-system/instance-manager-r-d4ed2788\n2023-03-28T17:10:55.080933607Z error when evicting pods/"instance-manager-r-d4ed2788" -n "longhorn-system" (will retry after 5s): Cannot evict pod as it would violate the pod\'s disruption budget.\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check if a PDB is associated with the node."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},'$ kubectl get pdb -n longhorn-system -o yaml | yq \'.items[] | select(.spec.selector.matchLabels."longhorn.io/node"=="harvester-node-1") | .metadata.name\'\ninstance-manager-r-466e3c7f\n'))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the owner of the instance manager for the associated PDB."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl get instancemanager instance-manager-r-466e3c7f -n longhorn-system -o yaml | yq -e '.spec.nodeID'\nharvester-node-2\n")),(0,n.kt)("p",{parentName:"li"},"If the output does not show the affected node, the issue exists in your cluster. In this example, the output shows ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-node-2")," instead of ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-node-1"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the health of all volumes."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl get volumes -n longhorn-system -o yaml | yq '.items[] | select(.status.state == \"attached\")| .status.robustness'\n")),(0,n.kt)("p",{parentName:"li"},"The output should show that all volumes are marked ",(0,n.kt)("inlineCode",{parentName:"p"},"healthy"),". If not, consider uncordoning nodes to improve volume health.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Remove the misconfigured PDB."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"kubectl delete pdb instance-manager-r-466e3c7f -n longhorn-system\n")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Related issue:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/3730"},"[BUG] 3 Node AirGapped Cluster Upgrade Stuck v1.1.0->v1.1.2-rc4"))))),(0,n.kt)("hr",null))}c.isMDXComponent=!0},27667:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/2894-deadline-8fbfd53960ef87f904f6a893a4a0bfcd.png"},9859:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/3216-stuck-pre-drain-33d5537a9151085216d2cd275c92cf1f.png"},565:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/3729-error-300bdaf4155b9268cacff39d15d60103.png"},60077:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/3730-stuck-c48392f50cb65bcfe1e0e823d6696e3e.png"}}]);