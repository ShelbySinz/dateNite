import React, {Component} from "react";
import {FormBtn, Input} from "../../components/Form";
import {List, ListItem} from "../../components/List";
import {Container, Row, Col} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import API from "../../utils/API";
import SaveBtn from "../../components/SaveBtn";
import outdoorJson from "../../outdoor.json";
import axios from "axios";

//create component 
class Outdoor extends Component {
		//set state
		state = {
			outdoor: [],
      searchCity: "", 
			title: "",
			type: "",
			description: "",
			whatYouNeed: ""    
    };
    
    componentDidMount(){
      axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
    }
    
    //handle input change, handle updating component state when the user types into input field
    handleInputChange = event => {
			const { name, value } = event.target;
			this.setState({
				[name]: value
			});
		};

    //handle api/query params function
		handleApiSubmit = (queryCity) => {        
			API.getCoordinates(queryCity).then( res => this.setState({outdoor: res.data.results}));
      console.log(this.state.outdoor);
		};
		
		//handle form submit function
		handleFormSubmit = event => {
			event.preventDefault();
      this.handleApiSubmit(this.state.searchCity);
      console.log(this.state.searchCity);
		};
    
    //save date function
		SaveDates = () => {
			const dateData={title: this.state.title, type: this.state.type, description: 
				this.state.description, whatYouNeed: this.state.whatYouNeed}
		 API.saveDates(dateData); 
		 console.log(this.state.title);
	 };
		
		//render and return container, make use of layout components
		render() {
			return (
				<Container fluid>
					<Row>
						<Col size="md-12">
							<Jumbotron>
								<h1>Outdoor Date Ideas!</h1>
								<p>Spend some time outside and get to know eachother! Use the search bar below to find the best hiking 
									trails near you or try one of our crafted activities!</p>
								</Jumbotron>

								</Col>
								</Row>
								
                {/* return pre made dates from outdoorDates.json */}
                <Row>
								 <Col size= "md-7">
								  <List>
                    {outdoorJson.map( dates => { 
                      return (
                        <ListItem key={dates.title}  >

                          <small className="float-right">{dates.type}</small>
                          <br></br>
                           
                           <strong><h2>{dates.title}</h2></strong> 
                           <p>{dates.description}</p>

                           
                           <br></br>
                            <p>What you Need: {dates.whatYouNeed}</p>
                           
                           <br></br>
                        
                         <SaveBtn   
														onClick={() => this.setState({title:dates.title, type:dates.type, description:dates.description, 
															whatYouNeed:dates.whatYouNeed},this.SaveDates)}                                    
                          ></SaveBtn> 
                        </ListItem>
                      );
                    })}
                  </List>
                </Col>
                  
                  <br></br>
                  <br></br>
                  
                <Col size="md-5">
                  <form>
                  {/* grab user search value */}
                  <Input
                    value={this.state.searchCity}
                    onChange={this.handleInputChange}
                    name="searchCity"
                    placeholder="Seattle"
                  />
                  <FormBtn
                    onClick={this.handleFormSubmit}
                  >
                    Find Activities
                  </FormBtn>
                </form>
                <br></br>
                
                {/* return response here */}
                {this.state.outdoor.length ? (
                <List>
                 {this.state.outdoor.map(result =>  {
                  console.log(result)
                  
                  return (
                    <ListItem key={result.id}>                          
                      <strong>Name: {result.name}</strong> 
                      <p>Location: {result.formatted_address}</p>                      
                      <a className="float-right" href={"https://www.google.com/maps/place/" + result.formatted_address} target="_blank"><i className="fas fa-eye"></i></a>
                      <a className="float-left" href={"mailto:?body= Address to"+ result.name + ":" + result.formatted_address} target="_top"><i className="far fa-envelope"></i></a>
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
    };
    
    export default Outdoor;
    

