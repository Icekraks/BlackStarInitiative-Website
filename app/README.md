# Welcome to Icekrak's Portfolio!

- [Remix Docs](https://remix.run/docs)

## Development

Make sure you provide an .env, there is an example of it with all the fields that need to be filled out.

From your terminal:

```sh
pnpm install
pnpm start
```

This starts your app in development mode, rebuilding assets on file changes.

## Deployment

First, build your app for production:

```sh
pnpm run build
```

Then run the app in production mode:

```sh
pnpm serve
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`
