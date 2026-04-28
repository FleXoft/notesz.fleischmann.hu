---
layout:   post_2026
title:    Microsoft Outlook reIndex
author:   flex
category: 2026
tags:     [technology, technológia, tech, macOS, Microsoft, Outlook, spotlight, tada.wav]
comments: false
---

{% include hudate.html %}

{% include prev_next_mini.html %}

{% include figure.html 
   url="images/20260427/00_problem.png" lightboxable="true"
   shadow="true" radius="0px" width="30%" float="right" class=""
   caption='Az eredeti probléma itt jelentkezett' align="right" 
%}

/* Régóta nem tudom, hogy pontosan milyen Microsoft Office-ok léteznek és nekem épp ebből melyik fut éppen a gépemen. Az About ablaka nekem most ezt mondja magáról: **Version 16.108.1 (26041915)**. */

De nem is ez a konkrét gondom most. Az alapproblémám a következő volt: kerestem olyan levelezést, amiben a zónázásról volt szó valami régebbi levélben és valamiért ezekre a keresésekre nem adott semmi értelmes eredményt csak a friss leveleket hozta fel és én pont a régieket kerestem, mert tudtam, hogy voltak korábban ilyen levelek.

Az internet segítségével[^1] a következőket kellett tennem, hogy megjavuljon:

[^1]: Forrás: [How to fix the search in Outlook for Mac](https://www.youtube.com/watch?v=Q-NIYeuLFKg)

A megoldáshoz fel kell venni a Spotlight keresőbe kivételre és utána azonnal le is lehet venni, ezzel az egész gép újraindexelése helyett, ki lehet kényszeríteni, hogy újra indexelje le csak az Microsoft Outlook levelezés adatait:

{% include figure.html 
   url="images/20260427/01_search_privacy.png" lightboxable="true"
   shadow="true" radius="0px" width="100%" float="" class=""
   caption='' align="right" 
%}

Még mielőtt megcsináltam volna ennyi indexelő folyamat futott a gépen:

<pre class="terminal shadow">
14:43:06 Mon Apr 27 [flex@flexs-MacBook-Pro-M4:[~/Downloads] [0]
$ ps -ef | grep mdworker | wc -l
       6
</pre>

Aki ezt az útvonalat és a nevezéktanát kitalálta... /* Mi lehet a UBF8T346G9? és miért kell ilyen nevet adni egy mappának??? */

```
~/Library/Group Containers/UBF8T346G9.Office/Outlook
```

{% include figure.html 
   url="images/20260427/02_add.png" lightboxable="true"
   shadow="" radius="0px" width="70%" float="" class=""
   caption='' align="right" 
%}

{% include figure.html 
   url="images/20260427/03_added_remove.png" lightboxable="true"
   shadow="" radius="0px" width="70%" float="" class=""
   caption='' align="right" 
%}

Ha sikerült felvenni és utána elvenni, akkor pár másodperc múlva szépen megindulnak az indexelő folyamatok:

<pre class="terminal shadow">
14:43:11 Mon Apr 27 [flex@flexs-MacBook-Pro-M4:[~/Downloads] [0]
$ ps -ef | grep mdworker | wc -l
      26

14:43:41 Mon Apr 27 [flex@flexs-MacBook-Pro-M4:[~/Downloads] [0]
$ ps -ef | grep mdworker | wc -l
      42

14:43:47 Mon Apr 27 [flex@flexs-MacBook-Pro-M4:[~/Downloads] [0]
$ btop

14:44:04 Mon Apr 27 [flex@flexs-MacBook-Pro-M4:[~/Downloads] [0]
$ ps -ef | grep mdworker | wc -l
      42

14:44:07 Mon Apr 27 [flex@flexs-MacBook-Pro-M4:[~/Downloads] [0]
$
</pre>

{% include figure.html 
   url="images/20260427/04_btop.png" lightboxable="true"
   shadow="" radius="0px" width="100%" float="" class=""
   caption='' align="right" 
%}

Ha újra lenyugodtak már a folyamatok, akkor elindítva az Outlook-ot, már rendben megtalálja a régi leveleket is...

<pre class="terminal shadow">
14:49:11 Mon Apr 27 [flex@flexs-MacBook-Pro-M4:[~/Downloads] [0]
$ ps -ef | grep mdworker | wc -l
      7
</pre>

<center><iframe style="margin-bottom: -50px;" width="110" height="200" src="https://www.myinstants.com/instant/windows-tada-59171/embed/" frameborder="0" scrolling="no"></iframe></center>