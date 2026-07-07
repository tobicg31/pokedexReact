import { StyleSheet } from "react-native";
import { colors, spacing, radius } from "./theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: spacing.sm,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: spacing.xs,
  },
  name: {
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  value: {
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  background: {
    height: 10,
    backgroundColor: colors.border,
    borderRadius: radius.pill,
    overflow: "hidden",
  },
  fill: {
    height: "100%",
    backgroundColor: colors.secondary,
  },
});

// Colores de estado para las barras (rojo -> azul a medida que sube el stat)
export const statBarColors = {
  low: "#F44336",
  medium: "#FF9800",
  high: "#FFEB3B",
  veryHigh: colors.secondary,
  max: "#2196F3",
};
