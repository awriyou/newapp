import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import cart from '../../assets/icon/cart.png';

const Cart = (props) => {
  return (
    <View>
        <View style={styles.cartWrapper}>
            <Image source={cart} style={styles.IconCart} />
            <Text style={styles.textNotif}>{props.qty}</Text>
        </View>
        <Text style={styles.text}>Keranjang Belanja Anda</Text>
    </View>
  )
}

export default Cart

const styles = StyleSheet.create({
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