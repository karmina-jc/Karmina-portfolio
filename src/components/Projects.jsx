import React from 'react';
import { Container } from 'react-bootstrap';
import styled from 'styled-components';
import CardProjectA from './CardProjectA';
import CardProjectB from './CardProjectB';
import MyTops from '../images/logo-mytops.png';
import Boceto from '../images/logo-boceto.png'
import MdLinks from '../images/logo-MDlinks.png'

const Styles = styled.div`
    .container {
        display: flex;
    }
`

const Proyects = () => {
    return (
        <Styles>
            <Container >
                <CardProjectB 
                description='Red social que responde a la necesidad de ilustradores(as) de compartir sus trabajos, recibir feedback, poder conocer trabajos de otros(as) artistas, recibir información acerca de concursos / talleres / desafíos / ofertas de empleo y más'
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
        </Styles>
    );
  }
  
  export default Proyects;