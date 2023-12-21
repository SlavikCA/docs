"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[6512],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>b});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,b=u["".concat(p,".").concat(m)]||u[m]||c[m]||i;return n?r.createElement(b,l(l({ref:t},d),{},{components:n})):r.createElement(b,l({ref:t},d))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},29364:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>l,default:()=>c,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:3,sidebar_label:"U \u76d8\u5b89\u88c5",title:"U \u76d8\u5b89\u88c5"},l=void 0,o={unversionedId:"install/usb-install",id:"install/usb-install",title:"U \u76d8\u5b89\u88c5",description:"\u521b\u5efa\u4e00\u4e2a USB \u542f\u52a8\u76d8",source:"@site/i18n/zh/docusaurus-plugin-content-docs/current/install/usb-install.md",sourceDirName:"install",slug:"/install/usb-install",permalink:"/zh/v1.3/install/usb-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/install/usb-install.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"U \u76d8\u5b89\u88c5",title:"U \u76d8\u5b89\u88c5"},sidebar:"docs",previous:{title:"ISO \u5b89\u88c5",permalink:"/zh/v1.3/install/index"},next:{title:"PXE \u5f15\u5bfc\u5b89\u88c5",permalink:"/zh/v1.3/install/pxe-boot-install"}},p={},s=[{value:"\u521b\u5efa\u4e00\u4e2a USB \u542f\u52a8\u76d8",id:"\u521b\u5efa\u4e00\u4e2a-usb-\u542f\u52a8\u76d8",level:2},{value:"rufus",id:"rufus",level:3},{value:"balenaEtcher",id:"balenaetcher",level:3},{value:"<code>dd</code> \u547d\u4ee4",id:"dd-\u547d\u4ee4",level:3},{value:"\u5e38\u89c1\u95ee\u9898",id:"\u5e38\u89c1\u95ee\u9898",level:2},{value:"\u4f7f\u7528 U \u76d8\u542f\u52a8\u65f6\uff0c\u53ea\u663e\u793a <code>GRUB _</code> \u6587\u672c\uff0c\u4f46\u6ca1\u6709\u4e8b\u60c5\u53d1\u751f",id:"\u4f7f\u7528-u-\u76d8\u542f\u52a8\u65f6\u53ea\u663e\u793a-grub-_-\u6587\u672c\u4f46\u6ca1\u6709\u4e8b\u60c5\u53d1\u751f",level:3},{value:"\u663e\u793a\u95ee\u9898",id:"\u663e\u793a\u95ee\u9898",level:3},{value:"\u5176\u4ed6\u95ee\u9898",id:"\u5176\u4ed6\u95ee\u9898",level:3}],d={toc:s},u="wrapper";function c(e){let{components:t,...i}=e;return(0,a.kt)(u,(0,r.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u521b\u5efa\u4e00\u4e2a-usb-\u542f\u52a8\u76d8"},"\u521b\u5efa\u4e00\u4e2a USB \u542f\u52a8\u76d8"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u901a\u8fc7\u4ee5\u4e0b\u51e0\u79cd\u65b9\u5f0f\u521b\u5efa USB \u5b89\u88c5\u542f\u52a8\u76d8\u3002"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u5728\u521b\u5efa\u53ef\u5f15\u5bfc\u8bbe\u5907\u540e\uff0c\u4f60\u7684 USB \u8bbe\u5907\u4e0a\u7684\u6240\u6709\u6570\u636e\u5c06\u4f1a\u88ab\u6e05\u9664\uff0c\u65e0\u8bba\u4f60\u4f7f\u7528\u4ec0\u4e48\u5de5\u5177\u3002\u8bf7\u4fdd\u8bc1\u5728\u521b\u5efa\u53ef\u5f15\u5bfc\u8bbe\u5907\u524d\u5907\u4efd\u4e86\u4f60\u7684 USB \u8bbe\u5907\u4e0a\u6240\u6709\u7684\u6570\u636e\u3002")),(0,a.kt)("h3",{id:"rufus"},"rufus"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://rufus.ie/"},"rufus"),"\u652f\u6301\u5728 Windows \u7cfb\u7edf\u4e0b\u4f7f\u7528\u53ef\u5f15\u5bfc\u955c\u50cf\u6765\u521b\u5efa\u53ef\u5f15\u5bfc\u8bbe\u5907\u3002\n",(0,a.kt)("img",{alt:"rufus.png",src:n(70520).Z,width:"696",height:"1054"})),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("inlineCode",{parentName:"p"},"DD mode")," \u6a21\u5f0f\u548c ",(0,a.kt)("inlineCode",{parentName:"p"},"ISO mode")," \u6a21\u5f0f\u5747\u53ef\u4f7f\u7528\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"DD mode")," \u6a21\u5f0f\u7684\u884c\u4e3a\u7c7b\u4f3c\u4e8e Linux \u7cfb\u7edf\u4e0b\u7684 ",(0,a.kt)("inlineCode",{parentName:"p"},"dd")," \u547d\u4ee4\uff0c\u5e76\u4e14\u5728\u53ef\u5f15\u5bfc\u8bbe\u5907\u5236\u4f5c\u5b8c\u6210\u540e\u65e0\u6cd5\u76f4\u63a5\u8bbf\u95ee\u548c\u6d4f\u89c8\u5206\u533a\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"ISO mode")," \u6a21\u5f0f\u5c06\u81ea\u52a8\u521b\u5efa\u5206\u533a\u5e76\u4e14\u5c06\u955c\u50cf\u4e2d\u7684\u6587\u4ef6\u590d\u5236\u5230\u5404\u4e2a\u5bf9\u5e94\u7684\u5206\u533a\u4e0b\uff0c\u8fd9\u6837\u5728\u53ef\u5f15\u5bfc\u8bbe\u5907\u5236\u4f5c\u5b8c\u6210\u540e\u53ef\u4ee5\u8bbf\u95ee\u548c\u6d4f\u89c8\u5206\u533a\u3002")),(0,a.kt)("h3",{id:"balenaetcher"},"balenaEtcher"),(0,a.kt)("p",null,"\u901a\u8fc7 ",(0,a.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"balenaEtcher")," \u628a\u955c\u50cf\u5199\u5165\u5230 U \u76d8\u4e2d\u3002\u5b83\u63d0\u4f9b\u4e00\u4e2a\u6613\u7528\u7684 UI \u754c\u9762\u3002\u9009\u62e9\u67d0\u4e2a\u7248\u672c\u7684 Harvester ISO \u955c\u50cf\u4ee5\u53ca\u8981\u5199\u5165\u7684 USB \u8bbe\u5907\uff0c\u7136\u540e\u5b83\u5c06\u81ea\u52a8\u5e2e\u4f60\u521b\u5efa\u4e00\u4e2a USB \u5b89\u88c5\u542f\u52a8\u76d8\u3002\n",(0,a.kt)("img",{alt:"balena-etcher.png",src:n(17740).Z,width:"1609",height:"955"})),(0,a.kt)("h3",{id:"dd-\u547d\u4ee4"},(0,a.kt)("inlineCode",{parentName:"h3"},"dd")," \u547d\u4ee4"),(0,a.kt)("p",null,"\u5728\u6709 ",(0,a.kt)("inlineCode",{parentName:"p"},"dd")," \u547d\u4ee4\u7684 Linux \u6216\u5176\u4ed6\u5e73\u53f0\u4e0a\uff0c\u7528\u6237\u53ef\u4ee5\u8fd0\u884c ",(0,a.kt)("inlineCode",{parentName:"p"},"dd")," \u6765\u521b\u5efa\u4e00\u4e2a USB \u5b89\u88c5\u542f\u52a8\u76d8\uff1a"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"\u8bf7\u786e\u4fdd\u4f60\u9009\u62e9\u4e86\u6b63\u786e\u7684\u5199\u5165\u8bbe\u5907\uff0c\u56e0\u4e3a\u6240\u9009\u8bbe\u5907\u4e0a\u7684\u6570\u636e\u4f1a\u88ab\u6e05\u9664\u3002")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"# sudo dd if=<path_to_iso> of=<path_to_usb_device> bs=64k\n")),(0,a.kt)("h2",{id:"\u5e38\u89c1\u95ee\u9898"},"\u5e38\u89c1\u95ee\u9898"),(0,a.kt)("h3",{id:"\u4f7f\u7528-u-\u76d8\u542f\u52a8\u65f6\u53ea\u663e\u793a-grub-_-\u6587\u672c\u4f46\u6ca1\u6709\u4e8b\u60c5\u53d1\u751f"},"\u4f7f\u7528 U \u76d8\u542f\u52a8\u65f6\uff0c\u53ea\u663e\u793a ",(0,a.kt)("inlineCode",{parentName:"h3"},"GRUB _")," \u6587\u672c\uff0c\u4f46\u6ca1\u6709\u4e8b\u60c5\u53d1\u751f"),(0,a.kt)("p",null,"\u5982\u679c\u4f60\u4f7f\u7528\u7684\u662f UEFI \u6a21\u5f0f\uff0c\u8bf7\u5c1d\u8bd5\u4ece USB \u8bbe\u5907\u7684 UEFI \u5206\u533a\u542f\u52a8\uff0c\u800c\u4e0d\u662f\u4ece USB \u8bbe\u5907\u672c\u8eab\u542f\u52a8\u3002\u4f8b\u5982\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(41303).Z,width:"730",height:"492"})),(0,a.kt)("p",null,"\u9009\u62e9 ",(0,a.kt)("inlineCode",{parentName:"p"},"UEFI: USB disk 3.0 PMAP, Partition 1")," \u6765\u542f\u52a8\u3002\u8bf7\u77e5\u6089\u4e0d\u540c\u7684\u7cfb\u7edf\u53ef\u80fd\u4f1a\u663e\u793a\u4e0d\u540c\u7684\u5185\u5bb9\u3002"),(0,a.kt)("h3",{id:"\u663e\u793a\u95ee\u9898"},"\u663e\u793a\u95ee\u9898"),(0,a.kt)("p",null,"\u67d0\u4e9b\u663e\u5361\u7684\u56fa\u4ef6\u5728 ",(0,a.kt)("inlineCode",{parentName:"p"},"v0.3.0")," \u4e2d\u6ca1\u6709\u643a\u5e26\u3002\n\u4f60\u53ef\u4ee5\u6309\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"e")," \u6765\u7f16\u8f91 GRUB \u83dc\u5355\u5165\u53e3\uff0c\u5e76\u5c06 ",(0,a.kt)("inlineCode",{parentName:"p"},"nomodeset")," \u5c3e\u9644\u5230\u542f\u52a8\u53c2\u6570\u540e\u3002\u7136\u540e\u6309\u4e0b ",(0,a.kt)("inlineCode",{parentName:"p"},"Ctrl + x")," \u6765\u542f\u52a8\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(63252).Z,width:"712",height:"399"})),(0,a.kt)("h3",{id:"\u5176\u4ed6\u95ee\u9898"},"\u5176\u4ed6\u95ee\u9898"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Harvester \u5b89\u88c5\u7a0b\u5e8f\u6ca1\u6709\u663e\u793a"),(0,a.kt)("p",{parentName:"li"}," \u5982\u679c USB \u542f\u52a8\u76d8\u542f\u52a8\u4e86\uff0c\u4f46\u662f\u4f60\u6ca1\u6709\u770b\u5230 Harvester \u5b89\u88c5\u7a0b\u5e8f\uff0c\u4f60\u53ef\u4ee5\u8fdb\u884c\u4ee5\u4e0b\u64cd\u4f5c\uff1a"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5c06 U \u76d8\u63d2\u5230 USB 2.0 \u63d2\u69fd\u4e2d\u3002"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e ",(0,a.kt)("inlineCode",{parentName:"li"},"v0.3.0")," \u6216\u4ee5\u4e0a\u7248\u672c\uff0c\u5728\u542f\u52a8\u65f6\u5c1d\u8bd5\u79fb\u9664 ",(0,a.kt)("inlineCode",{parentName:"li"},"console=ttyS0")," \u53c2\u6570\u3002\u6309\u4e0b ",(0,a.kt)("inlineCode",{parentName:"li"},"e")," \u6765\u7f16\u8f91 GRUB \u83dc\u5355\u5165\u53e3\uff0c\u5e76\u79fb\u9664 ",(0,a.kt)("inlineCode",{parentName:"li"},"console=ttyS0")," \u53c2\u6570\u3002")))))}c.isMDXComponent=!0},17740:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/balena-etcher-7fb3595af5c5e8ea2e5309c3600db8ef.png"},70520:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/rufus-b49c59ea369ff0bb2ddebab30c9bd5bb.png"},63252:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/usb-install-nomodeset-e6dc881f325fe4654dde2b0c8b94276b.png"},41303:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/usb-install-select-correct-partition-bd8f4425f8740b6aeafb90cfd3652748.jpg"}}]);