import React, { useState, useCallback } from 'react';
import { CarouselButton, CarouselPictures, CarouselWrapper } from './style';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

type CarouselProps = {
  pictures: string[] | undefined;
};

const Carousel: React.FC<CarouselProps> = ({ pictures = [] }) => {
  const doNotDisplay = pictures.length > 1 ? true : false; // Determine if buttons should be displayed (only if there is more than one picture)
  const [currentPicture, setCurrentPicture] = useState<number>(0); // State to track the currently displayed picture index
  const [isPaused, setIsPaused] = useState<boolean>(false); // State to determine whether the automatic slideshow is paused

  // Function to handle navigation between pictures (left/right buttons)
  const handleClick = useCallback(
    (direction: 'previous' | 'next') => {
      if (!pictures || pictures.length === 0) return; // Exit if no pictures are available

      if (direction === 'previous') {
        setCurrentPicture((cP) => (cP === 0 ? pictures.length - 1 : cP - 1)); // Go to the previous picture, loop to the last if at the beginning
      } else if (direction === 'next') {
        setCurrentPicture((cP) => (cP === pictures.length - 1 ? 0 : cP + 1)); // Go to the next picture, loop to the first if at the end
      }
    },
    [pictures] // Add `pictures` as a dependency for useCallback to prevent stale closures
  );

  // Effect to handle the automatic slideshow
  React.useEffect(() => {
    if (isPaused || !pictures || pictures.length === 0) return; // Do nothing if paused or no pictures
    const interval = setInterval(() => handleClick('next'), 3000); // Automatically move to the next picture every 3 seconds
    return () => clearInterval(interval); // Cleanup function to clear the interval on component unmount or when dependencies change
  }, [isPaused, pictures, handleClick]);

  // Render fallback message if no pictures are provided
  if (!pictures || pictures.length === 0) {
    return <p>No images to display</p>;
  }

  return (
    <CarouselWrapper
      role="region"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {doNotDisplay && (
        <CarouselButton
          type="button"
          role="previous"
          onClick={() => handleClick('previous')}
          style={{ left: '5%' }}
        >
          <FiChevronLeft />
        </CarouselButton>
      )}

      {pictures.map(
        (picture, index) =>
          currentPicture === index && (
            <CarouselPictures src={picture} alt={`${index}`} key={index} />
          )
      )}
      {doNotDisplay && (
        <CarouselButton
          type="button"
          role="next"
          onClick={() => handleClick('next')}
          style={{ right: '5%' }}
        >
          <FiChevronRight />
        </CarouselButton>
      )}
    </CarouselWrapper>
  );
};

export default Carousel;
