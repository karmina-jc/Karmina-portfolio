import React from 'react';
import {Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import githubIcon from '../images/github-white.png'
import deployIcon from '../images/rocket-white.png'

const Styles = styled.div`
  
    .card {
        border: none;
        background: #E79078;   
        padding: 2%;
        border-radius: 20px;        
        min-width: 45%;
        margin: 2%;
    }
    .card-body {
        display: flex;
        padding-bottom: 0;
    }  
    .card-text {
        color: white;
        margin-right: 5%;              
    }  
    .projetcLogo {
        height: 23vh;                  
    }
    .card-footer {  
        background: #E79078;
        border: none;
    }
    .btnGithub {
        background: #632E98;
        margin: 0 10px;
        border: none;
        border-radius: 25px;   
    }
    .btnGithub img {
        height: 30px;
        margin: 4px;            
    }
    .btnDeploy {
        background: #632E98;
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