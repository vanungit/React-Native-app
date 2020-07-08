import React from 'react';
import {StyleSheet, View,TextInput,Button} from 'react-native';

export const AddToDo =({AddMassage})=> {

    const [state,setstate]= React.useState("")

    const pressHendler =()=>{
        if(!state.trim()){
            return
        }
        AddMassage(state)
        setstate("")
    }
    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                onChangeText={setstate}
                value={state}
                placeholder={"add massage"}
                autoCorrect={false}
                autoCapitalize='none'
               />
            <Button title={"Add Massage"} onPress={pressHendler}/>
        </View>
    );
}

const styles = StyleSheet.create({
    block: {
        flexDirection:"row", //inline
        justifyContent:"space-between",
        alignItems:"center",
    },
    input:{
        width:"70%",
        borderStyle:"solid",
        borderBottomColor:"#3949ab",
        borderBottomWidth:2,
        padding:10,
    }
});
