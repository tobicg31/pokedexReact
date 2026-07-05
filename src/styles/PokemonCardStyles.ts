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
  }
});