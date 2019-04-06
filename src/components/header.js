import { Link } from "gatsby"
import React, { Component } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import "./header.css"

const MenuBtn = styled.button` 
  display: inline-block;
  vertical-align: middle;
  margin: 0 1rem 0 0.5rem;
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
  display: inline-block;
  list-style-type: none;
  transition: 2;
  li {
    margin: 0 0.65rem;
    display: inline-block;
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
            <input type="checkbox" class="toggler"></input>
            <Bar style={{ width: `2rem`}} />
            <Bar style={{ width: `1rem`}} />
          </MenuBtn>

          <h1 className="Logo">
            <Link to="/" className="ENEIV">
              ENEIV
            </Link>
          </h1>

          {
          this.state.showMenu
            ? (
              <MenuItems className="menu" ref={(element) => {this.dropdownMenu = element;}}>
                <li>
                  <Link to="/services/" className="Link">
                      Services
                  </Link>
                </li>
                <li>
                  <Link to="/page-2/" className="Link">
                      Contact/Hire
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
