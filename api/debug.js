export default async function handler(req, res) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  return res.status(200).json({
    method: req.method,
    headers: req.headers,
    body: req.body
  });
}
