import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 export default StyleSheet.create({
     container:{
        backgroundColor: 'white',
        margin: 10,
        borderRadius: 10
     },
     inner_container:{
         padding: 5
     },
     image:{
        height: windowHeight * 0.25,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10
     },
     title:{
        fontWeight:'bold',
        fontSize: 18,
        color:'#000'
     },
     description:{
        marginTop: 3
     },
     author:{
         fontStyle:'italic',
         textAlign:'right'
     }
 })
