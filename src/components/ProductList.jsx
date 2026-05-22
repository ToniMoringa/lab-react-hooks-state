import React from 'react';
import ProductCard from './ProductCard';

export const sampleProducts = [
  { id: 1, name: 'Apple', price: 1.00, category: 'Fruits', inStock: true },
  { id: 2, name: 'Banana', price: 0.75, category: 'Fruits', inStock: true },
  { id: 3, name: 'Milk', price: 2.50, category: 'Dairy', inStock: true },
  { id: 4, name: 'Cheese', price: 4.00, category: 'Dairy', inStock: false },
  { id: 5, name: 'Bread', price: 3.00, category: 'Bakery', inStock: true },
  { id: 6, name: 'Carrot', price: 0.50, category: 'Vegetables', inStock: true },
];

const ProductList = ({ selectedCategory, addToCart }) => {
  const filteredProducts = selectedCategory === 'All' 
    ? sampleProducts 
    : sampleProducts.filter(p => p.category === selectedCategory);

  if (filteredProducts.length === 0) {
    return <p data-testid="no-products">No products available</p>;
  }

  return (
    <ul className="product-list" data-testid="product-list">
      {filteredProducts.map(product => (
        <li key={product.id} className="product-item" role="listitem">
          <ProductCard 
            product={product} 
            onAddToCart={addToCart} 
          />
        </li>
      ))}
    </ul>
  );
};

export default ProductList;