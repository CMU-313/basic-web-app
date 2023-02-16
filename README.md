## Getting Started

First install the app:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/index.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Testing

The repo uses [Jest](https://jestjs.io/) for testing. Current there's only one test file for the `QueryProcessor` helper, which is located `_tests_/QueryProcessor.test.ts`.

To run tests, run the following command

```bash
npm run test
```

Jest will run in watch mode, which means it will automatically run your test case as you make changes to your code. 

## Deploy on Fly.io

To deploy your Next.js app on Fly.io, you can use the [Fly.io CLI](https://fly.io/docs/getting-started/installing-flyctl/):

1. Install flyctl following instructions on [Fly.io](fly.io)
2. Follow instructions here to deploy this app: [Deploying Next.js on Fly.io](https://fly.io/docs/languages-and-frameworks/nextjs/). When prompted with entering payment, click skip for now. Do select the region closest to you.
3. For following deployments, you can use `flyctl deploy` to deploy your app.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!