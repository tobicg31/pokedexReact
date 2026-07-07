import { StyleSheet } from "react-native";
import { colors, radius, spacing, typography, cardShadow, buttonShadow } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    alignItems: "center",
    paddingBottom: spacing.xl,
  },
  header: {
    backgroundColor: colors.primary,
    width: "100%",
    paddingVertical: 40,
    alignItems: "center",
    borderBottomLeftRadius: radius.xl,
    borderBottomRightRadius: radius.xl,
    marginBottom: spacing.lg,
  },
  title: {
    ...typography.h1,
    color: colors.textOnPrimary,
    letterSpacing: 1,
  },
  subtitle: {
    color: colors.primaryLight,
    marginTop: spacing.xs,
    fontSize: 14,
  },
  input: {
    width: "90%",
    backgroundColor: colors.surface,
    borderRadius: radius.md,
    paddingHorizontal: spacing.md,
    height: 50,
    marginBottom: spacing.md,
    ...buttonShadow,
  },
  error: {
    color: colors.danger,
    marginTop: spacing.sm,
    fontWeight: "bold",
  },
  buttonDisabled: {
    opacity: 0.5,
  },
  button: {
    width: "90%",
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: radius.md,
    alignItems: "center",
    marginTop: spacing.sm,
    ...buttonShadow,
  },
  buttonText: {
    color: colors.textOnPrimary,
    fontSize: 18,
    fontWeight: "bold",
  },
  randomButton: {
    width: "90%",
    backgroundColor: colors.secondary,
    paddingVertical: 14,
    borderRadius: radius.md,
    alignItems: "center",
    marginTop: spacing.sm,
    ...buttonShadow,
  },
});
