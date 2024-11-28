import React from 'react';
import { render, screen } from '@testing-library/react';
import Rating from '.';

// Mock assets
jest.mock('../../assets/red-star.png', () => 'red-star.png');
jest.mock('../../assets/grey-star.png', () => 'grey-star.png');

describe('Rating Component', () => {
  test('renders the correct number of full and empty stars for a valid score', () => {
    render(<Rating score="3" />);

    // Check that 3 full stars are rendered
    const fullStars = screen.getAllByAltText('full star');
    expect(fullStars).toHaveLength(3);

    // Check that 2 empty stars are rendered
    const emptyStars = screen.getAllByAltText('empty star');
    expect(emptyStars).toHaveLength(2);
  });

  test('renders all empty stars for a score of 0', () => {
    render(<Rating score="0" />);

    // Check that no full stars are rendered
    expect(screen.queryByAltText('full star')).not.toBeInTheDocument();

    // Check that 5 empty stars are rendered
    const emptyStars = screen.getAllByAltText('empty star');
    expect(emptyStars).toHaveLength(5);
  });

  test('renders all full stars for a score of 5', () => {
    render(<Rating score="5" />);

    // Check that 5 full stars are rendered
    const fullStars = screen.getAllByAltText('full star');
    expect(fullStars).toHaveLength(5);

    // Check that no empty stars are rendered
    expect(screen.queryByAltText('empty star')).not.toBeInTheDocument();
  });

  test('handles invalid scores by rendering all empty stars', () => {
    render(<Rating score="invalid" />);

    // Check that no full stars are rendered
    expect(screen.queryByAltText('full star')).not.toBeInTheDocument();

    // Check that 5 empty stars are rendered
    const emptyStars = screen.getAllByAltText('empty star');
    expect(emptyStars).toHaveLength(5);
  });

  test('clamps scores greater than the maximum to 5 full stars', () => {
    render(<Rating score="6" />);

    // Check that 5 full stars are rendered
    const fullStars = screen.getAllByAltText('full star');
    expect(fullStars).toHaveLength(5);

    // Check that no empty stars are rendered
    expect(screen.queryByAltText('empty star')).not.toBeInTheDocument();
  });

  test('clamps negative scores to 0 and renders all empty stars', () => {
    render(<Rating score="-3" />);

    // Check that no full stars are rendered
    expect(screen.queryByAltText('full star')).not.toBeInTheDocument();

    // Check that 5 empty stars are rendered
    const emptyStars = screen.getAllByAltText('empty star');
    expect(emptyStars).toHaveLength(5);
  });
});
