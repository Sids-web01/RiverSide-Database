// Simple test endpoint + CORS (so your site can call it from anywhere)
export default async function handler(req, res) {
  // CORS headers (you can later swap * for your domain)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    // Preflight
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    res.status(405).json({ error: "Only POST allowed" });
    return;
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    res.status(200).json({
      message: "Backend connected successfully 🎉",
      data: body,
      ts: new Date().toISOString()
    });
  } catch (e) {
    res.status(400).json({ error: "Invalid JSON", details: e.message });
  }
}
