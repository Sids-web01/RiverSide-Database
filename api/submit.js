export default function handler(req, res) {
  if (req.method === "POST") {
    res.status(200).json({ message: "Backend connected successfully 🎉", data: req.body });
  } else {
    res.status(405).json({ error: "Only POST method allowed" });
  }
}
