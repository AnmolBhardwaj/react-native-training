import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Label, Button,Text } from 'native-base';
    

export default class FloatingLabelExample extends Component {

    constructor(props) {
        super(props);
    }
    static navigationOptions = {
        headerTitle: 'Login'
    };
    state = {
        userName: '',
        password: ''
    }

    onLoginButton = () =>{

        if(this.state.userName == this.state.password){
            this.props.navigation.navigate('Dashboard');
            
        }

    }
  render() {

    return (
      <Container>
        <Header />
        <Content>
          <Form>
            <Item floatingLabel>
              <Label>Username</Label>
              <Input
               value={this.state.userName}
               onChangeText={(userName) => this.setState({ userName })} />
            </Item>
            <Item floatingLabel last>
              <Label>Password</Label>
              <Input
              value={this.state.password}
              onChangeText={(password) => this.setState({ password })} />
            </Item>
            <Button bordered style={{width: 200, margin: 25, justifyContent: "center", alignSelf: "center"}}  onPress={() => this.onLoginButton()}>
            <Text>Login</Text>
          </Button>
          </Form>

        </Content>
      </Container>
    );
  }
}