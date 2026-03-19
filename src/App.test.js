import { render, screen } from '@testing-library/react';
import App from './App';

test('renders City Pizzeria link', () => {
  render(<App />);
  const linkElement = screen.getByText(/city pizzeria/i);
  expect(linkElement).toBeInTheDocument();
});
