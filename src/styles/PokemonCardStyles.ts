import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    width: 280,
    alignItems: "center",
    padding: 20,
    marginTop: 25,
    borderRadius: 20,
    elevation: 5,
  },

  img: {
    width: 150,
    height: 150,
  },

  text: {
    alignSelf: "flex-start",
    marginTop: 5,
  },

  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10,
  },

  id: {
    fontSize: 18,
    color: "#777",
  },
  typesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 8,
    marginVertical: 10,
  },

  typeBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },

  typeText: {
    color: "#FFF",
    fontWeight: "bold",
    fontSize: 14,
  },
  description: {
  marginTop: 15,
  marginBottom: 15,
  textAlign: "center",
  lineHeight: 22,
  fontSize: 15,
  color: "#444",
  },
  addButton: {
    marginTop: 20,
    backgroundColor: "#4CAF50",
    padding: 12,
    borderRadius: 10,
    width: "100%",
    alignItems: "center",
  },
    addButtonText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
  modalBackground: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "rgba(0,0,0,0.5)",
  },
  modal: {
      width: "85%",
      backgroundColor: "white",
      borderRadius: 15,
      padding: 20,
  },
  modalTitle: {
      fontSize: 22,
      fontWeight: "bold",
      marginBottom: 15,
      textAlign: "center",
  },
  teamButton: {
      backgroundColor: "#E53935",
      padding: 15,
      borderRadius: 10,
      marginVertical: 5,
  },
  teamButtonText: {
      color: "white",
      textAlign: "center",
      fontWeight: "bold",
      fontSize: 17,
  },
  cancel: {
      textAlign: "center",
      marginTop: 20,
      fontSize: 17,
      color: "#666",
  }
});