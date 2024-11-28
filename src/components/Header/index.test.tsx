import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import StyledProvider from '../../contexts/StyledContext';
import Header from '.';

// Mock assets
jest.mock('../../assets/logo.png', () => 'mock-logo.png');

describe('Header Component', () => {
  test('renders the logo with the correct alt text', () => {
    render(
      <StyledProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </StyledProvider>
    );

    // Check if the logo is rendered with the correct alt attribute
    const logo = screen.getByAltText("logo de l'entreprise Kaza");
    expect(logo).toBeInTheDocument();
    expect(logo).toHaveAttribute('src', 'mock-logo.png');
  });

  test('renders the SearchBar component', () => {
    render(
      <StyledProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </StyledProvider>
    );

    // Check if the SearchBar component is rendered (specific text or placeholder validation)
    const searchInput = screen.getByPlaceholderText(/rechercher une destination/i); // Adjust placeholder text as per the actual SearchBar implementation
    expect(searchInput).toBeInTheDocument();
  });

  test('renders navigation links', () => {
    render(
      <StyledProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </StyledProvider>
    );

    // Check if the navigation links are rendered correctly
    expect(screen.getByText(/louer mon logement/i)).toBeInTheDocument();
    expect(
      screen.getByRole('link', { name: /louer mon logement/i })
    ).toHaveAttribute('href', '/');

    // Check icons for "World" and "Users" links
    const worldLink = screen.getByRole('lang');
    const usersLink = screen.getByRole('login');

    expect(worldLink).toBeInTheDocument();
    expect(usersLink).toBeInTheDocument();
  });

  test('all navigation links point to the correct routes', () => {
    render(
      <StyledProvider>
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      </StyledProvider>
    );

    const navLinks = screen.getAllByRole('link');
    navLinks.forEach((link) => {
      expect(link).toHaveAttribute('href', '/'); // Validate all links point to "/"
    });
  });
});
