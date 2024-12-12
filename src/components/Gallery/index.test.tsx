import { MemoryRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import StyledProvider from '../../contexts/StyledContext';
import Gallery from '.';

// Create a housing data model
jest.mock('../../data/housings.json', () => [
  {
    id: '1',
    title: 'Maison avec vue sur la mer',
    location: 'Nice, France',
    cover: 'mock-cover.jpg',
    host: {
      name: 'John Doe',
    },
    available_dates: ['11 - 15 déc'],
    price_per_night: '120',
  },
  {
    id: '2',
    title: 'Appartement en centre-ville',
    location: 'Lyon, France',
    cover: 'mock-cover-2.jpg',
    host: {
      name: 'Jane Smith',
    },
    available_dates: ['20 - 26 déc'],
    price_per_night: '90',
  },
]);

describe('Gallery Component', () => {
  const renderGallery = () => {
    render(
      <StyledProvider>
        <MemoryRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Gallery />
        </MemoryRouter>
      </StyledProvider>
    );
  };

  it('renders the list of housings', () => {
    renderGallery();

    // Check the number of housings
    const housingItems = screen.getAllByRole('link');
    expect(housingItems).toHaveLength(2);
  });

  it('renders housing details correctly', () => {
    renderGallery();

    // Check the first housing informations
    const firstLocation = screen.getByText(/nice/i);
    expect(firstLocation).toBeInTheDocument();

    const firstDate = screen.getByText(/20 - 26 déc/i);
    expect(firstDate).toBeInTheDocument();

    const firstPrice = screen.getByText(/120€/i);
    expect(firstPrice).toBeInTheDocument();
  });
});
