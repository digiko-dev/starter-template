# DS_CUSTOM — Starter Template

Inventario delle customizzazioni CSS project-specific rispetto al Design System.

**Ultimo aggiornamento:** 26 Mar 2026
**DS Version:** ^0.9.8
**File CSS custom:** `src/styles/components.css` (vuoto), `src/app/globals.css` (26 righe)

---

## Riepilogo

| Metrica | Valore |
|---------|--------|
| Classi custom definite | 1 (`.font-display`) |
| Override DS | 0 |
| Inline styles | 0 |
| Classi non definite | 0 |
| Compliance | **~100% — Progetto modello** |

---

## Unica Customizzazione

### `.font-display` (globals.css:17-19)
```css
.font-display {
  font-weight: var(--ds-font-display-weight);
}
```
**Scopo:** Wrapper semantico per il peso del display font.
**Usata in:** DashboardHeader, Sidebar, page.tsx (4 punti).
**Valutazione:** Legittima — espone un token DS come classe utility. Potrebbe essere assorbita nel DS come utility ufficiale.

---

## Azioni Future

- [ ] Valutare se `ds-font-display-weight` dovrebbe diventare utility nel DS
- [ ] Questo template è il baseline — ogni nuovo progetto dovrebbe partire da qui
