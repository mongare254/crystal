import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    topbar:{
        backgroundColor:"green",
        height:80,
        padding:22, 
    }, 
    title :{
        color:"#FFFFFF",
        fontFamily:"Georgia, serif",
        fontSize:18,

    },
    container :{
        flex:1,
        alignItems:"center",
        backgroundColor:"#FFCF9D",
        paddingTop:50,
        paddingBottom:150,
    },
    wrapper:{
        flexDirection:'row',
        marginTop:13,
        padding:5,
    },
    card:{
        flex:1,
        backgroundColor:"#F5F5DC",
        width:165,
        height:150,
        alignItems:"center",
        alignSelf:'center',
        borderRadius:13,
        padding:20,
        borderBottomColor:"#004225",
        borderBottomWidth:7,
        marginRight:5,
    },
});

export {Styles}