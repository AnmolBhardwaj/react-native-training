import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';
import { Image } from 'react-native';

export default class Photos extends Component {
    constructor(props) {
        console.log(">> Photos In");
        super(props);
      }
    
      state = {
        photos:[]

      };
      componentDidMount(){
        console.log(">>>>> componentDidMount...");
        url= 'https://jsonplaceholder.typicode.com/photos/?albumId='+this.props.navigation.state.params
        fetch(url)
        .then((response) => response.json())
        .then((responseJson) => {
          console.log(JSON.stringify(responseJson));
          this.setState({photos:responseJson});
          return responseJson;
        })
        .catch((error) => {
          console.error(error);
        });
      }

      onClickAlbum(albumId){
        this.props.navigation.navigate('Photos',albumId);
      }

    //   onClickAlbums = (ind) => {
    //     this.props.navigation.navigate('Albums',ind);
    //   }

    render() {
      return (
        <Container>
          <Header />
          <Content>
          {this.state.photos.map(item => (
            <Card>
              <CardItem>
                <Left>
                  <Thumbnail source={{uri: 'Image URL'}} />
                  <Body>
                    <Text>NativeBase</Text>
                    <Text note>GeekyAnts</Text>
                  </Body>
                </Left>
              </CardItem>
              <CardItem cardBody>
                <Image source={{uri: item.url}} style={{height: 200, width: null, flex: 1}}/>
              </CardItem>
              <CardItem>
                <Left>
                  <Button transparent>
                    
                    <Text>{(Math.floor(Math.random(10)*10))} Likes</Text>
                  </Button>
                </Left>
                <Body>
                  <Button transparent>
                   
                    <Text>{(Math.floor(Math.random(11)*10))} Comments</Text>
                  </Button>
                </Body>
                <Right>
                  <Text>{(Math.floor(Math.random(30)*10))}h ago</Text>
                </Right>
              </CardItem>
            </Card>
          ))}
          </Content>
        </Container>
      );
    }
  
  
}