---
layout:   post_v3
title:    "To infinity and beyond!"
author:   flex
category: 2022...
tags:     [flex]
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

{% include menufader.html FROM='black' TO='white' %}

{% include footerfader.html FROM='black' TO='white' %}

<!--
{% include hudate.html %}

<hr style="border-top: 1px solid;">

{% include prev_next_mini.html %}
-->

<div style="position:relative; text-align: left; color: white; margin-top: -5px;">
  <div class="" style="margin-left: calc( 50% - 50vw ); margin-right: calc( 50% - 50vw );">
	<img class="shadow" style="border: 0px solid white; height: 600px;" src="photos/Mohacs_vege.jpeg">
	{% include minirdesc.html DESC='<b>Mohács vége, a szerző saját felvétele, 2025.01.11.</b>' %}
  </div>
  <div style="position: absolute; top: 30px; left: 0px; width: 100%;">
	<h1>{{ page.title }}</h1>
	{% include hudate.html %}
	<hr style="border-top: 1px solid; color: white; border-top-width: 0px; border-color: white;">
	{% include prev_next_mini.html COLOR='white' %}
  </div>
</div>

<!--
<div class="" style="margin-left: calc( 50% - 50vw ); margin-right: calc( 50% - 50vw );">
<img class="shadowx" style="border: 0px solid black;" src="https://cdn.arstechnica.net/wp-content/uploads/2023/09/sonoma-light-800x500.jpg">
{% include minirdesc.html DESC='<b>macOS Sonoma</b>' %}
</div>

<hr style="margin-left: calc( 50% - 50vw );">
-->

Tavaly nem is emlékszem már pontosan miért (a fejünkben lévő kisördög bekavart megint), de mégsem sikerült folytatni ezt a témát és ahogy látom idővel ez egyre csak nehezebb és nehezebb lesz.

Valószínűleg folyamatos elégedetlenségem a dizájnnal is még midig extraként belejátszik ebbe. Ezért most próbáljunk ki egy olyat, hogy egy kicsit szűkebbre veszem a "szövegdoboz" méretét és nézzük meg mi történik utána! Eredetileg ez volt:

{% include 	insert_pxline.html uniqueID='1' %}

és ebbe így férne bele 80 karakter:

12345678901234567890123456789012345678901234567890123456789012345678901234567890

Most pedig vegyünk egy kicsit vissza, pont annyira, hogy a 80 karakter kitöltse az egészet és nézzük meg az hogyan néz majd ki:

<div style="max-width: 922px; margin: auto; font-family: courier; font-size: 1.2rem; line-height: 1.6; text-align: justify;">

{% include 	insert_pxline.html uniqueID='2' %}

<pre style="font-family: courier; font-size: 1.2rem; line-height: 1.6;">
0        1         2         3         4         5         6         7         8
12345678901234567890123456789012345678901234567890123456789012345678901234567890
</pre>

Biztos nem így kell ennek tudományosan nekiállni, de én nem tudok most más módszert erre.

<br><br>

<li>Nem tudok még mit kezdeni a paragrafusok közötti hellyel, de próbálom átugorni a problémát.</li>

</div>