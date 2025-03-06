import React from "react";

function Cart({ cart, removeFromCart }) {
  const totalPrice = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div className="container mt-5">
      <h2>Cart</h2>
      <ul className="list-group">
        {cart.map((item, index) => (
          <li key={index} className="list-group-item">
            {item.name} - ₹{item.price}
            <button className="btn btn-danger btn-sm ms-2" onClick={() => removeFromCart(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <h3 className="mt-3">Total: ₹{totalPrice}</h3>
    </div>
  );
}

export default Cart;
