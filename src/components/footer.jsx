import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import hexagonFooter from '../images/hexagono-footer-green.png';
import hexagonFooterSmall from '../images/hexagono-footer.png';
import githubIcon from '../images/github-green.png';
import linkedinIcon from '../images/linkedin-green.png';
import cvIcon from '../images/portfolio-green.png';


const Styles = styled.div`
  .card {
    background: #F9F3ED;
    display: flex;
    padding-top: 20%;
    border: none;
  }
  .card-body {
    background: #6D33A7;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 4%;  
  }
  .hexagonFull {
    width: 35%;
    margin-top: -6%;
    opacity: 0.8;
  }
  .card-text {
    color: #F9F3ED;
    padding-bottom: 0%;
  }
  .logoIcon {
    height: 8vh;
    margin: 10px;
    opacity: 0.9;
  }
  @media (max-width: 860px) {
    .card-body {
      display: flex;
      justify-content: space-between;
      flex-direction: column-reverse;
      margin-top: -6%;
      background-image: url(${hexagonFooterSmall});
      background-repeat: no-repeat;
      background-size: 80%;
      background-position: center;      
    }
    .hexagonFull {
      display: none;
    }
    .logoIcon {
      opacity: 1;
    }
  }
`;

function Footer() {
  return (
    <Styles>
      <section id="contact">
        <Card>
          <Card.Body>
            <img className="hexagonFull" src={hexagonFooter} alt="Hexagon"/>
              <Card.Text>
                © 2020 Karmina Jara Crespo Developer
              </Card.Text>
              <div className="logoContainer">                
                  <a href="https://github.com/karmina-jc">
                    <img className="logoIcon" src={githubIcon} alt="Github"/>
                  </a>
                  <a href="https://www.linkedin.com/in/karmina-jara-crespo/">
                    <img className="logoIcon" src={linkedinIcon} alt="LinkedIn"/>
                  </a>
                  <img className="logoIcon" src={cvIcon} alt="CV"/>
              </div>
          </Card.Body>        
        </Card>
      </section>
    </Styles>
  );
}

export default Footer;