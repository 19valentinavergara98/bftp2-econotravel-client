import { render, screen } from '@testing-library/react';
import App from './App';

test('lo primero que ves es la página principal con catalogo de experiencias', () => {
  render(<App />);
  const linkElement = screen.getByText(/DESCUBRELAS AQUÍ/i);
  expect(linkElement).toBeInTheDocument();
});
