const router = require("express").Router();
const ErrorHandling = require("../error/ErrorHandling");
let productsData = require("../productData");
const apiKeyMiddleware = require("../middlewares/apiKey");

router.get("/products", (req, res) => {
  res.render("products", {
    title: "My Products Page",
  });
});

// GET Request
router.get("/api/products", (req, res) => {
  res.json(productsData);
});

// POST Request
router.post("/api/products", apiKeyMiddleware, (req, res, next) => {
  // try {
  //   console.log(city);
  // } catch (error) {
  //   next(ErrorHandling.serverError(error.message));
  // }

  // req.body is used to get body from client
  const { name, price } = req.body;
  if (!name || !price) {
    // next call karna ha -> className.staticMethodName
    next(ErrorHandling.validationError("Names and Price fields are required"));

    // Using in Built Express Error handling
    // throw new Error("All fields are required");

    // sending status and response message
    // return res.status(442).json({
    //   message: "All fields are Required",
    // });
  }
  const newProduct = {
    name,
    price,
    id: new Date().getTime().toString(),
  };
  productsData.push(newProduct);
  res.status(201).json(newProduct);
});

// DELETE Request
router.delete("/api/products/:id", (req, res) => {
  // req.query to get all query parameters
  // req.params to get all params which are with url
  productsData = productsData.filter((product) => req.params.id !== product.id);
  res.status(200).json({ status: "OK" });
});

module.exports = router;
