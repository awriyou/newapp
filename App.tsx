//import
import React from 'react';
import { Image, Text, TextInput, View } from "react-native";



//body
//hanya bisa menampilkan 1 komponen yaitu app
const App = () => {
  // return hanya boleh mereturn 1 pembungkus
  return(
    <View>
      <View style={{width: 80, height:80, backgroundColor: 'blue'}}/>
      <Text>Hallo World</Text>
      <Home/>
      <Text>Hallo World</Text>
      <Text>Hallo World</Text>
      
      <Photo />
      <TextInput style={{borderWidth: 1 }}/>
    </View>
  ); 
};


const Home = () => {
  return <Text>Febri</Text>;
};

const Photo = () => {
  return <Image source={{ uri: 'https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80' }} 
  style={{ width: 100, height: 100 }}
  />;
};

//output
export default App;
// export default Home;