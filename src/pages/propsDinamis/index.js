import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Story = props => {
    return ( //Membuat Component agar bisa dipanggil terus menerus
        <View style={{ alignItems: 'center', marginRight: 20}}>
            <Image source={{ uri: props.image}}  style={{width: 80, height: 80, borderRadius: 80/2 }} />
            <Text style={{ maxWidth: 50, textAlign: 'center' }}>{props.title}</Text> 
            {/* agar dapat dipanggil dan title nya sesuai keinginan, tambahkan parameter pada component */}
        </View>
    )
}

const PropsDinamis = () => {
  return (
    <View>
      <Text>Materi Component dinamis dengan props</Text>
      <ScrollView horizontal>
        <View style={{ flexDirection: 'row' }}>
            {/* lalu panggil disini props nya */}
            <Story title="Morning Coffee" image="https://plus.unsplash.com/premium_photo-1664391847942-f9c4562ad692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1966&q=80"/> 
            <Story title="Morning Main" image="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>        
            <Story title="Morning Bread" image="https://images.unsplash.com/photo-1567042661848-7161ce446f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"/>
            <Story title="Morning Main" image="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
            <Story title="Morning Bread" image="https://images.unsplash.com/photo-1567042661848-7161ce446f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"/>
            <Story title="Morning Bread" image="https://images.unsplash.com/photo-1567042661848-7161ce446f85?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80"/>
            <Story title="Morning Main" image="https://images.unsplash.com/photo-1474366521946-c3d4b507abf2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"/>
        </View>
      </ScrollView>
    </View>
  )
}


export default PropsDinamis;
const styles = StyleSheet.create({})