import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Homepage from './component/Homepage';
import {useFonts} from 'expo-font';
// import { Router, Scene } from 'react-native-router-flux';
import {Stack, Scene, Router} from 'react-native-router-flux';

export default function App() {

  const [loaded] = useFonts({
    poppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    poppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    poppinsRegular: require('./assets/fonts/Poppins-Regular.ttf'),
    poppinsBold: require('./assets/fonts/Poppins-Bold.ttf')
  });

  if (!loaded) {
    return null;
  }
  return (

      <Router>
        <Stack key = "root">
         	<Scene key = "homepage" component = {Homepage} title = "homepage" hideNavBar />
			{/* <Scene key =  */}
        </Stack>
       </Router>

  );
}