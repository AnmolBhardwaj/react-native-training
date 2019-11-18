import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body,Button } from "native-base";
import {NativeModules} from'react-native';

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

        NativeModules.Device.getDeviceName((err ,name) => {
          console.log(err, name);
        });
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
        this.props.navigation.navigate('Profile', this.state.clickedUserIndex);
      }
      
      onClickAdd = () => {
        this.props.navigation.navigate('AddCustomer')
      }
      onClickEdit = () => {
        this.props.navigation.navigate('EditCustomer', this.state.clickedUserIndex);
      }
      onClickDelete = (itemID) => {
        url = 'https://jsonplaceholder.typicode.com/users/name=' + itemID;
        console.log(url)
        fetch( url, {
          method: 'DELETE'
        }).then(function(response) {
          console.log(response.status); // Will show you the status
          if (!response.ok) {
              throw new Error("HTTP status " + response.status);
          }
          return response.json();
      })
      .then(json => console.log(json))

      }
      render() {
        return (
            <Container>
            <Header style={{flexDirection:'row'}}>
              <Text>Customer List</Text>
              
          
            
            </Header>
           
            <Content padder>
            <Button style={{ margin: 8, padding: 10}} bordered success small onPress={() => this.onClickAdd()}>
                  <Text>Add</Text>
            </Button>
              
           
            {this.state.users.map(item => ( 
              <Card key={item.id} >
                <CardItem header bordered button onPress={() => this.clickUser(item.id)}>
                  <Text>{item.username}</Text>
                  <Button bordered warning small style={{ marginLeft: 18}} onPress={() => this.onClickEdit()}>
                  <Text>Edit</Text>
                  </Button>
                  <Button bordered danger small style={{ margin: 8}} onPress={() => this.onClickDelete(item.name)}>
                  <Text>Delete</Text>
                  </Button>
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
