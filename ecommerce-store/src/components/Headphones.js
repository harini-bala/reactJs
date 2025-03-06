import React, { useState } from "react";

function Headphones({ addToCart }) {
  const headphones = [
    { name: "Sony WH-1000XM5", price: 35000, specs: "ANC, 30-hour battery" },
    { name: "Bose 700", price: 40000, specs: "Noise-canceling, Bluetooth 5.0" },
    { name: "AirPods Max", price: 60000, specs: "Spatial Audio, Apple H1 Chip" },
  ];

  const [addedMessage, setAddedMessage] = useState("");

  const handleAddToCart = (headphone) => {
    addToCart(headphone);
    setAddedMessage(`${headphone.name} added to cart!`);
    setTimeout(() => setAddedMessage(""), 2000);
  };

  return (
    <div className="container mt-5">
      <h2>Headphones</h2>
      {addedMessage && <div className="alert alert-success">{addedMessage}</div>}
      <div className="row">
        {headphones.map((headphone, index) => (
          <div key={index} className="col-md-4">
            <div className="card p-3 mb-3">
              <h4>{headphone.name}</h4>
              <p>{headphone.specs}</p>
              <p>₹{headphone.price}</p>
              <button className="btn btn-success" onClick={() => handleAddToCart(headphone)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Headphones;
