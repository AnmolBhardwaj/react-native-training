import React, { Component } from 'react';
import { Image } from 'react-native';

export default class Photos extends Component {
  render() {
    let pic = {
      uri: 'https://syndicode.com/wp-content/uploads/2017/07/React-Native-for-iOS-developers1-e1499675479381-700x700-c-default.png'
    };
    return (
      <Image source={pic} style={{width: 300, height: 500, margin: 48}}/>
    );
  }
}