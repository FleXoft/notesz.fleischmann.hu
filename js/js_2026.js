// Gallery v1.0
    
class Gallery {
    constructor(el) {
        this.container = el;
        this.items = Array.from(el.querySelectorAll('.gallery-item'));
        this.init();
        
        // Ablak átméretezés figyelése
        // Window resize esemény
        // window.addEventListener('resize', () => {
        //     console.log("Resize esemény elkapva!"); // Debughoz
        //     this.updateLayout();
        // });        
    }

    init() {
        this.items.forEach((item, index) => {
            const img = item.querySelector('img');
            
            // Automatikus arányszámítás, amint a kép metaadatai betöltenek
            const process = () => {
                const ratio = img.naturalWidth / img.naturalHeight;
                item.dataset.ratio = ratio;
                item.style.flexBasis = (200 * ratio) + 'px';
                item.style.flexGrow = ratio;
                item.style.opacity = "1";
            };

            if (img.complete) process(); else img.onload = process;

            item.onclick = () => {
                const allImages = Array.from(this.container.querySelectorAll('img'));
                galleryControl.open(allImages, index);
            };
        });
    }
        
    // Külön metódus a méretezéshez a flex-basis frissítésére
    // calculateItemSize(item, ratio) {
    //     // TRÜKK: Az alapmagasságot picit változtatjuk a képernyő szélessége alapján,
    //     // így a flex-basis értéke megváltozik, és elindul a CSS transition.
    //     const windowWidth = window.innerWidth;
    //     let dynamicHeight = 200;
    // 
    //     if (windowWidth < 768) {
    //         dynamicHeight = 160; // Mobilméret
    //     }
    // 
    //     // Itt történik a tényleges értékadás, ami kiváltja az animációt
    //     item.style.flexBasis = (dynamicHeight * ratio) + 'px';
    //     item.style.flexGrow = ratio;
    //     
    //     // Frissítsük a CSS változót is az elemen, ha a magasság is változna
    //     item.style.height = dynamicHeight + 'px';
    // }
    calculateItemSize(item, ratio) {
        const windowWidth = window.innerWidth;
        
        // --- Beállítások a folyékony átmenethez ---
        const minWidth = 320;  // Minimális képernyőszélesség (pl. kis mobil)
        const maxWidth = 1200; // Maximális szélesség, ami felett már nem nő a kép
        const minHeight = 140; // A legkisebb képmagasság ezen a pici mobilon
        const maxHeight = 220; // A legnagyobb képmagasság a nagy képernyőkön
        
        // Kiszámoljuk, hol tartunk a két végpont között egy 0 és 1 közötti szorzóval
        let percentage = (windowWidth - minWidth) / (maxWidth - minWidth);
        
        // Biztosítjuk, hogy a szorzó véletlenül se menjen 0 alá vagy 1 fölé (clamp)
        percentage = Math.max(0, Math.min(1, percentage));
        
        // Kiszámoljuk a dinamikus magasságot az arány alapján
        let dynamicHeight = minHeight + ((maxHeight - minHeight) * percentage);

        // Itt történik a tényleges értékadás az elemen
        item.style.flexBasis = (dynamicHeight * ratio) + 'px';
        item.style.flexGrow = ratio;
        item.style.height = dynamicHeight + 'px';
    }
    
    updateLayout() {
        this.items.forEach(item => {
            const ratio = parseFloat(item.dataset.ratio);
        if (ratio) this.calculateItemSize(item, ratio);
        });
    }
};

