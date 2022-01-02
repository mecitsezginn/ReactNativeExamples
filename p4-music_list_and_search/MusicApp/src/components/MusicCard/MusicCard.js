import React from 'react'
import { View, Text, Image,SafeAreaView } from 'react-native'
import styles from "./MusicCardStyle";

const MusicCard = ({ music }) => {
    return (
        <SafeAreaView >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: music.imageUrl }}
                />
                <View style={styles.infoView}>
                    <Text style={styles.title}>{music.title}</Text>

                    <View style={styles.infoView2}>

                        <View style={styles.artistView}>
                            <Text style={styles.artistName}>{music.artist}</Text>
                            <Text style={styles.year}>{music.year}</Text>
                        </View>

                        {/* <View style={styles.soldOut}>
                            <Text style={styles.soldOutText}>TÜKENDİ</Text> 
                        </View> */}
                       {music.isSoldOut? <View style={styles.soldOut}>
                            <Text style={styles.soldOutText}>TÜKENDİ</Text> 
                        </View> 
                        : null}

                    </View>
                </View>

            </View>
            

        </SafeAreaView>
    )
}

export default MusicCard;