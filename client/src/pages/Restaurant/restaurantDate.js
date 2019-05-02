import React, {Component} from "react";
import {FormBtn, Input} from "../../components/Form";
import {List, ListItem} from "../../components/List";
import {Container,Row, Col} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import API from "../../utils/API";
import restaurantJson from "../../restaurants.json";
import SaveBtn from "../../components/SaveBtn";
import axios from "axios";
class Restaurant extends Component {

    state = {
          restaurant: [],
          search: "", 
          title:"",
          type:"",
          description: "",
          whatYouNeed: ""    
        };

     componentDidMount(){
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
     };

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleApiSubmit = query => {        
        API.getRestaurant(query).then( res => this.setState({restaurant: res.data.results}))
        console.log(this.state.restaurant);
      };
    
      handleFormSubmit = event => {
        event.preventDefault();
        this.handleApiSubmit(this.state.search)
        console.log(this.state.search);
      };

      SaveDates = () => {
        const dateData={title: this.state.title, type: this.state.type, description: this.state.description, whatYouNeed: this.state.whatYouNeed }
       API.saveDates(dateData); 
       console.log(this.state.title);
     };
    
      render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>Restaurant Date Ideas!</h1>
                  <p>Spend the night out and spend some money! Need help looking up restaurants? Use the search bar below - just enter the type of foods you'd like to eat!</p>
                  </Jumbotron>

                  </Col>
                  </Row>
                  <Row>
                   <Col size= "md-8">
                  <List>                
                    {restaurantJson.map( dates => {
                      console.log(dates)
                      
                      return (
                        <ListItem key={dates.title}  >
                          <small className = "float-right">{dates.type}</small>
                          <br></br>
                           
                           <strong><h2>{dates.title}</h2></strong> 
                           <p>{dates.description}</p>
                           <p>What you Need: {dates.whatYouNeed}</p>
                        
                          <SaveBtn   
                            onClick={() => this.setState({title:dates.title, type:dates.type, description:dates.description, whatYouNeed:dates.whatYouNeed},this.SaveDates)}                                     
                          >Save</SaveBtn>
                        </ListItem>
                      );
                    })}
                  </List>
                </Col>
                  <Col size= "md-4">
                  <img className={"img-fluid"} src="https://images-na.ssl-images-amazon.com/images/I/81UUBibOQvL._RI_.jpg" alt="Date Night"></img>
                  
                  </Col>
                  </Row>
                  <br></br>
                  <br></br>
                  <Row>
                 <Col size="md-6">
                <form>
                  <Input
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    name="search"
                    placeholder="Mexican"
                  />
              
                  <FormBtn
                    onClick={this.handleFormSubmit}
                  >
                    Find Restaurant
                  </FormBtn>
                </form>
              </Col>
              <Col size="md-6 sm-12">
                {this.state.restaurant.length ? (
                    <List>

                    {this.state.restaurant.map(result => (
                      
                      <ListItem key={result.id}  >                         
                            <strong>Name: {result.name}</strong> 
                            <p>Location: {result.formatted_address}</p>
                            <p>Price (4 is very expensive!): {result.price_level}</p>
                            <p>Rating (out of 5 stars!): {result.rating}</p>                           
                            <a className="float-right" href={"https://www.google.com/maps/place/" + result.formatted_address} target="_blank"><i className="fas fa-eye"></i></a>
                            <a className="float-left" href={"mailto:?body= Address to"+ result.name + ":" + result.formatted_address} target="_top"><i className="far fa-envelope"></i></a>
                      </ListItem>
                      ))}
                    </List>   
                     ) : (
                      <h3>No Results to Display</h3>
                     )}              
              </Col>
            </Row>
          </Container>
        );
      }
    }
    
    export default Restaurant;