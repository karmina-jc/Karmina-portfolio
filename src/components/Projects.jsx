import React from "react";
import { Container } from "react-bootstrap";
import styled from "styled-components";
import CardProjectA from "./CardProjectA";
import CardProjectB from "./CardProjectB";
import MyTops from "../images/logo-mytops.png";
import Boceto from "../images/logo-boceto.png";
import MdLinks from "../images/logo-MDlinks.png";

const Styles = styled.div`
  .projects {
    padding-top: 1%;
    text-align: center;
  }
  .container {
    display: flex;
  }
  h2 {
    display: inline-block;
    position: relative;
    color: #6d33a7;   
    margin: 3% 0;

    &::after, &::before {
      content:"";
      position: absolute;
      width: 50%;
      height: 3px;
      background: currentColor;
      top: 50%
    }
    &::before {
      left: -55%;      
    }
    &::after {
      right: -55%;      
    }    
  }
 
  @media (max-width: 992px) {
    .container {
      display: block;     
    }
  }
`

const Proyects = () => {
  return (
    <Styles>
      <section id="projects" className="projects">
        <h2 className="text-center">Proyectos</h2>        
          <Container>
            <CardProjectB
              description="Red social que responde a la necesidad de ilustradores(as) de compartir sus trabajos, recibir feedback poder conocer trabajos de otros(as) artistas, recibir información acerca de concursos / talleres / desafíos / ofertas de empleo y más"
              logoApp={Boceto}
              githubLink="https://github.com/karmina-jc/SCL012-Social-Network-Frameworks"
              deployLink="https://boceto-react.firebaseapp.com/"
            />
            <CardProjectB
              description="Aplicación web que te permite escoger películas y crear tu propia lista para compartirla en tus redes sociales. En nuestra versión Oscars Edition podrás escoger tus posibles ganadores a los premios Oscars 2020 y compartirlo con tus amigos."
              logoApp={MyTops}
              githubLink="https://github.com/karmina-jc/Data-Lovers-Movies"
              deployLink=""
            />
          </Container>
          <Container>
            <CardProjectA
              description="Librería npm que permite el usuario recorrer la carpeta en busca de archivos de extensión .md y comprobar el estado de los enlaces presentes en cada archivo verificando si estos se encuentran funcionando."
              logoApp={MdLinks}
              githubLink="https://github.com/karmina-jc/SCL012-MD-Links-"
              deployLink="https://www.npmjs.com/package/md-links-karjc"
            />
            <CardProjectA
              description="Librería npm que permite el usuario recorrer la carpeta en busca de archivos de extensión .md y comprobar el estado de los enlaces presentes en cada archivo verificando si estos se encuentran funcionando."
              logoApp={MdLinks}
              githubLink=""
              deployLink=""
            />
          </Container>     
      </section>
    </Styles>
  );
};

export default Proyects;
