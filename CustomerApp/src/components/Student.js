import React, { Component } from 'react';
import { Text, View, StyleSheet, Alert, Button } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default class Student extends Component {
  render() {
    return (
      <View style={{ flex: 1}}>
        <Text style ={styles.sectionTitle} >Students component!!</Text>

        <Text style ={styles.sectionDescription} >Name: {this.props.name}</Text>
        <Text style ={styles.sectionDescription} >E-mail: {this.props.email}</Text>

        <Button style={styles.button}
          title="Submit"
          color="#f1444f"
          onPress={() => Alert.alert('Simple Button pressed')}
        />

      </View>
    );
  }

  
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {

      backgroundColor: 'skyblue'
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
      
    },
    sectionTitle: {
      fontSize: 24,
      margin: 16,
      fontStyle: "italic",
      fontWeight: '200',
      color: Colors.black,
    },
    button:
    {
        borderColor: 'black',
        borderStyle:"solid",
        borderWidth: 2,
    },
    sectionDescription: {
    
      marginTop: 10,
      fontSize: 16,
      fontWeight: '300',
      color: Colors.dark,
      textAlign: 'left',
      marginLeft: 16,
      marginRight: 16,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
  });
  