import React from 'react';
import { Card, Container } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   
    .card {
      background-color: #F9F3ED;
      color: #6D33A7;
      display: flex;
      justify-self: center;
      margin: 3%;
      border: none;
    }   
  `

function AboutMe() {
  return ( 
    <Styles>
      <Container>   
        <Card >
          <Card.Text>
          Soy graduada de Antropología de la Universidad de Chile, trabajé tres años en el mundo del impacto ambiental donde aprendí sobre trabajo colaborativo, investigación y toma de decisiones. Dentro del año 2019 tome cursos sobre gestión de creatividad e introducción a la programación, lo que me llevo a encantarme con la tecnología y decidirme a comenzar mi camino en el mundo del desarrollo web, para ello ingresé al bootcamp de Laboratoria donde, a través del trabajo con metodologías agiles (Scrum), pude potenciar mi lógica, creatividad y capacidad de autoaprendizaje. Como profesional soy una persona responsable, dispuesta a aprender de las nuevas experiencias y amante de los desafíos y actualmente mi objetivo es integrarme a un equipo como desarrolladora front-end donde pueda aportar y crecer.
          </Card.Text>
        </Card>
      </Container>
    </Styles> 
  )
}

export default AboutMe;