const galleryControl = {
    currentList: [],
    currentIndex: 0,
    dom: {
        box: document.getElementById('lightbox'),
        img: document.getElementById('lightbox-img'),
        cap: document.getElementById('caption')
    },

    open(list, idx) {
        this.currentList = list;
        this.currentIndex = idx;
        this.render();
        this.dom.box.style.display = 'flex';
        document.body.style.overflow = 'hidden';
        
        // Nyilak elrejtése, ha csak 1 kép van
        const navButtons = this.dom.box.querySelectorAll('.nav-btn');
        // if (this.currentList.length <= 1) {
        //     navButtons.forEach(btn => btn.style.display = 'none');
        // }
        navButtons.forEach(btn =>
            btn.style.display = list.length <= 1 ? 'none' : ''
        );
    },

    render() {
        const currentImg = this.currentList[this.currentIndex];
        this.dom.img.src = currentImg.dataset.full;
        //this.dom.cap.innerText = currentImg.alt;
        this.dom.cap.innerHTML = currentImg.dataset.cap || currentImg.alt || "";

        // Arány lekérése a szülőtől az üzemmódhoz
        const ratio = parseFloat(currentImg.parentElement.dataset.ratio);
        if (ratio > 1.1) {
            this.dom.box.classList.add('landscape-mode');
        } else {
            this.dom.box.classList.remove('landscape-mode');
        }
        this.dom.box.scrollTop = 0;
        
        // --- ÚJ RÉSZ: Kattintás kezelése a képen ---
        this.dom.img.onclick = (e) => {
            // Megakadályozzuk, hogy a kattintás "továbbszálljon" a háttérre
            e.stopPropagation(); 

            if (this.currentList.length <= 1) {
                // Ha csak egy kép van, zárja be a lightbox-ot
                this.close();
            } else {
                // Ha több kép van, mehet a következőre (vagy amit szeretnél)
                this.next();
            }
        };
    },

    // --- ÚJ ANIMÁLT LAPOZÓ LOGIKA KEZDŐDIK ---
    animateAndChange(direction) {
        if (this.currentList.length <= 1) return;
    
        // 1. Kép elrejtése (kicsúsztatás indítása)
        const outClass = direction === 'next' ? 'swipe-out-left' : 'swipe-out-right';
        this.dom.img.classList.add(outClass);
    
        // Megvárjuk a CSS transition végét (300ms)
        setTimeout(() => {
            // Index léptetése a háttérben
            if (direction === 'next') {
                this.currentIndex = (this.currentIndex + 1) % this.currentList.length;
            } else {
                this.currentIndex = (this.currentIndex - 1 + this.currentList.length) % this.currentList.length;
            }
    
            const nextImgData = this.currentList[this.currentIndex];
    
            // 2. ELŐTÖLTÉS: Létrehozunk egy láthatatlan segéd-objektumot
            const tempImg = new Image();
            
            tempImg.onload = () => {
                // CSAK AKKOR frissítjük a látható képet, ha az új már biztosan lementve van a böngészőben
                // Ezzel kerüljük el a régi kép bevillanását
                this.render(); 
                
                // 3. Visszaúsztatás: Kicsit várunk, hogy a böngésző "felfogja" az új képet
                requestAnimationFrame(() => {
                    requestAnimationFrame(() => {
                        this.dom.img.classList.remove('swipe-out-left', 'swipe-out-right');
                    });
                });
            };
    
            // Itt indítjuk el a tényleges letöltést a háttérben
            tempImg.src = nextImgData.dataset.full;
            
        }, 300);
    },

    next() { this.animateAndChange('next'); },
    prev() { this.animateAndChange('prev'); },
    // --- ÚJ ANIMÁLT LAPOZÓ LOGIKA VÉGE ---

    toggleFit() { this.dom.box.classList.toggle('fit-mode'); },
    close() { this.dom.box.style.display = 'none'; this.dom.img.src = ''; document.body.style.overflow = 'auto'; }
};
    
// Standalone lightbox 
document.querySelectorAll('img.lightboxable').forEach(img => {
    // Kurzor stílus beállítása programozottan is, ha a CSS-ben elmaradna
    img.style.cursor = 'pointer';

    img.onclick = () => {
        // Megkeressük a hozzá tartozó feliratot a környezetében
        const figure = img.closest('figure');
        const figcaption = figure ? figure.querySelector('figcaption') : null;
        
        // Ha van figcaption, és nincs alt, átvesszük a szöveget a lightboxhoz
        // if (figcaption && !img.alt) {
        //     img.alt = figcaption.innerText;
        // }
        if (figcaption) {
            // A teljes HTML-t (linkeket is) elmentjük egy saját adatmezőbe
            img.dataset.cap = figcaption.innerHTML;
        }

        // Biztosítjuk, hogy legyen full-size adat, ha nincs megadva, az eredetit használja
        if (!img.dataset.full) {
            img.dataset.full = img.src;
        }

        // Megnyitás a meglévő lightbox vezérlővel
        galleryControl.open([img], 0);
    };
});

