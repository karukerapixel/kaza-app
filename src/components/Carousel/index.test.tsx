import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Carousel from '.';

describe('Carousel Component', () => {
  const mockPictures = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  test('renders fallback text when no pictures are provided', () => {
    render(<Carousel pictures={[]} />);
    expect(screen.getByText(/no images to display/i)).toBeInTheDocument();
  });

  test('renders images and navigation buttons when pictures are provided', () => {
    render(<Carousel pictures={mockPictures} />);
    const previousButton = screen.getByRole('button', { name: /previous/i });
    const nextButton = screen.getByRole('button', { name: /next/i });

    // Check if the first image is displayed
    expect(screen.getByAltText('0')).toBeInTheDocument();
    expect(screen.getByAltText('0')).toHaveAttribute('src', 'image1.jpg');

    // Check if navigation buttons are rendered
    expect(previousButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  test('navigates to the next and previous images', () => {
    render(<Carousel pictures={mockPictures} />);
    const previousButton = screen.getByRole('button', { name: /previous/i });
    const nextButton = screen.getByRole('button', { name: /next/i });

    // Click next button
    fireEvent.click(nextButton);
    expect(screen.getByAltText('1')).toBeInTheDocument(); // Second image

    // Click next button again
    fireEvent.click(nextButton);
    expect(screen.getByAltText('2')).toBeInTheDocument(); // Third image

    // Click previous button
    fireEvent.click(previousButton);
    expect(screen.getByAltText('1')).toBeInTheDocument(); // Second image
  });

  test('loops from last image to first when clicking next', () => {
    render(<Carousel pictures={mockPictures} />);
    const nextButton = screen.getByRole('button', { name: /next/i });

    // Navigate to the last image
    fireEvent.click(nextButton);
    fireEvent.click(nextButton);

    expect(screen.getByAltText('2')).toBeInTheDocument(); // Third image

    // Click next to loop back to the first image
    fireEvent.click(nextButton);
    expect(screen.getByAltText('0')).toBeInTheDocument(); // First image
  });

  test('loops from first image to last when clicking previous', () => {
    render(<Carousel pictures={mockPictures} />);
    const previousButton = screen.getByRole('button', { name: /previous/i });

    // Click previous to loop back to the last image
    fireEvent.click(previousButton);
    expect(screen.getByAltText('2')).toBeInTheDocument(); // Third image
  });
});
