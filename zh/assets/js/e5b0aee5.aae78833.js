"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1258],{94222:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>k,default:()=>q,frontMatter:()=>h,metadata:()=>f,toc:()=>b});var s=t(87462),i=(t(67294),t(3905)),m=t(58219),r=(t(62316),t(80667)),n=t.n(r),p=t(24228),l=t.n(p),c=t(9487),o=t(41429),d=t(5397),y=t(4667),u=t(9472),g=t(85162);const h={id:"read-namespaced-virtual-machine-image",title:"Read a Virtual Machine Image",description:"Get a VirtualMachineImage object.",sidebar_label:"Read a Virtual Machine Image",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get a VirtualMachineImage object.",tags:["Images"],operationId:"readNamespacedVirtualMachineImage",parameters:[{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["displayName","sourceType"],properties:{checksum:{type:"string",default:""},description:{type:"string"},displayName:{type:"string",default:""},pvcName:{type:"string",default:""},pvcNamespace:{type:"string",default:""},retry:{type:"integer",format:"int32",default:0},sourceType:{type:"string",default:""},storageClassParameters:{type:"object",additionalProperties:{type:"string",default:""}},url:{type:"string",default:""}}},status:{default:{},type:"object",properties:{appliedUrl:{type:"string"},conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},failed:{type:"integer",format:"int32",default:0},lastFailedTime:{type:"string"},progress:{type:"integer",format:"int32"},size:{type:"integer",format:"int64"},storageClassName:{type:"string"}}}}}},"application/yaml":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["displayName","sourceType"],properties:{checksum:{type:"string",default:""},description:{type:"string"},displayName:{type:"string",default:""},pvcName:{type:"string",default:""},pvcNamespace:{type:"string",default:""},retry:{type:"integer",format:"int32",default:0},sourceType:{type:"string",default:""},storageClassParameters:{type:"object",additionalProperties:{type:"string",default:""}},url:{type:"string",default:""}}},status:{default:{},type:"object",properties:{appliedUrl:{type:"string"},conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},failed:{type:"integer",format:"int32",default:0},lastFailedTime:{type:"string"},progress:{type:"integer",format:"int32"},size:{type:"integer",format:"int64"},storageClassName:{type:"string"}}}}}},"application/json;stream=watch":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["displayName","sourceType"],properties:{checksum:{type:"string",default:""},description:{type:"string"},displayName:{type:"string",default:""},pvcName:{type:"string",default:""},pvcNamespace:{type:"string",default:""},retry:{type:"integer",format:"int32",default:0},sourceType:{type:"string",default:""},storageClassParameters:{type:"object",additionalProperties:{type:"string",default:""}},url:{type:"string",default:""}}},status:{default:{},type:"object",properties:{appliedUrl:{type:"string"},conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},failed:{type:"integer",format:"int32",default:0},lastFailedTime:{type:"string"},progress:{type:"integer",format:"int32"},size:{type:"integer",format:"int64"},storageClassName:{type:"string"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}},"application/yaml":{schema:{type:"string"}},"application/json;stream=watch":{schema:{type:"string"}}}}},method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9-]*}/virtualmachineimages/{name:[a-z0-9][a-z0-9-]*}",info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"get api-method",info_path:"api/harvester-apis",custom_edit_url:null},k=void 0,f={unversionedId:"api/read-namespaced-virtual-machine-image",id:"version-v1.2/api/read-namespaced-virtual-machine-image",title:"Read a Virtual Machine Image",description:"Get a VirtualMachineImage object.",source:"@site/versioned_docs/version-v1.2/api/read-namespaced-virtual-machine-image.api.mdx",sourceDirName:"api",slug:"/api/read-namespaced-virtual-machine-image",permalink:"/zh/v1.2/api/read-namespaced-virtual-machine-image",draft:!1,editUrl:null,tags:[],version:"v1.2",frontMatter:{id:"read-namespaced-virtual-machine-image",title:"Read a Virtual Machine Image",description:"Get a VirtualMachineImage object.",sidebar_label:"Read a Virtual Machine Image",hide_title:!0,hide_table_of_contents:!0,api:{description:"Get a VirtualMachineImage object.",tags:["Images"],operationId:"readNamespacedVirtualMachineImage",parameters:[{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["displayName","sourceType"],properties:{checksum:{type:"string",default:""},description:{type:"string"},displayName:{type:"string",default:""},pvcName:{type:"string",default:""},pvcNamespace:{type:"string",default:""},retry:{type:"integer",format:"int32",default:0},sourceType:{type:"string",default:""},storageClassParameters:{type:"object",additionalProperties:{type:"string",default:""}},url:{type:"string",default:""}}},status:{default:{},type:"object",properties:{appliedUrl:{type:"string"},conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},failed:{type:"integer",format:"int32",default:0},lastFailedTime:{type:"string"},progress:{type:"integer",format:"int32"},size:{type:"integer",format:"int64"},storageClassName:{type:"string"}}}}}},"application/yaml":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["displayName","sourceType"],properties:{checksum:{type:"string",default:""},description:{type:"string"},displayName:{type:"string",default:""},pvcName:{type:"string",default:""},pvcNamespace:{type:"string",default:""},retry:{type:"integer",format:"int32",default:0},sourceType:{type:"string",default:""},storageClassParameters:{type:"object",additionalProperties:{type:"string",default:""}},url:{type:"string",default:""}}},status:{default:{},type:"object",properties:{appliedUrl:{type:"string"},conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},failed:{type:"integer",format:"int32",default:0},lastFailedTime:{type:"string"},progress:{type:"integer",format:"int32"},size:{type:"integer",format:"int64"},storageClassName:{type:"string"}}}}}},"application/json;stream=watch":{schema:{type:"object",required:["spec","kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["displayName","sourceType"],properties:{checksum:{type:"string",default:""},description:{type:"string"},displayName:{type:"string",default:""},pvcName:{type:"string",default:""},pvcNamespace:{type:"string",default:""},retry:{type:"integer",format:"int32",default:0},sourceType:{type:"string",default:""},storageClassParameters:{type:"object",additionalProperties:{type:"string",default:""}},url:{type:"string",default:""}}},status:{default:{},type:"object",properties:{appliedUrl:{type:"string"},conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},failed:{type:"integer",format:"int32",default:0},lastFailedTime:{type:"string"},progress:{type:"integer",format:"int32"},size:{type:"integer",format:"int64"},storageClassName:{type:"string"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}},"application/yaml":{schema:{type:"string"}},"application/json;stream=watch":{schema:{type:"string"}}}}},method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachineimages/{name:[a-z0-9][a-z0-9\\-]*}",info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"get api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Create a Virtual Machine Image",permalink:"/zh/v1.2/api/create-namespaced-virtual-machine-image"},next:{title:"Replace a Virtual Machine Image",permalink:"/zh/v1.2/api/replace-namespaced-virtual-machine-image"}},N={},b=[{value:"Request",id:"request",level:2}],T={toc:b},v="wrapper";function q(e){let{components:a,...t}=e;return(0,i.kt)(v,(0,s.Z)({},T,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Read a Virtual Machine Image"),(0,i.kt)(n(),{method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachineimages/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,i.kt)(l(),{infoPath:"api/harvester-apis",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Get a VirtualMachineImage object."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(o.Z,{className:"paramsItem",param:{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(o.Z,{className:"paramsItem",param:{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(m.Z,{mdxType:"ApiTabs"},(0,i.kt)(g.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"checksum",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"pvcName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"pvcNamespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"retry",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"sourceType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"storageClassParameters"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"appliedUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(y.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(y.Z,{collapsible:!1,name:"failed",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"lastFailedTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"size",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"storageClassName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "checksum": "string",\n    "description": "string",\n    "displayName": "string",\n    "pvcName": "string",\n    "pvcNamespace": "string",\n    "retry": 0,\n    "sourceType": "string",\n    "storageClassParameters": {},\n    "url": "string"\n  },\n  "status": {\n    "appliedUrl": "string",\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "failed": 0,\n    "lastFailedTime": "string",\n    "progress": 0,\n    "size": 0,\n    "storageClassName": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,i.kt)(g.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"checksum",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"pvcName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"pvcNamespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"retry",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"sourceType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"storageClassParameters"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"appliedUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(y.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(y.Z,{collapsible:!1,name:"failed",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"lastFailedTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"size",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"storageClassName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "checksum": "string",\n    "description": "string",\n    "displayName": "string",\n    "pvcName": "string",\n    "pvcNamespace": "string",\n    "retry": 0,\n    "sourceType": "string",\n    "storageClassParameters": {},\n    "url": "string"\n  },\n  "status": {\n    "appliedUrl": "string",\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "failed": 0,\n    "lastFailedTime": "string",\n    "progress": 0,\n    "size": 0,\n    "storageClassName": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,i.kt)(g.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"checksum",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"pvcName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"pvcNamespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"retry",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"sourceType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"storageClassParameters"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"appliedUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(y.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(y.Z,{collapsible:!1,name:"failed",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"lastFailedTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"size",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"storageClassName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "checksum": "string",\n    "description": "string",\n    "displayName": "string",\n    "pvcName": "string",\n    "pvcNamespace": "string",\n    "retry": 0,\n    "sourceType": "string",\n    "storageClassParameters": {},\n    "url": "string"\n  },\n  "status": {\n    "appliedUrl": "string",\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "failed": 0,\n    "lastFailedTime": "string",\n    "progress": 0,\n    "size": 0,\n    "storageClassName": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(g.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null,(0,i.kt)(c.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))),(0,i.kt)(g.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))),(0,i.kt)(g.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))))))))))}q.isMDXComponent=!0}}]);