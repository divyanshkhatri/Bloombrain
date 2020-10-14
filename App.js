import React from 'react';
import Homepage from './component/Homepage';
import Subject from './component/Subject';
import {useFonts} from 'expo-font';
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
          <Scene key = "subject" component = {Subject} title = "subject" hideNavBar />
			{/* <Scene key =  */}
        </Stack>
       </Router>

  );
}