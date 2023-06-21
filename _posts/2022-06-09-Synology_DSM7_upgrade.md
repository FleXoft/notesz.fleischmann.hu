---
layout:   post_v2
title:    Synology DSM 7 upgrade
author:   flex
category: 2020...2022 (FNXS)
tags:     [compúter, Synology, NAS, DSM7, English]
comments: true

headerSIZE:       '0px'
headerBGimagex:   ''
headerBGposition: 'background-position: center;'

headerRIGHTStyleOverride: ''

contentLEFT: '<p style="padding: 20px;"><img src="images/DSM/DS916+_front.png"></p><p style="padding: 20px;"><img src="images/DSM/DS916+.png"></p><p style="padding: 20px;"><img src="images/DSM/DS_916+_mother.png"></p><p style="padding: 20px;"><strong>From:</strong> Version: 6.2.4-25556 Update 6<br><strong>to:</strong> Version: 7.0.1-42218 Update 4 and<br> <strong>to2:</strong>Version: 7.1-42661 Update 2'
contentpaddingLEFTStyleOverride: 'padding: 0px;'
---

This morning, taking a deep breath, I pressed the button for this task a little earlier than I planned. What could go wrong with this??? 😀

<img class="shadow alignemnt" alt="Synology DSM" data-description="Synology DSM" src="images/DSM/DSM7_01.png">
<img class="shadow alignemnt" alt="Synology DSM" data-description="Synology DSM" src="images/DSM/DSM_finish1.png">
<img class="shadow alignemnt" alt="Synology DSM" data-description="Synology DSM" src="images/DSM/DSM_finish2_conf.png">
<img class="shadow alignemnt" alt="Synology DSM" data-description="Synology DSM" src="images/DSM/DSM_finish3.png">
<img class="shadow alignemnt" alt="Synology DSM" data-description="Synology DSM" src="images/DSM/DSM_finish4_repair.png">
<img class="shadow alignemnt" alt="Synology DSM" data-description="Synology DSM" src="images/DSM/DSM_finish5_latest.png">

<hr>

## Checklist after the upgrade process:

- VPN CHECK: ✅
- VirtualHere + hack reINSTALL + CHECK: ✅
- DS Video, DS Music, DS Photo CHECK: ✅
- Time Machine backup CHECK: ✅
- Midnight Commander, beets: reINSTALL + CHECK: ✅

<pre class="terminal">
$ <strong>beet --version</strong>
beets version 1.6.0
Python version 3.10.4
plugins: discogs, embedart, fetchart, inline, lastgenre, lyrics
</pre>

- <a href="https://github.com/AlexPresso/VideoStation-FFMPEG-Patcher">VideoStation-FFMPEG-Patcher</a> reINSTALL: ✅

<pre class="terminal">
root@BLACKHOLE:~# <strong>curl https://raw.githubusercontent.com/AlexPresso/VideoStation-FFMPEG-Patcher/main/patcher.sh | bash</strong>

  % Total    % Received % Xferd  Average Speed   Time    Time     Time  Current
								 Dload  Upload   Total   Spent    Left  Speed
100  4128  100  4128    0     0  15875      0 --:--:-- --:--:-- --:--:-- 15938
[2022-06-09 10:13:13] [INFO] ffmpeg-patcher v2.0
[2022-06-09 10:13:14] [Message of the day]

The patcher was redesigned to include an unpatch procedure.

I'm aware of an issue with HEVC and I'm working on it.

As always, please let me know of any issue you could have.

[2022-06-09 10:13:14] [INFO] You're running DSM 7.1
[2022-06-09 10:13:14] [INFO] Tuned script for DSM 7.1
[2022-06-09 10:13:14] [INFO] ====== Patching procedure (branch: main) ======
[2022-06-09 10:13:14] [INFO] Saving current ffmpeg as ffmpeg.orig
[2022-06-09 10:13:14] [INFO] Downloading and installing ffmpeg's wrapper...
[2022-06-09 10:13:15] [INFO] Patching CodecPack's ffmpeg41
[2022-06-09 10:13:16] [INFO] Saving current libsynovte.so as libsynovte.so.orig
[2022-06-09 10:13:16] [INFO] Enabling eac3, dts and truehd
[2022-06-09 10:13:16] [INFO] Restarting CodecPack...
restart package [CodecPack] successfully
[2022-06-09 10:13:28] [INFO] Restarting VideoStation...
restart package [VideoStation] successfully

[2022-06-09 10:13:50] [INFO] Done patching, you can now enjoy your movies ;) (please add a star to the repo if it worked for you)

root@BLACKHOLE:~#
</pre>

- IBM Spectrum Protect BA client reINSTALL + CHECK: ✅

