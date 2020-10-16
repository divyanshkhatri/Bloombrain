import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import BottomNavBar from './BottomNavigator';

class Live extends Component {

    render() {
        return (
            <SafeAreaView
                style = {{
                    // flex: 1,
                    // flexDirection: 'column',
                    backgroundColor: 'black',
                    paddingTop: Platform.OS === 'android' ? 25 : 0
                }}
            >
                <Text
                    style = {{
                        color: 'white',
                        fontFamily: 'poppinsMedium'
                    }}
                >
                    Live Screen
                </Text>
            </SafeAreaView>
        )
    }

}

export default Live;