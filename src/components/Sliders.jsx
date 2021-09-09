import React from 'react';
import Slider from "react-slick";

const Sliders = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 100,
        cssEase: "linear"
    };

    const img_src = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';

    return (
        <div className="slider1">
            <h3> Populares</h3>
            <Slider { ...settings }>
                {
                    props.films.map( (film, key) => (
                        <div key={ key }>
                            <img src={ img_src + film.backdrop_path } alt="" />
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Sliders
