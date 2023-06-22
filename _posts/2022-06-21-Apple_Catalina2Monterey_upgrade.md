---
layout:   post_v3
title:    Upgrade from Apple macOS Catalina to Monterey
author:   flex
category: 2020...2022 (FNXS)
tags:     [compúter, Apple, Catalina, Monterey, English]
comments: true

headerSIZE:       '420px'
headerBGimage:   'images/Monterey/Apple_macOS_Monterey.png'
headerRIGHTbottom: '<div style="text-align: right"><div class="" style="display: inline-block; font-size: 50%; margin-bottom: 0px; background: black; color: white; padding: 7px;">Source: <a class="menu" href="https://support.apple.com/macos/upgrade">Upgrade to macOS Monterey</a></div></div>'
headerBGposition: 'background-position: center;'
headerRIGHTStyleOverride:     'padding: 0px;'
headerMainRIGHTStyleOverride: 'width: 100%;'
headerRIGHT:	   ''
disableheaderLEFT: true

contentLEFTStyleOverride: 'background: rgba( 40, 27, 123, 1 ); color: white;'
contentpaddingLEFTStyleOverride: 'padding: 0px;'
contentLEFT: '<p style="padding: 20px;"><img src="images/Apple_MBP16Touch-Silver-2019_nobg.png"></p>'
contentLEFTstickypart: 'Tartalom:<hr style="margin-top: 0px;"><div align="justify" style="padding-left: 20px;"><a href="#topofthepage">☝️</a><br><a href="#where-we-started-from">👉<nbsp>Where we started from<br><a href="#checklist-after-the-upgrade-process">👉<nbsp>Checklist after the upgrade process</a><br><a href="#bottomofthepage">👇</a></div>'
contentpaddingLEFTstickypartStyleOverride: 'padding-top: 5px;'

contentoutsidecontainerStyleOverride: 'background: rgba( 40, 27, 123, 1 );'
---

Knowing that I'm going to lose my current daily job, the next thing I planed to do on our home computer infrastructure. So the next thing after the [DSM 7 upgrade](Synology_DSM7_upgrade) on our Synology NAS was to upgrade the macOS operating system on my MacBook Pro from Catalina to the latest version of Monterey as soon as I could. This also happened a little bit earlier than I originally planned, but I couldn't wait any longer...

## Where we started from

