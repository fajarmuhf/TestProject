import React from "react";
import { StyleSheet,View,Text,Button, TextInput, Alert } from "react-native";
import { globalStyles} from '../global.js'

export default function Profile(){
    const pressHandler = () => {
        Alert.alert('proses diklik');
    }

    return (
        <View style={globalStyles.container}>
            <Text>Kota Pengirim:</Text>
            <TextInput style={globalStyles.input}></TextInput>
            <Text>Kota Penerima:</Text>
            <TextInput style={globalStyles.input}></TextInput>
            <Text>Provinsi:</Text>
            <TextInput style={globalStyles.input}></TextInput>
            <Text>Kecamatan:</Text>
            <TextInput style={globalStyles.input}></TextInput>
            <Text>Kelurahan:</Text>
            <TextInput style={globalStyles.input}></TextInput>
            <Button title="Proses" onPress={pressHandler}/>
        </View>
    )
}