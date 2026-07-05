import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: 8,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 4,
  },

  name: {
    fontWeight: "bold",
  },

  value: {
    fontWeight: "bold",
  },

  background: {
    height: 10,
    backgroundColor: "#DDD",
    borderRadius: 20,
    overflow: "hidden",
  },

  fill: {
    height: "100%",
    backgroundColor: "#4CAF50",
  },
});