import React, { Component } from 'react';
import { Image, StyleSheet, Text, TextInput, View, ScrollView } from "react-native"; 
import sample from '../../assets/image/samplePho.jpg'; 

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
  });
  

  export default StylingComponent;