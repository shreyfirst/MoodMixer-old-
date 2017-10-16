import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, TextInput } from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  

  render() {
    return (
      <View 
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#0B0B0B"
        }}
      >
        <View
        style = {{
          flex: 0}} />
        <Image
          source={require('../resources/MusicMixer.png')}
        />
        <Text
          style = {{ color: '#FFFFFF' }}
        > Login using Spotify</Text>
        <TextInput
        style={{height: 40, borderColor: 'white', borderWidth: 50}}
        onChangeText={(text) => this.setState({text})}
        value={this.state.text}
        />
      </View>
    );
  }
}