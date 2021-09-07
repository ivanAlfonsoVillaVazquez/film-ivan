import { Grid, Row, Column } from 'carbon-components-react'
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import Search from './Search'

const Body = () => {
    const [films, setFilms] = useState([])

    useEffect(() => {
        const loadFilms = async()=>{
            const response = await axios.get('https://ghibliapi.herokuapp.com/films')
            setFilms(response.data)
        }
        loadFilms()
    }, [])

    return (
        <div className="container">
            <Grid condensed>
                <Row>
                    <Column sm={ { span: 4 } } md={ { span:4, offset: 2 } }>
                        <Search films={ films }/>
                    </Column>
                </Row>
            </Grid>
        </div>
    )
}

export default Body
