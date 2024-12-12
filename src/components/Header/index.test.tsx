import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import StyledProvider from '../../contexts/StyledContext';
import Header from '.';

// Mock de l'image pour éviter les erreurs de chemin
jest.mock('../../assets/logo.png', () => 'mock-logo.png');

describe('Header Component', () => {
  const renderHeader = () => {
    render(
      <StyledProvider>
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Header />
        </BrowserRouter>
      </StyledProvider>
    );
  };

  it('renders the company logo with alt text', () => {
    renderHeader();
    const logoElement = screen.getByAltText(/logo du site/i);
    expect(logoElement).toBeInTheDocument();
    expect(logoElement).toHaveAttribute('src', 'mock-logo.png');
  });
});
