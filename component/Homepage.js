import React, {Component} from 'react';
import {View, Text, Image, Dimensions, PickerIOSComponent, TouchableWithoutFeedback} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';


class Hompage extends Component {

    windowWidth = Dimensions.get('window').width;

    state = {
        activeIndex:0,
        carouselItems: [
            {
                title:"Item 1",
                image: require("../images/picks.png")
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
          ]
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
            <View style = {{flex: 1, flexDirection: "column"}}>
                <View style = {{
                    // flex: 1,
                    marginTop: 36, 
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
                <Text
                    style = {{
                        marginLeft: 16,
                        fontFamily : "poppinsSemiBold",
                        fontSize: 18,
                        color: 'white'
                    }}>
                        Top picks for you</Text>
                <View style = {{marginTop: 20}}>
                <Carousel
                    layout={"default"}
                    ref={ref => this.carousel = ref}
                    data={this.state.carouselItems}

                    renderItem={this._renderItem}
                    sliderWidth={this.windowWidth}
                    itemWidth={this.windowWidth - 70}
                    enableMomentum={false}
                    lockScrollWhileSnapping
                    // autoplay
                    useScrollView
                    loop
                    autoplayInterval={3000}
                    onSnapToItem = { index => this.setState({activeIndex:index}) } />
                
                {this.pagination}
            </View>
            </View>
        )
    }
}

export default Hompage;