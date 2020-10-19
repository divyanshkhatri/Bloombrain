import React, {Component} from 'react';
import {View, SafeAreaView, Text, Dimensions, Linking, Image, ImageBackground, LogBox} from 'react-native';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import {Actions} from 'react-native-router-flux';
import BottomNavBar from './BottomNavigator';

export default class Subject extends Component {

    componentDidMount() {
        LogBox.ignoreLogs(['VirtualizedLists should never be nested']);
    }

    state = {
        numbers: [
            {
              label: 'Algebra',
              value: 1,
            },
            {
              label: 'Fractions',
              value: 2,

            },
          ],
            itemDetails: [
            {
                _id: "5e12905eb10fe53808d1ca5a",
                topicName: 'Straight Lines',
                testNo: 8,
                videosNo: 6,
                testCompleted: 2,
                videosCompleted: 1,
                categories: {
                    id: '1', 
                    cat: '1',
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), time: "3:48"}],
                    urlTest: [{id: '1', urls: "https://www.google.com"}, {id: '2', urls: "https://www.google.com"}, {id: '3', urls: "https://www.google.com"}, {id: '4', urls: "https://www.google.com"}],

                }
            },
            {
                _id: "5e12905eb10fe53808d1ca59",
                topicName: 'Circles',
                testNo: 1,
                videosNo: 4,
                testCompleted: 0,
                videosCompleted: 2,
                categories: {
                    id: '1', 
                    cat: '1', 
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), time: "3:48"}],
                    urlTest: [{id: '1', urls: "https://www.google.com"}, {id: '2', urls: "https://www.google.com"}, {id: '3', urls: "https://www.google.com"}, {id: '4', urls: "https://www.google.com"}],

            }
            },
            {
                _id: "5e12905eb10fe53808d1ca58",
                topicName: 'Parabola',
                testNo: 4,
                videosNo: 4,
                testCompleted: 4,
                videosCompleted: 4,
                categories: {
                    id: '1', 
                    cat: '1', 
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), time: "3:48"}],
                    urlTest: [{id: '1', urls: "https://www.google.com"}, {id: '2', urls: "https://www.google.com"}, {id: '3', urls: "https://www.google.com"}, {id: '4', urls: "https://www.google.com"}],

                }
            }
        ]    
    }

    render() {
        let i = 0 ;
        return (
            
            <SafeAreaView
                // forceInset={{ bottom: 'never' }}
                style = {{
                    height: '100%',
                    
                    // flex: 1,
                    // flexDirection: 'column',
                    backgroundColor: 'black',
                    paddingTop: Platform.OS === 'android' ? 25 : 0,
                }}
            >
                <ScrollView
                    style = {{
                        marginBottom: 70
                    }}
                >
                    
                <View>
                <LinearGradient
                        // Button Linear Gradient
                        colors={[ '#223467', '#2F61EA']}
                        start={[0, 1]} end={[1, 0]}
                        style={{ 
                            paddingLeft: 20, 
                            
                            // borderRadius: 5,
                            width: Dimensions.get('window').width,
                            // marginLeft: 16,
                            height: 135,
                            // borderRadius: 15
                    }}>
                        <TouchableOpacity
                            onPress = { () => Actions.pop()}
                        >
                        <Image

                            style = {{
                                marginTop: 15,
                                // borderWidth: 1, 
                                // borderColor: 'white',
                                marginLeft: -2,
                                width: 30, 
                                height: 30}}
                            source = {require('../images/back.png')}/>
                        </TouchableOpacity>
                        <Text
                        style = {{
                            paddingTop: 20,
                            fontFamily: 'poppinsSemiBold',
                            color: 'white',
                            fontSize: 30
                        }}
                        >
                            Mathematics
                        </Text>
                        <Text
                            style = {{
                                fontFamily: 'poppinsRegular',
                                color: 'white',
                                fontSize: 15
                            }}
                        >
                            18 Chapters
                            
                        </Text>
                    </LinearGradient>
                    
                </View>
                <RNPickerSelect

                    placeholder={{
                        label: 'Coordinate Geometry',
                        value: null,
                        color: '',
                        // fontFamily: 'poppinsMedium'
                    }}
                    
                    style = {{
                        inputIOSContainer: {
                            margin: 16,
                            height: 45,                            
                            borderRadius: 25,
                            backgroundColor: '#2C2B2B',
                        },
                        placeholder: {
                            padding: 15,
                            fontSize: 14,
                            fontFamily: 'poppinsSemiBold',
                            color: 'white'
                        },

                        
                    }}
                    items = {this.state.numbers}
                    onValueChange = { () => {

                    }}
                    value={"yo"}
                    useNativeAndroidPickerStyle={false}
                    textInputProps={{ underlineColor: 'yellow' }}
                    Icon = { () => {
                        return (
                            <View
                            style = {{
                                // borderWidth: 2,
                                // borderColor: 'white',
                                marginTop: 12,
                                marginRight: 20
                            }}>
                            <Image 
                            style = {{
                                width: 20,
                                height: 20,
                                
                            }}
                            source = {require('../images/icon.png')}/>

                            </View>
                        )
                    }}
                >

                </RNPickerSelect>
                <Text
                    style = {{
                        color: '#32C6F3',
                        fontFamily: 'poppinsSemiBold',
                        fontSize: 18,
                        marginLeft: 16,
                        marginBottom: 22,
                    }}
                >
                    Chapter Outline
                </Text>
                <FlatList
                   
                    data = {this.state.itemDetails}
                    renderItem = { ({item}) => {
                        let ratio = ((item.testCompleted + item.videosCompleted) / (item.testNo + item.videosNo))*155
                        ;
                        return (
                            <View
                            style = {{flexDirection: 'row'}}
                            >
                            <View>
                                {   
                                    
                                    item.testCompleted + item.videosCompleted != item.testNo + item.videosNo ? (
                                        <View>
                                            <View style = {{
                                                borderColor: '#1DD348',
                                                borderWidth: 4,
                                                backgroundColor: '#2C2B2B',
                                                marginLeft: 20,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 38,
                                                height: 38,
                                                borderRadius: 19
                                            }} />
                                            <View 
                                            
                                                style = {{
                                                    alignSelf: 'center',
                                                    backgroundColor: '#1DD348',
                                                    borderBottomLeftRadius: 2,
                                                    borderBottomRightRadius: 2,
                                                    width: 6,
                                                    height: ratio,
                                                    marginLeft: 20,
                                                }}
                            
                                            />
                                            <View
                                                style = {{
                                                   
                                                    alignSelf: 'center',
                                                    backgroundColor: '#2C2B2B',
                                                    // borderWidth: 2,
                                                    // borderColor: 'white',
                                                    borderBottomLeftRadius: 4,
                                                    borderBottomRightRadius: 4,
                                                    // borderBottomEndRadius: '5',
                                                    width: 6,
                                                    height: 155-ratio,
                                                    marginLeft: 20,
                            
                                                }}
                                            />
                                        </View>
                                    ) : (
                                        <View>
                                            <View style = {{
                                                // borderColor: 'white',
                                                // borderWidth: 2,
                                                backgroundColor: '#1DD348',
                                                marginLeft: 20,
                                                alignItems: 'center',
                                                justifyContent: 'center',
                                                width: 40,
                                                height: 40,
                                                borderRadius: 20
                                            }}>
                                            <Image 
                                                style ={{
                                                    width: 22,
                                                    height: 22
                                                }}
                                                source = {require('../images/tick.png')}
                                            />
                                            </View>
                                            <View
                                                style = {{
                                                    alignSelf: 'center',
                                                    backgroundColor: '#1DD348',
                                                    // borderWidth: 2,
                                                    // borderColor: 'white',
                                                    // borderRadius: 4,
                                                    borderBottomLeftRadius: 4,
                                                    borderBottomRightRadius: 4,
                                                    width: 6,
                                                    height: 163,
                                                    marginLeft: 20,
                            
                                                }}
                                            />
                                        </View>
                            
                                    )

                                }
                            </View>
                            <View style = {{marginBottom: 20}}>
                                
                                <Text
                                    style = {{
                                        color: 'white',
                                        fontFamily: 'poppinsSemiBold',
                                        fontSize: 16,
                                        marginLeft: 20
                                    }}
                                >
                                    {item.topicName}
                                </Text>
                                <Text
                                    style = {{
                                        color: 'white',
                                        fontFamily: 'poppinsSemiBold',
                                        fontSize: 10,
                                        marginLeft: 20
                                    }}
                                >
                                    {item.videosNo} Videos <Image 
                                        style = {{width: 5, height: 5, justifyContent: 'center'}}
                                        source = {require("../images/dot.png")}
                                    /> {item.testNo} tests
                                </Text>
                                <FlatList 
                                contentContainerStyle = {{
                                    marginLeft: 20,
                                    // marginRight: 1000,
                                }}
                                data = {item.categories.urlVideos}
                                horizontal = {true}
                                ListFooterComponent={<View style={{width:80}}></View>}
                                keyExtractor = {item => item.id}
                                renderItem = { ({item}) => {

                                return (
                                    
                                        <View>
                                            <ImageBackground
                                            style = {{
                                                marginTop: 20,
                                                marginRight: 20,
                                                width: 170, 
                                                height: 100, 
                                                borderRadius: 10,
                                                marginBottom: 0,
                                                overflow: 'hidden',
                                                position: 'relative',
                                                
                                                // overflow: 'hidden'
                                                // borderWidth: 2,
                                                // borderColor: 'white'
                                            }}
                                            source = {item.urls}>
                                                <Text 
                                                    style = {{
                                                        color: 'white', 
                                                        backgroundColor: 'black',
                                                        position: 'absolute',
                                                        bottom: 10,
                                                        fontFamily: 'poppinsRegular',
                                                        fontSize: 10,
                                                        right: 10,
                                                        borderRadius: 3,
                                                        overflow: 'hidden',
                                                        paddingLeft: 2,
                                                        paddingRight: 2,
                                                }}>
                                                {item.time}
                                                </Text>
                                            </ImageBackground>
                                        </View>
                                    )
                                    
                                }}
                                
                                />
                                <FlatList 
                                contentContainerStyle = {{
                                    marginLeft: 20,
                                    marginRight: 20
                                }}
                                data = {item.categories.urlTest}
                                horizontal = {true}
                                renderItem = { ({item}) => {
                                    i++
                                    if((i-1)%4 == 0) i = 1
                                    return (
                                            <View 
                                                style = {{
                                                    width: 60,
                                                    height: 25,
                                                    backgroundColor: '#2C2B2B',
                                                    borderRadius: 15,
                                                    alignItems: 'center',
                                                    marginTop: 15,
                                                    // marginBottom: 5,
                                                    // marginLeft: 4,
                                                    marginRight: 10,

                                                    justifyContent: 'center'
                                                }}
                                            >
                                                <Text style={{
                                                    color: 'white',
                                                    fontFamily: 'poppinsRegular',
                                                    fontSize: 11
                                                }}
                                                    onPress={() => Linking.openURL(item.urls)}>
                                                Test {i}
                                                </Text>
                                                
                                            </View>
                                        )
                                        
                                    }}
                                    keyExtractor = {item => item.id}
                                />
                                
                            </View>
                            </View>
                            ) 
                            
                        }
                    }
                    keyExtractor = {item => item._id}
                />
            </ScrollView>
            </SafeAreaView>

        )
    }
}
