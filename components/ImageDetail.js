import React from 'react'
import {View, Text, StyleSheet, Image} from 'react-native'

const ImageDetail = ({title, imageSource, imageScore}) =>{
    console.log(imageSource)
    return (
        <View>
            <Image source={imageSource} />
            <Text style={styles.titleText}>{title}</Text>
            <Text>Image score: {imageScore}</Text>
        </View> 
    )
}

export default ImageDetail;

const styles = StyleSheet.create({
    titleText:{
        fontSize:15
    }
})