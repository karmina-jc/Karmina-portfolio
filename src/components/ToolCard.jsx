import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
  .card {
    width: 15vw;
    margin: 5% 10%;
    padding: 5% 15%;
    background-color: #F9F3ED;
    color: white;
    border: none;
  
  }
  .card-img {
    margin-bottom: 10%;
  }
  .card-text {
    color: #6D33A7;
    border: solid 1px #6D33A7;
    border-radius: 15px;
  }

  @media (max-width: 992px) {
    .card {
      width: 20vw;
    }
  }
  @media (max-width: 576px) {
    .card {
      width: 40vw;
    }
  }
}
`

const ToolCard = ({logoIcon, toolName}) => {
    return ( 
      <Styles>
        <Card>
            <Card.Img src={logoIcon} />
            <Card.Text className="text-center">{toolName}</Card.Text>            
        </Card>     
      </Styles> 
    );
  }
  
  export default ToolCard;