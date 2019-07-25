import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import BackIcon from '../../svgs/BackIcon';
import NextIcon from '../../svgs/NextIcon';

const RecommendedProducts = ({ recommendedProducts, updateSelectedProduct }) => {
  const slides = recommendedProducts.map((product, idx) => (
    <Slide key={`slide-${product.id}`} className="carousel-slide" index={idx} onClick={() => updateSelectedProduct(product)}>
      <Image className="selected-img" src={product.imgURLs[0].url} />
      <div className="name">{product.name}</div>
      <div className="price">${product.price}</div>
    </Slide>
  ));

  return (
    <div className="recommended-products-container">
      <div className="header">You’ll Also Like </div>
      <div className="recommended-products">
        {
          <CarouselProvider
            naturalSlideWidth={329}
            naturalSlideHeight={421.5}
            totalSlides={slides.length}
            visibleSlides={4}
          >
            <ButtonBack className="carousel-button back"><BackIcon /></ButtonBack>
            <Slider className="carousel-slider">
              {slides}
            </Slider>
            <ButtonNext className="carousel-button next"><NextIcon /></ButtonNext>
          </CarouselProvider>
        }
      </div>
    </div>
  );
}

export default RecommendedProducts;
