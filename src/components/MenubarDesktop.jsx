import React from 'react';
import { Nav, Navbar } from 'react-bootstrap'
import styled from 'styled-components';
import KJlogo from '../images/logo-kj.png'


const Style = styled.nav`

    .navbar {
        background-color: #740E7E;
    }
    .navbar-brand, .navbar-nav .nav-link {
        color white;

        &:hover {
            background-color: #AC4FB5;
            color: white;
        }
    }
`

const MenubarDesktop = () => {
  return (    
    <Style>
      <Navbar expand = "lg">
        <Navbar.Brand href="/"><img src={KJlogo} alt=""/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ml-auto">
                  <Nav.Item><Nav.Link href="/">Sobre me</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/">Proyectos</Nav.Link></Nav.Item>
                  <Nav.Item><Nav.Link href="/">Contacto</Nav.Link></Nav.Item>
              </Nav>
          </Navbar.Collapse>
      </Navbar> 
    </Style>
    
  );
}

export default MenubarDesktop;