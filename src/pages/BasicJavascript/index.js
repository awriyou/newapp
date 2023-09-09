import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BasicJavascript = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textTitle}>Materi basic Javascript di react native</Text>
    </View>
  )
}

export default BasicJavascript

const styles = StyleSheet.create({
    container: {padding: 20},
    textTitle: {textAlign: 'center'}
});