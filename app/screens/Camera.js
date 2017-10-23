import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Camera from 'react-native-camera';

class BadInstagramCloneApp extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}>
          <Text style={styles.capture} onPress={this.takePicture.bind(this)}>[CAPTURE]</Text>
        </Camera>
      </View>
    );
  }

  takePicture() {
    const options = {};
    //options.location = ...
    this.camera.capture({ metadata: options })
      .then((data) => console.log(data))
      .catch(err => console.error(err));
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
var React = require("react-native");
var Camera = require("react-native-camera");

var {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableHighlight,
} = React;

var ReactProject = React.createClass({

    getInitialState: function() {
        return {
            cameraType: Camera.constants.Type.back
        }
    },

    render: function() {
        return (
            <Camera
                ref="cam"
                style={styles.container}
                type={this.state.cameraType}>
                <View style={styles.buttonBar}>
                    <TouchableHighlight style={styles.button} onPress={this._switchCamera}>
                        <Text style={styles.buttonText}>Flip</Text>
                    </TouchableHighlight>
                    <TouchableHighlight style={styles.button} onPress={this._takePicture}>
                        <Text style={styles.buttonText}>Take</Text>
                    </TouchableHighlight>
                </View>
            </Camera>
        );
    },

    _switchCamera: function() {
        var state = this.state;
        state.cameraType = state.cameraType === Camera.constants.Type.back ? Camera.constants.Type.front : Camera.constants.Type.back;
        this.setState(state);
    },

    _takePicture: function() {
        this.refs.cam.capture(function(err, data) {
            console.log(err, data);
        });
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "transparent",
    },
    buttonBar: {
        flexDirection: "row",
        position: "absolute",
        bottom: 25,
        right: 0,
        left: 0,
        justifyContent: "center"
    },
    button: {
        padding: 10,
        color: "#FFFFFF",
        borderWidth: 1,
        borderColor: "#FFFFFF",
        margin: 5
    },
    buttonText: {
        color: "#FFFFFF"
    }
});

AppRegistry.registerComponent('ReactProject', () => ReactProject);

AppRegistry.registerComponent('BadInstagramCloneApp', () => BadInstagramCloneApp);

export default class Camera extends React.Component {
  render() {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          backgroundColor: "#333333"
        }}
      >
        <Camera
          ref="cam"
          style={styles.container}
          type={this.state.cameraType}>
          <View style={styles.buttonBar}>
            <TouchableHighlight style={styles.button} onPress={this._switchCamera}>
              <Text style={styles.buttonText}>Flip</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.button} onPress={this._takePicture}>
              <Text style={styles.buttonText}>Take</Text>
            </TouchableHighlight>
          </View>
        </Camera>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}