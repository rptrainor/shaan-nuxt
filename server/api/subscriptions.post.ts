// server/api/create.post.ts

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

    const response = await $fetch(`https://api.beehiiv.com/v2/publications/${runtimeConfig.public.NUXT_BEEHIIV_V2_PUBLICATION_ID}/subscriptions`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Authorization': `Bearer ${runtimeConfig.public.NUXT_BEEHIIV_API_KEY}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    });

    return {
      response,
      ok: true
    };
  } catch (error) {
    return {
      status: 500,
      statusText: error ?? 'Internal Server Error'
    };
  }
});
