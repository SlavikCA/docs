"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[81258],{94222:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>k,contentTitle:()=>u,default:()=>b,frontMatter:()=>g,metadata:()=>y,toc:()=>f});var t=s(87462),m=(s(67294),s(3905)),i=s(58219),l=(s(62316),s(51039)),n=s.n(l),r=(s(82723),s(9487)),p=s(41429),c=s(5397),d=s(4667),o=s(9472),h=(s(1176),s(12005),s(85162));const g={id:"read-namespaced-virtual-machine-image",title:"Read a Virtual Machine Image",description:"Get a VirtualMachineImage object.",sidebar_label:"Read a Virtual Machine Image",hide_title:!0,hide_table_of_contents:!0,api:"eJztWE1v40YM/SsDXhYolNjZLgrURQ9F0Y+g6DZAk71kfWBGtDUbSTMZUm4dQ/99wVHi+EOOk8Ue9qDTCBoO3yOHfBK4gpzYRhfE+Rom8AeJQfPBRWmw/Btt4Wo6r3BOxt98IiunkIHgnGFyDek9wzQDHyiiejjPYQKRMH+PFXFAS3mPL8ggYMSKhKJ6Wu2Q+LfwTZkbKcjQ/8FHMTf6hFZOzW+6PL6u0NWCrmZjy4aF4gkHsm7mrJk5KnM2pbsl82bN5o3yr7EimEByCBk4hbxrKC4hA7YFVQiTFcgyqNWN9yVhDRk0tbtr6FyoYphIbKhts4PMHZsFlg11zJUs5Uo+0WaJLvAjRSlQc94wRWOxNrUX04Wx3GKrR78yXc2L8bOU6Ujsm2jpCTItD4ABpYAMIt01LlLeeezB19Dq+Qvh/0klZRTHYJ0bbKQwbH2gzHBjC4NsZj4aIaw4WYTo9Qhvk0xX+zWZTvU8B18zsR55Ox7rssP+L8jA+lqoFt3FEEpnUxuMPrGarPZRuy7a4ncNetuQwa2rc8gAg/tAkRVkmkGI2lziOiIbe3uRtA8e+jYqEsxRsItihk2plNvsWVopw3sUurz3YDzdxP5u22ZdlK/Bzx2HEpfvuzLsqvNS7fc42YLsLTdV3/Wu4UBJbl1hTxCbmEedhYV9leGB7OxaR5K43DBztdCcImQw87FC6V59/3bz4LjdytBRDBYfcU6/lsh8saHF+4WKee40XVhebOX8Of9tBk0sj1olHigNHy2L3S4IpaP8qg+iTT3ZUd7kiTGiKqbr+vwVZZj21kz3aq9ElsuINSfIS3egO9TsKuQodNCkImb9OvbtRUI+ULJPKXz+yuUFhZHuZIaupPwLClBj/D0dPhhjiH4eifkl3jU2d09HTX94t1vR/V3Ztl18m0K9xKochHoQ6kGoB6EehPobFmr9o/6JJRJWP/+HYotBtQfVHlR7UO1Btb8p1dYI343P9sclV7WOd3x095R/weBkDfLC//cD9i/7jGxGlNS98DrYnFNqFh0wTWCEwfGowLggnTwW1p06P1qc3ZDg2Wit1jxarZ8n13hyPz75cfqwfvx4Mv2uHS26CWnVTUhdmqp2p/oPpEnXzCe+Tkol/OcjDfPLxblOxxaPnzF4YARt+xnw2osL",sidebar_class_name:"get api-method",info_path:"version-v1.2/api/harvester-apis",custom_edit_url:null},u=void 0,y={unversionedId:"api/read-namespaced-virtual-machine-image",id:"version-v1.2/api/read-namespaced-virtual-machine-image",title:"Read a Virtual Machine Image",description:"Get a VirtualMachineImage object.",source:"@site/versioned_docs/version-v1.2/api/read-namespaced-virtual-machine-image.api.mdx",sourceDirName:"api",slug:"/api/read-namespaced-virtual-machine-image",permalink:"/v1.2/api/read-namespaced-virtual-machine-image",draft:!1,editUrl:null,tags:[],version:"v1.2",frontMatter:{id:"read-namespaced-virtual-machine-image",title:"Read a Virtual Machine Image",description:"Get a VirtualMachineImage object.",sidebar_label:"Read a Virtual Machine Image",hide_title:!0,hide_table_of_contents:!0,api:"eJztWE1v40YM/SsDXhYolNjZLgrURQ9F0Y+g6DZAk71kfWBGtDUbSTMZUm4dQ/99wVHi+EOOk8Ue9qDTCBoO3yOHfBK4gpzYRhfE+Rom8AeJQfPBRWmw/Btt4Wo6r3BOxt98IiunkIHgnGFyDek9wzQDHyiiejjPYQKRMH+PFXFAS3mPL8ggYMSKhKJ6Wu2Q+LfwTZkbKcjQ/8FHMTf6hFZOzW+6PL6u0NWCrmZjy4aF4gkHsm7mrJk5KnM2pbsl82bN5o3yr7EimEByCBk4hbxrKC4hA7YFVQiTFcgyqNWN9yVhDRk0tbtr6FyoYphIbKhts4PMHZsFlg11zJUs5Uo+0WaJLvAjRSlQc94wRWOxNrUX04Wx3GKrR78yXc2L8bOU6Ujsm2jpCTItD4ABpYAMIt01LlLeeezB19Dq+Qvh/0klZRTHYJ0bbKQwbH2gzHBjC4NsZj4aIaw4WYTo9Qhvk0xX+zWZTvU8B18zsR55Ox7rssP+L8jA+lqoFt3FEEpnUxuMPrGarPZRuy7a4ncNetuQwa2rc8gAg/tAkRVkmkGI2lziOiIbe3uRtA8e+jYqEsxRsItihk2plNvsWVopw3sUurz3YDzdxP5u22ZdlK/Bzx2HEpfvuzLsqvNS7fc42YLsLTdV3/Wu4UBJbl1hTxCbmEedhYV9leGB7OxaR5K43DBztdCcImQw87FC6V59/3bz4LjdytBRDBYfcU6/lsh8saHF+4WKee40XVhebOX8Of9tBk0sj1olHigNHy2L3S4IpaP8qg+iTT3ZUd7kiTGiKqbr+vwVZZj21kz3aq9ElsuINSfIS3egO9TsKuQodNCkImb9OvbtRUI+ULJPKXz+yuUFhZHuZIaupPwLClBj/D0dPhhjiH4eifkl3jU2d09HTX94t1vR/V3Ztl18m0K9xKochHoQ6kGoB6EehPobFmr9o/6JJRJWP/+HYotBtQfVHlR7UO1Btb8p1dYI343P9sclV7WOd3x095R/weBkDfLC//cD9i/7jGxGlNS98DrYnFNqFh0wTWCEwfGowLggnTwW1p06P1qc3ZDg2Wit1jxarZ8n13hyPz75cfqwfvx4Mv2uHS26CWnVTUhdmqp2p/oPpEnXzCe+Tkol/OcjDfPLxblOxxaPnzF4YARt+xnw2osL",sidebar_class_name:"get api-method",info_path:"version-v1.2/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Create a Virtual Machine Image",permalink:"/v1.2/api/create-namespaced-virtual-machine-image"},next:{title:"Replace a Virtual Machine Image",permalink:"/v1.2/api/replace-namespaced-virtual-machine-image"}},k={},f=[{value:"Request",id:"request",level:2}],N={toc:f},T="wrapper";function b(e){let{components:a,...s}=e;return(0,m.kt)(T,(0,t.Z)({},N,s,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{className:"openapi__heading"},"Read a Virtual Machine Image"),(0,m.kt)(n(),{method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachineimages/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,m.kt)("p",null,"Get a VirtualMachineImage object."),(0,m.kt)("h2",{id:"request"},"Request"),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)("div",null,(0,m.kt)("div",null,(0,m.kt)(i.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,m.kt)(h.default,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"OK")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"checksum",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"pvcName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"pvcNamespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"retry",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"sourceType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"storageClassParameters"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"appliedUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(d.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(d.Z,{collapsible:!1,name:"failed",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"lastFailedTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"size",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"storageClassName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "checksum": "string",\n    "description": "string",\n    "displayName": "string",\n    "pvcName": "string",\n    "pvcNamespace": "string",\n    "retry": 0,\n    "sourceType": "string",\n    "storageClassParameters": {},\n    "url": "string"\n  },\n  "status": {\n    "appliedUrl": "string",\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "failed": 0,\n    "lastFailedTime": "string",\n    "progress": 0,\n    "size": 0,\n    "storageClassName": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(h.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"checksum",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"pvcName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"pvcNamespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"retry",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"sourceType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"storageClassParameters"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"appliedUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(d.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(d.Z,{collapsible:!1,name:"failed",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"lastFailedTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"size",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"storageClassName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "checksum": "string",\n    "description": "string",\n    "displayName": "string",\n    "pvcName": "string",\n    "pvcNamespace": "string",\n    "retry": 0,\n    "sourceType": "string",\n    "storageClassParameters": {},\n    "url": "string"\n  },\n  "status": {\n    "appliedUrl": "string",\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "failed": 0,\n    "lastFailedTime": "string",\n    "progress": 0,\n    "size": 0,\n    "storageClassName": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(h.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,m.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"checksum",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"displayName",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"pvcName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"pvcNamespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"retry",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"sourceType",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"storageClassParameters"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!1,name:"url",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(d.Z,{collapsible:!1,name:"appliedUrl",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(d.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(d.Z,{collapsible:!1,name:"failed",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32",default:0},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"lastFailedTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"progress",required:!1,schemaName:"int32",qualifierMessage:void 0,schema:{type:"integer",format:"int32"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"size",required:!1,schemaName:"int64",qualifierMessage:void 0,schema:{type:"integer",format:"int64"},mdxType:"SchemaItem"}),(0,m.kt)(d.Z,{collapsible:!1,name:"storageClassName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "checksum": "string",\n    "description": "string",\n    "displayName": "string",\n    "pvcName": "string",\n    "pvcNamespace": "string",\n    "retry": 0,\n    "sourceType": "string",\n    "storageClassParameters": {},\n    "url": "string"\n  },\n  "status": {\n    "appliedUrl": "string",\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "failed": 0,\n    "lastFailedTime": "string",\n    "progress": 0,\n    "size": 0,\n    "storageClassName": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(h.default,{label:"401",value:"401",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unauthorized")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))),(0,m.kt)(h.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))),(0,m.kt)(h.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,m.kt)(o.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))))))))))}b.isMDXComponent=!0}}]);