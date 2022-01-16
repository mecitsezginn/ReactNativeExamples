import { StyleSheet, Dimensions} from 'react-native'

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
    },
    titleView:{
        backgroundColor:'#fbfbfb',
        paddingVertical:10,
        flexDirection:'row',
    },
    addressView:{
        // width: windowWidth *0.5,
        flex:1,
        paddingHorizontal:10
    },
    addressTitleText:{
        paddingLeft:5,
        fontSize:16,
        fontWeight:'bold',
        color:'#7c7b7b'
    },
    addressText:{
        color:'#7c7b7b'
    },
    checkoutTitleText:{
        paddingLeft:5,
        fontSize:16,
        fontWeight:'bold',
        color:'#000'
    },
    checkoutText:{
        color:'#7c7b7b'
    },
    creditCartView:{
        backgroundColor:'#fff',
        paddingVertical:10,
        paddingHorizontal:10
    },
    activeIconView:{
        width:26,
        height:26,
        borderWidth:1,
        borderRadius:13,
        justifyContent:'center',
        alignItems:'center'
    },
    cardTitleText:{
        fontSize:18,
        fontWeight:'bold',
        color:'#000'
    },
    cardImage:{
        width:40,
        height:40,
        resizeMode:'stretch'
    },
    cardInfoView:{
        paddingHorizontal: 10,
        marginVertical:10,
        borderWidth:1,
        borderColor: '#7c7b7b',
        borderRadius:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    nameTextInput:{
        fontSize:17,
        borderBottomWidth:1,
        borderBottomColor:'#cccccc',
        width: windowWidth * 0.7,
        paddingVertical:5,
        marginBottom:10
    },
    cashView:{
        padding:10
    },
    cashImage:{
        width:40,
        height:40,
        resizeMode:'stretch'
    },
    paypalView:{
        padding:10
    },
    paypalImage:{
        width:40,
        height:40,
        resizeMode:'stretch'
    },
    priceView:{
        padding:10
    },
    priceListView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    priceText:{
        fontSize:16,
        color:'#000'
    },
    totalView:{
        padding:10,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    totalText:{
        fontSize:18,
        color:'#000',
        fontWeight:'bold'
    },
    buttonActive:{
        backgroundColor:'#009cde',
        padding:15,
        marginTop:10,
        marginBottom:30,
        marginHorizontal:20,
        borderRadius:5
    },
    buttonDeactive:{
        backgroundColor:'#dadada',
        padding:15,
        marginTop:10,
        marginBottom:30,
        marginHorizontal:20,
        borderRadius:5
    },
    buttonText:{
        color: '#fff',
        textAlign:'center',
        fontWeight:'bold',
        fontSize:20
    }

})

export default styles;