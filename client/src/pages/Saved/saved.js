import React, {Component} from "react";
// import {FormBtn, Input} from "../../components/Form";
import {List, ListItem} from "../../components/List";
import {Container,Row, Col} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/deleteDate";

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
       this.getSavedDates();
   }


   deleteDate = id => {
    API.deleteDate(id)
      .then(res => this.getSavedDates())
      .catch(err => console.log(err));
  };

    render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>Your Saved Date Ideas!</h1>
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
                    <strong>{saved.title}</strong>
                    <br></br>
                    <p>Type of date: {saved.type}</p>
                    <br></br>
                    <p>{saved.description}</p>       
                   <br></br>
                   <p>What you Need: {saved.whatYouNeed}</p>
                        
                   <DeleteBtn onClick={() => this.deleteDate(saved._id)} />
                   
                   <a href={`mailto:?body= Your Saved Date: ` + saved.title + " description: "+ saved.description + "What you need: " + saved.whatYouNeed} target="_top"><i className="far fa-envelope"></i></a>
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
