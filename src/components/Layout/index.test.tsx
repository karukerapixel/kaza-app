import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Layout from '.';

jest.mock('../Header', () => () => (
  <header data-testid="header">Header Component</header>
));
jest.mock('../Footer', () => () => (
  <footer data-testid="footer">Footer Component</footer>
));

describe('Layout Component', () => {
  test('renders the Header component', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // Check if the mocked Header component is rendered
    expect(screen.getByTestId('header')).toBeInTheDocument();
  });

  test('renders the Footer component', () => {
    render(
      <MemoryRouter>
        <Layout />
      </MemoryRouter>
    );

    // Check if the mocked Footer component is rendered
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
