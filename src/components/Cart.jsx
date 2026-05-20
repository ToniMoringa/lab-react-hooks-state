import React from 'react';
import styles from './Cart.module.css';

const Cart = ({ cart }) => {
  const total = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className={styles.cart}>
      <h2>Shopping Cart</h2>
      {cart.map((item) => (
        <div key={item.id} className={stylesCartItem}>
          <p>{item.name}</p>
          <p>${item.price.toFixed(2)}</p>
        </div>
      ))}
      <p>Total: ${total.toFixed(2)}</p>
    </div>
  );
};

export default Cart;
