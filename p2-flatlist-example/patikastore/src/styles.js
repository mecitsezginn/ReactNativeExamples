import { StyleSheet,Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container:{
        flex:1,
        // margin: windowWidth *0.1,
        margin: 30
        
    },
    headerText:{
        color:'#800080',
        fontSize:30,
        fontWeight:'bold'
    },
    searchBar:{
        backgroundColor:'#ECEFF1',
        height: 45,
        borderRadius:10,
        justifyContent:'center',
        paddingLeft: 25,
        marginTop:15,
        marginBottom:10
    },
})
export default styles


