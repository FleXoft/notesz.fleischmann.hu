---
layout:   default_v3
title:    Tartalomjegyzék / table of contents
author:   flex
category: index
tags:     [muzax, video]
comments: false

headerSIZE:       380px
headerBGimage:    'images/1563176849891-Vice-LICK-Photo-Bex-Wade-5.jpeg'
headerBGposition: 'background-position: center;'
headerLEFT:       '<h1>Start</h1>Valahol el kell kezdeni és ez most itt lesz a tartalomjegyzéknél...'
contentLEFTStyleOverride:           'background-image: linear-gradient( 180deg, rgba( 38, 38, 38, 1 ), rgba(240, 240, 240, 1)); background-repeat: repeat-x;'
headerRIGHT:      '<h1 style="">⬅</h1>'
headerRIGHTbottom: '<div style="text-align: right"><div class="" style="display: inline-block; font-size: 50%; margin-bottom: 0px; background: black; color: white; padding: 7px;">Source: <a class="menu" href="https://www.vice.com/en/article/neapm7/lick-events-launch-opening-queer-women-club">"Inside the Queer Club with a Strict &lsquo;No Men&rsquo; Policy"</a></div></div>'

contentLEFT: '<center style=" padding-top: 58px;"><a href="https://twitter.com/FleXoft"><img style="width: 80%; margin-bottom: 3%;" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Twitter_2010_logo_-_from_Commons.svg/1024px-Twitter_2010_logo_-_from_Commons.svg.png"></a></center><center style="padding: 20px;"><a class="twitter-timeline" href="https://twitter.com/FleXoft?ref_src=twsrc%5Etfw" data-tweet-limit="5" data-dnt="true" data-chrome="noheader nofooter noscrollbar noborders transparent" data-lang="en"></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></center>'
contentLEFTDateStyleOverride:    'padding: 0px;'
contentpaddingLEFTStyleOverride: 'padding: 0px;'
xcontentLEFTStyleOverride:       'background: rgba( 211, 211, 211, 1 ); color: white;'
contentLEFTStyleOverride:        'background: rgba( 110, 145, 185, 0.75 );'
contentLEFTStyleOverride:        'background-image: linear-gradient( 180deg, rgba( 55, 70, 85, 1 ), rgba(240, 240, 240, 1)); background-repeat: repeat-x;'

disableContentTitle: ''
xdisablecontentLEFT: true
xcontentRIGHTStyleOverride:       'width: 100%;'
contentpaddingRIGHTStyleOverride: 'padding-bottom: 0px;'
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

<hr style="border-top: 5px solid red;">
{% if page.disableContentTitle != true %}<center><h1>{{ page.title }}</h1><center>{% endif %}
<hr style="border-top: 5px solid red;">

Nem biztos, hogy teljesen jó ötlet ez a <a href="tags">#hashtag</a>-elés, de egyelőre ez most még marad itt:

<div style="width: 65%; margin: auto; padding: 30px; text-align: center;">

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

És akkor itt jön az igazi tartalomjegyzék. Úgy döntöttem végül, hogy a legfrissebbek lesznek a tetején, így kell tehát olvasni visszafele:

<p></p>

<div class="tableofcontents">

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