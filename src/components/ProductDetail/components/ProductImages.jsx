import React from 'react'
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext, Image } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';

import BackIcon from '../../../svgs/BackIcon';
import NextIcon from '../../../svgs/NextIcon';


const ProductImages = ({ selectedImg, images }) => {
  // let img = '';
  let slides = [];
  let previewImgs = [];
  // if (selectedImg) img = selectedImg.url;
  if (images.length) {
    slides = images.map((image, idx) => {
      previewImgs.push(<div className="img-preview"><img alt="" src={idx === 1 ? 'https://s3-us-west-1.amazonaws.com/synapse-bl-chatbot/assets/bof-a-logo.png' : 'https://s3-us-west-1.amazonaws.com/synapse-bl-chatbot/assets/chase-logo.png'} /></div>);
      return (
        <Slide className="carousel-slide" index={image.id}>
          {/* <Image src={image.url} /> */}
          <div className='selected-img-container'>
            <Image className="selected-img" src={idx === 1 ? 'https://s3-us-west-1.amazonaws.com/synapse-bl-chatbot/assets/bof-a-logo.png' : 'https://s3-us-west-1.amazonaws.com/synapse-bl-chatbot/assets/chase-logo.png'} />
          </div>
        </Slide>
      );
    })
  }
  console.log(images);
  return (
    <div className="product-images-container">
      <CarouselProvider
        naturalSlideWidth={100}
        naturalSlideHeight={125}
        totalSlides={3}
      >
        <Slider className="carousel-slider">
          {slides}
        </Slider>
        <div className="carousel-bottom">
          <ButtonBack className="carousel-button"><BackIcon /></ButtonBack>
          <div className="carousel-preview">
            {previewImgs}
          </div>
          <ButtonNext className="carousel-button"><NextIcon /></ButtonNext>
        </div>
      </CarouselProvider>
    </div>
  )
}

export default ProductImages;
