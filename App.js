import React from 'react';
import { StyleSheet } from 'react-native';
import Home from "./screens/Home"
import Navigation from './Navigation';
 function App() {
  return <Navigation />
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
