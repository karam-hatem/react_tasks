import React from "react";
import { Button } from "bootstrap";
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';




class Header extends React.Component{
  render(){

  return (
    // <header style={{ backgroundColor: "#333", color: "#fff", padding: "10px" }}>
    //   <h1 style={{ fontSize: "36px", margin: 0 }}>My Heade</h1>
    // </header>
    
     <Card>
      <Card.Header className="card">
        <h4>OrangeAcdemy</h4>
        <Nav variant="tabs" defaultActiveKey="#first">
        <Nav.Item>
            <Nav.Link href="#first">Html</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#link">Css</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="#disabled"> javascript </Nav.Link>
        </Nav.Item>
        </Nav>
      </Card.Header>
  </Card> 
  
  );
  }
};

export default Header;