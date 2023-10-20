console.log('Express Tutorial')

const express = require('express');
const app = express();
const { products } = require("./data");
// console.log("products", products);

// Serve static files from the 'public' directory
app.use(express.static('./public'));

// API returns JSON
app.get('/api/v1/test', (req, res) => {
    res.json({ message: "It worked!" });
  });

  //create a route to return the products array
app.get('/api/v1/products', (req, res) => {
    res.json({ message: products });
  });

//create a route to retrieve a product by ID
  app.get('/api/v1/products/:productID', (req, res) => {
    //const productID = req.params.productID;
    //res.json({ productID });
    const idToFind = parseInt(req.params.productID);
    const product = products.find((p) => p.id === idToFind);
  
    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ message: 'That product was not found' });
    } 
  });

 // Route for searching and limiting products
app.get('/api/v1/query', (req, res) => {
  const { search, limit } = req.query;

  // Filter products by name
  let filteredProducts = products;
  if (search) {
    filteredProducts = products.filter((product) => product.name.startsWith(search));
  }

  // Limit the number of results
  if (limit) {
    const limitNumber = parseInt(limit);
    filteredProducts = filteredProducts.slice(0, limitNumber);
  }
  res.json(filteredProducts);
}); 

// "Not found" handler (404)
app.use((req, res) => {
    res.status(404).send("Not Found");
  });

/* Start the server on port 3000*/
app.listen(3000, () => {
console.log('Server is running on port 3000');
});

//app.listen(3001, () => {
 //console.log('Server is running on port 3001');
//});
