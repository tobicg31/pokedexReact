import { StyleSheet } from "react-native";
import { colors, radius, spacing, typography, buttonShadow } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: colors.background,
    paddingTop: spacing.xl,
    paddingBottom: spacing.xl,
  },
  title: {
    ...typography.h1,
    marginBottom: spacing.lg,
  },
  button: {
    marginTop: spacing.lg,
    backgroundColor: colors.secondary,
    width: "90%",
    padding: 18,
    borderRadius: radius.md,
    alignItems: "center",
    ...buttonShadow,
  },
  buttonText: {
    color: colors.textOnPrimary,
    fontSize: 18,
    fontWeight: "bold",
  },
});
