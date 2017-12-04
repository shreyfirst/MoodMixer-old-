import React, { Component } from 'react';
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  ActivityIndicator,
} from 'react-native';
import Camera from 'react-native-camera';
import RNFetchBlob from 'react-native-fetch-blob';

let text = ' get playlist '

export default class CameraScreen extends Component {

  
  render() {
    // const indicator = loading ? <ActivityIndicator/>: <View/>
          // Initialize the component's state.
          this.state = {
            emotion: 'emotionless',   // 'emotionless' maps to the camera emoji 📷
            rotation: 0,              // Initial rotation of the device
          };
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          type="front"
        >
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>{text}</Text>
        </Camera>
      </View>
    );
  }
    
  
    // This function is called when a picture is captured.
    takePicture() {
      const options = {}; // We don't need to modify these options
      this.camera.capture({ metadata: options })
      .then((result) => {
        this.findEmotions(result.data);
        this.setState({ emotion: 'loading' });
      })
      .catch(err => console.error(err));
    }
  
    // This function calls the Emotion API with our subscription key.
    findEmotions = data => {
      const url = 'https://westus.api.cognitive.microsoft.com/emotion/v1.0/recognize';
  
      RNFetchBlob.fetch('POST', url, {
        'Content-Type': 'application/octet-stream',
        'Ocp-Apim-Subscription-Key': 'f0674c11f91247fba6afd138f7246f63',
      }, data)
      .then(result => this.setEmotion(result.json()))
    }
  
    // This function takes the data the API returns and sets our
    // 'emotion' state to the strongest emotion the API detected
    // on the user's face.
    setEmotion(data) {
  
      // If there are no faces on the screen, let our emotion be 'empty'.
      if (!Array.isArray(data) || data.length === 0) {
        return this.setState({ emotion: 'empty' });
      }
  
      const { scores } = data[0];   // Check only the largest face
      const emotions = Object.keys(scores); // Get a list of possible emotions
      const results = [];   // Create an array to contain our list of emotions
  
      // Push each emotion value to the 'results' array.
      for (const emotion of emotions) {
        results.push({
          emotion: emotion,
          value: scores[emotion],
        });
      }
  
      // Sort the 'results' array to find the strongest emotion.
      const sortedResults = results.sort((a, b) => b.value - a.value);
  
      // Return the strongest emotion.
      return this.setState({ emotion: sortedResults[0].emotion });

    if (emotion == 'loading') {
      <ActivityIndicator/>
    }

    }

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  capture: {
    flex: 0,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#000',
    padding: 10,
    margin: 40
  }
});
