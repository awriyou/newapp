//import
import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from "react-native"; 
import sample from './sample.jpg'; 


//body
//hanya bisa menampilkan 1 komponen yaitu app. dan dijadikan tempat utama atau main component
const App = () => {
  // return hanya boleh mereturn 1 pembungkus
  return(
    //panggil component 
    <StylingComponent />
  ); 
};


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

//Mencoba Styling
const StylingComponent = () => {
  return (
    <View>
      <Text 
      //styling menggunakan class stylesheet tanpa {}
        style={styles.text} >Styling Component</Text>
      <View 
        style={{ 
          width: 100, 
          height: 100, 
          backgroundColor: 'yellow', 
          borderWidth: 2, 
          borderColor: 'blue',
          marginTop: 20,
          marginLeft: 20, 
        }} />

      <View 
        style={{ 
          padding: 12, 
          backgroundColor: '#f2f2f2',
          width: 212,
          borderRadius: 8,
          marginLeft: 12,
         }} >
         {/* mengambil image dari folder local  */}
        <Image source={sample} style={{ width: 188, height: 177, borderRadius: 8 }} />
        <Text style={{ fontSize: 14, fontWeight: '900', marginTop: 16 }} >New Macbook Pro 2023</Text>
        <Text style={{ fontSize: 12, fontWeight: 'bold', color: '#f2994a', marginTop: 12 }} >19.000.000</Text>
        <Text style={{ fontSize: 12, fontWeight: '600', marginTop: 12}} >Jakarta Barat</Text>
        <View 
          style={{ 
            backgroundColor: '#6fcf97',
            paddingVertical: 6,
            borderRadius: 25, 
            marginTop: 20,  
          }} >
          <Text 
            style={{  
              fontSize: 14,
              fontWeight:'bold' ,
              color: 'white',
              textAlign: 'center'
            }} >
              BELI
            </Text>
        </View>
      </View>
    </View>    
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'green',
    marginLeft: 20,
    marginTop: 40,
  },
})



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
  render(): React.ReactNode {
      return <Text>Ini Component dari class component</Text>;
  }
}
class Profile extends Component{
  render(): React.ReactNode {
      return (
        <View>
          <Image source={{uri: 'https://images.unsplash.com/photo-1529778873920-4da4926a72c2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1936&q=80'  }} 
            style={{ width: 100, height: 100 }} />
          <Text style={{ color: 'blue', fontSize: 24 }}>Kucing</Text>
        </View>
      );
  }
}


//output
export default App;
// export default Home;