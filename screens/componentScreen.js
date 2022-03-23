import React from 'react';
import {View, Text, StyleSheet} from 'react-native'

const ComponentScreen = () =>{
    return <Text style={styles.textSize}>Hello sir</Text>
    
}

export default ComponentScreen;

const styles = StyleSheet.create({
    textSize:{
        fontSize:30
    }
})