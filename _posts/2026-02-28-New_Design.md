---
layout:   post_2026
title:    A király új ruhája
author:   flex
category: 2026
tags:     [WWW, web, design, html, dizájn]
comments: false

beforeMain: '<div class="image-container"><img width="100%" style="height: 400px; margin-bottom: -45px;" src="photos/graffiti/graffiti01.jpeg"><div class="image-caption">Budapest, XVIII. kerület</div></div>'
---

{% include hudate.html %}

{% include prev_next_mini.html %}

<iframe data-testid="embed-iframe" style="border-radius:12px" src="https://open.spotify.com/embed/track/3SZhwgn2fYVmpBuzi4NIyM?utm_source=generator" width="100%" height="100" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>

Valami megmagyarázhahatatlan oknál fogva bevillant az a gondolat, hogy mi lennem, ha a mostanában oly népszerű valamelyik AI agent-et megkérném, hogy segítsen nekem kicsit a korábbi elképzeléseim szerint gatyába rázni ezt a régi weboldalt.

Az egyszerűség kedvéért a Google segíédjét kértem fel a feladatra:

{% include figure.html 
   url="images/Gemini3.png" 
   shadow="true" radius="0px" width="75%" float=""
   caption='Google <a ref="https://gemini.google.com/app?hl=hu">Gemini v3</a>' align="right" 
%}

Az eredmény egészen használható lett és az a tapasztalatom született meg ebből az együttdolgozásból, hogy egyszerű weboldal készitéshez és egyszerű szkriptek írására egészen szórakoztató módon működik már.

Amit tudnia kellet az:
- valami webes fejléc, lábléc az oldalon
- a fejlécnek el kell tűnnie, amikor lefele görgetem a hosszabb oldalakat
- a láblécnek a kisebb oldalkon is lent a helye
- kell legyen olyan lehetőség, amivel képeket lehet, jobbra/balra igazítani
- kell valami új képgaléria a régi [Unite Gallery](http://unitegallery.net/index.php) helyett, ami tud valami hasonló 'Tiles - Justified' funkciót (ez még elég egyeszerű lett, de az alap dolgokat már modern módon tudja)
- lehessen bele videót is tenni
- legyenek billentyűparancsok is az oldalon, ezek most a következő
	- **\<1>**, az utolsó, legfrissebb bejegyzésre ugrik mindig
	- **\<h>**, a kezdő oldalra visz
	- **\<←→>**, nyilakkal lehessen mozogni a bejegyzések között
	- **\<d>**, kapcsolgasson valami debug funkciót
	- **\<s>**, lehessen a szöveges tartalom méretét valahogy kapcsolgatni
	- **\<f>**, lehessen a szöveges tartalom fontját állítani (Courier, Arial, Times)
	- **\<j>**, a sorkizárást be lehessen kapcsolni
	- **\<n>**, legyen valami éjszaki mód is	

és itt meg is álltam ezzel a folyamattal egyelőre. 

A következő lépes a régi bejegyzések egy részének átmozgatása ebbe az új környezetbe.