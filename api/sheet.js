export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  const GAS_URL = "YOUR_APPS_SCRIPT_EXEC_URL"; // Replace with your deployed Web App URL

  const upstream = await fetch(GAS_URL, {
    method: req.method,
    headers: { "Content-Type": "application/json" },
    body: req.method === "POST" ? JSON.stringify(req.body) : null
  });

  const text = await upstream.text();
  res.status(upstream.status).send(text);
}
