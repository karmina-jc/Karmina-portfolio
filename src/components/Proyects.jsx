import React, { Fragment } from 'react';
import CardProjectA from './CardProjectA';
import CardProjectB from './CardProjectB';
import MyTops from '../images/logo-mytops.png';
import Boceto from '../images/logo-boceto.png'
import MdLinks from '../images/logo-MDlinks.png'

const Proyects = () => {
    return (
        <Fragment>
            <CardProjectA 
            description={<p>Aplicación web que te permite escoger películas y crear tu propia lista para compartirla en tus redes sociales. En nuestra versión Oscars Edition podrás escoger tus posibles ganadores a los premios Oscars 2020 y compartirlo con tus amigos.</p>}
            logoApp={MyTops}
            />
            <CardProjectB 
             description={<p>Red social que responde a la necesidad de ilustradores(as) de compartir sus trabajos, recibir feedback, poder conocer trabajos de otros(as) artistas, recibir información acerca de concursos / talleres / desafíos / ofertas de empleo entre otros.</p>}
             logoApp={Boceto}
             />
            <CardProjectA 
             description={<p>Librería npm que permite el usuario recorrer la carpeta en busca de archivos de extensión .md y comprobar el estado de los enlaces presentes en cada archivo verificando si estos se encuentran funcionando.</p>}
             logoApp={MdLinks}
             /> 
        </Fragment>  
    );
  }
  
  export default Proyects;