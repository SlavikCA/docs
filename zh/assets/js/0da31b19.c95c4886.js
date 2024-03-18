"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[76531],{24593:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>_,contentTitle:()=>g,default:()=>q,frontMatter:()=>k,metadata:()=>f,toc:()=>b});var s=t(87462),i=(t(67294),t(3905)),m=t(58219),n=(t(62316),t(80667)),r=t.n(n),p=t(24228),l=t.n(p),o=t(9487),c=t(41429),d=t(5397),u=t(4667),y=t(9472),h=t(85162);const k={id:"patch-namespaced-persistent-volume-claim",title:"Patch a Persistent Volume Claim",description:"Patch a PersistentVolumeClaim object.",sidebar_label:"Patch a Persistent Volume Claim",hide_title:!0,hide_table_of_contents:!0,api:{description:"Patch a PersistentVolumeClaim object.",tags:["Volumes"],operationId:"patchNamespacedPersistentVolumeClaim",requestBody:{content:{"application/json-patch+json":{schema:{type:"object"}},"application/merge-patch+json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{accessModes:{type:"array",items:{type:"string",default:""}},dataSource:{type:"object",required:["kind","name"],properties:{apiGroup:{type:"string"},kind:{type:"string",default:""},name:{type:"string",default:""}},"x-kubernetes-map-type":"atomic"},dataSourceRef:{type:"object",required:["kind","name"],properties:{apiGroup:{type:"string"},kind:{type:"string",default:""},name:{type:"string",default:""}},"x-kubernetes-map-type":"atomic"},resources:{default:{},type:"object",properties:{limits:{type:"object",additionalProperties:{default:{},type:"string"}},requests:{type:"object",additionalProperties:{default:{},type:"string"}}}},selector:{type:"object",properties:{matchExpressions:{type:"array",items:{default:{},type:"object",required:["key","operator"],properties:{key:{type:"string",default:"","x-kubernetes-patch-merge-key":"key","x-kubernetes-patch-strategy":"merge"},operator:{type:"string",default:""},values:{type:"array",items:{type:"string",default:""}}}}},matchLabels:{type:"object",additionalProperties:{type:"string",default:""}}},"x-kubernetes-map-type":"atomic"},storageClassName:{type:"string"},volumeMode:{type:"string"},volumeName:{type:"string"}}},status:{default:{},type:"object",properties:{accessModes:{type:"array",items:{type:"string",default:""}},allocatedResources:{type:"object",additionalProperties:{default:{},type:"string"}},capacity:{type:"object",additionalProperties:{default:{},type:"string"}},conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastProbeTime:{default:{},type:"string"},lastTransitionTime:{default:{},type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}},"x-kubernetes-patch-merge-key":"type","x-kubernetes-patch-strategy":"merge"},phase:{type:"string",enum:["Bound","Lost","Pending"]},resizeStatus:{type:"string"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}}}}},parameters:[{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],method:"patch",path:"/api/v1/namespaces/{namespace:[a-z0-9][a-z0-9-]*}/persistentvolumeclaims/{name:[a-z0-9][a-z0-9-]*}",jsonRequestBodyExample:{},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"patch api-method",info_path:"api/harvester-apis",custom_edit_url:null},g=void 0,f={unversionedId:"api/patch-namespaced-persistent-volume-claim",id:"api/patch-namespaced-persistent-volume-claim",title:"Patch a Persistent Volume Claim",description:"Patch a PersistentVolumeClaim object.",source:"@site/docs/api/patch-namespaced-persistent-volume-claim.api.mdx",sourceDirName:"api",slug:"/api/patch-namespaced-persistent-volume-claim",permalink:"/zh/v1.4/api/patch-namespaced-persistent-volume-claim",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"patch-namespaced-persistent-volume-claim",title:"Patch a Persistent Volume Claim",description:"Patch a PersistentVolumeClaim object.",sidebar_label:"Patch a Persistent Volume Claim",hide_title:!0,hide_table_of_contents:!0,api:{description:"Patch a PersistentVolumeClaim object.",tags:["Volumes"],operationId:"patchNamespacedPersistentVolumeClaim",requestBody:{content:{"application/json-patch+json":{schema:{type:"object"}},"application/merge-patch+json":{schema:{type:"object"}}},required:!0},responses:{200:{description:"OK",content:{"application/json":{schema:{type:"object",required:["kind","apiVersion"],properties:{apiVersion:{type:"string"},kind:{type:"string"},metadata:{default:{},type:"object",required:["name"],properties:{name:{type:"string"},namespace:{type:"string"}}},spec:{default:{},type:"object",properties:{accessModes:{type:"array",items:{type:"string",default:""}},dataSource:{type:"object",required:["kind","name"],properties:{apiGroup:{type:"string"},kind:{type:"string",default:""},name:{type:"string",default:""}},"x-kubernetes-map-type":"atomic"},dataSourceRef:{type:"object",required:["kind","name"],properties:{apiGroup:{type:"string"},kind:{type:"string",default:""},name:{type:"string",default:""}},"x-kubernetes-map-type":"atomic"},resources:{default:{},type:"object",properties:{limits:{type:"object",additionalProperties:{default:{},type:"string"}},requests:{type:"object",additionalProperties:{default:{},type:"string"}}}},selector:{type:"object",properties:{matchExpressions:{type:"array",items:{default:{},type:"object",required:["key","operator"],properties:{key:{type:"string",default:"","x-kubernetes-patch-merge-key":"key","x-kubernetes-patch-strategy":"merge"},operator:{type:"string",default:""},values:{type:"array",items:{type:"string",default:""}}}}},matchLabels:{type:"object",additionalProperties:{type:"string",default:""}}},"x-kubernetes-map-type":"atomic"},storageClassName:{type:"string"},volumeMode:{type:"string"},volumeName:{type:"string"}}},status:{default:{},type:"object",properties:{accessModes:{type:"array",items:{type:"string",default:""}},allocatedResources:{type:"object",additionalProperties:{default:{},type:"string"}},capacity:{type:"object",additionalProperties:{default:{},type:"string"}},conditions:{type:"array",items:{default:{},type:"object",required:["type","status"],properties:{lastProbeTime:{default:{},type:"string"},lastTransitionTime:{default:{},type:"string"},message:{type:"string"},reason:{type:"string"},status:{type:"string",default:""},type:{type:"string",default:""}}},"x-kubernetes-patch-merge-key":"type","x-kubernetes-patch-strategy":"merge"},phase:{type:"string",enum:["Bound","Lost","Pending"]},resizeStatus:{type:"string"}}}}}}}},401:{description:"Unauthorized",content:{"application/json":{schema:{type:"string"}}}}},parameters:[{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}}],method:"patch",path:"/api/v1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/persistentvolumeclaims/{name:[a-z0-9][a-z0-9\\-]*}",jsonRequestBodyExample:{},info:{title:"Harvester APIs",version:"v1beta1"}},sidebar_class_name:"patch api-method",info_path:"api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Delete a Persistent Volume Claim",permalink:"/zh/v1.4/api/delete-namespaced-persistent-volume-claim"},next:{title:"List Persistent Volume Claims For All Namespaces",permalink:"/zh/v1.4/api/list-persistent-volume-claim-for-all-namespaces"}},_={},b=[{value:"Request",id:"request",level:2}],N={toc:b},v="wrapper";function q(e){let{components:a,...t}=e;return(0,i.kt)(v,(0,s.Z)({},N,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Patch a Persistent Volume Claim"),(0,i.kt)(r(),{method:"patch",path:"/api/v1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/persistentvolumeclaims/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,i.kt)(l(),{infoPath:"api/harvester-apis",mdxType:"SecuritySchemes"}),(0,i.kt)("p",null,"Patch a PersistentVolumeClaim object."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(c.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,i.kt)(c.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object")))))),(0,i.kt)(h.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"object"))))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(m.Z,{mdxType:"ApiTabs"},(0,i.kt)(h.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"accessModes",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"dataSource"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"apiGroup",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"dataSourceRef"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"apiGroup",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"resources"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"limits"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"requests"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"selector"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"matchExpressions"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(u.Z,{collapsible:!1,name:"key",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:"","x-kubernetes-patch-merge-key":"key","x-kubernetes-patch-strategy":"merge"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"operator",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"values",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"matchLabels"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"}))))))),(0,i.kt)(u.Z,{collapsible:!1,name:"storageClassName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"volumeMode",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"volumeName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"status"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{collapsible:!1,name:"accessModes",required:!1,schemaName:"string[]",qualifierMessage:void 0,schema:{type:"array",items:{type:"string",default:""}},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"allocatedResources"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"capacity"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(u.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,i.kt)(u.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,i.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,i.kt)(u.Z,{collapsible:!1,name:"lastProbeTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{default:{},type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,i.kt)("li",null,(0,i.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,i.kt)(u.Z,{collapsible:!1,name:"phase",required:!1,schemaName:"string",qualifierMessage:"**Possible values:** [`Bound`, `Lost`, `Pending`]",schema:{type:"string",enum:["Bound","Lost","Pending"]},mdxType:"SchemaItem"}),(0,i.kt)(u.Z,{collapsible:!1,name:"resizeStatus",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,i.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(d.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "accessModes": [\n      "string"\n    ],\n    "dataSource": {\n      "apiGroup": "string",\n      "kind": "string",\n      "name": "string"\n    },\n    "dataSourceRef": {\n      "apiGroup": "string",\n      "kind": "string",\n      "name": "string"\n    },\n    "resources": {\n      "limits": {},\n      "requests": {}\n    },\n    "selector": {\n      "matchExpressions": [\n        {\n          "key": "string",\n          "operator": "string",\n          "values": [\n            "string"\n          ]\n        }\n      ],\n      "matchLabels": {}\n    },\n    "storageClassName": "string",\n    "volumeMode": "string",\n    "volumeName": "string"\n  },\n  "status": {\n    "accessModes": [\n      "string"\n    ],\n    "allocatedResources": {},\n    "capacity": {},\n    "conditions": [\n      {\n        "lastProbeTime": {},\n        "lastTransitionTime": {},\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "phase": "Bound",\n    "resizeStatus": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null,(0,i.kt)(o.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(y.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("li",null,(0,i.kt)("div",null,(0,i.kt)("strong",null,"string")))))))))))))))}q.isMDXComponent=!0}}]);