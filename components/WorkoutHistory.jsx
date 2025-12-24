import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";
import { Colors, Fonts, Spacing, Radius } from "@/constants/theme";

export default function WorkoutHistory() {
	return (
		<View style={styles.border}>
			<View style={styles.container}>
				<Text style={styles.name}>Title</Text>
				<View style={styles.list}>
					<Text style={styles.title}>Exercises:</Text>
					<Text style={styles.title}>Sets: </Text>
				</View>
				<View style={styles.list}>
					<Text style={styles.body}>Chest Press</Text>
					<Text style={styles.body}>4</Text>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	border: {
		borderStyle: "solid",
		borderColor: Colors.cyan,
		borderWidth: 1,
		width: "100%",
		borderRadius: Spacing.md,
	},
	container: {
		padding: Spacing.lg,
	},
	name: {
		color: Colors.text,
		fontSize: Spacing.lg,
		fontWeight: "700",
		textAlign: "center",
		marginBottom: Spacing.sm,
	},
	title: {
		color: Colors.text,
		fontSize: Spacing.md,
		fontWeight: "700",
	},
	list: {
		flexDirection: "row",
		justifyContent: "space-between",
	},
	body: {
		color: Colors.text,
		fontSize: Spacing.md,
	},
});
