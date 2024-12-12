import { render, screen, fireEvent } from '@testing-library/react';
import Carousel from '.';

describe('Carousel Component', () => {
  const mockPictures = ['image1.jpg', 'image2.jpg', 'image3.jpg'];

  it('renders fallback message when no pictures are provided', () => {
    render(<Carousel pictures={[]} />);
    const fallbackMessage = screen.getByText('No images to display');
    expect(fallbackMessage).toBeInTheDocument();
  });

  it('renders the first image and navigation buttons', () => {
    render(<Carousel pictures={mockPictures} />);

    // Check that the first image is displayed
    const firstImage = screen.getByAltText('0');
    expect(firstImage).toBeInTheDocument();
    expect(firstImage).toHaveAttribute('src', 'image1.jpg');

    // Checks that navigation buttons are displayed
    const prevButton = screen.getByRole('previous');
    const nextButton = screen.getByRole('next');
    expect(prevButton).toBeInTheDocument();
    expect(nextButton).toBeInTheDocument();
  });

  it('navigates to the next image when the next button is clicked', () => {
    render(<Carousel pictures={mockPictures} />);

    const nextButton = screen.getByRole('next');

    // Click on the "next" button
    fireEvent.click(nextButton);

    // Checks that the second image is displayed
    const secondImage = screen.getByAltText('1');
    expect(secondImage).toBeInTheDocument();
    expect(secondImage).toHaveAttribute('src', 'image2.jpg');
  });

  it('navigates to the previous image when the previous button is clicked', () => {
    render(<Carousel pictures={mockPictures} />);

    const prevButton = screen.getByRole('previous');

    // Click on the "previous" button
    fireEvent.click(prevButton);

    // Checks that the last image is displayed (loop)
    const lastImage = screen.getByAltText('2');
    expect(lastImage).toBeInTheDocument();
    expect(lastImage).toHaveAttribute('src', 'image3.jpg');
  });
});
