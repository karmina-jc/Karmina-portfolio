import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .card {
      background-color: #F4EADE;
      color: white;
      border: none;
    }
    .card-img {
      margin-bottom: 10%;
    }
    .card-text {
      color: #632E98;
      border: solid 1px #632E98;
      border-radius: 15px;
    }
`

const ToolCard = ({logoIcon, toolName}) => {
    return ( 
      <Styles>
        <Card style={{ width: '8rem'}}>
            <Card.Img src={logoIcon} />
            <Card.Text className="text-center">{toolName}</Card.Text>            
        </Card>     
      </Styles> 
    );
  }
  
  export default ToolCard;