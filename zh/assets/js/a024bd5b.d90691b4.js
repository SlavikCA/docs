"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[33267],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},h="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),h=s(r),c=a,v=h["".concat(p,".").concat(c)]||h[c]||d[c]||l;return r?n.createElement(v,o(o({ref:t},u),{},{components:r})):n.createElement(v,o({ref:t},u))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=c;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[h]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<l;s++)o[s]=r[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}c.displayName="MDXCreateElement"},44471:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const l={sidebar_position:2,sidebar_label:"Harvester",title:"Harvester"},o=void 0,i={unversionedId:"troubleshooting/harvester",id:"troubleshooting/harvester",title:"Harvester",description:"HTTP Proxy \u8bbe\u7f6e\u9519\u8bef\u5bfc\u81f4\u591a\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72\u5931\u8d25",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/troubleshooting/harvester.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/harvester",permalink:"/zh/v1.4/troubleshooting/harvester",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/troubleshooting/harvester.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Harvester",title:"Harvester"},sidebar:"docs",previous:{title:"\u5b89\u88c5",permalink:"/zh/v1.4/troubleshooting/index"},next:{title:"\u64cd\u4f5c\u7cfb\u7edf",permalink:"/zh/v1.4/troubleshooting/os"}},p={},s=[{value:"HTTP Proxy \u8bbe\u7f6e\u9519\u8bef\u5bfc\u81f4\u591a\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72\u5931\u8d25",id:"http-proxy-\u8bbe\u7f6e\u9519\u8bef\u5bfc\u81f4\u591a\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72\u5931\u8d25",level:2},{value:"\u6ca1\u6709 Harvester \u914d\u7f6e\u6587\u4ef6\u7684 ISO \u5b89\u88c5",id:"\u6ca1\u6709-harvester-\u914d\u7f6e\u6587\u4ef6\u7684-iso-\u5b89\u88c5",level:3},{value:"\u5728 Harvester \u5b89\u88c5\u671f\u95f4\u914d\u7f6e HTTP \u4ee3\u7406",id:"\u5728-harvester-\u5b89\u88c5\u671f\u95f4\u914d\u7f6e-http-\u4ee3\u7406",level:4},{value:"\u5728\u7b2c\u4e00\u4e2a\u8282\u70b9\u5c31\u7eea\u540e\u914d\u7f6e HTTP \u4ee3\u7406",id:"\u5728\u7b2c\u4e00\u4e2a\u8282\u70b9\u5c31\u7eea\u540e\u914d\u7f6e-http-\u4ee3\u7406",level:4},{value:"\u4e00\u4e2a\u8282\u70b9\u4e0d\u53ef\u7528",id:"\u4e00\u4e2a\u8282\u70b9\u4e0d\u53ef\u7528",level:4},{value:"\u89e3\u51b3\u65b9\u6848",id:"\u89e3\u51b3\u65b9\u6848",level:4},{value:"\u5177\u6709 Harvester \u914d\u7f6e\u6587\u4ef6\u7684 ISO \u5b89\u88c5",id:"\u5177\u6709-harvester-\u914d\u7f6e\u6587\u4ef6\u7684-iso-\u5b89\u88c5",level:3},{value:"PXE \u5f15\u5bfc\u5b89\u88c5",id:"pxe-\u5f15\u5bfc\u5b89\u88c5",level:3},{value:"\u751f\u6210 Support Bundle",id:"\u751f\u6210-support-bundle",level:2},{value:"\u8bbf\u95ee\u5d4c\u5165\u5f0f Rancher \u548c Longhorn \u4eea\u8868\u677f",id:"\u8bbf\u95ee\u5d4c\u5165\u5f0f-rancher-\u548c-longhorn-\u4eea\u8868\u677f",level:2},{value:"\u4fee\u6539 SSL/TLS \u542f\u7528\u7684\u534f\u8bae\u548c\u5bc6\u7801\u540e\u65e0\u6cd5\u8bbf\u95ee Harvester",id:"\u4fee\u6539-ssltls-\u542f\u7528\u7684\u534f\u8bae\u548c\u5bc6\u7801\u540e\u65e0\u6cd5\u8bbf\u95ee-harvester",level:2}],u={toc:s},h="wrapper";function d(e){let{components:t,...l}=e;return(0,a.kt)(h,(0,n.Z)({},u,l,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"http-proxy-\u8bbe\u7f6e\u9519\u8bef\u5bfc\u81f4\u591a\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72\u5931\u8d25"},"HTTP Proxy \u8bbe\u7f6e\u9519\u8bef\u5bfc\u81f4\u591a\u8282\u70b9\u96c6\u7fa4\u90e8\u7f72\u5931\u8d25"),(0,a.kt)("h3",{id:"\u6ca1\u6709-harvester-\u914d\u7f6e\u6587\u4ef6\u7684-iso-\u5b89\u88c5"},"\u6ca1\u6709 Harvester \u914d\u7f6e\u6587\u4ef6\u7684 ISO \u5b89\u88c5"),(0,a.kt)("h4",{id:"\u5728-harvester-\u5b89\u88c5\u671f\u95f4\u914d\u7f6e-http-\u4ee3\u7406"},"\u5728 Harvester \u5b89\u88c5\u671f\u95f4\u914d\u7f6e HTTP \u4ee3\u7406"),(0,a.kt)("p",null,"\u5728\u67d0\u4e9b\u73af\u5883\u4e2d\uff0c\u4f60\u4f1a\u5728\u5b89\u88c5 Harvester \u65f6\u914d\u7f6e ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.4/install/harvester-configuration#osenvironment"},"OS Environment")," \u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.4/airgap#%E5%9C%A8%E5%AE%89%E8%A3%85%E6%9C%9F%E9%97%B4%E9%85%8D%E7%BD%AE-http-%E4%BB%A3%E7%90%86"},"http-proxy"),"\u3002"),(0,a.kt)("h4",{id:"\u5728\u7b2c\u4e00\u4e2a\u8282\u70b9\u5c31\u7eea\u540e\u914d\u7f6e-http-\u4ee3\u7406"},"\u5728\u7b2c\u4e00\u4e2a\u8282\u70b9\u5c31\u7eea\u540e\u914d\u7f6e HTTP \u4ee3\u7406"),(0,a.kt)("p",null,"\u7b2c\u4e00\u4e2a\u8282\u70b9\u5b89\u88c5\u6210\u529f\u540e\uff0c\u767b\u5f55\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"Harvester GUI")," \u4ee5\u914d\u7f6e ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.4/install/harvester-configuration#system_settings"},"Harvester \u7cfb\u7edf\u8bbe\u7f6e"),"\u7684 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.4/airgap#%E5%9C%A8-harvester-%E8%AE%BE%E7%BD%AE%E4%B8%AD%E9%85%8D%E7%BD%AE-http-%E4%BB%A3%E7%90%86"},"http-proxy"),"\u3002"),(0,a.kt)("p",null,"\u7136\u540e\u7ee7\u7eed\u5411\u96c6\u7fa4\u6dfb\u52a0\u66f4\u591a\u8282\u70b9\u3002"),(0,a.kt)("h4",{id:"\u4e00\u4e2a\u8282\u70b9\u4e0d\u53ef\u7528"},"\u4e00\u4e2a\u8282\u70b9\u4e0d\u53ef\u7528"),(0,a.kt)("p",null,"\u4f60\u53ef\u80fd\u9047\u5230\u7684\u95ee\u9898\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u7b2c\u4e00\u4e2a\u8282\u70b9\u5b89\u88c5\u6210\u529f\u3002\n\n\u7b2c\u4e8c\u4e2a\u8282\u70b9\u5b89\u88c5\u6210\u529f\u3002\n\n\u7b2c\u4e09\u4e2a\u8282\u70b9\u5b89\u88c5\u6210\u529f\u3002\n\n\u7136\u540e\u7b2c\u4e8c\u4e2a\u8282\u70b9\u53d8\u4e3a Unavialable \u72b6\u6001\uff0c\u800c\u4e14\u65e0\u6cd5\u81ea\u52a8\u6062\u590d\u3002\n")),(0,a.kt)("h4",{id:"\u89e3\u51b3\u65b9\u6848"},"\u89e3\u51b3\u65b9\u6848"),(0,a.kt)("p",null,"\u5f53\u96c6\u7fa4\u4e2d\u7684\u8282\u70b9\u4e0d\u4f7f\u7528 HTTP Proxy \u8fdb\u884c\u76f8\u4e92\u901a\u4fe1\u65f6\uff0c\u6210\u529f\u5b89\u88c5\u7b2c\u4e00\u4e2a\u8282\u70b9\u540e\uff0c\u4f60\u9700\u8981\u4e3a\u8fd9\u4e9b\u8282\u70b9\u4f7f\u7528\u7684 CIDR \u914d\u7f6e ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.4/airgap#%E5%9C%A8-harvester-%E8%AE%BE%E7%BD%AE%E4%B8%AD%E9%85%8D%E7%BD%AE-http-%E4%BB%A3%E7%90%86"},"http-proxy.noProxy"),"\u3002"),(0,a.kt)("p",null,"\u4f8b\u5982\uff0c\u5982\u679c\u4f60\u7684\u96c6\u7fa4\u901a\u8fc7 DHCP/\u9759\u6001\u8bbe\u7f6e\u5c06 CIDR ",(0,a.kt)("inlineCode",{parentName:"p"},"172.26.50.128/27")," \u7684 IP \u5206\u914d\u7ed9\u8282\u70b9\uff0c\u8bf7\u5c06\u6b64 CIDR \u6dfb\u52a0\u5230 ",(0,a.kt)("inlineCode",{parentName:"p"},"noProxy"),"\u3002"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u597d\u4e4b\u540e\uff0c\u4f60\u5c31\u53ef\u4ee5\u7ee7\u7eed\u5f80\u96c6\u7fa4\u4e2d\u6dfb\u52a0\u65b0\u7684\u8282\u70b9\u4e86\u3002"),(0,a.kt)("p",null,"\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605 ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3091"},"Harvester issue 3091"),"\u3002"),(0,a.kt)("h3",{id:"\u5177\u6709-harvester-\u914d\u7f6e\u6587\u4ef6\u7684-iso-\u5b89\u88c5"},"\u5177\u6709 Harvester \u914d\u7f6e\u6587\u4ef6\u7684 ISO \u5b89\u88c5"),(0,a.kt)("p",null,"\u5982\u679c\u5728 ISO \u5b89\u88c5\u65f6\u4f7f\u7528\u4e86 Harvester \u914d\u7f6e\u6587\u4ef6\uff0c\u8bf7\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.4/install/harvester-configuration#system_settings"},"Harvester System Settings")," \u4e2d\u914d\u7f6e\u9002\u5f53\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"http-proxy"),"\u3002"),(0,a.kt)("h3",{id:"pxe-\u5f15\u5bfc\u5b89\u88c5"},"PXE \u5f15\u5bfc\u5b89\u88c5"),(0,a.kt)("p",null,"\u4f7f\u7528 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.4/install/pxe-boot-install"},"PXE \u5f15\u5bfc\u5b89\u88c5"),"\u65f6\uff0c\u8bf7\u5728 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.4/install/harvester-configuration#osenvironment"},"OS Environment")," \u548c ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.4/install/harvester-configuration#system_settings"},"Harvester System Settings")," \u4e2d\u914d\u7f6e\u5408\u9002\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"http-proxy"),"\u3002"),(0,a.kt)("h2",{id:"\u751f\u6210-support-bundle"},"\u751f\u6210 Support Bundle"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u5728 Harvester GUI \u4e2d\u751f\u6210 Support Bundle\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Harvester \u7f51\u9875 UI \u7684\u5de6\u4e0b\u89d2\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Support"),"\uff1a\n",(0,a.kt)("img",{src:r(62259).Z,width:"955",height:"902"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Generate Support Bundle")," \u6309\u94ae\uff1a\n",(0,a.kt)("img",{src:r(25019).Z,width:"953",height:"286"}))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u8f93\u5165\u652f\u6301\u5305\u7684\u63cf\u8ff0\u5e76\u70b9\u51fb ",(0,a.kt)("inlineCode",{parentName:"p"},"Create")," \u4ee5\u751f\u6210\u548c\u4e0b\u8f7d Support Bundle\uff1a\n",(0,a.kt)("img",{src:r(28113).Z,width:"941",height:"436"})))),(0,a.kt)("h2",{id:"\u8bbf\u95ee\u5d4c\u5165\u5f0f-rancher-\u548c-longhorn-\u4eea\u8868\u677f"},"\u8bbf\u95ee\u5d4c\u5165\u5f0f Rancher \u548c Longhorn \u4eea\u8868\u677f"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v1.1.0 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"\u4f60\u73b0\u5728\u53ef\u4ee5\u76f4\u63a5\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"Support")," \u9875\u9762\u4e0a\u8bbf\u95ee\u5d4c\u5165\u5f0f Rancher \u548c Longhorn \u4eea\u8868\u677f\uff0c\u4f46\u5fc5\u987b\u5148\u524d\u5f80 ",(0,a.kt)("inlineCode",{parentName:"p"},"Preferences")," \u9875\u9762\u5e76\u9009\u4e2d ",(0,a.kt)("inlineCode",{parentName:"p"},"Advanced Features")," \u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"Enable Extension developer features"),"\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:r(24006).Z,width:"3308",height:"1462"})),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u65e7\u7684\u7248\u672c\uff0c\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u65b9\u5f0f\u624b\u52a8\u8bbf\u95ee\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://{{HARVESTER_IP}}/dashboard/c/local/explorer")," (Embedded Rancher)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"https://{{HARVESTER_IP}}/dashboard/c/local/longhorn")," (Embedded Longhorn)")),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"\u6211\u4eec\u4ec5\u652f\u6301\u4f7f\u7528\u5d4c\u5165\u5f0f Rancher \u548c Longhorn \u4eea\u8868\u677f\u8fdb\u884c\u8c03\u8bd5\u548c\u9a8c\u8bc1\u3002\n\u5bf9\u4e8e Rancher \u7684\u591a\u96c6\u7fa4\u548c\u591a\u79df\u6237\u96c6\u6210\uff0c\u8bf7\u53c2\u89c1",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.4/rancher/index"},"\u6587\u6863"),"\u3002")),(0,a.kt)("h2",{id:"\u4fee\u6539-ssltls-\u542f\u7528\u7684\u534f\u8bae\u548c\u5bc6\u7801\u540e\u65e0\u6cd5\u8bbf\u95ee-harvester"},"\u4fee\u6539 SSL/TLS \u542f\u7528\u7684\u534f\u8bae\u548c\u5bc6\u7801\u540e\u65e0\u6cd5\u8bbf\u95ee Harvester"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4fee\u6539\u4e86 ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.4/advanced/index#ssl-parameters"},"SSL/TLS \u542f\u7528\u7684\u534f\u8bae\u548c\u5bc6\u7801\u8bbe\u7f6e"),"\u540e\u65e0\u6cd5\u8bbf\u95ee Harvester GUI \u548c API\uff0c\u5f88\u6709\u53ef\u80fd\u662f\u7531\u4e8e\u9519\u8bef\u914d\u7f6e\u7684 SSL/TLS \u534f\u8bae\u548c\u5bc6\u7801\u5bfc\u81f4 NGINX Ingress Controller \u505c\u6b62\u8fd0\u884c\u3002\n\u8bf7\u6309\u7167\u4ee5\u4e0b\u6b65\u9aa4\u6765\u8fdb\u884c\u91cd\u7f6e\uff1a"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u6309\u7167",(0,a.kt)("a",{parentName:"li",href:"/zh/v1.4/faq"},"\u5e38\u89c1\u95ee\u9898"),"\u7684\u63cf\u8ff0 SSH \u5230 Harvester \u8282\u70b9\uff0c\u5e76\u5207\u6362\u6210 ",(0,a.kt)("inlineCode",{parentName:"li"},"root")," \u7528\u6237\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"$ sudo -s\n")),(0,a.kt)("ol",{start:2},(0,a.kt)("li",{parentName:"ol"},"\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"kubectl")," \u624b\u52a8\u7f16\u8f91 ",(0,a.kt)("inlineCode",{parentName:"li"},"ssl-parameters"),"\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# kubectl edit settings ssl-parameters\n")),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},"\u5220\u9664 ",(0,a.kt)("inlineCode",{parentName:"li"},"value: ...")," \u884c\uff0c\u7136\u540e NGINX Ingress Controller \u5c31\u4f1a\u4f7f\u7528\u9ed8\u8ba4\u7684\u534f\u8bae\u548c\u5bc6\u7801\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'apiVersion: harvesterhci.io/v1beta1\ndefault: \'{}\'\nkind: Setting\nmetadata:\n  name: ssl-parameters\n...\nvalue: \'{"protocols":"TLS99","ciphers":"WRONG_CIPHER"}\' # <- Delete this line\n')),(0,a.kt)("ol",{start:4},(0,a.kt)("li",{parentName:"ol"},"\u4fdd\u5b58\u4fee\u6539\u3002\u9000\u51fa\u7f16\u8f91\u5668\u540e\uff0c\u4f60\u4f1a\u770b\u5230\u4ee5\u4e0b\u54cd\u5e94\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"setting.harvesterhci.io/ssl-parameters edited\n")),(0,a.kt)("p",null,"\u4f60\u4e5f\u53ef\u4ee5\u8fdb\u4e00\u6b65\u68c0\u67e5 ",(0,a.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx-controller")," Pod \u7684\u65e5\u5fd7\uff0c\u6765\u786e\u8ba4 NGINX Ingress Controller \u662f\u5426\u80fd\u6b63\u5e38\u8fd0\u884c\u3002"))}d.isMDXComponent=!0},25019:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-button-481867fa7c7e1284b77c3a328cdc06ba.png"},62259:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-link-37d8e3a1cf4a0db290c41adeea228f3a.png"},28113:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/harvester-sb-support-modal-2926ec28f3190a25f618cedfe7975687.png"},24006:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/support-access-embedded-ui-db8c2edddf3a26facf679c28492cb3e1.png"}}]);