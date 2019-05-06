import React, {Component} from "react";
// import {FormBtn, Input} from "../../components/Form";
import {List, ListItem} from "../../components/List";
import {Container,Row, Col} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/deleteDate";
import ReactDOM from 'react-dom';

import axios from 'axios';

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state ={
        saved: [],
        username: ""
    };
  }

    
   componentDidMount(){
   
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
     this.getSavedDates();
   }

   getSavedDates = () => {
       API.getSavedDates()
       .then(res => 
       this.setState({saved: res.data, username: res.data[0].user.username}))
       console.log(this.state.saved)
   }


  //  , username: res.data[0].user.username

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
                  {this.state.username.length ? (
                <h5>{`User Name:  ${this.state.username}`}</h5>
                
              ):(
                <h3>No User Info</h3>
              )}
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
                   
                   <a className="float-left" href={`mailto: ${this.state.username}?body= Your Saved Date: ${saved.title} \n description: ${saved.description} What you need: ${saved.whatYouNeed}`} target="_top"><i className="far fa-envelope"></i></a>
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
