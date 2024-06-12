"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[37665],{73554:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>r,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const o={sidebar_position:3,sidebar_label:"USB Installation",title:"USB Installation"},s=void 0,l={unversionedId:"install/usb-install",id:"version-v1.1/install/usb-install",title:"USB Installation",description:"Create a bootable USB flash drive",source:"@site/versioned_docs/version-v1.1/install/usb-install.md",sourceDirName:"install",slug:"/install/usb-install",permalink:"/v1.1/install/usb-install",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.1/install/usb-install.md",tags:[],version:"v1.1",lastUpdatedAt:1718156635,formattedLastUpdatedAt:"Jun 12, 2024",sidebarPosition:3,frontMatter:{sidebar_position:3,sidebar_label:"USB Installation",title:"USB Installation"},sidebar:"api",previous:{title:"ISO Installation",permalink:"/v1.1/install/iso-install"},next:{title:"PXE Boot Installation",permalink:"/v1.1/install/pxe-boot-install"}},r={},d=[{value:"Create a bootable USB flash drive",id:"create-a-bootable-usb-flash-drive",level:2},{value:"balenaEtcher",id:"balenaetcher",level:3},{value:"<code>dd</code> command",id:"dd-command",level:3},{value:"Known issues",id:"known-issues",level:2},{value:"How to locate grub.cfg and set the root partition",id:"how-to-locate-grubcfg-and-set-the-root-partition",level:3},{value:"When booting from a USB installation flash drive, a <code>GRUB _</code> text is displayed, but nothing happens",id:"when-booting-from-a-usb-installation-flash-drive-a-grub-_-text-is-displayed-but-nothing-happens",level:3},{value:"Graphics issue",id:"graphics-issue",level:3},{value:"Other issues",id:"other-issues",level:3}],h={toc:d},p="wrapper";function u(e){let{components:t,...o}=e;return(0,i.kt)(p,(0,n.Z)({},h,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("head",null,(0,i.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/install/usb-install"})),(0,i.kt)("h2",{id:"create-a-bootable-usb-flash-drive"},"Create a bootable USB flash drive"),(0,i.kt)("p",null,"There are a couple of ways to create a USB installation flash drive."),(0,i.kt)("h3",{id:"balenaetcher"},"balenaEtcher"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://www.balena.io/etcher/"},"balenaEtcher")," supports writing images to USB flash drives. It has a GUI and is easy to use. Select the Harvester installation ISO and the target USB device to create a USB installation flash drive."),(0,i.kt)("h3",{id:"dd-command"},(0,i.kt)("inlineCode",{parentName:"h3"},"dd")," command"),(0,i.kt)("p",null,"On Linux or other platforms that have the ",(0,i.kt)("inlineCode",{parentName:"p"},"dd")," command, users can use ",(0,i.kt)("inlineCode",{parentName:"p"},"dd")," to create a USB installation flash drive."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Make sure you choose the correct device. The process erases data on the selected device.")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"# sudo dd if=<path_to_iso> of=<path_to_usb_device> bs=64k\n")),(0,i.kt)("h2",{id:"known-issues"},"Known issues"),(0,i.kt)("h3",{id:"how-to-locate-grubcfg-and-set-the-root-partition"},"How to locate grub.cfg and set the root partition"),(0,i.kt)("p",null,"Sometimes when using a USB to mount the Harvester ISO disk, it drops you in the GRUB2 shell while booting. In this case, it helps to know how to locate ",(0,i.kt)("inlineCode",{parentName:"p"},"grub.cfg")," and set the root partition to proceed with the installation."),(0,i.kt)("p",null,"To view the ",(0,i.kt)("inlineCode",{parentName:"p"},"grub.cfg")," from the ISO, run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"cat /boot/grub2/grub.cfg"),". You can see the current root partition in the ",(0,i.kt)("inlineCode",{parentName:"p"},"grub.cfg"),"."),(0,i.kt)("p",null,"To set a new root partition, run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"set root=(hdN,msdos1)"),", where N denotes N numbers of possible drives. N should be the drive your USB is mounted to."),(0,i.kt)("p",null,"Once the root partition has been set, where the ISO is located in the ",(0,i.kt)("inlineCode",{parentName:"p"},"msdos1")," partition, run the command ",(0,i.kt)("inlineCode",{parentName:"p"},"chainloader /boot/grub2/x86_64-efi/grub.efi")," to get dropped into the GRUB2 Boot Menu for the Harvester Installer."),(0,i.kt)("h3",{id:"when-booting-from-a-usb-installation-flash-drive-a-grub-_-text-is-displayed-but-nothing-happens"},"When booting from a USB installation flash drive, a ",(0,i.kt)("inlineCode",{parentName:"h3"},"GRUB _")," text is displayed, but nothing happens"),(0,i.kt)("p",null,"If you are using the UEFI mode, try to boot from the UEFI boot partition on the USB device rather than the USB device itself. e.g.,"),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(53967).Z,width:"730",height:"492"})),(0,i.kt)("p",null,"Select the ",(0,i.kt)("inlineCode",{parentName:"p"},"UEFI: USB disk 3.0 PMAP, Partition 1")," to boot. Note the representation varies from system to system."),(0,i.kt)("h3",{id:"graphics-issue"},"Graphics issue"),(0,i.kt)("p",null,"Firmwares of some graphic cards are not shipped in ",(0,i.kt)("inlineCode",{parentName:"p"},"v0.3.0"),".\nYou can press ",(0,i.kt)("inlineCode",{parentName:"p"},"e")," to edit the GRUB menu entry and append ",(0,i.kt)("inlineCode",{parentName:"p"},"nomodeset")," to the boot parameters. Press ",(0,i.kt)("inlineCode",{parentName:"p"},"Ctrl + x")," to boot."),(0,i.kt)("p",null,(0,i.kt)("img",{src:a(1291).Z,width:"712",height:"399"})),(0,i.kt)("h3",{id:"other-issues"},"Other issues"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},"Harvester installer is not displayed"),(0,i.kt)("p",{parentName:"li"},"  If a USB flash driver boots, but you can't see the harvester installer. You may try out the following workarounds:"),(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Plug the USB flash drive into a USB 2.0 slot."),(0,i.kt)("li",{parentName:"ul"},"For version ",(0,i.kt)("inlineCode",{parentName:"li"},"v0.3.0")," or above, try to remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"console=ttyS0")," parameter when booting. You can press ",(0,i.kt)("inlineCode",{parentName:"li"},"e")," to edit the GRUB menu entry and remove the ",(0,i.kt)("inlineCode",{parentName:"li"},"console=ttyS0")," parameter.")))))}u.isMDXComponent=!0},1291:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/usb-install-nomodeset-e6dc881f325fe4654dde2b0c8b94276b.png"},53967:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/usb-install-select-correct-partition-bd8f4425f8740b6aeafb90cfd3652748.jpg"}}]);