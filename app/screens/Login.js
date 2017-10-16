import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, TextInput, Dimensions } from 'react-native';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = { text: '' };
  }
  

  render() { 
    const {height, width}=Dimensions.get("window")
    return (
      <View 
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#333333"
        }}
      >
        <View
        style = {{
          height: height * 0.1785714286}} />
        <Image
          source={require('../resources/MusicMixer.png')}
        />
        <Text
          style = {{ color: '#FFFFFF' }}
        > Login using Spotify</Text>
        <TextInput
        style={{height: 35, borderColor: 'gray', borderWidth: 1, color: 'white', width: 225, borderRadius: 5, textAlign: "center"}}
        onChangeText={(text) => this.setState({text})}
        placeholder="Username or email"
        autoCapitalize="none"
        placeholderTextColor="#EFEFEF"
        value={this.state.text}
        />
      </View>
    );
  }
}