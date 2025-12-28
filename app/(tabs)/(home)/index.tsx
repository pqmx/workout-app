import { useState } from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import NewWorkout from "@/components/NewWorkout";
import { Colors, Fonts, Spacing, Radius } from "@/constants/theme";
import LogOut from "../../../components/LogOut";

export default function Index() {
	let [visible, setVisible] = useState(false);
	return (
		<SafeAreaView style={styles.container}>
			<Text style={styles.title}>Welcome, back </Text>
			<TouchableOpacity
				style={styles.newButton}
				onPress={() => setVisible(true)}
			>
				<Text style={styles.buttonText}>Create New Workout</Text>
			</TouchableOpacity>
			<LogOut />
			<NewWorkout
				visible={visible}
				setVisible={setVisible}
			/>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: Colors.background,
		justifyContent: "flex-start",
		paddingHorizontal: Spacing.md,
	},

	title: {
		fontSize: Spacing.xl,
		fontWeight: "700",
		color: Colors.text,
		marginBottom: Spacing.xl,
		fontFamily: Fonts?.rounded,
	},

	newButton: {
		backgroundColor: Colors.accent,
		paddingVertical: Spacing.md,
		paddingHorizontal: Spacing.lg,
		borderRadius: Radius.md,
	},

	buttonText: {
		color: "#000", // or Colors.text if you want white text
		fontSize: 18,
		fontWeight: "600",
		textAlign: "center",
		fontFamily: Fonts?.rounded,
	},
});
