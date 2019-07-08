import React from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, Nav } from 'react-bootstrap';

const Header = () => (
  <Navbar bg="primary" variant="dark">
    <Navbar.Brand as={NavLink} to="/">
      Temy-test
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link as={NavLink} to="/register" activeClassName="active">
        Register
      </Nav.Link>
      <Nav.Link as={NavLink} to="/user-list" activeClassName="active">
        User List
      </Nav.Link>
    </Nav>
  </Navbar>
);

export default Header;
