"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[17213],{32249:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>g,contentTitle:()=>h,default:()=>N,frontMatter:()=>y,metadata:()=>u,toc:()=>b});var t=s(87462),m=(s(67294),s(3905)),l=s(58219),i=(s(62316),s(51039)),n=s.n(i),p=(s(82723),s(9487)),r=s(41429),c=s(5397),o=s(4667),d=s(9472),k=(s(1176),s(12005),s(85162));const y={id:"create-namespaced-cluster-network",title:"Create a Cluster Network",description:"Create a ClusterNetwork object.",sidebar_label:"Create a Cluster Network",hide_title:!0,hide_table_of_contents:!0,api:"eJztWE1P20AQ/SvWnFppSwD15BtFlYoqAaLQS5rDxJ7EC/busrsGUsv/vZpdJ3Y+ilB7CoovSbw7X+/NrOPXQE4us9J4qRWkcG4JPSWYnJe182QvyT9r+5Do6T1l/ggEeJw7SMfQrTiYCNCGLLKHixxSyIKPS6zIGcwoX3cFAgxarMiTZUfNRgZXIVKisKIEVZ5g7YvEZdqQSFydFQm6ZKZt4gkrF3YYq9nEgQC2gjR8hNggQLJTg74AAZYea2kph9TbmgS4rKAKIW3ALwwbOm+lmoOAWsnHmi48VS5ubttJtCfnv+h8wUaZVp6U569oTCmzgMHo3nEhzbb3COJaHmMghdOSE32QKgcBaORPso7BmAgwlrH1klyMslrbyrkVnM9MzncFxDyXnBuW12sON8vOaYZ16SEFaFuxzsyOgF3u/dJU65JQDT3NsHTUduXtclKRxxx9AGpl1bTiVdQC0Vv4RPp3xOgbYns1XGKNwQVW5YHB/WKw3RzvcMMZrVx0fXp8HBNcO22+gzjM8fvpgsMc7zuDXO3p8cn2qMa/JvlhXt8T24d53XcG47yebs/rWZaROQzsO6P7MLD7ziBX+3nXA/ZO8bu2tvL3Pw3tKsgbW2SYVICm0KweGO180Ah8ASmM0Eg3UlE6OCrQPhFrCUUmj6QePZ1MyePJKIsKg1pKEgI4y5v+bf3rC1Ym0jdsrL4bVv202Qr9lmUHBJaXJPfLQ247GWK1NuBkCJNUMx0AkZ4dw7dlecnZ9QVX8bRKtKuUCWaAKlSDOJuiTdJLLRttveL0LUJPpMnTix+ZEqXi4LUNZEZ2xgxmkF1288MVdHkL2ORoIqBgqtMxNM0UHd3Zsm359mNNdgHpeCLgCa2MqLNOJB1/z1cU/LW4Dzfd/HxM/ktO2glBdxPVguvDsuZffKjRYk16aietgIIwJxvSj+vnMclPt+ylt9+asFYsLeJz9NW9k8H8XF/9uAUB006jqnTONhaf+VjBZ0jhF/zifHUALhwm4X4DJap5jXPeH/3y9QdfvPtI",sidebar_class_name:"post api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},h=void 0,u={unversionedId:"api/create-namespaced-cluster-network",id:"version-v1.1/api/create-namespaced-cluster-network",title:"Create a Cluster Network",description:"Create a ClusterNetwork object.",source:"@site/versioned_docs/version-v1.1/api/create-namespaced-cluster-network.api.mdx",sourceDirName:"api",slug:"/api/create-namespaced-cluster-network",permalink:"/v1.1/api/create-namespaced-cluster-network",draft:!1,editUrl:null,tags:[],version:"v1.1",frontMatter:{id:"create-namespaced-cluster-network",title:"Create a Cluster Network",description:"Create a ClusterNetwork object.",sidebar_label:"Create a Cluster Network",hide_title:!0,hide_table_of_contents:!0,api:"eJztWE1P20AQ/SvWnFppSwD15BtFlYoqAaLQS5rDxJ7EC/busrsGUsv/vZpdJ3Y+ilB7CoovSbw7X+/NrOPXQE4us9J4qRWkcG4JPSWYnJe182QvyT9r+5Do6T1l/ggEeJw7SMfQrTiYCNCGLLKHixxSyIKPS6zIGcwoX3cFAgxarMiTZUfNRgZXIVKisKIEVZ5g7YvEZdqQSFydFQm6ZKZt4gkrF3YYq9nEgQC2gjR8hNggQLJTg74AAZYea2kph9TbmgS4rKAKIW3ALwwbOm+lmoOAWsnHmi48VS5ubttJtCfnv+h8wUaZVp6U569oTCmzgMHo3nEhzbb3COJaHmMghdOSE32QKgcBaORPso7BmAgwlrH1klyMslrbyrkVnM9MzncFxDyXnBuW12sON8vOaYZ16SEFaFuxzsyOgF3u/dJU65JQDT3NsHTUduXtclKRxxx9AGpl1bTiVdQC0Vv4RPp3xOgbYns1XGKNwQVW5YHB/WKw3RzvcMMZrVx0fXp8HBNcO22+gzjM8fvpgsMc7zuDXO3p8cn2qMa/JvlhXt8T24d53XcG47yebs/rWZaROQzsO6P7MLD7ziBX+3nXA/ZO8bu2tvL3Pw3tKsgbW2SYVICm0KweGO180Ah8ASmM0Eg3UlE6OCrQPhFrCUUmj6QePZ1MyePJKIsKg1pKEgI4y5v+bf3rC1Ym0jdsrL4bVv202Qr9lmUHBJaXJPfLQ247GWK1NuBkCJNUMx0AkZ4dw7dlecnZ9QVX8bRKtKuUCWaAKlSDOJuiTdJLLRttveL0LUJPpMnTix+ZEqXi4LUNZEZ2xgxmkF1288MVdHkL2ORoIqBgqtMxNM0UHd3Zsm359mNNdgHpeCLgCa2MqLNOJB1/z1cU/LW4Dzfd/HxM/ktO2glBdxPVguvDsuZffKjRYk16aietgIIwJxvSj+vnMclPt+ylt9+asFYsLeJz9NW9k8H8XF/9uAUB006jqnTONhaf+VjBZ0jhF/zifHUALhwm4X4DJap5jXPeH/3y9QdfvPtI",sidebar_class_name:"post api-method",info_path:"version-v1.1/api/harvester-apis",custom_edit_url:null},sidebar:"api",previous:{title:"List Cluster Networks",permalink:"/v1.1/api/list-namespaced-cluster-network"},next:{title:"Read a Cluster Network",permalink:"/v1.1/api/read-namespaced-cluster-network"}},g={},b=[{value:"Request",id:"request",level:2}],_={toc:b},f="wrapper";function N(e){let{components:a,...s}=e;return(0,m.kt)(f,(0,t.Z)({},_,s,{components:a,mdxType:"MDXLayout"}),(0,m.kt)("h1",{className:"openapi__heading"},"Create a Cluster Network"),(0,m.kt)(n(),{method:"post",path:"/apis/network.harvesterhci.io/v1beta1/clusternetworks",mdxType:"MethodEndpoint"}),(0,m.kt)("p",null,"Create a ClusterNetwork object."),(0,m.kt)("h2",{id:"request"},"Request"),(0,m.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{}},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,m.kt)("div",null,(0,m.kt)("ul",null,(0,m.kt)(r.Z,{className:"paramsItem",param:{description:"Object name and auth scope, such as for teams and projects",name:"namespace",in:"path",required:!0,schema:{type:"string",uniqueItems:!0}},mdxType:"ParamsItem"})))),(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"request",mdxType:"MimeTabs"},(0,m.kt)(k.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,m.kt)("span",{className:"openapi-schema__required"},"required")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"config"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"enable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(k.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details mime","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-mime"},(0,m.kt)("h3",{className:"openapi-markdown__details-summary-header-body"},"Body"),(0,m.kt)("span",{className:"openapi-schema__required"},"required")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"config"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"enable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"})))))))),(0,m.kt)("div",null,(0,m.kt)("div",null,(0,m.kt)(l.Z,{label:void 0,id:void 0,mdxType:"ApiTabs"},(0,m.kt)(k.default,{label:"200",value:"200",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"OK")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(k.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"config"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"enable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(k.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "config": {},\n  "description": "string",\n  "enable": false,\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(k.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"config"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"enable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(k.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "config": {},\n  "description": "string",\n  "enable": false,\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(k.default,{label:"201",value:"201",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Created")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(k.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"config"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"enable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(k.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "config": {},\n  "description": "string",\n  "enable": false,\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(k.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"config"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"enable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(k.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "config": {},\n  "description": "string",\n  "enable": false,\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(k.default,{label:"202",value:"202",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Accepted")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(k.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"config"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"enable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(k.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "config": {},\n  "description": "string",\n  "enable": false,\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"})))),(0,m.kt)(k.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"apiVersion",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"config"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{name:"property name*",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",default:""},collapsible:!1,discriminator:!1,mdxType:"SchemaItem"})))),(0,m.kt)(o.Z,{collapsible:!1,name:"description",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"enable",required:!0,schemaName:"boolean",qualifierMessage:void 0,schema:{type:"boolean",default:!1},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"kind",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details"},(0,m.kt)("summary",{style:{}},(0,m.kt)("span",{className:"openapi-schema__container"},(0,m.kt)("strong",{className:"openapi-schema__property"},"metadata"),(0,m.kt)("span",{className:"openapi-schema__name"}," object"))),(0,m.kt)("div",{style:{marginLeft:"1rem"}},(0,m.kt)(o.Z,{collapsible:!1,name:"name",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}),(0,m.kt)(o.Z,{collapsible:!1,name:"namespace",required:!1,schemaName:"string",qualifierMessage:void 0,schema:{type:"string"},mdxType:"SchemaItem"}))))))),(0,m.kt)(k.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,m.kt)(c.Z,{responseExample:'{\n  "apiVersion": "string",\n  "config": {},\n  "description": "string",\n  "enable": false,\n  "kind": "string",\n  "metadata": {\n    "name": "string",\n    "namespace": "string"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,m.kt)(k.default,{label:"401",value:"401",mdxType:"TabItem"},(0,m.kt)("div",null,(0,m.kt)("p",null,"Unauthorized")),(0,m.kt)("div",null,(0,m.kt)(p.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,m.kt)(k.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))),(0,m.kt)(k.default,{label:"application/yaml",value:"application/yaml",mdxType:"TabItem"},(0,m.kt)(d.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,m.kt)(k.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,m.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,m.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,m.kt)("strong",null,"Schema")),(0,m.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,m.kt)("ul",{style:{marginLeft:"1rem"}},(0,m.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,m.kt)("p",null,"string"))))))))))))))}N.isMDXComponent=!0}}]);