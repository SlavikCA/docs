"use strict";(self.webpackChunkharvester_docs=self.webpackChunkharvester_docs||[]).push([[70528],{37734:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>m,frontMatter:()=>r,metadata:()=>o,toc:()=>l});a(67294);var n=a(3905);const r={sidebar_position:5,sidebar_label:"VM Backup, Snapshot & Restore",title:"VM Backup, Snapshot & Restore",keywords:["Harvester","harvester","Rancher","rancher","VM Backup, Snapshot & Restore"],description:"VM backups are created from the Virtual Machines page. The VM backup volumes will be stored in the Backup Target(an NFS or S3 server) and they can be used to either restore a new VM or replace an existing VM. VM Snapshot can work without Backup Target."},s=void 0,o={unversionedId:"vm/backup-restore",id:"version-v1.2/vm/backup-restore",title:"VM Backup, Snapshot & Restore",description:"VM backups are created from the Virtual Machines page. The VM backup volumes will be stored in the Backup Target(an NFS or S3 server) and they can be used to either restore a new VM or replace an existing VM. VM Snapshot can work without Backup Target.",source:"@site/versioned_docs/version-v1.2/vm/backup-restore.md",sourceDirName:"vm",slug:"/vm/backup-restore",permalink:"/v1.2/vm/backup-restore",draft:!1,editUrl:"https://github.com/harvester/docs/edit/main/versioned_docs/version-v1.2/vm/backup-restore.md",tags:[],version:"v1.2",lastUpdatedAt:1731291261,formattedLastUpdatedAt:"Nov 11, 2024",sidebarPosition:5,frontMatter:{sidebar_position:5,sidebar_label:"VM Backup, Snapshot & Restore",title:"VM Backup, Snapshot & Restore",keywords:["Harvester","harvester","Rancher","rancher","VM Backup, Snapshot & Restore"],description:"VM backups are created from the Virtual Machines page. The VM backup volumes will be stored in the Backup Target(an NFS or S3 server) and they can be used to either restore a new VM or replace an existing VM. VM Snapshot can work without Backup Target."},sidebar:"api",previous:{title:"Access to the Virtual Machine",permalink:"/v1.2/vm/access-to-the-vm"},next:{title:"Live Migration",permalink:"/v1.2/vm/live-migration"}},i={},l=[{value:"VM Backup &amp; Restore",id:"vm-backup--restore",level:2},{value:"Configure Backup Target",id:"configure-backup-target",level:3},{value:"Create a VM backup",id:"create-a-vm-backup",level:3},{value:"Restore a new VM using a backup",id:"restore-a-new-vm-using-a-backup",level:3},{value:"Replace an existing VM using a backup",id:"replace-an-existing-vm-using-a-backup",level:3},{value:"Restore a new VM on another Harvester cluster",id:"restore-a-new-vm-on-another-harvester-cluster",level:3},{value:"Upload the same VM images to a new cluster",id:"upload-the-same-vm-images-to-a-new-cluster",level:4},{value:"Restore a new VM in a new cluster",id:"restore-a-new-vm-in-a-new-cluster",level:4},{value:"VM Snapshot &amp; Restore",id:"vm-snapshot--restore",level:2},{value:"Create a VM snapshot",id:"create-a-vm-snapshot",level:3},{value:"Restore a new VM using a snapshot",id:"restore-a-new-vm-using-a-snapshot",level:3},{value:"Replace an existing VM using a snapshot",id:"replace-an-existing-vm-using-a-snapshot",level:3},{value:"Known issues",id:"known-issues",level:2},{value:"VM Backup Metadata File Naming Conflicts",id:"vm-backup-metadata-file-naming-conflicts",level:3},{value:"Failure to Create Backup for Stopped VM",id:"failure-to-create-backup-for-stopped-vm",level:3}],p={toc:l},c="wrapper";function m({components:e,...t}){return(0,n.kt)(c,{...p,...t,components:e,mdxType:"MDXLayout"},(0,n.kt)("head",null,(0,n.kt)("link",{rel:"canonical",href:"https://docs.harvesterhci.io/v1.1/vm/backup-restore"})),(0,n.kt)("h2",{id:"vm-backup--restore"},"VM Backup & Restore"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v0.3.0")),(0,n.kt)("p",null,"VM backups are created from the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines")," page. The VM backup volumes will be stored in the ",(0,n.kt)("strong",{parentName:"p"},"Backup Target")," (an NFS or S3 server), and they can be used to either restore a new VM or replace an existing VM.\n",(0,n.kt)("img",{alt:"vm-backup.png",src:a(65243).Z,width:"2560",height:"1200"})),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"A backup target must be set up. For more information, see ",(0,n.kt)("a",{parentName:"p",href:"#configure-backup-target"},"Configure Backup Target"),". If the backup target has not been set, you\u2019ll be prompted with a message to do so.")),(0,n.kt)("h3",{id:"configure-backup-target"},"Configure Backup Target"),(0,n.kt)("p",null,"A backup target is an endpoint used to access a backup store in Harvester. A backup store is an NFS server or S3 compatible server that stores the backups of VM volumes. The backup target can be set at ",(0,n.kt)("inlineCode",{parentName:"p"},"Settings > backup-target"),"."),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Parameter"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Type"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Choose S3 or NFS")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Endpoint"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A hostname or an IP address. It can be left empty for AWS S3.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BucketName"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the bucket")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"BucketRegion"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Region of the bucket")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"AccessKeyID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"A user-id that uniquely identifies your account")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"SecretAccessKey"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"The password to your account")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Certificate"),(0,n.kt)("td",{parentName:"tr",align:"left"},"string"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Paste to use a self-signed SSL certificate of your S3 server")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"VirtualHostedStyle"),(0,n.kt)("td",{parentName:"tr",align:"left"},"bool"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Use ",(0,n.kt)("inlineCode",{parentName:"td"},"VirtualHostedStyle")," access only; e.g., Alibaba Cloud (Aliyun) OSS")))),(0,n.kt)("h3",{id:"create-a-vm-backup"},"Create a VM backup"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Once the backup target is set, go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Take Backup")," of the VM actions to create a new VM backup."),(0,n.kt)("li",{parentName:"ol"},"Set a custom backup name and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM backup.\n",(0,n.kt)("img",{alt:"create-backup.png",src:a(14010).Z,width:"4232",height:"2080"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The backup is created. You will receive a notification message, and you can also go to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Backup & Snapshot > VM Backups")," page to view all VM backups."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"State")," will be set to ",(0,n.kt)("inlineCode",{parentName:"p"},"Ready")," once the backup is complete."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"vm-backup-results.png",src:a(54229).Z,width:"1918",height:"811"})),(0,n.kt)("p",null,"Users can either restore a new VM or replace an existing VM using this backup."),(0,n.kt)("h3",{id:"restore-a-new-vm-using-a-backup"},"Restore a new VM using a backup"),(0,n.kt)("p",null,"To restore a new VM from a backup, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Backups")," page."),(0,n.kt)("li",{parentName:"ol"},"Specify the new VM name and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"A new VM will be restored using the backup volumes and metadata, and you can access it from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.\n",(0,n.kt)("img",{alt:"restore-vm.png",src:a(88672).Z,width:"2560",height:"1400"}))),(0,n.kt)("h3",{id:"replace-an-existing-vm-using-a-backup"},"Replace an existing VM using a backup"),(0,n.kt)("p",null,"You can replace an existing VM using the backup with the same VM backup target."),(0,n.kt)("p",null,"You can choose to either delete or retain the previous volumes. By default, all previous volumes are deleted."),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Requirements:")," The VM must exist and is required to be in the powered-off status."),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Backups")," page."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Replace Existing"),"."),(0,n.kt)("li",{parentName:"ol"},"You can view the restore process from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.\n",(0,n.kt)("img",{alt:"vm-restore-existing.png",src:a(71703).Z,width:"1919",height:"863"}))),(0,n.kt)("h3",{id:"restore-a-new-vm-on-another-harvester-cluster"},"Restore a new VM on another Harvester cluster"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.0.0")),(0,n.kt)("p",null,"Users can now restore a new VM on another cluster by leveraging the VM metadata & content backup feature."),(0,n.kt)("admonition",{title:"prerequisites",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You must manually configure the virtual machine images with the same name on the new cluster first, otherwise the virtual machines will be failed to recover.")),(0,n.kt)("h4",{id:"upload-the-same-vm-images-to-a-new-cluster"},"Upload the same VM images to a new cluster"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Check the existing image name (normally starts with ",(0,n.kt)("inlineCode",{parentName:"li"},"image-"),") and create the same one on the new cluster.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl get vmimages -A\nNAMESPACE   NAME                               DISPLAY-NAME                              SIZE         AGE\ndefault     image-79hdq                        focal-server-cloudimg-amd64.img           566886400    5h36m\ndefault     image-l7924                        harvester-v1.0.0-rc2-amd64.iso            3964551168   137m\ndefault     image-lvqxn                        opensuse-leap-15.3.x86_64-nocloud.qcow2   568524800    5h35m\n")),(0,n.kt)("ol",{start:2},(0,n.kt)("li",{parentName:"ol"},"Apply a VM image YAML with the same name and content in the new cluster.")),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},'$ cat <<EOF | kubectl apply -f -\napiVersion: harvesterhci.io/v1beta1\nkind: VirtualMachineImage\nmetadata:\n  name: image-lvqxn\n  namespace: default\nspec:\n  displayName: opensuse-leap-15.3.x86_64-nocloud.qcow2\n  pvcName: ""\n  pvcNamespace: ""\n  sourceType: download\n  url: http://download.opensuse.org/repositories/Cloud:/Images:/Leap_15.3/images/openSUSE-Leap-15.3.x86_64-NoCloud.qcow2\nEOF\n')),(0,n.kt)("h4",{id:"restore-a-new-vm-in-a-new-cluster"},"Restore a new VM in a new cluster"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Setup the same backup target in a new cluster. And the backup controller will automatically sync the backup metadata to the new cluster."),(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Backups")," page."),(0,n.kt)("li",{parentName:"ol"},"Select the synced VM backup metadata and choose to restore a new VM with a specified VM name."),(0,n.kt)("li",{parentName:"ol"},"A new VM will be restored using the backup volumes and metadata. You can access it from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.")),(0,n.kt)("h2",{id:"vm-snapshot--restore"},"VM Snapshot & Restore"),(0,n.kt)("p",null,(0,n.kt)("em",{parentName:"p"},"Available as of v1.1.0")),(0,n.kt)("p",null,"VM snapshots are created from the ",(0,n.kt)("strong",{parentName:"p"},"Virtual Machines")," page. The VM snapshot volumes will be stored in the cluster, and they can be used to either restore a new VM or replace an existing VM.\n",(0,n.kt)("img",{alt:"vm-snapshot.png",src:a(37281).Z,width:"2560",height:"1160"})),(0,n.kt)("h3",{id:"create-a-vm-snapshot"},"Create a VM snapshot"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Take VM Snapshot")," of the VM actions to create a new VM snapshot."),(0,n.kt)("li",{parentName:"ol"},"Set a custom snapshot name and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create")," to create a new VM snapshot.\n",(0,n.kt)("img",{alt:"create-snapshot.png",src:a(40272).Z,width:"2558",height:"1276"}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Result:")," The snapshot is created. You can also go to the ",(0,n.kt)("inlineCode",{parentName:"p"},"Backup & Snapshot > VM Snapshots")," page to view all VM snapshots."),(0,n.kt)("p",null,"The ",(0,n.kt)("inlineCode",{parentName:"p"},"State")," will be set to ",(0,n.kt)("inlineCode",{parentName:"p"},"Ready")," once the snapshot is complete."),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"vm-snapshot-results.png",src:a(87748).Z,width:"1920",height:"814"})),(0,n.kt)("p",null,"Users can either restore a new VM or replace an existing VM using this snapshot."),(0,n.kt)("h3",{id:"restore-a-new-vm-using-a-snapshot"},"Restore a new VM using a snapshot"),(0,n.kt)("p",null,"To restore a new VM from a snapshot, follow these steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Snapshots")," page."),(0,n.kt)("li",{parentName:"ol"},"Specify the new VM name and click ",(0,n.kt)("inlineCode",{parentName:"li"},"Create"),"."),(0,n.kt)("li",{parentName:"ol"},"A new VM will be restored using the snapshot volumes and metadata, and you can access it from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.\n",(0,n.kt)("img",{alt:"restore-vm-snapshot.png",src:a(20641).Z,width:"2560",height:"1398"}))),(0,n.kt)("h3",{id:"replace-an-existing-vm-using-a-snapshot"},"Replace an existing VM using a snapshot"),(0,n.kt)("p",null,"You can replace an existing VM using the snapshot."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"You can only choose to retain the previous volumes.")),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"Go to the ",(0,n.kt)("inlineCode",{parentName:"li"},"VM Snapshots")," page."),(0,n.kt)("li",{parentName:"ol"},"Click ",(0,n.kt)("inlineCode",{parentName:"li"},"Replace Existing"),"."),(0,n.kt)("li",{parentName:"ol"},"You can view the restore process from the ",(0,n.kt)("inlineCode",{parentName:"li"},"Virtual Machines")," page.\n",(0,n.kt)("img",{alt:"restore-vm-snapshot-existing.png",src:a(23381).Z,width:"1920",height:"863"}))),(0,n.kt)("h2",{id:"known-issues"},"Known issues"),(0,n.kt)("h3",{id:"vm-backup-metadata-file-naming-conflicts"},"VM Backup Metadata File Naming Conflicts"),(0,n.kt)("p",null,"Whenever you create a VM backup, Harvester generates a metadata file in the ",(0,n.kt)("a",{parentName:"p",href:"/v1.2/advanced/index#backup-target"},"backup target"),". The metadata file, which is found in ",(0,n.kt)("inlineCode",{parentName:"p"},"<storage-path>/harvester/vmbackups/<vmbackup-namespace>-<vmbackup-name>.cfg"),", contains VM backup data in JSON format."),(0,n.kt)("p",null,"The naming convention for these metadata files can introduce conflicts. Specifically, files generated for VM backups that were created in different namespaces can have the exact same file name."),(0,n.kt)("p",null,"Example:\n| VM backup name | Namespace | Metadata file name |\n| --- | --- | --- |\n| ",(0,n.kt)("inlineCode",{parentName:"p"},"c")," | ",(0,n.kt)("inlineCode",{parentName:"p"},"a-b")," | ",(0,n.kt)("inlineCode",{parentName:"p"},"a-b-c.cfg")," |\n| ",(0,n.kt)("inlineCode",{parentName:"p"},"b-c")," | ",(0,n.kt)("inlineCode",{parentName:"p"},"a")," | ",(0,n.kt)("inlineCode",{parentName:"p"},"a-b-c.cfg")," |"),(0,n.kt)("p",null,"Harvester v1.3.0 fixes this issue by changing the metadata file path to ",(0,n.kt)("inlineCode",{parentName:"p"},"<storage-path>/harvester/vmbackups/<vmbackup-namespace>/<vmbackup-name>.cfg"),". If you are using an earlier version, however, ensure that VM backup names do not cause the described file naming conflicts."),(0,n.kt)("h3",{id:"failure-to-create-backup-for-stopped-vm"},"Failure to Create Backup for Stopped VM"),(0,n.kt)("p",null,"When creating a backup for a stopped VM, the Harvester UI may display an error message that indicates a known issue."),(0,n.kt)("p",null,(0,n.kt)("img",{src:a(8764).Z,width:"1172",height:"474"})),(0,n.kt)("p",null,"To determine if the ",(0,n.kt)("a",{parentName:"p",href:"https://github.com/harvester/harvester/issues/5841"},"issue")," has occurred, locate the VM backup on the ",(0,n.kt)("strong",{parentName:"p"},"Dashboard")," screen and perform the following steps:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Obtain the names of the problematic ",(0,n.kt)("inlineCode",{parentName:"p"},"VolumeSnapshot")," resources that are related to the VM backup."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl get virtualmachinebackups.harvesterhci.io <VM backup name> -o json | jq '.status.volumeBackups[] | select(.readyToUse == false) | .name '\n")),(0,n.kt)("p",{parentName:"li"},"Example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl get virtualmachinebackups.harvesterhci.io extra-default.off -o json | jq '.status.volumeBackups[] | select(.readyToUse == false) | .name '\nextra-default.off-volume-vm-extra-default-rootdisk-vp3py\nextra-default.off-volume-vm-extra-default-disk-1-oohjf\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Obtain the names of the ",(0,n.kt)("inlineCode",{parentName:"p"},"VolumeSnapshotContent")," resources that are related to the problematic volume snapshots."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ SNAPSHOT_CONTENT=$(kubectl get volumesnapshot <VolumeSnapshot Name> -o json | jq -r '.status.boundVolumeSnapshotContentName')\n")),(0,n.kt)("p",{parentName:"li"},"Example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ SNAPSHOT_CONTENT=$(kubectl get volumesnapshot extra-default.off-volume-vm-extra-default-rootdisk-vp3py -o json | jq -r '.status.boundVolumeSnapshotContentName')\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Obtain the names of the related ",(0,n.kt)("inlineCode",{parentName:"p"},"Longhorn Snapshot")," resources."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ LH_SNAPSHOT=snapshot-$(echo \"$SNAPSHOT_CONTENT\" | sed 's/^snapcontent-//')\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check if the status of the related ",(0,n.kt)("inlineCode",{parentName:"p"},"Longhorn Snapshot")," resources is ",(0,n.kt)("inlineCode",{parentName:"p"},"readyToUse"),"."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl -n longhorn-system get snapshots.longhorn.io $LH_SNAPSHOT -o json | jq '.status.readyToUse'    \n")),(0,n.kt)("p",{parentName:"li"},"Example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl -n longhorn-system get snapshots.longhorn.io $LH_SNAPSHOT -o json | jq '.status.readyToUse'\ntrue\n"))),(0,n.kt)("li",{parentName:"ol"},(0,n.kt)("p",{parentName:"li"},"Check the state of the related ",(0,n.kt)("inlineCode",{parentName:"p"},"Longhorn backups")," resources."),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl -n longhorn-system get backups.longhorn.io -o json | jq --arg snapshot \"$LH_SNAPSHOT\" '.items[] | select(.spec.snapshotName == $snapshot) | .status.state'\n")),(0,n.kt)("p",{parentName:"li"},"Example:"),(0,n.kt)("pre",{parentName:"li"},(0,n.kt)("code",{parentName:"pre"},"$ kubectl -n longhorn-system get backups.longhorn.io -o json | jq --arg snapshot \"$LH_SNAPSHOT\" '.items[] | select(.spec.snapshotName == $snapshot) | .status.state'\nCompleted\n")))),(0,n.kt)("admonition",{title:"important",type:"info"},(0,n.kt)("p",{parentName:"admonition"},"You must perform the listed actions for all problematic ",(0,n.kt)("inlineCode",{parentName:"p"},"VolumeSnapshot")," resources identified in step 1.")),(0,n.kt)("p",null,"The issue has likely occurred if the status of the related ",(0,n.kt)("inlineCode",{parentName:"p"},"Longhorn Snapshot")," resources is ",(0,n.kt)("inlineCode",{parentName:"p"},"readyToUse")," and the state of the related ",(0,n.kt)("inlineCode",{parentName:"p"},"Longhorn backups")," resources is ",(0,n.kt)("inlineCode",{parentName:"p"},"Completed"),"."),(0,n.kt)("p",null,"Start the VM before creating the VM backup to prevent the issue from occurring again. If you still choose to create the backup while the VM is stopped, change the state of the VM backup by running the following command:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre"},"$ kubectl -n longhorn-system rollout restart deployment csi-snapshotter\n")),(0,n.kt)("p",null,"Related issue:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",{parentName:"li",href:"https://github.com/harvester/harvester/issues/5841"},"[BUG] Fail to backup a Stopped/Off VM due to volume error state"))))}m.isMDXComponent=!0},14010:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-backup-8533bf901f53858ff667e9d6f095fa02.png"},40272:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/create-snapshot-1ec69bb2f7c0c21d187f889b40686dc9.png"},23381:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restore-vm-snapshot-existing-3b2cd84f303deb1729298c62d32c7ba2.png"},20641:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restore-vm-snapshot-82e23610c43dcd363db52d7f39d159bd.png"},88672:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/restore-vm-e2e76cf3c514c73d5e2deaf2b9f20c77.png"},54229:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-backup-results-aea01a807c98f5712f3a05ac3c32a560.png"},65243:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-backup-222f8a51fa815826979b6e4fa0329856.png"},71703:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-restore-existing-81e0b511eef126ef1e62b23e6910350b.png"},87748:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-snapshot-results-1f5647dead86599315ba03a462a9a0f4.png"},37281:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm-snapshot-01b716f8a3f41c05fb54e3ccd4e753e8.png"},8764:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/vm_backup_fail-92a4e6ad77220d5d6ce7bcd011b6ef7d.png"}}]);