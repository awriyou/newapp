import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import Cart from '../../component/Cart'
import Product from '../../component/Product'

const Communication = () => {
    const [totalProduct, setTotalProdduct] = useState(0)
  return (
    <View style= {styles.container}>
      <Text style={styles.textTitle}>Materi Communication antar Component</Text>
      <Cart qty = {totalProduct}/>
      <Product onButtonPress={() => setTotalProdduct(totalProduct + 1)}/>
    </View>
  )
}

export default Communication

const styles = StyleSheet.create({
    container : {padding: 20},
    textTitle : {textAlign: 'center'},
})