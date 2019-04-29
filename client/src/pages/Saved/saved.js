import React, {Component} from "react";
// import {FormBtn, Input} from "../../components/Form";
import {List, ListItem} from "../../components/List";
import {Container,Row, Col} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/deleteDate";
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Saved extends Component {

    state ={
        saved: []
    }

   getSavedDates = () => {
       API.getSavedDates()
       .then(res => 
        this.setState({saved: res.data}))
       console.log(this.state.saved)
   }

   componentDidMount(){
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
       this.getSavedDates();
   }


   deleteDate = id => {
    API.deleteDate(id)
      .then(res => this.getSavedDates())
      .catch(err => console.log(err));
  };
  logout = () => {
    localStorage.removeItem('jwtToken');
    window.location.reload();
  }

    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>Your Saved Date Ideas!</h1>
                  {localStorage.getItem('jwtToken') &&
                <button class="btn btn-primary" onClick={this.logout}>Logout</button>
              }
                  </Jumbotron>

                  </Col>
                  </Row>
                  <Row>
                      <Col size= "md-3"></Col>
                   <Col size= "md-6">
                   {this.state.saved.length ? (
                  <List>
                      {this.state.saved.map(saved => {
                          return (
                   <ListItem key={saved._id}>
                   <small className="float-right">{saved.type}</small>
                   <br></br>
                    <strong><h3>{saved.title}</h3></strong>
                   
                    
                    <br></br>
                    <p>{saved.description}</p>       
                   <br></br>
                   <p className="text-muted">What you Need: {saved.whatYouNeed}</p>
                        
                   <DeleteBtn className="float-right" onClick={() => this.deleteDate(saved._id)} />
                   
                   <a className="float-left" href={`mailto:?body= Your Saved Date: ` + saved.title + " description: "+ saved.description + "What you need: " + saved.whatYouNeed} target="_top"><i className="far fa-envelope"></i></a>
                   </ListItem>
                          )  
                    })}
                  </List>
                   ) : (
                      <h3>No Results to Display</h3>
                     )}


                   </Col>

                   </Row>
                   </Container>



        )}
}

export default Saved;
