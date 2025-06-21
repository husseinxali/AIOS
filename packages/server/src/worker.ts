// File: packages/server/src/worker.ts
export default {
  async fetch(request: Request): Promise<Response> {
    return new Response("✅ AIOS Cloudflare Worker is live!", {
      headers: { "Content-Type": "text/plain" },
    });
  }
}
