import React from 'react';
import { Card } from 'react-bootstrap';
import styled from 'styled-components';

const Styles = styled.div`
   .card {
      background-color: #154163;
      color: white;
      border: none;
    }
    .card-img {
      margin-bottom: 10%;
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