import React, { Component } from 'react';
  import {
    StyleSheet,
    Text,
    View,
    TextInput,
    Button,
    TouchableHighlight,
    Image,
    Alert,
    ScrollView
  } from 'react-native';


export default class Movies extends Component {

  constructor(props) {
    console.log(">> Movies");
    super(props);
  }

  state = {
    comments: [],
    emails: [],
    bodies: []
  };
  componentDidMount(){
    console.log(">>>>> componentDidMount...");
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then((response) => response.json())
    .then((responseJson) => {
     // console.log(JSON.stringify(responseJson.movies));
     this.setState({comments:responseJson});
      return responseJson;
    })
    .catch((error) => {
      console.error(error);
    });
  } 
  render() {
    return (
      <ScrollView>
          <View>
          {this.state.comments.map(item => (
      <View style={{flex: 1, flexDirection: 'row', height: 20}} key = {item.id}>
        <View style={{flex: 1, height: 20, backgroundColor: 'skyblue'}}>
          <Text>
            {item.id} 
          </Text>
        </View>

        <View style={{flex: 2, height: 20, backgroundColor: 'pink'}}>
          <Text>
            {item.email}
          </Text>
        </View>

        <View style={{flex: 4, height: 20, backgroundColor: 'yellow'}}>
          <Text>
            {item.body}
          </Text>
        </View>
      </View>
      ))}
          </View>
          </ScrollView>
    );
  }
}
    