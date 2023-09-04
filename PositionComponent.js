import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react';
import cart from './cart.png';

export default function PositionComponent() {
  return (
    <View style={styles.wrapper}>
        <Text>Materi Position</Text>
      <View style={styles.cartWrapper}>
        <Image source={cart} style={styles.IconCart} />
        <Text style={styles.textNotif}>10</Text>
      </View>
      <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  );
};

const styles = StyleSheet.create({
    wrapper:{
        padding: 20, 
        alignItems: 'center'
    },
    IconCart: {
        width: 50, 
        height: 50
    },
    cartWrapper: { 
        borderWidth: 1, 
        borderColor: '#4398D1', 
        width: 93, 
        height: 93, 
        borderRadius: 93/2, 
        justifyContent:'center', 
        alignItems:'center',
        position: 'relative', 
    },
    text: {
        fontSize: 12, 
        color: '#777777', 
        fontWeight: '900', 
        marginTop:10
    },
    textNotif: {
        fontSize: 12, 
        color: 'white', 
        backgroundColor: '#6fcf97', 
        padding: 4, 
        borderRadius: 25, 
        width: 24, 
        height: 24,
        position: 'absolute',
        top: 0,
        right: 0,
    },
});