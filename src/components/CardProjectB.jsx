import React from 'react';
import {Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import githubIcon from '../images/github-white.png';
import deployIcon from '../images/rocket-white.png';

const Styles = styled.div`
    
    .card {
        border: none;
        background: #E79078;
        display: flex;
        min-width: 45%;
        padding: 2% 2%;
        border-radius: 20px;
        margin: 2%;    
    }
    .card-body {
        display: flex;
    }  
    .projetcLogo {
        height: 20vh; 
    } 
    .card-text {
        color: white;
        margin-left: 6%;
    }
    .card-footer {
        background: #E79078;
        display: flex;
        justify-content: flex-end;
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
        margin: 0 10px; 
        border: none;
        border-radius: 25px; 
    }
    .btnDeploy img {
        height: 30px;
        margin: 4px;          
    }
`

const CardProjectB = ({description, logoApp}) => {
    return (  
        <Styles>
            <Card>              
                <Card.Body>
                    <div className="backHexagonB">
                        <img className="projetcLogo" src={logoApp} alt="Logo App"/>
                    </div> 
                    <Card.Text>
                        {description}
                    </Card.Text>                
                </Card.Body>
                <Card.Footer>
                    <Button className="btnGithub" >Github <img src={githubIcon} alt="github"/></Button>
                    <Button className="btnDeploy">Deploy <img src={deployIcon} alt="deploy"/></Button>
                </Card.Footer >
            </Card>
        </Styles>  
    );
  }
  
  export default CardProjectB;