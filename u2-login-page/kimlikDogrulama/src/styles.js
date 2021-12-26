
import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#EAEAEA'
    },
    header:{
        // flex:1,
        backgroundColor:'#E4706D',
        height: windowHeight * 0.33,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },
    headerText:{
        color: '#fff',
        fontSize:35,
        fontWeight:'bold'
    },
    mainViev:{
        flex:2,
        backgroundColor: '#EAEAEA',
        justifyContent: 'center',
        alignItems: 'center',
    },
    textInputView:{
        flexDirection:'row',
        alignItems: 'center',
        borderBottomWidth:1,
        borderColor:'#A5A5A5',
        width: windowWidth * 0.75,
        paddingHorizontal:20,
        
    },
    textInputLabel:{
        fontWeight:'bold',
        fontSize:18,
        color:'#000', 
    },
    textInputStyle:{
        // paddingLeft:30,
        fontSize:18,
        justifyContent: 'center',
    },
    butonStyle:{
        backgroundColor:'#fff',
        width: windowWidth * 0.6,
        margin:20,
        borderRadius:10
    },
    butonTextStyle:{
        fontSize:20,
        textAlign:'center',
        padding:5,
        color:'#E4706D',
        fontWeight:'bold'
    }
})
