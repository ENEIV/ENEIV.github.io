import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import "./header.css"

const Header = () => (
  <header>
      <h1 className="Logo">
        <Link to="/page-2/" className="ENEIV" >
          ENEIV
        </Link>
      </h1>
      
        <Link to="/page-2/" className="Link" >
            Services
        </Link>
        <Link to="/page-2/" className="Link" >
          Portfolio
        </Link>
        <Link to="/page-2/" className="Link" >
          Bio
        </Link>
        <Link to="/page-2/" className="Link Case" >
          Hire
        </Link>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
