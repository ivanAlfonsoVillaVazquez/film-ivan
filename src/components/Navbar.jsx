import React from 'react'
import {
    Header,
    HeaderName
} from "carbon-components-react/lib/components/UIShell";

const Navbar = () => {
    return (
        <div>
            <div className="container">
                <Header aria-label="Peliculas">
                    <HeaderName href="#" prefix="Peliculas - ">
                    Ghibli films
                    </HeaderName>
                </Header>
            </div>
        </div>
    )
}

export default Navbar
