# notesz.fleischmann.hu

notesz.fleischmann.hu

## Oldalankénti megjelenítés (2026-os layoutok)

Az Markdown-fájl elején lévő YAML front matterben a `display` alatt adhatók meg
a menüsáv kapcsolóinak induló értékei:

```yaml
---
layout: post_2026
title: Példa
display:
  theme: light
  font: arial
  justify: false
  wide: true
  debug: false
---
```

- `theme`: `light` vagy `dark`.
- `font`: `courier`, `arial` vagy `times`.
- `justify`: `true` sorkizárt, `false` a CSS szerinti alapigazítás.
- `wide`: `true` széles tartalom, `false` a CSS szerinti normál szélesség.
- `debug`: `true` piros segédkeretek, `false` kikapcsolva.

Csak a szükséges mezőket kell megadni. A megadott értékek minden megnyitáskor
felülírják a böngészőben mentett választást. A kihagyott mezőknél a korábbi
mentett választás vagy az alapérték érvényesül. A menügombok és billentyűparancsok
továbbra is működnek; az induló felülbírálás önmagában nem módosítja a mentett
beállításokat. A `true` és `false` értékeket idézőjelek nélkül kell írni.
