# DS_CUSTOM — Starter Template

Inventario delle customizzazioni CSS project-specific rispetto al Design System.

**Ultimo aggiornamento:** 21 Apr 2026
**DS Version:** ^0.10.6
**File CSS custom:** `src/app/globals.css` (22 righe, solo body + selection), `src/styles/components.css` (vuoto — solo header)

---

## Riepilogo

| Metrica | Valore |
|---------|--------|
| Classi custom definite | 0 |
| Override DS | 0 |
| Inline styles | 0 |
| Classi non definite | 0 |
| Compliance | **100% — Progetto modello** |

---

## Note

- Zero custom CSS oltre al setup base (body background/color/font-family, selection colors)
- Heading semantici `h1`/`h2` lasciano che gli stili base DS governino font-family + color
- Sidebar brand usa `.ds-heading-ui` (admin heading convention, Switzer medium)
- Stat numbers usano `.ds-stat-number` (display font, tabular-nums)
- Rimossa `.font-display` (21 Apr 2026) — sostituita dalle classi heading canoniche DS

---

## Azioni Future

- [ ] Template baseline pulito — ogni nuovo progetto dovrebbe partire da qui
