import { useEffect, useState } from 'react';
import { CONSTANTS } from '../../constants/constants';
import './Carousel.scss';

const { icons } = CONSTANTS;

const Carousel = ({ images }) => {
  const [imageIndx, setImageIndx] = useState(0);

  useEffect(() => {
    const carouselInterval = setInterval(
      () => setImageIndx(state => (state + 1) % images.length),
      7000
    );

    return () => {
      clearInterval(carouselInterval);
    };
  }, [images.length]);

  return (
    <div className="carousel" title="My stack of technologies">
      <svg className="carousel__image" aria-label="Technology icon">
        <use href={`${icons}#icon-${images[imageIndx]}-mono`} />
      </svg>
    </div>
  );
};

export default Carousel;
