import React, { Component } from 'react';
import { Container, Header, Content, Card, Item, Label, Input,CardItem, Text, Body, Button, Form } from "native-base";

export default class AddCustomer extends Component {
    constructor(props) {
        console.log(">> Logged In");
        super(props);
      }
    
      state = {
        id: '',
        name: '',
        userName: '',
        email: '',
        phone: '',
        companyName: ''
            
    }

      
      componentDidMount(){
       
    }

    onClickAdd = () => {
        fetch('https://jsonplaceholder.typicode.com/users', {
            method: 'POST',
            body: JSON.stringify({
            name: this.state.name,
            userName: this.state.userName,
            email: this.state.email,
            address: {
                "street": "Kulas Light",
                "suite": "Apt. 556",
                "city": "Gwenborough",
                "zipcode": "92998-3874",
                "geo": {
                  "lat": "-37.3159",
                  "lng": "81.1496"
                }
            },
            phone: this.state.phone,
            website: "www.google.com",
            company: {
                "name": this.state.companyName,
                "catchPhrase": "Multi-layered client-server neural-net",
                "bs": "harness real-time e-markets"
              }
            }),
            headers: {
            "Content-type": "application/json; charset=UTF-8"
            }
            })
            .then(function(response) {
                console.log(response.status); // Will show you the status
                if (!response.ok) {
                    throw new Error("HTTP status " + response.status);
                }
                return response.json();
            })
            .then(json => console.log(json))
    
            
    
    }
      render() {
          return(
          <Container>
          <Header>
            
          </Header>
          <Content padder>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
               value={this.state.userName}
               onChangeText={(userName) => this.setState({ userName })} />
            </Item>
            <Item floatingLabel>
              <Label>Email</Label>
              <Input
              value={this.state.email}
              onChangeText={(email) => this.setState({ email })} />
            </Item>
            <Item floatingLabel>
              <Label>Name</Label>
              <Input
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })} />
            </Item>
            <Item floatingLabel>
              <Label>Phone</Label>
              <Input
              value={this.state.phone}
              onChangeText={(phone) => this.setState({ phone })} />
            </Item>
            <Item floatingLabel>
              <Label>Company Name</Label>
              <Input
              value={this.state.companyName}
              onChangeText={(companyName) => this.setState({ companyName })} />
            </Item>
            
            <Button bordered success style={{width: 200, margin: 25, justifyContent: "center", alignSelf: "center"}}  onPress={() => this.onClickAdd()}>
            <Text>Add Customer</Text>
          </Button>
          </Form>
        </Content>
        </Container>
        );
      } 
    
 
    }