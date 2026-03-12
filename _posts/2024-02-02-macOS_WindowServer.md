---
layout:   post_v3
title:    "macOS Sonoma Saga és WindowServer"
author:   flex
category: 2024
tags:     [Apple, macOS]
comments: false

menuRIGHTStyleOverride:           'background: rgba( 0, 0, 0, 0.85 );'

disableContentTitle: true

headerSIZE:                       '0px'
headerBGimagex:                   ''
headerBGposition:                 'background-position: center;'
headerRIGHTStyleOverride:         'padding: 0px;'

headerRIGHTbottom: ''

contentpaddingLEFTStyleOverride:  'padding: 0px;'
#disablecontentLEFT: true
#contentRIGHTStyleOverride:        ''

disablecontentLEFT:               true
contentRIGHTStyleOverride:        'width: 100%;'

contentRIGHTStyleOverride:        'width: 100%; max-width: 1234px; margin: auto;'
contentpaddingRIGHTStyleOverride: 'padding: 0px;'
---

<link rel="stylesheet" type="text/css" href="css/override_v2_courier.css">

<!--
{% include hudate.html %}

<hr style="border-top: 1px solid;">

{% include prev_next_mini.html %}
-->

<div style="position:relative; text-align: left; color: black; margin-top: -5px;">
  <div class="" style="margin-left: calc( 50% - 50vw ); margin-right: calc( 50% - 50vw );">
	  <img class="shadow" style="border: 0px solid black; height: 600px;" src="https://cdn.arstechnica.net/wp-content/uploads/2023/09/sonoma-light-800x500.jpg">
	  {% include minirdesc.html DESC='<b>macOS Sonoma</b>' %}
  </div>
  <div style="position: absolute; top: 30px; left: 0px; width: 100%;">
	  <h1>{{ page.title }}</h1>
	  {% include hudate.html %}
	  <hr style="border-top: 1px solid; color: black; border-top-width: 0px; border-color: black;">
	  {% include prev_next_mini.html %}
  </div>
</div>

<!--
<div class="" style="margin-left: calc( 50% - 50vw ); margin-right: calc( 50% - 50vw );">
<img class="shadowx" style="border: 0px solid black;" src="https://cdn.arstechnica.net/wp-content/uploads/2023/09/sonoma-light-800x500.jpg">
{% include minirdesc.html DESC='<b>macOS Sonoma</b>' %}
</div>
-->

Régóta nyüglődök ezzekkel a különböző pontokon megjelenő macOS röcögésekkel már a korábbi Mac-eken is. Én úgy emlékszem, hogy ezek a nyűgök nem voltak jellemzőek még az első Intel-es gépeken és az azokon futó OS X-eken.

Megpróbáltam már az összes varázslatot, amit az internet javasolt, de tényleg, hogy ki kelljen egy ilyen prémium gépen kapcsolni pár default vizuális effektet ahhoz, hogy rendesen menjen??? milyen már ez? Az is látszik, hogy ezek a várázslások nem is oldották meg véglegesen a problámákat, mert időről-időre újra megjelentek a zavaró belassulások, tehát csak ideiglenesen oldódott meg valami, ha egyáltalán...

És itt jön képbe a legutolsó móka, amikor szándékaimmal ellentétben az Apple valahogy sikeresen megfrissítette a macOS Monterey operációs rendszert Sonomára. Ezzel a frissítéssel, bár minden rendben működött alapvetően tovább a gépen, jött pár újabb kellemetlen röcögő érzés. Lehet csak a rossz érzés adódott hozzá a korábbi rözögésekhez, de valami biztosan rárakódott az biztos.

Gondolatban már azért várom, hogy milyen lehet egy M?-es gépet használni, de egyelőre nincsenek kétségeim, hogy ott is lesz majd nekem valami meglepetés.

Na de visszatérve az eredeti gondolatra, miközben a Sonoma baleseten keseregtem az Apple Support-tal együtt, közben elkezdtem figyelgetni a gép process-eit és feltűnt, hogy valaki (WindowServer process) [indokolatlanul sok CPU fogyaszt](2024_01_19).

Na erre készült el ez a kis szkript, hogy amikor kedvem van lássam, hogy rosszalkodik-e ezen a processzen keresztül valami.

<hr style="margin-left: calc( 50% - 50vw );">

```bash
#!/bin/bash

# The original idea was to somehow monitor the CPU usage of the WindowServer process because
# one of the settings (Status bar) in the iTerm application was consuming CPU resources unnoticed.
# I didn't notice that for a very long time!!! ☹️

# Prerequisites:
#  - terminal-notifier (brew install terminal-notifier)

# variables
maxcpu=30
weight=0
maxweight=5
counter=0
prevwscpu=0

# main engine
while :; do
	wscpu=$(ps -A -o %cpu,comm | grep WindowServer | awk '{print int($1)}')
	if [ $wscpu -gt $maxcpu ]; then
		((weight++))
		# echo "$weight"
		if [ $weight -gt $maxweight ]; then
			((counter++))
			# delta
			if [ $prevwscpu -gt $wscpu ]; then
				dicon='⬇'
			elif [ $prevwscpu -lt $wscpu ]; then
				dicon='⬆'
			else
				dicon='-'
			fi
			terminal-notifier \
				-group 'hu.fleischmann.macoswscpumonitor' \
				-title 'WindowServer high CPU usage!' \
				-subtitle 'Warning❗' \
				-message "CPU: $wscpu% $dicon, counter: $counter"
			#echo 'High CPU!'
			prevwscpu=$wscpu
		fi
	else
		# reset
		weight=0
		counter=0
	fi
	sleep 1
done
```

<hr style="margin-right: calc( 50% - 50vw );">

<iframe style="border-radius:12px" src="https://open.spotify.com/embed/track/7w5AOd6HrDIHewHfpABEss?utm_source=generator" width="100%" height="152" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>