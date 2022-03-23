import React from 'react'
import {View, Text, StyleSheet, FlatList} from 'react-native';


const ListScreen = ()=>{

    const friends = [
        {name:'Frnd #1', age:20, },
        {name:'Frnd #2', age:22, },
        {name:'Frnd #3', age:45, },
        {name:'Frnd #4', age:55, },
        {name:'Frnd #5', age:12, },
        {name:'Frnd #6', age:13, },
        {name:'Frnd #7', age:14, },
        {name:'Frnd #8', age:15, },
        {name:'Frnd #9', age:16, },
        {name:'Frnd #10', age:17, },
    ]
    return(
       <FlatList 
        showsHorizontalScrollIndicator={false}
        data={friends}
        keyExtractor = {(friend) => friend.name}
        renderItem = {({item}) =>{
            
            return <Text style={styles.textStyle}>{item.name} - {item.age}</Text>
        }}
       />
    )
}

export default ListScreen;

const styles = StyleSheet.create({
    textStyle:{
        color:'black',
        marginVertical:50,
        marginHorizontal:10
    }
})