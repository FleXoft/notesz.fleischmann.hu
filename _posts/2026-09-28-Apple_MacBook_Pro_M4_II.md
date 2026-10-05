---
layout:   post_2026
title:    Apple MacBook Pro 16&quot; M4 II.
author:   flex
category: 2026
tags:     [Apple, MacBook Pro, computer, kompjúter]
comments: false

beforeMain: '<div class="image-container"><img width="100%" style="height:; margin-top: 50px; margin-bottom: -20px;" src="images/Apple/Apple_MacBook_Pro_closed_16-nobg.png"></div>'
---

{% include hudate.html %}

{% include prev_next_mini.html %}

{% include figure.html 
   url="images/Apple/Apple_MacBook_Pro_keyboard_16_nobg.png" 
   shadow="" class="" radius="0px" width="100%" float=""
   caption='Apple MacBook Pro 16&quot; M4' align="right" 
%}

[Még korábban](Apple_MacBook_Pro_M4) nem nagyon erőlködve, de nem hirtelen nem találtam szürke MacBook képet, és leragadtam a nyitott MacBook varázsánál, most kerestem szürke képeket, mert az enyém is szürke.

Lassan 1 éve "kínozzuk" már egymást és bár megint szokás szerint voltak azért hullámok a kapcsolatunkban, megint egy stabil nyugvópontra érkeztünk meg. Megy minden. Megcsinálta a Sonos az ARM-es macOS-alkalmazást is és minden más is szépen csinálja a dolgát. Még mindig elkápráztat, hogy mit lehet megcsinálni ezzel a géppel és ebből nekem a Nintendo Switch emulátorok a legcsodálatosabbak.

Operációsrendszer szinten még nem mertem ugrani semerre, így maradtam a macOS Sequoiá-n, most v15.8.1 Bár a telefonon már iOS 26.7.1-van, de érzésre szépen elvannak egymással.

<div style="margin-left: calc( 50% - 50vw ); margin-right: calc( 50% - 50vw ); margin-bottom: 0px;">
{% include figure.html 
   url="images/202609_myDesktop.png" 
   shadow="" radius="" width="100%" float=""
   caption="Mission Control, 2026.09.&nbsp;&nbsp;" align="right"
%}
</div>

<style>
    .container {
        /* Háttérkép beállítása */
        background-image: url('images/flex.png'); /* Cseréld ki a saját képed URL-jére */
        background-position: center center; /* Középre igazítás fentről/lentről és oldalról */
        background-repeat: no-repeat;
        //background-size: cover; /* Kitölti a teljes div-et */
    
        /* Tartalom középre igazítása függőlegesen és vízszintesen a konténeren belül */
        display: flex;
        align-items: center; /* Függőlegesen középre */
        justify-content: center; /* Vízszintesen középre */
    
        /* Méretezés */
        min-height: 420px;
        width: 100%;
        padding: 20px;
        box-sizing: border-box;
    
        /* Esztétika: sötétített overlay, hogy a szöveg jobban olvasható legyen */
        position: relative;
        //color: #ffffff;
    }
    
    /* Opcionális sötétítő réteg a jó olvashatóságért */
    .container::before {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        //background-color: rgba(0, 0, 0, 0.4);
        z-index: 1;
    }
    
    /* A két oszlop elrendezése */
    .row {
        display: flex;
        width: 100%;
        max-width: 1200px; /* Maximális szélesség limitálása */
        position: relative;
        z-index: 2; /* A sötétítő réteg felé helyezi a szöveget */
        
        gap: 280px;
    }
    
    /* Az egyes oszlopok beállításai */
    .col {
        flex: 1; /* Egyenlő szélességű oszlopok */
    }
    .col-left {
        text-align: left; /* Balra igazított szöveg */
    }
    
    .col-left p {
        text-align: left; /* Balra igazított szöveg */
    }
    
    .col-right {
        text-align: right; /* Jobbra igazított szöveg */
    }
    
    .col-right p {
        text-align: right; /* Jobbra igazított szöveg */
    }
    
    /* Mobil nézet: 768px alatt az oszlopok egymás alá kerülnek */
    @media (max-width: 768px) {
        .row {
            flex-direction: column;
        }
        .col-right {
            text-align: left; /* Mobilon a jobb oldali is lehet balra igazított a jobb olvashatóságért */
        }
        .col-right p {
            text-align: left; /* Mobilon a jobb oldali is lehet balra igazított a jobb olvashatóságért */
        }
    }
</style>

<div class="container">
    <div class="row">
        <div class="col col-left">
            <h2>Bal oldali oszlop</h2>
            <p>Ez a szöveg a bal oldali oszlopban található, és balra van igazítva.</p>
        </div>
        <div class="col col-right">
            <h2>Jobb oldali oszlop</h2>
            <p>Ez a szöveg a jobb oldali oszlopban található, és jobbra van igazítva.</p>
        </div>
    </div>
</div>