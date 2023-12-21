"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[3511],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=n,h=m["".concat(l,".").concat(d)]||m[d]||u[d]||i;return a?r.createElement(h,o(o({ref:t},p),{},{components:a})):r.createElement(h,o({ref:t},p))}));function h(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=d;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[m]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}d.displayName="MDXCreateElement"},30609:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const i={sidebar_position:2,sidebar_label:"Virtualization Management",title:"Virtualization Management",keywords:["Harvester","Rancher"]},o=void 0,s={unversionedId:"rancher/virtualization-management",id:"version-v0.3/rancher/virtualization-management",title:"Virtualization Management",description:"For Harvester v0.3.0 and above, virtualization management with the multi-cluster management feature will be supported using Rancher v2.6.x.",source:"@site/versioned_docs/version-v0.3/rancher/virtualization-management.md",sourceDirName:"rancher",slug:"/rancher/virtualization-management",permalink:"/v0.3/rancher/virtualization-management",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v0.3/rancher/virtualization-management.md",tags:[],version:"v0.3",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Virtualization Management",title:"Virtualization Management",keywords:["Harvester","Rancher"]},sidebar:"tutorialSidebar",previous:{title:"Rancher Integration",permalink:"/v0.3/rancher/rancher-integration"},next:{title:"Harvester Node Driver",permalink:"/v0.3/rancher/node/node-driver"}},l={},c=[{value:"Multi-Tenancy",id:"multi-tenancy",level:2},{value:"Multi-Tenancy Example",id:"multi-tenancy-example",level:3},{value:"Delete Imported Harvester Cluster",id:"delete-imported-harvester-cluster",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...i}=e;return(0,n.kt)(m,(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/rancher/virtualization-management"})),(0,n.kt)("p",null,"For Harvester v0.3.0 and above, virtualization management with the multi-cluster management feature will be supported using Rancher v2.6.x."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First, you will need to install Rancher v2.6.1 or above. For testing purposes, you can spin up a Rancher server using the following ",(0,n.kt)("inlineCode",{parentName:"li"},"docker run")," command: ",(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ sudo docker run -d --restart=unless-stopped -p 80:80 -p 443:443 --privileged rancher/rancher:v2.6.2\n")))),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"For a production environment setup, please refer to the official Rancher ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/quick-start-guide/deployment/"},"docs"),".")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Once the Rancher server is up and running, log in and click the hamburger menu and choose the ",(0,n.kt)("strong",{parentName:"li"},"Virtualization Management")," tab. Select ",(0,n.kt)("strong",{parentName:"li"},"Import Existing")," to import the downstream Harvester cluster into the Rancher server.\n",(0,n.kt)("img",{src:a(40603).Z,width:"1848",height:"724"})),(0,n.kt)("li",{parentName:"ol"},"Specify the ",(0,n.kt)("inlineCode",{parentName:"li"},"Cluster Name")," and click ",(0,n.kt)("strong",{parentName:"li"},"Create"),". You will then see the registration commands; copy the appropriate command and ssh to one of the Harvester management nodes to run this command accordingly.\n",(0,n.kt)("img",{src:a(67022).Z,width:"2190",height:"902"})),(0,n.kt)("li",{parentName:"ol"},"Once the agent node is ready, you should be able to view and access the imported Harvester cluster from the Rancher server and manage your VMs accordingly.\n",(0,n.kt)("img",{src:a(24551).Z,width:"2559",height:"801"})),(0,n.kt)("li",{parentName:"ol"},"From the Harvester UI, you can click the hamburger menu to navigate back to the Rancher multi-cluster management page.\n",(0,n.kt)("img",{src:a(32173).Z,width:"2555",height:"1222"}))),(0,n.kt)("h2",{id:"multi-tenancy"},"Multi-Tenancy"),(0,n.kt)("p",null,"In Harvester, we have leveraged the existing Rancher ",(0,n.kt)("a",{parentName:"p",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/"},"RBAC authorization")," such that users can view and manage a set of resources based on their cluster and project role permissions."),(0,n.kt)("p",null,"Within Rancher, each person authenticates as a user, which is a login that grants a user access to Rancher. As mentioned in ",(0,n.kt)("a",{parentName:"p",href:"https://ranchermanager.docs.rancher.com/v2.6/pages-for-subheaders/authentication-config"},"Authentication"),", users can either be local or external."),(0,n.kt)("p",null,"Once the user logs into Rancher, their authorization, also known as access rights, is determined by global permissions and cluster and project roles."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/global-permissions/"},(0,n.kt)("strong",{parentName:"a"},"Global Permissions")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Define user authorization outside the scope of any particular cluster."))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://rancher.com/docs/rancher/v2.6/en/admin-settings/rbac/cluster-project-roles/"},(0,n.kt)("strong",{parentName:"a"},"Cluster and Project Roles")),":",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Define user authorization inside the specific cluster or project where users are assigned the role.")))),(0,n.kt)("p",null,"Both global permissions and cluster and project roles are implemented on top of ",(0,n.kt)("a",{parentName:"p",href:"https://kubernetes.io/docs/reference/access-authn-authz/rbac/"},"Kubernetes RBAC"),". Therefore, enforcement of permissions and roles is performed by Kubernetes."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A cluster owner has full control over the cluster and all resources inside it, e.g., hosts, VMs, volumes, images, networks, backups, and settings."),(0,n.kt)("li",{parentName:"ul"},"A project user can be assigned to a specific project with permission to manage the resources inside the project.")),(0,n.kt)("h3",{id:"multi-tenancy-example"},"Multi-Tenancy Example"),(0,n.kt)("p",null,"The following example provides a good explanation of how the multi-tenant feature works:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"First, add new users via the Rancher ",(0,n.kt)("inlineCode",{parentName:"li"},"Users & Authentication")," page. Then click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create")," to add two new separated users, such as ",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," and ",(0,n.kt)("inlineCode",{parentName:"li"},"project-readonly")," respectively.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," is a user with permission to manage a list of resources of a particular project, e.g., the default project."),(0,n.kt)("li",{parentName:"ul"},"A ",(0,n.kt)("inlineCode",{parentName:"li"},"project-readonly")," is a user with read-only permission of a particular project, e.g., the default project.\n",(0,n.kt)("img",{src:a(28816).Z,width:"2556",height:"1159"})))),(0,n.kt)("li",{parentName:"ol"},"Click one of the imported Harvester clusters after navigating to the Harvester UI.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Projects/Namespaces")," tab."),(0,n.kt)("li",{parentName:"ul"},"Select a project such as ",(0,n.kt)("inlineCode",{parentName:"li"},"default")," and click the ",(0,n.kt)("inlineCode",{parentName:"li"},"Edit Config")," menu to assign the users to this project with appropriate permissions. For example, the ",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," user will be assigned the project owner role.\n",(0,n.kt)("img",{src:a(96403).Z,width:"897",height:"733"})))),(0,n.kt)("li",{parentName:"ol"},"Continue to add the ",(0,n.kt)("inlineCode",{parentName:"li"},"project-readonly")," user to the same project with read-only permissions and click ",(0,n.kt)("strong",{parentName:"li"},"Save"),".\n",(0,n.kt)("img",{src:a(74193).Z,width:"2559",height:"947"})),(0,n.kt)("li",{parentName:"ol"},"Open an incognito browser and log in as ",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner"),"."),(0,n.kt)("li",{parentName:"ol"},"After logging in as the ",(0,n.kt)("inlineCode",{parentName:"li"},"project-owner")," user, click the ",(0,n.kt)("strong",{parentName:"li"},"Virtualization Management")," tab. There you should be able to view the cluster to which you have been assigned."),(0,n.kt)("li",{parentName:"ol"},"Click the ",(0,n.kt)("strong",{parentName:"li"},"Images")," tab to view a list of images previously uploaded to the harvester-public namespace. You can also upload your own image if needed."),(0,n.kt)("li",{parentName:"ol"},"Create a VM with one of the images that you have uploaded."),(0,n.kt)("li",{parentName:"ol"},"Log in with another user, e.g., ",(0,n.kt)("inlineCode",{parentName:"li"},"project-readonly"),", and this user will only have the read permission of this project.")),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"A known issue was found that allows the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/1406"},"read-only user to be able to manage API actions"),".")),(0,n.kt)("h2",{id:"delete-imported-harvester-cluster"},"Delete Imported Harvester Cluster"),(0,n.kt)("p",null,"Users can delete the imported Harvester cluster from the Rancher UI via ",(0,n.kt)("strong",{parentName:"p"},"Virtualization Management > Harvester Clusters"),". Select the cluster you want to remove and click the ",(0,n.kt)("strong",{parentName:"p"},"Delete")," button to delete the imported Harvester cluster."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"delete-cluster",src:a(93981).Z,width:"3578",height:"1638"})),(0,n.kt)("admonition",{type:"caution"},(0,n.kt)("p",{parentName:"admonition"},"Please do not run the ",(0,n.kt)("inlineCode",{parentName:"p"},"kubectl delete -f ...")," command to delete the imported Harvester cluster as it will remove the entire ",(0,n.kt)("inlineCode",{parentName:"p"},"cattle-system")," namespace which is required of the Harvester cluster.")))}u.isMDXComponent=!0},96403:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/add-member-943f18a8d8aab0377ddf8c74d15a44a4.png"},74193:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/added-user-74f30dba0c2ea1936837d3ebfa781335.png"},28816:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/create-user-9b8348a8edeeff5ea8537ea4739df041.png"},93981:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/delete-harvester-cluster-d4571d1521fa3e2b3bb4078d456bc481.png"},32173:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/harv-back-c989871813d3966b8175840c417c0396.png"},24551:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/harv-cluster-view-066656890fd03300b5964da81dd0b079.png"},67022:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/harv-importing-c728d9a8d8a4009e1c67312ef654814d.png"},40603:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/vm-menu-9370f3a907e8bc5e4c78f2cf3ac17184.png"}}]);