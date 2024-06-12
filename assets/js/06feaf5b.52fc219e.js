"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[86224],{58539:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var a=t(87462),r=(t(67294),t(3905));const o={sidebar_position:4,sidebar_label:"Monitoring",title:"Monitoring"},i=void 0,l={unversionedId:"troubleshooting/monitoring",id:"version-v1.2/troubleshooting/monitoring",title:"Monitoring",description:"The following sections contain tips to troubleshoot Harvester Monitoring.",source:"@site/versioned_docs/version-v1.2/troubleshooting/monitoring.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/monitoring",permalink:"/v1.2/troubleshooting/monitoring",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/troubleshooting/monitoring.md",tags:[],version:"v1.2",lastUpdatedAt:1718156635,formattedLastUpdatedAt:"Jun 12, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Monitoring",title:"Monitoring"},sidebar:"api",previous:{title:"Operating System",permalink:"/v1.2/troubleshooting/os"},next:{title:"VM",permalink:"/v1.2/troubleshooting/vm"}},s={},c=[{value:"Monitoring is unusable",id:"monitoring-is-unusable",level:2},{value:"Monitoring is unusable due to Pod being stuck in <code>Terminating</code> status",id:"monitoring-is-unusable-due-to-pod-being-stuck-in-terminating-status",level:3},{value:"Expand PV/Volume Size",id:"expand-pvvolume-size",level:2},{value:"View Volume",id:"view-volume",level:3},{value:"From Embedded Longhorn WebUI",id:"from-embedded-longhorn-webui",level:4},{value:"From CLI",id:"from-cli",level:4},{value:"Scale Down a Deployment",id:"scale-down-a-deployment",level:3},{value:"Expand Volume",id:"expand-volume",level:3},{value:"Scale Up a Deployment",id:"scale-up-a-deployment",level:3},{value:"<code>rancher-monitoring-crd</code> ManagedChart State is <code>Modified</code>",id:"rancher-monitoring-crd-managedchart-state-is-modified",level:2},{value:"Issue Description",id:"issue-description",level:3},{value:"Root Cause",id:"root-cause",level:3},{value:"Workaround",id:"workaround",level:3},{value:"Related Issue",id:"related-issue",level:3}],m={toc:c},d="wrapper";function p(e){let{components:n,...o}=e;return(0,r.kt)(d,(0,a.Z)({},m,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/troubleshooting/monitoring"})),(0,r.kt)("p",null,"The following sections contain tips to troubleshoot Harvester Monitoring."),(0,r.kt)("h2",{id:"monitoring-is-unusable"},"Monitoring is unusable"),(0,r.kt)("p",null,"When the Harvester Dashboard is not showing any monitoring metrics, it can be caused by the following reasons."),(0,r.kt)("h3",{id:"monitoring-is-unusable-due-to-pod-being-stuck-in-terminating-status"},"Monitoring is unusable due to Pod being stuck in ",(0,r.kt)("inlineCode",{parentName:"h3"},"Terminating")," status"),(0,r.kt)("p",null,"Harvester Monitoring pods are deployed randomly on the cluster Nodes. When the Node hosting the pods accidentally goes down, the related pods may become stuck in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminating")," status rendering the Monitoring unusable from the WebUI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods -n cattle-monitoring-system\n\nNAMESPACE                   NAME                                                     READY   STATUS        RESTARTS   AGE\ncattle-monitoring-system    prometheus-rancher-monitoring-prometheus-0               3/3     Terminating   0          3d23h\ncattle-monitoring-system    rancher-monitoring-admission-create-fwjn9                0/1     Terminating   0          137m\ncattle-monitoring-system    rancher-monitoring-crd-create-9wtzf                      0/1     Terminating   0          137m\ncattle-monitoring-system    rancher-monitoring-grafana-d9c56d79b-ph4nz               3/3     Terminating   0          3d23h\ncattle-monitoring-system    rancher-monitoring-grafana-d9c56d79b-t24sz               0/3     Init:0/2      0          132m\n\ncattle-monitoring-system    rancher-monitoring-kube-state-metrics-5bc8bb48bd-nbd92   1/1     Running       4          4d1h\n...\n\n")),(0,r.kt)("p",null,"Monitoring can be recovered using CLI commands to force delete the related pods. The cluster will redeploy new pods to replace them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Delete each none-running Pod in namespace cattle-monitoring-system.\n\n$ kubectl delete pod --force -n cattle-monitoring-system prometheus-rancher-monitoring-prometheus-0\n\n pod "prometheus-rancher-monitoring-prometheus-0" force deleted\n\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-admission-create-fwjn9\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-crd-create-9wtzf\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-grafana-d9c56d79b-ph4nz \n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-grafana-d9c56d79b-t24sz\n')),(0,r.kt)("p",null,"Wait for a few minutes so that the new pods are created and readied for the Monitoring dashboard to be usable again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get pods -n cattle-monitoring-system \n\nNAME                                                     READY   STATUS     RESTARTS   AGE\nprometheus-rancher-monitoring-prometheus-0               0/3     Init:0/1   0          98s\nrancher-monitoring-grafana-d9c56d79b-cp86w               0/3     Init:0/2   0          27s\n...\n\n$ kubectl get pods -n cattle-monitoring-system \n\nNAME                                                     READY   STATUS    RESTARTS   AGE\nprometheus-rancher-monitoring-prometheus-0               3/3     Running   0          7m57s\nrancher-monitoring-grafana-d9c56d79b-cp86w               3/3     Running   0          6m46s\n...\n\n")),(0,r.kt)("h2",{id:"expand-pvvolume-size"},"Expand PV/Volume Size"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Harvester")," integrates ",(0,r.kt)("inlineCode",{parentName:"p"},"Longhorn")," as the default storage provider."),(0,r.kt)("p",null,"Harvester ",(0,r.kt)("inlineCode",{parentName:"p"},"Monitoring")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Persistent Volume (PV)")," to store running data. When a cluster has been running for a certain time, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Persistent Volume")," may need to expand its size."),(0,r.kt)("p",null,"Based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Longhorn")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume")," expansion guide, ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester")," illustrates how to ",(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.3.2/volumes-and-nodes/expansion/"},"expand the volume size"),"."),(0,r.kt)("h3",{id:"view-volume"},"View Volume"),(0,r.kt)("h4",{id:"from-embedded-longhorn-webui"},"From Embedded Longhorn WebUI"),(0,r.kt)("p",null,"Access the embedded Longhorn WebUI according to ",(0,r.kt)("a",{parentName:"p",href:"/v1.2/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},"this document"),"."),(0,r.kt)("p",null,"The Longhorn dashboard default view."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(28154).Z,width:"2506",height:"1276"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume")," to list all existing volumes."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(16287).Z,width:"2668",height:"970"})),(0,r.kt)("h4",{id:"from-cli"},"From CLI"),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to get all Volumes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl get pvc -A\nNAMESPACE                  NAME                                                                                             STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS         AGE\ncattle-monitoring-system   alertmanager-rancher-monitoring-alertmanager-db-alertmanager-rancher-monitoring-alertmanager-0   Bound    pvc-1b2fbbe9-14b1-4a65-941a-7d5645a89977   5Gi        RWO            harvester-longhorn   43h\ncattle-monitoring-system   prometheus-rancher-monitoring-prometheus-db-prometheus-rancher-monitoring-prometheus-0           Bound    pvc-7c6dcb61-51a9-4a38-b4c5-acaa11788978   50Gi       RWO            harvester-longhorn   43h\ncattle-monitoring-system   rancher-monitoring-grafana                                                                       Bound    pvc-b2b2c07c-f7cd-4965-90e6-ac3319597bf7   2Gi        RWO            harvester-longhorn   43h\n\n# kubectl get volume -A\nNAMESPACE         NAME                                       STATE      ROBUSTNESS   SCHEDULED   SIZE          NODE     AGE\nlonghorn-system   pvc-1b2fbbe9-14b1-4a65-941a-7d5645a89977   attached   degraded                 5368709120    harv31   43h\nlonghorn-system   pvc-7c6dcb61-51a9-4a38-b4c5-acaa11788978   attached   degraded                 53687091200   harv31   43h\nlonghorn-system   pvc-b2b2c07c-f7cd-4965-90e6-ac3319597bf7   attached   degraded                 2147483648    harv31   43h\n")),(0,r.kt)("h3",{id:"scale-down-a-deployment"},"Scale Down a Deployment"),(0,r.kt)("p",null,"To detach the ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume"),", you need to scale down the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume"),"."),(0,r.kt)("p",null,"The example below is against the PVC claimed by ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-grafana"),"."),(0,r.kt)("p",null,"Find the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," in the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl get deployment -n cattle-monitoring-system\nNAME                                    READY   UP-TO-DATE   AVAILABLE   AGE\nrancher-monitoring-grafana              1/1     1            1           43h  // target deployment\nrancher-monitoring-kube-state-metrics   1/1     1            1           43h\nrancher-monitoring-operator             1/1     1            1           43h\nrancher-monitoring-prometheus-adapter   1/1     1            1           43h\n")),(0,r.kt)("p",null,"Scale down the deployment ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-grafana")," to 0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl scale --replicas=0 deployment/rancher-monitoring-grafana -n cattle-monitoring-system\n")),(0,r.kt)("p",null,"Check the deployment and the volume."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl get deployment -n cattle-monitoring-system\nNAME                                    READY   UP-TO-DATE   AVAILABLE   AGE\nrancher-monitoring-grafana              0/0     0            0           43h  // scaled down\nrancher-monitoring-kube-state-metrics   1/1     1            1           43h\nrancher-monitoring-operator             1/1     1            1           43h\nrancher-monitoring-prometheus-adapter   1/1     1            1           43h\n\n# kubectl get volume -A\nNAMESPACE         NAME                                       STATE      ROBUSTNESS   SCHEDULED   SIZE          NODE     AGE\nlonghorn-system   pvc-1b2fbbe9-14b1-4a65-941a-7d5645a89977   attached   degraded                 5368709120    harv31   43h\nlonghorn-system   pvc-7c6dcb61-51a9-4a38-b4c5-acaa11788978   attached   degraded                 53687091200   harv31   43h\nlonghorn-system   pvc-b2b2c07c-f7cd-4965-90e6-ac3319597bf7   detached   unknown                  2147483648             43h  // volume is detached\n")),(0,r.kt)("h3",{id:"expand-volume"},"Expand Volume"),(0,r.kt)("p",null,"In the Longhorn WebUI, the related volume becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"Detached"),". Click the icon in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Operation")," column, and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Expand Volume"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(98623).Z,width:"2564",height:"1122"})),(0,r.kt)("p",null,"Input a new size, and ",(0,r.kt)("inlineCode",{parentName:"p"},"Longhorn")," will expand the volume to this size."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(18093).Z,width:"2502",height:"1226"})),(0,r.kt)("h3",{id:"scale-up-a-deployment"},"Scale Up a Deployment"),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume")," is expanded to target size, you need to scale up the aforementioned deployment to its original replicas. For the above example of ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-grafana"),", the original replicas is 1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl scale --replicas=1 deployment/rancher-monitoring-grafana -n cattle-monitoring-system\n\n")),(0,r.kt)("p",null,"Check the deployment again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl get deployment -n cattle-monitoring-system\nNAME                                    READY   UP-TO-DATE   AVAILABLE   AGE\nrancher-monitoring-grafana              1/1     1            1           43h  // scaled up\nrancher-monitoring-kube-state-metrics   1/1     1            1           43h\nrancher-monitoring-operator             1/1     1            1           43h\nrancher-monitoring-prometheus-adapter   1/1     1            1           43h\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume")," is attached to the new POD."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(92265).Z,width:"2696",height:"942"})),(0,r.kt)("p",null,"To now, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume")," is expanded to the new size and the POD is using it smoothly."),(0,r.kt)("h2",{id:"rancher-monitoring-crd-managedchart-state-is-modified"},(0,r.kt)("inlineCode",{parentName:"h2"},"rancher-monitoring-crd")," ManagedChart State is ",(0,r.kt)("inlineCode",{parentName:"h2"},"Modified")),(0,r.kt)("h3",{id:"issue-description"},"Issue Description"),(0,r.kt)("p",null,"In certain situations, the state of the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-crd")," ManagedChart object changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"Modified")," (with the message ",(0,r.kt)("inlineCode",{parentName:"p"},"...rancher-monitoring-crd-manager missing..."),")."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ kubectl get managedchart rancher-monitoring-crd -n fleet-local -o yaml\napiVersion: management.cattle.io/v3\nkind: ManagedChart\n...\nspec:\n  chart: rancher-monitoring-crd\n  defaultNamespace: cattle-monitoring-system\n  paused: false\n  releaseName: rancher-monitoring-crd\n  repoName: harvester-charts\n  targets:\n  - clusterName: local\n    clusterSelector:\n      matchExpressions:\n      - key: provisioning.cattle.io/unmanaged-system-agent\n        operator: DoesNotExist\n  version: 102.0.0+up40.1.2\n...\nstatus:\n  conditions:\n  - lastUpdateTime: "2024-02-22T14:03:11Z"\n    message: Modified(1) [Cluster fleet-local/local]; clusterrole.rbac.authorization.k8s.io\n      rancher-monitoring-crd-manager missing; clusterrolebinding.rbac.authorization.k8s.io\n      rancher-monitoring-crd-manager missing; configmap.v1 cattle-monitoring-system/rancher-monitoring-crd-manifest\n      missing; serviceaccount.v1 cattle-monitoring-system/rancher-monitoring-crd-manager\n      missing\n    status: "False"\n    type: Ready\n  - lastUpdateTime: "2024-02-22T14:03:11Z"\n    status: "True"\n    type: Processed\n  - lastUpdateTime: "2024-04-02T07:45:26Z"\n    status: "True"\n    type: Defined\n  display:\n    readyClusters: 0/1\n    state: Modified\n...\n')),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedChart")," object has a downstream object named ",(0,r.kt)("inlineCode",{parentName:"p"},"Bundle"),", which has similar information."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get bundles -A\nNAMESPACE     NAME                                          BUNDLEDEPLOYMENTS-READY   STATUS\nfleet-local   fleet-agent-local                             1/1\nfleet-local   local-managed-system-agent                    1/1\nfleet-local   mcc-harvester                                 1/1\nfleet-local   mcc-harvester-crd                             1/1\nfleet-local   mcc-local-managed-system-upgrade-controller   1/1\nfleet-local   mcc-rancher-logging-crd                       1/1\nfleet-local   mcc-rancher-monitoring-crd                    0/1                       Modified(1) [Cluster fleet-local/local]; clusterrole.rbac.authorization.k8s.io rancher-monitoring-crd-manager missing; clusterrolebinding.rbac.authorization.k8s.io rancher-monitoring-crd-manager missing; configmap.v1 cattle-monitoring-system/rancher-monitoring-crd-manifest missing; serviceaccount.v1 cattle-monitoring-system/rancher-monitoring-crd-manager missing\n")),(0,r.kt)("p",null,"When the issue exists and you ",(0,r.kt)("a",{parentName:"p",href:"/v1.2/upgrade/index#start-an-upgrade"},"start an upgrade"),", Harvester may return the following error message: ",(0,r.kt)("inlineCode",{parentName:"p"},'admission webhook "validator.harvesterhci.io" denied the request: managed chart rancher-monitoring-crd is not ready, please wait for it to be ready'),"."),(0,r.kt)("p",null,"Also, when you search for the objects marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"missing"),", you will find that they exist in the cluster."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'$ kubectl get clusterrole rancher-monitoring-crd-manager\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: rancher-monitoring-crd\n    meta.helm.sh/release-namespace: cattle-monitoring-system\n  creationTimestamp: "2023-01-09T11:04:33Z"\n  labels:\n    app: rancher-monitoring-crd-manager\n    app.kubernetes.io/managed-by: Helm\n  name: rancher-monitoring-crd-manager\n  ...\nrules:\n- apiGroups:\n  - apiextensions.k8s.io\n  resources:\n  - customresourcedefinitions\n  verbs:\n  - create\n  - get\n  - patch\n  - delete\n\n$ kubectl get clusterrolebinding rancher-monitoring-crd-manager\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: rancher-monitoring-crd\n    meta.helm.sh/release-namespace: cattle-monitoring-system\n  creationTimestamp: "2023-01-09T11:04:33Z"\n  labels:\n    app: rancher-monitoring-crd-manager\n    app.kubernetes.io/managed-by: Helm\n  name: rancher-monitoring-crd-manager\n  ...\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: rancher-monitoring-crd-manager\nsubjects:\n- kind: ServiceAccount\n  name: rancher-monitoring-crd-manager\n  namespace: cattle-monitoring-system\n\n$ kubectl get configmap -n cattle-monitoring-system rancher-monitoring-crd-manifest\napiVersion: v1\ndata:\n  crd-manifest.tgz.b64: ...\nkind: ConfigMap\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: rancher-monitoring-crd\n    meta.helm.sh/release-namespace: cattle-monitoring-system\n  creationTimestamp: "2023-01-09T11:04:33Z"\n  labels:\n    app.kubernetes.io/managed-by: Helm\n  name: rancher-monitoring-crd-manifest\n  namespace: cattle-monitoring-system\n  ...\n\n$ kubectl get ServiceAccount -n cattle-monitoring-system rancher-monitoring-crd-manager\napiVersion: v1\nkind: ServiceAccount\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: rancher-monitoring-crd\n    meta.helm.sh/release-namespace: cattle-monitoring-system\n  creationTimestamp: "2023-01-09T11:04:33Z"\n  labels:\n    app: rancher-monitoring-crd-manager\n    app.kubernetes.io/managed-by: Helm\n  name: rancher-monitoring-crd-manager\n  namespace: cattle-monitoring-system\n  ...\n')),(0,r.kt)("h3",{id:"root-cause"},"Root Cause"),(0,r.kt)("p",null,"The objects that are marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"missing")," do not have the related annotations and labels required by the ",(0,r.kt)("inlineCode",{parentName:"p"},"ManagedChart")," object."),(0,r.kt)("p",null,"Example:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'One of the manually recreated object:\n\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  annotations:\n    meta.helm.sh/release-name: rancher-monitoring-crd\n    meta.helm.sh/release-namespace: cattle-monitoring-system\n    objectset.rio.cattle.io/id: default-mcc-rancher-monitoring-crd-cattle-fleet-local-system   # This required item is not in the above object.\n  creationTimestamp: "2024-04-03T10:23:55Z"\n  labels:\n    app: rancher-monitoring-crd-manager\n    app.kubernetes.io/managed-by: Helm\n    objectset.rio.cattle.io/hash: 2da503261617e9ea2da822d2da7cdcfccad847a9    # This required item is not in the above object.\n  name: rancher-monitoring-crd-manager\n...\nrules:\n- apiGroups:\n  - apiextensions.k8s.io\n  resources:\n  - customresourcedefinitions\n  verbs:\n  - create\n  - get\n  - patch\n  - delete\n  - update\n')),(0,r.kt)("h3",{id:"workaround"},"Workaround"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Patch the ClusterRole object ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-crd-manager")," to add the ",(0,r.kt)("inlineCode",{parentName:"p"},"update")," operation."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ cat > patchrules.yaml << EOF\nrules:\n- apiGroups:\n  - apiextensions.k8s.io\n  resources:\n  - customresourcedefinitions\n  verbs:\n  - create\n  - get\n  - patch\n  - delete\n  - update\nEOF\n\n$ kubectl patch ClusterRole rancher-monitoring-crd-manager --patch-file ./patchrules.yaml --type merge\n\n$ rm ./patchrules.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Patch the marked as ",(0,r.kt)("inlineCode",{parentName:"p"},"missing")," objects to add the required annotations and labels."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ cat > patchhash.yaml << EOF\nmetadata:\n  annotations:\n    objectset.rio.cattle.io/id: default-mcc-rancher-monitoring-crd-cattle-fleet-local-system\n  labels:\n    objectset.rio.cattle.io/hash: 2da503261617e9ea2da822d2da7cdcfccad847a9\nEOF\n\n$ kubectl patch ClusterRole rancher-monitoring-crd-manager --patch-file ./patchhash.yaml --type merge\n\n$ kubectl patch ClusterRoleBinding rancher-monitoring-crd-manager --patch-file ./patchhash.yaml --type merge\n\n$ kubectl patch ServiceAccount rancher-monitoring-crd-manager -n cattle-monitoring-system --patch-file ./patchhash.yaml --type merge\n\n$ kubectl patch ConfigMap rancher-monitoring-crd-manifest -n cattle-monitoring-system --patch-file ./patchhash.yaml --type merge\n\n$ rm ./patchhash.yaml\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"Check the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-crd")," ManagedChart object."),(0,r.kt)("p",{parentName:"li"},"After a few seconds, the status of the ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-crd")," ManagedChart object changes to ",(0,r.kt)("inlineCode",{parentName:"p"},"Ready"),"."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},'$ kubectl get managedchart -n fleet-local rancher-monitoring-crd -oyaml\napiVersion: management.cattle.io/v3\nkind: ManagedChart\nmetadata:\n...\n  name: rancher-monitoring-crd\n  namespace: fleet-local\n...\nstatus:\n  conditions:\n  - lastUpdateTime: "2024-04-22T21:41:44Z"\n    status: "True"\n    type: Ready\n...\n')),(0,r.kt)("p",{parentName:"li"},"Also, error indicators are no longer displayed for the downstream objects."),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre"},"$ kubectl bundle -A\nNAMESPACE     NAME                                          BUNDLEDEPLOYMENTS-READY   STATUS\nfleet-local   fleet-agent-local                             1/1\nfleet-local   local-managed-system-agent                    1/1\nfleet-local   mcc-harvester                                 1/1\nfleet-local   mcc-harvester-crd                             1/1\nfleet-local   mcc-local-managed-system-upgrade-controller   1/1\nfleet-local   mcc-rancher-logging-crd                       1/1\nfleet-local   mcc-rancher-monitoring-crd                    1/1\n\n"))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"(Optional) Retry the upgrade (if previously unsuccessful because of this issue)."))),(0,r.kt)("h3",{id:"related-issue"},"Related Issue"),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/5505"},"https://github.com/harvester/harvester/issues/5505")))}p.isMDXComponent=!0},28154:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/2-longhorn-dashboard-90a68b82b511c671db6d640dc8038274.png"},16287:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/3-view-all-volume-f72a8c49486c5a86a66aa29680e39000.png"},98623:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/4-select-volume-to-expand-9c1002c23d1a8cd653272951031e0f34.png"},18093:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/5-expand-volue-to-new-size-0c5ddcb89f21656e1bfb1c1cc24d8c3c.png"},92265:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/6-after-scale-up-00d817e0272b5a4184bc09e289f45101.png"}}]);