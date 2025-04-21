import { Carousel } from 'primereact/carousel';
import { AboutContent } from "./About";
import { ContactContent } from "./Contact";
import { JobContent } from "./JobContent";

import imageSlide from '../../../public/img/slides/slide-1.jpg'
import backgroundFlor1 from '../../../public/img/backgrounds/flor-1.png'
import backgroundFlor2 from '../../../public/img/backgrounds/flor-2.png'
import backgroundFlor3 from '../../../public/img/backgrounds/flor-3.png'

export function HomePage() {
  return (
    <>
        <div className="bg-black h-[calc(100vh-80px)] py-[5vh] px-[5%]">
            <Carousel 
                value={[imageSlide, imageSlide]} 
                circular={true} 
                showNavigators={false} 
                showIndicators={false} 
                autoplayInterval={3000} 
                numVisible={1} 
                numScroll={1} 
                itemTemplate={templateSlide} 
            />
        </div>
        <img src={backgroundFlor1} alt='background-flor-1' className='absolute z-10 -mt-[200px]' />
        <img src={backgroundFlor2} alt='background-flor-2' className='absolute right-0 z-10 -mt-[150px]' />
        <JobContent />
        <img src={backgroundFlor3} alt='background-flor-3' className='absolute z-10 -mt-[250px]' />
        <AboutContent/>
        <ContactContent/>
    </>
  );
}

const templateSlide = (image: string) => {
    return (
        <div className='flex justify-center'>
            <img src={image} alt='slide' className='h-[calc(90vh-80px)]' />
        </div>
    )
}