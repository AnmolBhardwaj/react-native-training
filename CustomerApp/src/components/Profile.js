import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button } from "native-base";

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

      onClickAlbums = (ind) => {
        this.props.navigation.navigate('Albums',ind);
      }

      render() {
          return(
          <Container>
          <Header>
            <Text>
              Customer Profile
            </Text>
          </Header>
          <Content padder>
          {this.state.users.map(item => (
            <Card key={item.id}>
              <CardItem header bordered>
                <Text style={{fontSize:22,fontWeight:"400", color:"blue"}}> {item.name} </Text>
              </CardItem>
              <CardItem bordered button onPress={() => alert("This is Card Body")}>
                <Body>
                  <Text style={{fontSize:20,fontWeight:"300", color:"steelblue"}}>Personal Details:</Text>
                  <Text style={{fontSize:15,fontWeight:"300"}}>
                    {item.username}
                  </Text>
                  <Text style={{fontSize:15,fontWeight:"300"}}>
                    {item.email}
                  </Text>
                  <Text  style={{fontSize:15,fontWeight:"300"}}>
                    {item.phone}
                  </Text>
                </Body>
              </CardItem>
              <CardItem bordered button onPress={() => alert("This is Card Body")}>
                <Body>
                  <Text style={{fontSize:20,fontWeight:"300", color:"green"}}>Company Details:</Text>
                  <Text style={{fontSize:15,fontWeight:"300"}}>
                    {item.company.name}
                  
                  </Text>
                  <Text style={{fontSize:15,fontWeight:"300"}}>
                    {item.company.catchPhrase}
                  </Text>
                  <Text  style={{fontSize:15,fontWeight:"300"}}>
                    {item.company.bs}
                  </Text>
                </Body>
              </CardItem> 
            <CardItem>
            <Button style={{flex: 1, marginLeft: 5}} bordered dark small onPress={() => this.onClickAlbums(item.id)}>
                  <Text>Albums</Text>
                </Button>
                <Button style={{flex: 1, marginLeft: 5}} bordered dark small>
                  <Text>Posts</Text>
                </Button>
                <Button style={{flex: 1, marginLeft: 5}} bordered dark small>
                  <Text>To-Do List</Text>
            </Button>
            
            </CardItem>
            

            </Card>
            
              
            
          ))}
          </Content>
        </Container>
          );
      } 
}