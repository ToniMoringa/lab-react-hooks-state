import React, { useState } from 'react';
import ProductList from './components/ProductList';
import DarkModeToggle from './components/DarkModeToggle';
import Cart from './components/Cart';
import './App.css';

const initialProducts = [
  { id: 1, name: 'Milk', category: 'Dairy', price: 3.99 },
  { id: 2, name: 'Bread', category: 'Bakery', price: 2.99 },
  { id: 3, name: 'Eggs', category: 'Dairy', price: 4.99 },
  { id: 4, name: 'Apples', category: 'Produce', price: 1.99 },
  { id: 5, name: 'Chicken', category: 'Meat', price: 8.99 },
  { id: 6, name: 'Cheese', category: 'Dairy', price: 5.99 },
  { id: 7, name: 'Tomatoes', category: 'Produce', price: 2.49 },
  { id: 8, name: 'Croissant', category: 'Bakery', price: 3.49 },
];

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const getUniqueCategories = () => {
    const categories = initialProducts.map((product) => product.category);
    return ['All', ...new Set(categories)];
  };

  const filteredProducts =
    selectedCategory === 'All'
      ? initialProducts
      : initialProducts.filter(
          (product) => product.category === selectedCategory,
        );

  return (
    <div className={`app ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header className="app-header">
        <h1>Shopping App</h1>
        <DarkModeToggle darkMode={darkMode} setDarkMode={setDarkMode} />
      </header>

      <div className="main-content">
        <div className="filters-section">
          <label htmlFor="category-filter">Filter by Category: </label>
          <select
            id="category-filter"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {getUniqueCategories().map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="products-and-cart">
          <ProductList products={filteredProducts} addToCart={addToCart} />
          <Cart cart={cart} />
        </div>
      </div>
    </div>
  );
}

export default App;
