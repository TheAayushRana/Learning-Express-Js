// Importing router from Express
const router = require("express").Router();
const apiKeyMiddleware = require("../middlewares/apiKey");

// For using router base middleware
router.use(apiKeyMiddleware);

//  Get request with parameter (route and callback function)
router.get("/", (req, res) => {
  // In path.resolve right-most parameter is considered {to}
  // res.sendFile(path.resolve(__dirname) + "/index.html");
  res.render("index", {
    title: "HomePage",
  });
});

router.get("/about", (req, res) => {
  // res.sendFile(path.resolve(__dirname) + "/about.html");
  // In render method it takes view file name, object with data to pass
  res.render("about", {
    title: "AboutPage",
  });
});

router.get("/download", (req, res) => {
  res.download(path.resolve(__dirname) + "/about.html");
});

router.get("/api/product", (req, res) => {
  res.json([
    {
      id: 122,
      name: "google",
    },
    {
      id: 123,
      name: "brave",
    },
  ]);
});

module.exports = router;
