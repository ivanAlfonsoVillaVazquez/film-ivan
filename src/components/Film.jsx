import { Grid, Column, Row } from 'carbon-components-react'
import { useLocation,Link } from 'react-router-dom';
import React from 'react'

const Film = () => {
    const location = useLocation()
    const img_src = 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2';
    const img_src_back = 'https://www.themoviedb.org/t/p/w1920_and_h800_multi_faces/';
    const img_style = {
        backgroundImage : 'url(' + img_src_back+location.state.film.poster_path + ')',
    }
    return (
        <div className="film-info" style={ img_style }>
            <div className="film-back">
                <Grid>
                    <Row>
                        <Column sm={ { span: 4 } } md={ { span:3 } } className="film-poster">
                            <img src={ img_src + location.state.film.backdrop_path } alt={ location.state.film.title } />
                        </Column>
                        <Column sm={ { span: 4 } } md={ { span:5 } } className="film-detail">
                            <Link className="link"  to={ `/` }> {"<- Regresar"} </Link>
                            <h1 className="film-header">{ location.state.film.title } ( { location.state.film.release_date } )</h1>
                            <h3>Titulo original: { location.state.film.original_title}</h3>
                            <br />
                            <div>Score: <span className="score">{ location.state.film.rt_score }% </span> Duración: { location.state.film.running_time } min.</div>
                            <br />
                            <h4 className="txt-grey">{ location.state.film.original_title_romanised }</h4>
                            <br />
                            <h3>Vista General</h3>
                            <p>{ location.state.film.description }</p>
                            <br />
                            <p>Director: { location.state.film.director }</p>
                        </Column>
                    </Row>
                </Grid>
            </div>
        </div>
    )
}

export default Film
