import React, { Component } from 'react'
import { Text, View, TextInput, TouchableOpacity } from 'react-native'
import { styles } from "./styles";



export class App extends Component {
  state={
    email:"",
    password:""
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
                onChangeText={(text) =>{this.setState({email:text})}}
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
                onChangeText={(text) =>{this.setState({password:text})}}
                value={this.state.password}
              />
            </View>

          </View>

          <TouchableOpacity style={styles.butonStyle}>
            <Text style={styles.butonTextStyle}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    )
  }
}

export default App
