import React from "react";

class MdiMenu extends React.Component {
  menuItems() {
    return this.props.items.map(item => {
      return (
        <li className="nav-item">
          <a className="nav-link" href="./bs.com" onClick={item.action}>
            {item.label} <span className="sr-only">(current)</span>
          </a>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" href="./bs.com">
          Navbar w/ text
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarText"
          aria-controls="navbarText"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarText">
          <ul className="navbar-nav mr-auto">{this.menuItems()}</ul>
          <span className="navbar-text">Navbar text with an inline element</span>
        </div>
      </nav>
    );
  }
}

export default MdiMenu;
