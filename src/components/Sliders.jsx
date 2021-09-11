import React from 'react';
import Slider from "react-slick";
import {  Link } from 'react-router-dom';
import NoImage from '../img/noImage.JPG';

const Sliders = (props) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: props.films.length > 2 ? 4 : 2,
        slidesToScroll: 1,
        autoplay: props.play,
        speed: 5000,
        autoplaySpeed: 100,
        cssEase: "linear",
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const img_src = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';

    return (
        <div className="slider1">
            <h3> { props.title } </h3>
            <Slider { ...settings }>
                {
                    props.films.map( (film, key) => (
                        <div key={ key }>
                            <Link
                                className="title-link"
                                to={ {
                                    pathname: "/film",
                                    state: {
                                        film: film,
                                    },
                                } }
                            >
                                <img src={ film.backdrop_path.includes('noImage') ? NoImage : img_src + film.backdrop_path } alt="" />
                                <h4>
                                    { film.title }
                                </h4>
                            </Link>
                        </div>
                    ))
                }
            </Slider>
        </div>
    )
}

export default Sliders
