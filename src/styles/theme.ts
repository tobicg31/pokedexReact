import { StyleSheet } from "react-native";

// Paleta central de la app. Todo lo demás en /styles debería consumir esto
// en vez de hardcodear colores/medidas sueltas.
export const colors = {
  primary: "#E53935",       // rojo Pokedex (headers, CTA principal)
  primaryDark: "#C62828",
  primaryLight: "#FFECEC",
  secondary: "#4CAF50",     // verde (acciones positivas: agregar, guardar, random)
  secondaryDark: "#388E3C",

  background: "#F3F4F6",
  surface: "#FFFFFF",

  textPrimary: "#212121",
  textSecondary: "#666666",
  textMuted: "#999999",
  textOnPrimary: "#FFFFFF",

  border: "#E4E4E7",
  danger: "#E53935",
  overlay: "rgba(0,0,0,0.5)",
};

export const radius = {
  sm: 10,
  md: 12,
  lg: 16,
  xl: 20,
  pill: 999,
};

export const spacing = {
  xs: 4,
  sm: 8,
  md: 12,
  lg: 20,
  xl: 30,
};

export const typography = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  h2: {
    fontSize: 22,
    fontWeight: "bold",
    color: colors.textPrimary,
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    color: colors.textPrimary,
  },
  body: {
    fontSize: 16,
    color: colors.textPrimary,
  },
  small: {
    fontSize: 14,
    color: colors.textSecondary,
  },
});

// Sombra consistente para tarjetas (Android usa elevation, iOS usa shadow*).
export const cardShadow = {
  elevation: 3,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 2 },
  shadowOpacity: 0.08,
  shadowRadius: 6,
};

export const buttonShadow = {
  elevation: 2,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 1 },
  shadowOpacity: 0.15,
  shadowRadius: 3,
};

// Estilos de botón reutilizables (primario = rojo, secundario = verde).
export const buttons = StyleSheet.create({
  primary: {
    width: "90%",
    backgroundColor: colors.primary,
    paddingVertical: 14,
    borderRadius: radius.md,
    alignItems: "center",
    ...buttonShadow,
  },
  secondary: {
    width: "90%",
    backgroundColor: colors.secondary,
    paddingVertical: 14,
    borderRadius: radius.md,
    alignItems: "center",
    ...buttonShadow,
  },
  disabled: {
    opacity: 0.5,
  },
  text: {
    color: colors.textOnPrimary,
    fontSize: 18,
    fontWeight: "bold",
  },
});
