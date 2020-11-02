import React, {Component} from 'react';
import {View, Text, SafeAreaView, ScrollView, Dimensions, TouchableOpacity, Keyboard, TextInput, Image, StyleSheet, Platform, Animated} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Actions } from 'react-native-router-flux';
import GetLocation from 'react-native-get-location'


class Register extends Component {

    state = {
        hidePassword: false,
        hideConfirmPassword: false,
        padding: new Animated.Value(0),
        fullName: "",
        email: "",
        password: "",
        confirmPassword: "",
        mob: "",
        city: "",
    }

    componentDidMount() {
        this.keyboardDidShowListener = Keyboard.addListener(
          'keyboardDidShow',
          this._keyboardDidShow,
        );
        this.keyboardDidHideListener = Keyboard.addListener(
          'keyboardDidHide',
          this._keyboardDidHide,
        );

        GetLocation.getCurrentPosition({
            enableHighAccuracy: true,
            timeout: 15000,
        })
        .then(location => {
            console.log(location);
        })
        .catch(error => {
            const { code, message } = error;
            console.warn(code, message);
        })

    }

    componentWillUnmount() {
        this.keyboardDidShowListener.remove();
        this.keyboardDidHideListener.remove();
    }

    _keyboardDidShow = () => {
        Animated.timing( this.state.padding, { toValue: -170, duration: 100, useNativeDriver: false}).start();
        // this.setState({padding: 80})
    }
    
    _keyboardDidHide = () => {
        Animated.timing( this.state.padding, { toValue: 0, duration: 100, useNativeDriver: false}).start();
        // this.setState({padding: 120})
    }

    onChangeFullName = (fullName) => {
        console.log(this.state.fullName);
        this.setState({
            fullName
        })
    }

    onChangeEmail = (email) => {
        console.log(this.state.email);
        this.setState({
            email
        })
    }

    onChangePassword = (password) => {
        this.setState({
            password
        })
        this.setState({hidePassword: true})
        console.log(this.state.password);
    }

    onChangeConfirmPassword = (confirmPassword) => {

        this.setState({hideConfirmPassword: true})
        console.log(this.state.confirmPassword);
        this.setState({
            confirmPassword
        })
    }

    onChangeMob = (mob) => {
        console.log(this.state.mob);
        this.setState({
            mob
        })
        
    }

    onChangeCity = (city) => {
        this.setState({
            city
        })
        console.log(this.state.city);
    }

