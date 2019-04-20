import React, {Component} from "react";
import {Container, Row, Col} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";


class Outdoor extends Component {
    render(){
        return(
            <Container fluid>
                <Row>
                    <Col size="md-12">
                        <Jumbotron>
                            <h1>Outdoor Date Ideas!</h1>
                        </Jumbotron>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Outdoor;
