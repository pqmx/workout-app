// constants/theme.ts
import { Platform } from "react-native";

/**
 * App-wide design tokens
 * These colors do NOT change with light/dark mode
 */

export const Colors = {
	input: "#1A4C5F",
	modal: "#2C3E50",
	accent: "#3BFB00",
	background: "#04161C",
	cyan: "#00FFC6",

	// common UI needs
	text: "#ECEDEE",
	mutedText: "#9BA1A6",
	border: "#1F3A44",
	danger: "#FF4D4D",
	warning: "#FFC107",
} as const;

/**
 * Platform-safe font tokens
 */
export const Fonts = Platform.select({
	ios: {
		sans: "system-ui",
		serif: "ui-serif",
		rounded: "ui-rounded",
		mono: "ui-monospace",
	},
	default: {
		sans: "normal",
		serif: "serif",
		rounded: "normal",
		mono: "monospace",
	},
	web: {
		sans: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
		serif: "Georgia, 'Times New Roman', serif",
		rounded:
			"'SF Pro Rounded', 'Hiragino Maru Gothic ProN', Meiryo, 'MS PGothic', sans-serif",
		mono: "SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
	},
});

/**
 * Reusable spacing + radius tokens (optional but recommended)
 */
export const Spacing = {
	xs: 4,
	sm: 8,
	md: 16,
	lg: 24,
	xl: 32,
	xxl: 48,
	xxxl: 64,

	pageTop: 64,
} as const;

export const Radius = {
	sm: 6,
	md: 12,
	lg: 20,
	full: 999,
} as const;
