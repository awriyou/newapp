import { Button, StyleSheet, Text, View } from 'react-native'
import React, { Component, useState } from 'react'

//membuat component dinamis menggunakan state dari functional component
const Counter = () => {
    const [number, setNumber] = useState(0)
    return (
        <View>
            <Text>{number}</Text>
            <Button title="Tambah" onPress={() => setNumber(number + 1)}/>
        </View>
    );
};

//membuat component dinamis menggunakan state dari class component
class CounterClass extends Component{
    state = {
        number: 0
    }
    render(){
        return(
            <View>
                <Text>{this.state.number}</Text>
                <Button title="Tambah" onPress={() => this.setState({ number: this.state.number + 1 })}/>
            </View>
        )
    }
}


const StateDinamis = () => {
  return (
    <View style={styles.wrapper}>
        <Text style={styles.textTitle}>
            Materi Component dinamis dengan State
        </Text>
        <Text style={styles.titleSect}>Functional Component</Text>
        <Counter />
        <Counter />
        <Text style={styles.titleSect}>Class Component</Text>
        <CounterClass />
        <CounterClass />
    </View>
  );
};

export default StateDinamis

const styles = StyleSheet.create({
    wrapper: {
        padding: 20,
    },
    textTitle: {
        textAlign: 'center',
    },
    titleSect: {
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 20,
    }
});