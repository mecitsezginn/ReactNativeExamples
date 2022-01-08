import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    containerTrue:{
        backgroundColor:'#7DA453',
        paddingLeft:10,
        paddingVertical:10,
        borderRadius:5,
        
    },
    containerFalse:{
        backgroundColor:'#37474F',
        paddingLeft:10,
        paddingVertical:10,
        borderRadius:5
    },
    textTrue:{
        color:'#fff'
    },
    textFalse:{
        color:'#000',
        textDecorationLine: 'line-through'
    },
    saveView:{
        padding: 20
    }
})

export default styles
