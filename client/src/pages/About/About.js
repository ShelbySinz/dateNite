import React from "react";
import Jumbotron1 from "../../components/Jumbotron/Jumbotron1";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import Jumbotron2 from "../../components/Jumbotron/Jumbotron2";
import Card from "../../components/Jumbotron/card";
import {Container, Col, Row} from "../../components/Grid";
import aboutPage from "../../about.json"


function About() {

const style ={
  h1 :{
      fontSize: "80px"
  },
  h2:{
        fontSize:"50px"
  }
}
      
        return(

            <Container fluid>
            <Jumbotron>
                <h1 style={style.h1}>Welcome to DateNite!</h1>
                <h4 style={style.h2}>Your one-stop shop for all of your date planning needs.</h4>
            </Jumbotron>
                <br></br>
            
            <Jumbotron1>               
                <p>You may ask, what's the need for an app like this one? Can't we just Google all of the date possibilities out there? Wouldn't that be easier?</p>
                <p>Truth is, probably, not. Most of the date apps out there will give you ideas, but they're mostly for specific activities. And, "other" one-stop apps compile
                    ideas from other people. This app is different. 
                    DateNite has <strong>our</strong> date night ideas, it can go from inexpensive to out-of-this-pocket. We are connected to APIs that will allow you to research 
                    restaurants, movies, recipes -- so you don't even have to leave the app.</p>
                <p>Honestly, as much as you should take a peak and read us because we have the best ideas, the best date is in <strong>you</strong>. Remember that the purpose of dating is to get to know your
                    partner. This may be your first, second, third date with a special someone, or you've been married for 30 years, but dating your partner never ends. There are always things to learn about our partners,
                    and every date is a fun-filled journey. If you don't find the greatest date idea from this app, but come up with it after, let us know... and our job here is done.
                </p>
            </Jumbotron1>
                <br></br>

            <Jumbotron2> 
                <h5>Brought to you by:</h5>
                <Row>
                <Col size = "md-2"></Col> 
                        <Col size="md-3">
                            <Card
                            name={aboutPage[0].name}
                            image={aboutPage[0].image}
                            >
                             Shelby Sinsheimer
                            </Card>
                        </Col>
                        <Col size="md-3">
                            <Card
                            name={aboutPage[1].name}
                            image={aboutPage[1].image}
                            >
                             Kelsey Tobin
                            </Card>
                        </Col>
                        <Col size="md-3">
                            <Card
                            name={aboutPage[2].name}
                            image={aboutPage[2].image}
                            >
                             Armi Lawrence
                            </Card>
                        </Col>

                </Row>
            </Jumbotron2>
            </Container>

            );

}

export default About; 