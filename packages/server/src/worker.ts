export default {
  async fetch(request: Request): Promise<Response> {
    const message = "✅ AIOS Cloudflare Worker is live!";
    return new Response(message, {
      headers: {
        "Content-Type": "text/plain; charset=utf-8"
      }
    });
  }
};
