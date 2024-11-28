import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import StyledProvider from '../../contexts/StyledContext';
import Housing from '.';

// Mock the data
jest.mock('../../data/housings.json', () => [
  {
    id: '1',
    pictures: ['/images/house1.jpg'],
    title: 'Beautiful Villa',
    location: 'Nice, France',
    tags: ['Luxury', 'Sea View'],
    host: {
      name: 'John Doe',
      picture: '/images/john.jpg',
    },
    rating: '5',
    description: 'A stunning villa with an amazing view of the Mediterranean.',
    equipments: ['WiFi', 'Air Conditioning', 'Pool'],
  },
]);

describe('Housing Component', () => {
  test('displays a fallback message when housing is not found', () => {
    render(
      <StyledProvider>
        <MemoryRouter initialEntries={['/housings/999']}>
          <Routes>
            <Route path="/housings/:id" element={<Housing />} />
          </Routes>
        </MemoryRouter>
      </StyledProvider>
    );

    // Check fallback message
    expect(screen.getByText('Housing Not Find.')).toBeInTheDocument();
  });
});
