import React, {Component} from 'react';
import {SafeAreaView, View, Image, Text, Dimensions, AsyncStorage, Platform, TouchableOpacity} from 'react-native';
import DemoLectures from './DemoLectures';
import { LinearGradient } from 'expo-linear-gradient';
import Recorded from './Recored';
import Modal from 'react-native-modal';
import {Actions} from 'react-native-router-flux';

class Live extends Component {

    state = {
        ds: true,
        rl: false,
        s: [
            {
                label: 'Sub:  ' + 'Science',
                value: 'Science',
            },
            {
                label: 'Sub:  ' + 'English',
                value: 'English',

            },
        ],
        subject: "",
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

    onDemoClicked = () => {
        this.setState({
            ds: true,
            rl: false
        })
        console.log(this.state.ds, this.state.rl)
    }

    render() {
        return (
            <SafeAreaView
                style = {{
                    // flex: 1,
                    height: '100%',
                    // flexDirection: 'column',
                    backgroundColor: 'black',
                    // paddingTop: Platform.OS === 'android' ? 0 : -10
                }}
            >
                <View style = {{
                    // flex: 1,
                    marginTop: 10, 
                    marginLeft: 16, 
                    marginRight: 16,
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    alignItems: 'center'
                    // width: 200, 
                    // borderWidth: 2,
                    // borderColor: 'white'
                }}>
                <View style = {{
                        flexDirection: 'row',
                        justifyContent: 'center',
                        alignItems: 'center'
                }}>
                    <TouchableOpacity
                        onPress = { () => Actions.Homepage()}
                    >
                        <Image
                            style = {{
                                marginRight: 10, 
                                // marginTop: 15,
                                // borderWidth: 1, 
                                // borderColor: 'white',
                                marginLeft: -2,
                                width: 30, 
                                height: 30
                            }}
                        source = {require('../images/back.png')}/>
                    </TouchableOpacity>
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
                </View>
                <TouchableOpacity 
                    style = {{
                        width: 140,
                        // height: 40,
                        // borderWidth: 2, 
                        // borderColor: 'white',
                        // flexDirection: 'row',
                        // flex: 1,
                        alignItems: 'center',
                        // justifyContent: 'flex-end'
                        justifyContent: 'center'
                    }}
                    onPress = {() => {this.setState({showModal: true})}}>
                    <Text style = {{
                        paddingTop: Platform.OS == 'ios' ? 5 : 3,
                        justifyContent: 'center',
                        alignContent: 'center',
                        textAlign: 'center', 
                        alignSelf: 'center',
                        fontFamily: "poppinsSemiBold", 
                        color: "white",
                        fontSize: 14, 
                        // marginTop: 15, 
                        borderRadius: 15,
                        width: 140,
                        height: 30,
                        overflow: 'hidden',
                        // borderColor: 'white', 
                        // borderWidth: 2, 
                        backgroundColor: "#232323"
                    }}>Change Subject</Text>
                </TouchableOpacity>
                {
                    this.state.subject ?
                    <Modal
                    isVisible = {this.state.showModal}
                    animationIn = "pulse"
                    animationOut = "fadeOut"
                    onBackdropPress = {() => {this.setState({showModal: false})}}
                    transparent = {true}
                    
                    // backgroundColor = '#000'
                    // backdropOpacity= {1}
                    // backdropColor={'green'}
                >   
                <View>
                    <View
                    style = {{
                        // flex: 1,
                        // borderColor: 'white',
                        // borderWidth: 2,
                        margin: 20,
                        marginTop: Dimensions.get('window').height/10,
                        backgroundColor: '#232323',
                        borderRadius: 20,
                        padding: 35,
                        width: 335,
                        height: 450,
                        alignSelf: 'center',
                        shadowColor: '#000',
                        shadowOffset: {
                        width: 0,
                        height: 2,
                        },
                        shadowOpacity: 0.75,
                        shadowRadius: 3.84,
                        elevation: 5,
                    }}
                    >   
                        <Text 
                            style = {{
                                fontFamily: 'poppinsBold',
                                color: 'white',
                                fontSize: 20,
                                alignSelf: "center"
                        }}>
                            Choose a Subject
                        </Text>
                        <View 
                            style = {{
                                flexDirection: "row",
                                flex: 1,
                                marginTop: 20,
                                alignSelf: 'center'
                                // justifyContent: 'space-evenly'
                        }}>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        showModal: false
                                    })
                                    AsyncStorage.setItem('subject', 'Science');
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#6EDEFF', '#32C1ED', '#1285D1']}
                                    style={{ 
                                        paddingTop: 25, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 100,
                                        marginLeft: 16,
                                        height: 100,
                                        borderRadius: 15
                                }}>
                                    <Image 
                                        source = {require("../images/flask-with-liquid2.png")}
                                        style = {{
                                            height: 40,
                                            width: 40
                                        }}
                                    />
                                    <Text style = {{
                                        fontFamily: 'poppinsBold',
                                        fontSize: 14,
                                        color: '#fff',
                                        marginTop: 5
                                    }}>
                                        Science
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        showModal: false
                                    })
                                    AsyncStorage.setItem('subject', 'Mathematics');
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#654FB6', '#24194C']}
                                    style={{ 
                                        paddingTop: 25, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 100,
                                        marginLeft: 16,
                                        height: 100,
                                        borderRadius: 15
                                }}>
                                    <Image 
                                        source = {require("../images/maths.png")}
                                        style = {{
                                            height: 40,
                                            width: 40
                                        }}
                                    />
                                    <Text style = {{
                                        fontFamily: 'poppinsBold',
                                        fontSize: 14,
                                        color: '#fff',
                                        marginTop: 5
                                    }}>
                                        Maths
                                    </Text>

                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View
                            style = {{
                                flex: 1,
                                flexDirection: "row",
                                marginTop: 20,
                                alignSelf: 'center'
                            }}>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        showModal: false
                                    })
                                    AsyncStorage.setItem('subject', 'SST');

                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#EB68F3', '#6E25B6']}
                                    style={{ 
                                        paddingTop: 25, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 100,
                                        marginLeft: 16,
                                        height: 100,
                                        borderRadius: 15
                                }}>
                                    <Image 
                                        source = {require("../images/sst.png")}
                                        style = {{
                                            height: 40,
                                            width: 40
                                        }}
                                    />
                                    <Text style = {{
                                        fontFamily: 'poppinsBold',
                                        fontSize: 14,
                                        color: '#fff',
                                        marginTop: 5
                                    }}>
                                        SST
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        showModal: false
                                    })
                                    AsyncStorage.setItem('subject', 'English');
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#4AD240', '#177710']}
                                    style={{ 
                                        paddingTop: 25, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 100,
                                        marginLeft: 16,
                                        height: 100,
                                        borderRadius: 15
                                }}>
                                    <Image 
                                        source = {require("../images/eng.png")}
                                        style = {{
                                            height: 30,
                                            width: 43
                                        }}
                                    />
                                    <Text style = {{
                                        fontFamily: 'poppinsBold',
                                        fontSize: 14,
                                        color: '#fff',
                                        marginTop: 5
                                    }}>
                                        English
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        <View
                            style = {{
                                    flex: 1,
                                    flexDirection: "row",
                                    marginTop: 20,
                                    alignSelf: 'flex-start',
                                    marginLeft: 16
                                }}>
                            <TouchableOpacity
                                // style = {{borderWidth: 2, borderColor: 'white'}}
                                onPress = { () => {
                                    this.setState({
                                        showModal: false
                                    })
                                    AsyncStorage.setItem('subject', 'EVS');
                                }}
                            >
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={['#FFC56E', '#D16B12']}
                                    style={{ 
                                        paddingTop: 25, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 100,
                                        marginLeft: 16,
                                        height: 100,
                                        borderRadius: 15
                                }}>
                                    <Image 
                                        source = {require("../images/evs.png")}
                                        style = {{
                                            height: 40,
                                            width: 40
                                        }}
                                    />
                                    <Text style = {{
                                        fontFamily: 'poppinsBold',
                                        fontSize: 14,
                                        color: '#fff',
                                        marginTop: 5
                                    }}>
                                        EVS
                                    </Text>
                                </LinearGradient>
                            </TouchableOpacity>
                        </View>
                        {/* <View 
                            style = {{
                                flexDirection: "row",
                                flex: 1,
                                marginTop: 20
                                // justifyContent: 'space-evenly'
                                }}>
                                

                            <LinearGradient
                    // Button Linear Gradient
                                colors={[ '#654FB6', '#24194C']}
                                style={{ 
                                    paddingTop: 25, 
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    width: 100,
                                    marginLeft: 16,
                                    height: 100,
                                    borderRadius: 15
                            }}>
                                <Image 
                                    source = {require("../images/flask-with-liquid2.png")}
                                    style = {{
                                        height: 40,
                                        width: 40
                                    }}
                                />
                                <Text style = {{
                                    fontFamily: 'poppinsBold',
                                    fontSize: 14,
                                    color: '#fff',
                                    marginTop: 5
                                }}>
                                    Maths
                                </Text>

                            </LinearGradient>
                            <LinearGradient
                    // Button Linear Gradient
                                colors={[ '#EB68F3', '#6E25B6']}
                                style={{ 
                                    paddingTop: 25, 
                                    alignItems: 'center',
                                    borderRadius: 5,
                                    width: 100,
                                    marginLeft: 16,
                                    height: 100,
                                    borderRadius: 15
                            }}>
                                <Image 
                                    source = {require("../images/flask-with-liquid2.png")}
                                    style = {{
                                        height: 40,
                                        width: 40
                                    }}
                                />
                                <Text style = {{
                                    fontFamily: 'poppinsBold',
                                    fontSize: 14,
                                    color: '#fff',
                                    marginTop: 5
                                }}>
                                    EVS
                                </Text>
                            </LinearGradient>
                            </View>
                            <View
                            style = {{
                                flex: 1, 
                                flexDirection: 'row',
                                marginTop: 20
                            }}>
                                <LinearGradient
                        // Button Linear Gradient
                                    colors={[ '#4AD240', '#177710']}
                                    style={{ 
                                        paddingTop: 25, 
                                        alignItems: 'center',
                                        borderRadius: 5,
                                        width: 100,
                                        marginLeft: 16,
                                        height: 100,
                                        borderRadius: 15
                                }}>
                                    <Image 
                                        source = {require("../images/flask-with-liquid2.png")}
                                        style = {{
                                            height: 40,
                                            width: 40
                                        }}
                                    />
                                    <Text style = {{
                                        fontFamily: 'poppinsBold',
                                        fontSize: 14,
                                        color: '#fff',
                                        marginTop: 5
                                    }}>
                                        English
                                    </Text>
                                </LinearGradient>
                            </View> */}
                        </View>
                        </View>
                    </Modal>
                : null
                }
                </View>
                <View style = {{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginLeft: 40,
                    marginTop: 30,
                    marginRight: 40
                }}>
                    <TouchableOpacity onPress = { () => {
                        this.onDemoClicked()
                    }}>
                    <Text style = {{
                        color: this.state.ds ? '#4ACDF4' : '#383838', 
                        fontFamily: 'poppinsSemiBold'    
                    }}>Demo Schedule</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress = { () => {
                        this.setState({
                            ds: false,
                            rl: true
                        })
                        console.log(this.state.ds, this.state.rl)
                    }}>
                    <Text style = {{
                        color: this.state.rl ? '#4ACDF4' : '#383838',  
                        fontFamily: 'poppinsSemiBold'
                    }}>Recorded Lectures</Text>
                    </TouchableOpacity>
                </View>
                <View style = {{
                    flexDirection: 'row',
                    marginTop: 7
                }}>
                    <View
                        style = {{
                            width: '50%', 
                            height: 3,
                            backgroundColor: this.state.ds ? "#4ACDF4" : "#383838"
                        }}
                    >
                    </View>
                    <View
                        style = {{
                            width: '50%', 
                            height: 3,
                            backgroundColor: this.state.rl ? "#4ACDF4" : "#383838"
                        }}
                    >
                    </View>
                </View>
                    <View>{this.state.ds ? <DemoLectures />: <Recorded />}</View>
            </SafeAreaView>
        )
    }

}

export default Live;