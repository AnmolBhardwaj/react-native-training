import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

export default class Profile extends Component {
    constructor(props) {
        console.log(">> Logged In");
        super(props);
      }
    
      state = {
        users:[]

      };
      componentDidMount(){
        console.log(">>>>> componentDidMount...");
        url= 'https://jsonplaceholder.typicode.com/users?id='+this.props.navigation.state.params
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(JSON.stringify(responseJson));
          this.setState({users:responseJson});
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
      }

      render() {
          return(
            <Container>
            <Header />
            <Content>
                <Card>
                    <Text>{this.props.navigation.state.params}</Text>
                {this.state.users.map(item => (
                    <Text>{item.company.name}</Text>

                ))}
                </Card>
            </Content>
            </Container>
          );
      } 
}