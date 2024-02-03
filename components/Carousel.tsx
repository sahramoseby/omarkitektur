import React, { useRef, useEffect } from 'react';
import Image from "next/image";

const Carousel: React.FC = () => {
  const carouselImagesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carouselImages = carouselImagesRef.current;

    if (carouselImages) {
      const interval = setInterval(() => {
        // Move the first image to the end
        const firstImage = carouselImages.firstElementChild;
        if (firstImage) {
          carouselImages.appendChild(firstImage.cloneNode(true));
          carouselImages.removeChild(firstImage);

          // Instantly transition to the next image
          if (carouselImages.style) {
            carouselImages.style.transition = 'none';
            carouselImages.style.transform = 'translateX(-100%)';

            // Trigger reflow before re-enabling the transition
            void carouselImages.offsetWidth;

            if (carouselImages.style) {
              carouselImages.style.transition = 'transform 0.4s ease-in-out';
              carouselImages.style.transform = 'translateX(0)';
            }
          }
        }
      }, 400);

      // Cleanup interval on component unmount
      return () => clearInterval(interval);
    }
  }, []);

  return (
    <div className="carousel-container">
      <div className="carousel-images" ref={carouselImagesRef}>
        <img src="/bilde1.jpg" alt="Image 1" />
        <img src="/bilde2.jpg" alt="Image 2" />
        <img src="/bilde3.jpg" alt="Image 3" />
        <img src="/bilde4.jpg" alt="Image 4" />
      </div>
    </div>
  );
};

export default Carousel;
