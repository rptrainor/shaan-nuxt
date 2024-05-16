type BeehiivResponse = {
  data: {
    id: string;
    email: string;
    status: string;
    created: number;
    subscription_tier: string;
    subscription_premium_tier_names: string[];
    utm_source: string;
    utm_medium: string;
    utm_channel: string;
    utm_campaign: string;
    referring_site: string;
    referral_code: string;
    stripe_customer_id: string;
  };
}

type ErrorResponse = {
  message: string;
};

export default defineEventHandler(async (event) => {
  if (event.node.req.method !== 'POST') {
    return {
      status: 405,
      statusText: 'Method Not Allowed'
    };
  }

  try {
    const body = await readBody(event);

    const runtimeConfig = useRuntimeConfig();

    const response = await $fetch<BeehiivResponse>(`https://api.beehiiv.com/v2/publications/${runtimeConfig.public.NUXT_BEEHIIV_V2_PUBLICATION_ID}/subscriptions`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${runtimeConfig.public.NUXT_BEEHIIV_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    if (response?.data?.status === 'invalid') {
      return {
        status: 400,
        statusText: 'Invalid email address, please try again.'
      };
    }

    return {
      response,
      ok: true
    };
  } catch (error) {
    const errorMessage = (error as ErrorResponse).message || 'Internal Server Error';
    console.error('Error creating subscription:', errorMessage);
    return {
      status: 500,
      statusText: errorMessage
    };
  }
});
