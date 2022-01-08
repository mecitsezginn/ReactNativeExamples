import { StyleSheet} from 'react-native'

const styles = StyleSheet.create({
  container:{
      backgroundColor:'#102027',
      flex:1,
      paddingHorizontal:20,
      paddingTop:20,
      justifyContent:'space-between',
      paddingBottom:30
  },
  footer:{
    backgroundColor:'#37474F',
    borderRadius:10,
    marginTop:5
  },
  footerTextInput:{
    marginHorizontal:10,
    borderBottomColor: '#78909C', 
    borderBottomWidth: 1,
    paddingBottom:1
  },
  footerButton:{
    backgroundColor:'#808080',
    margin:10,
    padding:10,
    borderRadius:10
  },
  footerButtonText:{
    fontWeight:'bold',
    textAlign:'center',
    color:'#fff'
  }
})

export default styles;