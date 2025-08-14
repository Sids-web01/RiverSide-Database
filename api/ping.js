export default function handler(req, res) {
  // CORS so your local frontend can call it
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();

  res.status(200).json({
    ok: true,
    message: 'Vercel serverless is up 🚀',
    time: new Date().toISOString(),
  });
}
