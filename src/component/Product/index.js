import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import gameLaptop from '../../assets/image/samplePho.jpg'; 

const Product = (props) => {
  return (
        <View 
          style={styles.wrapper} >
           {/* mengambil image dari folder local  */}
          <Image source={gameLaptop} style={styles.imgSty} />
          <Text style={styles.productName} >New Macbook Pro 2023</Text>
          <Text style={styles.price} >19.000.000</Text>
          <Text style={styles.location} >Jakarta Barat</Text>
          <TouchableOpacity onPress={props.onButtonPress}>
            <View 
                style={styles.buttonWrapper} >
                <Text 
                style={styles.buttonText} >
                    BELI
                </Text>
            </View>
          </TouchableOpacity> 
        </View>
  )
}

export default Product

const styles = StyleSheet.create({
    wrapper: { 
        padding: 12, 
        backgroundColor: '#f2f2f2',
        width: 212,
        borderRadius: 8,
        marginLeft: 12,
    },
    imgSty: { 
        width: 188, 
        height: 177, 
        borderRadius: 8 
    },
    productName : {
        fontSize: 14, fontWeight: '900', marginTop: 16 
    },
    price : { fontSize: 12, fontWeight: 'bold', color: '#f2994a', marginTop: 12 },
    location : { fontSize: 12, fontWeight: '600', marginTop: 12},
    buttonWrapper : { 
        backgroundColor: '#6fcf97',
        paddingVertical: 6,
        borderRadius: 25, 
        marginTop: 20,  
    },
    buttonText : {  
        fontSize: 14,
        fontWeight:'bold' ,
        color: 'white',
        textAlign: 'center'
    }  


})