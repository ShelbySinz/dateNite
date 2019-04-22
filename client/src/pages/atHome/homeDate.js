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
        
      };
    
      // When the component mounts, load all books and save them to this.state.books
    //   componentDidMount() {
    //    this.handleApiSubmit("harry-potter");
    //   }
    
      // Loads all books  and sets them to this.state.books
      
    
      // Deletes a book from the database with a given id, then reloads books from the db
      
    
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
                   <Col size= "md-12">
                  <List>
                      
                    {HomeJson.map( dates => {
                      console.log(dates)
                      
                      return (
                        <ListItem key={dates.title}  >
                           
                           <strong><h1>{dates.title}</h1></strong> 
                           <p>{dates.description}</p>

                           
                           <br></br>
                            <p>What you Need: {dates.whatYouNeed}</p>
                           
                           <br></br>
                           <p>Suggested Recipe: {dates.SuggestedRecipe}</p>
                           
                          
                           <br></br>
                        
                          <SaveBtn   
                            onClick={() => API.saveDates({title: dates.title, type: dates.type, description: dates.description, whatYouNeed: dates.whatYouNeed})}                                     
                          >Save</SaveBtn>
                        </ListItem>
                      );
                    })}
                  </List>
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
                        <ListItem key={food.title}  >
                           
                           <strong>{food.title}</strong> 
                           
                           <br></br>
                           <img className={"img-fluid"} src={food.image_url} alt={food.title}></img>
                           <br></br>
                           <br></br>
                         <a href={food.publisher_url} target="_blank"><button className="btn btn-sm btn-primary" >view</button></a>
                          {/* <SaveBtn   
                            onClick={() => API.getRecipe({title: book.volumeInfo.title, authors: book.volumeInfo.authors, synopsis: book.volumeInfo.description, link: book.volumeInfo.previewLink,image: book.volumeInfo.imageLinks.smallThumbnail})}                                     
                          >Save</SaveBtn> */}
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
    

