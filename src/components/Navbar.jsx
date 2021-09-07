import React from 'react'
import {
    Header,
    HeaderName,
} from "carbon-components-react/lib/components/UIShell";

const Navbar = () => {
    return (
        <div>
            <Header aria-label="Peliculas">
                <HeaderName href="#" prefix="Peliculas - ">
                    Ghibli films
                </HeaderName>
            </Header>
        </div>
    )
}

export default Navbar
