import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Text, Body, Button , Badge, Icon} from "native-base";

export default class Profile extends Component {
    constructor(props) {
        console.log(">> Albumms In");
        super(props);
      }
    
      state = {
        albums:[]

      };
      componentDidMount(){
        console.log(">>>>> componentDidMount...");
        url= 'https://jsonplaceholder.typicode.com/albums/?userId='+this.props.navigation.state.params
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(JSON.stringify(responseJson));
          this.setState({albums:responseJson});
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
      }

    //   onClickAlbums = (ind) => {
    //     this.props.navigation.navigate('Albums',ind);
    //   }

      render() {
          return( 
            <Container>
            <Header>
                <Text>
                    User Albums
                </Text>
            </Header>
                <Content padder>
                {this.state.albums.map(item => (
                     <Button bordered dark style={{  margin: 8, padding:8 }}>
                   
                     <Text style={{ color: 'steelblue' }}>{item.title}</Text>
                   </Button>    
                    
                ))}
                </Content>
                </Container>
          )
      }
    }