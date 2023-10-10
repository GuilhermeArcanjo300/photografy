import Slider from 'react-slick';

const images = [
    'https://via.placeholder.com/800x400/1abc9c/ffffff',
    'https://via.placeholder.com/800x400/3498db/ffffff',
    'https://via.placeholder.com/800x400/9b59b6/ffffff',
    'https://via.placeholder.com/800x400/f1c40f/ffffff',
    'https://via.placeholder.com/800x400/e74c3c/ffffff',
];

const Carousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };

    return (
        <div className="w-full mx-auto border-2"> {/* adicionado mx-auto para centralizar horizontalmente */}
            <Slider {...settings}>
                <img src={images[0]} alt={`Slide1`} className="w-full" />
                <img src={images[1]} alt={`Slide2`} className="w-full" />
                <img src={images[2]} alt={`Slide3`} className="w-full" />
            </Slider>
        </div>
    );
};

export default Carousel;
