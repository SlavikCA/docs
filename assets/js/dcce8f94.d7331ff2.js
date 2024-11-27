"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[28351],{17876:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>c,frontMatter:()=>r,metadata:()=>s,toc:()=>o});a(67294);var n=a(3905);const r={id:"image-security",sidebar_position:2,sidebar_label:"Image Security",title:"Image Security",keywords:["Harvester","harvester","Rancher","rancher","Image Security"]},i=void 0,s={unversionedId:"image/image-security",id:"image/image-security",title:"Image Security",description:"Available as of v1.4.0",source:"@site/docs/image/image-security.md",sourceDirName:"image",slug:"/image/image-security",permalink:"/v1.4/image/image-security",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/docs/image/image-security.md",tags:[],version:"current",lastUpdatedAt:1732665401,formattedLastUpdatedAt:"Nov 26, 2024",sidebarPosition:2,frontMatter:{id:"image-security",sidebar_position:2,sidebar_label:"Image Security",title:"Image Security",keywords:["Harvester","harvester","Rancher","rancher","Image Security"]},sidebar:"api",previous:{title:"Upload Images",permalink:"/v1.4/image/upload-image"},next:{title:"Cluster Network",permalink:"/v1.4/networking/index"}},p={},o=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Encrypt a Virtual Machine Image",id:"encrypt-a-virtual-machine-image",level:2},{value:"Decrypt a Virtual Machine Image",id:"decrypt-a-virtual-machine-image",level:2},{value:"Use an Image with Encrypted Volumes",id:"use-an-image-with-encrypted-volumes",level:2},{value:"Advanced Usage with Rancher Integration",id:"advanced-usage-with-rancher-integration",level:2},{value:"Limitations",id:"limitations",level:2}],l={toc:o},m="wrapper";function c({components:e,...t}){return(0,n.kt)(m,{...l,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.4/image/image-security"})),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.4.0")),(0,n.kt)("p",null,"Harvester v1.4.0 and later versions allow you to encrypt and decrypt virtual machine images. The encryption mechanism utilizes the Linux kernel module dm_crypt and the command-line utility cryptsetup."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"Prepare the following resources:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Source virtual machine image: You can ",(0,n.kt)("a",{parentName:"p",href:"./upload-image"},"upload or create an image")," using any of the supported methods."),(0,n.kt)("admonition",{parentName:"li",type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Do not upload an encrypted image."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"Secret: A Kubernetes secret is used as the passphrase of dm_crypt. You must specify the value of the ",(0,n.kt)("inlineCode",{parentName:"p"},"CRYPTO_KEY_VALUE")," field. All other fields are fixed."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(16434).Z,width:"2219",height:"1285"})),(0,n.kt)("p",{parentName:"li"},"Example of a secret:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1\nkind: Secret\nmetadata:\n  name: encryption\n  namespace: default\ndata:\n  CRYPTO_KEY_CIPHER: aes-xts-plain64\n  CRYPTO_KEY_HASH: sha256\n  CRYPTO_KEY_PROVIDER: secret\n  CRYPTO_KEY_SIZE: 256\n  CRYPTO_KEY_VALUE: "Your encryption passphrase"\n  CRYPTO_PBKDF: argon2i\n')),(0,n.kt)("admonition",{parentName:"li",title:"important",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can create a secret in the system namespace using kubectl or the Harvester UI (",(0,n.kt)("strong",{parentName:"p"},"Edit as YAML")," feature). Resources in the system namespace are not displayed on the Harvester UI ",(0,n.kt)("strong",{parentName:"p"},"Secrets")," screen."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"StorageClass: Images are encrypted using Longhorn, so required fields must be passed to the Longhorn CSI Driver. You can specify the encryption secret when creating a StorageClass. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"./upload-image#image-storageclass"},"Image StorageClass"),". "),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(11394).Z,width:"2126",height:"1280"})),(0,n.kt)("p",{parentName:"li"},"Example of a StorageClass:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre",className:"language-yaml"},'allowVolumeExpansion: true\napiVersion: storage.k8s.io/v1\nkind: StorageClass\nmetadata:\n  name: encryption\nparameters:\n  csi.storage.k8s.io/node-publish-secret-name: encryption\n  csi.storage.k8s.io/node-publish-secret-namespace: default\n  csi.storage.k8s.io/node-stage-secret-name: encryption\n  csi.storage.k8s.io/node-stage-secret-namespace: default\n  csi.storage.k8s.io/provisioner-secret-name: encryption\n  csi.storage.k8s.io/provisioner-secret-namespace: default\n  encrypted: "true"\n  migratable: "true"\n  numberOfReplicas: "3"\n  staleReplicaTimeout: "2880"\nprovisioner: driver.longhorn.io\nreclaimPolicy: Delete\nvolumeBindingMode: Immediate\n')),(0,n.kt)("admonition",{parentName:"li",title:"important",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You can create a secret in the system namespace using the Harvester UI (",(0,n.kt)("strong",{parentName:"p"},"Edit as YAML")," feature) and kubectl. Resources in the system namespace are not displayed on the Harvester UI ",(0,n.kt)("strong",{parentName:"p"},"Secrets")," screen.")))),(0,n.kt)("h2",{id:"encrypt-a-virtual-machine-image"},"Encrypt a Virtual Machine Image"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Harvester UI, go to ",(0,n.kt)("strong",{parentName:"p"},"Images"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Specify a namespace and a name.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Basics")," tab, select ",(0,n.kt)("strong",{parentName:"p"},"Encrypt")," and then select a source image."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(18782).Z,width:"2129",height:"698"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Storage")," tab, select a StorageClass that includes encryption-related fields. "),(0,n.kt)("p",{parentName:"li"},"Harvester passes the required fields to Longhorn."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(70033).Z,width:"2310",height:"726"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."))),(0,n.kt)("h2",{id:"decrypt-a-virtual-machine-image"},"Decrypt a Virtual Machine Image"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the Harvester UI, go to ",(0,n.kt)("strong",{parentName:"p"},"Images"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),".")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Specify a namespace and a name.")),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Basics")," tab, select ",(0,n.kt)("strong",{parentName:"p"},"Decrypt")," and then select a source image."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(35021).Z,width:"2134",height:"683"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"On the ",(0,n.kt)("strong",{parentName:"p"},"Storage")," tab, select ",(0,n.kt)("strong",{parentName:"p"},"harvester-longhorn (Default)")," or another commonly used StorageClass."),(0,n.kt)("p",{parentName:"li"},"Harvester uses the StorageClass of the source image that you want to decrypt."),(0,n.kt)("p",{parentName:"li"},(0,n.kt)("img",{src:a(97364).Z,width:"2314",height:"698"}))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Click ",(0,n.kt)("strong",{parentName:"p"},"Create"),"."))),(0,n.kt)("h2",{id:"use-an-image-with-encrypted-volumes"},"Use an Image with Encrypted Volumes"),(0,n.kt)("p",null,"You must select the image that you want to use when creating a virtual machine."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(93675).Z,width:"2216",height:"1044"})),(0,n.kt)("p",null,"The ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines")," screen displays the following icons and messages when volumes used by virtual machines are encrypted."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(4353).Z,width:"966",height:"366"})),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(84630).Z,width:"958",height:"366"})),(0,n.kt)("p",null,"To determine which volumes are encrypted, check the ",(0,n.kt)("strong",{parentName:"p"},"Volumes")," tab on the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machine")," details screen."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(65424).Z,width:"2124",height:"933"})),(0,n.kt)("h2",{id:"advanced-usage-with-rancher-integration"},"Advanced Usage with Rancher Integration"),(0,n.kt)("p",null,"The secret is an unencrypted Base64-encoded string. To keep the secret safe, you can use projects and namespaces to isolate permissions. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"../rancher/virtualization-management#multi-tenancy"},"Multi-Tenancy"),"."),(0,n.kt)("h2",{id:"limitations"},"Limitations"),(0,n.kt)("p",null,"You cannot perform the following actions:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Export a new image from an encrypted image"),(0,n.kt)("li",{parentName:"ul"},"Download an encrypted image"),(0,n.kt)("li",{parentName:"ul"},"Upload an encrypted image")))}c.isMDXComponent=!0},4353:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/case1-479adb1fb1501b35db19c356aaa831ce.png"},84630:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/case2-65bdfabf3f4f202111d00acb2988c2fc.png"},35021:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-decrypted-image-81a4aec9152e699ff1e66fdc7ff3764b.png"},18782:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-encrypted-image-4867a2f4aa4c9941f8d7bc5bb86a2752.png"},16434:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-encryption-used-secret-b44633a2b959564b479b342138f46bbc.png"},11394:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-storage-class-dee441e12088cf661423b606809464f3.png"},93675:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-cccf9676e218a0be40d3998b3a0c4168.png"},70033:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-encryption-storage-class-a007d164193f470167650612e917fa8d.png"},97364:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/select-normal-storage-class-ab85bd14ce1343f9c6fa581b2ce62219.png"},65424:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/volume-detail-c4ca97a7ef0b846c62655746181ffcc4.png"}}]);