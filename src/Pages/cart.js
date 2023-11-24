import React from "react";

export default function Cart({ Cart, removeFromCart }) {
  const calculateSubtotal = (item) => {
    return item.price * item.quantity;
  };

  const calculateTotal = () => {
    return Cart.reduce((total, item) => total + calculateSubtotal(item), 0);
  };

  return (
    <div>
      <h3>Cart</h3>
      <ul >
        {Cart.map(item => (
          <li key={item.name} className="cart">
            <img src={item.imageUrl} alt={item.name} />
            {item.name} - ${item.price} - Quantity: {item.quantity} - Subtotal: ${calculateSubtotal(item)}
            <button onClick={() => removeFromCart(item)}>Remove</button>
          </li>
        ))}
      </ul>
      <div>
        <p style={{fontSize:"2rem",textAlign:"center",fontWeight:"bolder"}}>Total: ${calculateTotal()}</p>
      </div>
    </div>
  );
}
