import React, { Component } from 'react';
import { Link } from 'gatsby';

class Nav extends Component {
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

  render() {
    return (
      <div>
        <button onClick={this.showMenu}>
          Show Menu
        </button>

        {
          this.state.showMenu
            ? (
              <div className="menu"
                  ref={(element) => {this.dropdownMenu = element;}}>
                <button><Link to="/page-2/"> Item 1 </Link></button>
                <button> Item 2 </button>
                <button> Item 3 </button>
                <button> Item 4 </button>
              </div>
            ) : (
              null
            )
        }
      </div>
    );
  }
}

export default Nav