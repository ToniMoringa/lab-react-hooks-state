import React from 'react';
import ProductCard from './ProductCard';

// Sample product data (for display purposes only)
export const initialProducts = [
  { id: 1, name: 'Apple', price: '$1.00', category: 'Fruits', inStock: true },
  { id: 2, name: 'Milk', price: '$2.50', category: 'Dairy', inStock: false },
];

const ProductList = ({ products = initialProducts, addToCart, selectedCategory }) => {
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((product) => product.category === selectedCategory);
  return (
    <div>
      <h2>Available Products</h2>

      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

export default ProductList;

