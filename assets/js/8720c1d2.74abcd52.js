"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[92366],{25842:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var a=n(87462),r=(n(67294),n(3905));const o={sidebar_position:2,sidebar_label:"Harvester",title:"Harvester"},s=void 0,i={unversionedId:"troubleshooting/harvester",id:"version-v1.1/troubleshooting/harvester",title:"Harvester",description:"Fail to Deploy a Multi-node Cluster Due to Incorrect HTTP Proxy Setting",source:"@site/versioned_docs/version-v1.1/troubleshooting/harvester.md",sourceDirName:"troubleshooting",slug:"/troubleshooting/harvester",permalink:"/v1.1/troubleshooting/harvester",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/troubleshooting/harvester.md",tags:[],version:"v1.1",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Harvester",title:"Harvester"},sidebar:"docs",previous:{title:"Installation",permalink:"/v1.1/troubleshooting/index"},next:{title:"Operating System",permalink:"/v1.1/troubleshooting/os"}},l={},d=[{value:"Fail to Deploy a Multi-node Cluster Due to Incorrect HTTP Proxy Setting",id:"fail-to-deploy-a-multi-node-cluster-due-to-incorrect-http-proxy-setting",level:2},{value:"ISO Installation Without a Harvester Configuration File",id:"iso-installation-without-a-harvester-configuration-file",level:3},{value:"Configure HTTP Proxy During Harvester Installation",id:"configure-http-proxy-during-harvester-installation",level:4},{value:"Configure HTTP Proxy After First Node is Ready",id:"configure-http-proxy-after-first-node-is-ready",level:4},{value:"One Node Becomes Unavailable",id:"one-node-becomes-unavailable",level:4},{value:"Solution",id:"solution",level:4},{value:"ISO Installation With a Harvester Configuration File",id:"iso-installation-with-a-harvester-configuration-file",level:3},{value:"PXE Boot Installation",id:"pxe-boot-installation",level:3},{value:"Generate a Support Bundle",id:"generate-a-support-bundle",level:2},{value:"Access Embedded Rancher and Longhorn Dashboards",id:"access-embedded-rancher-and-longhorn-dashboards",level:2},{value:"I can&#39;t access Harvester after I changed SSL/TLS enabled protocols and ciphers",id:"i-cant-access-harvester-after-i-changed-ssltls-enabled-protocols-and-ciphers",level:2}],p={toc:d},u="wrapper";function h(e){let{components:t,...o}=e;return(0,r.kt)(u,(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("head",null,(0,r.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/troubleshooting/harvester"})),(0,r.kt)("h2",{id:"fail-to-deploy-a-multi-node-cluster-due-to-incorrect-http-proxy-setting"},"Fail to Deploy a Multi-node Cluster Due to Incorrect HTTP Proxy Setting"),(0,r.kt)("h3",{id:"iso-installation-without-a-harvester-configuration-file"},"ISO Installation Without a Harvester Configuration File"),(0,r.kt)("h4",{id:"configure-http-proxy-during-harvester-installation"},"Configure HTTP Proxy During Harvester Installation"),(0,r.kt)("p",null,"In some environments, you configure ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/airgap#configure-an-http-proxy-during-installation"},"http-proxy")," of ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration#osenvironment"},"OS Environment")," during Harvester installation."),(0,r.kt)("h4",{id:"configure-http-proxy-after-first-node-is-ready"},"Configure HTTP Proxy After First Node is Ready"),(0,r.kt)("p",null,"After the first node is installed successfully, you login into the ",(0,r.kt)("inlineCode",{parentName:"p"},"Harvester GUI")," to configure ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/airgap#configure-an-http-proxy-in-harvester-settings"},"http-proxy")," of ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration#system_settings"},"Harvester System Settings"),"."),(0,r.kt)("p",null,"Then you continue to add more nodes to the cluster."),(0,r.kt)("h4",{id:"one-node-becomes-unavailable"},"One Node Becomes Unavailable"),(0,r.kt)("p",null,"The issue you may encounter:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"The first node is installed successfully.\n\nThe second node is installed successfully.\n\nThe third node is installed successfully.\n\nThen the second node changes to Unavialable state and cannot recover automatically.\n")),(0,r.kt)("h4",{id:"solution"},"Solution"),(0,r.kt)("p",null,"When the nodes in the cluster do not use the HTTP Proxy to communicate with each other, after the first node is installed successfully, you need to configure ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/airgap#configure-an-http-proxy-in-harvester-settings"},"http-proxy.noProxy")," against the CIDR used by those nodes."),(0,r.kt)("p",null,"For example, your cluster assigns IPs from CIDR ",(0,r.kt)("inlineCode",{parentName:"p"},"172.26.50.128/27")," to nodes via DHCP/static setting, please add this CIDR to ",(0,r.kt)("inlineCode",{parentName:"p"},"noProxy"),"."),(0,r.kt)("p",null,"After setting this, you can continue to add new nodes to the cluster."),(0,r.kt)("p",null,"For more details, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/3091"},"Harvester issue 3091"),"."),(0,r.kt)("h3",{id:"iso-installation-with-a-harvester-configuration-file"},"ISO Installation With a Harvester Configuration File"),(0,r.kt)("p",null,"When a Harvester configuration file is used in ISO installation, please configure proper ",(0,r.kt)("inlineCode",{parentName:"p"},"http-proxy")," in ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration#system_settings"},"Harvester System Settings"),"."),(0,r.kt)("h3",{id:"pxe-boot-installation"},"PXE Boot Installation"),(0,r.kt)("p",null,"When ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/install/pxe-boot-install"},"PXE Boot Installation")," is adopted, please configure proper ",(0,r.kt)("inlineCode",{parentName:"p"},"http-proxy")," in ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration#osenvironment"},"OS Environment")," and ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/install/harvester-configuration#system_settings"},"Harvester System Settings"),"."),(0,r.kt)("h2",{id:"generate-a-support-bundle"},"Generate a Support Bundle"),(0,r.kt)("p",null,"Users can generate a support bundle in the Harvester GUI with the following steps:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click the ",(0,r.kt)("inlineCode",{parentName:"p"},"Support")," link at the bottom-left of Harvester Web UI.\n",(0,r.kt)("img",{src:n(9026).Z,width:"955",height:"902"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Click ",(0,r.kt)("inlineCode",{parentName:"p"},"Generate Support Bundle")," button.\n",(0,r.kt)("img",{src:n(66847).Z,width:"953",height:"286"}))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Enter a useful description for the support bundle and click ",(0,r.kt)("inlineCode",{parentName:"p"},"Create")," to generate and download a support bundle.\n",(0,r.kt)("img",{src:n(19546).Z,width:"941",height:"436"})))),(0,r.kt)("h2",{id:"access-embedded-rancher-and-longhorn-dashboards"},"Access Embedded Rancher and Longhorn Dashboards"),(0,r.kt)("p",null,(0,r.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,r.kt)("p",null,"You can now access the embedded Rancher and Longhorn dashboards directly on the ",(0,r.kt)("inlineCode",{parentName:"p"},"Support")," page, but you must first go to the ",(0,r.kt)("inlineCode",{parentName:"p"},"Preferences")," page and check the ",(0,r.kt)("inlineCode",{parentName:"p"},"Enable Extension developer features")," box under ",(0,r.kt)("inlineCode",{parentName:"p"},"Advanced Features")," (in Harvester v1.1.0 and v1.1.1, the option name is ",(0,r.kt)("inlineCode",{parentName:"p"},"Developer Tools & Features"),"). "),(0,r.kt)("p",null,(0,r.kt)("img",{src:n(73891).Z,width:"3308",height:"1462"})),(0,r.kt)("p",null,"For previous versions, you can access them manually through:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://{{HARVESTER_IP}}/dashboard/c/local/explorer")," (Embedded Rancher)"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://{{HARVESTER_IP}}/dashboard/c/local/longhorn")," (Embedded Longhorn)")),(0,r.kt)("admonition",{type:"note"},(0,r.kt)("p",{parentName:"admonition"},"We only support using the embedded Rancher and Longhorn dashboards for debugging and validation purposes.\nFor Rancher's multi-cluster and multi-tenant integration, please refer to the docs ",(0,r.kt)("a",{parentName:"p",href:"/v1.1/rancher/rancher-integration"},"here"),".")),(0,r.kt)("h2",{id:"i-cant-access-harvester-after-i-changed-ssltls-enabled-protocols-and-ciphers"},"I can't access Harvester after I changed SSL/TLS enabled protocols and ciphers"),(0,r.kt)("p",null,"If you changed\n",(0,r.kt)("a",{parentName:"p",href:"/v1.1/advanced/index#ssl-parameters"},"SSL/TLS enabled protocols and ciphers settings"),"\nand you no longer have access to Harvester GUI and API,\nit's highly possible that NGINX Ingress Controller has stopped working due to the misconfigured SSL/TLS protocols and ciphers.\nFollow these steps to reset the setting:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Following ",(0,r.kt)("a",{parentName:"li",href:"/v1.1/faq"},"FAQ")," to SSH into Harvester node and switch to ",(0,r.kt)("inlineCode",{parentName:"li"},"root")," user.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"$ sudo -s\n")),(0,r.kt)("ol",{start:2},(0,r.kt)("li",{parentName:"ol"},"Editing setting ",(0,r.kt)("inlineCode",{parentName:"li"},"ssl-parameters")," manually using ",(0,r.kt)("inlineCode",{parentName:"li"},"kubectl"),":")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"# kubectl edit settings ssl-parameters\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"Deleting the line ",(0,r.kt)("inlineCode",{parentName:"li"},"value: ...")," so that NGINX Ingress Controller\nwill use the default protocols and ciphers.")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'apiVersion: harvesterhci.io/v1beta1\ndefault: \'{}\'\nkind: Setting\nmetadata:\n  name: ssl-parameters\n...\nvalue: \'{"protocols":"TLS99","ciphers":"WRONG_CIPHER"}\' # <- Delete this line\n')),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"Save the change and you should see the following response after exit from the editor:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"setting.harvesterhci.io/ssl-parameters edited\n")),(0,r.kt)("p",null,"You can further check the logs of Pod ",(0,r.kt)("inlineCode",{parentName:"p"},"rke2-ingress-nginx-controller")," to see if NGINX Ingress Controller is working correctly."))}h.isMDXComponent=!0},66847:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/harvester-sb-support-button-481867fa7c7e1284b77c3a328cdc06ba.png"},9026:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/harvester-sb-support-link-37d8e3a1cf4a0db290c41adeea228f3a.png"},19546:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/harvester-sb-support-modal-2926ec28f3190a25f618cedfe7975687.png"},73891:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/support-access-embedded-ui-db8c2edddf3a26facf679c28492cb3e1.png"}}]);