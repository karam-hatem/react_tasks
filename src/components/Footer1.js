import React from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';



class Footer1 extends React.Component{
  render(){


    return ( 
  
      <Card className="text-center">
      <Card.Header>Featured</Card.Header>
      <Card.Body>
        <Card.Title>Special title treatment</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
      <Card.Footer className="text-muted">2 days ago</Card.Footer>
    </Card>
   
    );
  }
}
 


export default Footer1;