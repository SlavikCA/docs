"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[19792],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>v});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var c=n.createContext({}),s=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(c.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(r),d=a,v=m["".concat(c,".").concat(d)]||m[d]||u[d]||o;return r?n.createElement(v,i(i({ref:t},p),{},{components:r})):n.createElement(v,i({ref:t},p))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[m]="string"==typeof e?e:a,i[1]=l;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},89196:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={sidebar_position:9,sidebar_label:"\u514b\u9686\u865a\u62df\u673a",title:"\u514b\u9686\u865a\u62df\u673a",keywords:["Harvester","harvester","Rancher","rancher","\u514b\u9686\u865a\u62df\u673a"],Description:"\u5728\u514b\u9686 VM \u65f6\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u662f\u5426\u540c\u65f6\u514b\u9686 VM \u6570\u636e\u3002\u6b64\u529f\u80fd\u4e0d\u9700\u8981\u4f60\u5148\u83b7\u53d6 VM \u5feb\u7167\u6216\u8bbe\u7f6e\u5907\u4efd\u76ee\u6807\u3002"},i=void 0,l={unversionedId:"vm/clone-vm",id:"vm/clone-vm",title:"\u514b\u9686\u865a\u62df\u673a",description:"\u4ece v1.1.0 \u8d77\u53ef\u7528",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/vm/clone-vm.md",sourceDirName:"vm",slug:"/vm/clone-vm",permalink:"/zh/v1.3/vm/clone-vm",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/vm/clone-vm.md",tags:[],version:"current",sidebarPosition:9,frontMatter:{sidebar_position:9,sidebar_label:"\u514b\u9686\u865a\u62df\u673a",title:"\u514b\u9686\u865a\u62df\u673a",keywords:["Harvester","harvester","Rancher","rancher","\u514b\u9686\u865a\u62df\u673a"],Description:"\u5728\u514b\u9686 VM \u65f6\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u662f\u5426\u540c\u65f6\u514b\u9686 VM \u6570\u636e\u3002\u6b64\u529f\u80fd\u4e0d\u9700\u8981\u4f60\u5148\u83b7\u53d6 VM \u5feb\u7167\u6216\u8bbe\u7f6e\u5907\u4efd\u76ee\u6807\u3002"},sidebar:"docs",previous:{title:"\u8d44\u6e90\u8d85\u91cf",permalink:"/zh/v1.3/vm/resource-overcommit"},next:{title:"\u521b\u5efa\u5377",permalink:"/zh/v1.3/volume/index"}},c={},s=[{value:"\u540c\u65f6\u514b\u9686 VM \u5377\u6570\u636e",id:"\u540c\u65f6\u514b\u9686-vm-\u5377\u6570\u636e",level:2},{value:"\u4e0d\u514b\u9686 VM \u5377\u6570\u636e",id:"\u4e0d\u514b\u9686-vm-\u5377\u6570\u636e",level:2}],p={toc:s},m="wrapper";function u(e){let{components:t,...o}=e;return(0,a.kt)(m,(0,n.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"\u4ece v1.1.0 \u8d77\u53ef\u7528")),(0,a.kt)("p",null,"\u5728\u514b\u9686 VM \u65f6\uff0c\u4f60\u53ef\u4ee5\u9009\u62e9\u662f\u5426\u540c\u65f6\u514b\u9686 VM \u6570\u636e\u3002\u6b64\u529f\u80fd\u4e0d\u9700\u8981\u4f60\u5148\u83b7\u53d6 VM \u5feb\u7167\u6216\u8bbe\u7f6e\u5907\u4efd\u76ee\u6807\u3002"),(0,a.kt)("h2",{id:"\u540c\u65f6\u514b\u9686-vm-\u5377\u6570\u636e"},"\u540c\u65f6\u514b\u9686 VM \u5377\u6570\u636e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," \u9875\u9762\u4e0a\uff0c\u5355\u51fb VM \u64cd\u4f5c\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Clone"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u65b0\u7684 VM \u540d\u79f0\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," \u4ee5\u521b\u5efa\u65b0\u7684 VM\u3002\n",(0,a.kt)("img",{alt:"clone-vm-with-data.png",src:r(58392).Z,width:"1599",height:"639"}))),(0,a.kt)("h2",{id:"\u4e0d\u514b\u9686-vm-\u5377\u6570\u636e"},"\u4e0d\u514b\u9686 VM \u5377\u6570\u636e"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"\u5728 ",(0,a.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," \u9875\u9762\u4e0a\uff0c\u5355\u51fb VM \u64cd\u4f5c\u7684 ",(0,a.kt)("inlineCode",{parentName:"li"},"Clone"),"\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u53d6\u6d88\u9009\u4e2d ",(0,a.kt)("inlineCode",{parentName:"li"},"clone volume data")," \u590d\u9009\u6846\u3002"),(0,a.kt)("li",{parentName:"ol"},"\u8bbe\u7f6e\u65b0\u7684 VM \u540d\u79f0\uff0c\u7136\u540e\u5355\u51fb ",(0,a.kt)("inlineCode",{parentName:"li"},"Create")," \u4ee5\u521b\u5efa\u65b0\u7684 VM\u3002\n",(0,a.kt)("img",{alt:"clone-vm-without-data.png",src:r(86780).Z,width:"1599",height:"899"}))))}u.isMDXComponent=!0},58392:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/clone-vm-with-data-c31f7312f951428fef067e4afd4196f8.png"},86780:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/clone-vm-without-data-b04f17ece9f5f6c5872f9801bbd2bb9b.png"}}]);