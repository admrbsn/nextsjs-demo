// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  const body = req.body;
  console.log("body: ", body);

  // Both of these are required.
  if (!body.name || !body.email) {
    return res.json({ data: "Name or email not found" });
  }

  // Found the name.
  res.json({ data: `${body.name} ${body.email}` });
}
