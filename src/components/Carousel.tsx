'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import './Carousel.css';

interface CarouselProps {
  directory: string;
  alt?: string;
}

export default function Carousel({ directory, alt }: CarouselProps) {
  const [images, setImages] = useState<string[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await fetch(`/api/images?dir=${encodeURIComponent(directory)}`);
        const data = await response.json();
        setImages(data.images || []);
      } catch (error) {
        console.error('Failed to load images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, [directory]);

  const nextImage = () => {
    setCurrentIndex((i) => (i + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((i) => (i + images.length - 1) % images.length);
  };

  return (
    <div className="carousel-container">
      <div className="carousel-image-wrapper" 
        onMouseUp={nextImage} onMouseDown={e => e.preventDefault()} onTouchStart={e => e.preventDefault()} onTouchEnd={nextImage}>
        <Image
          src={images[currentIndex]}
          alt={`${alt} ${currentIndex + 1}`}
          fill
          priority
        />
      </div>


      <div className="carousel-dots">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`carousel-dot ${index === currentIndex ? 'active' : 'inactive'}`}
            aria-label={`Go to image ${index + 1}`}
          />
        ))}
      </div>

      <div className="carousel-counter">
        {currentIndex + 1} / {images.length}
      </div>
    </div>
  );
}