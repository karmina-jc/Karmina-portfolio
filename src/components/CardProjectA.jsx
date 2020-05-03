import React from 'react';
import {Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import githubIcon from '../images/github-white.png'
import deployIcon from '../images/rocket-white.png'

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
    .card-text {
        color: white;
        margin-right: 5%;
        text-align: left;              
    }  
    .projetcLogo {
        height: 23vh;                  
    }
    .card-footer { 
        display: flex; 
        background: #83C8B5;
        border: none;
    }
    .card-footer button a {  
        text-decoration: none;
        color: white;
        padding: 10px 5px;
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
            flex-direction: column-reverse;
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


const CardProjectA = ({description, logoApp, githubLink, deployLink}) => {
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
                    <Button className="btnGithub">
                        <a href={githubLink}>Github</a> 
                        <img src={githubIcon} alt="github"/>
                    </Button>
                    <Button className="btnDeploy">
                        <a href={deployLink}>Deploy</a> 
                        <img src={deployIcon} alt="deploy"/>
                    </Button>
                </Card.Footer>
              </Card>
       </Styles>  
    );
  }
  
  export default CardProjectA;