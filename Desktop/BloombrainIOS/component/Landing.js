import React, {Component} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { Util } from 'expo';
import AnimatedSplash from "react-native-animated-splash-screen";
import LandingMain from './LandingMain';
import Hompage from './Homepage';

class Landing extends Component {

    state = {
        rootKey: Math.random(),
    };

    componentDidMount() {
        this.resetAnimation();
    }
    
    resetAnimation() {
        this.setState({
            appReady: false,
    });
    
    setTimeout(() => {
        this.setState({
        appReady: true,
        });
    }, 1000);
    }
    
    render() {
        return (
            <View style = {styles.root}>
                <AnimatedSplash
                    // translucent={true}
                    isLoaded={this.state.appReady}
                    logoImage={require("../images/logo.png")}
                    backgroundColor={"black"}
                    logoHeight={250}
                    logoWidth={250}
                >
                    <LandingMain />
                </AnimatedSplash>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    root: {
      flex: 1,
    //   width: '100%',
    //   height: '100%'
    },
});

export default Landing;