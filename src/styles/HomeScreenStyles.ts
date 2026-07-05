import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#F3F4F6",
    alignItems: 'center',
    justifyContent: 'center',
  },
  input:{
    width:"90%",
    backgroundColor:"white",
    borderRadius:12,
    paddingHorizontal:15,
    height:50,
    marginTop:30,
  },
  error: {
    color: "red",
    marginTop: 10,
    fontWeight: "bold",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  header:{
    backgroundColor:"#E53935",
    width:"100%",
    paddingVertical:40,
    alignItems:"center",
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
  },
  title:{
    color:"white",
    fontSize:34,
    fontWeight:"bold",
  },
  subtitle:{
    color:"#FFECEC",
    marginTop:6,
  },
  button:{
    width:"90%",
    backgroundColor:"#E53935",
    paddingVertical:14,
    borderRadius:12,
    marginTop:15,
    alignItems:"center",
  },
  buttonText:{
    color:"white",
    fontSize:18,
    fontWeight:"bold",
  },
  randomButton: {
  width: "90%",
  backgroundColor: "#4CAF50",
  padding: 14,
  borderRadius: 10,
  alignItems: "center",
  marginTop: 10,
  }
});