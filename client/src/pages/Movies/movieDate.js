import React, {Component} from "react";
import {FormBtn, Input} from "../../components/Form";
import {List, ListItem} from "../../components/List";
import {Container,Row, Col} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import API from "../../utils/API";
import movieJson from "../../movies.json";
import SaveBtn from "../../components/SaveBtn";

class MoviesTv extends Component {
    state = {
        movies: {},
        search: "",
        title:"",
        type:"",
        description: "",
        whatYouNeed: ""
        
      };

     componentDidMount(){
       this.handleApiSubmit("elf")
     }

      handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };
    
      handleApiSubmit = query => {
        
        API.getMovie(query).then( res => this.setState({movies: res.data}))
        console.log(this.state.movies)
      }
    
      handleFormSubmit = event => {
        event.preventDefault();
        this.handleApiSubmit(this.state.search)
        console.log(this.state.search);
      }
     
      SaveDates = () => {
        const dateData={title: this.state.title, type: this.state.type, description: this.state.description, whatYouNeed: this.state.whatYouNeed }
       API.saveDates(dateData) 
       console.log(this.state.title)
     }
    
      render() {
        return (
          <Container fluid>
            <Row>
              <Col size="md-12">
                <Jumbotron>
                  <h1>Movies and Tv Date Ideas!</h1>
                  </Jumbotron>

                  </Col>
                  </Row>
                  <Row>
                   <Col size= "md-12">
                  <List>
                      
                    {movieJson.map( dates => {
                      console.log(dates)
                      
                      return (
                        <ListItem key={dates.title}  >
                           
                           <strong><h1>{dates.title}</h1></strong> 
                           <p>{dates.description}</p>

                           
                           <br></br>
                            <p>What you Need: {dates.whatYouNeed}</p>
          
                           <br></br>
                        
                          <SaveBtn   
                            onClick={() => this.setState({title:dates.title, type:dates.type, description:dates.description, whatYouNeed:dates.whatYouNeed},this.SaveDates)}                                     
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
                    placeholder="The-Matrix"
                  />
              
                  <FormBtn
                    onClick={this.handleFormSubmit}
                  >
                    Find Movies
                  </FormBtn>
                </form>
              </Col>
              <Col size="md-6 sm-12">
               
                 
                    <List>
                    
                     

                     
                        <ListItem key={this.state.movies.Title}  >
                           
                          <strong>Name: {this.state.movies.Title}</strong> 
                          <p>Plot: {this.state.movies.Plot}</p>
                           <p>Release Date: {this.state.movies.Released}</p>
                           <br></br>

                           <img src={this.state.movies.Poster} alt={this.state.movies.Title}></img>
                           <br></br>
                           <br></br>
                         <a href={this.state.movies.Website} target="_blank"><button className="btn btn-sm btn-primary" >view</button></a>
                          
                        </ListItem>
                      
                  </List>
              
              </Col>
            </Row>
          </Container>
        );
      }
    }
    
    export default MoviesTv;