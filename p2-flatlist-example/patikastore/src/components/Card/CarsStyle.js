
import { StyleSheet,Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    conatiner:{
        backgroundColor:'#ECEFF1',
        marginBottom:10,
        width: ((windowWidth - 30) / 2) -20,
        borderRadius: 8,
    },
    image:{
        width: ((windowWidth - 30) / 2) -50,
        height: windowHeight * 0.2,
        resizeMode: 'stretch',
        margin:15,
        borderRadius:5
    },
    title:{
        paddingLeft:10,
        fontSize:18,
        fontWeight: 'bold',
        color:'#000'
    },
    price:{
        paddingLeft:10,
        paddingTop:5,
        paddingBottom:5,
        fontSize:15,
        fontWeight: 'bold',
        color:'#808080'
    },
    inStock:{
        paddingLeft:10,
        paddingBottom:5,
        fontSize:15,
        fontWeight: 'bold',
        color:'#FF0000'
    }
})

export default styles