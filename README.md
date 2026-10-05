# Proxima Universe

The official public knowledge portal for **Proxima**, a hard-science-fiction universe centered on humanity's first interstellar journey toward Proxima Centauri.

The site publishes approved world knowledge—people, places, science, technology, missions and historical context—while deliberately excluding plot events and private canon.

## Stack

- Next.js 16 with the App Router
- TypeScript
- Local structured canon data
- Static generation for public records
- Vercel production hosting

## Local development

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validation

```bash
npm run lint
npm run build
```

## Canon safety

Public rendering consumes only records where both conditions are true:

- `status === "public"`
- `canonStatus === "confirmed"`

Draft, conflicted, private and plot-locked material is excluded from public pages and deterministic search.

## Production

[proxima-site-nu.vercel.app](https://proxima-site-nu.vercel.app)
