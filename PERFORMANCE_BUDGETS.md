# Performance budgets

These budgets define the target ceilings for key pages. Budgets are enforced by
Lighthouse CI using `lighthouse-budgets.json` and reported in CI as warnings.

## Targets

| Page | JS budget (KB) | Total budget (KB) | LCP target (ms) |
| --- | --- | --- | --- |
| / | 350 | 900 | 2500 |
| /install | 360 | 950 | 2600 |
| /docs | 420 | 1100 | 3000 |
| /safety | 360 | 950 | 2600 |
| /enterprise | 380 | 1000 | 2800 |

## Notes
- Budgets are intentionally conservative to avoid regressions.
- Review budgets quarterly and tighten once baseline data is collected.
- Updates are tracked in CI via `npm run perf:ci`.
