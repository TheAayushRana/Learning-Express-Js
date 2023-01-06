// Middleware function takes 3 arguments req, res and next
function apiKey(req, res, next) {
  const api_Key = "12345";
  const userApiKey = req.query.api_key;
  if (userApiKey && userApiKey === api_Key) {
    next();
  } else {
    res.json({ message: "Not allowed" });
  }
}

module.exports = apiKey;