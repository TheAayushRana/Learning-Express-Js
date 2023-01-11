const ErrorHandling = require("../error/ErrorHandling");

// Middleware function takes 3 arguments req, res and next
function apiKey(req, res, next) {
  const api_Key = "12345";
  const userApiKey = req.query.api_key; // req.query used to get query parameters
  if (userApiKey && userApiKey === api_Key) {
    next(); // next is used to pass on to the next middleware function
  } else {
    next(ErrorHandling.forBidden());
    // res.json({ message: "Not allowed" });
  }
}

module.exports = apiKey;
