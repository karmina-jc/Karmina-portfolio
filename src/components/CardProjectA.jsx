import React from 'react';
import {Card, Button, Container } from 'react-bootstrap';
import styled from 'styled-components';
import HexagonA from '../images/hexagono-a.png';
import githubIcon from '../images/github-white.png'
import deployIcon from '../images/rocket-white.png'

const Styles = styled.div`
    .container {
        min-width: 90%;
    }    
    .card {
        background: #813772;
        display: flex;
        padding: 2% 2%;
        border-radius: 20px;
        margin: 1%;             
    }
    .card-body {
        display: flex;
        justify-content: space-around;
        padding: 0;
    }
    .projetcLogo {
        height: 25vh;                      
    }
    .backHexagon {
        margin-right: 0; 
        background: url(${HexagonA}) no-repeat;
        background-size: 75%;
        padding: 2% 0 0 7%;
        
    }
    .card-text {
        color: white;
        margin-top: 5%;
        margin-right: 4%;        
    }
    .card-footer {
        display: flex;
        background: #813772;
        padding-bottom: 1%
    }
    .btnGithub {
        background: #882601;
        margin: 0px 10px;
        border: none;
        border-radius: 25px;   
    }
    .btnGithub img {
        height: 30px;
        margin: 4px;            
    }
    .btnDeploy {
        background: #882601;
        margin: 0px 10px; 
        border: none;
        border-radius: 25px;  
    }
    .btnDeploy img {
        height: 30px;
        margin: 4px;
    }
`


const CardProjectA = ({description, logoApp}) => {
    return (  
       <Styles>
           <Container>
            <Card>              
                <Card.Body>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className="backHexagon">                
                        <img className="projetcLogo" src={logoApp} alt="My Tops"/>
                    </div>
                </Card.Body>
                <Card.Footer>
                    <Button className="btnGithub">Github <img src={githubIcon} alt="github"/></Button>
                    <Button className="btnDeploy">Deploy <img src={deployIcon} alt="deploy"/></Button>
                </Card.Footer>
              </Card>
            </Container>
       </Styles>  
    );
  }
  
  export default CardProjectA;