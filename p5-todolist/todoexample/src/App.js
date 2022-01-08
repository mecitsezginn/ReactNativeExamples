import React, { useState } from 'react'
import { View,Text, TextInput, FlatList, Keyboard, TouchableOpacity, SafeAreaView,Alert } from 'react-native'
import styles from "./styles";
import ToDoList from "./components/ToDoList";
import Header from "./components/Header";


const App = () => {
  // const [list, setList] = useState([{ "id": 1, "todo": "React native çalış" }])
  const [list, setList] = useState([])
  const [text, setText] = useState("")

  const renderCard = ({ item }) => <ToDoList  mylist={item} />
  const renderKeyExtractor = (item) => item.id.toString()
  const renderSeperator = () => <View style={{ paddingTop: 6 }}></View>


  kayit = () => {
    if(text != ""){
      let myid = 0;
      if (list.length != 0) {
        myid = list[list.length - 1]["id"] + 1;
      }
      
      setList(list => [...list, { "id": myid, "todo": text, active: true }])
      setText("")
    }
    else{
      Alert.alert("Lütfen veri giriniz")
    }
    Keyboard.dismiss();
  }


  return (
    <SafeAreaView style={styles.container}>
      <View style={{ flex: 1 }}>
        <Header todonumber={list.length}/>

        <FlatList
          data={list}
          renderItem={renderCard}
          keyExtractor={renderKeyExtractor}
          ItemSeparatorComponent={renderSeperator}

        />
      </View>

      <View style={styles.footer}>
        <TextInput
          style={styles.footerTextInput}
          placeholderTextColor='#7F7F7F'
          placeholder='Yapılacaklar...'
          onChangeText={setText}
          value={text}
        />
        {/* <View style={{ borderBottomColor: '#78909C', borderBottomWidth: 1, }}></View> */}

        <TouchableOpacity 
          style={styles.footerButton}
          onPress={kayit}
          >
          <Text style={styles.footerButtonText}>Kaydet</Text>
        </TouchableOpacity>
      </View>




    </SafeAreaView>
  )
}

export default App;
