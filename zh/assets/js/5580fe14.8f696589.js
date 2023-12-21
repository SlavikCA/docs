"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[1044],{49201:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>N,contentTitle:()=>g,default:()=>v,frontMatter:()=>k,metadata:()=>f,toc:()=>b});var s=t(87462),i=(t(67294),t(3905)),n=t(58219),m=(t(62316),t(80667)),r=t.n(m),p=t(24228),o=t.n(p),l=t(9487),c=t(41429),d=t(5397),y=t(4667),u=t(9472),h=t(85162);const k={id:"patch-namespaced-node-network",title:"Patch a Node Network",description:"Patch a NodeNetwork object.",sidebar_label:"Patch a Node Network",hide_title:!0,hide_table_of_contents:!0,api:{description:"Patch a NodeNetwork object.",tags:["Networks"],operationId:"patchNamespacedNodeNetwork",requestBody:{content:{"application/json-patch+json":{schema:{type:"object"}},"application/merge-patch+json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["nodeName"],properties:{description:{type:"string"},nic:{type:"string"},nodeName:{type:"string",default:""},type:{type:"string"}}},status:{default:{},type:"object",properties:{conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},networkIDs:{type:"array",items:{type:"integer",format:"int32",default:0}},networkLinkStatus:{type:"object",additionalProperties:{type:"object",required:["name"],properties:{index:{type:"integer",format:"int32"},mac:{type:"string"},masterIndex:{type:"integer",format:"int32"},name:{type:"string",default:""},promiscuous:{type:"boolean"},state:{type:"string"},type:{type:"string"}}}},nics:{type:"array",items:{default:{},type:"object",required:["index","name","type","state"],properties:{index:{type:"integer",format:"int32",default:0},masterIndex:{type:"integer",format:"int32"},name:{type:"string",default:""},state:{type:"string",default:""},type:{type:"string",default:""},usedByManagementNetwork:{type:"boolean"},usedByVlanNetwork:{type:"boolean"}}}}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}}}}},parameters:[{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],method:"patch",path:"/apis/network.harvesterhci.io/v1beta1/nodenetworks/{name:[a-z0-9][a-z0-9-]*}",jsonRequestBodyExample:{},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"patch api-method",info_path:"api/harvester-apis",custom_edit_url:null},g=void 0,f={unversionedId:"api/patch-namespaced-node-network",id:"api/patch-namespaced-node-network",title:"Patch a Node Network",description:"Patch a NodeNetwork object.",source:"@site/docs/api/patch-namespaced-node-network.api.mdx",sourceDirName:"api",slug:"/api/patch-namespaced-node-network",permalink:"/zh/v1.3/api/patch-namespaced-node-network",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"patch-namespaced-node-network",title:"Patch a Node Network",description:"Patch a NodeNetwork object.",sidebar_label:"Patch a Node Network",hide_title:!0,hide_table_of_contents:!0,api:{description:"Patch a NodeNetwork object.",tags:["Networks"],operationId:"patchNamespacedNodeNetwork",requestBody:{content:{"application/json-patch+json":{schema:{type:"object"}},"application/merge-patch+json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",required:["nodeName"],properties:{description:{type:"string"},nic:{type:"string"},nodeName:{type:"string",default:""},type:{type:"string"}}},status:{default:{},type:"object",properties:{conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastTransitionTime:{type:"string"},lastUpdateTime:{type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}}},networkIDs:{type:"array",items:{type:"integer",format:"int32",default:0}},networkLinkStatus:{type:"object",additionalProperties:{type:"object",required:["name"],properties:{index:{type:"integer",format:"int32"},mac:{type:"string"},masterIndex:{type:"integer",format:"int32"},name:{type:"string",default:""},promiscuous:{type:"boolean"},state:{type:"string"},type:{type:"string"}}}},nics:{type:"array",items:{default:{},type:"object",required:["index","name","type","state"],properties:{index:{type:"integer",format:"int32",default:0},masterIndex:{type:"integer",format:"int32"},name:{type:"string",default:""},state:{type:"string",default:""},type:{type:"string",default:""},usedByManagementNetwork:{type:"boolean"},usedByVlanNetwork:{type:"boolean"}}}}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}}}}},parameters:[{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],method:"patch",path:"/apis/network.harvesterhci.io/v1beta1/nodenetworks/{name:[a-z0-9][a-z0-9\\-]*}",jsonRequestBodyExample:{},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"patch api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Delete a Node Network",permalink:"/zh/v1.3/api/delete-namespaced-node-network"},next:{title:"List Virtual Machine Instance Migrations",permalink:"/zh/v1.3/api/list-namespaced-virtual-machine-instance-migration"}},N={},b=[{value:"Request",id:"request",level:2}],_={toc:b},q="wrapper";function v(e){let{components:a,...t}=e;return(0,i.kt)(q,(0,s.Z)({},_,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Patch a Node Network"),(0,i.kt)(r(),{method:"patch",path:"/apis/network.harvesterhci.io/v1beta1/nodenetworks/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,i.kt)(o(),{infoPath:"api/harvester-apis",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Patch a NodeNetwork object."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(c.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(c.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(h.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(n.Z,{mdxType:"ApiTabs"},(0,i.kt)(h.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"nic",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"nodeName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(y.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(y.Z,{collapsible:!1,name:"networkIDs",required:!1,schemaName:"int32[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"integer",format:"int32",default:0}},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"networkLinkStatus"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"property name*"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(y.Z,{collapsible:!1,name:"index",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"mac",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"masterIndex",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"promiscuous",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"state",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"type",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(y.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"nics"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(y.Z,{collapsible:!1,name:"index",required:!0,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"masterIndex",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"state",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"usedByManagementNetwork",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,i.kt)(y.Z,{collapsible:!1,name:"usedByVlanNetwork",required:!1,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean"},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))))))))),(0,i.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "description": "string",\n    "nic": "string",\n    "nodeName": "string",\n    "type": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "networkIDs": [\n      0\n    ],\n    "networkLinkStatus": {},\n    "nics": [\n      {\n        "index": 0,\n        "masterIndex": 0,\n        "name": "string",\n        "state": "string",\n        "type": "string",\n        "usedByManagementNetwork": true,\n        "usedByVlanNetwork": true\n      }\n    ]\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(u.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))))))))))}v.isMDXComponent=!0}}]);