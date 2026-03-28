import { onRequestPost, onRequestOptions } from '../functions/api/sales-request.js';

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // Handle API routes
    if (url.pathname === '/api/sales-request') {
      const context = { request, env };

      if (request.method === 'OPTIONS') {
        return onRequestOptions(context);
      }

      if (request.method === 'POST') {
        return onRequestPost(context);
      }

      return new Response('Method Not Allowed', { status: 405 });
    }

    // Everything else is handled by the assets binding (static files)
    return env.ASSETS.fetch(request);
  },
};
