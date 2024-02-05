import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export const TextSlider = ({lang}: {lang: string}) => {
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
        <p className='text-[2rem] lg:text-[3rem] text-center md:w-[50%] w-full'><span className='font-black h-3/4'>Precisão, Sentimento e Confiabilidade</span> em Cada Palavra!</p> 
        <p className='text-[2rem] lg:text-[3rem] text-center md:w-[50%] w-full'><span className='font-black h-3/4'>Transcrição inteligente</span> para projetos impactantes.</p>
        <p className='text-[2rem] lg:text-[3rem] text-center md:w-[50%] w-full'>Simplifique suas transcrições, <span className='font-black h-3/4'>amplifique seus resultados.</span></p>
    </Slider>
  );
};
