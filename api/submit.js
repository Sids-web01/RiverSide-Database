export default async function handler(req, res) {
  // Allow requests from any origin (for testing)
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Only allow POST
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
