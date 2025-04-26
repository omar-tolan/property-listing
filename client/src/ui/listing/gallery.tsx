'use client';

import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';

const ImageCarousel = ({ images, className }: { images: string[]; className?: string }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full">
      {/* Main Swiper */}
      <Swiper
        modules={[Thumbs, Navigation]}
        navigation
        thumbs={{ swiper: thumbsSwiper }}
        spaceBetween={10}
        slidesPerView={1}
        loop
        className="mb-4"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index}`} className="w-full h-96 object-cover rounded-lg" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;
