import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import BootstrapIcon from '../images/logo-bootstrap.png';
import JavaScriptIcon from '../images/logo-javascript.png';
import FigmaIcon from '../images/logo-figma.png';
import HTMLIcon from '../images/logo-html.png';
import CSSIcon from '../images/logo-css.png';
import NodeJSIcon from '../images/logo-node.png';
import ReactIcon from '../images/logo-react.png';
import FireIcon from '../images/logo-fire.png'
import ToolCard from './ToolCard';

const Styles = styled.div`
    .containerTop {
      margin-top: 5%;
      display: flex;
      justify-content: space-around; 
      margin-bottom: 2%;
      margin-left: 10%; 
    }

    .containerBottom {
      margin-top: 5%;
      display: flex;
      justify-content: space-around;
      margin-top: 0;     
      margin-right: 10%; 
    }
`

function Tools() {
    return ( 
      <Styles>
        <Container className="containerTop">
          <ToolCard 
          logoIcon= {JavaScriptIcon}
          toolName= 'JavaScript'
          />
          <ToolCard 
          logoIcon= {HTMLIcon}
          toolName= 'HTML 5'
          />
          <ToolCard 
          logoIcon= {CSSIcon}
          toolName= 'CSS 3'
          />
          <ToolCard 
          logoIcon= {FigmaIcon}
          toolName= 'Figma'
          />
          </Container>
          <Container className="containerBottom">
          <ToolCard 
          logoIcon= {BootstrapIcon}
          toolName= 'Bootstrap'
          />
          <ToolCard 
          logoIcon= {ReactIcon}
          toolName= 'Reactjs'
          />
          <ToolCard 
          logoIcon= {NodeJSIcon}
          toolName= 'Nodejs'
          />
           <ToolCard 
          logoIcon= {FireIcon}
          toolName= 'Firebase'
          />
        </Container>
      </Styles> 
    );
  }
  
  export default Tools;