//import
import React, { Component, useEffect, useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View, ScrollView } from "react-native"; 
// import sample from './samplePho.jpg'; 
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import PositionComponent from './pages/Position';

//body
//hanya bisa menampilkan 1 komponen yaitu app. dan dijadikan tempat utama atau main component
const App = () => {
  // return hanya boleh mereturn 1 pembungkus
  const [isShow, SetIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      SetIsShow(false)      
    }, 6000)
  }, [])
//willunmount akan muncul ketika terdapat component yang hilang
  return(
    //panggil component 
    <View>
      <ScrollView>
        {/* <SampleComponent /> */}
        {/* <StylingComponent /> */}
        {/* <FlexBox /> */}
        {isShow && <FlexBox />}
        {/* <PositionComponent/> */}
      </ScrollView>
    </View>
  ); 
};






//output
export default App;
// export default Home;