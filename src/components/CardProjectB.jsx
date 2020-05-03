import React from 'react';
import {Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import githubIcon from '../images/github-white.png';
import deployIcon from '../images/rocket-white.png';

const Styles = styled.div`
    
    .card {
        border: none;
        background: #83C8B5;   
        margin: 2%;
        padding: 2%;
        border-radius: 20px;
    }
    .card-body {
        display: flex;
        align-items: center;
    }  
    .projetcLogo {
        height: 20vh; 
    } 
    .card-text {
        color: white;
        margin-left: 6%;
        text-align: left;
    }
    .card-footer {
        background: #83C8B5;
        display: flex;
        justify-content: flex-end;
        border: none;
    }
    .card-footer button a {  
        text-decoration: none;
        color: white;  
    }
    .btnGithub {
        background: #6D33A7;
        margin: 2%;        
        border: none;
        border-radius: 25px;
    }
    .btnGithub img {
        height: 5vh;            
    }
    .btnDeploy {
        background: #6D33A7;
        margin: 2%;
        border: none;
        border-radius: 25px; 
    }
    .btnDeploy img {
        height: 5vh;                   
    }
    @media (max-width: 992px) {
        .card-body {
            display: flex;
            flex-direction: column;
        }
        .card-body img{
            margin: 5%;
        } 
        .card-footer {
            display: flex;
            justify-content: space-around;
        }
    
    }
`

const CardProjectB = ({description, logoApp, githubLink, deployLink}) => {
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
                    <Button className="btnGithub" > 
                        <a href={githubLink}> Github </a>
                        <img src={githubIcon} alt="github"/>
                    </Button>
                    <Button className="btnDeploy"> 
                        <a href={deployLink}>Deploy</a>
                        <img src={deployIcon} alt="deploy"/>
                    </Button>
                </Card.Footer >
            </Card>
        </Styles>  
    );
  }
  
  export default CardProjectB;