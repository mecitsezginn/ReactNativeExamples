import React from 'react'
import { View, Text, Image } from 'react-native'
import styles from "./CarsStyle";

const Card = ({ shopping }) => {
    return (
        <View style={styles.conatiner}>
            <View style={{flex:1}}>
                <Image
                    style={styles.image}
                    source={{ uri: shopping.imgURL }}
                />
                <Text style={styles.title}>{shopping.title}</Text>
                
            </View>
            <View style={{flex:1}}>

            </View>
            <Text style={styles.price}>{shopping.price}</Text>
            {shopping.inStock == "false" ? <Text style={styles.inStock}>STOKTA YOK</Text> : null}

        </View>
    )
}

export default Card;


