import React from 'react';
import Homepage from './component/Homepage';
import Subject from './component/Subject';
import {useFonts} from 'expo-font';
import {Tabs, Scene, Router} from 'react-native-router-flux';
import BottomNavigator from './component/BottomNavigator';
import Live from './component/Live';
import Video from './component/Video';
import Test from './component/Test';

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
        <Tabs key = "root" hideTabBar>
          <Scene key = "BottomNavigator" component = {BottomNavigator} title = "BottomNavigator" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          <Scene key = "homepage" component = {Homepage} title = "homepage" hideNavBar initial duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          <Scene key = "subject" component = {Subject} title = "subject" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          <Scene key = "Video" component = {Video} title = "Video" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          <Scene key = "Test" component = {Test} title = "Test" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          <Scene key = "Live" component = {Live} title = "Live" hideNavBar duration = {0} swipeEnabled={false} animationEnabled={false} panHandlers={null}/>
          
			{/* <Scene key =  */}

        </Tabs>
       </Router>

  );
}