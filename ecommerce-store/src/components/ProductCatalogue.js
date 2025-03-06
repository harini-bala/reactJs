import React from "react";

function ProductCatalogue({ addToCart }) {
  const products = {
    laptops: [
      { id: 1, name: "MacBook Air M2", brand: "Apple", price: 1200 },
      { id: 2, name: "XPS 13", brand: "Dell", price: 1000 },
      { id: 3, name: "ThinkPad X1", brand: "Lenovo", price: 1100 },
    ],
    phones: [
      { id: 4, name: "iPhone 15", brand: "Apple", price: 999 },
      { id: 5, name: "Galaxy S23", brand: "Samsung", price: 899 },
      { id: 6, name: "Pixel 7", brand: "Google", price: 799 },
    ],
    headphones: [
      { id: 7, name: "AirPods Pro", brand: "Apple", price: 250 },
      { id: 8, name: "WH-1000XM5", brand: "Sony", price: 350 },
      { id: 9, name: "Bose 700", brand: "Bose", price: 379 },
    ],
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Product Catalogue</h2>

      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="mb-4">
          <h3 className="text-primary text-uppercase">{category}</h3>
          <div className="row">
            {items.map((product) => (
              <div key={product.id} className="col-md-4">
                <div className="card mb-3">
                  <div className="card-body">
                    <h5 className="card-title">{product.brand} - {product.name}</h5>
                    <p className="card-text">Price: ${product.price}</p>
                    <button className="btn btn-success" onClick={() => addToCart(product)}>
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProductCatalogue;
