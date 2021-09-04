import React from 'react'
import {
  Header,
  HeaderName
} from "carbon-components-react/lib/components/UIShell";

const Header = () => {
    return (
        <div>
            <div className="container">
            <Header aria-label="IBM Platform Name">
              <HeaderName href="#" prefix="IBM">
                [Platform]
              </HeaderName>
            </Header>
          </div>
        </div>
    )
}

export default Header
