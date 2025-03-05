import React from "react";

function ProductCatalogue() {
  const products = [
    {
      id: 1,
      name: "Apple MacBook Air M2",
      brand: "Apple",
      price: "$1,099",
      specs: "Apple M2, 8GB RAM, 256GB SSD, 13.6-inch Retina",
      description: "Ultra-light and powerful with a Retina display and all-day battery life.",
    },
    {
      id: 2,
      name: "Dell XPS 15 (2024)",
      brand: "Dell",
      price: "$1,499",
      specs: "Intel i7-13700H, 16GB RAM, 512GB SSD, 15.6-inch 3.5K OLED",
      description: "Sleek design, stunning 3.5K OLED display, and powerful performance.",
    },
    {
      id: 3,
      name: "ASUS ROG Strix G16",
      brand: "ASUS",
      price: "$1,799",
      specs: "Intel i9-13980HX, 32GB RAM, 1TB SSD, 16-inch 165Hz, RTX 4070",
      description: "Ultimate gaming laptop with a 165Hz display and RTX 4070 graphics.",
    },
  ];

  return (
    <div className="container mt-5">
      <h2>Product Catalogue</h2>
      <div className="row">
        {products.map((product) => (
          <div key={product.id} className="col-md-4">
            <div className="card p-3">
              <h5>{product.name}</h5>
              <h6 className="text-muted">{product.brand}</h6>
              <p><strong>Price:</strong> {product.price}</p>
              <p><strong>Specs:</strong> {product.specs}</p>
              <p>{product.description}</p>
              <button className="btn btn-primary">Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCatalogue;
