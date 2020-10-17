import React, {Component} from 'react';
import {SafeAreaView, View, Text} from 'react-native';

class Live extends Component {

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
                        textAlign: 'center',
                        justifyContent: 'center',
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