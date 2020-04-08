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
<<<<<<< HEAD
    }
    .card-body {
        display: flex;
        justify-content: space-around;
        padding: 0;
    }
    .projetcLogo {
        height: 25vh;                      
    }
=======
    };
    .card-body {
        display: flex;
        justify-content: space-around;
        padding: 0%;
    };
    .projetcLogo {
        height: 25vh;                      
    };
>>>>>>> 80e561fdf1f87b7166093a7754842bb74bbcc971
    .backHexagon {
        background: url(${HexagonA}) no-repeat;
        background-size: 75%;
        padding: 2% 7%
    }
    .card-text {
        color: white;
        margin: 5% 10%;        
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 80e561fdf1f87b7166093a7754842bb74bbcc971
    .card-footer {
        display: flex;
        background: #740E7E;
        margin-left 10%;    
<<<<<<< HEAD
    }
=======
    };
>>>>>>> 80e561fdf1f87b7166093a7754842bb74bbcc971
    .btnGithub {
        background: #C43165;
        margin: 0px 10px;
        border: none;
        border-radius: 25px;   
<<<<<<< HEAD
    }
    .btnGithub img {
        height: 30px;
        margin: 4px;            
    }
=======
    };
    .btnGithub img {
        height: 30px;
        margin: 4px;            
    };
>>>>>>> 80e561fdf1f87b7166093a7754842bb74bbcc971
    .btnDeploy {
        background: #C43165;
        margin: 0px 10px; 
        border: none;
        border-radius: 25px;  
<<<<<<< HEAD
    }
    .btnDeploy img {
        height: 30px;
        margin: 4px;
    }
`


const CardProjectA = ({description, logoApp}) => {
=======
    };
    .btnDeploy img {
        height: 30px;
        margin: 4px;
    };
`


const CardProjectA = (props) => {
>>>>>>> 80e561fdf1f87b7166093a7754842bb74bbcc971
    return (  
       <Styles>
            <Card>
                <Card.Body>
                    <Card.Text>
<<<<<<< HEAD
                        {description}
                    </Card.Text>
                    <div className="backHexagon">                
                        <img className="projetcLogo" src={logoApp} alt="My Tops"/>
=======
                        {props.description}
                    </Card.Text>
                    <div className="backHexagon">                
                        <img className="projetcLogo" src={props.logoApp} alt="My Tops"/>
>>>>>>> 80e561fdf1f87b7166093a7754842bb74bbcc971
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