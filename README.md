This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The goal is to implement Flagship, a fullstack tool that does both experimentation and feature management, on a nextJs stack that is using ISR. I chose ISR because we still need to create static pages after built. But we also need to use it per-page basis, without needing to rebuild the entire site.

A visitor is defined with Visitor Id and context. Then we let Flagship take a decision based on those two factors what are the Flagship campaigns that that visitor is assigned to. We proceed by collecting the Campaign Id which is an Id that represents the campaign a visitor is assigned to. and the Visitor Id, an Id that represents the Variation that visitor gor allocaton to in a specific campaign.

```Javascript
fetch("https://decision.flagship.io/v2/c440fvjlpl3hr8jt1cng/campaigns", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': 'IbbExpNaopmSkFjFsljlPrJUihnDFbFjeszoBqdp'
        },
        body: JSON.stringify({
          visitor_id: "YOUR_VISITOR_ID",
          context: {
              
          },
          // GDPR compliance. See https://developers.flagship.io/docs/decision-api/v2#visitor-consent for details
          visitor_consent: true,
          // For the Decision API to trigger a campaign activation hit, use
          trigger_hit: true,
          // Optional : see https://developers.flagship.io/docs/decision-api/v2#decision-group for more details
          decision_group: null
        })
  })
.then(response => response.json())
.then(data => console.log(data));
```


Calling Flagship API will for 

Middleware allows you to run code before a request is completed, then based on the incoming request, you can modify the response by rewriting, redirecting, modifying the request or response headers, or responding directly.

## Startup
To get started, clone this repository and install the dependencies:

```bash
git clone https://github.com/hanikoussa/posts-nextjs.git
cd posts-nextjs
npm install
```

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
