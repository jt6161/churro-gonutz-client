import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
 
  render() {
    return (
      <div>
        <Navbar color="primary" light expand="md">
          <NavbarBrand href="/">Home</NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/Products">Churro GoNutz Products</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/Orders">My Churro Cart</NavLink>
              </NavItem>
            </Nav>          
        </Navbar>
      </div>
    );
  }
}

export default Header;
