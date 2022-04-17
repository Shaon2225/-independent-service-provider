import React from "react";
import { Link } from "react-router-dom";
import { Container, Nav, Navbar } from 'react-bootstrap'
import Signup from "../authentication/Signup";
import "./header.css";

const Header = () => {
  return (
    <Navbar sticky="top" bg="white" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
            <Link to={'/'}><img className="" height={50} src="utility/img/logo.jpg"></img></Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className="d-flex justify-content-end align-items-center" id="basic-navbar-nav">
          <Nav className="nav-link">
            <Link className="text-decoration-none mb-0" to={"/blog"}>Blogs</Link>
            <Link className="text-decoration-none" to={"/aboutme"}>About me</Link>
            <Link className="text-decoration-none" to={"/login"}>Log in</Link>
            <Link className="text-decoration-none sign-up" to={"/signup"}>Sign up</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
