import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity,Alert } from 'react-native'
import auth from '@react-native-firebase/auth';
import { styles } from "./styles";



export class App extends Component {
  state = {
    email: "",
    password: ""
  }


  onButtonCliked = async () => {
    try {
      let response = await auth().signInWithEmailAndPassword(this.state.email, this.state.password)
      if (response) {
        console.log(response)
        Alert.alert('Successful Login','Welcome the React Native')
      }
    } catch (e) {
      console.error(e.message)
    }


  }
  render() {
    return (
      <View style={styles.container}>

        <View style={styles.header}>
          <Text style={styles.headerText}>Authentication</Text>
        </View>

        <View style={styles.mainViev}>
          <View style={styles.textInputView}>
            <View style={{ flex: 2 }}>
              <Text style={styles.textInputLabel}>Email</Text>
            </View>
            <View style={{ flex: 3 }}>
              <TextInput
                style={styles.textInputStyle}
                placeholder='Enter Email'
                keyboardType='email-address'
                onChangeText={(text) => { this.setState({ email: text }) }}
                value={this.state.email}
              />
            </View>
          </View>

          <View style={styles.textInputView}>
            <View style={{ flex: 2 }}>
              <Text style={styles.textInputLabel}>Password</Text>
            </View>
            <View style={{ flex: 3 }}>
              <TextInput
                style={styles.textInputStyle}
                placeholder='Enter Password'
                secureTextEntry={true}
                onChangeText={(text) => { this.setState({ password: text }) }}
                value={this.state.password}
              />
            </View>

          </View>

          <TouchableOpacity
            style={styles.butonStyle}
            onPress={this.onButtonCliked}
          >
            <Text style={styles.butonTextStyle}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default App
