"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[38745],{3905:(e,t,r)=>{r.d(t,{Zo:()=>c,kt:()=>v});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),p=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),u=p(r),d=o,v=u["".concat(s,".").concat(d)]||u[d]||m[d]||a;return r?n.createElement(v,i(i({ref:t},c),{},{components:r})):n.createElement(v,i({ref:t},c))}));function v(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},43298:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>l,toc:()=>p});var n=r(87462),o=(r(67294),r(3905));const a={sidebar_position:7,sidebar_label:"\u70ed\u63d2\u62d4\u5377",title:"\u70ed\u63d2\u62d4\u5377",keywords:["Harvester","\u70ed\u63d2\u62d4","\u5377"],Description:"\u5411\u8fd0\u884c\u4e2d\u7684\u865a\u62df\u673a\u6dfb\u52a0\u70ed\u63d2\u62d4\u5377"},i=void 0,l={unversionedId:"vm/hotplug-volume",id:"vm/hotplug-volume",title:"\u70ed\u63d2\u62d4\u5377",description:"Harvester \u652f\u6301\u5411\u8fd0\u884c\u4e2d\u7684\u865a\u62df\u673a\u6dfb\u52a0\u70ed\u63d2\u62d4\u5377\u3002",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/vm/hotplug-volume.md",sourceDirName:"vm",slug:"/vm/hotplug-volume",permalink:"/zh/v1.3/vm/hotplug-volume",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/hotplug-volume.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,sidebar_label:"\u70ed\u63d2\u62d4\u5377",title:"\u70ed\u63d2\u62d4\u5377",keywords:["Harvester","\u70ed\u63d2\u62d4","\u5377"],Description:"\u5411\u8fd0\u884c\u4e2d\u7684\u865a\u62df\u673a\u6dfb\u52a0\u70ed\u63d2\u62d4\u5377"},sidebar:"docs",previous:{title:"\u70ed\u8fc1\u79fb",permalink:"/zh/v1.3/vm/live-migration"},next:{title:"\u8d44\u6e90\u8d85\u91cf",permalink:"/zh/v1.3/vm/resource-overcommit"}},s={},p=[{value:"\u5411\u8fd0\u884c\u4e2d\u7684\u865a\u62df\u673a\u6dfb\u52a0\u70ed\u63d2\u62d4\u5377",id:"\u5411\u8fd0\u884c\u4e2d\u7684\u865a\u62df\u673a\u6dfb\u52a0\u70ed\u63d2\u62d4\u5377",level:2}],c={toc:p},u="wrapper";function m(e){let{components:t,...a}=e;return(0,o.kt)(u,(0,n.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Harvester \u652f\u6301\u5411\u8fd0\u884c\u4e2d\u7684\u865a\u62df\u673a\u6dfb\u52a0\u70ed\u63d2\u62d4\u5377\u3002"),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"\u76ee\u524d\uff0cKubeVirt \u5bf9\u70ed\u63d2\u62d4\u5377\u4ec5\u652f\u6301\u78c1\u76d8\u603b\u7ebf ",(0,o.kt)("inlineCode",{parentName:"p"},"scsi"),"\u3002\u6709\u5173\u8be6\u7ec6\u4fe1\u606f\uff0c\u8bf7\u53c2\u9605\u6b64 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/kubevirt/kubevirt/issues/5080#issuecomment-785183128"},"issue"),"\u3002")),(0,o.kt)("h2",{id:"\u5411\u8fd0\u884c\u4e2d\u7684\u865a\u62df\u673a\u6dfb\u52a0\u70ed\u63d2\u62d4\u5377"},"\u5411\u8fd0\u884c\u4e2d\u7684\u865a\u62df\u673a\u6dfb\u52a0\u70ed\u63d2\u62d4\u5377"),(0,o.kt)("p",null,"\u4ee5\u4e0b\u6b65\u9aa4\u5047\u8bbe\u4f60\u6709\u4e00\u4e2a\u6b63\u5728\u8fd0\u884c\u7684\u865a\u62df\u673a\u548c\u4e00\u4e2a\u5c31\u7eea\u5377\uff1a"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u524d\u5f80 ",(0,o.kt)("strong",{parentName:"li"},"Virtual Machines")," \u9875\u9762\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u627e\u5230\u9700\u8981\u6dfb\u52a0\u5377\u7684\u865a\u62df\u673a\uff0c\u7136\u540e\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"\u22ee > Add Volume"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u8f93\u5165 ",(0,o.kt)("strong",{parentName:"li"},"Name"),"\uff0c\u7136\u540e\u9009\u62e9 ",(0,o.kt)("strong",{parentName:"li"},"Volume"),"\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u70b9\u51fb ",(0,o.kt)("strong",{parentName:"li"},"Apply"),"\u3002")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Add Volume",src:r(37185).Z,width:"4282",height:"1854"})))}m.isMDXComponent=!0},37185:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/add-volume-80106f57571708c9bac1f48720df7583.png"}}]);