import React from 'react';
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const HomeScreen = ({navigation})=>{
   // console.log(props.navigation);
    return(
        <View>
            <Text>Home screen comes here</Text>
            <Button 
                title='Go to components demo' 
                onPress={() => navigation.navigate('Component')} 
            />
            <TouchableOpacity onPress={() => navigation.navigate('List') }>
                <Text>Go to list demo</Text>
            </TouchableOpacity>

            <Button 
                title='Go to Image screen'
                onPress={() => navigation.navigate("ImageScreen")}
            />
            <Button
                title='Go to counter screen'
                onPress={()=> navigation.navigate("CounterScreen")}
            />
            <Button 
                title='Go to color screen'
                onPress={() => navigation.navigate("ColorScreen")}
            />
            <Button 
                title='Go to square screen'
                onPress={() => navigation.navigate("SquareScreen")}
            />
        </View>
    )
}

export default HomeScreen;

const styles = StyleSheet.create({
    
})