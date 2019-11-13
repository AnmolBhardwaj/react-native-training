import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body } from "native-base";

export default class Dashboard extends Component {
    constructor(props) {
        console.log(">> Logged In");
        super(props);
      }
    
      state = {
        users:[],
        clickedUserIndex: 0,
      };
      componentDidMount(){
        console.log(">>>>> componentDidMount...");
        fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((responseJson) => {
         // console.log(JSON.stringify(responseJson.movies));
          this.setState({users:responseJson});
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
      }
      clickUser = (index) => {
          this.setState({clickedUserIndex: index})
        this.props.navigation.navigate('Profile', this.state.clickedUserIndex.toString());
      } 
      render() {
        return (
            <Container>
            <Header />
           
            <Content padder>
            {this.state.users.map(item => ( 
              <Card key={item.id} >
                <CardItem header bordered button onPress={() => this.clickUser(item.id)}>
                  <Text>{item.username}</Text>
                </CardItem>
                <CardItem bordered>
                  <Body>
                    <Text>
                        Company Name:  {item.company.name}
                    </Text>
                    <Text>
                        Bio:  {item.company.catchPhrase}
                    </Text>
                  </Body>
                </CardItem>
                <CardItem bordered>
                  <Text>{item.website}</Text>
                </CardItem>
              </Card>
              ))}
           </Content>
           
          </Container>
        );
    }

}
