export default function handler(req, res) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).json({ error: "Method not allowed." });
  }
  return res.status(200).json({
    ok: true,
    aiEnabled: Boolean(process.env.GEMINI_API_KEY || process.env.OPENAI_API_KEY),
    providers: {
      gemini: Boolean(process.env.GEMINI_API_KEY),
      openai: Boolean(process.env.OPENAI_API_KEY)
    }
  });
}
