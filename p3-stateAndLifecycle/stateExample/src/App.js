import React,{useState} from 'react'
import { StyleSheet, Text, View, Switch, FlatList } from 'react-native'

const data=[
  {id:0, name: "cafe.exe", isFavorite: false},
  {id:1, name: "KafaKafe", isFavorite: true},
  {id:2, name: "BugG", isFavorite: false},
  {id:3, name: "Rock'n Code", isFavorite: true},
  {id:4, name: "do(drink)", isFavorite: false},
  {id:5, name: "esc", isFavorite: false},
]

export default function App() {
  const [cafeList,setCafeList] = useState(data);
  const [showList, setShowList] = useState(false);

  function switchChange(value){
    setShowList(value);
    console.log("value", value)
    value 
      ? setCafeList(data.filter(cafe => cafe.isFavorite === true))
      : setCafeList(data)
  }

  return (
    <View>
      <Text>merhaba</Text>
      <Switch value={showList} onValueChange={switchChange}/>
      <FlatList 
        data={cafeList}
        renderItem={({item}) => <Text style={{fontSize:25}}>{item.name}</Text>}
      />
    </View>
  )
}

const styles = StyleSheet.create({})
