import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import "./header.css"

const Menu = styled.div` 
  display: inline-block;
  vertical-align: middle;
  margin: 0 1rem 0 0.5rem;
`

const Bar = styled.div`
  height: 1px;
  margin-bottom: 0.5rem;
  background-color: whitesmoke;
`

const Display = styled.ul` 
  margin: 0;
  display: inline-block;
  list-style-type: none;
  li {
    margin: 0 0.65rem;
    display: inline-block;
  }
`

menuBtn = `true`
menutItem = `false`

const displayMenu = () => {
  if(menuBtn) {
    return ( `backgroundColor: royalblue` )
  } else {
   return (`backgroundColor: rosybrown`)
  }
}

const toggleMenu = () => {
  menuBtn = !menuBtn;
  menuItems = !menuItems;
}

const Header = () => (
  <header>
      <Menu style={displayMenu} onClick={toggleMenu()}>
        <Bar style={{ width: `2rem`}} />
        <Bar style={{ width: `1rem`}} />
      </Menu>

      <h1 className="Logo">
        <Link to="/page-2/" className="ENEIV">
          ENEIV
        </Link>
      </h1>
        <Display>
          <li>
            <Link to="/page-2/" className="Link">
                Services
            </Link>
          </li>
          <li>
            <Link to="/page-2/" className="Link">
                Portfolio
            </Link>
          </li>
          <li>
            <Link to="/page-2/" className="Link">
                Bio
            </Link>
          </li>
          <li>
            <Link to="/page-2/" className="Link">
                Hire
            </Link>
          </li>
        </Display>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
