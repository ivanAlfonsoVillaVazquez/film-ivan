import { Search } from 'carbon-components-react'
import React, { useState } from 'react'

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

    const onSuggestHandler = (text) => {
        setText(text)
        setSuggestions([])
    }

    return (
        <div>
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
                    <div
                        key={ suggestion.id }
                        className="suggestion"
                        onClick={ () => onSuggestHandler(suggestion.title) }>
                        { suggestion.title}
                    </div>
                ))
            }
        </div>
    )
}

export default Searchs;