    render() {
        return (
            <SafeAreaView
                style = {{
                    // marginTop: -15,
                    // flex: 1,
                    height: '110%',
                    // flexDirection: 'column',
                    backgroundColor: 'black',
                    paddingTop: Platform.OS === 'android' ? 15 : 0
                }}
            >
                <ScrollView
                    
                >
                    <Animated.View style = {{marginTop: this.state.padding}}>
                    <View style = {{}}>
                    <LinearGradient
                            // Button Linear Gradient
                            colors={[ '#004BAD', '#4ACDF4']}
                            start={[0, 1]} end={[1, 0]}
                            style={{ 
                                paddingLeft: 20, 
                                // marginTop: -10,
                                // borderRadius: 5,
                                width: Dimensions.get('window').width,
                                // marginLeft: 16,
                                height: 115,
                                // borderRadius: 15
                        }}>
                            <TouchableOpacity
                                onPress = { () => Actions.pop()}
                            >
                            </TouchableOpacity>
                            <Text
                            style = {{
                                marginTop: Platform.OS == 'android' ? 0 : 8,
                                height: Platform.OS == 'android' ? 60: 50,
                                // borderColor: 'white',
                                // borderWidth: 2,
                                paddingTop: 15,
                                fontFamily: 'poppinsBold',
                                color: 'white',
                                fontSize: 25
                            }}
                            >
                                Register
                            </Text>
                            <Text
                                style = {{
                                    fontFamily: 'poppinsMedium',
                                    color: 'white',
                                    fontSize: 14,
                                    paddingTop: Platform.OS == "android" ? 0 : 8,
                                    paddingRight: 80,
                                }}
                            >
                                Become a part of the Bloom Brain family,
                                India's No. 1 Education app!
                            </Text>
                        </LinearGradient>
                        <Animated.View
                            style = {{
                                flex: 1,
                                justifyContent: 'center',
                                // margin: 10,
                                marginTop: 30,
                            }}
                        >
                        {/* <View style = {{
                            flex: 1,
                            justifyContent: 'center',
                            // margin: 10,
                            marginTop: 30,
                        }}> */}
                            <Text style = {{
                                marginLeft: 30,
                                color: '#4ACDF4',
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 11,
                                // marginTop: 15,
                                marginBottom: 3,
                            }}
                            >Full Name</Text>
                            <View style={styles.sectionStyle}>
                                <TextInput
                                    style = {{ flex: 1, fontFamily: 'poppinsMediumItalic', fontSize: 15, marginLeft: 20, alignItems: 'center', paddingTop: 0, paddingBottom: 0, color: 'white'}}
                                    value = {this.state.fullName}
                                    onChangeText = {(value) => {this.onChangeFullName(value)}}
                                    placeholder="Full Name"
                                    placeholderTextColor= '#707070'
                                    underlineColorAndroid="transparent"
                                    placeholderStyle = {{
                                        
                                    }}
                                />
                            </View>
                            <Text style = {{
                                marginLeft: 30,
                                color: '#4ACDF4',
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 11,
                                // marginTop: 15,
                                marginBottom: 3,
                            }}
                            >Email</Text>
                            <View style={styles.sectionStyle}>
                                <TextInput
                                    style={{flex: 1, fontFamily: 'poppinsMediumItalic', fontSize: 15, marginLeft: 20, paddingTop: 0,paddingBottom: 0, alignItems: 'center', color: 'white'}}
                                    value = {this.state.email}
                                    onChangeText = {(value) => {this.onChangeEmail(value)}}
                                    placeholder="Email"
                                    placeholderTextColor = '#707070'
                                    underlineColorAndroid = "transparent"    
                                />
                            </View>
                            <Text style = {{
                                marginLeft: 30,
                                color: '#4ACDF4',
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 11,
                                // marginTop: 15,
                                marginBottom: 3,
                            }}
                            >Password</Text>
                            <View style={styles.sectionStyle}>
                                <TextInput
                                    style={{flex: 1, fontFamily: 'poppinsMediumItalic', fontSize: 15, paddingTop: 0,paddingBottom: 0, marginLeft: 20, alignItems: 'center', color: 'white'}}
                                    value = {this.state.password}
                                    onChangeText = {(value) => {this.onChangePassword(value)}}
                                    placeholder="Password"
                                    placeholderTextColor = '#707070'
                                    underlineColorAndroid = "transparent"    
                                    secureTextEntry = {this.state.hidePassword}
                                />
                            </View>
                            <Text style = {{
                                marginLeft: 30,
                                color: '#4ACDF4',
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 11,
                                // marginTop: 15,
                                marginBottom: 3,
                            }}
                            >Confirm Password</Text>
                            <View style={styles.sectionStyle}>
                                <TextInput
                                    style={{flex: 1, fontFamily: 'poppinsMediumItalic', fontSize: 15, paddingTop: 0,paddingBottom: 0, marginLeft: 20, alignItems: 'center', color: 'white'}}
                                    value = {this.state.confirmPassword}
                                    onChangeText = {(value) => {this.onChangeConfirmPassword(value)}}
                                    placeholder="Confirm Password"
                                    placeholderTextColor = '#707070'
                                    underlineColorAndroid = "transparent"   
                                    secureTextEntry = {this.state.hideConfirmPassword} 
                                />
                            </View>
                            <Text style = {{
                                marginLeft: 30,
                                color: '#4ACDF4',
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 11,
                                // marginTop: 15,
                                marginBottom: 3,
                            }}
                            >Mobile Number</Text>
                            <View style={styles.sectionStyle}>
                                <TextInput
                                    style={{flex: 1, fontFamily: 'poppinsMediumItalic', fontSize: 15, paddingTop: 0,paddingBottom: 0, marginLeft: 20, alignItems: 'center', color: 'white'}}
                                    value = {this.state.mob}
                                    onChangeText = {(value) => {this.onChangeMob(value)}}
                                    placeholder="Mobile Number"
                                    placeholderTextColor = '#707070'
                                    underlineColorAndroid = "transparent"    
                                />
                            </View>
                            <Text style = {{
                                // marginTop: 10,
                                marginBottom: 3,
                                marginLeft: 30,
                                color: '#4ACDF4',
                                fontFamily: 'poppinsSemiBold',
                                fontSize: 11,
                            }}
                            >City</Text>
                            <View style={styles.sectionStyle}>
                                <TextInput
                                    style={{flex: 1, fontFamily: 'poppinsMediumItalic', fontSize: 15, marginLeft: 20, paddingTop: 0,paddingBottom: 0, justifyContent: "center", color: 'white'}}
                                    value = {this.state.city}
                                    onChangeText = {(value) => {this.onChangeCity(value)}}
                                    placeholder="City"
                                    placeholderTextColor = '#707070'
                                    underlineColorAndroid = "transparent"    
                                />
                            </View>
                        </Animated.View>
                    </View>
                    <View
                        style = {{
                            backgroundColor: '#4ACDF4',
                            width: 360,
                            alignSelf: 'center',
                            borderRadius: 15,
                            height: 50,
                            justifyContent: 'center',
                            marginTop: 35
                        }}
                    >
                        <TouchableOpacity
                            onPress = {() => {Actions.Favourite()}}
                        >
                            <Text 
                                style = {{
                                    fontFamily: 'poppinsSemiBold',
                                    fontSize: 22,
                                    textAlign: 'center',
                                    color: 'white',
                                    
                                    // backgroundColor: '#4ACDF4',
                                }} 
                            >
                                Register
                            </Text>
                        </TouchableOpacity>
                    </View>
                    <TouchableOpacity onPress = {() => {Actions.Signin()}}>
                        <Text
                            style = {{
                                fontFamily: "poppinsBold",
                                // color: 'white',
                                textAlign: 'center',
                                fontSize: 16,
                                marginTop: 15,
                                // textDecorationLine: 'underline',
                                // textDecorationStyle: "solid",
                                color: "#4acdf4"
                            }}  
                        >Sign In
                        </Text>
                    </TouchableOpacity>
                    </Animated.View>
                </ScrollView>

            </SafeAreaView>
        )
    }

}

const styles = StyleSheet.create({
    
    sectionStyle: {
        flexDirection: 'row',
        backgroundColor: '#1C1C1C',
        borderWidth: 0.5,
        borderColor: '#1C1C1C',
        height: 40,
        borderRadius: 8,
        margin: 7,
        marginLeft: 25,
        marginRight: 25
    },
    imageStyle: {
    //   padding: 10,
        margin: 5,
        marginLeft: 20,
        height: 17,
        width: 17,
        resizeMode: 'stretch',
        alignItems: 'center',
    },
});


export default Register;