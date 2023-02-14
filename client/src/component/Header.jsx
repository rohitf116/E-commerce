import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
const Header = () => {
  return (
    <header>
      <Navbar bg="dark" variant="dark" expand="lg" collapseOnSelect>
        <Container>
          <Link to="/">
            <Navbar.Brand>MyShop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Link to="/cart">
                <i className="fas fa-shopping-cart"></i> cart
              </Link>
              <Link to="/login">
                <i className="fas fa-user"></i> Sign in
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <Outlet />
    </header>
  );
};

export default Header;
