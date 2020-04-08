import React from 'react';
import {Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import HexagonA from '../images/hexagono-a.png';
import githubIcon from '../images/github-white.png'
import deployIcon from '../images/rocket-white.png'

const Styles = styled.div`    
    .card {
        background: #740E7E;
        display: flex;
        padding: 2% 4%;               
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
        background: url(${HexagonA}) no-repeat;
        background-size: 75%;
        padding: 2% 7%
    }
    .card-text {
        color: white;
        margin: 5% 10%;        
    }
    .card-footer {
        display: flex;
        background: #740E7E;
        margin-left 10%;    
    }
    .btnGithub {
        background: #C43165;
        margin: 0px 10px;
        border: none;
        border-radius: 25px;   
    }
    .btnGithub img {
        height: 30px;
        margin: 4px;            
    }
    .btnDeploy {
        background: #C43165;
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
       </Styles>  
    );
  }
  
  export default CardProjectA;