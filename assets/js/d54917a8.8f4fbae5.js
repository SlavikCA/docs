"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[80134],{12225:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>l,contentTitle:()=>o,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>r});a(67294);var i=a(3905);const n={sidebar_position:3,sidebar_label:"USB Installation",title:"USB Installation"},o=void 0,s={unversionedId:"install/usb-install",id:"version-v1.3/install/usb-install",title:"USB Installation",description:"Create a bootable USB flash drive",source:"@site/versioned_docs/version-v1.3/install/usb-install.md",sourceDirName:"install",slug:"/install/usb-install",permalink:"/v1.3/install/usb-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.3/install/usb-install.md",tags:[],version:"v1.3",lastUpdatedAt:1730768941,formattedLastUpdatedAt:"Nov 5, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"USB Installation",title:"USB Installation"},sidebar:"api",previous:{title:"ISO Installation",permalink:"/v1.3/install/index"},next:{title:"PXE Boot Installation",permalink:"/v1.3/install/pxe-boot-install"}},l={},r=[{value:"Create a bootable USB flash drive",id:"create-a-bootable-usb-flash-drive",level:2},{value:"Rufus",id:"rufus",level:3},{value:"balenaEtcher",id:"balenaetcher",level:3},{value:"<code>dd</code> command",id:"dd-command",level:3},{value:"Known issues",id:"known-issues",level:2},{value:"A <code>GRUB _</code> text is displayed, but nothing happens when booting from a USB installation flash drive",id:"a-grub-_-text-is-displayed-but-nothing-happens-when-booting-from-a-usb-installation-flash-drive",level:3},{value:"Graphics issue",id:"graphics-issue",level:3},{value:"Harvester installer is not displayed",id:"harvester-installer-is-not-displayed",level:3},{value:"Harvester interactive ISO hangs with the USB installation method",id:"harvester-interactive-iso-hangs-with-the-usb-installation-method",level:3},{value:"Workaround",id:"workaround",level:4}],d={toc:r},h="wrapper";function p({components:e,...t}){return(0,i.kt)(h,{...d,...t,components:e,mdxType:"MDXLayout"},(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/usb-install"})),(0,i.kt)("h2",{id:"create-a-bootable-usb-flash-drive"},"Create a bootable USB flash drive"),(0,i.kt)("p",null,"There are a couple of ways to create a USB installation flash drive."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},(0,i.kt)("strong",{parentName:"p"},"Known Issue:")," For the v1.2.0 ISO image, there is a known ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/4510"},"issue")," where the interactive ISO installation will get stuck using the USB method."),(0,i.kt)("p",{parentName:"admonition"},"To resolve this, you can use the patched ",(0,i.kt)("a",{parentName:"p",href:"https://releases.rancher.com/harvester/v1.2.0/harvester-v1.2.0-patch1-amd64.iso"},"ISO"),". This patched version only corrects the partition label, and there are no other changes. You can also use the related sha512 ",(0,i.kt)("a",{parentName:"p",href:"https://releases.rancher.com/harvester/v1.2.0/harvester-v1.2.0-patch1-amd64.iso.sha512sum"},"file")," to verify the ISO."),(0,i.kt)("p",{parentName:"admonition"},"Refer to the ",(0,i.kt)("a",{parentName:"p",href:"#harvester-interactive-iso-hangs-with-the-usb-installation-method"},"Harvester interactive ISO hangs with the USB installation method")," for details and a workaround."),(0,i.kt)("p",{parentName:"admonition"},"No matter which tool you use, creating a bootable device erases your USB device data. Please back up all data on your USB device before making a bootable device.")),(0,i.kt)("h3",{id:"rufus"},"Rufus"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://rufus.ie/"},"Rufus")," allows you to create an ISO image on your USB flash drive on a Windows computer."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Open Rufus and insert a clean USB stick into your computer.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Rufus automatically detects your USB. Select the USB device you want to use from the ",(0,i.kt)("strong",{parentName:"p"},"Device")," drop-down menu.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"For ",(0,i.kt)("strong",{parentName:"p"},"Boot Selection"),", choose ",(0,i.kt)("strong",{parentName:"p"},"Select")," and find the Harvester installation ISO image you want to burn onto the USB."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"rufus.png",src:a(35239).Z,width:"696",height:"1054"})),(0,i.kt)("admonition",{parentName:"li",type:"info"},(0,i.kt)("p",{parentName:"admonition"},"If using older versions of Rufus, both ",(0,i.kt)("inlineCode",{parentName:"p"},"DD mode")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"ISO mode")," works. ",(0,i.kt)("inlineCode",{parentName:"p"},"DD mode")," works just like the ",(0,i.kt)("inlineCode",{parentName:"p"},"dd")," command in Linux, and you can't browse partitions after you create a bootable device. ",(0,i.kt)("inlineCode",{parentName:"p"},"ISO mode")," creates partitions on your device automatically and copies files to these partitions, and you can browse these partitions even after you create a bootable device.")))),(0,i.kt)("h3",{id:"balenaetcher"},"balenaEtcher"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"balenaEtcher")," supports writing an image to a USB flash drive on most Linux distros, macOS, and Windows. It has a GUI and is easy to use."),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the Harvester installation ISO.")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},"Select the target USB device to create a USB installation flash drive."),(0,i.kt)("p",{parentName:"li"},(0,i.kt)("img",{alt:"balena-etcher.png",src:a(41427).Z,width:"1609",height:"955"})))),(0,i.kt)("h3",{id:"dd-command"},(0,i.kt)("inlineCode",{parentName:"h3"},"dd")," command"),(0,i.kt)("p",null,"You can use the 'dd' command on Linux or other platforms to create a USB installation flash drive. Ensure you choose the correct device; the following command erases data on the selected device."),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# sudo dd if=<path_to_iso> of=<path_to_usb_device> bs=64k\n")),(0,i.kt)("h2",{id:"known-issues"},"Known issues"),(0,i.kt)("h3",{id:"a-grub-_-text-is-displayed-but-nothing-happens-when-booting-from-a-usb-installation-flash-drive"},"A ",(0,i.kt)("inlineCode",{parentName:"h3"},"GRUB _")," text is displayed, but nothing happens when booting from a USB installation flash drive"),(0,i.kt)("p",null,"If you use the UEFI mode, try to boot from the UEFI boot partition on the USB device rather than the USB device itself. For example, select the ",(0,i.kt)("inlineCode",{parentName:"p"},"UEFI: USB disk 3.0 PMAP, Partition 1")," to boot. The representation varies from system to system."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(5304).Z,width:"730",height:"492"})),(0,i.kt)("h3",{id:"graphics-issue"},"Graphics issue"),(0,i.kt)("p",null,"Firmwares of some graphic cards are not shipped in ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.3.0"),"."),(0,i.kt)("p",null,"You can press ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," to edit the GRUB menu entry and append ",(0,i.kt)("inlineCode",{parentName:"p"},"nomodeset")," to the boot parameters. Press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + x")," to boot."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(60094).Z,width:"712",height:"399"})),(0,i.kt)("h3",{id:"harvester-installer-is-not-displayed"},"Harvester installer is not displayed"),(0,i.kt)("p",null,"If a USB flash driver boots, but you can't see the harvester installer, try one of the following workarounds:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Plug the USB flash drive into a USB 2.0 slot."),(0,i.kt)("li",{parentName:"ul"},"For version ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.3.0")," or above, remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"console=ttyS0")," parameter when booting. Press ",(0,i.kt)("inlineCode",{parentName:"li"},"e")," to edit the GRUB menu entry and remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"console=ttyS0")," parameter.")),(0,i.kt)("h3",{id:"harvester-interactive-iso-hangs-with-the-usb-installation-method"},"Harvester interactive ISO hangs with the USB installation method"),(0,i.kt)("p",null,"During installation from a USB flash drive with v1.2.0 ISO image (created by tools like ",(0,i.kt)("inlineCode",{parentName:"p"},"balenaEtcher"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"dd"),", etc.), the installation process may get stuck on the initial image loading process because a required label is missing on the boot partition. Therefore, the installation cannot mount the data partition correctly, causing some checks in ",(0,i.kt)("inlineCode",{parentName:"p"},"dracut")," to be blocked."),(0,i.kt)("p",null,"If you encounter this issue, you'll observe the following similar output, and the process will hang for at least 50 minutes (the default timeout value from ",(0,i.kt)("inlineCode",{parentName:"p"},"dracut"),")."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(22315).Z,width:"799",height:"585"})),(0,i.kt)("h4",{id:"workaround"},"Workaround"),(0,i.kt)("p",null,"To address this problem, you can manually modify the root partition as follows:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-text"},"# Replace the `CDLABEL=COS_LIVE` with your USB data partition. Usually, your USB data partition is the first partition with the device name `sdx` that hangs on your screen.\n# Original\n$linux ($root)/boot/kernel cdroot root=live:CDLABEL=COS_LIVE rd.live.dir=/ rd.live.squashimg=rootfs.squashfs console=tty1 console=ttyS0 rd.cos.disable net.ifnames=1\n# Modified \n$linux ($root)/boot/kernel cdroot root=live:/dev/sda1 rd.live.dir=/ rd.live.squashimg=rootfs.squashfs console=tty1 console=ttyS0 rd.cos.disable net.ifnames=1\n")),(0,i.kt)("p",null,"The modified parameter should look like the following:"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(25674).Z,width:"788",height:"534"})),(0,i.kt)("p",null,"After making this adjustment, press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + x")," to initiate booting. You should now enter the installer as usual."),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Related issue:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/4510"},"[BUG] v1.2.0 Interactive ISO Fails to Install On Some Bare-Metal Devices"))))))}p.isMDXComponent=!0},41427:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/balena-etcher-7fb3595af5c5e8ea2e5309c3600db8ef.png"},25674:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/grub-parameter-modified-d6524d22b0bda62d52775503c847a0ad.png"},35239:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/rufus-b49c59ea369ff0bb2ddebab30c9bd5bb.png"},22315:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/usb-install-hang-f7f62ed235f39bd0ceac88702e589e9a.png"},60094:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/usb-install-nomodeset-e6dc881f325fe4654dde2b0c8b94276b.png"},5304:(e,t,a)=>{a.d(t,{Z:()=>i});const i=a.p+"assets/images/usb-install-select-correct-partition-bd8f4425f8740b6aeafb90cfd3652748.jpg"}}]);