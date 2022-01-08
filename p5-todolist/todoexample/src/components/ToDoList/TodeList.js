import React,{useState} from 'react'
import { View, Text,TouchableOpacity, Touchable } from 'react-native'
import styles from "./ToDoListStyle";

const TodeList = ({mylist},active) => {
    const[toggle, setToggle] = useState(true)

    const myToggle = () =>{
        if (toggle === true){
            setToggle(false)
        }
        else{
            setToggle(true)
        }
    }
    return (
        <View style={toggle ? styles.containerTrue : styles.containerFalse}>
            <TouchableOpacity onPress={myToggle}>
                <Text style={toggle ? styles.textTrue : styles.textFalse}>{mylist.todo}</Text>
            </TouchableOpacity>
            
        </View>
    )
}

export default TodeList;