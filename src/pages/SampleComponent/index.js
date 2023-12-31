import React, {Component} from 'react';
import {View, Text, TextInput, Image} from 'react-native';

//membuat component untuk dipanggil di app main component
const SampleComponent = () => {
    return (
      <View>
        <View style={{width: 80, height:80, backgroundColor: 'blue'}}/>
        <Text>Hallo World</Text>
        <Home/>
        <Text>Hallo World</Text>
        <Text>Hallo World</Text>
        
        <Photo />
        <TextInput style={{borderWidth: 1 }}/>
        <BoxGreen/>
        <Profile/>
      </View>
    )
  }
  
  //Functional Component
  const Home = () => {
    return <Text>Febri</Text>;
  };
  
  const Photo = () => {
    return <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80' }} 
    style={{ width: 100, height: 100 }}
    />;
  };
  // ================
  
  //membuat component dengan class component, harus dengan capital
  class BoxGreen extends Component{
    render() {
        return <Text>Ini Component dari class component</Text>;
    }
  }
  class Profile extends Component{
    render() {
        return (
          <View>
            <Image source={{uri: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80'  }} 
              style={{ width: 100, height: 100 }} />
            <Text style={{ color: 'blue', fontSize: 24 }}>Kucing</Text>
          </View>
        );
    }
  }
  
  export default SampleComponent;