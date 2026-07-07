import { StyleSheet } from "react-native";
import { colors, radius, spacing, typography, cardShadow, buttonShadow } from "./theme";

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    width: 280,
    alignItems: "center",
    padding: spacing.lg,
    marginTop: spacing.lg,
    borderRadius: radius.xl,
    ...cardShadow,
  },
  img: {
    width: 150,
    height: 150,
  },
  text: {
    alignSelf: "flex-start",
    marginTop: spacing.xs,
    color: colors.textPrimary,
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: spacing.sm,
    color: colors.textPrimary,
  },
  id: {
    fontSize: 18,
    color: colors.textSecondary,
  },
  typesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: spacing.sm,
    marginVertical: spacing.md,
  },
  typeBadge: {
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm - 2,
    borderRadius: radius.pill,
  },
  typeText: {
    color: colors.textOnPrimary,
    fontWeight: "bold",
    fontSize: 14,
  },
  description: {
    marginTop: spacing.md,
    marginBottom: spacing.md,
    textAlign: "center",
    lineHeight: 22,
    fontSize: 15,
    color: colors.textSecondary,
  },
  addButton: {
    marginTop: spacing.lg,
    backgroundColor: colors.secondary,
    padding: spacing.md,
    borderRadius: radius.sm,
    width: "100%",
    alignItems: "center",
    ...buttonShadow,
  },
  addButtonText: {
    color: colors.textOnPrimary,
    fontWeight: "bold",
    fontSize: 16,
  },
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.overlay,
  },
  modal: {
    width: "85%",
    backgroundColor: colors.surface,
    borderRadius: radius.lg,
    padding: spacing.lg,
  },
  modalTitle: {
    ...typography.h2,
    marginBottom: spacing.md,
    textAlign: "center",
  },
  teamButton: {
    backgroundColor: colors.primary,
    padding: spacing.md,
    borderRadius: radius.sm,
    marginVertical: spacing.xs,
  },
  teamButtonText: {
    color: colors.textOnPrimary,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 17,
  },
  cancel: {
    textAlign: "center",
    marginTop: spacing.lg,
    fontSize: 17,
    color: colors.textSecondary,
  },
});
