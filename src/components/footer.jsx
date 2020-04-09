import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';
import hexagonFooter from '../images/hexagono-footer.png';
import githubIcon from '../images/github-white.png';
import linkedinIcon from '../images/linkedin-white.png';
import cvIcon from '../images/portfolio-white.png';


const Styles = styled.div`
  .card {
    background: #154163;
    display: flex;
    padding-top: 20%;
  };
  .card-body {
    background: #1F1F1F;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: 4%;  
  };
  .hexagonFull {
    width: 35%;
    margin-top: -6%;
  }
  .card-text {
    color: #2A5B80;
    padding-bottom: 0%;
  };
  .logoIcon {
    height: 50px;
    margin: 10px; 
    opacity: 0.6
  };    
`

function Footer() {
  return (
    <Styles>
        <Card>
          <Card.Body>
            <img className="hexagonFull" src={hexagonFooter} alt="Hexagon"/>
              <Card.Text>
                © 2020 Karmina Jara Crespo Developer
              </Card.Text>
              <div className="logoContainer">                
                  <img className="logoIcon" src={githubIcon} alt="Github"/>
                  <img className="logoIcon" src={linkedinIcon} alt="LinkedIn"/>
                  <img className="logoIcon" src={cvIcon} alt="CV"/>
              </div>
          </Card.Body>        
        </Card>
    </Styles>
  );
}

export default Footer;