# DS_CUSTOM — Starter Template

Inventario delle customizzazioni CSS project-specific rispetto al Design System.

**Ultimo aggiornamento:** 10 Lug 2026
**DS Version:** ^0.17.2
**File CSS custom:** `src/app/globals.css` (22 righe, solo body + selection), `src/styles/components.css` (site header + overlay mobile)

---

## Riepilogo

| Metrica | Valore |
|---------|--------|
| Classi custom definite | 6 |
| Override DS | 0 |
| Inline styles | 0 |
| Classi non definite | 0 |
| Compliance | **100% — solo il gap site-header/overlay** |

---

## Classi custom (site shell) — CONTROLLED MODE approvato in chat 10 Lug 2026

Il DS non spedisce una barra di navigazione fissa né un overlay mobile fullscreen (motion decorativo tenuto fuori dal DS). Unica eccezione custom, in `src/styles/components.css`, tutti i valori da token `--ds-*`:

| Classe | Ruolo |
|--------|-------|
| `.site-header` | barra flottante fissa (surface + blur + border + shadow) |
| `.site-nav-link` (+ `:hover`) | link nav desktop, secondary→primary on hover |
| `.site-nav-overlay` (+ `.is-open`) | overlay mobile fullscreen, fade + backdrop blur |
| `.site-nav-overlay__link` (+ `:hover`, stagger `:nth-child`) | link grandi display-font, reveal slide-up |
| `.burger` (+ `.is-open`) | wrapper due-linee dentro `.ds-icon-btn` |
| `.burger__line` | linea che ruota in X su `.is-open` |

Motion rispetta `prefers-reduced-motion`. Overlay a `z-dropdown`, header a `z-sticky` (burger sempre cliccabile).

---

## Note

- Setup base (body background/color/font-family, selection colors) in `globals.css`
- Heading semantici `h1`/`h2` lasciano che gli stili base DS governino font-family + color
- Sidebar brand + SiteHeader/SiteFooter brand usano `.ds-heading-ui`
- Stat numbers usano `.ds-stat-number` (display font, tabular-nums)
- Landing/footer/hero/CTA/feature-grid = 100% classi DS (recipe ds-build), zero custom

---

## Azioni Future

- [ ] Le 6 classi site-shell sono candidate a diventare un layer DS (nav/overlay) se ricorrono nei consumer

---

## Role ladder (5 Ago 2026, DS 0.38.4) — scala ADOTTATA

`ds-hero-title` → `ds-heading-1`, `ds-section-title` → `ds-heading-2`,
`ds-editorial-title` → `ds-heading-3`, `ds-editorial-lede` → `ds-copy`.

**A differenza dei siti live, qui la scala del DS è stata adottata davvero**
(scelta owner): questo è uno scaffold, non un sito in produzione, e i cloni
futuri devono nascere già sulla ladder invece di ereditare un blocco di token
che pinna curve vecchie. Niente pin in `globals.css`.

Cosa cambia, a 1280px: `heading-1` 72 → **80px**, `heading-2` 36 → **64px**,
`copy` 22 → **20px**. Verificato: nessun overflow, desktop e mobile (375),
la pagina non scrolla in orizzontale.

**`data-surface="product"` sulle superfici che non sono web.** Adottare la
ladder significa adottarne entrambe le superfici, non imporre le taglie web a
un pannello: senza il marcatore, un titolo di login rendeva a 64px. La shell
`(auth)` lo dichiara, e "Sign in" torna a 24px / peso 500 / faccia sans, che è
il valore giusto per una card di autenticazione. **Le dashboard restano da
sistemare al centro**: passano da `AdminShell` di `ds-admin`, che deve
dichiararlo lei — voce aperta in `infra/DS_HEALTH.md`.
