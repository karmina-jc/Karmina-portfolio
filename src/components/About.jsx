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
    .card-text a {
      color: #83c8b5;
    }   
  `

function AboutMe() {
  return ( 
    <Styles>
      <Container>   
        <Card >
          <Card.Text>
          Soy graduada de Antropología de la Universidad de Chile, trabajé tres años en el mundo del impacto ambiental donde aprendí sobre <b>trabajo colaborativo, investigación y toma de decisiones</b>. Dentro del año 2019 tome cursos sobre gestión de creatividad e introducción a la programación, lo que me llevo a encantarme con la tecnología y decidirme a comenzar mi camino en el mundo del desarrollo web, para ello ingresé al bootcamp de <a href="https://www.laboratoria.la/">Laboratoria</a> donde, a través del trabajo con metodologías agiles (Scrum), pude potenciar mi <b>lógica, creatividad y capacidad de autoaprendizaje</b>. Como profesional soy una persona responsable, dispuesta a aprender de las nuevas experiencias y amante de los desafíos.
          </Card.Text>
        </Card>
      </Container>
    </Styles> 
  )
}

export default AboutMe;
