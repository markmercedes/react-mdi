import React from "react";

class MdiMenu extends React.Component {
  menuItems() {
    return this.props.items.map(item => {
      return (
        <li className="nav-item">
          <button className="btn btn-default nav-link" href="#" onClick={item.action}>
            {item.label} <span className="sr-only">(current)</span>
          </button>
        </li>
      );
    });
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-dark navbar-expand">
        <button className="btn btn-default navbar-brand" href="#">
          Navbar w/ text
        </button>
        <div>
          <ul className="navbar-nav mr-auto">{this.menuItems()}</ul>
        </div>
      </nav>
    );
  }
}

export default MdiMenu;
