import { Link } from "gatsby"
import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./header.css"

import ENEIV_Au from "../images/ENEIV-Au.svg"


const ENEIV = styled.img`
  height: 7vh;
  margin: 0;
  padding: 0;
  vertical-align: middle;

  @media only screen and (max-width: 768px) {
    text-align: center;
    align-self: center;
  }
`
const MenuBtn = styled.button` 
  display: inline-block;
  vertical-align: middle;
  margin: 0 0.25rem 0 0.5rem;
  background-color: unset;
  cursor: pointer;
  border: none;
`

const Bar = styled.div`
  height: 1px;
  margin-bottom: 0.5rem;
  background-color: whitesmoke;
`

const MenuItems = styled.ul` 
  margin: 0;
  height: 100%;
  display: inline-block;
  list-style-type: none;
  li {
    height: 100%;
    margin: 0 0.65rem;
    display: inline-block;
  }
  @media only screen and (max-width: 768px) {
    width: 100%;
    display: block;
    margin: 0 0 1.5rem;
    
    li {
      display: block;
      padding: 0.5rem;
    }

    a {
      height: 100%;
      width: 100%;
      display: block;
    }
  }
`

class Header extends Component {
  constructor() {
    super();

    this.state = {
      showMenu: false,
    }

    this.showMenu = this.showMenu.bind(this);
    this.closeMenu = this.closeMenu.bind(this);
  }

  showMenu(event) {
    event.preventDefault();

    this.setState({ showMenu: true }, () => {
      document.addEventListener(`click`, this.closeMenu);
    });
  }

  closeMenu() {

    this.setState({ showMenu: false}, () => {
      document.removeEventListener(`click`, this.closeMenu);
    });
  }

  render () {
    return (
        <header>
          <MenuBtn onClick={this.showMenu}>
            <Bar style={{ width: `2rem`}} />
            <Bar style={{ width: `1rem`}} />
          </MenuBtn>

            <Link to="/">
          <ENEIV src={ENEIV_Au} />
            </Link>

          {
          this.state.showMenu ? (
              <MenuItems className="menu" ref={(element) => {this.dropdownMenu = element;}}>
                <li>
                  <Link to="/" className="Link">
                      Home
                  </Link>
                </li>
                <li>
                  <Link to="/services/" className="Link">
                      Services
                  </Link>
                </li>
                <li>
                  <Link to="/contact/" className="Link">
                      Contacts
                  </Link>
                </li>
              </MenuItems>
            ) : (
              null
            )
        }
          </header>
    )
  }
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
