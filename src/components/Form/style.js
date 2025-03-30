import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    FormContext:{
        width:"100%",
        height:"100%",
        bottom:0,
        backgroundColor:"#fff",
        alignItems:"center",
        justifyContent:"space-around",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        marginTop:20,
        paddingTop:15
    },

    form: {
        width:"100%",
        height:"auto",
        marginTop:30,
        padding:10,
    },
     formLabel: {
        color:"#000000",
        fontSize:18,
        paddingLeft:20,
     },

     input: {
        width:"90%",
        height:40,
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        margin:12,
        paddingLeft:10,

     },

     buttonCalculcar: {
        borderRadius:50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop:14,
        paddingBottom:14,
        marginLeft:12,
        margin:30
     },
     
     textButtonCalculator: {
        fontSize:20,
        color:"#ffffff"
     },

     errorMsg: {
         fontSize:12,
         color:'red',
         fontWeight:"bold",
         paddingLeft:20
     }
});


export default styles