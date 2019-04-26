import React, {Component} from "react";
import {FormBtn, Input} from "../../components/Form";
import {List, ListItem} from "../../components/List";
import {Container,Row, Col} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import API from "../../utils/API";
import HomeJson from "../../athome.json";
import SaveBtn from "../../components/SaveBtn";


class AtHome extends Component {
    state = {
        recipes: [],
        search: "",
        title:"",
        type:"",
        description: "",
        whatYouNeed: ""
      };
    
      SaveDates = () => {
       const dateData={title: this.state.title, type: this.state.type, description: this.state.description, whatYouNeed: this.state.whatYouNeed }
      API.saveDates(dateData) 
      console.log(this.state.title)
    }

    
    
      // Handles updating component state when the user types into the input field
      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleApiSubmit = query => {
        
        API.getRecipe(query).then( res => this.setState({recipes: res.data.recipes}))
        console.log(this.state.recipes)
      }
    
      handleFormSubmit = event => {
        event.preventDefault();
        this.handleApiSubmit(this.state.search)
        
      }
     
    
      render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>At Home Date Ideas!</h1>
                  </Jumbotron>

                  </Col>
                  </Row>
                  <Row>
                  
                   
                   <Col size= "md-6">
                  <List>
                      
                    {HomeJson.map( dates => {
                      console.log(dates)
                      
                      return (
                        <ListItem key={dates.title}  >

                          <small className="float-right">{dates.type}</small>
                          <br></br>
                           
                           <strong><h2>{dates.title}</h2></strong> 
                           <p>{dates.description}</p>

                           
                           <br></br>
                            <p>What you Need: {dates.whatYouNeed}</p>
                           
                           <br></br>
                           <p className="text-muted">Suggested Recipe: {dates.SuggestedRecipe}</p>
                           
                          
                           <br></br>
                        
                         <SaveBtn   
                            onClick={() => this.setState({title:dates.title, type:dates.type, description:dates.description, whatYouNeed:dates.whatYouNeed},this.SaveDates)}                                    
                          ></SaveBtn> 
                        </ListItem>
                      );
                    })}
                  </List>
                </Col>
                  
                  <br></br>
                  <br></br>
                  
                 <Col size="md-6">
                <form>
                  <Input
                    value={this.state.search}
                    onChange={this.handleInputChange}
                    name="search"
                    placeholder="(chicken)"
                  />
              
                  <FormBtn
                    onClick={this.handleFormSubmit}
                  >
                    Find recipes
                  </FormBtn>
                </form>
              </Col>
              <Col size="md-6 sm-12">
               
                {this.state.recipes.length ? (
                  <List>
                    {this.state.recipes.map(food => {
                      console.log(food)
                      
                      return (
                        <ListItem key={food.recipe_id}  >
                           
                           <h5 className="mb-1">{food.title}</h5> 
                           
                          <br></br>
                           <br></br>
                           <img className={"img-fluid"} src={food.image_url} alt={food.title}></img>
                           <br></br>
                           <br></br>
                           <a  className="float-right"  href={food.source_url} target="_blank"><i className="fas fa-eye"></i></a>
                          <a className= "float-left"href={"mailto:?body= link to recipe:" + food.source_url} target="_top"><i className="far fa-envelope"></i></a>
                          
                        </ListItem>
                      );
                    })}
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
    
    export default AtHome;
    

