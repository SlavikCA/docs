"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[67914],{78183:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>g,contentTitle:()=>k,default:()=>N,frontMatter:()=>h,metadata:()=>y,toc:()=>f});var t=s(87462),m=(s(67294),s(3905)),i=s(58219),n=(s(62316),s(51039)),l=s.n(n),r=(s(82723),s(9487)),p=s(41429),c=s(5397),o=s(4667),d=s(9472),u=(s(1176),s(12005),s(85162));const h={id:"read-namespaced-virtual-machine-instance-migration",title:"Read a Virtual Machine Instance Migration",description:"Get a VirtualMachineInstanceMigration object.",sidebar_label:"Read a Virtual Machine Instance Migration",hide_title:!0,hide_table_of_contents:!0,api:"eJztV01v2zAM/SsCLwMGt2mHXZZhhx2GrRjaFdjHpc2BkZlYrS2pIp2tC/zfB8pt0jbu19BjTnJCiu+R1LOpJZTENrkoLngYw2cSg+aXS9JifYi2cp4OPAt6S4dunlD9TJiekZVdKEBwzjA+gZWNYVJAiNT/OihhDImwPMKGOKKl8pHYUEDEhA0JJY28vEPwexXaujRSkaE/MSQxU31CK7vmky7XfzfovKDzbGzdslDa4UjWzZw1M0d1yaZ252RerZi90nw8NgRjyAGhAKeQFy2lSyiAbUUNwngJchnVaxpCTaiUW+8uWjoQahjGklrquuJe5o7NAuuWeuZKlkoln2mzJBf5mqJUqP1omZKx6I0PYvo0Lm+x1a0vTFfrYsIsVzoRhzZZWkPm5QowolRQQKKL1iUq+4gD+Jqanz8R/ls+YkZxDPrSYCuVYRsiFYZbWxlkMwvJCGHD2SOmoFv4Nsnc2pdkOtH9HINnYt3yZm9Plzvsv0IBNnghL2rFGGtn8wEfnbG6LDdRe1Xd4ncC2m0o4Nz5EgrA6H5RYgWZFBCTCk1cT+SGbSOT7irCkKEhwRIF+yxm2NZKuSsepJUrvEGhr/sAxroTm9auK/osH8O/jbVo3NEwXA4oKC0/M6QNvnT9S2wdFVNClZPrD8EzapRtKyobxaqR5TiFKf1wQ2kUayDQEqr7j4SeM8On7WmIGefDLUmEfM9RWRfv4fC99WGv3I1YIQ93KptvquMSm3qrjq06tuoYUod+O96zJMLmw28UW22lspXKVipddy2Wt3v7m9PYT6/TY0juL5X/MZetQJ74pbrH/2navZlRllQV9A41p3zKdH4dwwij49F5O6WFS7LrwmixP1opg0fL1fP4BHf+7u28m1ytp6c7k9fdaNHfwZr+Duau7mDN6g7XRxjenGfpWciUndTK+QumBekVy3w8PtD5e3H9+oDF/pQE96Hr/gFOcgDn",sidebar_class_name:"get api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},k=void 0,y={unversionedId:"api/read-namespaced-virtual-machine-instance-migration",id:"version-v1.1/api/read-namespaced-virtual-machine-instance-migration",title:"Read a Virtual Machine Instance Migration",description:"Get a VirtualMachineInstanceMigration object.",source:"@site/versioned_docs/version-v1.1/api/read-namespaced-virtual-machine-instance-migration.api.mdx",sourceDirName:"api",slug:"/api/read-namespaced-virtual-machine-instance-migration",permalink:"/v1.1/api/read-namespaced-virtual-machine-instance-migration",draft:!1,editUrl:null,tags:[],version:"v1.1",frontMatter:{id:"read-namespaced-virtual-machine-instance-migration",title:"Read a Virtual Machine Instance Migration",description:"Get a VirtualMachineInstanceMigration object.",sidebar_label:"Read a Virtual Machine Instance Migration",hide_title:!0,hide_table_of_contents:!0,api:"eJztV01v2zAM/SsCLwMGt2mHXZZhhx2GrRjaFdjHpc2BkZlYrS2pIp2tC/zfB8pt0jbu19BjTnJCiu+R1LOpJZTENrkoLngYw2cSg+aXS9JifYi2cp4OPAt6S4dunlD9TJiekZVdKEBwzjA+gZWNYVJAiNT/OihhDImwPMKGOKKl8pHYUEDEhA0JJY28vEPwexXaujRSkaE/MSQxU31CK7vmky7XfzfovKDzbGzdslDa4UjWzZw1M0d1yaZ252RerZi90nw8NgRjyAGhAKeQFy2lSyiAbUUNwngJchnVaxpCTaiUW+8uWjoQahjGklrquuJe5o7NAuuWeuZKlkoln2mzJBf5mqJUqP1omZKx6I0PYvo0Lm+x1a0vTFfrYsIsVzoRhzZZWkPm5QowolRQQKKL1iUq+4gD+Jqanz8R/ls+YkZxDPrSYCuVYRsiFYZbWxlkMwvJCGHD2SOmoFv4Nsnc2pdkOtH9HINnYt3yZm9Plzvsv0IBNnghL2rFGGtn8wEfnbG6LDdRe1Xd4ncC2m0o4Nz5EgrA6H5RYgWZFBCTCk1cT+SGbSOT7irCkKEhwRIF+yxm2NZKuSsepJUrvEGhr/sAxroTm9auK/osH8O/jbVo3NEwXA4oKC0/M6QNvnT9S2wdFVNClZPrD8EzapRtKyobxaqR5TiFKf1wQ2kUayDQEqr7j4SeM8On7WmIGefDLUmEfM9RWRfv4fC99WGv3I1YIQ93KptvquMSm3qrjq06tuoYUod+O96zJMLmw28UW22lspXKVipddy2Wt3v7m9PYT6/TY0juL5X/MZetQJ74pbrH/2navZlRllQV9A41p3zKdH4dwwij49F5O6WFS7LrwmixP1opg0fL1fP4BHf+7u28m1ytp6c7k9fdaNHfwZr+Duau7mDN6g7XRxjenGfpWciUndTK+QumBekVy3w8PtD5e3H9+oDF/pQE96Hr/gFOcgDn",sidebar_class_name:"get api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Create a Virtual Machine Instance Migration",permalink:"/v1.1/api/create-namespaced-virtual-machine-instance-migration"},next:{title:"Replace a Virtual Machine Instance Migration",permalink:"/v1.1/api/replace-namespaced-virtual-machine-instance-migration"}},g={},f=[{value:"Request",id:"request",level:2}],_={toc:f},v="wrapper";function N(e){let{components:a,...s}=e;return(0,m.kt)(v,(0,t.Z)({},_,s,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{className:"openapi__heading"},"Read a Virtual Machine Instance Migration"),(0,m.kt)(l(),{method:"get",path:"/apis/kubevirt.io/v1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/virtualmachineinstancemigrations/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,m.kt)("p",null,"Get a VirtualMachineInstanceMigration object."),(0,m.kt)("h2",{id:"request"},"Request"),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)("div",null,(0,m.kt)("div",null,(0,m.kt)(i.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,m.kt)(u.default,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"OK")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"vmiName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(o.Z,{collapsible:!1,name:"lastProbeTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(o.Z,{collapsible:!1,name:"phase",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "vmiName": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastProbeTime": "string",\n        "lastTransitionTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "phase": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(u.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"vmiName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(o.Z,{collapsible:!1,name:"lastProbeTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(o.Z,{collapsible:!1,name:"phase",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "vmiName": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastProbeTime": "string",\n        "lastTransitionTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "phase": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(u.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"vmiName",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(o.Z,{collapsible:!1,name:"lastProbeTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(o.Z,{collapsible:!1,name:"phase",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "vmiName": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastProbeTime": "string",\n        "lastTransitionTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "phase": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(u.default,{label:"401",value:"401",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unauthorized")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))),(0,m.kt)(u.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))),(0,m.kt)(u.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))))))))))}N.isMDXComponent=!0}}]);