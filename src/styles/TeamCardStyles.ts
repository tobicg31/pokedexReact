import { StyleSheet } from "react-native";
import { colors, radius, spacing, cardShadow } from "./theme";

export const styles = StyleSheet.create({
  card: {
    width: "90%",
    backgroundColor: colors.surface,
    padding: spacing.lg,
    marginVertical: spacing.sm,
    borderRadius: radius.lg,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    ...cardShadow,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: colors.textPrimary,
  },
  arrow: {
    fontSize: 26,
    color: colors.textMuted,
  },
});
