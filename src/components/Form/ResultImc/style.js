import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({

    resultImc:{
        flex:1,
        marginTop:15,
        paddingTop:60,
        borderRadius:50,
        alignItems:"center",
        width:"100%"
    },

    numberResult: {
        fontSize:40,
        color:"#ff0043",
        fontWeight:"bold"
    },

    information: {
        fontSize:15,
        color:"#ff0043",
        fontWeight:"bold"
    },

    boxShareButton :{
        width:"100%",
        alignItems:"center",
        marginBottom:10
    },

    btnShared: {
        backgroundColor:"#1877f2",
        borderRadius: 50,
        paddingTop:5,
        paddingBottom:5,
        width:130
    },

    txtBtnShared: {
        color:"#ffffff",
        fontWeight:"bold",
        paddingHorizontal: 30,
        textAlign:"center"
    }

    

})

export default styles