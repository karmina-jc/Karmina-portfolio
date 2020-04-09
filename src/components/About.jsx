import React from 'react';
import { Card, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
    .container {
      padding: 0;
    }
    .card {
      background-color: #062F4F;
      color: white;
      display: flex;
      justify-self: center;
      margin-bottom: 5%;
    }   
  `

function AboutMe() {
  return ( 
    <Styles>
      <Container>   
        <Card >
          <Card.Body>Soy una persona dispuesta a aprender de las nuevas experiencias y amante de los desafíos, mi objetivo es ser un aporte  para el equipo. Desde el desarrollo web pude potenciar mi creatividad y lógica, mientras que de la antropología aprendí sobre trabajo colaborativo e investigación, esto me permite ser una persona adaptable a diferentes contextos de trabajo. 
          </Card.Body>
        </Card>
      </Container>
    </Styles> 
  );
}

export default AboutMe;
