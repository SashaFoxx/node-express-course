// script.js
document.getElementById('fetchDataButton').addEventListener('click', () => {
    fetch('/api/v1/products')
    .then((response) => response.json())
    .then((data) => {
        const productListDiv = document.getElementById('productList');
        productListDiv.innerHTML = '';
        data.forEach((product) => {
        const productInfo = document.createElement('div');
        productInfo.innerHTML = `<strong>${product.name}</strong>: $${product.price}`;
        productListDiv.appendChild(productInfo);
        });
    })
    .catch((error) => {
        console.error('Error fetching data:', error);
    });
);