"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[8102],{50902:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>g,contentTitle:()=>u,default:()=>v,frontMatter:()=>k,metadata:()=>y,toc:()=>N});var t=s(87462),m=(s(67294),s(3905)),i=s(58219),n=(s(62316),s(51039)),r=s.n(n),l=(s(82723),s(9487)),p=s(41429),c=s(5397),o=s(4667),d=s(9472),h=(s(1176),s(12005),s(85162));const k={id:"patch-namespaced-virtual-machine-restore",title:"Patch a Virtual Machine Restore",description:"Patch a VirtualMachineRestore object.",sidebar_label:"Patch a Virtual Machine Restore",hide_title:!0,hide_table_of_contents:!0,api:"eJzdV01z20YM/SscHNtVZGd6qW7Nx7Se1K3HiX1xdIBISNqY3N0slq4dD/97BruSLEoUGSU+tD2RQ2CBBzwQCzxCQZx77YK2BiZwgSFfZphdax9qLM8xX2pDl8TBesrs7BPl4QUoCLhgmNzASsIwVWAdeRQ7ZwVMwImlv7AidphT0WkQFHj6XBOHV7Z4gMkj5NYEMkFe0blS59Hg+BNbM4oWf5ZXEXO+pArlLTw4ggkkcNA0qnW0Ir+gbz7bJETaUwGT4GuKH9hZw8Ry4OXJiTzaWfv7Hag+6H0+tx3eADvKQcGtNgVIHPqaPIuTqQLnJcNBJyBbsiebHLw2C2hWFroEFQUsMGCKYo51KZAb1QvLYEX7EOLXLh9mTXuHVFIcozzGf0C/IPl41yqjV5jf1k6KrEeUgOyBL6gkIejCljp/6A6D/rk+35LMrC0JjYhWgAbYXNHYnT10+ndva3cEfeopY7DO85BWo+B+dFvPyBsKxKMK3Wilj8FWOt/WfxT1gzkexNNPwRBQKYyAoeautLZzl9vKlRSom5zcmkILt9uW0Ht8AAU6UMXHFZ/INtj2eCyRwwePhqPLD/rAPyFqV67AQAdVKmLGRbfME/KBX30vaQfYSdIhEhqVfg0qrm1ZV9Sbw4HC86nNdwe8C8+vr5Lv5axNi5PmyNKRUxyvS9TV+29pPG07/6Z+2Y8U85yYz23xQ5xJrO9t7Vtg/sPdrRXSJc3/N1F54hjTsT9GqSsdOnssFqltYnmxc1XuG9+U52aEez6TseSppDxYP1z2lYx2b++dJ+Zn6/m3JOfSRGv9fiGIvJ/EHQrjADpKw2g8vHLRocTBY6CF6ER9IXuDZPgOxrL+gQYQkx9T+ifOqDyK1KHbfbim5QbAhfRq5u6RQyKM/Vz6XI/4wOmmPew0G/2+MWfQaLOZCK/O3nQrJKVfTk73t4crg3VYWq+/UPEde8S2EwUOPVYUyMt6tutJ8Gd2noUlZev2se51k/RQoE3a3pawuwupg84V1EZ/ruks1VhcnBq1tybFAsrET4amyCTsjHPrSGVcy97J2dz6LBBWHDWct3KE2yDTVfmMSKdxLVrazd4qTUbsTmCMTvN4if6OOJBf5vqFtuO70xkFPB1v0PD4cfM+ucHRl5PRr9PV8+PH0fSnZrwajqs0HK+nnXSu+wgoENYvn1bkt/cog2/qX9rMbQxQB/kEf6xBZr9dnEnK7tb7IazwQtN8BemeihU=",sidebar_class_name:"patch api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},u=void 0,y={unversionedId:"api/patch-namespaced-virtual-machine-restore",id:"version-v1.1/api/patch-namespaced-virtual-machine-restore",title:"Patch a Virtual Machine Restore",description:"Patch a VirtualMachineRestore object.",source:"@site/versioned_docs/version-v1.1/api/patch-namespaced-virtual-machine-restore.api.mdx",sourceDirName:"api",slug:"/api/patch-namespaced-virtual-machine-restore",permalink:"/v1.1/api/patch-namespaced-virtual-machine-restore",draft:!1,editUrl:null,tags:[],version:"v1.1",frontMatter:{id:"patch-namespaced-virtual-machine-restore",title:"Patch a Virtual Machine Restore",description:"Patch a VirtualMachineRestore object.",sidebar_label:"Patch a Virtual Machine Restore",hide_title:!0,hide_table_of_contents:!0,api:"eJzdV01z20YM/SscHNtVZGd6qW7Nx7Se1K3HiX1xdIBISNqY3N0slq4dD/97BruSLEoUGSU+tD2RQ2CBBzwQCzxCQZx77YK2BiZwgSFfZphdax9qLM8xX2pDl8TBesrs7BPl4QUoCLhgmNzASsIwVWAdeRQ7ZwVMwImlv7AidphT0WkQFHj6XBOHV7Z4gMkj5NYEMkFe0blS59Hg+BNbM4oWf5ZXEXO+pArlLTw4ggkkcNA0qnW0Ir+gbz7bJETaUwGT4GuKH9hZw8Ry4OXJiTzaWfv7Hag+6H0+tx3eADvKQcGtNgVIHPqaPIuTqQLnJcNBJyBbsiebHLw2C2hWFroEFQUsMGCKYo51KZAb1QvLYEX7EOLXLh9mTXuHVFIcozzGf0C/IPl41yqjV5jf1k6KrEeUgOyBL6gkIejCljp/6A6D/rk+35LMrC0JjYhWgAbYXNHYnT10+ndva3cEfeopY7DO85BWo+B+dFvPyBsKxKMK3Wilj8FWOt/WfxT1gzkexNNPwRBQKYyAoeautLZzl9vKlRSom5zcmkILt9uW0Ht8AAU6UMXHFZ/INtj2eCyRwwePhqPLD/rAPyFqV67AQAdVKmLGRbfME/KBX30vaQfYSdIhEhqVfg0qrm1ZV9Sbw4HC86nNdwe8C8+vr5Lv5axNi5PmyNKRUxyvS9TV+29pPG07/6Z+2Y8U85yYz23xQ5xJrO9t7Vtg/sPdrRXSJc3/N1F54hjTsT9GqSsdOnssFqltYnmxc1XuG9+U52aEez6TseSppDxYP1z2lYx2b++dJ+Zn6/m3JOfSRGv9fiGIvJ/EHQrjADpKw2g8vHLRocTBY6CF6ER9IXuDZPgOxrL+gQYQkx9T+ifOqDyK1KHbfbim5QbAhfRq5u6RQyKM/Vz6XI/4wOmmPew0G/2+MWfQaLOZCK/O3nQrJKVfTk73t4crg3VYWq+/UPEde8S2EwUOPVYUyMt6tutJ8Gd2noUlZev2se51k/RQoE3a3pawuwupg84V1EZ/ruks1VhcnBq1tybFAsrET4amyCTsjHPrSGVcy97J2dz6LBBWHDWct3KE2yDTVfmMSKdxLVrazd4qTUbsTmCMTvN4if6OOJBf5vqFtuO70xkFPB1v0PD4cfM+ucHRl5PRr9PV8+PH0fSnZrwajqs0HK+nnXSu+wgoENYvn1bkt/cog2/qX9rMbQxQB/kEf6xBZr9dnEnK7tb7IazwQtN8BemeihU=",sidebar_class_name:"patch api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Delete a Virtual Machine Restore",permalink:"/v1.1/api/delete-namespaced-virtual-machine-restore"},next:{title:"List Virtual Machine Restores For All Namespaces",permalink:"/v1.1/api/list-virtual-machine-restore-for-all-namespaces"}},g={},N=[{value:"Request",id:"request",level:2}],_={toc:N},f="wrapper";function v(e){let{components:a,...s}=e;return(0,m.kt)(f,(0,t.Z)({},_,s,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{className:"openapi__heading"},"Patch a Virtual Machine Restore"),(0,m.kt)(r(),{method:"patch",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachinerestores/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,m.kt)("p",null,"Patch a VirtualMachineRestore object."),(0,m.kt)("h2",{id:"request"},"Request"),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,m.kt)("span",{className:"openapi-schema__required"},"required")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"object"))))),(0,m.kt)(h.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,m.kt)("span",{className:"openapi-schema__required"},"required")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"object")))))),(0,m.kt)("div",null,(0,m.kt)("div",null,(0,m.kt)(i.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,m.kt)(h.default,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"OK")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"deletionPolicy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"newVM",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"target"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiGroup",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!1,name:"virtualMachineBackupName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"virtualMachineBackupNamespace",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"complete",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(o.Z,{collapsible:!1,name:"deletedVolumes",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"restoreTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"restores"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"persistentVolumeClaimSpec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"accessModes",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"dataSource"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiGroup",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"dataSourceRef"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiGroup",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"resources"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"limits"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"requests"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"selector"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"matchExpressions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(o.Z,{collapsible:!1,name:"key",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"","x-kubernetes-patch-merge-key":"key","x-kubernetes-patch-strategy":"merge"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"operator",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"matchLabels"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))))),(0,m.kt)(o.Z,{collapsible:!1,name:"storageClassName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"volumeMode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"volumeName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(o.Z,{collapsible:!1,name:"volumeBackupName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"volumeName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(o.Z,{collapsible:!1,name:"targetUID",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "deletionPolicy": "string",\n    "newVM": true,\n    "target": {\n      "apiGroup": "string",\n      "kind": "string",\n      "name": "string"\n    },\n    "virtualMachineBackupName": "string",\n    "virtualMachineBackupNamespace": "string"\n  },\n  "status": {\n    "complete": true,\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "deletedVolumes": [\n      "string"\n    ],\n    "restoreTime": "string",\n    "restores": [\n      {\n        "persistentVolumeClaimSpec": {\n          "metadata": {\n            "name": "string",\n            "namespace": "string"\n          },\n          "spec": {\n            "accessModes": [\n              "string"\n            ],\n            "dataSource": {\n              "apiGroup": "string",\n              "kind": "string",\n              "name": "string"\n            },\n            "dataSourceRef": {\n              "apiGroup": "string",\n              "kind": "string",\n              "name": "string"\n            },\n            "resources": {\n              "limits": {},\n              "requests": {}\n            },\n            "selector": {\n              "matchExpressions": [\n                {\n                  "key": "string",\n                  "operator": "string",\n                  "values": [\n                    "string"\n                  ]\n                }\n              ],\n              "matchLabels": {}\n            },\n            "storageClassName": "string",\n            "volumeMode": "string",\n            "volumeName": "string"\n          }\n        },\n        "volumeBackupName": "string",\n        "volumeName": "string"\n      }\n    ],\n    "targetUID": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(h.default,{label:"401",value:"401",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unauthorized")),(0,m.kt)("div",null,(0,m.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))))))))))}v.isMDXComponent=!0}}]);