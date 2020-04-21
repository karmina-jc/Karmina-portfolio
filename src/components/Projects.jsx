import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import CardProjectA from './CardProjectA';
import CardProjectB from './CardProjectB';
import MyTops from '../images/logo-mytops.png';
import Boceto from '../images/logo-boceto.png';
import MdLinks from '../images/logo-MDlinks.png';
import HexagonFull from '../images/hexagono-full.png';


const Styles = styled.div`
    .fullSection {
        display: block;
        margin-bottom: 5%;
    }
    .container {
        display: flex;     
    }
    h2 {
        background: url(${HexagonFull}) no-repeat;
        background-size: 25%;
        background-position: center;
        color: #632E98;
        padding: 2%;
        margin: 1%;
    }
`

const Proyects = () => {
    return (
        <Styles>
            <h2 className="text-center">Proyectos</h2>
            <section className="fullSection">
                <Container >
                    <CardProjectB 
                    description='Red social que responde a la necesidad de ilustradores(as) de compartir sus trabajos, recibir feedback poder conocer trabajos de otros(as) artistas, recibir información acerca de concursos / talleres / desafíos / ofertas de empleo y más'
                    logoApp={Boceto}
                    />
                    <CardProjectB 
                    description='Aplicación web que te permite escoger películas y crear tu propia lista para compartirla en tus redes sociales. En nuestra versión Oscars Edition podrás escoger tus posibles ganadores a los premios Oscars 2020 y compartirlo con tus amigos.'
                    logoApp={MyTops}
                    />
                </Container> 
                <Container>
                    <CardProjectA 
                    description='Librería npm que permite el usuario recorrer la carpeta en busca de archivos de extensión .md y comprobar el estado de los enlaces presentes en cada archivo verificando si estos se encuentran funcionando.'
                    logoApp={MdLinks}
                    /> 
                    <CardProjectA 
                    description='Librería npm que permite el usuario recorrer la carpeta en busca de archivos de extensión .md y comprobar el estado de los enlaces presentes en cada archivo verificando si estos se encuentran funcionando.'
                    logoApp={MdLinks}
                    /> 
                </Container> 
            </section>            
        </Styles>
    );
  }
  
  export default Proyects;