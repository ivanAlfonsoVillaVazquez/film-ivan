import React from 'react'
import { Row, Column } from 'carbon-components-react'
import studio_banner from '../img/studio_banner.png';

const Banner = () => {
    return (
        <div className="banner">
            <Row>
                <Column lg={ { span:8 } }>
                    <img src={ studio_banner } alt="studio banner" />
                </Column>
                <Column lg={ { span:4 } } className="banner-text">
                    <h1 id="banner_title">Películas de Studio Ghibli</h1>
                    <h4 id="banner_text">Studio Ghibli, del legendario creador de anime Hayao Miyazaki,
                        es reconocido por sus películas animadas fascinantes y de culto,
                        como las que componen esta colección.</h4>
                </Column>
            </Row>
        </div>
    )
}

export default Banner
