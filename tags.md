---
layout:   default_v2
title:    TAG-ek
author:   flex
category: index
tags:     [tags]
comments: false

headerSIZE:       670px
headerBGimage:    'https://video-images.vice.com/articles/6259c2576032f900969ad342/lede/1650049778845-russiancruisermoskva.jpeg'
headerBGposition: 'background-position: center;'
headerLEFT:       '<h1>Start</h1>Valahol el kell kezdeni.'
headerRIGHT:      '<h1>⬅</h1>'
headerRIGHTbottom: '<div style="text-align: right"><div class="" style="display: inline-block; font-size: 50%; margin-bottom: 0px; background: black; color: white; padding: 7px;">Source: <a class="menu" href="https://www.vice.com/en/article/v7dkpx/a-piece-of-the-true-cross-may-have-sunk-with-russias-warship">"A Piece of the True Cross May Have Sunk with Russia’s Warship"</a></div></div>'

contentLEFT: '<center style="background-color: lightgrey; padding-top: 58px;"><a href="https://twitter.com/FleXoft"><img style="width: 80%; margin-bottom: 3%;" src="https://upload.wikimedia.org/wikipedia/en/thumb/4/47/Twitter_2010_logo_-_from_Commons.svg/1024px-Twitter_2010_logo_-_from_Commons.svg.png"></a></center>
<center style="background-color: lightgrey; padding: 20px;">
<a class="twitter-timeline" href="https://twitter.com/FleXoft?ref_src=twsrc%5Etfw" data-tweet-limit="3" data-dnt="true" data-chrome="noheader nofooter noscrollbar noborders transparent" data-lang="en"></a><script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script><center><i class="icon-star-empty-1" style="color: red;"></i> <i class="icon-star-empty-1" style="color: red;"></i> <i class="icon-star-empty-1" style="color: red;"></i></center>'
contentLEFTDateStyleOverride:  'padding: 0px;'
contentLEFTStyleOverride: 'background: rgba( 211, 211, 211, 1 ); color: white;'

disableContentTitle:  	   ''
contentRIGHTStyleOverride: 'padding-bottom: 0px;'
---

<style type="text/css">

  li {
	list-style-type: none;
  }

</style>

<hr style="border-top: 5px solid red;">
{% if page.disableContentTitle != true %}<h1>{{ page.title }}</h1>{% endif %}
<hr style="border-top: 5px solid red;">

<p></p>
<div class="tableofcontents">

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

{% for tag in tags %}

	<h2 id="{{ tag }}" style="margin: 0px;">{{ tag }}</h2>
	
	<ul style="list-style-type:none;">
  	{% for post in site.posts %}
  	{% if post.tags contains tag %}
  	<li>
	  	<a href="{{ post.url }}">{{ post.title }} //<small>{{ post.date | default: 1 | date_to_string }}</small>//</a><br> 
	  	{% for tag2 in post.tags %}{% if tag != tag2 %} • <a href="tags.html#{{ tag2 }}">{{ tag2 }}</a>{% endif %}{% endfor %}
  	</li>
  	{% endif %}
  	{% endfor %}
	</ul>

{% endfor %}

</div>