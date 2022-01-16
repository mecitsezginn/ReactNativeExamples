import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import styles from "./HeaderStyle";
import Icon from 'react-native-vector-icons/AntDesign';

export default function Header() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Icon
                    name='arrowleft'
                    size={30}
                    color="#000"
                />
            </TouchableOpacity>

            <View >
                <Text style={styles.textStyle}>Checkout</Text>
            </View>

            <View >
                <Icon
                    name='arrowleft'
                    size={30}
                    color="#fff"
                />
            </View>
        </View>
    )
}
