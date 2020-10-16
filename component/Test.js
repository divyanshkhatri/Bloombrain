import React, {Component} from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import BottomNavBar from './BottomNavigator';

class Test extends Component {

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
                    Test Screen
                </Text>

            </SafeAreaView>
        )
    }

}

export default Test;