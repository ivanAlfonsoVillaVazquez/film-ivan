import { Search, Row, Column } from 'carbon-components-react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Searchs = (props) => {
    const [text, setText] = useState('')
    const [suggestions, setSuggestions] = useState([])

    const onChangeHandler = (text) => {
        let matches = []
        if(text.length > 0) {
            matches = props.films.filter(films => {
                const regex = new RegExp(`${text}`, "gi")
                return films.title.match(regex)
            })
        }
        setSuggestions(matches)
        setText(text)
    }

    return (
        <Row className="row_search">
            <Column sm={ { span: 4 } } md={ { span:4, offset: 2 } }>
                <Search
                    id="search"
                    labelText="Buscador"
                    onChange={ e => onChangeHandler(e.target.value) }
                    value={ text }
                    onBlur={ () => {
                        setTimeout(() => {
                            setSuggestions([])
                        }, 400);
                    } }
                />
                {
                    suggestions && suggestions.map((suggestion) => (
                        <Link
                            key={ suggestion.id }
                            className="title-link"
                            to={ {
                                pathname: "/film",
                                state: {
                                    film: suggestion,
                                },
                            } }
                        >
                            <div
                                className="suggestion"
                            >
                                { suggestion.title}
                            </div>
                        </Link>

                    ))
                }
            </Column>
        </Row>
    )
}

export default Searchs;
