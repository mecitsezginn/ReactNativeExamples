import React, {useState} from 'react'
import { View, Text,FlatList,StyleSheet } from 'react-native'
import SearchBar from "./components/SerachBar";
import MusicCard from "./components/MusicCard";
import musicData from "./music-data.json";

const App = ()=> {
  const [list, setList] = useState(musicData);

  const renderCard = ({item}) => <MusicCard music={item} />
  const renderSeperator = () => <View style={styles.line}></View>

  const handleSearch =(text)=>{
    const filteredLisdt = musicData.filter(song =>{
      const searcedText = text.toLowerCase();
      const currentTitle = song.title.toLocaleLowerCase();

      return currentTitle.indexOf(searcedText) > -1
    })

    setList(filteredLisdt)
}

  return (
    <View>
      <SearchBar onSearch={handleSearch}/>
      <FlatList 
        data={list}
        renderItem={renderCard}
        ItemSeparatorComponent={renderSeperator}
      />
    </View>
  )
}
const styles = StyleSheet.create({
  line:{
    borderBottomColor: '#D4D5D6',
    borderBottomWidth: 1,
},
})
export default App;