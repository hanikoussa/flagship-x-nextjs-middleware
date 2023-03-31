This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

The goal is to implement Flagship, a fullstack tool that does both experimentation and feature management, on a nextJs stack that is using ISR. I chose ISR because we still need to create static pages after built. But we also need to use it per-page basis, without needing to rebuild the entire site.

A visitor is defined with Visitor Id and context. Then we let Flagship take a decision based on those two factors what are the Flagship campaigns that that visitor is assigned to. We proceed by collecting the Campaign Id which is an Id that represents the campaign a visitor is assigned to. and the Visitor Id, an Id that represents the Variation that visitor gor allocaton to in a specific campaign.

```js
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

We need to make this call to Flagship before the request is complete. So we will use a middleware so we can moify the response by rewriting the url based in the uncoming request. We chose to add the a cobination of both Campaign Id and Variation Id to the URL. This way whoever gets the same campaigns and variation, will get displayed a page. With the help of the middleware, we can personalize static files and pages since it runs before cahced content.

```js
const data = await res.json();
    const fsCampaigns = data.campaigns
    const result = fsCampaigns.map(combination => ({ campaignId: combination.id, varationId: combination.variation.id }))
    for (let i = 0; i < result.length; i++) {
      fsCombination += result[i].campaignId + ":" + result[i].varationId + "|"
    }
    return NextResponse.rewrite(new URL(`${pathname}/${fsCombination}`, request.url))
```

Our variant page will have a url of this format '/product/[id]/campaignId:vaiationId|'
A middleware runs before cached content, so you can personalize static files and pages. Common examples of Middleware would be authentication, A/B testing, localized pages, bot protection, and more. Regarding localized pages, you can start with i18n routing and implement Middleware for more advanced use cases.

In our case, since we need a page for each combination, we will use dynamic routes to achieve that. And this is done by creating [...vary] folder with and index.js file. with vary as the dynamic variable that represents the variationId:campaignId combination.

One the first request is intersepted by the middleware, we add new params that includes the Ids combiantion to the URL. to get those data, we can print out the pramas from the context we get staticly once we are the product page 

```js
export async function getStaticProps(context) {
  const { params } = context
  }
```

And we use getStaticpath() function to generate the first page with empty combination. this will be the generic page for visitors who are not in the test.
```js
paths: [
      {
        params: { id: '1', vary: ['1']},
      },
    ],
```


## Startup
To get started, clone this repository and install the dependencies:

```bash
git clone https://github.com/hanikoussa/posts-nextjs.git
cd posts-nextjs
npm install
```

Add your Flagship Env ID and API Key in your middleware and your .env file


## Getting Started

Build and start your application:

```bash
yarn build && yarn start
```

If we look in our .next folder, we only see the first product page is rendered with no combination IDs
The Expected outcome is to have one page for each combination. having similar combination will result in getting the pre rendered page that is cached. 

If we click on another product, we will see the page created on demand with a loading screen.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
