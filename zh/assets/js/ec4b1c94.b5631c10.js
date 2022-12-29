"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[7591],{3905:(t,e,a)=>{a.d(e,{Zo:()=>k,kt:()=>s});var r=a(67294);function n(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,r)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){n(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,r,n=function(t,e){if(null==t)return{};var a,r,n={},l=Object.keys(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||(n[a]=t[a]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)a=l[r],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(n[a]=t[a])}return n}var d=r.createContext({}),m=function(t){var e=r.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k=function(t){var e=m(t.components);return r.createElement(d.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var a=t.components,n=t.mdxType,l=t.originalType,d=t.parentName,k=p(t,["components","mdxType","originalType","parentName"]),N=m(a),s=n,f=N["".concat(d,".").concat(s)]||N[s]||o[s]||l;return a?r.createElement(f,i(i({ref:e},k),{},{components:a})):r.createElement(f,i({ref:e},k))}));function s(t,e){var a=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=a.length,i=new Array(l);i[0]=N;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:n,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}N.displayName="MDXCreateElement"},93166:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>d,contentTitle:()=>i,default:()=>o,frontMatter:()=>l,metadata:()=>p,toc:()=>m});var r=a(87462),n=(a(67294),a(3905));const l={sidebar_position:1,sidebar_label:"\u8981\u6c42",title:"\u8981\u6c42",keywords:["\u5b89\u88c5\u8981\u6c42"],Description:"Harvester \u5b89\u88c5\u8981\u6c42\u6982\u8ff0"},i=void 0,p={unversionedId:"install/requirements",id:"install/requirements",title:"\u8981\u6c42",description:"Harvester \u662f\u88f8\u673a\u670d\u52a1\u5668\u4e0a\u7684 HCI \u89e3\u51b3\u65b9\u6848\uff0c\u4ee5\u4e0b\u662f Harvester \u5b89\u88c5\u7684\u6700\u4f4e\u8981\u6c42\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/requirements.md",sourceDirName:"install",slug:"/install/requirements",permalink:"/zh/dev/install/requirements",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/install/requirements.md",tags:[],version:"current",lastUpdatedAt:1669342702,formattedLastUpdatedAt:"2022\u5e7411\u670825\u65e5",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"\u8981\u6c42",title:"\u8981\u6c42",keywords:["\u5b89\u88c5\u8981\u6c42"],Description:"Harvester \u5b89\u88c5\u8981\u6c42\u6982\u8ff0"},sidebar:"tutorialSidebar",previous:{title:"Harvester \u4ecb\u7ecd",permalink:"/zh/dev/"},next:{title:"ISO \u5b89\u88c5",permalink:"/zh/dev/install/iso-install"}},d={},m=[{value:"\u786c\u4ef6\u8981\u6c42",id:"\u786c\u4ef6\u8981\u6c42",level:2},{value:"\u7f51\u7edc",id:"\u7f51\u7edc",level:2},{value:"Harvester \u4e3b\u673a\u5165\u7ad9\u89c4\u5219",id:"harvester-\u4e3b\u673a\u5165\u7ad9\u89c4\u5219",level:3},{value:"\u5c06 Harvester \u4e0e Rancher \u96c6\u6210",id:"\u5c06-harvester-\u4e0e-rancher-\u96c6\u6210",level:3},{value:"Guest \u96c6\u7fa4",id:"guest-\u96c6\u7fa4",level:4}],k={toc:m};function o(t){let{components:e,...a}=t;return(0,n.kt)("wrapper",(0,r.Z)({},k,a,{components:e,mdxType:"MDXLayout"}),(0,n.kt)("p",null,"Harvester \u662f\u88f8\u673a\u670d\u52a1\u5668\u4e0a\u7684 HCI \u89e3\u51b3\u65b9\u6848\uff0c\u4ee5\u4e0b\u662f Harvester \u5b89\u88c5\u7684\u6700\u4f4e\u8981\u6c42\u3002"),(0,n.kt)("h2",{id:"\u786c\u4ef6\u8981\u6c42"},"\u786c\u4ef6\u8981\u6c42"),(0,n.kt)("p",null,"\u786c\u4ef6\u9700\u8981\u6ee1\u8db3\u4ee5\u4e0b\u8981\u6c42\uff0c\u624d\u53ef\u4ee5\u542f\u52a8\u548c\u8fd0\u884c Harvester\uff1a"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7c7b\u578b"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u8981\u6c42"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"CPU"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4ec5\u652f\u6301 x86_64\u3002\u9700\u8981\u786c\u4ef6\u8f85\u52a9\u865a\u62df\u5316\u30028 \u6838\u5904\u7406\u5668\uff08\u81f3\u5c11\uff09\u7528\u4e8e\u6d4b\u8bd5\uff0c\u5efa\u8bae\u5728\u751f\u4ea7\u73af\u5883\u4e2d\u4f7f\u7528 16 \u6838\u5904\u7406\u5668\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u5185\u5b58"),(0,n.kt)("td",{parentName:"tr",align:"left"},"32 GB\uff08\u81f3\u5c11\uff09\u3002\u5efa\u8bae\u4f7f\u7528 64 GB \u6216\u4ee5\u4e0a\u7684\u5185\u5b58\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u78c1\u76d8\u5bb9\u91cf"),(0,n.kt)("td",{parentName:"tr",align:"left"},"200 GB\uff08\u81f3\u5c11\uff09\u7528\u4e8e\u6d4b\u8bd5\uff0c\u5efa\u8bae\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528 500 GB \u6216\u4ee5\u4e0a\u7684\u78c1\u76d8\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u78c1\u76d8\u6027\u80fd"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u6bcf\u4e2a\u78c1\u76d8 5,000+ \u968f\u673a IOPS (SSD/NVMe)\u3002\u7ba1\u7406\u8282\u70b9\uff08\u524d 3 \u4e2a\u8282\u70b9\uff09\u5fc5\u987b",(0,n.kt)("a",{parentName:"td",href:"https://www.ibm.com/cloud/blog/using-fio-to-tell-whether-your-storage-is-fast-enough-for-etcd"},"\u5bf9 etcd \u800c\u8a00\u8db3\u591f\u5feb"),"\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u5361"),(0,n.kt)("td",{parentName:"tr",align:"left"},"1 Gbps \u4ee5\u592a\u7f51\uff08\u81f3\u5c11\uff09\u7528\u4e8e\u6d4b\u8bd5\uff0c\u5efa\u8bae\u5728\u751f\u4ea7\u4e2d\u4f7f\u7528 10 Gbps \u6216\u4ee5\u4e0a\u7684\u4ee5\u592a\u7f51\u3002")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"\u7f51\u7edc\u4ea4\u6362\u673a"),(0,n.kt)("td",{parentName:"tr",align:"left"},"VLAN \u652f\u6301\u6240\u9700\u7684\u7aef\u53e3\u4e2d\u7ee7\u3002")))),(0,n.kt)("admonition",{type:"info"},(0,n.kt)("p",{parentName:"admonition"},"\u5efa\u8bae\u4f7f\u7528\u670d\u52a1\u5668\u7ea7\u786c\u4ef6\u4ee5\u83b7\u5f97\u6700\u4f73\u6548\u679c\u3002\u7b14\u8bb0\u672c\u7535\u8111\u548c\u5d4c\u5957\u865a\u62df\u5316\u4e0d\u53d7\u5b98\u65b9\u652f\u6301\u3002")),(0,n.kt)("h2",{id:"\u7f51\u7edc"},"\u7f51\u7edc"),(0,n.kt)("h3",{id:"harvester-\u4e3b\u673a\u5165\u7ad9\u89c4\u5219"},"Harvester \u4e3b\u673a\u5165\u7ad9\u89c4\u5219"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"\u534f\u8bae"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u7aef\u53e3"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u6e90"),(0,n.kt)("th",{parentName:"tr",align:"left"},"\u63cf\u8ff0"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2379"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"etcd \u5ba2\u6237\u7aef\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2381"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"etcd \u5065\u5eb7\u68c0\u67e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2380"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"etcd \u5bf9\u7b49\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10010"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Containerd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6443"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9345"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubernetes API")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10252"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager \u5065\u5eb7\u68c0\u67e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10257"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-controller-manager \u5b89\u5168\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10251"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-scheduler \u5065\u5eb7\u68c0\u67e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10259"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"kube-scheduler \u5b89\u5168\u7aef\u53e3")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10250"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kubelet")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10256"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-proxy \u5065\u5eb7\u68c0\u67e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10258"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cloud-controller-manager")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9091"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Canal calico-node felix")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9099"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Canal CNI \u5065\u5eb7\u68c0\u67e5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8472"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"\u4f7f\u7528 VxLAN \u7684 Canal CNI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"2112"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Kube-vip")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6444"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"RKE2 Agent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"6060"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-disk-manager")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10246/10247/10248/10249"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx worker \u8fdb\u7a0b")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8181"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"8444"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"10245"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx-ingress-controller")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"80"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Nginx")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"9796"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Node-exporter")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"30000-32767"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"NodePort \u7aef\u53e3\u8303\u56f4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"22"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"sshd")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"UDP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"68"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Wicked")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"TCP"),(0,n.kt)("td",{parentName:"tr",align:"left"},"3260"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Harvester \u7ba1\u7406\u548c\u8ba1\u7b97\u8282\u70b9"),(0,n.kt)("td",{parentName:"tr",align:"left"},"iscsid")))),(0,n.kt)("p",null,"\u6240\u6709\u51fa\u7ad9\u6d41\u91cf\u901a\u5e38\u90fd\u662f\u5141\u8bb8\u7684\u3002"),(0,n.kt)("h3",{id:"\u5c06-harvester-\u4e0e-rancher-\u96c6\u6210"},"\u5c06 Harvester \u4e0e Rancher \u96c6\u6210"),(0,n.kt)("p",null,"\u5982\u679c\u4f60\u60f3",(0,n.kt)("a",{parentName:"p",href:"/zh/dev/rancher/rancher-integration"},"\u5c06 Harvester \u4e0e Rancher \u96c6\u6210"),"\uff0c\u4f60\u9700\u8981\u786e\u4fdd\u6240\u6709 Harvester \u8282\u70b9\u90fd\u53ef\u4ee5\u8fde\u63a5\u5230 Rancher \u8d1f\u8f7d\u5747\u8861\u5668\u7684 TCP \u7aef\u53e3 ",(0,n.kt)("inlineCode",{parentName:"p"},"443"),"\u3002"),(0,n.kt)("p",null,"\u4ece Rancher \u914d\u7f6e\u5230 Harvester \u7684 Kubernetes \u96c6\u7fa4\u7684\u865a\u62df\u673a\u4e5f\u9700\u8981\u80fd\u591f\u8fde\u63a5\u5230 Rancher \u8d1f\u8f7d\u5747\u8861\u5668\u7684 TCP \u7aef\u53e3 ",(0,n.kt)("inlineCode",{parentName:"p"},"443"),"\uff0c\u5426\u5219 Rancher \u5c06\u65e0\u6cd5\u7ba1\u7406\u96c6\u7fa4\u3002\u5982\u9700\u66f4\u591a\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/overview/architecture/"},"Rancher \u67b6\u6784"),"\u3002"),(0,n.kt)("h4",{id:"guest-\u96c6\u7fa4"},"Guest \u96c6\u7fa4"),(0,n.kt)("p",null,"\u5bf9\u4e8e\u90e8\u7f72\u5728 Harvester \u865a\u62df\u673a\u4e2d\u7684 Guest \u96c6\u7fa4\u7684\u7aef\u53e3\u8981\u6c42\uff0c\u8bf7\u53c2\u9605\u4ee5\u4e0b\u94fe\u63a5\uff1a"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"K3s: ",(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/#networking"},"https://rancher.com/docs/k3s/latest/en/installation/installation-requirements/#networking")),(0,n.kt)("li",{parentName:"ul"},"RKE: ",(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rke/latest/en/os/#ports"},"https://rancher.com/docs/rke/latest/en/os/#ports")),(0,n.kt)("li",{parentName:"ul"},"RKE2: ",(0,n.kt)("a",{parentName:"li",href:"https://docs.rke2.io/install/requirements/#networking"},"https://docs.rke2.io/install/requirements/#networking"))))}o.isMDXComponent=!0}}]);