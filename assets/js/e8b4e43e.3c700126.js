"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[18168],{96717:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>f,contentTitle:()=>u,default:()=>N,frontMatter:()=>k,metadata:()=>y,toc:()=>b});var s=t(87462),i=(t(67294),t(3905)),m=t(58219),n=(t(62316),t(51039)),p=t.n(n),l=(t(82723),t(9487)),r=t(41429),o=t(5397),c=t(4667),d=t(9472),h=(t(1176),t(12005),t(85162));const k={id:"patch-namespaced-network-attachment-definition",title:"Patch a Namespaced Network Attachment Definition",description:"Patch a NetworkAttachmentDefinition object.",sidebar_label:"Patch a Namespaced Network Attachment Definition",hide_title:!0,hide_table_of_contents:!0,api:"eJytVkuT2zYM/isanPqQ7XWnh1a33bQzyXSa3cmjF68PMAVZzEokQ0LeOBr99w5E+bV2NFM3uogC8fgAfgDVAuM6QLaAt8TP1j8FWKaQU1BeO9bWQAYPyKpMMBk0bplRlTUZ/oMKbbRoJXb1iRRPIQXryKPI3uSQgRPbt1hTcKgoH3EBKXj63FDgO5tvIWtBWcNkWJboXKVV73b2KVgz6f3+LEvZDqqkGmXFW0eQQYQDKbDmSgRPv4WpttPNfNpnA12Xnjitya/pO3jtYhbaUw4Z+4Z6QXDWBAri6pebG3mdVvj+L0jH0h1Hcwi4AHT6H/Ih1vNJmxxSCI6UnKrzcjasI5AjzYPPwF6bNXSD7aWNmhhzZIxZFNhUAlnKWVX3BWSLcYAGazoH00svRTM76lzY7S4dxH0f9G9ihG7ZDclfB1VZU+j1OdhBfgYoPQSBM3TK6KkyqhhgjjTCe0HcLa93IDTsUvj1Zn7OtI8GGy6t118pv4Jz+9L3ERx6rInJh76W8RDjKwVtYvuX8HKeyDhIbJFwSYmnYBuvCF72TfrN4BKXmby4WuDk683k9+XwfnycLH+S0p+AifwZQxRJk4hygiZPpEZJUNZRmoRGhl9ICusTJqxDr+G8FZPwfXEv+/Yq7X5yRqMSMpih02H2ggizzXy2zzDM2v26m5nIjwnuCTLJ9wwZVDsZDqQar3n7XlBHft9h0OoIf8nsYMhLvlf9fpfCHaEnP6YZFYQrQql3h/n+5xesnXBb2lGbwvZeBrq/Rr+hwOST24c3UuLNblDBZr4ixrlEdzZwjeYwPg4X1f6+2d1ZyaFPkpMr54QHR1fOf7z0hvyZvvDMVaiNAGx8JT7jAfajWXJ5cYSS3RyOBp3oZMe0HT/JnbaMqdIGlkhtu8JAH33VdSL+3JDfQrZYprBBr3ElRV60kOsg6xyyAqtAI8X44d3A8R+TbzTvxQIMQjRbyRKrRr6kBLTdzQlp1atw/K+WvRJtPJH+WikJc6H+oh32X0WQkw/i5WA/9uMiuUfjW6XI8YgZnIyGh9sPr15DCqvhR6m2uRh5fJZxhM+QwSM8Qv8zFkmStVHeQoVm3eBa9KNjef4FivB0pw==",sidebar_class_name:"patch api-method",info_path:"version-v1.3/api/harvester-apis",custom_edit_url:null},u=void 0,y={unversionedId:"api/patch-namespaced-network-attachment-definition",id:"version-v1.3/api/patch-namespaced-network-attachment-definition",title:"Patch a Namespaced Network Attachment Definition",description:"Patch a NetworkAttachmentDefinition object.",source:"@site/versioned_docs/version-v1.3/api/patch-namespaced-network-attachment-definition.api.mdx",sourceDirName:"api",slug:"/api/patch-namespaced-network-attachment-definition",permalink:"/v1.3/api/patch-namespaced-network-attachment-definition",draft:!1,editUrl:null,tags:[],version:"v1.3",frontMatter:{id:"patch-namespaced-network-attachment-definition",title:"Patch a Namespaced Network Attachment Definition",description:"Patch a NetworkAttachmentDefinition object.",sidebar_label:"Patch a Namespaced Network Attachment Definition",hide_title:!0,hide_table_of_contents:!0,api:"eJytVkuT2zYM/isanPqQ7XWnh1a33bQzyXSa3cmjF68PMAVZzEokQ0LeOBr99w5E+bV2NFM3uogC8fgAfgDVAuM6QLaAt8TP1j8FWKaQU1BeO9bWQAYPyKpMMBk0bplRlTUZ/oMKbbRoJXb1iRRPIQXryKPI3uSQgRPbt1hTcKgoH3EBKXj63FDgO5tvIWtBWcNkWJboXKVV73b2KVgz6f3+LEvZDqqkGmXFW0eQQYQDKbDmSgRPv4WpttPNfNpnA12Xnjitya/pO3jtYhbaUw4Z+4Z6QXDWBAri6pebG3mdVvj+L0jH0h1Hcwi4AHT6H/Ih1vNJmxxSCI6UnKrzcjasI5AjzYPPwF6bNXSD7aWNmhhzZIxZFNhUAlnKWVX3BWSLcYAGazoH00svRTM76lzY7S4dxH0f9G9ihG7ZDclfB1VZU+j1OdhBfgYoPQSBM3TK6KkyqhhgjjTCe0HcLa93IDTsUvj1Zn7OtI8GGy6t118pv4Jz+9L3ERx6rInJh76W8RDjKwVtYvuX8HKeyDhIbJFwSYmnYBuvCF72TfrN4BKXmby4WuDk683k9+XwfnycLH+S0p+AifwZQxRJk4hygiZPpEZJUNZRmoRGhl9ICusTJqxDr+G8FZPwfXEv+/Yq7X5yRqMSMpih02H2ggizzXy2zzDM2v26m5nIjwnuCTLJ9wwZVDsZDqQar3n7XlBHft9h0OoIf8nsYMhLvlf9fpfCHaEnP6YZFYQrQql3h/n+5xesnXBb2lGbwvZeBrq/Rr+hwOST24c3UuLNblDBZr4ixrlEdzZwjeYwPg4X1f6+2d1ZyaFPkpMr54QHR1fOf7z0hvyZvvDMVaiNAGx8JT7jAfajWXJ5cYSS3RyOBp3oZMe0HT/JnbaMqdIGlkhtu8JAH33VdSL+3JDfQrZYprBBr3ElRV60kOsg6xyyAqtAI8X44d3A8R+TbzTvxQIMQjRbyRKrRr6kBLTdzQlp1atw/K+WvRJtPJH+WikJc6H+oh32X0WQkw/i5WA/9uMiuUfjW6XI8YgZnIyGh9sPr15DCqvhR6m2uRh5fJZxhM+QwSM8Qv8zFkmStVHeQoVm3eBa9KNjef4FivB0pw==",sidebar_class_name:"patch api-method",info_path:"version-v1.3/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"Patch a Namespaced Key Pair",permalink:"/v1.3/api/patch-namespaced-key-pair"},next:{title:"Patch a Namespaced Persistent Volume Claim",permalink:"/v1.3/api/patch-namespaced-persistent-volume-claim"}},f={},b=[{value:"Request",id:"request",level:2}],v={toc:b},g="wrapper";function N(e){let{components:a,...t}=e;return(0,i.kt)(g,(0,s.Z)({},v,t,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{className:"openapi__heading"},"Patch a Namespaced Network Attachment Definition"),(0,i.kt)(p(),{method:"patch",path:"/apis/k8s.cni.cncf.io/v1/namespaces/{namespace}/network-attachment-definitions/{name}",mdxType:"MethodEndpoint"}),(0,i.kt)("p",null,"Patch a NetworkAttachmentDefinition object."),(0,i.kt)("h2",{id:"request"},"Request"),(0,i.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{}},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,i.kt)("div",null,(0,i.kt)("ul",null,(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"name",in:"path",description:"Name of the resource",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"}),(0,i.kt)(r.Z,{className:"paramsItem",param:{name:"namespace",in:"path",description:"Object name and auth scope, such as for teams and projects",required:!0,schema:{type:"string",pattern:"[a-z0-9][a-z0-9\\-]*"}},mdxType:"ParamsItem"})))),(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json-patch+json",value:"application/json-patch+json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"object"))))),(0,i.kt)(h.default,{label:"application/merge-patch+json",value:"application/merge-patch+json",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,i.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,i.kt)("span",{className:"openapi-schema__required"},"required")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"object")))))),(0,i.kt)("div",null,(0,i.kt)("div",null,(0,i.kt)(m.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,i.kt)(h.default,{label:"200",value:"200",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"OK")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,i.kt)(c.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))),(0,i.kt)(c.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details"},(0,i.kt)("summary",{style:{}},(0,i.kt)("span",{className:"openapi-schema__container"},(0,i.kt)("strong",{className:"openapi-schema__property"},"spec"),(0,i.kt)("span",{className:"openapi-schema__name"}," object"),(0,i.kt)("span",{className:"openapi-schema__divider"}),(0,i.kt)("span",{className:"openapi-schema__required"},"required"))),(0,i.kt)("div",{style:{marginLeft:"1rem"}},(0,i.kt)(c.Z,{collapsible:!1,name:"config",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},mdxType:"SchemaItem"}))))))),(0,i.kt)(h.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,i.kt)(o.Z,{responseExample:'{\n  "apiVersion": "string",\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  },\n  "spec": {\n    "config": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,i.kt)(h.default,{label:"401",value:"401",mdxType:"TabItem"},(0,i.kt)("div",null,(0,i.kt)("p",null,"Unauthorized")),(0,i.kt)("div",null,(0,i.kt)(l.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,i.kt)(h.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,i.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,i.kt)(h.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,i.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,i.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,i.kt)("strong",null,"Schema")),(0,i.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,i.kt)("ul",{style:{marginLeft:"1rem"}},(0,i.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,i.kt)("p",null,"string"))))))))))))))}N.isMDXComponent=!0}}]);