import React, { useState } from "react";

function Phones({ addToCart }) {
  const phones = [
    { name: "iPhone 15", price: 80000, specs: "128GB, A16 Bionic Chip" },
    { name: "Samsung Galaxy S23", price: 75000, specs: "256GB, Snapdragon 8 Gen 2" },
    { name: "OnePlus 11", price: 60000, specs: "256GB, Hasselblad Camera" },
  ];

  const [addedMessage, setAddedMessage] = useState("");

  const handleAddToCart = (phone) => {
    addToCart(phone);
    setAddedMessage(`${phone.name} added to cart!`);
    setTimeout(() => setAddedMessage(""), 2000);
  };

  return (
    <div className="container mt-5">
      <h2>Phones</h2>
      {addedMessage && <div className="alert alert-success">{addedMessage}</div>}
      <div className="row">
        {phones.map((phone, index) => (
          <div key={index} className="col-md-4">
            <div className="card p-3 mb-3">
              <h4>{phone.name}</h4>
              <p>{phone.specs}</p>
              <p>₹{phone.price}</p>
              <button className="btn btn-success" onClick={() => handleAddToCart(phone)}>Buy Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Phones;
