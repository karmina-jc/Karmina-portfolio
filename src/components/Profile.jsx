import React from 'react';
import { Container, Jumbotron } from 'react-bootstrap'
import styled from 'styled-components';
import HexagonFull from '../images/hexagono-full.png'
import Avatar from '../images/avatar.png'

const Styles = styled.div`
    .jumbotron{
        background: #600269;
    }
    h2 {
        color: #DC007C;
    }
    h3 {
        color: white;
    }
    .overlay {
        background: url(${HexagonFull}) no-repeat;
        background-size: 800px;
        background-position: center;
        display: felx;
        justify-content: center;
        padding: 20px;
    }
    .overlay img {
        height: 250px;
    }
`

const Profile = () => {
    return (  
    <Styles>
        <Jumbotron fluid className="jumbo">
           <div className="overlay"> 
           <img src={Avatar} alt="" />
           </div>          
            <Container>
                <h2 className="text-center">Karmina Jara Crespo</h2>
                <h3 className="text-center">Front-End Developer</h3>
            </Container>
           
        </Jumbotron>      
    </Styles> 
    );
  }
  
  export default Profile;
