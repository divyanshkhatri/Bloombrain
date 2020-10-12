import React, {Component} from 'react';
import {View, Text, Image, Dimensions, SafeAreaView, FlatList, TouchableOpacity, Modal, TouchableWithoutFeedback} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import { LinearGradient } from 'expo-linear-gradient';
import {Actions} from 'react-native-router-flux';

class Hompage extends Component {

    windowWidth = Dimensions.get('window').width;

    state = {
        showModal: false,
        activeIndex:0,
        carouselItems: [
            {
                title:"Item 1",
                image: require("../images/picks.png"),
            },
            {
                title:"Item 2",
                image: require("../images/picks.png")
            },
            {
                title:"Item 3",
                image: require("../images/picks.png")
            },
            {
                title:"Item 4",
                image: require("../images/picks.png")
            },
            {
                title:"Item 5",
                image: require("../images/picks.png")
            },
          ],
        categories: [
            {
                title: "Academics",
                id: '1',
                imageUrl: require('../images/academics.png'),
                backgroundColor: '#173F14',
                gradient1: '#4AD240',
                gradient2: '#177710'
            },

            {   
                title: "Invention",
                id: '2',
                imageUrl: require('../images/invention.png'),
                backgroundColor: '#1A0F43',
                gradient1: '#654FB6',
                gradient2: '#24194C'
            },
                
            {
                title: "Communication",
                id: '3',
                imageUrl: require('../images/comm.png'),
                backgroundColor: '#470C6F',
                gradient1: '#EB68F3',
                gradient2: '#6E25B6'
            }
        ]
    }
        
    renderCategories = ({item}) => {
        return (
            <TouchableOpacity
                onPress = {() => 
                    this.setState({
                        showModal: true
                    })
                }
            >
                <LinearGradient
                    // Button Linear Gradient
                    colors={[ item.gradient1, item.gradient2]}
                    style={{ 
                        paddingTop: 25, 
                        alignItems: 'center',
                        borderRadius: 5,
                        width: Dimensions.get('window').width/2.5,
                        marginLeft: 16,
                        height: 200,
                        borderRadius: 15
                    }}>
                    <Image 
                        source = {item.imageUrl}
                        style = {{
                            height: 22,
                            width: 25
                        }}
                    />
                    <Text
                        style={{
                            marginTop: 5,
                            fontFamily: 'poppinsSemiBold',
                            fontSize: 15,
                            color: '#fff',
                        }}>
                        {item.title}
                    </Text>
                    <Text 
                    style = {{
                        paddingLeft: 4,
                        paddingRight: 4,
                        marginTop: 5,
                        fontFamily: 'poppinsRegular',
                        fontSize: 10,
                        color: '#fff',
                    }}>
                    Get a head start for your school curriculum by our thorough videos.
                    </Text>
                    <Text
                    style = {{
                        paddingLeft: 4,
                        paddingRight: 4,
                        marginTop: 5,
                        fontFamily: 'poppinsRegular',
                        fontSize: 8,
                        alignSelf: "flex-start",
                        paddingTop: 5,
                        paddingLeft: 13,
                        color: '#fff',
                    }}>
                        Total Chapters: 12
                    </Text>
                    <Text
                    style = {{
                        marginTop: 5,
                        fontFamily: 'poppinsRegular',
                        fontSize: 8,
                        alignSelf: "flex-start",
                        paddingTop: -2,
                        paddingLeft: 13,
                        color: '#fff',
                    }}>
                        Total Videos: 140
                    </Text>
                    <Text
                    style = {{
                        backgroundColor: item.backgroundColor,
                        borderColor: 'white',
                        borderRadius: 10,
                        paddingTop: 2.5,
                        width: 75,
                        height: 21,
                        marginTop: 12,
                        marginLeft: 13,
                        textAlign: 'center',
                        fontFamily: 'poppinsSemiBold',
                        fontSize: 11,
                        alignSelf: "flex-start",
                        overflow: 'hidden',
                        color: '#fff',
                    }}>
                        Explore Now
                    </Text>
                </LinearGradient>
            </TouchableOpacity>

        )
    }

    _renderItem({item}){
        return (
            <View style = {{
                height: 200, 
                borderRadius: 15, 
                width: 300, 
                borderBottomWidth: 60, 
                borderBottomColor: '#151515'
                }}>
                <Image
                    source = {item.image} 
                    style = {{
                        borderRadius: 15,
                        borderBottomRightRadius: 0,
                        borderBottomLeftRadius: 0,
                        width: 300,
                        height: 140,
                        // opacity: 0.9,
                        // borderBottomWidth: 20,
                        borderColor: '#ffffff'
                    }}
                />
                <Text
                style = {{
                    margin: 10,
                    marginBottom: 0,
                    fontFamily: "poppinsSemiBold",
                    fontSize: 16,
                    // borderWidth: 2,
                    // borderColor: 'white',
                    color: 'white'
                }}>
                    Vowels and Consonants</Text>

                <Text
                style = {{marginLeft: 10,
                    fontFamily: "poppinsRegular",
                    fontSize: 10,
                    // borderWidth: 2,
                    // borderColor: 'white',
                    color: '#707070',
                }}>
                    English{">"}Class 4</Text>
            </View>
        )
    }

