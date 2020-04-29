import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import BootstrapIcon from "../images/logo-bootstrap.png";
import JavaScriptIcon from "../images/logo-javascript.png";
import FigmaIcon from "../images/logo-figma.png";
import HTMLIcon from "../images/logo-html.png";
import CSSIcon from "../images/logo-css.png";
import NodeJSIcon from "../images/logo-node.png";
import ReactIcon from "../images/logo-react.png";
import FireIcon from "../images/logo-fire.png";
import ToolCard from "./ToolCard";


const Styles = styled.div`
  #tools {
    padding-top: 1%;
    text-align: center;
  }
  .container {
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;
  }
  .tools h2 {
    display: inline-block;
    position: relative;
    color: #6d33a7;   
    margin-top: 5%;
    margin-bottom: 3%;

    &::after, &::before {
      content:"";
      position: absolute;
      width: 50%;
      height: 3px;
      background: currentColor;
      top: 50%
    }
    &::before {
      left: -55%;      
    }
    &::after {
      right: -55%;      
    } 
    @media (max-width: 576px) {
      &::after, &::before {
        width: 30%;
      }
      &::before {
        left: -32%;      
      }
      &::after {
        right: -32%;      
      } 
    }  
    }
  }
`;

function Tools() {
  return (
    <Styles>
      <section id="tools" className="tools">
        <h2 className="text-center">Herramientas</h2>       
          <Container className="containerTop">
            <ToolCard 
            logoIcon={JavaScriptIcon} 
            toolName="JavaScript" 
            />
            <ToolCard 
            logoIcon={HTMLIcon} 
            toolName="HTML 5" 
            />
            <ToolCard 
            logoIcon={CSSIcon} 
            toolName="CSS 3" 
            />
            <ToolCard 
            logoIcon={FigmaIcon} 
            toolName="Figma" 
            />      
            <ToolCard 
            logoIcon={BootstrapIcon} 
            toolName="Bootstrap" />
            <ToolCard 
            logoIcon={ReactIcon} 
            toolName="Reactjs" />
            <ToolCard 
            logoIcon={NodeJSIcon} 
            toolName="Nodejs" />
            <ToolCard 
            logoIcon={FireIcon} 
            toolName="Firebase" />
          </Container>        
      </section>
    </Styles>
  );
}

export default Tools;
