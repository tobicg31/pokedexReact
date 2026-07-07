import { StyleSheet } from "react-native";
import { colors, radius, spacing, typography, cardShadow, buttonShadow } from "./theme";

export const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.background,
    padding: spacing.lg,
  },
  title: {
    ...typography.h1,
    marginBottom: spacing.md,
    textAlign: "center",
  },
  editRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: spacing.lg,
  },
  editIcon: {
    fontSize: 26,
  },
  slot: {
    backgroundColor: colors.surface,
    marginBottom: spacing.md,
    borderRadius: radius.md,
    padding: 18,
    flexDirection: "row",
    alignItems: "center",
    ...cardShadow,
  },
  slotNumber: {
    fontWeight: "bold",
    fontSize: 20,
    marginRight: spacing.md,
    color: colors.textMuted,
  },
  slotText: {
    fontSize: 18,
    color: colors.textMuted,
  },
  button: {
    marginTop: spacing.lg,
    marginBottom: spacing.lg,
    backgroundColor: colors.danger,
    width: "100%",
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

  // Modal "Renombrar equipo"
  modalBackground: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.overlay,
  },
  modal: {
    backgroundColor: colors.surface,
    padding: spacing.lg,
    borderRadius: radius.lg,
    width: "85%",
  },
  modalTitle: {
    ...typography.h2,
    marginBottom: spacing.md,
  },
  modalInput: {
    borderWidth: 1,
    borderColor: colors.border,
    borderRadius: radius.sm,
    padding: 10,
    fontSize: 16,
  },
  modalSaveButton: {
    backgroundColor: colors.secondary,
    padding: 15,
    marginTop: spacing.lg,
    borderRadius: radius.sm,
    alignItems: "center",
  },
  modalSaveButtonText: {
    color: colors.textOnPrimary,
    fontWeight: "bold",
    fontSize: 16,
  },
});
