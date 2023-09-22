"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5336],{3905:(e,t,a)=>{a.d(t,{Zo:()=>h,kt:()=>p});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),d=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},h=function(e){var t=d(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,h=i(e,["components","mdxType","originalType","parentName"]),c=d(a),m=n,p=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?r.createElement(p,s(s({ref:t},h),{},{components:a})):r.createElement(p,s({ref:t},h))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[c]="string"==typeof e?e:n,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},70237:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var r=a(87462),n=(a(67294),a(3905));const o={id:"faq",sidebar_position:17,sidebar_label:"FAQ",title:"FAQ"},s=void 0,i={unversionedId:"faq",id:"version-v1.2/faq",title:"FAQ",description:"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester.",source:"@site/versioned_docs/version-v1.2/faq.md",sourceDirName:".",slug:"/faq",permalink:"/zh/v1.2/faq",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/faq.md",tags:[],version:"v1.2",sidebarPosition:17,frontMatter:{id:"faq",sidebar_position:17,sidebar_label:"FAQ",title:"FAQ"},sidebar:"docs",previous:{title:"Monitoring",permalink:"/zh/v1.2/troubleshooting/monitoring"},next:{title:"Introduction",permalink:"/zh/v1.2/api/harvester-apis"}},l={},d=[{value:"How can I ssh login to the Harvester node?",id:"how-can-i-ssh-login-to-the-harvester-node",level:3},{value:"What is the default login username and password of the Harvester dashboard?",id:"what-is-the-default-login-username-and-password-of-the-harvester-dashboard",level:3},{value:"How can I access the kubeconfig file of the Harvester cluster?",id:"how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster",level:3},{value:"How to install the qemu-guest-agent of a running VM?",id:"how-to-install-the-qemu-guest-agent-of-a-running-vm",level:3},{value:"How can I reset the administrator password?",id:"how-can-i-reset-the-administrator-password",level:3},{value:"I added an additional disk with partitions. Why is it not getting detected?",id:"i-added-an-additional-disk-with-partitions-why-is-it-not-getting-detected",level:3},{value:"Why are there some Harvester pods that become ErrImagePull/ImagePullBackOff?",id:"why-are-there-some-harvester-pods-that-become-errimagepullimagepullbackoff",level:3}],h={toc:d},c="wrapper";function u(e){let{components:t,...o}=e;return(0,n.kt)(c,(0,r.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"This FAQ is a work in progress designed to answer the questions our users most frequently ask about Harvester."),(0,n.kt)("h3",{id:"how-can-i-ssh-login-to-the-harvester-node"},"How can I ssh login to the Harvester node?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ ssh rancher@node-ip\n")),(0,n.kt)("h3",{id:"what-is-the-default-login-username-and-password-of-the-harvester-dashboard"},"What is the default login username and password of the Harvester dashboard?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"username: admin\npassword: # you will be promoted to set the default password when logging in for the first time\n")),(0,n.kt)("h3",{id:"how-can-i-access-the-kubeconfig-file-of-the-harvester-cluster"},"How can I access the kubeconfig file of the Harvester cluster?"),(0,n.kt)("p",null,"Option 1. You can download the kubeconfig file from the support page of the Harvester dashboard.\n",(0,n.kt)("img",{alt:"harvester-kubeconfig.png",src:a(57263).Z,width:"2866",height:"1246"})),(0,n.kt)("p",null,"Option 2. You can get the kubeconfig file from one of the Harvester management nodes. E.g.,"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ sudo su\n$ cat /etc/rancher/rke2/rke2.yaml\n")),(0,n.kt)("h3",{id:"how-to-install-the-qemu-guest-agent-of-a-running-vm"},"How to install the qemu-guest-agent of a running VM?"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# cloud-init will only be executed once, reboot it after add the cloud-init config with the following command.\n$ cloud-init clean --logs --reboot\n")),(0,n.kt)("p",null,(0,n.kt)("a",{parentName:"p",href:"https://cloudinit.readthedocs.io/en/latest/reference/cli.html#clean"},"https://cloudinit.readthedocs.io/en/latest/reference/cli.html#clean")),(0,n.kt)("h3",{id:"how-can-i-reset-the-administrator-password"},"How can I reset the administrator password?"),(0,n.kt)("p",null,"In case you forget the administrator password, you can reset it via the command line. SSH to one of the management node and run the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# switch to root and run\n$ kubectl  -n cattle-system exec $(kubectl --kubeconfig $KUBECONFIG -n cattle-system get pods -l app=rancher --no-headers | head -1 | awk '{ print $1 }') -c rancher -- reset-password\nNew password for default administrator (user-xxxxx):\n<new_password>\n")),(0,n.kt)("h3",{id:"i-added-an-additional-disk-with-partitions-why-is-it-not-getting-detected"},"I added an additional disk with partitions. Why is it not getting detected?"),(0,n.kt)("p",null,"As of Harvester v1.0.2, we no longer support adding additional partitioned disks, so be sure to delete all partitions first (e.g., using ",(0,n.kt)("inlineCode",{parentName:"p"},"fdisk"),")."),(0,n.kt)("h3",{id:"why-are-there-some-harvester-pods-that-become-errimagepullimagepullbackoff"},"Why are there some Harvester pods that become ErrImagePull/ImagePullBackOff?"),(0,n.kt)("p",null,"This is likely because your Harvester cluster is an air-gapped setup, and some pre-loaded container images are missing. Kubernetes has a mechanism that does garbage collection against bloated image stores. When the partition which stores container images is over 85% full, ",(0,n.kt)("inlineCode",{parentName:"p"},"kubelet")," tries to prune the images based on the last time they were used, starting with the oldest, until the occupancy is lower than 80%. These numbers (85% and 80%) are default High/Low thresholds that come with Kubernetes."),(0,n.kt)("p",null,"To recover from this state, do one of the following depending on the cluster's configuration:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Pull the missing images from sources outside of the cluster (if it's an air-gapped environment, you might need to set up an HTTP proxy beforehand)."),(0,n.kt)("li",{parentName:"ul"},"Manually import the images from the Harvester ISO image.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Take v1.1.2 as an example, download the Harvester ISO image from the official URL. Then extract the image list from the ISO image to decide which image tarball we're going to import. For instance, we want to import the missing container image ",(0,n.kt)("inlineCode",{parentName:"p"},"rancher/harvester-upgrade")),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},'$ curl -sfL https://releases.rancher.com/harvester/v1.1.2/harvester-v1.1.2-amd64.iso -o harvester.iso\n\n$ xorriso -osirrox on -indev harvester.iso -extract /bundle/harvester/images-lists images-lists\n\n$ grep -R "rancher/harvester-upgrade" images-lists/\nimages-lists/harvester-images-v1.1.2.txt:docker.io/rancher/harvester-upgrade:v1.1.2\n')),(0,n.kt)("p",{parentName:"admonition"},"Find out the location of the image tarball, and extract it from the ISO image. Decompress the extracted zstd image tarball."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ xorriso -osirrox on -indev harvester.iso -extract /bundle/harvester/images/harvester-images-v1.1.2.tar.zst harvester.tar.zst\n\n$ zstd -d --rm harvester.tar.zst\n")),(0,n.kt)("p",{parentName:"admonition"},"Upload the image tarball to the Harvester nodes that need recover. Finally, execute the following command to import the container images on each of them."),(0,n.kt)("pre",{parentName:"admonition"},(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"$ ctr -n k8s.io images import harvester.tar\n$ rm harvester.tar\n"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Find the missing images on that node from the other nodes, then export the images from the node where the images still exist and import them on the missing node.")),(0,n.kt)("p",null,"To prevent this from happening, we recommend cleaning up unused container images from the previous version after each successful Harvester upgrade if the image store disk space is stressed. We provided a ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/upgrade-helpers/blob/main/bin/harv-purge-images.sh"},"harv-purge-images script")," that makes cleaning up disk space easy, especially for container image storage. The script has to be executed on each Harvester node. For example, if the cluster was originally in v1.1.2, and now it gets upgraded to v1.2.0, you can do the following to discard the container images that are only used in v1.1.2 but no longer needed in v1.2.0:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-shell"},"# on each node\n$ ./harv-purge-images.sh v1.1.2 v1.2.0\n")),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"The script only downloads the image lists and compares the two to calculate the difference between the two versions. It does not communicate with the cluster and, as a result, does not know what version the cluster was upgraded from."),(0,n.kt)("li",{parentName:"ul"},"We published image lists for each version released since v1.1.0. For clusters older than v1.1.0, you have to clean up the old images manually."))))}u.isMDXComponent=!0},57263:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/harvester-kubeconfig-766a36ec753411c89d93b986cb5b9cdb.png"}}]);