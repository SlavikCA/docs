"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[16236],{55740:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>r,contentTitle:()=>o,default:()=>c,frontMatter:()=>n,metadata:()=>s,toc:()=>l});i(67294);var a=i(3905);const n={sidebar_position:1,sidebar_label:"ISO Installation",title:"ISO Installation",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],description:"To get the Harvester ISO, download it from the Github releases. During the installation you can either choose to form a new cluster, or join the node to an existing cluster."},o=void 0,s={unversionedId:"install/iso-install",id:"version-v0.3/install/iso-install",title:"ISO Installation",description:"To get the Harvester ISO, download it from the Github releases. During the installation you can either choose to form a new cluster, or join the node to an existing cluster.",source:"@site/versioned_docs/version-v0.3/install/iso-install.md",sourceDirName:"install",slug:"/install/iso-install",permalink:"/v0.3/install/iso-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/install/iso-install.md",tags:[],version:"v0.3",lastUpdatedAt:1726799721,formattedLastUpdatedAt:"Sep 20, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,sidebar_label:"ISO Installation",title:"ISO Installation",keywords:["Harvester","harvester","Rancher","rancher","ISO Installation"],description:"To get the Harvester ISO, download it from the Github releases. During the installation you can either choose to form a new cluster, or join the node to an existing cluster."},sidebar:"api",previous:{title:"Harvester Overview",permalink:"/v0.3/"},next:{title:"USB Installation",permalink:"/v0.3/install/usb-install"}},r={},l=[],h={toc:l},d="wrapper";function c({components:e,...t}){return(0,a.kt)(d,{...h,...t,components:e,mdxType:"MDXLayout"},(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/iso-install"})),(0,a.kt)("p",null,"To get the Harvester ISO, download it from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Github releases.")),(0,a.kt)("p",null,"During the installation you can either choose to form a new cluster, or join the node to an existing cluster."),(0,a.kt)("p",null,"Note: This ",(0,a.kt)("a",{parentName:"p",href:"https://youtu.be/97ADieBX6bE"},"video")," shows a quick overview of the ISO installation."),(0,a.kt)("div",{class:"text-center"},(0,a.kt)("iframe",{width:"950",height:"475",src:"https://www.youtube.com/embed/97ADieBX6bE",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"Mount the Harvester ISO disk and boot the server by selecting the ",(0,a.kt)("inlineCode",{parentName:"li"},"Harvester Installer")," option.\n",(0,a.kt)("img",{alt:"iso-install.png",src:i(40430).Z,width:"1430",height:"791"})),(0,a.kt)("li",{parentName:"ol"},"Choose the installation mode by either creating a new Harvester cluster, or by joining an existing one."),(0,a.kt)("li",{parentName:"ol"},"Choose the installation device that Harvester will be formatted to."),(0,a.kt)("li",{parentName:"ol"},"Configure the hostname and select the network interface for the management network. By default, Harvester will create a bonded NIC named ",(0,a.kt)("inlineCode",{parentName:"li"},"harvester-mgmt"),", and the IP address can either be configured via DHCP or a static assigned a static one.\n",(0,a.kt)("img",{alt:"iso-installed.png",src:i(19338).Z,width:"422",height:"317"})),(0,a.kt)("li",{parentName:"ol"},"(Optional) Configure the DNS servers. Use commas as a delimiter."),(0,a.kt)("li",{parentName:"ol"},"Configure the ",(0,a.kt)("inlineCode",{parentName:"li"},"Virtual IP")," which you can use to access the cluster or join the cluster to other nodes."),(0,a.kt)("li",{parentName:"ol"},"Configure the ",(0,a.kt)("inlineCode",{parentName:"li"},"cluster token"),". This token will be used for adding other nodes to the cluster."),(0,a.kt)("li",{parentName:"ol"},"Configure the login password of the host. The default SSH user is ",(0,a.kt)("inlineCode",{parentName:"li"},"rancher"),"."),(0,a.kt)("li",{parentName:"ol"},"(Optional) Configure the NTP Servers of the node. This defaults to ",(0,a.kt)("inlineCode",{parentName:"li"},"0.suse.pool.ntp.org"),"."),(0,a.kt)("li",{parentName:"ol"},"(Optional) If you need to use an HTTP proxy to access the outside world, enter the proxy URL address here. Otherwise, leave this blank."),(0,a.kt)("li",{parentName:"ol"},"(Optional) You can choose to import SSH keys from a remote URL server. Your GitHub public keys can be used with ",(0,a.kt)("inlineCode",{parentName:"li"},"https://github.com/<username>.keys"),"."),(0,a.kt)("li",{parentName:"ol"},"(Optional) If you need to customize the host with a cloud-init config, enter the HTTP URL here."),(0,a.kt)("li",{parentName:"ol"},"After confirming the installation options, Harvester will be installed to your host. The installation may take a few minutes to be complete."),(0,a.kt)("li",{parentName:"ol"},"Once the installation is complete, it will restart the host. After the restart, the Harvester console containing the management URL and status will be displayed. You can Use ",(0,a.kt)("inlineCode",{parentName:"li"},"F12")," to switch between the Harvester console and the Shell."),(0,a.kt)("li",{parentName:"ol"},"The default URL of the web interface is ",(0,a.kt)("inlineCode",{parentName:"li"},"https://your-virtual-ip"),".\n",(0,a.kt)("img",{alt:"iso-installed.png",src:i(81437).Z,width:"1580",height:"770"})),(0,a.kt)("li",{parentName:"ol"},"You will be prompted to set the password for the default ",(0,a.kt)("inlineCode",{parentName:"li"},"admin")," user when logging in for the first time.\n",(0,a.kt)("img",{alt:"first-login.png",src:i(79302).Z,width:"2555",height:"1295"}))))}c.isMDXComponent=!0},79302:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/first-time-login-e9b3f138436f21432a6b41fcde525f74.png"},40430:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/iso-install-2091728c1c52c4f9d5ec934cac509639.png"},81437:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/iso-installed-343c1a408fde89500699144f7e2739b0.png"},19338:(e,t,i)=>{i.d(t,{Z:()=>a});const a=i.p+"assets/images/iso-nic-config-4bb63338169e1e0595130056ad1676c0.gif"}}]);