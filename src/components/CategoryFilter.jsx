import React from 'react';

const CATEGORIES = ['All', 'Fruits', 'Vegetables', 'Dairy', 'Bakery'];

const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  return (
    <div className="filter" data-testid="category-filter">
      <label htmlFor="category-select">Filter by Category: </label>
      <select
        id="category-select"
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        data-testid="category-dropdown"
      >
        {CATEGORIES.map((cat) => (
          <option key={cat} value={cat}>
            {cat}
          </option>
        ))}
      </select>
    </div>
  );
};

export default CategoryFilter;
