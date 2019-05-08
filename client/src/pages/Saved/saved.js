import React, {Component} from "react";
// import {FormBtn, Input} from "../../components/Form";
import {List, ListItem} from "../../components/List";
import {Container,Row, Col} from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron/Jumbotron";
import API from "../../utils/API";
import DeleteBtn from "../../components/deleteDate";
import ReactDOM from 'react-dom';

import axios from 'axios';


const style ={
  h1 :{
      fontSize: "80px"
  },
  h2:{
        fontSize:"50px"
  }
}

class Saved extends Component {
  constructor(props) {
    super(props);
    this.state ={
        saved: [],
        username: "",
        userinfo: []
    };
  }
 
    
   componentDidMount(){
   
    axios.defaults.headers.common['Authorization'] = localStorage.getItem('jwtToken');
     this.getSavedDates()
     this.getUserInfo()
   }

   getSavedDates = () => {
       API.getSavedDates()
       .then(res => 
       this.setState({saved: res.data, username: res.data[0].user.username}))
       console.log(this.state.saved)
   }
  
   getUserInfo = () => {
     API.getUserInfo().then( res =>  this.setState({userinfo: res.data}))
   }

  //  , username: res.data[0].user.username


  deleteUser = () => {
    API.deleteUser().then( res => window.location.href="/")
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
                  
                  <h1 style={style.h1}> Hello {this.state.userinfo.username}, </h1>
                  <h3 style={style.h2}>here are your saved dates!</h3>
                 <h2> {console.log(this.state.userinfo)}</h2>
                  
                {/* <h5>{`User Name:  ${this.state.userinfo.username}`}</h5> */}
                
              <h6 className= "float-right">Delete User <DeleteBtn onClick= {this.deleteUser} /> </h6>
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
