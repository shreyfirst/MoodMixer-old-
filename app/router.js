import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import {
  Settings,
  CameraScreen,
  SongSelection,
  FinalPlaylist,
} from "./screens";

import { Login } from './screens';

export const Root = StackNavigator({
  Login: { 
    screen: Login,
  },
  CameraScreen: { screen: CameraScreen },
  SongSelection: { screen: SongSelection },
  FinalPlaylist: { screen: FinalPlaylist },
  Settings: { screen: Settings },
}, {
    headerMode: 'none'
  });