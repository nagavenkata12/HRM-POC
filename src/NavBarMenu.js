import React, {Component} from 'react';
import {NavBar, Nav, NavItem} from 'react-bootstrap';

class MainNav extends Component {
  render() {
    return (
      <NavBar>
        <NavBar.Header>
          <NavBar.Brand>
            <a href="#">React-Bootstrap</a>
          </NavBar.Brand>
        </NavBar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
          <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-    dropdown">
            <MenuItem eventKey={3.1}>Action</MenuItem>
            <MenuItem eventKey={3.2}>Another action</MenuItem>
            <MenuItem eventKey={3.3}>Something else here</MenuItem>
            <MenuItem divider />
            <MenuItem eventKey={3.4}>Separated link</MenuItem>
          </NavDropdown>
        </Nav>
      </NavBar>
    )
  }
}

export default MainNav;
