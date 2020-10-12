import React, {Component} from 'react';
import {View, SafeAreaView, Text, Dimensions, ImageBackground, Image} from 'react-native';
import RNPickerSelect, { defaultStyles } from 'react-native-picker-select';
import { LinearGradient } from 'expo-linear-gradient';
import { FlatList, ScrollView } from 'react-native-gesture-handler';

export default class Subject extends Component {

    state = {
        numbers: [
            {
              label: '1',
              value: 1,
              color: 'orange',
            },
            {
              label: '2',
              value: 2,
              color: 'green',
            },
          ],
            itemDetails: [
            {
                _id: "5e12905eb10fe53808d1ca5a",
                categories: [{id: '1', cat: '1', url: [require('')]}, {id: '2', cat: '2'}, {id: '3', cat: '3'}, {id: '4', cat: '4'}],
                nameXquantity: "Lehsun Adrak x100",
                individualTotal: 155
            },
            {
                _id: "5e12905eb10fe53808d1ca59",
                categories: [{id: '1', cat: '1'}, {id: '2', cat: '2'}, {id: '3', cat: '3'}, {id: '4', cat: '4'}],
                nameXquantity: "Lehsun x50",
                individualTotal: 25
            },
            {
                _id: "5e12905eb10fe53808d1ca58",
                categories: [{id: '1', cat: '1'}, {id: '2', cat: '2'}, {id: '3', cat: '3'}, {id: '4', cat: '4'}],
                nameXquantity: "Lehsun Adrak Dhaniya Shimla mirch x Infinity",
                individualTotal: 9969
            }
            ]    
    }

    render() {
        
        return (
            <SafeAreaView
                style = {{
                    flex: 1,
                    // flexDirection: 'column',
                    backgroundColor: 'black',
                    paddingTop: Platform.OS === 'android' ? 25 : 0
                }}
            >
                <View>
                <LinearGradient
                        // Button Linear Gradient
                        colors={[ '#223467', '#2F61EA']}
                        start={[0, 1]} end={[1, 0]}
                        style={{ 
                            paddingLeft: 20, 
                            paddingTop: 65,
                            // borderRadius: 5,
                            width: Dimensions.get('window').width,
                            // marginLeft: 16,
                            height: 135,
                            // borderRadius: 15
                    }}>

                        <Text
                        style = {{
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
                            {/* <Text>
                                Hi
                            </Text> */}
                            </View>
                        )
                    }}
                >

                </RNPickerSelect>
                <FlatList
                    style = {{
                        borderColor: 'white',
                        borderWidth: 2
                    }}
                    data = {this.state.itemDetails}
                    renderItem = { ({item}) => (
                        <View>
                            <FlatList
                                data = {item.categories}
                                renderItem = {({item}) => 
                                        <View>
                                            <Text
                                            style = {{
                                                    fontFamily: 'poppinsMedium',
                                                    fontSize: 500,
                                                    color: 'white'
                                                }}
                                            >{item.id}</Text>
                                        </View>
                
                                }
                                    // item.categories.map((cate) => {
                                    //     return (
                                    //         (
                                    //         <View>
                                    //             <Text
                                    //                 style = {{
                                    //                     fontFamily: 'poppinsMedium',
                                    //                     fontSize: 18,
                                    //                     color: 'white'
                                    //                 }}
                                    //             >{cate.cat}</Text>
                                    //         </View>
                                    //         )
                                    //     )
                                    // })

                                horizontal = {true}
                                keyExtractor = {item.categories.id}

                            >

                            </FlatList>
                        </View>
                    )}
                    keyExtractor = {item => item._id}
                >
                    
                </FlatList>

            </SafeAreaView>
        )
    }

}