import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Card from "../../components/Jumbotron/card";
import {Container, Col, Row} from "../../components/Grid";
import {Link} from "react-router-dom";
import homePage from "../../tiles_homePage.json"

function Home() {

      
        return(

            <Container fluid>
            
            <Jumbotron>
                <h1>Welcome to DateNite!</h1>
                <p>Your one-stop shop for all of your date planning needs. Reminder: this is a "what to do" for a date site, not "how to find" a date.</p>
            </Jumbotron>
                <Row>
                    <Col size = "md-2"></Col>
                        <Col size="md-3">
                            <Card
                                name={homePage[0].name}
                                image={homePage[0].image}>
                                <br></br>
                            <Link to="/dates/atHome">← At Home!</Link>                            
                            </Card>
                        </Col>
                        <Col size = "md-3">
                            <Card
                                name={homePage[1].name}
                                image={homePage[1].image}
                            >
                                <br></br>
                            <Link to="/dates/Notes">← Notes!</Link>
                            </Card>            
                        </Col>
                        <Col size= "md-3">
                            <Card
                                name={homePage[2].name}
                                image={homePage[2].image}
                            >
                                <br></br>
                            <Link to="/dates/outdoors">← Outdoors!</Link>
                            </Card>
                        </Col>
                </Row>
            <br></br>
                <Row>
                    <Col size = "md-3"></Col> 
                        <Col size="md-3">
                            <Card
                                name={homePage[3].name}
                                image={homePage[3].image}
                            >
                                 <br></br>   
                            <Link to="/dates/restaurants">← Restaurants and Bars!</Link>
                            </Card>
                        </Col>
                    <Col size="md-3">
                        <Card
                            name={homePage[4].name}
                            image={homePage[4].image}
                            >
                            <br></br>
                        <Link to="/dates/movies">← Movies and TV!</Link>
                        </Card>
                    </Col>
                </Row>
            </Container>

            );

}

export default Home; 