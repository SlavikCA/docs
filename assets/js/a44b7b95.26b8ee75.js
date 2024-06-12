"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[27299],{66817:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>a,metadata:()=>s,toc:()=>p});var i=n(87462),r=(n(67294),n(3905));const a={sidebar_position:3,sidebar_label:"Air Gapped Environment",title:"Air Gapped Environment",keywords:["Harvester","offline","Air-gap","HTTP proxy"]},o=void 0,s={unversionedId:"airgap",id:"version-v1.0/airgap",title:"Air Gapped Environment",description:"This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy.",source:"@site/versioned_docs/version-v1.0/airgap.md",sourceDirName:".",slug:"/airgap",permalink:"/v1.0/airgap",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.0/airgap.md",tags:[],version:"v1.0",lastUpdatedAt:1718156635,formattedLastUpdatedAt:"Jun 12, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"Air Gapped Environment",title:"Air Gapped Environment",keywords:["Harvester","offline","Air-gap","HTTP proxy"]},sidebar:"api",previous:{title:"Management Address",permalink:"/v1.0/install/management-address"},next:{title:"Upgrading Harvester",permalink:"/v1.0/upgrade/automatic"}},l={},p=[{value:"Working Behind an HTTP Proxy",id:"working-behind-an-http-proxy",level:2},{value:"Configure an HTTP Proxy During Installation",id:"configure-an-http-proxy-during-installation",level:3},{value:"Configure an HTTP Proxy in Harvester Settings",id:"configure-an-http-proxy-in-harvester-settings",level:3}],d={toc:p},c="wrapper";function h(e){let{components:t,...a}=e;return(0,r.kt)(c,(0,i.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/airgap"})),(0,r.kt)("p",null,"This section describes how to use Harvester in an air gapped environment. Some use cases could be where Harvester will be installed offline, behind a firewall, or behind a proxy."),(0,r.kt)("p",null,"The Harvester ISO image contains all the packages to make it work in an air gapped environment."),(0,r.kt)("h2",{id:"working-behind-an-http-proxy"},"Working Behind an HTTP Proxy"),(0,r.kt)("p",null,"In some environments, the connection to external services, from the servers or VMs, requires an HTTP(S) proxy."),(0,r.kt)("h3",{id:"configure-an-http-proxy-during-installation"},"Configure an HTTP Proxy During Installation"),(0,r.kt)("p",null,"You can configure the HTTP(S) proxy during the ",(0,r.kt)("a",{parentName:"p",href:"/v1.0/install/iso-install"},"ISO installation")," as shown in picture below:"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"iso-proxy",src:n(69438).Z,width:"1596",height:"1198"})),(0,r.kt)("h3",{id:"configure-an-http-proxy-in-harvester-settings"},"Configure an HTTP Proxy in Harvester Settings"),(0,r.kt)("p",null,"You can configure the HTTP(S) proxy in the settings page of the Harvester dashboard:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the settings page of the Harvester UI."),(0,r.kt)("li",{parentName:"ol"},"Find the ",(0,r.kt)("inlineCode",{parentName:"li"},"http-proxy")," setting, click ",(0,r.kt)("strong",{parentName:"li"},"\u22ee > Edit setting")),(0,r.kt)("li",{parentName:"ol"},"Enter the value(s) for ",(0,r.kt)("inlineCode",{parentName:"li"},"http-proxy"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"https-proxy")," and ",(0,r.kt)("inlineCode",{parentName:"li"},"no-proxy"),".")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"proxy-setting",src:n(72620).Z,width:"2860",height:"1164"})),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Harvester appends necessary addresses to user configured ",(0,r.kt)("inlineCode",{parentName:"p"},"no-proxy")," to ensure the internal traffic works.\ni.e., ",(0,r.kt)("inlineCode",{parentName:"p"},"localhost,127.0.0.1,0.0.0.0,10.0.0.0/8,longhorn-system,cattle-system,cattle-system.svc,.svc,.cluster.local"))))}h.isMDXComponent=!0},69438:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/iso-proxy-4772156ef9e6a8688de2321ed356b078.png"},72620:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/proxy-setting-6433c2c6f3efd4cfb84757420ceeaf8a.png"}}]);