import React from 'react'
import { View, Text, FlatList, TextInput } from 'react-native'
import styles from "./styles";
import mydata from "./data.json";
import Card from "./components/Card";


const App = () => {
  
  const renderCard = ({item}) => <Card shopping={item} />
  //const renderKeyExtractor = (item) => item.u_id.toString()

  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>PATIKASTORE</Text>

      <View style={styles.searchBar}>
        <TextInput 
          placeholder='Ara...'
        />
      </View>

      <FlatList 
        columnWrapperStyle={{justifyContent:'space-between'}}
        numColumns={2}
        data={mydata}
        // renderItem={(data) => <NewsCard news={data.item} />}
        renderItem={renderCard}
        //renderItem={data => <Text>{data.item.title}</Text>}
      />
    </View>
  )
}

export default App;