// Inicializálás
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.justified-gallery').forEach(g => new Gallery(g));

    // document.addEventListener('keydown', e => {
    //     if (galleryControl.dom.box.style.display === 'flex') {
    //         if (e.key === "ArrowRight") galleryControl.next();
    //         if (e.key === "ArrowLeft") galleryControl.prev();
    //         if (e.key === "Escape") galleryControl.close();
    //     }
    // });
    document.addEventListener('keydown', function(e) {
        // 1. Ellenőrizzük, hogy a Lightbox (NIGHTbox) nyitva van-e
        const lightbox = document.getElementById('lightbox');
        const isLightboxVisible = lightbox && (lightbox.style.display === 'flex' || lightbox.classList.contains('active'));
        
        // Ha a Lightbox nyitva van, hagyjuk, hogy a galéria kezelje a gombokat, 
        // és ne navigáljon el az oldalról.
        if (isLightboxVisible) {        
            if (e.key === 'ArrowLeft') { // Balra nyíl
                galleryControl.prev();
                e.preventDefault();
                return;
            }
            if (e.key === 'ArrowRight') { // Jobbra nyíl
                galleryControl.next();
                e.preventDefault();
                return;
            }
            if (e.key === 'Escape') { // ESC gomb
                galleryControl.close();
                return;
            }
            if (e.key === 's') { // s gomb
                galleryControl.toggleFit();
                return;
            }            
        }
          
        // 2. Ha NINCS nyitva a lightbox, akkor jöhetnek az oldal szintű parancsok
        if (e.altKey) return; // Alt billentyű esetén ne fusson le
    
        switch (e.key) {
            case 'ArrowLeft': // Balra nyíl -> Előző bejegyzés
                window.location.href = left_href;
                break;
            case 'ArrowRight': // Jobbra nyíl -> Következő (Home)
                window.location.href = right_href;
                break;
            case 'h': // 'h' -> Home
                window.location.href = "/";
                break;
            case '1': // '1' -> Demo
                window.location.href = first_href;
                break;
            case 'j': // 'j' -> justy
                justyToggler();
                break;
            case 'f': // 'f' -> font
                fontToggler();
                break;
            case 'n': // 'n' -> night
                themeToggler();
                break;
            case 'd': // 'd' -> Debug ON
                debugToggler();
                break;
            case 's': // 's' -> Size
                mainSizeToggler();
                break;
        }
    });
            
    // Érintés (Swipe) kezelése a Lightboxhoz
    let touchstartX = 0;
    let touchendX = 0;
    
    const lightboxElement = document.getElementById('lightbox');
    
    lightboxElement.addEventListener('touchstart', e => {
        touchstartX = e.changedTouches[0].screenX;
    }, false);
    
    lightboxElement.addEventListener('touchend', e => {
        touchendX = e.changedTouches[0].screenX;
        handleGesture();
    }, false);
    
    function handleGesture() {
        // Csak akkor fusson, ha a Lightbox nyitva van
        if (lightboxElement.style.display !== 'flex') return;
    
        const threshold = 50; // Minimum elmozdulás pixelben
        if (touchendX < touchstartX - threshold) {
            // Balra húzás -> Következő kép
            galleryControl.next();
        }
        if (touchendX > touchstartX + threshold) {
            // Jobbra húzás -> Előző kép
            galleryControl.prev();
        }
    }
    
});
    
// HTML engine
const header      = document.getElementById('main-header');
const hamburger   = document.getElementById('hamburger');
const themeToggle = document.getElementById('theme-toggle');
const fontToggle  = document.getElementById('font-toggle');
const justyToggle = document.getElementById('justy-toggle');
const mainSizeToggle = document.getElementById('size-toggle');
const debugToggle = document.getElementById('debug-toggle');

// Időzítő az eltűnéshez
// setTimeout(() => {
//     if (!header.classList.contains('manual-show')) {
//         header.classList.add('fade-out');
//         hamburger.style.display = 'block';
//     }
// }, 10000);

// Visszahozás hamburgerrel
// function toggleHeader() {
//     header.classList.toggle('fade-out');
//     header.classList.add('manual-show'); // Ne tűnjön el újra automatikusan
// }
function toggleHeader() {
    const header = document.getElementById('main-header');
    
    // Ha rajta van a rejtő class, levesszük (megjelenik), ha nincs, rátesszük (eltűnik)
    if (header.classList.contains('header-hidden')) {
        header.classList.remove('header-hidden');
        //header.style.transform = "translateY(0)"; // Kényszerített megjelenítés
    } else {
        header.classList.add('header-hidden');
       // header.style.transform = "translateY(-100%)"; // Kényszerített rejtés
    }
}
// function toggleHeader() {
//     const header = document.getElementById('main-header');
//     
//     // Ellenőrizzük, hogy jelenleg rejtve van-e (akár a class, akár a scroll miatt)
//     const isHidden = header.classList.contains('header-hidden') || 
//                      window.getComputedStyle(header).transform.includes('-100') ||
//                      header.style.transform.includes('-100');
// 
//     if (isHidden) {
//         // HA REJTVE VAN -> HOZZUK ELŐ
//         header.classList.remove('header-hidden');
//         header.style.transform = "translateY(0)";
//         header.style.opacity = "1";
//     } else {
//         // HA LÁTSZIK -> REJTSÜK EL
//         header.classList.add('header-hidden');
//         header.style.transform = "translateY(-100%)";
//         header.style.opacity = "0";
//     }
// }
// function toggleHeader() {
//     const header = document.getElementById('main-header');
//     
//     // Csak egy osztályt kapcsolgatunk, nem írunk felül fix pixel/transform értékeket
//     header.classList.toggle('force-show');
//     
//     // Opcionális: Ha rákattintottunk, vegyük le a rejtő osztályt, ha rajta volt
//     if (header.classList.contains('force-show')) {
//         header.classList.remove('header-hidden');
//     }
// }

