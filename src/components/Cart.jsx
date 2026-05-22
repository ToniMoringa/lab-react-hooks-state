import React from 'react';

const Cart = ({ cart }) => {
  const getTotal = () => {
    return cart.reduce((acc, item) => {
      const price = typeof item.price === 'number' 
        ? item.price 
        : parseFloat(String(item.price).replace('$', ''));
      return acc + price;
    }, 0);
  };

  return (
    <div className="cart" data-testid="cart">
      <h2>Shopping Cart</h2>
      
      {cart.length === 0 ? (
        <p data-testid="empty-cart">Your cart is empty</p>
      ) : (
        <ul data-testid="cart-items">
          {cart.map((item, index) => (
            <li key={index} data-testid="cart-item">
              <p data-testid="cart-message">{item.name} is in your cart</p>
              <p data-testid="cart-price">
                ${typeof item.price === 'number' ? item.price.toFixed(2) : item.price}
              </p>
            </li>
          ))}
          <p className="total" data-testid="cart-total">
            Total: ${getTotal().toFixed(2)}
          </p>
        </ul>
      )}
    </div>
  );
};

export default Cart;