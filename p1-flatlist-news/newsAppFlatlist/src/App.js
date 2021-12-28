import React, { Component } from 'react'
import { Text, View, FlatList, StyleSheet, ScrollView, Image, Dimensions } from 'react-native'
import news_data from "./news_data.json";
import news_banner_data from "./news_banner_data.json";
import NewsCard from "./components/NewsCard";

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const App = () => {

  // perfonmans için burada tanımlanıyor
  const renderNews = ({ item }) => <NewsCard news={item} />
  const renderKeyExtractor = (item) => item.u_id.toString()

  return (
    <View style={styles.container}>
     <Text style={styles.headerText}>News </Text>
      <FlatList
        ListHeaderComponent={() => (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {
              news_banner_data.map(bannerNews =>
                <Image
                  style={styles.banner_image}
                  source={{ uri: bannerNews.imageUrl }}
                />)
            }
          </ScrollView>
        )}
        // json dosyasında "id" değeri yoksa, id görevi gören key adını
        // tanıtmamız gerekiyor
        // keyExtractor={(item) => item.u_id.toString()}
        keyExtractor={renderKeyExtractor}
        data={news_data}
        // renderItem={(data) => <NewsCard news={data.item} />}
        renderItem={renderNews}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eceff1'
  },
  banner_image: {
    height: windowHeight * 0.2,
    width: windowWidth * 0.5
  },
  headerText:{
    fontWeight:'bold',
    fontSize: 35,
    color:'#000'
  }
})

export default App;