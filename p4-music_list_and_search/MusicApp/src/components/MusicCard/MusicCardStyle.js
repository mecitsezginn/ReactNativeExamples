
import { StyleSheet,Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

 const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
        marginHorizontal: 20,
        marginVertical:10,
        flexDirection:'row'
    },
    image:{
        width: 100,
        height:100,
        borderRadius:50
    },
    infoView:{
        justifyContent: 'center', 
        paddingLeft: 10,
        flex:1
    },
    title:{
        fontSize: 20,
        fontWeight:'bold',
        color:'#000'
    },
    infoView2:{
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    artistView:{
        flexDirection: 'row',
        alignItems:'center',
        flex:1
    },
    artistName:{
        fontSize: 16,
        color:'#000'
    },
    year:{
        fontSize: 16,
        color:'#5E5E5E',
        paddingLeft:10
    },
    soldOut:{
        justifyContent:'center',
        borderColor:'#FF0000',
        borderWidth:2,
        borderRadius:7
    },
    soldOutText:{
        color:'#FF0000',
        fontWeight:'bold',
        fontSize:15,
        paddingHorizontal: 5
    }
 })

 export default styles;