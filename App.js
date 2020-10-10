import React from 'react';
import { StyleSheet, Text, View, SafeAreaView} from 'react-native';
import Homepage from './component/Homepage';
import {useFonts} from 'expo-font';

export default function App() {

  const [loaded] = useFonts({
    poppinsMedium: require('./assets/fonts/Poppins-Medium.ttf'),
    poppinsSemiBold: require('./assets/fonts/Poppins-SemiBold.ttf'),
    poppinsRegular: require('./assets/fonts/Poppins-Regular.ttf')
  });

  if (!loaded) {
    return null;
  }
  return (
    <SafeAreaView style={styles.container}>
      <Homepage />
      {/* <Text style = {{fontSize: 50, color: "#fff", fontFamily: "poppinsMedium"}}>Hi</Text> */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    // alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
