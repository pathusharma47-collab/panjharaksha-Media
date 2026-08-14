import server from '../dist/server/server.js';

export default async function handler(req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'https';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  
  // Vercel might pass the original path in these headers, or we can use our custom query param
  let originalPath = req.headers['x-invoke-path'] || req.url;
  
  // If we used a query param to pass the path
  try {
    const tempUrl = new URL(req.url, `http://localhost`);
    if (tempUrl.searchParams.has('__path')) {
      originalPath = tempUrl.searchParams.get('__path');
    }
  } catch (e) {}

  const finalUrl = new URL(originalPath, `${protocol}://${host}`);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (typeof value === 'string') {
      headers.set(key, value);
    } else if (Array.isArray(value)) {
      value.forEach(v => headers.append(key, v));
    }
  }

  const request = new Request(finalUrl.href, {
    method: req.method,
    headers,
    body: req.method !== 'GET' && req.method !== 'HEAD' ? req : undefined,
    duplex: req.method !== 'GET' && req.method !== 'HEAD' ? 'half' : undefined,
  });

  try {
    const response = await server.fetch(request);

    res.statusCode = response.status;
    response.headers.forEach((value, key) => res.setHeader(key, value));

    if (response.body) {
      const reader = response.body.getReader();
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        res.write(value);
      }
    }
    res.end();
  } catch (error) {
    console.error('Server error:', error);
    res.statusCode = 500;
    res.end('Internal Server Error');
  }
}
