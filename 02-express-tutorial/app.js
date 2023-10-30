console.log("Express Tutorial");

const express = require("express");
const app = express();
const { products } = require("./data");
// const { people } = require("./data");
// console.log("products", products);

// Serve static files from the 'public' directory
app.use(express.static("./public"));

// API returns JSON
app.get("/api/v1/test", (req, res) => {
  res.json({ message: "It worked!" });
});

//create a route to return the products array
app.get("/api/v1/products", (req, res) => {
  res.json({ message: products });
});

//create a route to retrieve a product by ID
app.get("/api/v1/products/:productId", (req, res) => {
  // const productId = req.params.productId;
  // res.json({ productId });
  const idToFind = parseInt(req.params.productId);
  const product = products.find((p) => p.id === idToFind);

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: "That product was not found" });
  }
});

// Route for searching and limiting products
app.get("/api/v1/query", (req, res) => {
  const { search, limit } = req.query;

  // Filter products by name
  let filteredProducts = products;
  if (search) {
    filteredProducts = products.filter((product) =>
      product.name.startsWith(search)
    );
  }

  // Limit the number of results
  if (limit) {
    const limitNumber = parseInt(limit);
    filteredProducts = filteredProducts.slice(0, limitNumber);
  }
  res.json(filteredProducts);
});

// Logger middleware function
const logger = (req, res, next) => {
  console.log(`Method: ${req.method}, URL: ${req.url}, Time: ${new Date()}`);
  next();
};

// Using logger with app.get() statement
// app.get('/', logger, (req, res) => {
//   res.send('Hello World');
// });

// Using logger with app.use() statement for all paths
app.use(["/path1", "/path2"], logger);

// require  data
// const data = require('./data.js');
// const products = data.products;
// const people = data.people;

// middleware to parse body
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// get for /api/v1/people
/*
app.get('/api/v1/people', (req, res) => {
  res.json(people);
});
*/

// post for /api/v1/people
/*
app.post('/api/v1/people', (req, res) => {
  if (!req.body.name) {
    res.status(400).json({ success: false, message: "Please provide a name" });
  } else {
    const newPerson = { id: people.length + 1, name: req.body.name };
    people.push(newPerson);
    res.status(201).json({ success: true, name: req.body.name });
  }
});
*/

const peopleRouter = require('./routes/people');
app.use('/api/v1/people', peopleRouter);

// "Not found" handler (404)
app.use((req, res) => {
  res.status(404).send("Not Found");
});

/* Start the server on port 3000*/
app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

//app.listen(3001, () => {
//console.log('Server is running on port 3001');
//});
