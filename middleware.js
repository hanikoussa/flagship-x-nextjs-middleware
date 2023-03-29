// middleware.ts
import { NextResponse } from 'next/server';

export default async function middleware(request) {
  const pathname = request.nextUrl.pathname;
  var fsCombination="";
  console.log(pathname)

    const res = await fetch("https://decision.flagship.io/v2/c1hh9b4josi04hbueq00/campaigns", {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': '54KlQahbX798pMZPLGuOX61J4JVvCefY75EnzQhR'
      },
      body: JSON.stringify({
        visitor_id: "hani",
        context: {
          "country": "uk"
        },
        // GDPR compliance. See https://developers.flagship.io/docs/decision-api/v2#visitor-consent for details
        visitor_consent: true,
        // For the Decision API to trigger a campaign activation hit, use
        trigger_hit: true,
        // Optional : see https://developers.flagship.io/docs/decision-api/v2#decision-group for more details
        decision_group: null
      })
    })

    const data = await res.json();
    const fsCampaigns = data.campaigns
    const result = fsCampaigns.map(combination => ({ campaignId: combination.id, varationId: combination.variation.id }))
    console.log(result)
    for (let i = 0; i < result.length; i++) {
      fsCombination += result[i].campaignId + ":" + result[i].varationId + "|"
    }
    console.log(fsCombination)
    return NextResponse.rewrite(new URL(`${pathname}/${fsCombination}`, request.url))
  


  //campaignId:variationId
  //product/2/12
  
}

export const config = {
  matcher: '/product/([0-9]{1,})'
  //matcher: '/product/1'
}