<pre class="terminal">
07:13:18 Wed Jun 15 [flex@MBP16:[~/Downloads] [0]
$ <strong>df -h</strong>

Filesystem      Size   Used  Avail Capacity     iused      ifree %iused  Mounted on
/dev/disk1s1   466Gi   11Gi   36Gi    23%      488454 4881964426    0%   /
devfs          379Ki  379Ki    0Bi   100%        1311          0  100%   /dev
/dev/disk1s2   466Gi  414Gi   36Gi    93%     4155629 4878297251    0%   /System/Volumes/Data
/dev/disk1s5   466Gi  4.0Gi   36Gi    11%           4 4882452876    0%   /private/var/vm
map auto_home    0Bi    0Bi    0Bi   100%           0          0  100%   /System/Volumes/Data/home
drivefs        466Gi  431Gi   34Gi    93% 18446744069414584742 4294967295 4381649422663796736%   /Volumes/GoogleDrive

07:15:08 Wed Jun 15 [flex@MBP16:[~/Downloads] [0]
</pre>

<center>
<img style="width:75%" src="images/Apple_MBP16_macOS_Catalina.png">
</center>

<hr>

And here's what happened in pictures:

<center>
<img style="width:75%" src="images/Monterey/Monterey_upgrade_01.png">
<img style="width:75%" src="images/Monterey/Monterey_upgrade_02.png">
<img style="width:75%" src="images/Monterey/Monterey_upgrade_03.png">
<img style="width:75%" src="images/Monterey/Monterey_upgrade_04.png">
<img style="width:75%" src="images/Monterey/Monterey_upgrade_05.png">
<img style="width:75%" src="images/Monterey/Monterey_upgrade_06.png">
<img style="width:75%" src="images/Monterey/Monterey_upgrade_07a.png">
<img style="width:75%" src="images/Monterey/Monterey_upgrade_07b.png">
<img style="width:75%" src="images/Monterey/Monterey_upgrade_08.png">
<img style="width:75%" src="images/Monterey/Monterey_upgrade_09b.png">
<img style="width:75%" src="images/Monterey/Monterey_upgrade_09b.png">
</center>

## Checklist after the upgrade process:

- VPN CHECK: ✅
- [Alfred 4 for Mac](https://www.alfredapp.com/) CHECK: ✅

Because Apple [removed](https://www.macrumors.com/2022/01/28/apple-removing-python-2-in-macos-12-3/) python2 this [fix](https://github.com/willemml/alfred-convert/releases/tag/v3.7.3) needed for [conv](https://github.com/deanishe/alfred-convert/issues/91), and a lot of other python 2 based wokflow does not work yet...

- VMware Fusion (The sw update will have to be done at some point in the future.) now CHECK is: ✅

Apply this if needed: "Virtual Machines with side channel mitigations enabled may exhibit performance degradation (79832)" [link](https://kb.vmware.com/s/article/79832)

- brew doctor, cleanup, ... (I deleted the packages that were no longer needed.) CHECK: ✅

<pre class="terminal">
20:46:28 Wed Jun 22 [flex@MBP16:[/usr/local/Cellar] [0]
$ brew doctor

Your system is ready to brew.

20:52:33 Wed Jun 22 [flex@MBP16:[/usr/local/Cellar] [0]
$ brew cleanup

20:52:57 Wed Jun 22 [flex@MBP16:[/usr/local/Cellar] [0]
</pre>

- Time Machine backup CHECK: ✅

<center>
<img style="width:75%" src="images/Monterey/Time_Machine1.png">
<img style="width:75%" src="images/Monterey/Time_Machine2.png">
</center>

- Apple Xcode upgrade (It took more than 3 hours and my Bluetooth test application didn't compile!!! 🤔) CHECK: ✅

<center>
<img style="width:75%" src="images/Xcode_v13.4/Xcode_01.png">
<img style="width:75%" src="images/Xcode_v13.4/Xcode_02.png">
<img style="width:75%" src="images/Xcode_v13.4/Xcode_03.png">
<img style="width:75%" src="images/Xcode_v13.4/Xcode_04.png">
</center>

**UPDATE:** The compillation problem solved: [NSBluetoothAlwaysUsageDescription](https://developer.apple.com/documentation/bundleresources/information_property_list/nsbluetoothperipheralusagedescription) key was missing in Info.plist file.

- so far all incompatible Apps upgrade + CHECK: ✅
- printer CHECK: ✅

**UPDATE:** We can now print on an unsupported(???) Xerox 3140 laserprinter on macOS Monterey: [link](https://github.com/FleXoft/Xerox-Phaser-3140-3155-macOS-Catalina-Big-Sur-Monterey-driver)

- Steam CHECK: ✅ (No more Steel Storm: Burning Retribution! I will never know why it ran on Catalina and why it still sometimes successfully starts on macOS Monetery, but not always... 😢)
- jekyll CHECK: ✅ (ruby v3 and jekyll reinstall needed! Some ruby cleaning may also need to be done in the near future...)

<pre class="terminal">
$ <strong>brew reinstall ruby</strong>

==> Downloading https://ghcr.io/v2/homebrew/core/ruby/manifests/3.1.2
Already downloaded: /Users/flex/Library/Caches/Homebrew/downloads/1181ee3622f5b111116751625fd840df1123fe154edfb9a6e4a57b63255e9ceb--ruby-3.1.2.bottle_manifest.json
==> Downloading https://ghcr.io/v2/homebrew/core/ruby/blobs/sha256:31567181a85e0f3003358466c689142464b14cf817f8c37a6c5367e0c85bc1fc
==> Downloading from https://pkg-containers.githubusercontent.com/ghcr1/blobs/sha256:31567181a85e0f3003358466c689142464b14cf817f8c37a6c5367e0c85bc1fc?se=2
######################################################################## 100.0%
==> Reinstalling ruby
==> Pouring ruby--3.1.2.monterey.bottle.tar.gz
==> Caveats
By default, binaries installed by gem will be placed into:
  /usr/local/lib/ruby/gems/3.1.0/bin

You may want to add this to your PATH.

ruby is keg-only, which means it was not symlinked into /usr/local,
because macOS already provides this software and installing another version in
parallel can cause all kinds of trouble.

If you need to have ruby first in your PATH, run:
  echo 'export PATH="/usr/local/opt/ruby/bin:$PATH"' >> ~/.profile

For compilers to find ruby you may need to set:
  export LDFLAGS="-L/usr/local/opt/ruby/lib"
  export CPPFLAGS="-I/usr/local/opt/ruby/include"

For pkg-config to find ruby you may need to set:
  export PKG_CONFIG_PATH="/usr/local/opt/ruby/lib/pkgconfig"

==> Summary
🍺  /usr/local/Cellar/ruby/3.1.2: 15,996 files, 41MB
==> Running `brew cleanup ruby`...
Disable this behaviour by setting HOMEBREW_NO_INSTALL_CLEANUP.
Hide these hints with HOMEBREW_NO_ENV_HINTS (see `man brew`).

14:24:56 Tue Jun 21 [flex@flexs-MacBook-Pro-16:[~/gith/blog.fleischmann.hu] [0]
$ <strong>export PATH="/usr/local/opt/ruby/bin:$PATH"</strong>

14:25:22 Tue Jun 21 [flex@flexs-MacBook-Pro-16:[~/gith/blog.fleischmann.hu] [0]
$ <strong>ruby -v</strong>

ruby 3.1.2p20 (2022-04-12 revision 4491bb740a) [x86_64-darwin21]

14:25:26 Tue Jun 21 [flex@flexs-MacBook-Pro-16:[~/gith/blog.fleischmann.hu] [0]
$ <strong>jekyll -v</strong>

/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/dependency.rb:311:in `to_specs': Could not find 'eventmachine' (>= 0.12.9) among 88 total gem(s) (Gem::MissingSpecError)
Checked in 'GEM_PATH=/Users/flex/.gem/ruby/2.6.0:/Library/Ruby/Gems/2.6.0:/System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/gems/2.6.0', execute `gem env` for more information
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/specification.rb:1449:in `block in activate_dependencies'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/specification.rb:1438:in `each'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/specification.rb:1438:in `activate_dependencies'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/specification.rb:1420:in `activate'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/specification.rb:1452:in `block in activate_dependencies'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/specification.rb:1438:in `each'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/specification.rb:1438:in `activate_dependencies'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems/specification.rb:1420:in `activate'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:304:in `block in activate_bin_path'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:303:in `synchronize'
	from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:303:in `activate_bin_path'
	from /usr/local/bin/jekyll:23:in '<main'

14:25:38 Tue Jun 21 [flex@flexs-MacBook-Pro-16:[~/gith/blog.fleischmann.hu] [1]
$ <strong>gem install jekyll</strong>

Fetching unicode-display_width-1.8.0.gem
Fetching terminal-table-2.0.0.gem
Fetching safe_yaml-1.0.5.gem
Fetching rouge-3.29.0.gem
Fetching pathutil-0.16.2.gem
Fetching liquid-4.0.3.gem
Fetching forwardable-extended-2.6.0.gem
Fetching mercenary-0.4.0.gem
Fetching kramdown-2.4.0.gem
Fetching kramdown-parser-gfm-1.1.0.gem
Fetching ffi-1.15.5.gem
Fetching rb-inotify-0.10.1.gem
Fetching rb-fsevent-0.11.1.gem
Fetching listen-3.7.1.gem
Fetching jekyll-watch-2.2.1.gem
Fetching sassc-2.4.0.gem
Fetching jekyll-sass-converter-2.2.0.gem
Fetching concurrent-ruby-1.1.10.gem
Fetching i18n-1.10.0.gem
Fetching http_parser.rb-0.8.0.gem
Fetching eventmachine-1.2.7.gem
Fetching em-websocket-0.5.3.gem
Fetching colorator-1.1.0.gem
Fetching public_suffix-4.0.7.gem
Fetching jekyll-4.2.2.gem
Fetching addressable-2.8.0.gem
Successfully installed unicode-display_width-1.8.0
Successfully installed terminal-table-2.0.0
Successfully installed safe_yaml-1.0.5
Successfully installed rouge-3.29.0
Successfully installed forwardable-extended-2.6.0
Successfully installed pathutil-0.16.2
Successfully installed mercenary-0.4.0
Successfully installed liquid-4.0.3
Successfully installed kramdown-2.4.0
Successfully installed kramdown-parser-gfm-1.1.0
Building native extensions. This could take a while...
Successfully installed ffi-1.15.5
Successfully installed rb-inotify-0.10.1
Successfully installed rb-fsevent-0.11.1
Successfully installed listen-3.7.1
Successfully installed jekyll-watch-2.2.1
Building native extensions. This could take a while...
Successfully installed sassc-2.4.0
Successfully installed jekyll-sass-converter-2.2.0
Successfully installed concurrent-ruby-1.1.10
Successfully installed i18n-1.10.0
Building native extensions. This could take a while...
Successfully installed http_parser.rb-0.8.0
Building native extensions. This could take a while...
Successfully installed eventmachine-1.2.7
Successfully installed em-websocket-0.5.3
Successfully installed colorator-1.1.0
Successfully installed public_suffix-4.0.7
Successfully installed addressable-2.8.0
Successfully installed jekyll-4.2.2
Parsing documentation for unicode-display_width-1.8.0
Installing ri documentation for unicode-display_width-1.8.0
Parsing documentation for terminal-table-2.0.0
Installing ri documentation for terminal-table-2.0.0
Parsing documentation for safe_yaml-1.0.5
Installing ri documentation for safe_yaml-1.0.5
Parsing documentation for rouge-3.29.0
Installing ri documentation for rouge-3.29.0
Parsing documentation for forwardable-extended-2.6.0
Installing ri documentation for forwardable-extended-2.6.0
Parsing documentation for pathutil-0.16.2
Installing ri documentation for pathutil-0.16.2
Parsing documentation for mercenary-0.4.0
Installing ri documentation for mercenary-0.4.0
Parsing documentation for liquid-4.0.3
Installing ri documentation for liquid-4.0.3
Parsing documentation for kramdown-2.4.0
Installing ri documentation for kramdown-2.4.0
Parsing documentation for kramdown-parser-gfm-1.1.0
Installing ri documentation for kramdown-parser-gfm-1.1.0
Parsing documentation for ffi-1.15.5
Installing ri documentation for ffi-1.15.5
Parsing documentation for rb-inotify-0.10.1
Installing ri documentation for rb-inotify-0.10.1
Parsing documentation for rb-fsevent-0.11.1
Installing ri documentation for rb-fsevent-0.11.1
Parsing documentation for listen-3.7.1
Installing ri documentation for listen-3.7.1
Parsing documentation for jekyll-watch-2.2.1
Installing ri documentation for jekyll-watch-2.2.1
Parsing documentation for sassc-2.4.0
Installing ri documentation for sassc-2.4.0
Parsing documentation for jekyll-sass-converter-2.2.0
Installing ri documentation for jekyll-sass-converter-2.2.0
Parsing documentation for concurrent-ruby-1.1.10
Installing ri documentation for concurrent-ruby-1.1.10
Parsing documentation for i18n-1.10.0
Installing ri documentation for i18n-1.10.0
Parsing documentation for http_parser.rb-0.8.0
unknown encoding name "chunked\r\n\r\n25" for ext/ruby_http_parser/vendor/http-parser-java/tools/parse_tests.rb, skipping
Installing ri documentation for http_parser.rb-0.8.0
Parsing documentation for eventmachine-1.2.7
Installing ri documentation for eventmachine-1.2.7
Parsing documentation for em-websocket-0.5.3
Installing ri documentation for em-websocket-0.5.3
Parsing documentation for colorator-1.1.0
Installing ri documentation for colorator-1.1.0
Parsing documentation for public_suffix-4.0.7
Installing ri documentation for public_suffix-4.0.7
Parsing documentation for addressable-2.8.0
Installing ri documentation for addressable-2.8.0
Parsing documentation for jekyll-4.2.2
Installing ri documentation for jekyll-4.2.2
Done installing documentation for unicode-display_width, terminal-table, safe_yaml, rouge, forwardable-extended, pathutil, mercenary, liquid, kramdown, kramdown-parser-gfm, ffi, rb-inotify, rb-fsevent, listen, jekyll-watch, sassc, jekyll-sass-converter, concurrent-ruby, i18n, http_parser.rb, eventmachine, em-websocket, colorator, public_suffix, addressable, jekyll after 18 seconds
26 gems installed

14:48:29 Tue Jun 21 [flex@flexs-MacBook-Pro-16:[~/gith/blog.fleischmann.hu] [0]
$ <strong>gem install eventmachine http_parser.rb ffi webrick</strong>

Building native extensions. This could take a while...
Successfully installed eventmachine-1.2.7
Parsing documentation for eventmachine-1.2.7
Done installing documentation for eventmachine after 0 seconds
Building native extensions. This could take a while...
Successfully installed http_parser.rb-0.8.0
Parsing documentation for http_parser.rb-0.8.0
unknown encoding name "chunked\r\n\r\n25" for ext/ruby_http_parser/vendor/http-parser-java/tools/parse_tests.rb, skipping
Done installing documentation for http_parser.rb after 0 seconds
Building native extensions. This could take a while...
Successfully installed ffi-1.15.5
Parsing documentation for ffi-1.15.5
Done installing documentation for ffi after 1 seconds
Successfully installed webrick-1.7.0
Parsing documentation for webrick-1.7.0
Done installing documentation for webrick after 0 seconds
4 gems installed

$ <strong>/usr/local/lib/ruby/gems/3.1.0/bin/jekyll -v</strong>

jekyll 4.2.2

$ <strong>sudo gem install -n /usr/local/bin jekyll</strong>

Password:
Successfully installed jekyll-4.2.2
Parsing documentation for jekyll-4.2.2
Done installing documentation for jekyll after 0 seconds
1 gem installed

21:05:06 Thu Jun 23 [flex@MBP16:[~] [0]
$ <strong>jekyll -v</strong>

jekyll 4.2.2
</pre>

After another little more than an hour (not including the Time Machine backup), all the expected functions are working fine again on the new OS. 🤞

I don't feel it's any faster than the Catalina as some articles on the internet said so but it's still lagging a bit sometime... 😢

**I find it very ridiculous and very sad at the same time that something can lag on such an expensive machine!!!**

It's also so sad to see how the manufacturers don't support their old devices any more and push us to buy new ones. Two examples where fortunately, there is still a way to use them on a modern operating system in our example on Apple macOS Monetery: [Wacom Graphire 4](https://github.com/thenickdude/wacom-driver-fix), [Xerox Phaser 3140 macOS](https://gist.github.com/santiago26/60425d2759b1360555111caa47b6769f). One of them is a bit trickier, but the other one just didn't start the device driver installer and caused **???the incompatibility???** Yes, it's not a real incompatibility, but laziness of the manufacturers!!! Shame!