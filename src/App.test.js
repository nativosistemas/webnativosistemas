import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the company headline', () => {
  render(<App />);
  const headline = screen.getByRole('heading', {
    name: /soluciones digitales para impulsar tu empresa/i,
  });
  expect(headline).toBeInTheDocument();
});
