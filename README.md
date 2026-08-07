# Культурный радар

**Персональный репертуар культурных событий и поездок.**

Культурный радар помогает заранее находить достойные спектакли, балеты, оперы, концерты и фестивали, сохранять их в личный репертуар и отслеживать путь от первого сигнала до опубликованной даты и доступного билета.

Первый пользовательский кейс проекта — **«Культурный радар Полины · Сезон 2026/27»**: подарочное издание, в котором Полина получает два билета на выбранное культурное событие и участвует в оценке мероприятий и городов.

> Событие ещё не выбрано. Впечатление уже подарено.

## Product language

- **Культурный радар** — продукт и механизм обнаружения.
- **Свой репертуар** — персональная коллекция пользователя.
- **На радаре** — кандидаты, за которыми ведётся наблюдение.
- **Следующий акт** — шорт-лист и этап совместного выбора.
- **Открытый билет** — физический подарочный артефакт.

## Current release

**Gift Edition v0.1 — Polina 2026/27**

Target presentation date: **8 August 2026**.

The first release is intentionally small. It must communicate the gift clearly, present an initial curated catalogue, show event and city ratings, explain availability stages, and open from a QR code on a mobile device. It does not need to be a complete production application.

GitHub is the canonical project workspace. Dated research snapshots preserve source material and historical context; they do not automatically represent the current runtime dataset or current ticket availability.

## Active workspace

- [Active iteration](ITERATION.md)
- [AI agent operating policy](AGENTS.md)
- [Local AI execution overlay](CLAUDE.md)
- [ChatGPT project context](docs/chatgpt/README.md)

## Documentation

- [`docs/product/vision.md`](docs/product/vision.md)
- [`docs/product/gift-mvp.md`](docs/product/gift-mvp.md)
- [`docs/product/product-language.md`](docs/product/product-language.md)
- [`docs/ux/gift-ticket.md`](docs/ux/gift-ticket.md)
- [`docs/ux/website-concept.md`](docs/ux/website-concept.md)
- [`docs/domain/candidate-model.md`](docs/domain/candidate-model.md)
- [`docs/release/gift-v0.1.md`](docs/release/gift-v0.1.md)

## Project tracking

- [Gift MVP umbrella issue](https://github.com/AlexanderTsarkov/cultural-radar/issues/1)
- [Foundation documentation issue](https://github.com/AlexanderTsarkov/cultural-radar/issues/2)
- [GitHub Project](https://github.com/users/AlexanderTsarkov/projects/9)

## Status

Project foundation in progress.

## Web application foundation

The Gift Edition is a static client-side application built with Vite, React,
TypeScript and plain CSS. This small stack supports rapid mobile-first delivery and
Vercel's static deployment model without adding a router, server, state framework or
UI framework. Candidate records remain in the canonical
[`docs/data/gift-v0.1-candidates.json`](docs/data/gift-v0.1-candidates.json) file and
are imported through a thin typed application boundary.

Deliberate v0.1 shortcuts are static local data, a single application shell and
manual editorial updates. Final landing, repertoire, interaction and production
domain work remain in issues #6, #7 and #9.

### Requirements and local development

- Node.js 22.x;
- npm.

```bash
npm ci
npm run dev
```

The development server prints its local URL. No environment variables are required.

### Validation and production build

```bash
npm run validate
```

The complete validation runs Prettier checks, Node's built-in tests, canonical data
validation, TypeScript typechecking, the Vite production build and an HTTP smoke test
of the built output. Individual commands are also available as `npm run
format:check`, `npm run typecheck`, `npm run validate:data`, `npm test`, `npm run
build` and `npm run smoke`.

To build and inspect the production output manually:

```bash
npm run build
npm run preview
```

### Vercel deployment

Deploy through the repository's Vercel Git integration with these project settings:

- repository: `AlexanderTsarkov/cultural-radar`;
- root directory: `./`;
- framework preset: `Vite`;
- build command: `npm run build`;
- output directory: `dist`;
- environment variables: none.

Pushes and pull requests then receive automatic deployments and previews. No Vercel
CLI dependency or repository deployment workflow is required.
