import { StyleSheet, Dimensions } from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        width: windowWidth,
        height: windowHeight * 0.1,
        backgroundColor:'#fff',
        alignItems:'flex-end',
        justifyContent:'space-between',
        paddingHorizontal: windowWidth * 0.04,
        paddingBottom: 10
    },
    titleView:{
        alignItems:'center',
        borderWidth:1,
        borderColor:'orange'
    },
    textStyle:{
        color:'#000',
        fontSize:23,
        fontWeight:'bold',
        textAlign:'center'
    }
})

export default styles;