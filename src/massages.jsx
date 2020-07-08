import React from 'react';
import {StyleSheet, View,Text,TouchableOpacity} from 'react-native';

export const Massages =({massages,onRemove})=> {

    return (
        <TouchableOpacity activeOpacity={0.5}
                          onPress={()=>console.log("Press",massages.id)}
                           onLongPress={()=>onRemove(massages.id)}
        >
        <View style={styles.massage}>
            <Text>{massages.text}</Text>
        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    massage: {
        flexDirection:"row",
        alignItems:"center",
        padding:15,
        borderWidth:1,
        borderColor:"#eee",
        borderRadius:1
    }
});
