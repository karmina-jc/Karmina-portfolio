import React from 'react';
import Card from 'react-bootstrap/Card';

const Styles = styled.div``

const Profile = () => {
    return (  
    <Styles>
        <Card>
            <Card.Body>
                <Card.Img variant="right" src="" />
                <Card.Text>
                    This is a wider card with supporting text below as a natural lead-in to
                    additional content. This content is a little bit longer.
                </Card.Text>
            </Card.Body>
            <Card.Footer>
            <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
        </Card>    
    </Styles> 
    );
  }
  
  export default Profile;