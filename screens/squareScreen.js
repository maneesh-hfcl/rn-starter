import React, {useState} from 'react'
import {View, Text, StyleSheet} from 'react-native'
import ColorCounter from '../components/colorCounter'

const SquareScreen = ()=>{
    const[red, setRed] = useState(0);
    const[blue, setBlue] = useState(0);
    const[green, setGreen] = useState(0)
    const COLOR_INCREMENT = 15;

    const setColor = (color, change)=>{
        if(color==='red')
        {
            if(red + change > 255 || red + change < 0)
            {
                return   
            }
            else{
                setRed(red + change)
            }
        }
        else if(color==='blue')
        {
            if(blue + change > 255 || blue + change < 0)
            {
                return   
            }
            else{
                setBlue(blue + change)
            }
        }
        else if(color==='green')
        {
            if(green + change > 255 || green + change < 0)
            {
                return   
            }
            else{
                setGreen(green + change)
            }
        }
    }

    console.log(`rgb(${red}, ${green}, ${blue})`);
    

    return <View>
        <ColorCounter color="Red" 
            onIncrease={() => setColor('red', COLOR_INCREMENT)}  
            onDecrease={()=> setColor('red', -1*COLOR_INCREMENT)}
            />
        <ColorCounter color="Blue"
            onIncrease={() => setColor('blue', COLOR_INCREMENT)}
            onDecrease={()=> setColor('blue', -1*COLOR_INCREMENT)}
        />
        <ColorCounter color="Green" 
            onIncrease={()=> setColor('green',  COLOR_INCREMENT)}
            onDecrease={()=> setColor('green', -1*COLOR_INCREMENT)}
        />
        <View style={{height:200, width:200, backgroundColor:`rgb(${red},${green}, ${blue})`}}></View>
    </View>
}

export default SquareScreen;

const styles = StyleSheet.create({})