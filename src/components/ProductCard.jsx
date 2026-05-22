import React from 'react';

const ProductCard = ({ product, onAddToCart }) => {
  return (
    <div 
      className="product-card" 
      data-testid={`product-${product.name.toLowerCase()}`}
    >
      <h3 data-testid="product-name">{product.name}</h3>
      <p className="category" data-testid="product-category">{product.category}</p>
      <p className="price" data-testid="product-price">${product.price.toFixed(2)}</p>
      <p className="stock" data-testid="product-stock">
        {product.inStock ? 'In Stock' : 'Out of Stock'}
      </p>
      <button
        onClick={() => onAddToCart(product)}
        disabled={!product.inStock}
        className="add-button"
        data-testid="add-to-cart-btn"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;