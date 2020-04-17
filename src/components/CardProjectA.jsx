import React from 'react';
import {Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import HexagonA from '../images/hexagono-a.png';
import githubIcon from '../images/github-white.png'
import deployIcon from '../images/rocket-white.png'

const Styles = styled.div`
  
    .card {
        border: none;
        background: #813772;   
        padding: 2%;
        border-radius: 20px;        
        min-width: 45%;
        margin: 2%;
    }
    .card-body {
        display: flex;
        padding-bottom: 0;
        padding-top: 0;
    }  
    .card-text {
        color: white;
        margin-top: 2%;              
    }  
    .projetcLogo {
        height: 23vh;                      
    }
    .backHexagon {       
        background: url(${HexagonA}) no-repeat;
        background-size: 75%;
        padding: 2% 0 0 7%;        
    }
    .card-footer {  
        background: #813772;
    }
    .btnGithub {
        background: #882601;
        margin: 0 10px;
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