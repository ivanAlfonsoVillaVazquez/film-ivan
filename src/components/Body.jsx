import { Grid, SearchSkeleton, CodeSnippetSkeleton, ToastNotification } from 'carbon-components-react'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Search from './Search'
import Banner from './Banner';
import Sliders from './Sliders';
import Functions from '../helpers/functions';

const Body = () => {
    const [films, setFilms] = useState([])
    const [popularFilms, setPopularFilms] = useState([])
    const [hayaoFilms, setHayaoFilms] = useState([])
    const [hiromasa, setHiromasa] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [notifications, setNotification] = useState({ title: '', error: '', kind: '' });


    useEffect(() => {
        const loadFilms = async()=>{
            try {
                const response = await axios.get('https://ghibliapi.herokuapp.com/films')
                if( response.status == 200){
                    const final_films = await Functions.addInfo(response.data);
                    setFilms(final_films)
                    setPopularFilms(final_films.filter(film => film.rt_score >= 96))
                    setHayaoFilms(final_films.filter(film => film.director == 'Hayao Miyazaki'))
                    setHiromasa(final_films.filter(film => film.director == 'Hiromasa Yonebayashi'))
                    setIsLoading(false)
                }
            } catch (error) {
                setNotification({
                    title: 'Ocurrio un error al llamar la API',
                    error: error,
                    kind: "error",
                });
            }
        }
        loadFilms()
    }, [])

    return (
        <div className="container">
            <Grid condensed>
                {
                    isLoading
                        ? (
                            <div>
                                <SearchSkeleton/>
                                <CodeSnippetSkeleton/>
                            </div>
                        )
                        : (
                            <div>
                                <Search films={ films }/>
                                <Banner/>
                                <Sliders films={ films } title={ 'Todos' } play={ true }/>
                                <Sliders films={ popularFilms } title={ 'Populares' } play={ false }/>
                                <Sliders films={ hayaoFilms } title={ 'Director: Hayao Miyazaki' } play={ false }/>
                                <Sliders films={ hiromasa } title={ 'Director: Hiromasa Yonebayashi' } play={ false }/>
                            </div>
                        )
                }
            </Grid>
            {
                notifications.title &&
                <ToastNotification
                    id="tnf_errors"
                    className="notification"
                    title={ notifications.kind }
                    subtitle={ notifications.title }
                    kind="error"
                    caption={ notifications.error }
                    onCloseButtonClick={ () => setNotification({}) }
                />
            }
        </div>
    )
}

export default Body
