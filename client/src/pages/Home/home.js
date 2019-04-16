import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Card from "../../components/Jumbotron/card";
import {Container, Col, Row} from "../../components/Grid";
function Home(){
    return(
    <Container fluid>
    
       <Jumbotron>
         <h1>Welcome to DateNite!</h1>
       </Jumbotron>
<Row>
    <Col size = "md-2"></Col>
<Col size="md-3">
    <Card>At-Home</Card>
</Col>
<Col size = "md-3">
    <Card>Low-Budget</Card>
</Col>
<Col size= "md-3">
    <Card>Outdoors</Card>
</Col>
</Row>
<br></br>
<Row>
<Col size = "md-3"></Col> 
<Col size="md-3">
<Card>Restaurants and Bars</Card>
</Col>
<Col size="md-3">
<Card>Movies and TV</Card>
</Col>
</Row>
</Container>

    );
}

export default Home; 