import { Grid, SearchSkeleton, CodeSnippetSkeleton } from 'carbon-components-react'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Search from './Search'
import Banner from './Banner';
import Sliders from './Sliders';
import Functions from '../helpers/functions';

const Body = () => {
    const [films, setFilms] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const loadFilms = async()=>{
            const response = await axios.get('https://ghibliapi.herokuapp.com/films')
            const final_films = await Functions.addInfo(response.data);
            setFilms(final_films)
            setIsLoading(false)
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
                        :                    (
                            <div>
                                <Search films={ films }/>
                                <Banner/>
                                <Sliders films={ films }/>
                            </div>
                        )
                }
            </Grid>
        </div>
    )
}

export default Body
