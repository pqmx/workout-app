import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	TextInput,
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import { Colors, Fonts, Spacing, Radius } from "@/constants/theme";
import { exerciseProps, UpdateSet } from "@/constants/alias";

export default function Exercise({
	exerciseData,
	addSet,
	deleteSet,
	setWorkout,
	deleteExercise,
}: exerciseProps) {
	const updateSet: UpdateSet = (exerciseKey, setKey, type, value): void => {
		setWorkout((prev) =>
			prev.map((exercise) =>
				exercise.key === exerciseKey
					? {
							...exercise,
							sets: exercise.sets.map((set) =>
								set.key === setKey ? { ...set, [type]: value } : set
							),
						}
					: exercise
			)
		);
	};

	if (!exerciseData) return null;

	return (
		<View>
			{/* Exercise Header */}
			<View style={[styles.rows, { alignItems: "center" }]}>
				<Text style={styles.exercise}>{exerciseData.name}</Text>
				<TouchableOpacity
					onPress={() => deleteExercise(exerciseData.key)}
					style={styles.delete}
				/>
			</View>

			{/* Column Labels */}
			<View style={[styles.rows, { paddingLeft: Spacing.xl }]}>
				<Text style={[styles.label, styles.col]}>Set</Text>
				<Text style={[styles.label, styles.col]}>Weight</Text>
				<Text style={[styles.label, styles.col]}>Reps</Text>
				<Text style={[styles.label, styles.col]}>Delete</Text>
			</View>

			{/* Sets */}
			{exerciseData.sets.map((set, i) => (
				<View
					style={styles.rows}
					key={set.key}
				>
					<View style={styles.col}>
						<Text style={[styles.text, styles.setNum]}>{i + 1}</Text>
					</View>

					<View style={styles.col}>
						<TextInput
							keyboardType="numeric"
							style={[styles.set, styles.input, styles.col]}
							maxLength={4}
							placeholder="0"
							value={set.weight?.toString() || ""}
							onChangeText={(e) =>
								updateSet(exerciseData.key, set.key, "weight", e)
							}
						/>
					</View>

					<View style={styles.col}>
						<TextInput
							keyboardType="numeric"
							style={[styles.set, styles.input, styles.col]}
							maxLength={4}
							placeholder="0"
							value={set.reps?.toString() || ""}
							onChangeText={(e) =>
								updateSet(exerciseData.key, set.key, "reps", e)
							}
						/>
					</View>

					<View style={styles.col}>
						<TouchableOpacity
							onPress={() => deleteSet(exerciseData.key, set.key)}
							style={styles.delete}
						/>
					</View>
				</View>
			))}

			{/* Add Set Button */}
			<TouchableOpacity
				style={styles.button}
				onPress={() => addSet(exerciseData.key)}
			>
				<Text style={styles.buttonText}>Add Set</Text>
			</TouchableOpacity>
		</View>
	);
}

const styles = StyleSheet.create({
	rows: {
		flexDirection: "row",
		justifyContent: "space-between",
	},

	col: {
		flex: 1,
		alignItems: "center",
	},

	exercise: {
		fontSize: 24,
		color: Colors.text,
		fontWeight: "700",
		marginBottom: Spacing.sm,
	},

	label: {
		fontSize: 20,
		color: Colors.text,
		fontWeight: "700",
		marginBottom: Spacing.sm,
	},

	text: {
		color: Colors.text,
		fontSize: 20,
		fontWeight: "700",
	},

	input: {
		height: 40,
		width: 70,
		fontSize: 20,
		color: Colors.text,
		backgroundColor: Colors.input,
		textAlign: "center",
		borderRadius: Radius.full,
	},

	set: {
		marginVertical: Spacing.xs,
		paddingVertical: Spacing.xs,
	},

	setNum: {
		marginTop: Spacing.sm,
	},

	delete: {
		backgroundColor: Colors.danger,
		borderRadius: Radius.sm,
		height: 40,
		width: 40,
		marginVertical: Spacing.xs,
	},

	button: {
		margin: Spacing.xl,
		padding: Spacing.sm,
		backgroundColor: Colors.accent,
		borderRadius: Radius.md,
	},

	buttonText: {
		textAlign: "center",
		color: Colors.text,
		fontSize: 18,
		fontWeight: "700",
		fontFamily: Fonts?.rounded,
	},
});
