import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from '../App';

test('toggles dark mode on button click', () => {
  render(<App />);
  const toggleBtn = screen.getByRole('button', { name: /toggle/i });
  expect(toggleBtn).toBeInTheDocument();

  fireEvent.click(toggleBtn);
  expect(screen.queryByText(/Toggle Dark Mode/)).not.toBeInTheDocument();
  expect(screen.getByText(/Light Mode/)).toBeInTheDocument();

  fireEvent.click(toggleBtn);
  expect(screen.queryByText(/Light Mode/)).not.toBeInTheDocument();
  expect(screen.getByText(/Toggle Dark Mode/)).toBeInTheDocument();
});

test('filters products by category', () => {
  render(<App />);
  const dropdown = screen.getByRole('combobox');

  // Check for initial state
  expect(screen.getAllByRole('listitem').length).toBeGreaterThan(0);

  fireEvent.change(dropdown, { target: { value: 'Fruits' } });
  expect(screen.getAllByText(/Apple/i)).toHaveLength(1);
  expect(screen.queryByText(/Milk/i)).not.toBeInTheDocument();

  fireEvent.change(dropdown, { target: { value: 'Dairy' } });
  expect(screen.getByText(/Milk/i)).toBeInTheDocument();
  expect(screen.queryByText(/Apple/i)).not.toBeInTheDocument();
});

test('displays message when no products match filter', () => {
  render(<App />);
  const dropdown = screen.getByRole('combobox');
  fireEvent.change(dropdown, { target: { value: 'NonExistent' } });

  expect(screen.getByText(/No products available/i)).toBeInTheDocument();
});

test('adds items to cart', () => {
  render(<App />);

  const appleBtn = screen.getByTestId('product-apple');
  fireEvent.click(appleBtn);
  expect(screen.getByText(/Apple is in your cart/i)).toBeInTheDocument();

  const milkBtn = screen.getByTestId('product-milk');
  fireEvent.click(milkBtn);
  expect(screen.getByText(/Milk is in your cart/i)).toBeInTheDocument();
});
