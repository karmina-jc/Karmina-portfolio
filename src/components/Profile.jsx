import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap';
import styled from 'styled-components';
import Aboutme from './About'
import HexagonFull from '../images/hexagono-full.png';
import Avatar from '../images/avatar.png';


const Styles = styled.div`
    .jumbotron{
        background: #062F4F;
        padding-bottom: 1%;
    }
    h2 {
        color: #9A598D;
    }
    h3 {
        color: white;
    }
    .overlay {
        background: url(${HexagonFull}) no-repeat;
        background-size: 50%;
        background-position: center;
        display: flex;
        justify-content: center;
        padding: 2%;
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
