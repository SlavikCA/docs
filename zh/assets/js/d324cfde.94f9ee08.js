"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[5970],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>u});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},h="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),h=p(n),c=a,u=h["".concat(l,".").concat(c)]||h[c]||m[c]||i;return n?r.createElement(u,o(o({ref:t},d),{},{components:n})):r.createElement(u,o({ref:t},d))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[h]="string"==typeof e?e:a,o[1]=s;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},85188:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const i={sidebar_position:4,sidebar_label:"PXE Boot Installation",title:"PXE Boot Installation",keywords:["Harvester","harvester","Rancher","rancher","Install Harvester","Installing Harvester","Harvester Installation","PXE Boot Install"],description:"Starting from version `0.2.0`, Harvester can be installed automatically. This document provides an example to do an automatic installation with PXE boot."},o=void 0,s={unversionedId:"install/pxe-boot-install",id:"version-v1.2/install/pxe-boot-install",title:"PXE Boot Installation",description:"Starting from version `0.2.0`, Harvester can be installed automatically. This document provides an example to do an automatic installation with PXE boot.",source:"@site/versioned_docs/version-v1.2/install/pxe-boot-install.md",sourceDirName:"install",slug:"/install/pxe-boot-install",permalink:"/zh/v1.2/install/pxe-boot-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/install/pxe-boot-install.md",tags:[],version:"v1.2",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"PXE Boot Installation",title:"PXE Boot Installation",keywords:["Harvester","harvester","Rancher","rancher","Install Harvester","Installing Harvester","Harvester Installation","PXE Boot Install"],description:"Starting from version `0.2.0`, Harvester can be installed automatically. This document provides an example to do an automatic installation with PXE boot."},sidebar:"tutorialSidebar",previous:{title:"USB Installation",permalink:"/zh/v1.2/install/usb-install"},next:{title:"Harvester Configuration",permalink:"/zh/v1.2/install/harvester-configuration"}},l={},p=[{value:"Prerequisite",id:"prerequisite",level:2},{value:"Preparing HTTP Servers",id:"preparing-http-servers",level:2},{value:"Preparing Boot Files",id:"preparing-boot-files",level:2},{value:"Preparing iPXE Boot Scripts",id:"preparing-ipxe-boot-scripts",level:2},{value:"CREATE Mode",id:"create-mode",level:3},{value:"JOIN Mode",id:"join-mode",level:3},{value:"DHCP Server Configuration",id:"dhcp-server-configuration",level:2},{value:"Harvester Configuration",id:"harvester-configuration",level:2},{value:"UEFI HTTP Boot support",id:"uefi-http-boot-support",level:2},{value:"Serve the iPXE Program",id:"serve-the-ipxe-program",level:3},{value:"DHCP Server Configuration",id:"dhcp-server-configuration-1",level:3},{value:"The iPXE Script for UEFI Boot",id:"the-ipxe-script-for-uefi-boot",level:3},{value:"Useful Kernel Parameters",id:"useful-kernel-parameters",level:2},{value:"<code>ip=dhcp</code>",id:"ipdhcp",level:3},{value:"<code>rd.net.dhcp.retry=&lt;cnt&gt;</code>",id:"rdnetdhcpretrycnt",level:3}],d={toc:p},h="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(h,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("head",null,(0,a.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/pxe-boot-install"})),(0,a.kt)("p",null,"Starting from version ",(0,a.kt)("inlineCode",{parentName:"p"},"0.2.0"),", Harvester can be installed automatically. This document provides an example to do an automatic installation with PXE boot."),(0,a.kt)("p",null,"We recommend using ",(0,a.kt)("a",{parentName:"p",href:"https://ipxe.org/"},"iPXE")," to perform the network boot. It has more features than the traditional PXE Boot program and is likely available in modern NIC cards. If the iPXE firmware is not available for your NIC card, the iPXE firmware images can be loaded from the TFTP server first."),(0,a.kt)("p",null,"To see sample iPXE scripts, please visit ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/ipxe-examples"},"Harvester iPXE Examples"),"."),(0,a.kt)("h2",{id:"prerequisite"},"Prerequisite"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"Nodes need to have at least ",(0,a.kt)("strong",{parentName:"p"},"8 GB")," of RAM because the installer loads the full ISO file into tmpfs.")),(0,a.kt)("h2",{id:"preparing-http-servers"},"Preparing HTTP Servers"),(0,a.kt)("p",null,"An HTTP server is required to serve boot files.\nLet's assume the NGINX HTTP server's IP is ",(0,a.kt)("inlineCode",{parentName:"p"},"10.100.0.10"),", and it serves the ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/")," directory with the path ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.100.0.10/"),"."),(0,a.kt)("h2",{id:"preparing-boot-files"},"Preparing Boot Files"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Download the required files from the ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/releases"},"Harvester releases page"),"."),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"The ISO: ",(0,a.kt)("inlineCode",{parentName:"li"},"harvester-<version>-amd64.iso")),(0,a.kt)("li",{parentName:"ul"},"The kernel: ",(0,a.kt)("inlineCode",{parentName:"li"},"harvester-<version>-vmlinuz-amd64")),(0,a.kt)("li",{parentName:"ul"},"The initrd: ",(0,a.kt)("inlineCode",{parentName:"li"},"harvester-<version>-initrd-amd64")),(0,a.kt)("li",{parentName:"ul"},"The rootfs squashfs image: ",(0,a.kt)("inlineCode",{parentName:"li"},"harvester-<version>-rootfs-amd64.squashfs")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Serve the files."),(0,a.kt)("p",{parentName:"li"},"  Copy or move the downloaded files to an appropriate location so they can be downloaded via the HTTP server. For example:"),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre"},"sudo mkdir -p /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-<version>-amd64.iso /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-<version>-vmlinuz-amd64 /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-<version>-initrd-amd64 /usr/share/nginx/html/harvester/\nsudo cp /path/to/harvester-<version>-rootfs-amd64.squashfs /usr/share/nginx/html/harvester/\n")))),(0,a.kt)("h2",{id:"preparing-ipxe-boot-scripts"},"Preparing iPXE Boot Scripts"),(0,a.kt)("p",null,"When performing an automatic installation, there are two modes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"CREATE"),": we are installing a node to construct an initial Harvester cluster."),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"JOIN"),": we are installing a node to join an existing Harvester cluster.")),(0,a.kt)("h3",{id:"create-mode"},"CREATE Mode"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Security Risks"),": The configuration file below contains credentials which should be kept secret. Please do not make the configuration file publicly accessible.")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.2/install/harvester-configuration"},"Harvester configuration file")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"config-create.yaml")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," mode. Modify the values as needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},"# cat /usr/share/nginx/html/harvester/config-create.yaml\nscheme_version: 1\ntoken: token # Replace with a desired token\nos:\n  hostname: node1 # Set a hostname. This can be omitted if DHCP server offers hostnames\n  ssh_authorized_keys:\n  - ssh-rsa ... # Replace with your public key\n  password: p@ssword     # Replace with your password\n  ntp_servers:\n  - 0.suse.pool.ntp.org\n  - 1.suse.pool.ntp.org\ninstall:\n  mode: create\n  management_interface: # available as of v1.1.0\n    interfaces:\n      - name: ens5\n    default_route: true\n    method: dhcp\n    bond_options:\n      mode: balance-tlb\n      miimon: 100\n  device: /dev/sda # The target disk to install\n#  data_disk: /dev/sdb # It is recommended to use a separate disk to store VM data\n  iso_url: http://10.100.0.10/harvester/harvester-<version>-amd64.iso\n#  tty: ttyS1,115200n8   # For machines without a VGA console\n\n  vip: 10.100.0.99        # The VIP to access the Harvester GUI. Make sure the IP is free to use\n  vip_mode: static        # Or dhcp, check configuration file for more information\n#  vip_hw_addr: 52:54:00:ec:0e:0b   # Leave empty when vip_mode is static\n")),(0,a.kt)("p",null,"For machines that needs to be installed using ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," mode, the following is an iPXE script that boots the kernel with the above config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!ipxe\nkernel harvester-<version>-vmlinuz ip=dhcp net.ifnames=1 rd.cos.disable rd.noverifyssl console=tty1 root=live:http://10.100.0.10/harvester/rootfs.squashfs harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-create.yaml\ninitrd harvester-<version>-initrd\nboot\n")),(0,a.kt)("p",null,"This assumes the iPXE script is stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/harvester/ipxe-create"),"."),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"If you have multiple network interfaces, you can leverage dracut's ",(0,a.kt)("inlineCode",{parentName:"p"},"ip=")," parameter to specify the booting interface and any other network configurations that dracut supports (e.g., ",(0,a.kt)("inlineCode",{parentName:"p"},"ip=eth1:dhcp"),").\nSee ",(0,a.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/dracut.cmdline.7.html"},(0,a.kt)("inlineCode",{parentName:"a"},"man dracut.cmdline"))," for more information."),(0,a.kt)("p",{parentName:"admonition"},"Use ",(0,a.kt)("inlineCode",{parentName:"p"},"ip=")," parameter to designate the booting interface only, as we only support ",(0,a.kt)("strong",{parentName:"p"},"one single ",(0,a.kt)("inlineCode",{parentName:"strong"},"ip=")," parameter"),".")),(0,a.kt)("h3",{id:"join-mode"},"JOIN Mode"),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},(0,a.kt)("strong",{parentName:"p"},"Security Risks"),": The configuration file below contains credentials which should be kept secret. Please do not make the configuration file publicly accessible.")),(0,a.kt)("p",null,"Create a ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.2/install/harvester-configuration"},"Harvester configuration file")," called ",(0,a.kt)("inlineCode",{parentName:"p"},"config-join.yaml")," for ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN")," mode. Modify the values as needed:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-YAML"},'# cat /usr/share/nginx/html/harvester/config-join.yaml\nscheme_version: 1\nserver_url: https://10.100.0.99:443  # Should be the VIP set up in "CREATE" config\ntoken: token\nos:\n  hostname: node2\n  ssh_authorized_keys:\n    - ssh-rsa ... # Replace with your public key\n  password: p@ssword     # Replace with your password\n  dns_nameservers:\n  - 1.1.1.1\n  - 8.8.8.8\ninstall:\n  mode: join\n  management_interface: # available as of v1.1.0\n    interfaces:\n      - name: ens5\n    default_route: true\n    method: dhcp\n    bond_options:\n      mode: balance-tlb\n      miimon: 100\n  device: /dev/sda # The target disk to install\n#  data_disk: /dev/sdb # It is recommended to use a separate disk to store VM data\n  iso_url: http://10.100.0.10/harvester/harvester-<version>-amd64.iso\n#  tty: ttyS1,115200n8   # For machines without a VGA console\n')),(0,a.kt)("p",null,"Note that the ",(0,a.kt)("inlineCode",{parentName:"p"},"mode")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"join")," and the ",(0,a.kt)("inlineCode",{parentName:"p"},"server_url")," needs to be provided."),(0,a.kt)("p",null,"For machines that needs to be installed in ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN")," mode, the following is an iPXE script that boots the kernel with the above config:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!ipxe\nkernel harvester-<version>-vmlinuz ip=dhcp net.ifnames=1 rd.cos.disable rd.noverifyssl console=tty1 root=live:http://10.100.0.10/harvester/rootfs.squashfs harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-join.yaml\ninitrd harvester-<version>-initrd\nboot\n")),(0,a.kt)("p",null,"This assumes the iPXE script is stored in ",(0,a.kt)("inlineCode",{parentName:"p"},"/usr/share/nginx/html/harvester/ipxe-join"),"."),(0,a.kt)("h2",{id:"dhcp-server-configuration"},"DHCP Server Configuration"),(0,a.kt)("admonition",{type:"note"},(0,a.kt)("p",{parentName:"admonition"},"In the PXE installation scenario, you are required to add the ",(0,a.kt)("em",{parentName:"p"},"routers")," option (",(0,a.kt)("inlineCode",{parentName:"p"},"option routers"),") when configuring the DHCP server. This option is used to add the default route on the Harvester host. Without the default route, the node will fail to start."),(0,a.kt)("p",{parentName:"admonition"},"In the ISO installation scenario, when the management network interface is in DHCP mode, you are also required to add the ",(0,a.kt)("em",{parentName:"p"},"routers")," option (",(0,a.kt)("inlineCode",{parentName:"p"},"option routers"),") when configuring the DHCP server."),(0,a.kt)("p",{parentName:"admonition"},"For example:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre"},"    Harvester Host:~ # ip route\n    default via 192.168.122.1 dev mgmt-br proto dhcp\n")),(0,a.kt)("p",{parentName:"admonition"},"For more information, see ",(0,a.kt)("a",{parentName:"p",href:"http://www.ipamworldwide.com/ipam/isc-dhcpv4-options.html"},"ISC DHCPv4 Option Configuration"),".")),(0,a.kt)("p",null,"The following is an example of how to configure the ISC DHCP server to offer iPXE scripts:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'option architecture-type code 93 = unsigned integer 16;\n\nsubnet 10.100.0.0 netmask 255.255.255.0 {\n    option routers 10.100.0.10;\n        option domain-name-servers 192.168.2.1;\n    range 10.100.0.100 10.100.0.253;\n}\n\ngroup {\n  # create group\n  if exists user-class and option user-class = "iPXE" {\n    # iPXE Boot\n    if option architecture-type = 00:07 {\n      filename "http://10.100.0.10/harvester/ipxe-create-efi";\n    } else {\n      filename "http://10.100.0.10/harvester/ipxe-create";\n    }\n  } else {\n    # PXE Boot\n    if option architecture-type = 00:07 {\n      # UEFI\n      filename "ipxe.efi";\n    } else {\n      # Non-UEFI\n      filename "undionly.kpxe";\n    }\n  }\n\n  host node1 { hardware ethernet 52:54:00:6b:13:e2; }\n}\n\ngroup {\n  # join group\n  if exists user-class and option user-class = "iPXE" {\n    # iPXE Boot\n    if option architecture-type = 00:07 {\n      filename "http://10.100.0.10/harvester/ipxe-join-efi";\n    } else {\n      filename "http://10.100.0.10/harvester/ipxe-join";\n    }\n  } else {\n    # PXE Boot\n    if option architecture-type = 00:07 {\n      # UEFI\n      filename "ipxe.efi";\n    } else {\n      # Non-UEFI\n      filename "undionly.kpxe";\n    }\n  }\n\n  host node2 { hardware ethernet 52:54:00:69:d5:92; }\n}\n')),(0,a.kt)("p",null,"The config file declares a subnet and two groups. The first group is for hosts to boot using ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," mode and the other one is for ",(0,a.kt)("inlineCode",{parentName:"p"},"JOIN")," mode. By default, the iPXE path is chosen, but if it sees a PXE client it offers the iPXE image according to the client architecture. Please prepare those images and a TFTP server first."),(0,a.kt)("h2",{id:"harvester-configuration"},"Harvester Configuration"),(0,a.kt)("p",null,"For more information about Harvester configuration, please refer to the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.2/install/harvester-configuration"},"Harvester configuration")," page."),(0,a.kt)("p",null,"By default, the first node will be the management node of the cluster. When there are 3 nodes, the other 2 nodes added first are automatically promoted to management nodes to form an HA cluster."),(0,a.kt)("p",null,"If you want to promote management nodes from different zones, you can add the node label ",(0,a.kt)("inlineCode",{parentName:"p"},"topology.kubernetes.io/zone")," in the ",(0,a.kt)("a",{parentName:"p",href:"/zh/v1.2/install/harvester-configuration#oslabels"},"os.labels")," config. In this case, at least three different zones are required."),(0,a.kt)("p",null,"Users can also provide configuration via kernel parameters. For example, to specify the ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," install mode, users can pass the ",(0,a.kt)("inlineCode",{parentName:"p"},"harvester.install.mode=create")," kernel parameter when booting. Values passed through kernel parameters have higher priority than values specified in the config file."),(0,a.kt)("h2",{id:"uefi-http-boot-support"},"UEFI HTTP Boot support"),(0,a.kt)("p",null,"UEFI firmware supports loading a boot image from an HTTP server. This section demonstrates how to use UEFI HTTP boot to load the iPXE program and perform an automatic installation."),(0,a.kt)("h3",{id:"serve-the-ipxe-program"},"Serve the iPXE Program"),(0,a.kt)("p",null,"Download the iPXE UEFI program from ",(0,a.kt)("a",{parentName:"p",href:"http://boot.ipxe.org/ipxe.efi"},"http://boot.ipxe.org/ipxe.efi")," and make sure ",(0,a.kt)("inlineCode",{parentName:"p"},"ipxe.efi")," can be downloaded from the HTTP server. For example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd /usr/share/nginx/html/harvester/\nwget http://boot.ipxe.org/ipxe.efi\n")),(0,a.kt)("p",null,"The file now can be downloaded from ",(0,a.kt)("a",{parentName:"p",href:"http://10.100.0.10/harvester/ipxe.efi"},"http://10.100.0.10/harvester/ipxe.efi")," locally."),(0,a.kt)("h3",{id:"dhcp-server-configuration-1"},"DHCP Server Configuration"),(0,a.kt)("p",null,"If the user plans to use the UEFI HTTP boot feature by getting a dynamic IP first, the DHCP server needs to provide the iPXE program URL when it sees such a request. The following is an updated ISC DHCP server group example:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},'group {\n  # create group\n  if exists user-class and option user-class = "iPXE" {\n    # iPXE Boot\n    if option architecture-type = 00:07 {\n      filename "http://10.100.0.10/harvester/ipxe-create-efi";\n    } else {\n      filename "http://10.100.0.10/harvester/ipxe-create";\n    }\n  } elsif substring (option vendor-class-identifier, 0, 10) = "HTTPClient" {\n    # UEFI HTTP Boot\n    option vendor-class-identifier "HTTPClient";\n    filename "http://10.100.0.10/harvester/ipxe.efi";\n  } else {\n    # PXE Boot\n    if option architecture-type = 00:07 {\n      # UEFI\n      filename "ipxe.efi";\n    } else {\n      # Non-UEFI\n      filename "undionly.kpxe";\n    }\n  }\n\n  host node1 { hardware ethernet 52:54:00:6b:13:e2; }\n}\n')),(0,a.kt)("p",null,"The ",(0,a.kt)("inlineCode",{parentName:"p"},"elsif substring")," statement is new, and it offers ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.100.0.10/harvester/ipxe.efi")," when it sees a UEFI HTTP boot DHCP request. After the client fetches the iPXE program and runs it, the iPXE program will send a DHCP request again and load the iPXE script from the URL ",(0,a.kt)("inlineCode",{parentName:"p"},"http://10.100.0.10/harvester/ipxe-create-efi"),"."),(0,a.kt)("h3",{id:"the-ipxe-script-for-uefi-boot"},"The iPXE Script for UEFI Boot"),(0,a.kt)("p",null,"It's mandatory to specify the initrd image for UEFI boot in the kernel parameters. The following is an updated version of iPXE script for ",(0,a.kt)("inlineCode",{parentName:"p"},"CREATE")," mode."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"#!ipxe\nkernel harvester-<version>-vmlinuz initrd=harvester-<version>-initrd ip=dhcp net.ifnames=1 rd.cos.disable rd.noverifyssl console=tty1 root=live:http://10.100.0.10/harvester/rootfs.squashfs harvester.install.automatic=true harvester.install.config_url=http://10.100.0.10/harvester/config-create.yaml\ninitrd harvester-<version>-initrd\nboot\n")),(0,a.kt)("p",null,"The parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"initrd=harvester-<version>-initrd")," is required."),(0,a.kt)("h2",{id:"useful-kernel-parameters"},"Useful Kernel Parameters"),(0,a.kt)("p",null,"Besides the Harvester configuration, you can also specify other kernel parameters that are useful in different scenarios.\nSee also ",(0,a.kt)("a",{parentName:"p",href:"https://man7.org/linux/man-pages/man7/dracut.cmdline.7.html"},"dracut.cmdline(7)"),"."),(0,a.kt)("h3",{id:"ipdhcp"},(0,a.kt)("inlineCode",{parentName:"h3"},"ip=dhcp")),(0,a.kt)("p",null,"If you have multiple network interfaces, you could add the ",(0,a.kt)("inlineCode",{parentName:"p"},"ip=dhcp")," parameter to get IP from the DHCP server from all interfaces."),(0,a.kt)("h3",{id:"rdnetdhcpretrycnt"},(0,a.kt)("inlineCode",{parentName:"h3"},"rd.net.dhcp.retry=<cnt>")),(0,a.kt)("p",null,"Failing to get IP from the DHCP server would cause iPXE booting to fail. You can add parameter ",(0,a.kt)("inlineCode",{parentName:"p"},"rd.net.dhcp.retry=<cnt>"),"\nto retry DHCP request for ",(0,a.kt)("inlineCode",{parentName:"p"},"<cnt>")," times."))}m.isMDXComponent=!0}}]);