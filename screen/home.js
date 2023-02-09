import React,{ useState } from "react";
import { StyleSheet,View,Text,Button } from "react-native";
import { globalStyles} from '../global.js'

export default function Home({ navigation}){
    const [name,setName] = useState('Fajar');

    const pressHandler = () => {
        navigation.navigate('Profile');
    }

    return (
        <View style={globalStyles.container}>
            <Text>Helo Welcome, {name}</Text>
            <Button title="Mulai" onPress={pressHandler}/>
        </View>
    )
}