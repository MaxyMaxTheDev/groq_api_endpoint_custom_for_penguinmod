export default async function handler(req, res) {
  return res.status(200).send(
    "method=" + req.method +
    "\ncontent-type=" + req.headers["content-type"] +
    "\nbody=" + JSON.stringify(req.body)
  );
}
