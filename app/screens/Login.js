import React from 'react';
import { StyleSheet, Text, View, Image, AppRegistry, TextInput, Dimensions, StatusBar, Button,  } from 'react-native';
import { StackNavigator } from 'react-navigation';

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    const { height, width } = Dimensions.get("window");
    this.state = {
      text: '',
      password: '',
      height,
      width,
    };
  }


  render() {
    const { height, width } = Dimensions.get("window")
    const { navigate } = this.props.navigation;
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#333333"
        }}

      >
        <StatusBar
          barStyle='light-content'
        />
        <View
          style={{
            height: height * 0.1785714286
          }} />
        <Image
          source={require('../resources/MusicMixer.png')}
        />
        <View
          style = {{
            flex: .25,
          }} />
          <Text
            style={{ color: '#FFFFFF', }}
          > Login using Spotify</Text>
          <TextInput
            style={{ height: 35, borderColor: 'gray', borderWidth: 1, color: 'white', width: 225, borderRadius: 5, padding: 4, margin: 5, }}
            onChangeText={(text) => this.setState({ text })}
            placeholder="Username or email"
            autoCapitalize="none"
            placeholderTextColor="#EFEFEF"
            value={this.state.text}
          />
          <TextInput
            style={{ height: 35, borderColor: 'gray', borderWidth: 1, color: 'white', width: 225, borderRadius: 5, padding: 4, margin: 5, }}
            onChangeText={(password) => this.setState({ password })}
            placeholder="Password"
            autoCapitalize="none"
            placeholderTextColor="#EFEFEF"
            secureTextEntry={true}
            value={this.state.password}
          />
          <Button
            style={{margin:4}}
            title="Login"
            color="#EFEFEF"
            accessibilityLabel="Click to login to MoodMixer"
            onPress={() => navigate('Camera')}
          />
        
      </View>
    );
  }
}