const App = () => {
  const [product, setProducts] = React.useState([]);
  const [productDetails, setProductDetails] = React.useState({
    name: "",
    price: "",
  });

  // for fetching products from server
  function fetchProduct() {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      });
  }

  // for sending product details to server
  function sendProducts() {
    fetch("/api/products", {
      method: "POST",
      body: JSON.stringify(productDetails), // body is always send in JSON
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        fetchProduct();
        setProductDetails({
          name: "",
          price: "",
        });
      });
  }

  // for updating the input fields
  const updateDetails = (event, fieldName) => {
    setProductDetails({
      ...productDetails,
      [fieldName]: event.target.value,
    });
  };

  // sending the id of deleted product to server
  const deleteProduct = (id) => {
    console.log(id);
    fetch(`/api/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        fetchProduct();
        console.log(data);
      });
  };

  // for submitting the form
  const submitHandler = (e) => {
    e.preventDefault();
    if (!productDetails.name || !productDetails.price) {
      return;
    }
    sendProducts();
  };

  React.useEffect(() => {
    fetchProduct();
  }, []);

  return (
    <>
      <div className="card ">
        <div className="card-body">
          <form onSubmit={submitHandler}>
            <label className="col-form-label">Product Name:</label>
            <input
              type="text"
              value={productDetails.name}
              onChange={() => updateDetails(event, "name")}
              placeholder="Product Name....."
              className="form-control"
            />
            <label className="col-form-label">Price:</label>
            <input
              type="number"
              value={productDetails.price}
              onChange={() => updateDetails(event, "price")}
              placeholder="Price....."
              className="form-control"
            />
            <button type="submit" className="btn btn-primary mt-3">
              Submit
            </button>
          </form>
        </div>
      </div>
      <ul className="list-group mt-3">
        {product.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <strong> {item.name}</strong>: ${item.price}
            </div>
            <button className="btn" onClick={() => deleteProduct(item.id)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z" />
                <path
                  fillRule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </button>
          </li>
        ))}
      </ul>
    </>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
