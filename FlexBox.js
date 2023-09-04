import React, { Component } from 'react';
import { Image, Text, View } from 'react-native';

class FlexBox extends Component {
    render(){
        return (
            <View>
                <View style={{ flexDirection: 'row', backgroundColor: 'grey', alignItems: 'center', justifyContent: 'space-evenly'}} >
                    {/* <Text> Materi Flex box</Text> */}
                    <View style={{ backgroundColor: 'yellow' , width: 50, height: 50 }} />
                    <View style={{ backgroundColor: 'green', width: 50, height: 100 }} />
                    <View style={{ backgroundColor: 'blue', width: 50, height: 150 }} />
                    <View style={{ backgroundColor: 'orange', width: 50, height: 200 }} />
                    <View style={{ backgroundColor: 'black', width: 50, height: 250 }} />
                </View>

                <View style= {{ marginTop: 20 }}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10 }} >
                        <Text>Home</Text>
                        <Text>About</Text>
                        <Text>Product</Text>
                        <Text>Admin</Text>
                    </View>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
                        <Image source={{uri:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}}
                        style= {{ width: 150, height: 150, borderRadius: 75 }}
                        />
                        <View style={{ marginLeft: 10 }} >
                            <Text style= {{ fontSize: 20, fontWeight: '900'}}>Ario Febri</Text>
                            <Text>1 M Subscriber</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
}

export default FlexBox