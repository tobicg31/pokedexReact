import { StyleSheet } from "react-native";
import { colors, radius, spacing, cardShadow } from "./theme";

export const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: colors.surface,
    marginVertical: spacing.sm,
    padding: spacing.md,
    borderRadius: radius.md,
    ...cardShadow,
  },
  sprite: {
    width: 70,
    height: 70,
  },
  info: {
    flex: 1,
    marginLeft: spacing.sm,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  id: {
    color: colors.textSecondary,
  },
  removeIcon: {
    fontSize: 24,
  },
});
