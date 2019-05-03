import React, {Component} from "react";
import {FormBtn, Input} from "../../components/Form";
import {List, ListItem} from "../../components/List";
import {Container,Row, Col} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import API from "../../utils/API";
import movieJson from "../../movies.json";
import SaveBtn from "../../components/SaveBtn";
import axios from "axios";

class MoviesTv extends Component {
    state = {
        movies: {},
        search: "",
        title:"",
        type:"",
        description: "",
        whatYouNeed: "",
        active: "far fa-heart"
        
      };

     componentDidMount(){
       this.handleApiSubmit("elf")
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
      
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
                    
                   <Col size= "md-7">
                  <List>
                      
                    {movieJson.map( dates => {
                      console.log(dates)
                      
                      return (
                        <ListItem key={dates.title}  >
                            
                           <small className= "float-right">{dates.type}</small>
                          <br></br>
                           <strong><h1>{dates.title}</h1></strong> 
                           <p>{dates.description}</p>
                            <p className="text-muted">What you Need: {dates.whatYouNeed}</p>
                          <SaveBtn  
                            onClick={ () => this.setState({title:dates.title, type:dates.type, description:dates.description, whatYouNeed:dates.whatYouNeed},this.SaveDates)}                                    
                          ></SaveBtn>
                        </ListItem>
                      );
                    })}
                  </List>
                
                  <br></br>
                  <br></br>
                  </Col>
                 <Col size="md-5">
                <form>
                  <Input style={{marginTop:30}}
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
                      <br></br>
               
                 
                    <List>
                    
                     

                     
                        <ListItem key={this.state.movies.Title}  >
                           
                          <strong>Name: {this.state.movies.Title}</strong> 
                          <p>Plot: {this.state.movies.Plot}</p>
                           <p>Release Date: {this.state.movies.Released}</p>
                           <br></br>

                           <img src={this.state.movies.Poster} alt={this.state.movies.Title}></img>
                           <br></br>
                           <br></br>
                         <a className="float-right"href={this.state.movies.Website} target="_blank"><i className="fas fa-eye"></i></a>
                         <a className="float-left" href={"mailto:?body= Name of Movie:" + this.state.movies.Title + " Plot: "+ this.state.movies.Plot} target="_top"><i className="far fa-envelope"></i></a> 
                        </ListItem>
                      
                  </List>
              
              </Col>
            </Row>
          </Container>
        );
      }
    }
    
    export default MoviesTv;