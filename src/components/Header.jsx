import React from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="navbar">
      <Container>
        <Navbar expand="lg" variant="light" bg="light">
          <Container>
            <Navbar.Brand className="home__logo">
              {" "}
              <Link exact to="/">
                Scarlett Allure
              </Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
      </Container>
    </Navbar>
  );
};

export default Header;
