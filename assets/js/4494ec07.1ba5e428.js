"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[9320],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var o=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);n&&(o=o.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,o)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,o,r=function(e,n){if(null==e)return{};var t,o,r={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=o.createContext({}),c=function(e){var n=o.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},d=function(e){var n=c(e.components);return o.createElement(s.Provider,{value:n},e.children)},m="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.createElement(o.Fragment,{},n)}},u=o.forwardRef((function(e,n){var t=e.components,r=e.mdxType,a=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=c(t),u=r,h=m["".concat(s,".").concat(u)]||m[u]||p[u]||a;return t?o.createElement(h,i(i({ref:n},d),{},{components:t})):o.createElement(h,i({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var a=t.length,i=new Array(a);i[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l[m]="string"==typeof e?e:r,i[1]=l;for(var c=2;c<a;c++)i[c]=t[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,t)}u.displayName="MDXCreateElement"},75113:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>p,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var o=t(87462),r=(t(67294),t(3905));const a={sidebar_position:4,sidebar_label:"Monitoring",title:"Monitoring"},i=void 0,l={unversionedId:"troubleshooting/monitoring",id:"version-v1.1/troubleshooting/monitoring",title:"Monitoring",description:"The following sections contain tips to troubleshoot Harvester Monitoring.",source:"@site/versioned_docs/version-v1.1/troubleshooting/monitoring.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/monitoring",permalink:"/v1.1/troubleshooting/monitoring",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/troubleshooting/monitoring.md",tags:[],version:"v1.1",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Monitoring",title:"Monitoring"},sidebar:"tutorialSidebar",previous:{title:"Operating System",permalink:"/v1.1/troubleshooting/os"},next:{title:"FAQ",permalink:"/v1.1/faq"}},s={},c=[{value:"Monitoring is unusable",id:"monitoring-is-unusable",level:2},{value:"Monitoring is unusable due to Pod being stuck in <code>Terminating</code> status",id:"monitoring-is-unusable-due-to-pod-being-stuck-in-terminating-status",level:3},{value:"Expand PV/Volume Size",id:"expand-pvvolume-size",level:2},{value:"View Volume",id:"view-volume",level:3},{value:"From Embedded Longhorn WebUI",id:"from-embedded-longhorn-webui",level:4},{value:"From CLI",id:"from-cli",level:4},{value:"Scale Down a Deployment",id:"scale-down-a-deployment",level:3},{value:"Expand Volume",id:"expand-volume",level:3},{value:"Scale Up a Deployment",id:"scale-up-a-deployment",level:3}],d={toc:c},m="wrapper";function p(e){let{components:n,...a}=e;return(0,r.kt)(m,(0,o.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/troubleshooting/monitoring"})),(0,r.kt)("p",null,"The following sections contain tips to troubleshoot Harvester Monitoring."),(0,r.kt)("h2",{id:"monitoring-is-unusable"},"Monitoring is unusable"),(0,r.kt)("p",null,"When the Harvester Dashboard is not showing any monitoring metrics, it can be caused by the following reasons."),(0,r.kt)("h3",{id:"monitoring-is-unusable-due-to-pod-being-stuck-in-terminating-status"},"Monitoring is unusable due to Pod being stuck in ",(0,r.kt)("inlineCode",{parentName:"h3"},"Terminating")," status"),(0,r.kt)("p",null,"Harvester Monitoring pods are deployed randomly on the cluster Nodes. When the Node hosting the pods accidentally goes down, the related pods may become stuck in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Terminating")," status rendering the Monitoring unusable from the WebUI."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},"$ kubectl get pods -n cattle-monitoring-system\n\nNAMESPACE                   NAME                                                     READY   STATUS        RESTARTS   AGE\ncattle-monitoring-system    prometheus-rancher-monitoring-prometheus-0               3/3     Terminating   0          3d23h\ncattle-monitoring-system    rancher-monitoring-admission-create-fwjn9                0/1     Terminating   0          137m\ncattle-monitoring-system    rancher-monitoring-crd-create-9wtzf                      0/1     Terminating   0          137m\ncattle-monitoring-system    rancher-monitoring-grafana-d9c56d79b-ph4nz               3/3     Terminating   0          3d23h\ncattle-monitoring-system    rancher-monitoring-grafana-d9c56d79b-t24sz               0/3     Init:0/2      0          132m\n\ncattle-monitoring-system    rancher-monitoring-kube-state-metrics-5bc8bb48bd-nbd92   1/1     Running       4          4d1h\n...\n\n")),(0,r.kt)("p",null,"Monitoring can be recovered using CLI commands to force delete the related pods. The cluster will redeploy new pods to replace them."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-shell"},'# Delete each none-running Pod in namespace cattle-monitoring-system.\n\n$ kubectl delete pod --force -n cattle-monitoring-system prometheus-rancher-monitoring-prometheus-0\n\n pod "prometheus-rancher-monitoring-prometheus-0" force deleted\n\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-admission-create-fwjn9\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-crd-create-9wtzf\n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-grafana-d9c56d79b-ph4nz \n\n$ kubectl delete pod --force -n cattle-monitoring-system rancher-monitoring-grafana-d9c56d79b-t24sz\n')),(0,r.kt)("p",null,"Wait for a few minutes so that the new pods are created and readied for the Monitoring dashboard to be usable again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ kubectl get pods -n cattle-monitoring-system \n\nNAME                                                     READY   STATUS     RESTARTS   AGE\nprometheus-rancher-monitoring-prometheus-0               0/3     Init:0/1   0          98s\nrancher-monitoring-grafana-d9c56d79b-cp86w               0/3     Init:0/2   0          27s\n...\n\n$ kubectl get pods -n cattle-monitoring-system \n\nNAME                                                     READY   STATUS    RESTARTS   AGE\nprometheus-rancher-monitoring-prometheus-0               3/3     Running   0          7m57s\nrancher-monitoring-grafana-d9c56d79b-cp86w               3/3     Running   0          6m46s\n...\n\n")),(0,r.kt)("h2",{id:"expand-pvvolume-size"},"Expand PV/Volume Size"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"Harvester")," integrates ",(0,r.kt)("inlineCode",{parentName:"p"},"Longhorn")," as the default storage provider."),(0,r.kt)("p",null,"Harvester ",(0,r.kt)("inlineCode",{parentName:"p"},"Monitoring")," uses ",(0,r.kt)("inlineCode",{parentName:"p"},"Persistent Volume (PV)")," to store running data. When a cluster has been running for a certain time, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Persistent Volume")," may need to expand its size."),(0,r.kt)("p",null,"Based on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Longhorn")," ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume")," expansion guide, ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester")," illustrates how to ",(0,r.kt)("a",{parentName:"p",href:"https://longhorn.io/docs/1.3.2/volumes-and-nodes/expansion/"},"expand the volume size"),"."),(0,r.kt)("h3",{id:"view-volume"},"View Volume"),(0,r.kt)("h4",{id:"from-embedded-longhorn-webui"},"From Embedded Longhorn WebUI"),(0,r.kt)("p",null,"Access the embedded Longhorn WebUI according to ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/troubleshooting/harvester#access-embedded-rancher-and-longhorn-dashboards"},"this document"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(20283).Z,width:"1478",height:"872"})),(0,r.kt)("p",null,"The default view."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(47664).Z,width:"2506",height:"1276"})),(0,r.kt)("p",null,"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume")," to list all existing volumes."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(78655).Z,width:"2668",height:"970"})),(0,r.kt)("h4",{id:"from-cli"},"From CLI"),(0,r.kt)("p",null,"You can also use ",(0,r.kt)("inlineCode",{parentName:"p"},"kubectl")," to get all Volumes."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl get pvc -A\nNAMESPACE                  NAME                                                                                             STATUS   VOLUME                                     CAPACITY   ACCESS MODES   STORAGECLASS         AGE\ncattle-monitoring-system   alertmanager-rancher-monitoring-alertmanager-db-alertmanager-rancher-monitoring-alertmanager-0   Bound    pvc-1b2fbbe9-14b1-4a65-941a-7d5645a89977   5Gi        RWO            harvester-longhorn   43h\ncattle-monitoring-system   prometheus-rancher-monitoring-prometheus-db-prometheus-rancher-monitoring-prometheus-0           Bound    pvc-7c6dcb61-51a9-4a38-b4c5-acaa11788978   50Gi       RWO            harvester-longhorn   43h\ncattle-monitoring-system   rancher-monitoring-grafana                                                                       Bound    pvc-b2b2c07c-f7cd-4965-90e6-ac3319597bf7   2Gi        RWO            harvester-longhorn   43h\n\n# kubectl get volume -A\nNAMESPACE         NAME                                       STATE      ROBUSTNESS   SCHEDULED   SIZE          NODE     AGE\nlonghorn-system   pvc-1b2fbbe9-14b1-4a65-941a-7d5645a89977   attached   degraded                 5368709120    harv31   43h\nlonghorn-system   pvc-7c6dcb61-51a9-4a38-b4c5-acaa11788978   attached   degraded                 53687091200   harv31   43h\nlonghorn-system   pvc-b2b2c07c-f7cd-4965-90e6-ac3319597bf7   attached   degraded                 2147483648    harv31   43h\n")),(0,r.kt)("h3",{id:"scale-down-a-deployment"},"Scale Down a Deployment"),(0,r.kt)("p",null,"To detach the ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume"),", you need to scale down the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," that uses the ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume"),"."),(0,r.kt)("p",null,"The example below is against the PVC claimed by ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-grafana"),"."),(0,r.kt)("p",null,"Find the ",(0,r.kt)("inlineCode",{parentName:"p"},"deployment")," in the namespace ",(0,r.kt)("inlineCode",{parentName:"p"},"cattle-monitoring-system"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl get deployment -n cattle-monitoring-system\nNAME                                    READY   UP-TO-DATE   AVAILABLE   AGE\nrancher-monitoring-grafana              1/1     1            1           43h  // target deployment\nrancher-monitoring-kube-state-metrics   1/1     1            1           43h\nrancher-monitoring-operator             1/1     1            1           43h\nrancher-monitoring-prometheus-adapter   1/1     1            1           43h\n")),(0,r.kt)("p",null,"Scale down the deployment ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-grafana")," to 0."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl scale --replicas=0 deployment/rancher-monitoring-grafana -n cattle-monitoring-system\n")),(0,r.kt)("p",null,"Check the deployment and the volume."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl get deployment -n cattle-monitoring-system\nNAME                                    READY   UP-TO-DATE   AVAILABLE   AGE\nrancher-monitoring-grafana              0/0     0            0           43h  // scaled down\nrancher-monitoring-kube-state-metrics   1/1     1            1           43h\nrancher-monitoring-operator             1/1     1            1           43h\nrancher-monitoring-prometheus-adapter   1/1     1            1           43h\n\n# kubectl get volume -A\nNAMESPACE         NAME                                       STATE      ROBUSTNESS   SCHEDULED   SIZE          NODE     AGE\nlonghorn-system   pvc-1b2fbbe9-14b1-4a65-941a-7d5645a89977   attached   degraded                 5368709120    harv31   43h\nlonghorn-system   pvc-7c6dcb61-51a9-4a38-b4c5-acaa11788978   attached   degraded                 53687091200   harv31   43h\nlonghorn-system   pvc-b2b2c07c-f7cd-4965-90e6-ac3319597bf7   detached   unknown                  2147483648             43h  // volume is detached\n")),(0,r.kt)("h3",{id:"expand-volume"},"Expand Volume"),(0,r.kt)("p",null,"In the Longhorn WebUI, the related volume becomes ",(0,r.kt)("inlineCode",{parentName:"p"},"Detached"),". Click the icon in the ",(0,r.kt)("inlineCode",{parentName:"p"},"Operation")," column, and select ",(0,r.kt)("inlineCode",{parentName:"p"},"Expand Volume"),"."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(55384).Z,width:"2564",height:"1122"})),(0,r.kt)("p",null,"Input a new size, and ",(0,r.kt)("inlineCode",{parentName:"p"},"Longhorn")," will expand the volume to this size."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(98555).Z,width:"2502",height:"1226"})),(0,r.kt)("h3",{id:"scale-up-a-deployment"},"Scale Up a Deployment"),(0,r.kt)("p",null,"After the ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume")," is expanded to target size, you need to scale up the aforementioned deployment to its original replicas. For the above example of ",(0,r.kt)("inlineCode",{parentName:"p"},"rancher-monitoring-grafana"),", the original replicas is 1."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl scale --replicas=1 deployment/rancher-monitoring-grafana -n cattle-monitoring-system\n\n")),(0,r.kt)("p",null,"Check the deployment again."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl get deployment -n cattle-monitoring-system\nNAME                                    READY   UP-TO-DATE   AVAILABLE   AGE\nrancher-monitoring-grafana              1/1     1            1           43h  // scaled up\nrancher-monitoring-kube-state-metrics   1/1     1            1           43h\nrancher-monitoring-operator             1/1     1            1           43h\nrancher-monitoring-prometheus-adapter   1/1     1            1           43h\n")),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume")," is attached to the new POD."),(0,r.kt)("p",null,(0,r.kt)("img",{src:t(17940).Z,width:"2696",height:"942"})),(0,r.kt)("p",null,"To now, the ",(0,r.kt)("inlineCode",{parentName:"p"},"Volume")," is expanded to the new size and the POD is using it smoothly."))}p.isMDXComponent=!0},20283:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/1-access-embedded-longhorn-9f84b5f472675415f355f8d6a382dad6.png"},47664:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/2-longhorn-dashboard-90a68b82b511c671db6d640dc8038274.png"},78655:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/3-view-all-volume-f72a8c49486c5a86a66aa29680e39000.png"},55384:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/4-select-volume-to-expand-9c1002c23d1a8cd653272951031e0f34.png"},98555:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/5-expand-volue-to-new-size-0c5ddcb89f21656e1bfb1c1cc24d8c3c.png"},17940:(e,n,t)=>{t.d(n,{Z:()=>o});const o=t.p+"assets/images/6-after-scale-up-00d817e0272b5a4184bc09e289f45101.png"}}]);