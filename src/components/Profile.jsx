import React from "react";
import { Container, Jumbotron } from "react-bootstrap";
import styled from "styled-components";
import Aboutme from "./About";
import HexagonFull from "../images/hexagono-full-purple.png";
import Avatar from "../images/avatar.png";

const Styles = styled.div`
  .jumbotron {
    background: #f9f3ed;
    padding-bottom: 1%;
    margin-bottom: 0;
  }
  h2 {
    color: #6d33a7;
  }
  h3 {
    color: #83c8b5;
  }
  .overlay {
    background: url(${HexagonFull}) no-repeat;
    background-size: 75%;
    background-position: center;
    display: flex;
    justify-content: center;
    padding: 4%;
    margin: 2%;
  }
  .profilImg {
    height: 40vh;
  }
  @media (max-width: 1024px) {
    .profilImg {
      height: 30vh;
    }
    .overlay {
      background-size: 90%;
    }
  }
  @media (max-width: 500px) {
    .profilImg {
      height: 20vh;
    }
    .overlay {
      background-size: 90%;
    }

  }
`;
const FE = `<Front-End Developer/>`;

const Profile = () => {
  return (
    <Styles>
      <section id="about">
        <Jumbotron fluid className="jumbo">
          <div className="overlay">
            <img className="profilImg" src={Avatar} alt="" />
          </div>
          <Container>
            <h2 className="text-center">Karmina Jara Crespo</h2>
            <h3 className="text-center"> {FE} </h3>
          </Container>
          <Aboutme />
        </Jumbotron>
      </section>
    </Styles>
  );
};

export default Profile;
