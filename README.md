# Portfolio

A personal portfolio built as a single-page React app — bilingual (English + Portuguese), themed for light and dark, with a fixed hero portrait that persists across every section.

## Stack

- **React 18** + **TypeScript** + **Vite 8**
- **[pietra-ui](https://github.com/samuelpietra/pietra-ui)** — Radix Themes–based component library
- **react-intl** — i18n with type-driven message catalogs
- **lucide-react** — icons
- **Biome** — lint + format

## Getting started

Requires Node (see `.nvmrc`).

```bash
npm install
npm start
```

> The repo ships an `.npmrc` with `legacy-peer-deps=true` because `react-intl` lists `typescript` as an *optional* peer with a range that excludes TS 6. We ignore it intentionally.

The dev server runs at <http://localhost:3123>.

### Scripts

| Command            | Description                                  |
| ------------------ | -------------------------------------------- |
| `npm start`        | Dev server with HMR                          |
| `npm run build`    | Type-check (`tsc -b`) and bundle for prod    |
| `npm run preview`  | Serve the production build locally           |
| `npm run lint`     | Biome (check only)                           |
| `npm run lint:fix` | Biome with `--write`                         |

## Structure

```
src/
├── App.tsx                Section composition
├── main.tsx               Provider tree (Appearance → Theme → Locale → App)
├── styles/                Shared layout (section-frame)
├── appearance/            Light/dark theme provider (localStorage + system fallback)
├── i18n/                  Locale provider, typed FormattedMessage, message catalogs
├── components/            Header, Hero, About, Projects, Resume, switchers
├── consts/                Sections, social links, projects, resume path
├── hooks/                 useScrollSpy, useSystemAppearance, useLatest
└── assets/                Project logos, hero portrait
```

## i18n

Catalogs live in `src/i18n/i18n.messages.ts`. The `en` catalog is the source of truth — its keys derive `MessageId` via `keyof typeof en`, and `pt` is typed as `Record<MessageId, string>` so any drift between locales fails compilation. A typed wrapper around `FormattedMessage` and `useIntl` enforces the same on the consuming side.

## Theme

`AppearanceProvider` (in `src/appearance/`) holds the current `light | dark` value. Initial value comes from `localStorage`, falling back to system preference (`prefers-color-scheme`). When no explicit choice is set, the provider tracks system changes live and listens to `storage` events for cross-tab sync.

## Deployment

Hosted on **Vercel**. `vercel.json` at the repo root sets a 1-hour cache window on `/resume.pdf` so PDF updates roll out without changing the URL.
