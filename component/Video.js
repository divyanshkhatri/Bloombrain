import React, {Component} from 'react';
import {SafeAreaView, View, Image, Text, Dimensions, AsyncStorage, FlatList, ImageBackground} from 'react-native';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';

class Video extends Component {

    state = {
        numbers: [
            {
                label: 'Algebra',
                value: 'Algebra',
            },
            {
                label: 'Fractions',
                value: 'Fractions',

            },
        ],

        subjects: [
            {
                label: 'Algebra',
                value: 'Algebra',
            },
            {
                label: 'Fractions',
                value: 'Fractions',

            },
        ],
        subject: "",
        topic: {
            "Coordinate Geometry": 
                {
                    _id: "5e12905eb10fe53808d1ca5a",
                    videos: {
                        videosNo: 6,    
                        videosLength: 4,
                        urlVideos: [{id: '1', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: false, time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '5', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '6', urls: require('../images/mathswork.png'), desc: "Coordinate Geometry - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}],   
                    }
            },
            "Algebra": 
                {
                _id: "5e12905eb10fe53808d1ca5b",
                videos: {
                    videosNo: 7,    
                    videosLength: 3,
                    urlVideos: [{id: '1', urls: require('../images/mathswork.png'), desc: "Algebra - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), desc: "Algebra - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), desc: "Algebra - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), desc: "Algebra - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}],    
                }
            },
            "Fractions": 
            {
            _id: "5e12905eb10fe53808d1ca5c",
            videos: {
                videosNo: 7,    
                videosLength: 3,
                urlVideos: [{id: '1', urls: require('../images/mathswork.png'), desc: "Fractions - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '2', urls: require('../images/mathswork.png'), desc: "Fractions - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '3', urls: require('../images/mathswork.png'), desc: "Fractions - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}, {id: '4', urls: require('../images/mathswork.png'), desc: "Fractions - Introduction to straight Lines. (Part I)", teacher: "Rohit Holani", lock: true, time: "3:48"}],    
            }
        },
        },
        chosenTopic: "Coordinate Geometry"
    }

    async componentDidMount() {
        try {
            const value = await AsyncStorage.getItem('subject');
            if (value !== null) {
              // We have data!!
            }
            this.setState({
                subject: value
            })
        } catch (error) {
            // Error retrieving data
        }  

    }

    componentDidUpdate() {
        console.log("topic" + this.state.chosenTopic);
        console.log("object :::: ");
        console.log(this.state.topic[this.state.chosenTopic]);
    }

    valueChange = (val) => {
        // val = val.replace(/\s/g, '-');
        this.setState({chosenTopic: val});
        // console.log(val)
        console.log(typeof this.state.chosenTopic);
    }

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
                <View style = {{
                    // flex: 1,
                    marginTop: 20, 
                    marginLeft: 16, 
                    marginRight: 16,
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                    // width: 200, 
                    // borderWidth: 2,
                    // borderColor: 'white'
                }}>
                <Image 
                source = {require("../images/dp.jpg")}
                style = {{
                    width: 40,
                    height: 40,
                    borderRadius: 20,
                    borderColor: '#32C6F3',
                    borderWidth: 1

                }}
                />
                
                <RNPickerSelect

                    placeholder={{
                        label: 'Sub:  ' + this.state.subject,
                        value: this.state.subject,
                        color: '',
                        // fontFamily: 'poppinsMedium'
                    }}

                    style = {{
                        inputIOSContainer: {
                            // margin: 16,
                            height: 45,                             
                            borderRadius: 25,
                            backgroundColor: '#2C2B2B',
                            width: Dimensions.get('window').width/2
                        },
                        placeholder: {
                            padding: 15,
                            fontSize: 14,
                            fontFamily: 'poppinsBold',
                            color: 'white'
                        },

                        
                    }}
                    items = {this.state.numbers}
                    onValueChange = { (value, index ) => {
                        
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
                                marginRight: 20,
                            }}>
                            <Image 
                            style = {{
                                width: 20,
                                height: 20,
                                tintColor: '#828282'
                                
                            }}
                            source = {require('../images/icon.png')}/>

                            </View>
                        )
                    }}
                >
                </RNPickerSelect>
                </View>
                <RNPickerSelect

                    placeholder={{
                        label: 'Coordinate Geometry',
                        value: 'Coordinate Geometry',
                        color: '',
                        // fontFamily: 'poppinsMedium'
                    }}
                    
