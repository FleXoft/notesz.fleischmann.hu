---
layout:   default_2026
title:    Tartalomjegyzék / table of contents
author:   flex
category: index
tags:     [muzax, video]
comments: false

beforeMain: '<div class="image-container"><img width="100%" style="height: 470px; margin-bottom: -45px;" src="images/1563176849891-Vice-LICK-Photo-Bex-Wade-5.jpeg"><div class="image-caption">Source: <a href="https://www.vice.com/en/article/neapm7/lick-events-launch-opening-queer-women-club" target="_blank">"Inside the Queer Club with a Strict ‘No Men’ Policy"</a></div></div>'
---

{% assign rawtags = "" %}
{% for post in site.posts %}
{% assign ttags = post.tags | join:'|' | append:'|' %}
{% assign rawtags = rawtags | append:ttags %}
{% endfor %}

{% assign rawtags = rawtags | split:'|' | sort %}

{% assign tags = "" %}

{% for tag in rawtags %}
{% if tag != "" %}

{% if tags == "" %}
{% assign tags = tag | split:'|' %}
{% endif %}

{% unless tags contains tag %}
{% assign tags = tags | join:'|' | append:'|' | append:tag | split:'|' %}
{% endunless %}
{% endif %}
{% endfor %}

<br>

<hr color="red" style="height:3px;">
{% if page.disableContentTitle != true %}<center><h1>{{ page.title }}</h1></center>{% endif %}
<hr color="red" style="height:3px;">

<br>

<center><strong>Kedves Elvtársnők, Elvtársak, Tisztelt Idelátogató!</strong></center>

<br>

{% include figure.html 
   url="images/Kivalo_dolgozo.png" 
   shadow="" radius="0px" width="200px" float="right"
   caption='' align="right" 
%}

Ez az oldal szerintem nem neked van és ha nem vagy teljesen biztos abban, hogy tényleg ide akartál látogatni, akkor kérlek ezen a ponton zárd be ezt az ablakot! Köszönöm szépen!

„Abban, hogy tudok írni, nagyjából biztos voltam. Lehet, hogy nagyképűen hangzik, de az ember ne álljon oda tizenegyest lőni, ha azon szorong, hogy nem képes futni, rúgni és célozni”[^1] Teljesen igaz, de ezt most itt egy kicsit felrúgjuk, mert betűk nélkül bár sokkal könnyebb lenne, de nem fog tudni működni ez a notesz.

[^1]: [A könyvemet Orbán Viktornak ajánlanám, hogy lássa azt is, ami nem a bankszámlája meg a Putyin segge](https://telex.hu/karakter/kultura/2025/12/16/pottyondy-edina-interju-kozossegi-iranyelvek-megsertese)

Nem biztos, hogy teljesen jó ötlet ez a <a href="tags">#hashtag</a>-elés még mindig, de egyelőre ez most még marad itt:

<div style="width: 75%; margin: auto; padding: 0px; text-align: center;">

{% assign tmptags = site.tags | sort %}
{% for tag in tmptags %}
{% assign fontsize = tag | last | size | times: 3 | plus: 80 %}
{% assign boldfont = "" %}
{% if fontsize > 225 %}
	{% assign fontsize = 225 %}
	{% assign boldfont = "font-weight: bold;" %}
{% endif %}
  <span style="white-space: nowrap;"><a href="tags#{{ tag | first }}" style="font-size: {{ fontsize }}%; {{ boldfont }}">{{ tag[0] }}{% if tag.last.size > 1 %}({{ tag | last | size }})
{% endif %}
  </a></span>
{% endfor %}

</div>

És akkor itt jön az igazi tartalomjegyzék. 

Úgy döntöttem végül, hogy a legfrissebbek lesznek a tetején, így kell tehát olvasni visszafele:
	
<div class="tableofcontents" style="margin-bottom: 20px;">

{% assign tmpcategories = site.categories %}
{% for category in tmpcategories reversed %}
	<div style="width: 100%; border: 0px solid; display: inline-block;">
	{% capture category_name %}{{ category | first }}{% endcapture %}
	<h2 style="margin: 0px;">{{ category_name }}</h2>
	<hr width="100%" style="margin: 0px">
	<ul style="text-align: left; list-style-type: none; margin-top: 1rem; margin-bottom: 1rem;">
	{% assign site_list = site.categories[category_name]   %}
	{% for post in site_list %}
		<li><a href="{{ site.baseurl }}{{ post.url }}">> {{post.title}}</a></li>
	{% endfor %}
	</ul>
	</div>
{% endfor %}

</div>