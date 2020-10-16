import React, {useState} from 'react';
import { View, Image, TouchableOpacity, TouchableWithoutFeedback, Animated, Text, Alert,  } from 'react-native';
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
                // style: { marginVertical: 5 },
                bottom: 0,
                width: '100%',
                height: 70,
                flexDirection: 'row',
                justifyContent: '',
                paddingVertical: 10,
                paddingHorizontal: 25


            }}>

                <View style={{
                    flexDirection: 'row', alignItems: 'center', marginStart: 5,
                    borderWidth: 2, borderColor: 'white'
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

                            style={{ marginHorizontal: 16, 
                                width: 20, 
                                height: 20, 
                                tintColor: text.dashboardText? "#32C6F3" : "#585858",
                                    
                            }}
                            source={require('../images/dashboard.png')}
                            onPress={()=>{Alert.alert("")}}
                        >

                        </Image>

                    </TouchableOpacity>
                    <Text style={{justifyContent:'center',alignItems:'center', marginLeft: -4, marginRight: 10, fontFamily: 'poppinsSemiBold', fontSize: 13, color: text.dashboardText ? "#32C6F3" : "#585858"}}>{text.dashboardText ? 'Dashboard' : null}</Text>
                </View>
                
                <View style={{
                    flexDirection: 'row', alignItems: 'center',
                    borderWidth: 2, borderColor: 'white'
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
                                marginHorizontal: 16, 
                                width: 20, 
                                height: 20,
                                tintColor: text.videoText ? "#32C6F3" : "#585858", }}
                            source={require('../images/videos.png')}
                            onPress={() => { Alert.alert("click") }}
                            containerStyle={{ marginHorizontal: 20 }}
                        />
                    
                    </TouchableOpacity>
                    <Text style={{justifyContent:'center',alignItems:'center', marginLeft: 5, fontFamily: 'poppinsSemiBold', fontSize: 13, color: text.videoText ? "#32C6F3" : "#585858"}}>{text.videoText ? 'Videos' : null}</Text>
                </View>

                    <View style={{
                            flexDirection: 'row', alignItems: 'center',
                            borderWidth: 2, borderColor: 'white'
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
                                onPress={() => { Alert.alert("click") }}
                                style={{
                                    marginHorizontal: 16,
                                    width: 22, 
                                    height: 20,
                                    tintColor: text.testText ? "#32C6F3" : "#585858",
                                }}
                                containerStyle={{ marginHorizontal: 20 }}
                            />
                    
                        </TouchableOpacity>
                        <Text style={{justifyContent:'center',alignItems:'center', marginLeft: 5, fontFamily: 'poppinsSemiBold', fontSize: 13, color: text.testText ? "#32C6F3" : "#585858"}}>{text.testText ? 'Test' : null}</Text>
                    </View>
                    <View style={{
                        flexDirection: 'row', alignItems: 'center',
                        borderWidth: 2, borderColor: 'white'
                        
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
                                            marginHorizontal: 16,
                                            width: 26, 
                                            height: 20,
                                            marginTop: 12,
                                            tintColor: text.liveText ? "#32C6F3" : "#585858",
                                        }}
                                    // containerStyle={{ marginHorizontal: 20, marginTop: 20 }}
                                />
                    
                            
                            <Text style={{justifyContent:'center',alignItems:'center', marginLeft: 5, fontFamily: 'poppinsSemiBold', fontSize: 13, color: text.liveText ? "#32C6F3" : "#585858"}}>{text.liveText ? 'Live' : null}</Text>
                        </TouchableOpacity>
                    </View>

                {/* </View> */}
            </View>
        </View>
    );


    
}

export default BottomNavigator;