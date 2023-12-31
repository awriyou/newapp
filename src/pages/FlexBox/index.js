import React, { Component, useEffect, useState } from 'react';
import { Image, Text, View } from 'react-native';

// class FlexBox extends Component {
//     constructor(props){
//         super(props);
//         console.log('ini adalah constructor');
//         this.state = {
//             subscriber: 1000,
//         }
//     }

//     componentDidMount(){
//         console.log("componentDidMount");
//         setTimeout(() =>{
//             this.setState({
//                 subscriber: 5000,
//             })
//         }, 2000);
//         //Jika terdapat perubahan pada didmount, nantinya baru akan muncul lagi render lalu baru muncul didupdate karena ada perubahan
//     }

//     //did update tidak akan muncul di console jika tidak ada perubahan pemrosesan
//     componentDidUpdate(){
//         console.log('componentDidUpdate')
//     }

//     componentWillUnmount(){
//         console.log("ComponentWillUnmount")
//     }

//     render(){
//         console.log('Render');
//         return (
//             <View>
//                 <View style={{ flexDirection: 'row', backgroundColor: 'grey', alignItems: 'center', justifyContent: 'space-evenly'}} >
//                     {/* <Text> Materi Flex box</Text> */}
//                     <View style={{ backgroundColor: 'yellow' , width: 50, height: 50 }} />
//                     <View style={{ backgroundColor: 'green', width: 50, height: 100 }} />
//                     <View style={{ backgroundColor: 'blue', width: 50, height: 150 }} />
//                     <View style={{ backgroundColor: 'orange', width: 50, height: 200 }} />
//                     <View style={{ backgroundColor: 'black', width: 50, height: 250 }} />
//                 </View>

//                 <View style= {{ marginTop: 20 }}>
//                     <View style={{ flexDirection: 'row', justifyContent: 'space-evenly', marginBottom: 10 }} >
//                         <Text>Home</Text>
//                         <Text>About</Text>
//                         <Text>Product</Text>
//                         <Text>Admin</Text>
//                     </View>
//                     <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center'}} >
//                         <Image source={{uri:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80'}}
//                         style= {{ width: 150, height: 150, borderRadius: 75 }}
//                         />
//                         <View style={{ marginLeft: 10 }} >
//                             <Text style= {{ fontSize: 20, fontWeight: '900'}}>Ario Febri</Text>
//                             <Text>{this.state.subscriber} Subscriber</Text>
//                         </View>
//                     </View>
//                 </View>
//             </View>
//         )
//     }
// }


//MEMAHAMI LIFECYCLE FUNCTIONAL COMPONEN SAMA SEPERTI FLEXBOX CLASS COMPONENT
 const FlexBox = () => {
    const [subscriber, setSubscriber] = useState(200);
    useEffect(() => {
        console.log("DidMount") //Langsung didmount karna tidak ada method render pada hooks atau functional component
        setTimeout(() => {
            setSubscriber(400);
        }, 2000);
        return() => {
            console.log('DidUpdate')
        }
    }, [subscriber]) // kalau ingin melihat perubahan masukan parameter subscriber disini dan diletakan di return, jika hanya ingin melihat didmount nya tidak perlu menampilkan disini

    // useEffect(() => {
    //     console.log("DidUpdate");
    //     setTimeout(() => {
    //         setSubscriber(400);
    //     }, 2000);
    // }, [subscriber]) //Useeffect kedua ini akan dijalankan ketika terdapat update seperti isinya. dan bisa di singkatkan jadi masuk kedalam useeffect diatas



    return(
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
                            <Text>{subscriber} Subscriber</Text>
                        </View>
                    </View>
                </View>
            </View>
    )
 }


export default FlexBox