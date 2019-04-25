import React from "react";
import Jumbotron1 from "../../components/Jumbotron/Jumbotron1";
import Card from "../../components/Jumbotron/card";
import {Container, Col, Row} from "../../components/Grid";
import {Link} from "react-router-dom";
import homePage from "../../tiles_homePage.json"

function Home() {

      
        return(

            <Container fluid>
            
            <Jumbotron1>
                <h1>Welcome to DateNite!</h1>
                <h2>Your one-stop shop for all of your date planning needs.</h2>
                <br></br>
                <p>You may ask, what's the need for an app like this one? Can't we just Google all of the date possibilities out there? Wouldn't that be easier?</p>
                <p>Truth is, probably, not. Most of the date apps out there will give you ideas, but they're mostly for specific activities. And, "other" one-stop apps compile
                    ideas from other people. This app is different. 
                    DateNite has <strong>our</strong> date night ideas, it can go from inexpensive to out-of-this-pocket. We are connected to APIs that will allow you to research 
                    restaurants, movies, recipes -- so you don't even have to leave the app. Moreover, you can save your ideas, either from our list or as a journal entry.</p>
                <p>Honestly, as much as you should take a peak and read us because we have the best ideas, the best date is in <strong>you</strong>. Remember that the purpose of dating is to get to know your
                    partner. This may be your first, second, third date with a special someone, or you've been married for 30 years, but dating your partner never ends. There are always things to learn about our partners,
                    and every date is a fun-filled journey. If you don't find the greatest date idea from this app, but come up with it after, let us know... and our job here is done.
                </p>
            </Jumbotron1>
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