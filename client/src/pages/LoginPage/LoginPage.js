import React from "react";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import {Container, Col, Row} from "../../components/Grid";
// import {Link} from "react-router-dom";
import LoginPortal from "../../components/LoginPortal/LoginPortal";


function LoginPage() {
    
    return (
        <Container fluid>
            <Jumbotron />

            <LoginPortal />


        </Container>
    )
}

export default LoginPage;