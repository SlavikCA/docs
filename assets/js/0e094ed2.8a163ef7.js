"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[25559],{74596:(r,e,t)=>{t.r(e),t.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>i,metadata:()=>n,toc:()=>v});var a=t(87462),o=(t(67294),t(3905));const i={id:"terraform-provider",sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},s=void 0,n={unversionedId:"terraform/terraform-provider",id:"version-v1.1/terraform/terraform-provider",title:"Harvester Terraform Provider",description:"Support Matrix",source:"@site/versioned_docs/version-v1.1/terraform/terraform-provider.md",sourceDirName:"terraform",slug:"/terraform/terraform-provider",permalink:"/v1.1/terraform/terraform-provider",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/terraform/terraform-provider.md",tags:[],version:"v1.1",lastUpdatedAt:1718156635,formattedLastUpdatedAt:"Jun 12, 2024",sidebarPosition:1,frontMatter:{id:"terraform-provider",sidebar_position:1,sidebar_label:"Harvester Terraform Provider",title:"Harvester Terraform Provider"},sidebar:"api",previous:{title:"Harvester CSI Driver",permalink:"/v1.1/rancher/csi-driver"},next:{title:"Installation",permalink:"/v1.1/troubleshooting/index"}},l={},v=[{value:"Support Matrix",id:"support-matrix",level:2},{value:"Requirements",id:"requirements",level:2},{value:"Install The Provider",id:"install-the-provider",level:2},{value:"Using the provider",id:"using-the-provider",level:2}],p={toc:v},d="wrapper";function h(r){let{components:e,...t}=r;return(0,o.kt)(d,(0,a.Z)({},p,t,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("head",null,(0,o.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.2/terraform/terraform-provider"})),(0,o.kt)("h2",{id:"support-matrix"},"Support Matrix"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Harvester Version"),(0,o.kt)("th",{parentName:"tr",align:null},"Supported Terraform Provider Harvester"),(0,o.kt)("th",{parentName:"tr",align:null},"Supported Terraformer Harvester"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.1.2"},"v1.1.2")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.6.3"},"v0.6.3")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.1.1-harvester"},"v1.1.1-harvester"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.1.1"},"v1.1.1")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.6.3"},"v0.6.3")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.1.1-harvester"},"v1.1.1-harvester"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.1.0"},"v1.1.0")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.6.3"},"v0.6.3")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.1.1-harvester"},"v1.1.1-harvester"))),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/harvester/harvester/releases/tag/v1.0.3"},"v1.0.3")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraform-provider-harvester/releases/tag/v0.5.4"},"v0.5.4")),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"https://github.com/harvester/terraformer/releases/tag/v1.0.1-harvester"},"v1.0.1-harvester"))))),(0,o.kt)("h2",{id:"requirements"},"Requirements"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://www.terraform.io/downloads.html"},"Terraform")," >= 0.13.x"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://go.dev/doc/install"},"Go")," 1.18 to build the provider plugin")),(0,o.kt)("h2",{id:"install-the-provider"},"Install The Provider"),(0,o.kt)("p",null,"copy and paste this code into your Terraform configuration. Then, run ",(0,o.kt)("inlineCode",{parentName:"p"},"terraform init")," to initialize it."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-hcl"},'terraform {\n  required_providers {\n    harvester = {\n      source = "harvester/harvester"\n      version = "<replace to the latest release version>"\n    }\n  }\n}\n\nprovider "harvester" {\n  # Configuration options\n}\n')),(0,o.kt)("h2",{id:"using-the-provider"},"Using the provider"),(0,o.kt)("p",null,"More details about the provider-specific configurations can be found in the ",(0,o.kt)("a",{parentName:"p",href:"https://registry.terraform.io/providers/harvester/harvester/latest/docs"},"docs"),"."),(0,o.kt)("p",null,"Github Repo: ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/harvester/terraform-provider-harvester"},"https://github.com/harvester/terraform-provider-harvester")))}h.isMDXComponent=!0}}]);