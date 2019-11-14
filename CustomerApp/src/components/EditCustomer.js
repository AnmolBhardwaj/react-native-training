import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button,Item,Input,Label,Form } from "native-base";

export default class EditCustomer extends Component {
    constructor(props) {
        console.log(">> Logged In");
        super(props);
      }
    
      state = {
        users:[],
        id: '',
        name: '',
        userName: '',
        email: '',
        phone: '',
        companyName: ''

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

      onClickGo = (ind) => {
          url = 'https://jsonplaceholder.typicode.com/users/'+ind
        fetch(url, {
            method: 'PATCH',
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
            <Form>
          {this.state.users.map(item => (
            <Card key={item.id}>
              <CardItem header bordered>
              <Item floatingLabel>
              <Label> {item.name} </Label>
              <Input
              value={this.state.name}
              onChangeText={(name) => this.setState({ name })} />
            </Item>
               
              </CardItem>
              <CardItem bordered button>
                <Body>
                  <Text style={{fontSize:20,fontWeight:"300", color:"steelblue"}}>Personal Details:</Text>
                  <Item floatingLabel>
                    <Label> {item.username} </Label>
                    <Input
                    value={this.state.userName}
                    onChangeText={(userName) => this.setState({ userName })} />
                    </Item>
                    <Item floatingLabel>
                    <Label> {item.email} </Label>
                    <Input
                    value={this.state.email}
                    onChangeText={(email) => this.setState({ email })} />
                    </Item><Item floatingLabel>
                    <Label> {item.phone} </Label>
                    <Input
                    value={this.state.phone}
                    onChangeText={(phone) => this.setState({ phone })} />
                    </Item>
                </Body>
              </CardItem>
              <CardItem bordered button onPress={() => alert("This is Card Body")}>
                <Body>
                  <Text style={{fontSize:20,fontWeight:"300", color:"green"}}>Company Details:</Text>
                  <Item floatingLabel>
                    <Label> {item.company.name} </Label>
                    <Input
                    value={this.state.companyName}
                    onChangeText={(companyName) => this.setState({ companyName })} />
                    </Item>
                  <Text style={{fontSize:15,fontWeight:"300"}}>
                    {item.company.catchPhrase}
                  </Text>
                  <Text  style={{fontSize:15,fontWeight:"300"}}>
                    {item.company.bs}
                  </Text>
                </Body>
              </CardItem> 
            <CardItem>
            <Button style={{ marginLeft: 5, alignContent:"center"}} bordered primary small onPress={() => this.onClickGo(item.id)}>
                  <Text>Submit</Text>
                </Button>
               
            
            </CardItem>
            

            </Card>
            
              
            
          ))}
          </Form>
          </Content>
        </Container>
          );
      } 
}