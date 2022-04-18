import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";
import Signup from "../authentication/Signup";
import "./header.css";

const Header = () => {
  return (
    <Navbar sticky="top" bg="white" expand="lg">
      <Container fluid>
        <Navbar.Brand>
          <Link to={"/"}>
            <img className="" height={50} src="utility/img/logo.jpg"></img>
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav
            className="d-flex justify-content-end w-100 nav-link my-1 my-lg-0"
            >
            <Nav.Link className="ms-5">
              <Link className="text-decoration-none nav-link" to={"/blog"}>
                Blogs
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-5">
              <Link className="text-decoration-none nav-link" to={"/aboutme"}>
                About me
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-5">
              <Link className="text-decoration-none nav-link" to={"/login"}>
                Log in
              </Link>
            </Nav.Link>
            <Nav.Link className="ms-5" href="#action2">
              <Link className="text-decoration-none sign-up" to={"/signup"}>
                Sign up
              </Link>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
