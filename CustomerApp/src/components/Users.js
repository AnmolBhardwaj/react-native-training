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


export default class Users extends Component {

  constructor(props) {
    console.log(">> Movies");
    super(props);
  }

  state = {
    users: [],
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
  render() {
    return (
      <ScrollView>
        <View style={{flex: 1,}}>
            <Text style={{fontSize:24,fontWeight:'300', margin: 16}}>Users Details:</Text>
            {this.state.users.map(item => (
            <View style={{flex: 1, margin: 10, borderColor: 'black', borderWidth: 2}} key = {item.id}>
                <View style={{flex: 4, height: 20, backgroundColor: 'skyblue'}}>
                    <Text>
                        Name -> {item.name} 
                    </Text>
                </View>

            <View style={{flex: 2, height: 20, backgroundColor: 'pink'}}>
                <Text>
                    Email -> {item.email}
                </Text>
            </View>

            <View style={{flex: 4, height: 20, backgroundColor: 'yellow'}}>
                <Text>
                Phone -> {item.phone}
                </Text>
            </View>
            <View style={{flex: 4, height: 20, backgroundColor: 'pink'}}>
                <Text>
                Work Profile -> {item.company.bs}
                </Text>
            </View>
            
        </View>
    ))}
        </View>
        </ScrollView>
    );
  }
}
    