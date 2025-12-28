import { View, Text, StyleSheet } from "react-native";
import { Colors, Fonts, Spacing } from "@/constants/theme";
import WorkoutHistory from "@/components/WorkoutHistory";

export default function Index() {
	return (
		<View style={styles.container}>
			<Text style={styles.title}>Workout History</Text>
			<WorkoutHistory />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		paddingTop: Spacing.xxxl,
		flex: 1,
		backgroundColor: Colors.background,
		justifyContent: "flex-start",
		paddingHorizontal: Spacing.md,
	},
	text: {
		color: Colors.text,
	},
	title: {
		fontSize: Spacing.xl,
		fontWeight: "700",
		color: Colors.text,
		marginBottom: Spacing.xl,
		fontFamily: Fonts?.rounded,
	},
});
