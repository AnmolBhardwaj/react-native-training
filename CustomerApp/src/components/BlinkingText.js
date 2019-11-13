import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Blink extends Component {

  componentDidMount(){
    // Toggle the state every second
    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }

  //state object
  state = { isShowingText: true, visible: true };

  render() {
    if (!this.state.isShowingText) {
      return null;
    }

    return (
    <View style={styles.sectionDescription}>
      <Text>{this.props.text}</Text>
    </View>
    );
  }
}

export default class BlinkApp extends Component {
  render() {
    return (
      <View style={styles.sectionDescription}>
        <Blink text='I love to blink' />
        <Blink text='Look at me look at me look at me' />
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
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 20,
      fontWeight: '200',
      color : Colors.white
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
  