[http://service.boulder.ibm.com/storage/tivoli-storage-management/maintenance/client/v8r1/Linux/LinuxX86/BA/v8114/](http://service.boulder.ibm.com/storage/tivoli-storage-management/maintenance/client/v8r1/Linux/LinuxX86/BA/v8114/)

## Package preparaion on a Linux system

This should be done on a Linux that can handle .rpm packages. I'm sure there are many other ways to do this, but this is how I made it.

<pre class="terminal">
[flex@ceva_backup 8114]$ <strong>wget http://service.boulder.ibm.com/storage/tivoli-storage-management/maintenance/client/v8r1/Linux/LinuxX86/BA/v8114/8.1.14.0-TIV-TSMBAC-LinuxX86.tar</strong>

[flex@ceva_backup 8114]$ <strong>ls -l</strong>

total 630372
-rw-rw-r-- 1 flex flex 645498880 Mar 11 06:46 8.1.14.0-TIV-TSMBAC-LinuxX86.tar

[flex@ceva_backup 8114]$ <strong>tar -xvf 8.1.14.0-TIV-TSMBAC-LinuxX86.tar</strong>

GSKit.pub2.pgp
README.htm
README_api.htm
RPM-GPG-KEY-ibmpkg
TIVsm-API64.x86_64.rpm
TIVsm-APIcit.x86_64.rpm
TIVsm-BA.x86_64.rpm
TIVsm-BAcit.x86_64.rpm
TIVsm-BAhdw.x86_64.rpm
TIVsm-JBB.x86_64.rpm
TIVsm-WEBGUI.x86_64.rpm
TIVsm-filepath-source.tar.gz
gskcrypt64-8.0.55.24.linux.x86_64.rpm
gskssl64-8.0.55.24.linux.x86_64.rpm
update.txt

[flex@ceva_backup 8114]$ <strong>rm 8.1.14.0-TIV-TSMBAC-LinuxX86.tar GSKit.pub2.pgp README* RPM-GPG-KEY-ibmpkg TIVsm-APIcit.x86_64.rpm TIVsm-BAcit.x86_64.rpm TIVsm-BAhdw.x86_64.rpm TIVsm-JBB.x86_64.rpm TIVsm-WEBGUI.x86_64.rpm TIVsm-filepath-source.tar.gz update.txt</strong>

[flex@ceva_backup 8114]$ <strong>ll</strong>

total 206380
-rw-r--r-- 1 flex flex   2083752 Feb 23 09:05 gskcrypt64-8.0.55.24.linux.x86_64.rpm
-rw-r--r-- 1 flex flex   7447928 Feb 23 09:05 gskssl64-8.0.55.24.linux.x86_64.rpm
-rw-r--r-- 1 flex flex  76081632 Feb 23 02:02 TIVsm-API64.x86_64.rpm
-rw-r--r-- 1 flex flex 125714112 Feb 23 02:02 TIVsm-BA.x86_64.rpm
</pre>

I kept only the following files from the .rpm packages:

<pre class="terminal">
[flex@ceva_backup 8114]$ <strong>tree</strong>

.
├── opt
│   └── tivoli
│       └── tsm
│           └── client
│               ├── api
│               │   └── bin64
│               │       ├── dsmcert
│               │       ├── dsm.opt.smp
│               │       ├── dsm.sys.smp
│               │       ├── EN_US
│               │       │   ├── dscjres.txt
│               │       │   ├── dsmc.hlp
│               │       │   ├── dsmclientV3.cat
│               │       │   ├── dsmig.hlp
│               │       │   ├── tsmhelp.jar
│               │       │   ├── uil_nls.jar
│               │       │   └── wchelp.htl
│               │       ├── libApiTSM64.so
│               │       ├── libcrypto.so.1.0.2
│               │       ├── libdmapi.so
│               │       ├── libgpfs.so
│               │       ├── libssl.so.1.0.2
│               │       ├── libTsmViSdkAPI.so -> libTsmViSdk.so
│               │       ├── libTsmViSdk.so
│               │       ├── libtsmxerces-c.so.28.0
│               │       ├── libtsmxerces-depdom.so.28.0
│               │       ├── libVMcrypto.so -> libcrypto.so.1.0.2
│               │       ├── libVMssl.so -> libssl.so.1.0.2
│               │       ├── libxmlutil-8.1.14.0.so
│               │       └── sample
│               │           ├── callbuff.c
│               │           ├── callevnt.c
│               │           ├── callhold.c
│               │           ├── callmt1.c
│               │           ├── callmt2.c
│               │           ├── callret.c
│               │           ├── dapibkup.c
│               │           ├── dapidata.h
│               │           ├── dapiinit.c
│               │           ├── dapint64.c
│               │           ├── dapint64.h
│               │           ├── dapipref.c
│               │           ├── dapiproc.c
│               │           ├── dapiproc.h
│               │           ├── dapipw.c
│               │           ├── dapiqry.c
│               │           ├── dapirc.c
│               │           ├── dapismp.c
│               │           ├── dapitype.h
│               │           ├── dapiutil.c
│               │           ├── dapiutil.h
│               │           ├── dpsthread.c
│               │           ├── dpsthread.h
│               │           ├── dsmapifp.h
│               │           ├── dsmapips.h
│               │           ├── dsmapipw.c
│               │           ├── dsmapitd.h
│               │           ├── dsmgrp.c
│               │           ├── dsmrc.h
│               │           ├── makesmp64.linux86
│               │           ├── release.h
│               │           ├── tsmapifp.h
│               │           └── tsmapitd.h
│               └── ba
│                   └── bin
│                       ├── commonFunctions
│                       ├── configFile
│                       ├── dsmadmc
│                       ├── dsmagent
│                       ├── dsmc
│                       ├── dsmcad
│                       ├── dsmcad.service
│                       ├── dsmcert
│                       ├── dsmj
│                       ├── dsm.jar
│                       ├── dsm.opt.smp
│                       ├── dsm_pref.jar
│                       ├── dsmswitch
│                       ├── dsm.sys.smp
│                       ├── dsmtrace
│                       ├── dsmutillnx
│                       ├── EN_US
│                       │   ├── dscjres.txt
│                       │   ├── dsmc.hlp
│                       │   ├── dsmclientV3.cat
│                       │   ├── dsmig.hlp
│                       │   ├── tsmhelp.jar
│                       │   ├── uil_nls.jar
│                       │   └── wchelp.htl
│                       ├── exposeFastBackSnapshot.sh
│                       ├── favicon.ico
│                       ├── getFastBackSnapshots.sh
│                       ├── httpagent.jar
│                       ├── images
│                       │   └── wchelp.htl
│                       ├── iscsiMount.sh
│                       ├── jdom.jar
│                       ├── jh.jar
│                       ├── libTsmViSdkAPI.so -> libTsmViSdk.so
│                       ├── libTsmViSdk.so
│                       ├── nasdcm.lic
│                       ├── plugins
│                       │   ├── libPiIMG.so
│                       │   ├── libPiSNAP.so
│                       │   ├── libPiVcloudJNI.so
│                       │   ├── libPiVcloudSuiteJNI.so
│                       │   ├── vcloud
│                       │   │   ├── piVcloudJwrapper.jar
│                       │   │   └── sdk
│                       │   │       ├── amqp-client-2.8.6.jar
│                       │   │       ├── commons-codec-1.14.jar
│                       │   │       ├── commons-logging-1.1.1.jar
│                       │   │       ├── httpclient-4.2.jar
│                       │   │       ├── httpcore-4.2.jar
│                       │   │       ├── rest-api-schemas-5.5.0.jar
│                       │   │       └── vcloud-java-sdk-5.5.0.jar
│                       │   └── vcloudsuite
│                       │       ├── piVcloudSuiteJwrapper.jar
│                       │       └── sdk
│                       │           ├── commons-beanutils-1.9.4.jar
│                       │           ├── commons-cli-1.4.jar
│                       │           ├── commons-codec-1.11.jar
│                       │           ├── commons-collections-3.2.2.jar
│                       │           ├── commons-configuration-1.10.jar
│                       │           ├── commons-lang-2.6.jar
│                       │           ├── commons-lang3-3.9.jar
│                       │           ├── commons-logging-1.2.jar
│                       │           ├── httpasyncclient-4.1.4.jar
│                       │           ├── httpclient-4.5.10.jar
│                       │           ├── httpcore-4.4.12.jar
│                       │           ├── httpcore-nio-4.4.10.jar
│                       │           ├── jackson-annotations-2.10.0.jar
│                       │           ├── jackson-core-2.10.0.jar
│                       │           ├── jackson-databind-2.10.0.jar
│                       │           ├── log4j-api-2.17.1.jar
│                       │           ├── log4j-core-2.17.1.jar
│                       │           ├── log4j-jcl-2.17.1.jar
│                       │           ├── log4j.properties
│                       │           ├── log4j-slf4j-impl-2.17.1.jar
│                       │           ├── logging.properties
│                       │           ├── nsx-vmc-aws-integration-sdk-2.5.1.0.1.15419398.jar
│                       │           ├── nsx-vmc-policy-java-sdk-2.5.1.0.1.15419398.jar
│                       │           ├── nsx-vmc-sdk-common-2.5.1.0.1.15419398.jar
│                       │           ├── oidc-oauth2-sdk-0.0.1.jar
│                       │           ├── slf4j-api-1.7.12.jar
│                       │           ├── ssoclient-6.7.3.jar
│                       │           ├── vapi-authentication-2.15.0.jar
│                       │           ├── vapi-runtime-2.15.0.jar
│                       │           ├── vapi-samltoken-2.15.0.jar
│                       │           ├── vapi-vmc-sdk-2.15.0.jar
│                       │           ├── vim25.jar
│                       │           ├── vmc-bindings-1.24.0.jar
│                       │           ├── vmc-draas-bindings-1.9.0.jar
│                       │           ├── vsphereautomation-client-sdk-7.0.0.jar
│                       │           └── vsphereautomation-lookupservice-7.0.0.jar
│                       ├── rc.dsmcad
│                       ├── r_FastBackShell.sh
│                       ├── uil.jar
│                       ├── unMountForTSM.sh
│                       ├── vmscan
│                       │   ├── BackupMon.exe
│                       │   ├── CheckEnv.exe
│                       │   └── DeleteVMScanFiles.bat
│                       ├── vmtsmvss
│                       │   ├── BackupMon.exe
│                       │   ├── CheckEnv.exe
│                       │   ├── DeleteACMFiles.bat
│                       │   ├── DummyBAProxy.exe
│                       │   ├── ProxyBAClient.exe
│                       │   ├── ProxyBAServer.exe
│                       │   ├── register_app.vbs
│                       │   ├── TsmMSSqlLogTruncation.bat
│                       │   └── TsmVmwareDpVSS.dll
│                       ├── xercesImpl_2_2_1.jar
│                       └── xmlParserAPIs_2_2_1.jar
└── usr
	├── bin
	│   ├── dsmadmc -> ../../opt/tivoli/tsm/client/ba/bin/dsmadmc
	│   ├── dsmagent -> ../../opt/tivoli/tsm/client/ba/bin/dsmagent
	│   ├── dsmc -> ../../opt/tivoli/tsm/client/ba/bin/dsmc
	│   ├── dsmcad -> ../../opt/tivoli/tsm/client/ba/bin/dsmcad
	│   ├── dsmcert -> ../../opt/tivoli/tsm/client/ba/bin/dsmcert
	│   ├── dsmj -> ../../opt/tivoli/tsm/client/ba/bin/dsmj
	│   ├── dsmswitch -> ../../opt/tivoli/tsm/client/ba/bin/dsmswitch
	│   └── dsmtrace -> ../../opt/tivoli/tsm/client/ba/bin/dsmtrace
	├── lib64
	│   ├── libApiTSM64.so -> ../../opt/tivoli/tsm/client/api/bin64/libApiTSM64.so
	│   ├── libtsmxerces-c.so.28 -> ../../opt/tivoli/tsm/client/api/bin64/libtsmxerces-c.so.28.0
	│   ├── libtsmxerces-depdom.so.28 -> ../../opt/tivoli/tsm/client/api/bin64/libtsmxerces-depdom.so.28.0
	│   └── libxmlutil-8.1.14.0.so -> ../../opt/tivoli/tsm/client/api/bin64/libxmlutil-8.1.14.0.so
	└── local
		└── ibm
			└── gsk8_64
				├── bin
				│   ├── gsk8capicmd_64
				│   └── gsk8ver_64
				├── copyright
				├── docs
				├── inc
				├── lib64
				│   ├── C
				│   │   └── icc
				│   │       ├── icclib
				│   │       │   ├── ICCSIG.txt
				│   │       │   └── libicclib084.so
				│   │       └── ReadMe.txt
				│   ├── libgsk8acmeidup_64.so
				│   ├── libgsk8cms_64.so
				│   ├── libgsk8dbfl_64.so
				│   ├── libgsk8drld_64.so
				│   ├── libgsk8iccs_64.so
				│   ├── libgsk8kicc_64.so
				│   ├── libgsk8km2_64.so
				│   ├── libgsk8km_64.so
				│   ├── libgsk8ldap_64.so
				│   ├── libgsk8p11_64.so
				│   ├── libgsk8ssl_64.so
				│   ├── libgsk8sys_64.so
				│   ├── libgsk8valn_64.so
				│   └── N
				│       └── icc
				│           ├── icclib
				│           │   ├── ICCSIG.txt
				│           │   └── libicclib085.so
				│           └── ReadMe.txt
				└── ReadMe.txt

35 directories, 191 files

[flex@ceva_backup 8114]$ <strong>tar -cvf 8114.tar opt/ usr/</strong>

opt/
opt/tivoli/
opt/tivoli/tsm/
opt/tivoli/tsm/client/
opt/tivoli/tsm/client/ba/
opt/tivoli/tsm/client/ba/bin/
opt/tivoli/tsm/client/ba/bin/EN_US/
opt/tivoli/tsm/client/ba/bin/EN_US/dscjres.txt
opt/tivoli/tsm/client/ba/bin/EN_US/dsmc.hlp
opt/tivoli/tsm/client/ba/bin/EN_US/dsmclientV3.cat
opt/tivoli/tsm/client/ba/bin/EN_US/dsmig.hlp
opt/tivoli/tsm/client/ba/bin/EN_US/tsmhelp.jar
opt/tivoli/tsm/client/ba/bin/EN_US/uil_nls.jar
opt/tivoli/tsm/client/ba/bin/EN_US/wchelp.htl
opt/tivoli/tsm/client/ba/bin/commonFunctions
opt/tivoli/tsm/client/ba/bin/configFile
opt/tivoli/tsm/client/ba/bin/dsm.jar
opt/tivoli/tsm/client/ba/bin/dsm.opt.smp
opt/tivoli/tsm/client/ba/bin/dsm.sys.smp
opt/tivoli/tsm/client/ba/bin/dsm_pref.jar
opt/tivoli/tsm/client/ba/bin/dsmadmc
opt/tivoli/tsm/client/ba/bin/dsmagent
opt/tivoli/tsm/client/ba/bin/dsmc
opt/tivoli/tsm/client/ba/bin/dsmcad
opt/tivoli/tsm/client/ba/bin/dsmcad.service
opt/tivoli/tsm/client/ba/bin/dsmcert
opt/tivoli/tsm/client/ba/bin/dsmj
opt/tivoli/tsm/client/ba/bin/dsmswitch
opt/tivoli/tsm/client/ba/bin/dsmtrace
opt/tivoli/tsm/client/ba/bin/dsmutillnx
opt/tivoli/tsm/client/ba/bin/exposeFastBackSnapshot.sh
opt/tivoli/tsm/client/ba/bin/favicon.ico
opt/tivoli/tsm/client/ba/bin/getFastBackSnapshots.sh
opt/tivoli/tsm/client/ba/bin/httpagent.jar
opt/tivoli/tsm/client/ba/bin/images/
opt/tivoli/tsm/client/ba/bin/images/wchelp.htl
opt/tivoli/tsm/client/ba/bin/iscsiMount.sh
opt/tivoli/tsm/client/ba/bin/jdom.jar
opt/tivoli/tsm/client/ba/bin/jh.jar
opt/tivoli/tsm/client/ba/bin/libTsmViSdk.so
opt/tivoli/tsm/client/ba/bin/libTsmViSdkAPI.so
opt/tivoli/tsm/client/ba/bin/nasdcm.lic
opt/tivoli/tsm/client/ba/bin/plugins/
opt/tivoli/tsm/client/ba/bin/plugins/libPiIMG.so
opt/tivoli/tsm/client/ba/bin/plugins/libPiSNAP.so
opt/tivoli/tsm/client/ba/bin/plugins/libPiVcloudJNI.so
opt/tivoli/tsm/client/ba/bin/plugins/libPiVcloudSuiteJNI.so
opt/tivoli/tsm/client/ba/bin/plugins/vcloud/
opt/tivoli/tsm/client/ba/bin/plugins/vcloud/piVcloudJwrapper.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloud/sdk/
opt/tivoli/tsm/client/ba/bin/plugins/vcloud/sdk/amqp-client-2.8.6.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloud/sdk/commons-codec-1.14.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloud/sdk/commons-logging-1.1.1.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloud/sdk/httpclient-4.2.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloud/sdk/httpcore-4.2.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloud/sdk/rest-api-schemas-5.5.0.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloud/sdk/vcloud-java-sdk-5.5.0.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/piVcloudSuiteJwrapper.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/commons-beanutils-1.9.4.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/commons-cli-1.4.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/commons-codec-1.11.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/commons-collections-3.2.2.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/commons-configuration-1.10.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/commons-lang-2.6.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/commons-lang3-3.9.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/commons-logging-1.2.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/httpasyncclient-4.1.4.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/httpclient-4.5.10.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/httpcore-4.4.12.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/httpcore-nio-4.4.10.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/jackson-annotations-2.10.0.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/jackson-core-2.10.0.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/jackson-databind-2.10.0.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/log4j-api-2.17.1.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/log4j-core-2.17.1.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/log4j-jcl-2.17.1.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/log4j-slf4j-impl-2.17.1.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/log4j.properties
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/logging.properties
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/nsx-vmc-aws-integration-sdk-2.5.1.0.1.15419398.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/nsx-vmc-policy-java-sdk-2.5.1.0.1.15419398.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/nsx-vmc-sdk-common-2.5.1.0.1.15419398.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/oidc-oauth2-sdk-0.0.1.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/slf4j-api-1.7.12.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/ssoclient-6.7.3.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/vapi-authentication-2.15.0.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/vapi-runtime-2.15.0.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/vapi-samltoken-2.15.0.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/vapi-vmc-sdk-2.15.0.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/vim25.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/vmc-bindings-1.24.0.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/vmc-draas-bindings-1.9.0.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/vsphereautomation-client-sdk-7.0.0.jar
opt/tivoli/tsm/client/ba/bin/plugins/vcloudsuite/sdk/vsphereautomation-lookupservice-7.0.0.jar
opt/tivoli/tsm/client/ba/bin/r_FastBackShell.sh
opt/tivoli/tsm/client/ba/bin/rc.dsmcad
opt/tivoli/tsm/client/ba/bin/uil.jar
opt/tivoli/tsm/client/ba/bin/unMountForTSM.sh
opt/tivoli/tsm/client/ba/bin/vmscan/
opt/tivoli/tsm/client/ba/bin/vmscan/BackupMon.exe
opt/tivoli/tsm/client/ba/bin/vmscan/CheckEnv.exe
opt/tivoli/tsm/client/ba/bin/vmscan/DeleteVMScanFiles.bat
opt/tivoli/tsm/client/ba/bin/vmtsmvss/
opt/tivoli/tsm/client/ba/bin/vmtsmvss/BackupMon.exe
opt/tivoli/tsm/client/ba/bin/vmtsmvss/CheckEnv.exe
opt/tivoli/tsm/client/ba/bin/vmtsmvss/DeleteACMFiles.bat
opt/tivoli/tsm/client/ba/bin/vmtsmvss/DummyBAProxy.exe
opt/tivoli/tsm/client/ba/bin/vmtsmvss/ProxyBAClient.exe
opt/tivoli/tsm/client/ba/bin/vmtsmvss/ProxyBAServer.exe
opt/tivoli/tsm/client/ba/bin/vmtsmvss/TsmMSSqlLogTruncation.bat
opt/tivoli/tsm/client/ba/bin/vmtsmvss/TsmVmwareDpVSS.dll
opt/tivoli/tsm/client/ba/bin/vmtsmvss/register_app.vbs
opt/tivoli/tsm/client/ba/bin/xercesImpl_2_2_1.jar
opt/tivoli/tsm/client/ba/bin/xmlParserAPIs_2_2_1.jar
opt/tivoli/tsm/client/api/
opt/tivoli/tsm/client/api/bin64/
opt/tivoli/tsm/client/api/bin64/EN_US/
opt/tivoli/tsm/client/api/bin64/EN_US/dscjres.txt
opt/tivoli/tsm/client/api/bin64/EN_US/dsmc.hlp
opt/tivoli/tsm/client/api/bin64/EN_US/dsmclientV3.cat
opt/tivoli/tsm/client/api/bin64/EN_US/dsmig.hlp
opt/tivoli/tsm/client/api/bin64/EN_US/tsmhelp.jar
opt/tivoli/tsm/client/api/bin64/EN_US/uil_nls.jar
opt/tivoli/tsm/client/api/bin64/EN_US/wchelp.htl
opt/tivoli/tsm/client/api/bin64/dsm.opt.smp
opt/tivoli/tsm/client/api/bin64/dsm.sys.smp
opt/tivoli/tsm/client/api/bin64/dsmcert
opt/tivoli/tsm/client/api/bin64/libApiTSM64.so
opt/tivoli/tsm/client/api/bin64/libTsmViSdk.so
opt/tivoli/tsm/client/api/bin64/libTsmViSdkAPI.so
opt/tivoli/tsm/client/api/bin64/libVMcrypto.so
opt/tivoli/tsm/client/api/bin64/libVMssl.so
opt/tivoli/tsm/client/api/bin64/libcrypto.so.1.0.2
opt/tivoli/tsm/client/api/bin64/libdmapi.so
opt/tivoli/tsm/client/api/bin64/libgpfs.so
opt/tivoli/tsm/client/api/bin64/libssl.so.1.0.2
opt/tivoli/tsm/client/api/bin64/libtsmxerces-c.so.28.0
opt/tivoli/tsm/client/api/bin64/libtsmxerces-depdom.so.28.0
opt/tivoli/tsm/client/api/bin64/libxmlutil-8.1.14.0.so
opt/tivoli/tsm/client/api/bin64/sample/
opt/tivoli/tsm/client/api/bin64/sample/callbuff.c
opt/tivoli/tsm/client/api/bin64/sample/callevnt.c
opt/tivoli/tsm/client/api/bin64/sample/callhold.c
opt/tivoli/tsm/client/api/bin64/sample/callmt1.c
opt/tivoli/tsm/client/api/bin64/sample/callmt2.c
opt/tivoli/tsm/client/api/bin64/sample/callret.c
opt/tivoli/tsm/client/api/bin64/sample/dapibkup.c
opt/tivoli/tsm/client/api/bin64/sample/dapidata.h
opt/tivoli/tsm/client/api/bin64/sample/dapiinit.c
opt/tivoli/tsm/client/api/bin64/sample/dapint64.c
opt/tivoli/tsm/client/api/bin64/sample/dapint64.h
opt/tivoli/tsm/client/api/bin64/sample/dapipref.c
opt/tivoli/tsm/client/api/bin64/sample/dapiproc.c
opt/tivoli/tsm/client/api/bin64/sample/dapiproc.h
opt/tivoli/tsm/client/api/bin64/sample/dapipw.c
opt/tivoli/tsm/client/api/bin64/sample/dapiqry.c
opt/tivoli/tsm/client/api/bin64/sample/dapirc.c
opt/tivoli/tsm/client/api/bin64/sample/dapismp.c
opt/tivoli/tsm/client/api/bin64/sample/dapitype.h
opt/tivoli/tsm/client/api/bin64/sample/dapiutil.c
opt/tivoli/tsm/client/api/bin64/sample/dapiutil.h
opt/tivoli/tsm/client/api/bin64/sample/dpsthread.c
opt/tivoli/tsm/client/api/bin64/sample/dpsthread.h
opt/tivoli/tsm/client/api/bin64/sample/dsmapifp.h
opt/tivoli/tsm/client/api/bin64/sample/dsmapips.h
opt/tivoli/tsm/client/api/bin64/sample/dsmapipw.c
opt/tivoli/tsm/client/api/bin64/sample/dsmapitd.h
opt/tivoli/tsm/client/api/bin64/sample/dsmgrp.c
opt/tivoli/tsm/client/api/bin64/sample/dsmrc.h
opt/tivoli/tsm/client/api/bin64/sample/makesmp64.linux86
opt/tivoli/tsm/client/api/bin64/sample/release.h
opt/tivoli/tsm/client/api/bin64/sample/tsmapifp.h
opt/tivoli/tsm/client/api/bin64/sample/tsmapitd.h
usr/
usr/local/
usr/local/ibm/
usr/local/ibm/gsk8_64/
usr/local/ibm/gsk8_64/ReadMe.txt
usr/local/ibm/gsk8_64/bin/
usr/local/ibm/gsk8_64/bin/gsk8capicmd_64
usr/local/ibm/gsk8_64/bin/gsk8ver_64
usr/local/ibm/gsk8_64/copyright
usr/local/ibm/gsk8_64/docs/
usr/local/ibm/gsk8_64/inc/
usr/local/ibm/gsk8_64/lib64/
usr/local/ibm/gsk8_64/lib64/libgsk8acmeidup_64.so
usr/local/ibm/gsk8_64/lib64/libgsk8cms_64.so
usr/local/ibm/gsk8_64/lib64/libgsk8dbfl_64.so
usr/local/ibm/gsk8_64/lib64/libgsk8drld_64.so
usr/local/ibm/gsk8_64/lib64/libgsk8kicc_64.so
usr/local/ibm/gsk8_64/lib64/libgsk8km2_64.so
usr/local/ibm/gsk8_64/lib64/libgsk8km_64.so
usr/local/ibm/gsk8_64/lib64/libgsk8ldap_64.so
usr/local/ibm/gsk8_64/lib64/libgsk8p11_64.so
usr/local/ibm/gsk8_64/lib64/libgsk8ssl_64.so
usr/local/ibm/gsk8_64/lib64/libgsk8sys_64.so
usr/local/ibm/gsk8_64/lib64/libgsk8valn_64.so
usr/local/ibm/gsk8_64/lib64/C/
usr/local/ibm/gsk8_64/lib64/C/icc/
usr/local/ibm/gsk8_64/lib64/C/icc/ReadMe.txt
usr/local/ibm/gsk8_64/lib64/C/icc/icclib/
usr/local/ibm/gsk8_64/lib64/C/icc/icclib/ICCSIG.txt
usr/local/ibm/gsk8_64/lib64/C/icc/icclib/libicclib084.so
usr/local/ibm/gsk8_64/lib64/N/
usr/local/ibm/gsk8_64/lib64/N/icc/
usr/local/ibm/gsk8_64/lib64/N/icc/ReadMe.txt
usr/local/ibm/gsk8_64/lib64/N/icc/icclib/
usr/local/ibm/gsk8_64/lib64/N/icc/icclib/ICCSIG.txt
usr/local/ibm/gsk8_64/lib64/N/icc/icclib/libicclib085.so
usr/local/ibm/gsk8_64/lib64/libgsk8iccs_64.so
usr/bin/
usr/bin/dsmadmc
usr/bin/dsmagent
usr/bin/dsmc
usr/bin/dsmcad
usr/bin/dsmcert
usr/bin/dsmj
usr/bin/dsmswitch
usr/bin/dsmtrace
usr/lib64/
usr/lib64/libApiTSM64.so
usr/lib64/libtsmxerces-c.so.28
usr/lib64/libtsmxerces-depdom.so.28
usr/lib64/libxmlutil-8.1.14.0.so

[flex@ceva_backup 8114]$ <strong>ll</strong>

total 395760
-rw-rw-r-- 1 flex flex 405258240 Jun  9 10:59 8114.tar
drwxrwxr-x 3 flex flex        20 Jun  9 10:53 opt
drwxrwxr-x 5 flex flex        43 Jun  9 10:53 usr
</pre>

and transfered this .tar file to the NAS:

<pre class="terminal">
[flex@ceva_backup 8114]$ <strong>scp -P 666 8114.tar flex@mynasid.synology.me:/tmp/</strong>

flex@mynasid.synology.me's password:
8114.tar                                                                                                                100%  386MB  11.7MB/s   00:33
</pre>

## Synology NAS side modification

On the NAS side I put /opt and /usr directories to the right place, and made some tests:

<pre class="terminal">
root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin# <strong>export LD_LIBRARY_PATH=/usr/local/ibm/gsk8_64/lib64/:/opt/tivoli/tsm/client/api/bin64/</strong>

root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin# <strong>dsmc</strong>

IBM Spectrum Protect
Command Line Backup-Archive Client Interface
  Client Version 8, Release 1, Level 14.0
  Client date/time: 06/09/2022 11:18:13
(c) Copyright by IBM Corporation and other(s) 1990, 2022. All Rights Reserved.

Node Name: BLACKHOLE
Session established with server CLOUDTSM1: Linux/x86_64
  Server Version 8, Release 1, Level 7.000
  Server date/time: 06/09/2022 11:18:15  Last access: 06/09/2022 11:17:24

Protect> quit

root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin# <strong>dsmadmc</strong>

IBM Spectrum Protect
Command Line Administrative Interface - Version 8, Release 1, Level 14.0
(c) Copyright by IBM Corporation and other(s) 1990, 2022. All Rights Reserved.

Enter your user id:  support

Enter your password:

Session established with server CLOUDTSM1: Linux/x86_64
  Server Version 8, Release 1, Level 7.000
  Server date/time: 06/09/2022 11:18:26  Last access: 06/09/2022 07:00:03
</pre>

No extra libstd tricks needed on DSM 7 ([tricks on DSM6](https://gyorgy.fleischmann.hu/Install_TSM_client_on_Synology_NAS.html))!  Make this environment variable persistent:

<pre class="terminal">
root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin# <strong>cat /etc/profile</strong>

#/etc/profile: system-wide .profile file for ash.

umask 077

PATH=/sbin:/bin:/usr/sbin:/usr/bin:/usr/syno/sbin:/usr/syno/bin:/usr/local/sbin:/usr/local/bin
export PATH

PGDATA=/var/services/pgsql
export PGDATA

TERMINFO=/usr/share/terminfo
export TERMINFO

TERM=${TERM:-cons25}
export TERM

PAGER=more
export PAGER

export LC_ALL=en_US.utf8
export LANG=en_US.utf8

PS1="`hostname`> "

alias dir="ls -al"
alias ll="ls -la"

ulimit -c unlimited

if [ -f /etc.defaults/.bashrc_profile ]; then
	source /etc.defaults/.bashrc_profile
fi

<strong># for IBM Spectrum Protect BA client
export LD_LIBRARY_PATH=/usr/local/ibm/gsk8_64/lib64/:/opt/tivoli/tsm/client/api/bin64/</strong>
</pre>

## Starting from DSM 7 we need to use systemd

Based on this IBM article: [Setting the client scheduler process to run as a background task and start automatically at startup](https://www.ibm.com/docs/en/spectrum-protect/8.1.14?topic=spso-setting-client-scheduler-process-run-as-background-task-start-automatically-startup) create the automatic startup script like this:

<pre class="terminal">
root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin# <strong>cat /etc/systemd/system/dsmcad.service</strong>

[Unit]
Description="IBM SP Client dsmcad service."
After=local-fs.target network-online.target

[Service]
Type=forking
GuessMainPID=no
Environment="DSM_LOG=/opt/tivoli/tsm/client/ba/bin"
Environment="JAVA_HOME=/opt/tivoli/tsm/tdpvmware/common/jre/jre"
Environment="LD_LIBRARY_PATH=/usr/local/ibm/gsk8_64/lib64/:/opt/tivoli/tsm/client/api/bin64/:/opt/tivoli/tsm/client/ba/bin:/opt/tivoli/tsm/tdpvmware/common/jre/jre/bin/classic"
Environment="PATH=/opt/tivoli/tsm/tdpvmware/common/jre/jre/bin:/sbin:/usr/sbin:/usr/local/sbin:/root/bin:/usr/local/bin:/usr/bin:/bin"
Environment="LANG=en_US"
Environment="LC_ALL=en_US"
Environment="LC_MESSAGES=en_US"
Environment="LC_CTYPE=hu_HU.utf8"
Environment="LC_ALL=hu_HU.utf8"
ExecStart=/usr/bin/dsmcad
ExecStopPost=/bin/bash -c 'let i=0; while [[ (-n "$(ps -eo comm | grep dsmcad)") && ($i -le 10) ]]; do let i++; sleep 1; done'
Restart=on-failure
<strong>RestartSec=20s</strong>

[Install]
WantedBy=multi-user.target
</pre>

/* In my case adding "RestartSec=20s" was necessary because my /opt was on another harddisk... */

<pre class="terminal">
root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin# <strong>systemctl daemon-reload</strong>

root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin# <strong>systemctl enable dsmcad.service</strong>

root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin# <strong>systemctl start dsmcad.service</strong>

root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin# <strong>systemctl status dsmcad.service</strong>

● dsmcad.service - "IBM SP Client dsmcad service."
   Loaded: loaded (/etc/systemd/system/dsmcad.service; enabled; vendor preset: disabled)
   Active: active (running) since Thu 2022-06-09 11:28:38 CEST; 7s ago
  Process: 27072 ExecStart=/usr/bin/dsmcad (code=exited, status=0/SUCCESS)
   CGroup: /system.slice/dsmcad.service
		   └─27075 /usr/bin/dsmcad

Jun 09 11:28:38 BLACKHOLE systemd[1]: Starting "IBM SP Client dsmcad service."...
Jun 09 11:28:38 BLACKHOLE systemd[1]: Started "IBM SP Client dsmcad service.".

root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin# <strong>cat dsmwebcl.log</strong>

2022-06-09 11.28.38 (dsmcad) IBM Spectrum Protect
2022-06-09 11.28.38 (dsmcad) Client Acceptor - Built Feb 22 2022 16:32:02
2022-06-09 11.28.38 (dsmcad) Version 8, Release 1, Level 14.0
2022-06-09 11.28.39 (dsmcad) ANS3000I TCP/IP communications available on port 47698.
2022-06-09 11.28.39 (dsmcad) Dsmcad is working in   Webclient   Schedule   mode.
2022-06-09 11.28.39 (dsmcad) ANS3000I HTTP communications available on port 1581.
2022-06-09 11.28.39 (dsmcad) Command will be executed in 1 minute.

root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin# <strong>cat dsmwebcl.log</strong>

2022-06-09 11.28.38 (dsmcad) IBM Spectrum Protect
2022-06-09 11.28.38 (dsmcad) Client Acceptor - Built Feb 22 2022 16:32:02
2022-06-09 11.28.38 (dsmcad) Version 8, Release 1, Level 14.0
2022-06-09 11.28.39 (dsmcad) ANS3000I TCP/IP communications available on port 47698.
2022-06-09 11.28.39 (dsmcad) Dsmcad is working in   Webclient   Schedule   mode.
2022-06-09 11.28.39 (dsmcad) ANS3000I HTTP communications available on port 1581.
2022-06-09 11.28.39 (dsmcad) Command will be executed in 1 minute.
2022-06-09 11.29.39 (dsmcad) Executing scheduled command now.
2022-06-09 11.29.40 (dsmcad) Next operation scheduled:
2022-06-09 11.29.40 (dsmcad) ------------------------------------------------------------
2022-06-09 11.29.40 (dsmcad) Schedule Name:         BLACKHOLE_INC_1D
2022-06-09 11.29.40 (dsmcad) Action:                Incremental
2022-06-09 11.29.40 (dsmcad) Objects:               / /opt/ /Apps/ /volume1/docs/ /volume1/eBooks/ "/volume1/family - private/"
2022-06-09 11.29.40 (dsmcad) Options:               -quiet -subdir=yes
2022-06-09 11.29.40 (dsmcad) Server Window Start:   20.00.00 on 2022-06-09
2022-06-09 11.29.40 (dsmcad) ------------------------------------------------------------
2022-06-09 11.29.40 (dsmcad) Command will be executed in 4 hours.

root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin# <strong>cat dsmsched.log</strong>

2022-06-09 11.29.39 Scheduler has been started by Dsmcad.
2022-06-09 11.29.39 IBM Spectrum Protect Backup-Archive Client Version 8, Release 1, Level 14.0
2022-06-09 11.29.39 Querying server for next scheduled event.
2022-06-09 11.29.39 Node Name: BLACKHOLE
2022-06-09 11.29.40 Session established with server CLOUDTSM1: Linux/x86_64
2022-06-09 11.29.40   Server Version 8, Release 1, Level 7.000
2022-06-09 11.29.40   Server date/time: 2022-06-09 11.29.40  Last access: 2022-06-09 11.28.41

2022-06-09 11.29.40 --- SCHEDULEREC QUERY BEGIN
2022-06-09 11.29.40 --- SCHEDULEREC QUERY END
2022-06-09 11.29.40 Next operation scheduled:
2022-06-09 11.29.40 ------------------------------------------------------------
2022-06-09 11.29.40 Schedule Name:         BLACKHOLE_INC_1D
2022-06-09 11.29.40 Action:                Incremental
2022-06-09 11.29.40 Objects:               / /opt/ /Apps/ /volume1/docs/ /volume1/eBooks/ "/volume1/family - private/"
2022-06-09 11.29.40 Options:               -quiet -subdir=yes
2022-06-09 11.29.40 Server Window Start:   20.00.00 on 2022-06-09
2022-06-09 11.29.40 ------------------------------------------------------------
2022-06-09 11.29.40 Scheduler has been stopped.

root@BLACKHOLE:/opt/tivoli/tsm/client/ba/bin#
</pre>

After a little more than an hour, all the expected functions are working fine again. 🤞