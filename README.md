# Welcome to Remix!

- 📖 [Remix docs](https://remix.run/docs)

## Installation

# Requirements

Install PNPM if not present
Install [Rye (for Python)](https://rye.astral.sh/) if not present

# Actual installation

Run `pnpm i` at the root and inside `scripts` folder `rye sync` that will create the `.venv` folder & install python deps

## Development

Run the dev server:

```shellscript
pnpm build
pnpm serve
```

## Deployment

First, build your app for production:

```sh
pnpm build
```

Then run the app in production mode:

```sh
pnpm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying Node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `pnpm run build`

- `build/server`
- `build/client`

## Styling

This template comes with [Tailwind CSS](https://tailwindcss.com/) already configured for a simple default starting experience. You can use whatever css framework you prefer. See the [Vite docs on css](https://vitejs.dev/guide/features.html#css) for more information.
