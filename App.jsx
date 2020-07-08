import React from 'react';
import {StyleSheet, Text, View, ScrollView, FlatList} from 'react-native';
import {Navbar} from "./src/Navbar";
import {AddToDo} from "./src/AddToDo";
import {Massages} from "./src/massages";

export default function App() {
    const [state, setState] = React.useState([
        {id: 1, text: "Hellow"}
    ]);

    const AddMassage = text => {
        setState(prev => [...prev, {
            id: Date.now().toString(),
            text
        }])
    }
    const RemoveMassage =id=>{
        setState(prev =>prev.filter(todo => todo.id !==id )) // filters if return false in filer then remove this id
    }
    return (
        <View>
            <Navbar/>
            <View style={styles.container}>
                <AddToDo AddMassage={AddMassage}/>

                <FlatList
                    keyExtractor={item => item.id.toString()}
                    data={state} //state
                    renderItem={({item}) => <Massages massages={item} onRemove={RemoveMassage}/>}
                    />


            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 30,
        paddingVertical: 20,
    }

});
