---
layout:     post_v2
title:      "Microsoft Xbox Wireless Controller"
author:     flex
category: 2022...
tags:       [flex, apple, macbook pro, xbox, game]
comments:   true

headerSIZE:       '610px'
headerBGimage:    'images/Microsoft/xbox_wireless_controller_header.jpeg'
headerBGposition: 'background-position: top	;'

headerLEFT:       '<div style="padding-right: 20px; margin: 0;"><b>Microsoft</b><br>Xbox<br>Wireless Controller</div>'
headerMainLEFTStyleOverride:      ''

contentpaddingLEFTStyleOverride: 'padding: 0px;'
contentpaddingLEFTstickypartStyleOverride: 'padding: 0px; padding-left: 20px; padding-right: 20px; padding-top: 10px;'
contentLEFTstickypart:           '<p style="padding: 0px;"><img src="images/Microsoft/xbox_wireless_controller-usb-c_box.png"><img src="images/Microsoft/xbox_wireless_controller_1.png"><img src="images/Microsoft/xbox_wireless_controller_2.png"></p>'
contentLEFTStyleOverride:        'background-image: linear-gradient( 180deg, rgba( 112, 113, 115, 1 ), rgba(240, 240, 240, 1)); background-repeat: repeat-x;'
contentLEFTDateStyleOverride: 'color: white;'
---

Már régóta gondolkodom egy új kontroller vásárlásán, mert az új macOS operációs rendszerek (> Monterey) valami újabb varázslatos oknál fogva változtattak valamit a korábbi Bluetooth stack megvalósításukon, így azóta már nem lehet a család egyetlen konzol platformjának (Nintendo Wii) a kontrollereit csatlakoztatni többet az új Mac-ekekhez. Erre született az gondolat, hogy akkor valamikor majd venni kell egy új eszközt, ami már használható lesz az új eszközökkel.

A lehetséges opciók ezek voltak:
1. Xbox Wireless Controller
2. PlayStation DualSense Wireless Controller
3. Nintendo Switch Pro Controller
4. 8BitDo SN30 Pro+

A szokásos kínlódások, tengődés, szöszmötölés után a kiválasztott eszköz végül egy Microsoft [Xbox drótnélküli (wireless)](https://www.xbox.com/en-US/accessories/controllers/xbox-wireless-controller) kontroller lett, amit szerintem így is hívnak: **Xbox Series X and Series S Controller**[^1]. Mivel semmi használható információt nem találtam arról, hogy mi a különbség a sima és az USB kábellel együtt adott eszközök között, ezért a drótosát választottam ugyanazért az árért. Meglepetés volt, hogy a boltban is pont volt 1db ilyen eszköz, így összeértek a dolgok és ő lett megvásárolva.

A vásárlása után, otthon hosszú percekig próbáltam mindenféle elérhető Apple eszközhöz (MacBook Pro (12.6.3), iPhone XR (15.7.1), iPhone 13 (16.3)) csatlakoztatni (a támogatott platformok valamik ilyesmik lehetnek >macOS Catalina 10.15, >iOS 13, 14.5), de egyik elérhető eszköz sem látta az új eszközt Bluetooth-on. 

Ezen a ponton gondolatban már azon voltam, hogy nem fogom megúszni a macOS Ventura frissítést. Végső elkeseredésemben a hozzá adott USB kábellel összedugtam a MacBook Pro-val és azóta hirtelen látja mindenhogy, akár Bluetooth-on keresztül is. Sőt azóta már meg mertem frissíteni a firmware-ét is Gergő szintén új játszóPC-jén (Intel i5-11400F 6-Core 2.6GHz, ZOTAC GeForce GAMING Twin Edge GeForce RTX 3060 Ti OC 8GB GDDR6 256bit) és csodák csodája, még mindig látszik az eszköz. 🙂

Volt 1 kis anomália a firmware frissítés elején:

![xbox.exe](images/Microsoft/xboxapp.png)

, de utána már simán ment minden:

![xbox.exe](images/Microsoft/xbox_wireless_controller_3.png){: style="border: 1px solid black;"}
![xbox.exe](images/Microsoft/xbox_wireless_controller_4.png){: style="border: 1px solid black;"}
![xbox.exe](images/Microsoft/xbox_wireless_controller_5.png){: style="border: 1px solid black;"}
![xbox.exe](images/Microsoft/xbox_wireless_controller_6.png){: style="border: 1px solid black;"}

Valamikor még ki fogom próbálni azt is, hogy megpróbálom az itthoni Apple TV HD-hez (4th generation, Bluetooth 4.0 wireless technology, 16.3.1), és majd a Telekom-os AndroidTV-hez is hozzákapcsolni. Már előre izgulok azon, hogy vissza fogom-e tudni kapni majd az eredeti most működő állapotot. (Mivel az internet szerint egyszerre csak egy Bluetooth-eszközzel szinkronizálható... innen le fog majd csatlakozni.)

IT-s ember legyen ám a talpán, aki ki tud igazodni ebben az őserdőben, hogy mi, mivel lesz végül kompatibilis??? Álljon itt néhány hasznos link még:
- [Using the Xbox Wireless Controller on different platforms](https://support.xbox.com/en-US/help/hardware-network/accessories/xbox-controller-functionality-operating-systems)
- [Apple Development: Supporting New Game Controllers](https://developer.apple.com/videos/play/wwdc2019/616/)
- [Gamepad Tester and Debugger](https://gamepad-tester.com/)

Közben még kiderült az is innen "[How to connect your Xbox controller to a PC or phone and swap back to your console](https://www.theverge.com/22273528/how-to-xbox-series-x-controller-swap-connection-phone-pc)", hogy legalább kétfajta drótnélküli protokollt támogat az eszköz és lehet, hogy ez is bekavart korábban: **"When you double-tap the sync button, the controller is switching between its Xbox Wireless and Bluetooth protocols."**, azaz, hogy nem Bluetooth az alapértelmezett drótnélküli kapcsolat típusa.

Játékok amikkel kipróbáltam:
- ZenPinballParty (1.9.59112) ✅
- Chasm (1) ✅
- Return to Monkey Island (1.3.1) ✅
- OpenEmu (2.3.3) ✅
- Zen Pinball 2 ❌
- Myth II (Universal, 1.8.3) ❌
- Pico-8 (0.2.5e) ✅

**Update 2023.02.21.:** Az Apple TV-s kapcsolat már simán ment:

![xbox.exe](images/Microsoft/Apple_TV_1.jpg){: style="border: 1px solid black;"}
![xbox.exe](images/Microsoft/Apple_TV_2.jpg){: style="border: 1px solid black;"}

és utána pedig az AndroidTV-vel sem volt semmi gond, azután pedig szépen visszatalált a MacBook-ra is. 🎉

Egyelőre nem tervezem külső alkalmazás használatát, de ezek jöhetnek majd később szóba:
- [Enjoyable](https://yukkurigames.com/enjoyable/)
- [Joystick Mapper](https://chibatacreations.com/)
- [Gamepad Mapper macOS App](https://dehixlab.com/gamepadmapper-howto/)

[^1]: [wikipédia: Xbox Wireless Controller](https://en.wikipedia.org/wiki/Xbox_Wireless_Controller)