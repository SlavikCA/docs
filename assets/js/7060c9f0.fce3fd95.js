"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[80600],{59806:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>g,contentTitle:()=>h,default:()=>N,frontMatter:()=>k,metadata:()=>u,toc:()=>_});var t=s(87462),m=(s(67294),s(3905)),i=s(58219),n=(s(62316),s(51039)),l=s.n(n),r=(s(82723),s(9487)),p=s(41429),c=s(5397),o=s(4667),d=s(9472),y=(s(1176),s(12005),s(85162));const k={id:"read-namespaced-key-pair",title:"Read a Key Pair",description:"Get a KeyPair object.",sidebar_label:"Read a Key Pair",hide_title:!0,hide_table_of_contents:!0,api:"eJztV01P20AQ/SuruSBVDoGql7rqoYeqIKQWCegFcpisJ/GCvbvsrNOGyP+9GjufOIFQccxprczMvjcfLx7PICPWwfhonIUUflBUqC5oeokmKDe8Jx2PIYGIY4b0Fq6uzsTKMEjAeQoocecZpBAIs59YEnvUlM1vgAQ8BiwpUpD42TO4q9xVRaZiTor+eheiGsoT6nisvsux+LlEYyMay0oXFUcKPfakzchoNTJUZKwK80DqaMngSFhbLAlSaC6EBIxAPlYUppAA65xKhHQGcerFa+hcQWghgcqax4rOI5UMaQwV1XWyk7lhNcGiopa5kKVMyDe0OQbjeUEx5ijVrZiC0miVdVG1aUw32EroO9OVuig3aiodiF0VNK0gm2MO6DHmkECgx8oEytobt+BLana8J/yvZpCU4Ci0mcIq5oq185QornSukNXIBRUJS248fHASwpskm9a+J9OBxLN3lokl5OPJiRzP2F9AAtrZSDaKFb0vjG5Gv3/P4jLrorba2eB3C9JtSODB2AwSQG9+U2ABGSTggwgqmpbImq2TST2/YZuhpIgZRmyzGGFVCOU6eZFWU+EOhbbuWzBWneha6zpps3wLvq+GhdEXNO2SWJm2NHQJAHPgiLHiV6E3EbSzmZFe8hoEhoAiO9MOyxtyaWxLKp18CuR4HdByA3ltdpRY3G58hpF2upTEjOPttkDIOyZnVaOXqrnI8bWa1wmMjB1TuAymFUdnHhqndclMsSwOkjlI5iCZvSUjb5kvHANh+fUPRp0f9HPQz0E/L+hH3D6dnHaXuRsry6cL5omy/1jrliB7vtN2+O8n6PWMGp3lTj61xtSMlKy/KfTRG+7nGCYk30W5NsfG9SenQ4p42l/qhvuz5XN6i72nk97nwfy8u+sNPtT9B5p6NGHuud2p2b1HruFoYiEkzxbQ6tvluezrk8WfCMxZQF3/A88N/wc=",sidebar_class_name:"get api-method",info_path:"version-v1.2/api/harvester-apis",custom_edit_url:null},h=void 0,u={unversionedId:"api/read-namespaced-key-pair",id:"version-v1.2/api/read-namespaced-key-pair",title:"Read a Key Pair",description:"Get a KeyPair object.",source:"@site/versioned_docs/version-v1.2/api/read-namespaced-key-pair.api.mdx",sourceDirName:"api",slug:"/api/read-namespaced-key-pair",permalink:"/v1.2/api/read-namespaced-key-pair",draft:!1,editUrl:null,tags:[],version:"v1.2",frontMatter:{id:"read-namespaced-key-pair",title:"Read a Key Pair",description:"Get a KeyPair object.",sidebar_label:"Read a Key Pair",hide_title:!0,hide_table_of_contents:!0,api:"eJztV01P20AQ/SuruSBVDoGql7rqoYeqIKQWCegFcpisJ/GCvbvsrNOGyP+9GjufOIFQccxprczMvjcfLx7PICPWwfhonIUUflBUqC5oeokmKDe8Jx2PIYGIY4b0Fq6uzsTKMEjAeQoocecZpBAIs59YEnvUlM1vgAQ8BiwpUpD42TO4q9xVRaZiTor+eheiGsoT6nisvsux+LlEYyMay0oXFUcKPfakzchoNTJUZKwK80DqaMngSFhbLAlSaC6EBIxAPlYUppAA65xKhHQGcerFa+hcQWghgcqax4rOI5UMaQwV1XWyk7lhNcGiopa5kKVMyDe0OQbjeUEx5ijVrZiC0miVdVG1aUw32EroO9OVuig3aiodiF0VNK0gm2MO6DHmkECgx8oEytobt+BLana8J/yvZpCU4Ci0mcIq5oq185QornSukNXIBRUJS248fHASwpskm9a+J9OBxLN3lokl5OPJiRzP2F9AAtrZSDaKFb0vjG5Gv3/P4jLrorba2eB3C9JtSODB2AwSQG9+U2ABGSTggwgqmpbImq2TST2/YZuhpIgZRmyzGGFVCOU6eZFWU+EOhbbuWzBWneha6zpps3wLvq+GhdEXNO2SWJm2NHQJAHPgiLHiV6E3EbSzmZFe8hoEhoAiO9MOyxtyaWxLKp18CuR4HdByA3ltdpRY3G58hpF2upTEjOPttkDIOyZnVaOXqrnI8bWa1wmMjB1TuAymFUdnHhqndclMsSwOkjlI5iCZvSUjb5kvHANh+fUPRp0f9HPQz0E/L+hH3D6dnHaXuRsry6cL5omy/1jrliB7vtN2+O8n6PWMGp3lTj61xtSMlKy/KfTRG+7nGCYk30W5NsfG9SenQ4p42l/qhvuz5XN6i72nk97nwfy8u+sNPtT9B5p6NGHuud2p2b1HruFoYiEkzxbQ6tvluezrk8WfCMxZQF3/A88N/wc=",sidebar_class_name:"get api-method",info_path:"version-v1.2/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Create a Key Pair",permalink:"/v1.2/api/create-namespaced-key-pair"},next:{title:"Replace a Key Pair",permalink:"/v1.2/api/replace-namespaced-key-pair"}},g={},_=[{value:"Request",id:"request",level:2}],f={toc:_},b="wrapper";function N(e){let{components:a,...s}=e;return(0,m.kt)(b,(0,t.Z)({},f,s,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{className:"openapi__heading"},"Read a Key Pair"),(0,m.kt)(l(),{method:"get",path:"/apis/harvesterhci.io/v1beta1/namespaces/{namespace:[a-z0-9][a-z0-9\\-]*}/keypairs/{name:[a-z0-9][a-z0-9\\-]*}",mdxType:"MethodEndpoint"}),(0,m.kt)("p",null,"Get a KeyPair object."),(0,m.kt)("h2",{id:"request"},"Request"),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Name of the resource",name:"name",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Query Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Should the export be exact. Exact export maintains cluster-specific fields like 'Namespace'.",name:"exact",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"}),(0,m.kt)(p.Z,{className:"paramsItem",param:{description:"Should this value be exported. Export strips fields that a user can not specify.",name:"export",in:"query",schema:{type:"boolean",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)("div",null,(0,m.kt)("div",null,(0,m.kt)(i.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,m.kt)(y.default,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"OK")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"publicKey",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(o.Z,{collapsible:!1,name:"fingerPrint",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "publicKey": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "fingerPrint": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(y.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"publicKey",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(o.Z,{collapsible:!1,name:"fingerPrint",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "publicKey": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "fingerPrint": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(y.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"),(0,m.kt)("span",{className:"openapi-schema__divider"}),(0,m.kt)("span",{className:"openapi-schema__required"},"required"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"publicKey",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"status"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"conditions"),(0,m.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,m.kt)(o.Z,{collapsible:!1,name:"lastTransitionTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"lastUpdateTime",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"message",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"reason",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"status",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"type",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}),(0,m.kt)("li",null,(0,m.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]"))))),(0,m.kt)(o.Z,{collapsible:!1,name:"fingerPrint",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(y.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "publicKey": "string"\n  },\n  "status": {\n    "conditions": [\n      {\n        "lastTransitionTime": "string",\n        "lastUpdateTime": "string",\n        "message": "string",\n        "reason": "string",\n        "status": "string",\n        "type": "string"\n      }\n    ],\n    "fingerPrint": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(y.default,{label:"401",value:"401",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unauthorized")),(0,m.kt)("div",null,(0,m.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(y.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))),(0,m.kt)(y.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))),(0,m.kt)(y.default,{label:"application/json;stream=watch",value:"application/json;stream=watch",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(y.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))))))))))}N.isMDXComponent=!0}}]);