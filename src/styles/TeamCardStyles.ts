import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    card:{
        width:"90%",
        backgroundColor:"white",
        padding:20,
        marginVertical:8,
        borderRadius:15,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        elevation:3,
    },
    title:{
        fontSize:20,
        fontWeight:"600",
    },
    arrow:{
        fontSize:26,
        color:"#999",
    }
});