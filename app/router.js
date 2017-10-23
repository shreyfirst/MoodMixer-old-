import React, { Component } from "react";
import { StackNavigator } from "react-navigation";

import {
  Settings,
  Camera,
  SongSelection,
  Login,
  FinalPlaylist,
} from "./screens";

export const Root = StackNavigator({
  Login: { screen: Login },
  Camera: { screen: Camera },
  SongSelection: { screen: SongSelection },
  FinalPlaylist: { screen: FinalPlaylist },
  Settings: { screen: Settings },
}, {
    headerMode: 'none'
  });