                    style = {{
                        inputIOSContainer: {
                            margin: 16,
                            marginTop: 30,
                            height: 45,                            
                            borderRadius: 25,
                            backgroundColor: '#2C2B2B',
                        },
                        placeholder: {
                            padding: 15,
                            fontSize: 14,
                            fontFamily: 'poppinsBold',
                            color: 'white'
                        },
                        inputAndroid: {
                            padding: 15,
                            fontSize: 14,
                            fontFamily: 'poppinsBold',
                            color: 'white'
                        },
                        inputIOS: {
                            padding: 15,
                            fontSize: 14,
                            fontFamily: 'poppinsBold',
                            color: 'white'
                        }
                        
                    }}

                    items = {this.state.subjects}
                    
                    onValueChange = { (value, index) => {
                        this.valueChange(value);
                    }}

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
                <View style = {{backgroundColor: '#090909', borderTopEndRadius: 10, paddingBottom: 50}}>
                    <View style = {{flexDirection: 'row', justifyContent: 'space-between', marginLeft: 16, marginRight: 16, paddingTop: 20, paddingBottom: 20}}>
                        <View style ={{flexDirection: 'row'}}>
                        <Text style = {{
                            color: '#32C6F3',
                            fontFamily: 'poppinsSemiBold',
                            fontSize: 12
                        }}>
                            {this.state.topic[this.state.chosenTopic].videos.videosNo} Videos 
                        </Text>
                        <Text style = {{marginLeft: Dimensions.get('window').width/40, marginRight: Dimensions.get('window').width/40}}></Text>
                        <Text style = {{
                            color: '#32C6F3',
                            fontFamily: 'poppinsSemiBold',
                            fontSize: 12
                        }}>
                            {this.state.topic[this.state.chosenTopic].videos.videosLength} hours 
                        </Text>
                        </View>
                        <Text style = {{
                            color: '#32C6F3',
                            fontFamily: 'poppinsSemiBold',
                            fontSize: 12

                        }}>
                           Download All 
                        </Text>
                    </View>
                    <FlatList 

                        // ListFooterComponent={<View style={{width:100}}></View>}
                        contentContainerStyle={{paddingBottom: 200}} 
                        data = {this.state.topic[this.state.chosenTopic].videos.urlVideos}
                        renderItem = {({item}) => (
                            <View style = {{
                                flexDirection: 'row', 
                                // borderWidth: 2, 
                                // borderColor: 'white',
                                marginLeft: 16, 
                                marginRight: 16,
                                backgroundColor: '#1C1C1C',
                                marginBottom: 20,
                                borderRadius: 10
                            }}>
                                <View>
                                    <ImageBackground
                                        style = {{
                                            // marginTop: 20,
                                            // marginRight: 20,
                                            width: 170, 
                                            height: 100, 
                                            borderRadius: 10,
                                            marginBottom: 0,
                                            overflow: 'hidden',
                                            position: 'relative',
                                        }}
                                        source = {item.urls}
                                    >
                                        <Text 
                                            style = {{
                                                color: 'white', 
                                                backgroundColor: 'black',
                                                position: 'absolute',
                                                bottom: 10,
                                                fontFamily: 'poppinsRegular',
                                                fontSize: 10,
                                                right: 10,
                                                // borderRadius: 3,
                                                overflow: 'hidden',
                                                paddingLeft: 2,
                                                paddingRight: 2,
                                        }}>
                                        {item.time}
                                        </Text>
                                    </ImageBackground>
                                    </View>
                                    <View style = {{
                                        flexShrink: 1,
                                        justifyContent: 'space-around', 
                                    }}>

                                        <Text style = {{
                                            color: 'white',
                                            fontFamily: 'poppinsRegular',
                                            paddingLeft: 12,
                                            paddingRight: 12,
                                            // borderColor: 'white',
                                            // borderWidth: 2,
                                            flexShrink: 1,
                                            fontSize: 10,
                                            // paddingTop:10
                                        }}>
                                            {item.desc}
                                        </Text>
                                    <View style = {{flexDirection: 'row', justifyContent: 'space-between'}}>
                                        <Text style = {{
                                            color: '#828282',
                                            fontFamily: 'poppinsSemiBold',
                                            paddingLeft: 12,
                                            paddingRight: 12,
                                                    // borderColor: 'white',
                                                    // borderWidth: 2,
                                            flexShrink: 1,
                                            fontSize: 10,
                                            // paddingTop: 29
                                        }}>
                                            {item.teacher}
                                        </Text>
                                        {item.lock == true ? <Image style = {{ width: 10, height: 10, marginRight: 15 }} source = {require('../images/lock.png')}/> : null}
                                        {/* <Text style = {{color: 'white'}}>{item.lock}</Text> */}
                                    </View>
                                </View>
                            </View>
                        )}
                        keyExtractor = {item => item._id}

                    />
                    {/* <Text style = {{color: 'white'}}>{this.state.topic[this.state.chosenTopic].videos.urlVideos[0].id}</Text> */}

                </View>
            </SafeAreaView>
        )
    }

}

export default Video;