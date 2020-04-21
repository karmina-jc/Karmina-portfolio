import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import Aboutme from './About'
import HexagonFull from '../images/hexagono-full.png';
import Avatar from '../images/avatar.png';


const Styles = styled.div`
    .jumbotron{
        background: #F4EADE;
        padding-bottom: 1%;
    }
    h2 {
        color: #632E98;
    }
    h3 {
        color: #ED8C72;
    }
    .overlay {
        background: url(${HexagonFull}) no-repeat;
        background-size: 70%;
        background-position: center;
        display: flex;
        justify-content: center;
        padding: 3%;
    }
    .profilImg {
        height: 40vh;
    }
`

const Profile = () => {
    return (  
    <Styles>
        <Jumbotron fluid className="jumbo">
           <div className="overlay"> 
           <img className="profilImg" src={Avatar} alt="" />
           </div>          
            <Container>
                <h2 className="text-center">Karmina Jara Crespo</h2>
                <h3 className="text-center">Front-End Developer</h3>
            </Container>
            <Aboutme />           
        </Jumbotron>      
    </Styles> 
    );
  }
  
  export default Profile;
