import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Gallery from '.';

jest.mock('../../data/housings.json', () => [
  {
    id: '1',
    title: 'Charming Apartment',
    location: 'Paris, France',
    cover: '/images/apartment1.jpg',
  },
  {
    id: '2',
    title: 'Cozy Cabin',
    location: 'Alps, Switzerland',
    cover: '/images/cabin.jpg',
  },
]);

describe('Gallery Component', () => {
  test('renders a list of housings', () => {
    render(
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    );

    // Check that each dwelling is returned with its title
    expect(screen.getByText('Charming Apartment')).toBeInTheDocument();
    expect(screen.getByText('Cozy Cabin')).toBeInTheDocument();

    // Checks that each dwelling is returned with its location
    expect(screen.getByText('Paris, France')).toBeInTheDocument();
    expect(screen.getByText('Alps, Switzerland')).toBeInTheDocument();
  });

  test('renders links to the correct housing details', () => {
    render(
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    );

    // Checks that links are generated correctly
    const links = screen.getAllByRole('link');
    expect(links[0]).toHaveAttribute('href', '/housings/1');
    expect(links[1]).toHaveAttribute('href', '/housings/2');
  });

  test('renders images with correct src and alt text', () => {
    render(
      <MemoryRouter>
        <Gallery />
      </MemoryRouter>
    );

    // Checks that the images are rendered with the correct properties
    const images = screen.getAllByRole('img');
    expect(images[0]).toHaveAttribute('src', '/images/apartment1.jpg');
    expect(images[0]).toHaveAttribute(
      'alt',
      'Couverture de : Charming Apartment'
    );

    expect(images[1]).toHaveAttribute('src', '/images/cabin.jpg');
    expect(images[1]).toHaveAttribute('alt', 'Couverture de : Cozy Cabin');
  });
});