// Night Mode váltó és mentés
function themeToggler() {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    const newTheme = isDark ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    document.body.classList.toggle('night-mode');

    // Állapot mentése
    localStorage.setItem('selectedTheme', newTheme);
}
//
themeToggle.addEventListener('click', themeToggler);

// Justify váltó és mentés
function justyToggler() {
    const mainContent = document.querySelector('main');
    const isJustified = mainContent.classList.toggle('justify-text');
    
    // Állapot mentése (true/false stringként)
    localStorage.setItem('isJustified', isJustified);
}
//
justyToggle.addEventListener('click', justyToggler);    

// Font váltó
//const fontToggle = document.getElementById('font-toggle');
const fonts = ['font-courier', 'font-arial', 'font-times'];
let currentFontIndex = 0;

// Kezdő betűtípus beállítása
document.body.classList.add(fonts[currentFontIndex]);
//
function fontToggler() {
    // Előző osztály eltávolítása
    document.body.classList.remove(fonts[currentFontIndex]);
    
    // Index léptetése (0 -> 1 -> 2 -> 0...)
    currentFontIndex = (currentFontIndex + 1) % fonts.length;
    
    // Új osztály hozzáadása
    document.body.classList.add(fonts[currentFontIndex]);
    
    // Opcionális: Mentés localStorage-ba, hogy frissítés után is megmaradjon
    localStorage.setItem('selectedFontIndex', currentFontIndex);
}
//
fontToggle.addEventListener('click', fontToggler);

// Debug funkció: ki-be kapcsolás
let debugSwitch = false;
function debugToggler() {
    if (debugSwitch) {
        changeStylesheetRule('div', 'border', '0px solid');
        debugSwitch = false;
    } else {
        changeStylesheetRule('div', 'border', '1px solid red');
        debugSwitch = true;
    }
}
//
debugToggle.addEventListener('click', debugToggler);

// Méret funkció: Main szélesség növelése/visszaállítása
function mainSizeToggler() {
    const main = document.querySelector('main');
    if (!main) return;

    // Ha még nincs rajta a 'wide' class, rárakja, ha rajta van, leveszi
    if (main.style.maxWidth === '100%') {
        main.style.maxWidth = ''; // Visszaáll az eredeti CSS-re (pl. 800px)
        main.style.width = '';
    } else {
        main.style.maxWidth = '100%';
        main.style.width = '95%'; // Kicsi margó, hogy ne érjen teljesen a széléhez
    }
}
//
mainSizeToggle.addEventListener('click', mainSizeToggler);

let lastScrollTop = 0;
//const header = document.getElementById('main-header');

window.addEventListener('scroll', function() {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Ha lefelé görgetünk és már nem az oldal tetején vagyunk
    if (scrollTop > lastScrollTop && scrollTop > 50) {
        header.classList.add('header-hidden');
    } 
    // Ha felfelé görgetünk
    else {
        header.classList.remove('header-hidden');
    }
    
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Safari mobil kezelése
}, false);

// 2. EGÉR POZÍCIÓ FIGYELÉSE: Ha a tetején van az egér, mutassa a menüt
window.addEventListener('mousemove', function(e) {
    // a felső rész, de nem a hamburger ikon! mert az zavaró lenne
    if (e.clientX > 35 && e.clientY <= 30) {
        header.classList.remove('header-hidden');
    }
});

// 1. Night Mode visszaállítása
const savedTheme = localStorage.getItem('selectedTheme');
if (savedTheme === 'dark') {
    document.documentElement.setAttribute('data-theme', 'dark');
    document.body.classList.add('night-mode');
}

// 2. Sorkizárás visszaállítása
const savedJusty = localStorage.getItem('isJustified');
if (savedJusty === 'true') {
    const mainContent = document.querySelector('main');
    if (mainContent) mainContent.classList.add('justify-text');
}

// Betöltéskor ellenőrizzük, volt-e korábban elmentve választás
const savedFont = localStorage.getItem('selectedFontIndex');
if (savedFont !== null) {
    document.body.classList.remove(fonts[0]);
    currentFontIndex = parseInt(savedFont);
    document.body.classList.add(fonts[currentFontIndex]);
}