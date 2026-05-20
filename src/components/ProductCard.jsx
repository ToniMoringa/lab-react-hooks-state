import React from 'react';
import styles from '../styles/ProductCard.module.css';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div
      className={`${styles.card} ${!product.inStock ? styles.outOfStock : ''}`}
    >
      <h3>{product.name}</h3>
      <p>Price: {product.price}</p>
      <p>Status: {product.inStock ? 'In Stock' : 'Out of Stock'}</p>

      <button
        onClick={() => addToCart(product)}
        data-testid={'product-' + product.id}
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
