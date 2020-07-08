import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const Navbar =(props)=> {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Chats</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 60,
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#3949ab',
        paddingBottom: 15
    },
    text:{
        color:"white",
        fontSize:20
    }
})
