import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import BottomNavBar from './BottomNavigator';

class Video extends Component {

    render() {
        return (
            <SafeAreaView
                style = {{
                    // flex: 1,
                    height: '100%',
                    // flexDirection: 'column',
                    backgroundColor: 'black',
                    paddingTop: Platform.OS === 'android' ? 25 : 0
                }}
            >
                <Text
                    style = {{
                        alignSelf: 'center',
                        justifyContent: 'center',
                        color: 'white',
                        fontFamily: 'poppinsMedium'
                    }}
                >
                    Video Screen
                </Text>
            </SafeAreaView>
        )
    }

}

export default Video;