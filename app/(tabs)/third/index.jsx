import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Colors, Fonts, Spacing, Radius } from "@/constants/theme";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";

export default function Index() {
	return (
		<View style={styles.container}>
			<View style={styles.circle}>
				<Text style={styles.circleText}>PM</Text>
			</View>
			<Text style={styles.name}>Your Name</Text>
			<View style={styles.actions}>
				<TouchableOpacity style={styles.button}>
					<Feather
						name="edit"
						size={Spacing.xl}
						color="black"
					/>
					<Text style={styles.text}>Edit Name</Text>
				</TouchableOpacity>
				<View style={styles.separator} />
				<TouchableOpacity style={styles.button}>
					<Ionicons
						name="person-add-sharp"
						size={Spacing.xl}
						color="black"
					/>
					<Text style={styles.text}>Invite a Friend</Text>
				</TouchableOpacity>
				<View style={styles.separator} />
				<TouchableOpacity style={[styles.button, { borderBottomWidth: 0 }]}>
					<Ionicons
						name="exit-outline"
						size={Spacing.xl}
						color="black"
					/>
					<Text style={styles.text}>Log Out</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	text: {
		color: Colors.text,
		paddingLeft: Spacing.xl,
		fontSize: Spacing.md,
	},
	container: {
		flex: 1,
		backgroundColor: Colors.background,
		alignItems: "center",
		paddingHorizontal: Spacing.md,
		paddingVertical: Spacing.pageTop,
	},
	circle: {
		width: 120, // diameter
		height: 120, // diameter
		borderRadius: 60, // half of width/height
		backgroundColor: Colors.background,
		justifyContent: "center", // vertical center
		alignItems: "center", // horizontal center
		borderStyle: "solid",
		borderColor: Colors.cyan,
		borderWidth: 5,
	},
	circleText: {
		fontSize: 40,
		fontWeight: "bold",
		color: Colors.text,
	},
	name: {
		color: Colors.text,
		paddingTop: Spacing.md,
		fontSize: Spacing.lg,
	},
	actions: {
		marginTop: Spacing.xxxl,
		backgroundColor: Colors.input,
		width: "85%",
		height: "33%",
		borderRadius: Spacing.md,
	},
	button: {
		flex: 1,
		flexDirection: "row",
		alignItems: "center",
		paddingLeft: Spacing.md,
	},
	separator: {
		height: StyleSheet.hairlineWidth,
		backgroundColor: Colors.background,
	},
});
