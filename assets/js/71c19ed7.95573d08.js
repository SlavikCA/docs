"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[58596],{17271:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>k,default:()=>_,frontMatter:()=>h,metadata:()=>f,toc:()=>q});var s=a(87462),i=(a(67294),a(3905)),r=a(58219),n=(a(62316),a(80667)),m=a.n(n),p=a(24228),o=a.n(p),l=a(9487),d=a(41429),c=a(5397),y=a(4667),u=a(9472),g=a(85162);const h={id:"delete-namespaced-cluster-network",title:"Delete a Cluster Network",description:"Delete a ClusterNetwork object.",sidebar_label:"Delete a Cluster Network",hide_title:!0,hide_table_of_contents:!0,api:{description:"Delete a ClusterNetwork object.",tags:["Networks"],operationId:"deleteNamespacedClusterNetwork",parameters:[{description:"The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.",name:"gracePeriodSeconds",in:"query",schema:{type:"integer",uniqueItems:!0}},{description:'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',name:"orphanDependents",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",name:"propagationPolicy",in:"query",schema:{type:"string",uniqueItems:!0}},{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],requestBody:{content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},dryRun:{type:"array",items:{type:"string",default:""}},gracePeriodSeconds:{type:"integer",format:"int64"},kind:{type:"string"},orphanDependents:{type:"boolean"},preconditions:{type:"object",properties:{resourceVersion:{type:"string"},uid:{type:"string"}}},propagationPolicy:{type:"string"}}}},"application/yaml":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},dryRun:{type:"array",items:{type:"string",default:""}},gracePeriodSeconds:{type:"integer",format:"int64"},kind:{type:"string"},orphanDependents:{type:"boolean"},preconditions:{type:"object",properties:{resourceVersion:{type:"string"},uid:{type:"string"}}},propagationPolicy:{type:"string"}}}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},code:{type:"integer",format:"int32"},details:{type:"object",properties:{causes:{type:"array",items:{default:{},type:"object",properties:{field:{type:"string"},message:{type:"string"},reason:{type:"string"}}}},group:{type:"string"},kind:{type:"string"},name:{type:"string"},retryAfterSeconds:{type:"integer",format:"int32"},uid:{type:"string"}}},kind:{type:"string"},message:{type:"string"},metadata:{default:{},type:"object",properties:{continue:{type:"string"},remainingItemCount:{type:"integer",format:"int64"},resourceVersion:{type:"string"},selfLink:{type:"string"}}},reason:{type:"string"},status:{type:"string"}}}},"application/yaml":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},code:{type:"integer",format:"int32"},details:{type:"object",properties:{causes:{type:"array",items:{default:{},type:"object",properties:{field:{type:"string"},message:{type:"string"},reason:{type:"string"}}}},group:{type:"string"},kind:{type:"string"},name:{type:"string"},retryAfterSeconds:{type:"integer",format:"int32"},uid:{type:"string"}}},kind:{type:"string"},message:{type:"string"},metadata:{default:{},type:"object",properties:{continue:{type:"string"},remainingItemCount:{type:"integer",format:"int64"},resourceVersion:{type:"string"},selfLink:{type:"string"}}},reason:{type:"string"},status:{type:"string"}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}},"application/yaml":{schema:{type:"string"}}}}},method:"delete",path:"/apis/network.harvesterhci.io/v1beta1/clusternetworks/{name:[a-z0-9][a-z0-9-]*}",jsonRequestBodyExample:{apiVersion:"string",dryRun:["string"],gracePeriodSeconds:0,kind:"string",orphanDependents:!0,preconditions:{resourceVersion:"string",uid:"string"},propagationPolicy:"string"},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"delete api-method",info_path:"api/harvester-apis",custom_edit_url:null},k=void 0,f={unversionedId:"api/delete-namespaced-cluster-network",id:"version-v1.3/api/delete-namespaced-cluster-network",title:"Delete a Cluster Network",description:"Delete a ClusterNetwork object.",source:"@site/versioned_docs/version-v1.3/api/delete-namespaced-cluster-network.api.mdx",sourceDirName:"api",slug:"/api/delete-namespaced-cluster-network",permalink:"/v1.3/api/delete-namespaced-cluster-network",draft:!1,editUrl:null,tags:[],version:"v1.3",frontMatter:{id:"delete-namespaced-cluster-network",title:"Delete a Cluster Network",description:"Delete a ClusterNetwork object.",sidebar_label:"Delete a Cluster Network",hide_title:!0,hide_table_of_contents:!0,api:{description:"Delete a ClusterNetwork object.",tags:["Networks"],operationId:"deleteNamespacedClusterNetwork",parameters:[{description:"The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.",name:"gracePeriodSeconds",in:"query",schema:{type:"integer",uniqueItems:!0}},{description:'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',name:"orphanDependents",in:"query",schema:{type:"boolean",uniqueItems:!0}},{description:"Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",name:"propagationPolicy",in:"query",schema:{type:"string",uniqueItems:!0}},{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],requestBody:{content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},dryRun:{type:"array",items:{type:"string",default:""}},gracePeriodSeconds:{type:"integer",format:"int64"},kind:{type:"string"},orphanDependents:{type:"boolean"},preconditions:{type:"object",properties:{resourceVersion:{type:"string"},uid:{type:"string"}}},propagationPolicy:{type:"string"}}}},"application/yaml":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},dryRun:{type:"array",items:{type:"string",default:""}},gracePeriodSeconds:{type:"integer",format:"int64"},kind:{type:"string"},orphanDependents:{type:"boolean"},preconditions:{type:"object",properties:{resourceVersion:{type:"string"},uid:{type:"string"}}},propagationPolicy:{type:"string"}}}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},code:{type:"integer",format:"int32"},details:{type:"object",properties:{causes:{type:"array",items:{default:{},type:"object",properties:{field:{type:"string"},message:{type:"string"},reason:{type:"string"}}}},group:{type:"string"},kind:{type:"string"},name:{type:"string"},retryAfterSeconds:{type:"integer",format:"int32"},uid:{type:"string"}}},kind:{type:"string"},message:{type:"string"},metadata:{default:{},type:"object",properties:{continue:{type:"string"},remainingItemCount:{type:"integer",format:"int64"},resourceVersion:{type:"string"},selfLink:{type:"string"}}},reason:{type:"string"},status:{type:"string"}}}},"application/yaml":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},code:{type:"integer",format:"int32"},details:{type:"object",properties:{causes:{type:"array",items:{default:{},type:"object",properties:{field:{type:"string"},message:{type:"string"},reason:{type:"string"}}}},group:{type:"string"},kind:{type:"string"},name:{type:"string"},retryAfterSeconds:{type:"integer",format:"int32"},uid:{type:"string"}}},kind:{type:"string"},message:{type:"string"},metadata:{default:{},type:"object",properties:{continue:{type:"string"},remainingItemCount:{type:"integer",format:"int64"},resourceVersion:{type:"string"},selfLink:{type:"string"}}},reason:{type:"string"},status:{type:"string"}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}},"application/yaml":{schema:{type:"string"}}}}},method:"delete",path:"/apis/network.harvesterhci.io/v1beta1/clusternetworks/{name:[a-z0-9][a-z0-9\\-]*}",jsonRequestBodyExample:{apiVersion:"string",dryRun:["string"],gracePeriodSeconds:0,kind:"string",orphanDependents:!0,preconditions:{resourceVersion:"string",uid:"string"},propagationPolicy:"string"},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"delete api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Replace a Cluster Network",permalink:"/v1.3/api/replace-namespaced-cluster-network"},next:{title:"Patch a Cluster Network",permalink:"/v1.3/api/patch-namespaced-cluster-network"}},b={},q=[{value:"Request",id:"request",level:2}],v={toc:q},N="wrapper";function _(e){let{components:t,...a}=e;return(0,i.kt)(N,(0,s.Z)({},v,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Delete a Cluster Network"),(0,i.kt)(m(),{method:"delete",path:"/apis/network.harvesterhci.io/v1beta1/clusternetworks/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,i.kt)(o(),{infoPath:"api/harvester-apis",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Delete a ClusterNetwork object."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(d.Z,{className:"paramsItem",param:{description:"The duration in seconds before the object should be deleted. Value must be non-negative integer. The value zero indicates delete immediately. If this value is nil, the default grace period for the specified type will be used. Defaults to a per object value if not specified. zero means delete immediately.",name:"gracePeriodSeconds",in:"query",schema:{type:"integer",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{description:'Deprecated: please use the PropagationPolicy, this field will be deprecated in 1.7. Should the dependent objects be orphaned. If true/false, the "orphan" finalizer will be added to/removed from the object\'s finalizers list. Either this field or PropagationPolicy may be set, but not both.',name:"orphanDependents",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(d.Z,{className:"paramsItem",param:{description:"Whether and how garbage collection will be performed. Either this field or OrphanDependents may be set, but not both. The default policy is decided by the existing finalizer set in the metadata.finalizers and the resource-specific default policy. Acceptable values are: 'Orphan' - orphan the dependents; 'Background' - allow the garbage collector to delete the dependents in the background; 'Foreground' - a cascading policy that deletes all dependents in the foreground.",name:"propagationPolicy",in:"query",schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,i.kt)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"dryRun",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"gracePeriodSeconds",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"orphanDependents",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"preconditions"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"resourceVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!1,name:"propagationPolicy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(g.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"dryRun",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"gracePeriodSeconds",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"orphanDependents",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"preconditions"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"resourceVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!1,name:"propagationPolicy",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(r.Z,{mdxType:"ApiTabs"},(0,i.kt)(g.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"details"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(y.Z,{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(y.Z,{collapsible:!1,name:"group",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"retryAfterSeconds",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"continue",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"remainingItemCount",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"resourceVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"selfLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "code": 0,\n  "details": {\n    "causes": [\n      {\n        "field": "string",\n        "message": "string",\n        "reason": "string"\n      }\n    ],\n    "group": "string",\n    "kind": "string",\n    "name": "string",\n    "retryAfterSeconds": 0,\n    "uid": "string"\n  },\n  "kind": "string",\n  "message": "string",\n  "metadata": {\n    "continue": "string",\n    "remainingItemCount": 0,\n    "resourceVersion": "string",\n    "selfLink": "string"\n  },\n  "reason": "string",\n  "status": "string"\n}',language:"json",mdxType:"ResponseSamples"})))),(0,i.kt)(g.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"code",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"details"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"causes"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(y.Z,{collapsible:!1,name:"field",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(y.Z,{collapsible:!1,name:"group",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"retryAfterSeconds",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"uid",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"continue",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"remainingItemCount",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"resourceVersion",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"selfLink",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"status",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(g.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "code": 0,\n  "details": {\n    "causes": [\n      {\n        "field": "string",\n        "message": "string",\n        "reason": "string"\n      }\n    ],\n    "group": "string",\n    "kind": "string",\n    "name": "string",\n    "retryAfterSeconds": 0,\n    "uid": "string"\n  },\n  "kind": "string",\n  "message": "string",\n  "metadata": {\n    "continue": "string",\n    "remainingItemCount": 0,\n    "resourceVersion": "string",\n    "selfLink": "string"\n  },\n  "reason": "string",\n  "status": "string"\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(g.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(g.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))),(0,i.kt)(g.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(g.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))))))))))}_.isMDXComponent=!0}}]);