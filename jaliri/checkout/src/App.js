import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Checkout from "./components/Checkout";

 const App = () => {
  return (
    <View style={styles.container}>
      
      <Checkout />
    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  }
})

export default App