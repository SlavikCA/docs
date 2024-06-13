"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[76343],{66906:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>d,toc:()=>p});var a=t(87462),n=(t(67294),t(3905));const o={sidebar_position:2,sidebar_label:"Upgrade from v1.2.1 to v1.2.2",title:"Upgrade from v1.2.1 to v1.2.2"},s=void 0,d={unversionedId:"upgrade/v1-2-1-to-v1-2-2",id:"version-v1.2/upgrade/v1-2-1-to-v1-2-2",title:"Upgrade from v1.2.1 to v1.2.2",description:"General information",source:"@site/versioned_docs/version-v1.2/upgrade/v1-2-1-to-v1-2-2.md",sourceDirName:"upgrade",slug:"/upgrade/v1-2-1-to-v1-2-2",permalink:"/v1.2/upgrade/v1-2-1-to-v1-2-2",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/upgrade/v1-2-1-to-v1-2-2.md",tags:[],version:"v1.2",lastUpdatedAt:1718250608,formattedLastUpdatedAt:"Jun 13, 2024",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Upgrade from v1.2.1 to v1.2.2",title:"Upgrade from v1.2.1 to v1.2.2"},sidebar:"api",previous:{title:"Upgrading Harvester",permalink:"/v1.2/upgrade/index"},next:{title:"Upgrade from v1.1.2/v1.2.0 to v1.2.1",permalink:"/v1.2/upgrade/v1-2-0-to-v1-2-1"}},i={},p=[{value:"General information",id:"general-information",level:2},{value:"Known issues",id:"known-issues",level:2},{value:"1. The <code>harvester-seeder</code> add-on is not upgraded",id:"1-the-harvester-seeder-add-on-is-not-upgraded",level:3}],v={toc:p},l="wrapper";function u(e){let{components:r,...t}=e;return(0,n.kt)(l,(0,a.Z)({},v,t,{components:r,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/upgrade/v1-2-1-to-v1-2-2"})),(0,n.kt)("h2",{id:"general-information"},"General information"),(0,n.kt)("p",null,"An ",(0,n.kt)("strong",{parentName:"p"},"Upgrade")," button appears on the ",(0,n.kt)("strong",{parentName:"p"},"Dashboard")," screen whenever a new Harvester version that you can upgrade to becomes available. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/upgrade/index#start-an-upgrade"},"Start an upgrade"),"."),(0,n.kt)("p",null,"For air-gapped environments, see ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/upgrade/index#prepare-an-air-gapped-upgrade"},"Prepare an air-gapped upgrade"),"."),(0,n.kt)("h2",{id:"known-issues"},"Known issues"),(0,n.kt)("hr",null),(0,n.kt)("h3",{id:"1-the-harvester-seeder-add-on-is-not-upgraded"},"1. The ",(0,n.kt)("inlineCode",{parentName:"h3"},"harvester-seeder")," add-on is not upgraded"),(0,n.kt)("p",null,"When upgrading Harvester clusters from v1.2.1 to v1.2.2, the ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-seeder")," add-on is not fully upgraded due to the chart version mismatch:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"Error: chart \"harvester-seeder\" matching 0.1.0 not found in harvester-seeder index. (try 'helm repo update'): no chart version found for harvester-seeder-0.1.0\n")),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-seeder")," chart version bundled with Harvester v1.2.2 is 0.1.1. However, the ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-seeder")," add-on remains to use the 0.1.0 chart. The same situation will happen if you enable the add-on after upgrading to Harvester v1.2.2, you will notice the chart could not be installed successfully with the similar messages as above."),(0,n.kt)("p",null,"The workaround is to manually update the ",(0,n.kt)("inlineCode",{parentName:"p"},"harvester-seeder")," Addon manifest (if it's already enabled, please disable it before patching):"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'kubectl -n harvester-system patch addons.harvesterhci harvester-seeder --type=json -p \'[{"op": "replace", "path": "/spec/version", "value": "0.1.1"}]\'\n')),(0,n.kt)("hr",null))}u.isMDXComponent=!0}}]);