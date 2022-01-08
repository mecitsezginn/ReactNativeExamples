import React from 'react'
import { View, Text } from 'react-native'
import styles from "./HeaderStyle";

export default function Header(props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Yapılacaklar</Text>
            <Text style={styles.text}>{props.todonumber}</Text>
        </View>
    )
}
