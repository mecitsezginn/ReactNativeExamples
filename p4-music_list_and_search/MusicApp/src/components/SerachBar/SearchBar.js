import React from 'react'
import { View, Text,TextInput } from 'react-native'
import styles from './SearchBarStyles';

export default function SearchBar(props) {
    
    return (
        <View style={styles.container}>
            <TextInput 
                style={{fontSize:18}}
                placeholder='Ara...'
                onChangeText={props.onSearch}
            />
        </View>
    )
}