    get pagination () {
        const { carouselItems, activeIndex } = this.state;
        return (
            <Pagination
                containerStyle = {{
                    marginTop: -15,
                    // borderColor: 'white',
                    // borderWidth: 3,
                    paddingBottom: 4,
                }}
                dotsLength={carouselItems.length}
                activeDotIndex={activeIndex}
                //   containerStyle={{ backgroundColor: 'rgba(0, 0, 0, 0.75)' }}
                dotStyle={{
                    width: 7,
                    height: 7,
                    borderRadius: 3.5,
                    //   marginTop: -20,
                    marginHorizontal: -10,
                    backgroundColor: '#32C6F3'
                }}
                inactiveDotStyle={{
                    width: 15,
                    height: 15,
                    borderRadius: 7.5,
                    // marginTop: -20,
                    marginHorizontal: -10,
                    backgroundColor: 'grey'
                    // Define styles for inactive dots here
                }}
            //   inactiveDotOpacity={0.4}
            //   inactiveDotScale={0.6}
            />
        );
    }

    render() {
        return(
            <SafeAreaView 
            style = {{
                // borderWidth: 2,
                // borderColor: 'white',
                flex: 1, 
                flexDirection: "column",
                backgroundColor: '#000',
                paddingTop: Platform.OS === 'android' ? 25 : 0,
                // alignItems: 'center'
                }}>
                <Modal
                    
                    visible = {this.state.showModal}
                    animationType = "fade"
                    transparent = {true}
                    // backgroundColor = '#000'
                    // backdropOpacity= {1}
                    // backdropColor={'green'}
                >
                    <TouchableOpacity onPress = {() => this.setState({showModal: false})}>
                        <SafeAreaView>
                        <Image 
                        style = {{
                            width: 20,
                            height: 20,
                            marginTop: 30,
                            marginLeft: 20
                        }}
                        source = {require("../images/cross.png")}/>
                        </SafeAreaView>
                    </TouchableOpacity>
                    <View
                    style = {{
                        // flex: 1,

                        margin: 20,
                        marginTop: Dimensions.get('window').height/7,
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
                            <TouchableOpacity
                                onPress = { () => {
                                    this.setState({
                                        showModal: false
                                    })
                                    
                                    Actions.subject({subject: 'maths'});
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
                        </View>
                        <View
                            style = {{
                                    flex: 1,
                                    flexDirection: "row",
                                    marginTop: 20,
                                    alignSelf: 'center'
                                }}>
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
                </Modal>
                
                <View style = {{
                    // flex: 1,
                    marginTop: 20, 
                    marginLeft: 16, 
                    flexDirection: 'row',
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
                    <View 
                    style = {{
                        marginLeft: 6
                    }}
                    >
                    <Text 
                    style = {{
                        fontFamily : "poppinsMedium",
                        fontSize: 14,
                        color: 'white',
                        height: 18,
                        // borderColor: 'white',
                        // borderWidth: 3
                    }}>
                        Hi Divyansh
                    </Text>
                    <Text
                    style = {{
                        fontFamily : "poppinsMedium",
                        fontSize: 12,
                        color: '#707070',
                        height: 40,
                    }}
                    >What will you like to learn today?</Text>
                    </View>
                </View>
                <LinearGradient
            // Button Linear Gradient
                    colors={['#1285D1', '#32C1ED', '#6EDEFF']}
                    start={[0, 1]} end={[1, 0]}
                    style = {{
                        
                        alignSelf: 'center',
                        alignItems: 'center',
                        flexDirection: 'row',
                        width: this.windowWidth-32,
                        // borderColor: 'white',
                        // borderWidth: 1,
                        height: 80,
                        paddingLeft: 20,
                        borderRadius: 16,
                        overflow: 'hidden',

                        // justifyContent: "center"
                    }}>
                <Image 
                    style = {{
                        width: 20,
                        height: 20
                    }}
                    source = {require("../images/wifi.png")} 
                />
                <Text
                    style = {{
                        marginLeft: 8,
                        fontFamily: 'poppinsMedium',
                        fontSize: 16,
                        color: 'white'
                    }}
                >Your Class is Live Now!</Text>
                <View
                    style = {{
                        flex: 1,
                        flexDirection: 'row',
                        justifyContent: 'flex-end',
                        paddingRight: 20,
                    }}
                >
                <Image 
                    style = {{
                        // flexShrink: 1,
                        // flex: 1,
                        width: 15,
                        height: 15,
                       
                        // justifyContent: 'flex-end'
                        // borderWidth: 2,
                        // borderColor: 'purple',
                    }}
                    source = {require("../images/arrow.png")} 
                />
                </View>
                </LinearGradient>

                <Text
                    style = {{
                        marginTop: 20, 
                        marginLeft: 16,
                        fontFamily : "poppinsSemiBold",
                        fontSize: 18,
                        color: 'white'
                    }}>
                        Top picks for you</Text>
                <View style = {{
                    marginTop: 20,
                    alignItems: 'center',
                    }}>
                    <Carousel
                        layout={"default"}
                        ref={ref => this.carousel = ref}
                        data={this.state.carouselItems}

                        renderItem={this._renderItem}
                        sliderWidth= {Dimensions.get('window').width}
                        itemWidth={300}
                        enableMomentum={false}
                        lockScrollWhileSnapping
                        // autoplay
                        useScrollView
                        loop
                        autoplayInterval={3000}
                        onSnapToItem = { index => this.setState({activeIndex:index}) } />
                    
                    {this.pagination}
                </View>
                <Text
                style = {{
                    marginLeft: 16,
                    fontFamily : "poppinsSemiBold",
                    fontSize: 18,
                    color: 'white',
                    marginBottom: 20
                }}>
                    Categories
                </Text>
                <FlatList
                    style = {{
                        alignSelf: 'center'
                    }}
                    horizontal = {true}
                    data={this.state.categories}
                    renderItem={this.renderCategories}
                    keyExtractor={(item) => item.id}
                    contentInset={{ right: 16, top: 0, left: 0, bottom: 0 }}
                />
            </SafeAreaView>
        )
    }
}

export default Hompage;