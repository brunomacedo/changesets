---
"@acme/utils": patch
---

`toSlug` now normalizes accented/diacritic characters to their ASCII equivalents before slugifying (e.g. `"ação"` → `"acao"`).
