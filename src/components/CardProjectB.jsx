import React from 'react';
import {Card, Button } from 'react-bootstrap';
import styled from 'styled-components';
import HexagonB from '../images/hexagono-b.png';
import githubIcon from '../images/github-white.png';
import deployIcon from '../images/rocket-white.png';

const Styles = styled.div`    
    .card {
        background: #600269;
        display: flex;
        padding: 2% 2%;         
    }
    .card-body {
        display: flex;
        justify-content: space-around;
        padding: 0%;
    };
    .projetcLogo {
        height: 25vh;                      
    }; 
    .backHexagonB {
        background: url(${HexagonB}) no-repeat;
        background-size: 75%;
        padding: 2% 12% 3% 0%;
        margin-left: 7%;       
    }
    .card-text {
        color: white;
        margin: 5% 7%;        
    };
    .card-footer {
        display: flex;
        justify-content: flex-end;
        background: #600269;
        margin-right: 10%;
    };
    .btnGithub {
        background: #C43165;
        margin: 0px 10px;
        border: none;
        border-radius: 25px;
    };
    .btnGithub img {
        height: 30px;  
        margin: 4px;            
    };
    .btnDeploy {
        background: #C43165;
        margin: 0px 10px; 
        border: none;
        border-radius: 25px; 
    };
    .btnDeploy img {
        height: 30px;
        margin: 4px;          
    };
`

const CardProjectB = (props) => {
    return (  
        <Styles>
            <Card>
                <Card.Body>
                    <div className="backHexagonB">
                        <img className="projetcLogo" src={props.logoApp} alt=""/>
                    </div> 
                    <Card.Text>
                        {props.description}
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