import { StyleSheet } from 'react-native'

export const myStyle = StyleSheet.create({
    header:{
        backgroundColor:'#73A5B8',
        padding:15,
        justifyContent:'center',
        alignItems:'center'
    },
    headerText:{
        color:'#fff',
        fontSize:30
    },
    container:{
        flex:1,
        paddingVertical:40,
        paddingHorizontal:30
    },
    container2:{
        flex:1,
        
    },
    container3:{
        alignItems:'space-between'
    },
    currencyView:{
        flexDirection:'row',
        borderWidth:1,
        borderColor:'#CCC8C8',
        alignItems:'center',
        justifyContent:'space-between'
    },
    currencyView2Main:{
        paddingHorizontal: 30,
        paddingTop:15
    },
    currencyView2:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    textInputStyle:{
        borderColor:'gray',
        borderWidth:1,
        borderRadius:10
    },
    currencyText1:{
        fontSize:18,
        color:'#000',
        fontWeight:'bold',
        paddingVertical:5
    },
    currencyText2:{
        fontSize:15,
        color:'#000',
        fontWeight:'bold'
    },

})
