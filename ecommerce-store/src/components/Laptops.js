import React, { useState } from "react";

function Laptops({ addToCart }) {
  const laptops = [
    { name: "Dell Inspiron", price: 50000, specs: "8GB RAM, 512GB SSD" },
    { name: "HP Pavilion", price: 60000, specs: "16GB RAM, 1TB SSD" },
    { name: "MacBook Air", price: 100000, specs: "M2 Chip, 16GB RAM" },
  ];

  const [addedMessage, setAddedMessage] = useState("");

  const handleAddToCart = (laptop) => {
    addToCart(laptop);
    setAddedMessage(`${laptop.name} added to cart!`);
    setTimeout(() => setAddedMessage(""), 2000);
  };

  return (
    <div className="container mt-5">
      <h2>Laptops</h2>
      {addedMessage && <div className="alert alert-success">{addedMessage}</div>}
      <div className="row">
        {laptops.map((laptop, index) => (
          <div key={index} className="col-md-4">
            <div className="card p-3 mb-3">
              <h4>{laptop.name}</h4>
              <p>{laptop.specs}</p>
              <p>₹{laptop.price}</p>
              <button className="btn btn-success" onClick={() => handleAddToCart(laptop)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Laptops;
