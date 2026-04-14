---
layout:   post_2026
title:    Psion Series 3mx
author:   flex
category: 2026
tags:     [flex, computer, psion, retro]
comments: false
---

{% include hudate.html %}

{% include prev_next_mini.html %}

{% include figure.html 
   url="images/Psion/psion_series_3mx-nobg.png" lightboxable="true"
   shadow="" radius="0px" width="100%" float="" class=""
   caption='Már nem emlékszem pontosan mikor, hogyan vettem.<br>De talán a 3c-t vittem javítani a Psion Magyarországhoz valamiért és ott a mérnöktől vettem aki javította vagy javította volna a 3c-t.' align="Right" 
%}

## Bevezető

Na erőt vettem magamon és nekiálltam ennek a problémának is. Imádtam az összes Psion eszközt, amivel én találkoztam. Az első a Psion Organizer volt és abból is a 4 soros kijelzős 64KB-os modellek link kábellel, mint csúcskonfiguráció. Akkor még nem volt hozzá memória modulom, de később még ez is lett valahonnan hozzá. A katonaságnál a nagyemberek már ilyennel számolták a lőelemeket.

De most nem is ezekkel akarok foglalkozni, bár van még egy ilyen készülékem is, hanem a következő generációval, ami a Psion Series3 volt. A simából nekem nem volt, azt a lépcsőt simán ugrottam. Az első készülékem egy Series 3a volt, majd lett 3c és 3mx-em is. Ez az utolsó maradt meg. A 3c-még Amerikában levelezésre is használtam, mert volt hozzá egy 9V-os elemmel működő hordozható modemem hozzá. Elképesztő még visszaemlékezni is erre, hogy POP3-al lehetett rajta egészen stabilan levelezni. Elképesztő2! 

A mostani feladat a szuperszámítógép ([Apple MacBook Pro M4](Apple_MacBook_Pro_M4)) összekötése a Psion-nal. Ehhez vettem egy klassz USB-C-s RS-232 dongle-t, ami nemrég érkezett meg. A kliens program pedig ez a szép [Reconnect](https://reconnect.jbmorley.co.uk/) névre hallgató gyönyörű [GitHub](https://github.com/) projekt lesz hozzá.

Átfutottam a net-en ezt [https://vintage.bohemiancave.org.uk/index.php/psion-series-3-3a-3c/](https://vintage.bohemiancave.org.uk/index.php/psion-series-3-3a-3c/) az oldalt is, de ott sok érdekes dolog mellett, nem volt még szó a fentebb említett szép grafikus alkalmazásról, csak az annak is alapjául szolgáló [plptools](https://github.com/plptools/plptools)-ról, ami egy kisebb küzdés után lefordítható a jézusszámítógépen, de valószínűleg használni már abban a formában nem kell.

Megjött a szuper USB-C RS-232 adapter:
   
{% include figure.html 
   url="images/Psion/UniversalSerialAdapter-top.jpeg" 
   shadow="" radius="0px" width="100%" float="" class=""
   caption='A kiválasztott eszköz egy: Universal Serial Adapter Rev 1 (Second version) (USB-C, UART, RS232) lett,<br>innen: <a href="https://www.imania.dk/product_info.php?currency=EUR&cPath=204&products_id=7224&language=en">imania.dk</a>' align="Right" 
%} 

Az első kapcsolat nem jött össze, mert úgy tűnik, hogy csak adni tud az eszköz, de nem veszi a notebook a Psion által küldött adatokat. Így ez most kicsit parkolópályára kerül addig, amíg nem sikerül ennek a problémának utánajárni. (**2026.04.13.**)

## HW Összefoglaló

<style>
    table { width: 100%; border-collapse: collapse; }
    table :is(td, th) { 
      border: 1px solid var(--text-color);  
      padding: 0.3em;
    }
    table th { background-color: var(--table-bg-color); }
    table th:first-child { border: 0px solid grey; visibility:hidden; }
    table td:first-child { background-color: var(--table-bg-color); }
</style>

| | Series 3 | Series 3a | Series 3c | Series 3mx |
| :--- | :---: | :---: | :---: | :---: |
| **CPU** |	NEC V30H | NEC V30H | NEC V30H | NEC V30MX |
| **Speed** | 3.84MHz | 7.68MHz | 7.68MHz | 27.684MHz |
| **Screen type** |	mono LCD | grey LCD | grey LCD | grey LCD |
| **Screen backlight** |	No | No | No[^1] | Yes |
| **Resolution** | 240×80 | 480×160 | 480×160 | 480×160 |
| **RAM** | 128K / 256K  | 256K – 2M  | 1M / 2M | 1M / 2M |
| **ROM** | ?  | 1M | 1M  | 1M | 
| **Keyboard** | qwerty, calculator-style, 8 app. buttons | qwerty, calculator-style, 8 app. buttons | qwerty, calculator-style, 9 app. buttons | qwerty, calculator-style, 9 app. buttons |
| **Discs** | 2xSSD | 2xSSD | 2xSSD | 2xSSD |
| **Serial port** | 6-pin port[^2] | 6-pin port[^2] | RS-232C[^3] | RS-232C[^3] |
| **Serial max baud** | 9,600 baud | 19,200 baud | 38,400 baud | 115,200 baud |
| **Power + backup** | 2xAA batteries + CR1620 | 2xAA batteries + CR1620 | 2xAA batteries + CR1620 | 2xAA batteries + CR2025 |
| **Sound** | Yes | Yes | Yes | Yes |
| **Microphone** | No | Yes | Yes | Yes |
| **IrDA** | No | No | Yes | Yes |

[^1]: Some models (mostly in the US marked) have a backlight.
[^2]: Requires dongle.
[^3]: Proprietary connector.