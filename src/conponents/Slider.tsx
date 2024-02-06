import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import languages from '../lenguages/lenguages.json'
import { useState } from 'react';

export const TextSlider = ({lang}: {lang: string}) => {
  const [content, setContent] = useState(languages[lang])
  

  const settings = {
    dots: true,
    infinite: true,
    speed: 0,
    slidesToShow: 1,
    slidesToScroll: 2,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: true,
    cssEase: 'easy',
    arrows: false
  };

  return (
    <Slider {...settings} className='w-[80%] m-auto md:w-[50%]'>
        <p className='text-[2rem] lg:text-[3rem] text-center md:w-[50%] w-full'>{content?.slider?.a}</p> 
        <p className='text-[2rem] lg:text-[3rem] text-center md:w-[50%] w-full'>{content?.slider?.b}</p>
        <p className='text-[2rem] lg:text-[3rem] text-center md:w-[50%] w-full'>{content?.slider?.c}</p>
    </Slider>
  );
};
