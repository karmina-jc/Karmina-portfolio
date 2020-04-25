import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import styled from "styled-components";
import KJlogo from "../images/logo-kj.png";

const Style = styled.nav`
  .navbar {
    background-color: #6D33A7;
    height: 8vh;
    padding: 1%;
  }
  .navbar-brand, .navbar-nav .nav-link {
    color white;

    &:hover {
      background-color: #83C8B5;
      color: white;
    }
  }
  .navbar-collapse {
    background-color: #6D33A7;
  }
  @media (max-width: 1024px) {
    .navbar {
      height: 10vh;
    }
    .nav-link {
      padding-left:1%;
    }  
  }  
`;

const MenubarDesktop = () => {
  return (
    <Style>
      <Navbar expand="lg" fixed="top">
        <Navbar.Brand href="/">
          <img src={KJlogo} alt="kjlogo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Item>
              <Nav.Link href="#about">Sobre mi</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#projects">Proyectos</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#tools">Herramientas</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="#contact">Contacto</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Style>
  );
};

export default MenubarDesktop;
