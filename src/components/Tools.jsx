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
import HexagonFull from '../images/hexagono-full.png';

const Styles = styled.div`

  h2 {
    background: url(${HexagonFull}) no-repeat;
    background-size: 25%;
    background-position: center;
    color: #632E98;
    padding: 2%;
    margin: 1%;
  }
  .containerTop { 
    display: flex;
    justify-content: space-around;
    margin-bottom: 4%;  
  }
  .containerBottom {
    display: flex;
    justify-content: space-around;    
  }
`

function Tools() {
    return ( 
      <Styles>
        <h2 className="text-center">Herramientas</h2>
        <Container>
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
        </Container>
      </Styles> 
    );
  }
  
  export default Tools;