import React, {useState} from 'react';
import { View, Image, TouchableOpacity, Alert, Dimensions} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Video from './Video';
import Live from './Live';
import Test from './Test';
import Subject from './Subject';

const BottomNavigator = () => {

    const [text, setText] = useState({
        dashboardText: true,
        videoText: false,
        liveText: false,
        testText: false
    });

    return (
        <View style={{
            flex: 1,
        }}>
            <View>{ text.dashboardText ? <Subject /> : null}</View>
            <View>{ text.testText ? <Test /> : null}</View>
            <View>{ text.liveText ? <Live /> : null}</View>
            <View>{ text.videoText ? <Video /> : null}</View>
            <View style={{

                position: 'absolute',
                backgroundColor: '#2B2A29',
                border: 2,
                radius: 3,
                shadowOpacity: 1,
                shadowRadius: 3,
                shadowOffset: {
                    height: 3, width: 3
                },
                x: 0,
                y: 0,
                borderTopLeftRadius: 10,
                borderTopRightRadius: 10,
                bottom: 0,
                width: '100%',
                height: 70,
                flexDirection: 'row',
                justifyContent: 'space-around',
                paddingVertical: 10,
                paddingHorizontal: 25


            }}>

                <View style={{
                    flexDirection: 'row', 
                    alignItems: 'center',
                    // position: 'absolute',

                    // left: margin.marginD, 
                    height: 30, 
                    width: 20
                }}>
                    <TouchableOpacity 
                        onPress={() => {
                            setText({
                                dashboardText: true,
                                videoText: false,
                                liveText: false,
                                testText: false
                            })
                            }
                        }
                    >
                        <Image

                            style={{ 
                                width: 25, 
                                height: 25, 
                                tintColor: text.dashboardText? "#32C6F3" : "#585858",    
                            }}
                            source={require('../images/dashboard.png')}
                            onPress={()=>{Alert.alert("")}}
                        >

                        </Image>

                    </TouchableOpacity>
                    
                </View>
                
                <View style={{
                    flexDirection: 'row', 
                    alignItems: 'center',
                    // position: 'absolute
                    // left: margin.marginV,
                    height: 30,
                    width: 20
                }}>

                    <TouchableOpacity
                        onPress={() => {
                            setText({
                                dashboardText: false,
                                videoText: true,
                                liveText: false,
                                testText: false
                            })
                        }}
                    >
                        <Image
                            style={{ 
                                // marginHorizontal: 3, 
                                width: 25, 
                                height: 25,
                                tintColor: text.videoText ? "#32C6F3" : "#585858", }}
                            source={require('../images/videos.png')}
                            onPress={() => { Alert.alert("click") }}
                        />
                    
                    </TouchableOpacity>
                    
                </View>

                    <View style={{
                        // justifyContent: 'flex-start',
                        flexDirection: 'row', 
                        alignItems: 'center',
                        // borderWidth: 2, 
                        // borderColor: 'white',
                        // position: 'absolute',
                        // right: margin.marginT,
                        height: 30,
                        width: 30,

                    }}>

                        <TouchableOpacity
                            onPress={() => {
                                setText({
                                    dashboardText: false,
                                    videoText: false,
                                    liveText: false,
                                    testText: true
                                })
                            }}
                        >
                            <Image
                                source={require('../images/test.png')}
                                style={{
                                    // borderWidth: 2,
                                    // borderColor: 'white',
                                    // marginHorizontal: 4,
                                    // marginTop: 3,
                                    width: 30, 
                                    height: 30,
                                    tintColor: text.testText ? "#32C6F3" : "#585858",
                                }}
                            />
                    
                        </TouchableOpacity>
                        
                    </View>
                    <View style={{
                        
                        flexDirection: 'row', 
                        // alignItems: 'center',
                        // borderWidth: 2, 
                        // marginTop: 9,
                        alignItems: 'center',
                        // borderColor: 'white',
                        // position: 'absolute',
                        // right: margin.marginL,

                        height: 30,
                        width: 26
                        
                    }}>
                        <TouchableOpacity
                            onPress={() => {
                                setText({
                                    dashboardText: false,
                                    videoText: false,
                                    liveText: true,
                                    testText: false
                                })
                            }}
                        >
                                <Image
                                    source={require('../images/live.png')}

                                    style={{
                                            // borderWidth: 2,
                                            // borderColor: 'white',
                                            // marginHorizontal: 16,
                                            width: 30, 
                                            height: 30,
                                            // marginTop: 12,
                                            tintColor: text.liveText ? "#32C6F3" : "#585858",
                                        }}
                                    // containerStyle={{ marginHorizontal: 20, marginTop: 20 }}
                                />
                    
                        </TouchableOpacity>
                    </View>

                {/* </View> */}
            </View>
        </View>
    );


    
}

export default BottomNavigator;