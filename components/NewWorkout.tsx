import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
	Modal,
	ScrollView,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import Exercise from "./Exercise";
import ExerciseModal from "./ExerciseModal";
import { Colors, Fonts, Spacing, Radius } from "@/constants/theme";
import saveWorkout from "@/utils/saveWorkout.js";

const monthNames: string[] = [
	"January",
	"February",
	"March",
	"April",
	"May",
	"June",
	"July",
	"August",
	"September",
	"October",
	"November",
	"December",
];

interface visibleState {
	visible: boolean;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function NewWorkout({ visible, setVisible }: visibleState) {
	const [workout, setWorkout] = useState([]);
	const [modalVisible, setModalVisible] = useState<boolean>(false);

	const addSet = (exerciseKey: string) => {
		setWorkout((prev) =>
			prev.map((exercise) =>
				exercise.key === exerciseKey
					? {
							...exercise,
							sets: [...exercise.sets, { key: uuidv4(), weight: "", reps: "" }],
						}
					: exercise
			)
		);
	};

	const deleteSet = (exerciseKey: string, setKey: string) => {
		setWorkout((prev) =>
			prev.map((exercise) =>
				exercise.key === exerciseKey
					? {
							...exercise,
							sets: exercise.sets.filter((set) => set.key !== setKey),
						}
					: exercise
			)
		);
	};

	const deleteExercise = (exerciseKey: string) => {
		setWorkout((prev) =>
			prev.filter((exercise) => exercise.key !== exerciseKey)
		);
	};

	const now = new Date();

	return (
		<Modal
			visible={visible}
			animationType="slide"
		>
			<View style={styles.container}>
				<StatusBar style="light" />

				<View style={{ alignItems: "flex-end" }}>
					<TouchableOpacity
						style={[
							styles.button,
							{
								backgroundColor: Colors.danger,
								width: "32%",
								marginBottom: Spacing.lg,
							},
						]}
						onPress={() => {
							setVisible(false);
							setWorkout([]);
						}}
					>
						<Text style={styles.buttonText}>Cancel Workout</Text>
					</TouchableOpacity>
				</View>
				<View style={styles.headerRow}>
					<View>
						<Text style={styles.header}>Exercise Title</Text>
						<Text style={styles.text}>
							{`${monthNames[now.getMonth()]} ${now.getDate()}, ${now.getFullYear()}`}
						</Text>
					</View>

					<TouchableOpacity
						style={[styles.button, { backgroundColor: Colors.accent }]}
						onPress={() => {
							saveWorkout(workout);
							setVisible(false);
							setWorkout([]);
						}}
					>
						<Text style={styles.buttonText}>Finish</Text>
					</TouchableOpacity>
				</View>

				<ScrollView contentContainerStyle={{ paddingBottom: Spacing.xl }}>
					{workout.map((exercise) => (
						<Exercise
							key={exercise.key}
							exerciseData={exercise}
							addSet={addSet}
							deleteSet={deleteSet}
							setWorkout={setWorkout}
							deleteExercise={deleteExercise}
						/>
					))}

					<TouchableOpacity
						style={[
							styles.button,
							{
								backgroundColor: Colors.cyan,
								marginTop: Spacing.lg,
								marginHorizontal: Spacing.lg,
							},
						]}
						onPress={() => setModalVisible(true)}
					>
						<Text
							style={[
								styles.text,
								{
									textAlign: "center",
									fontWeight: "800",
									fontFamily: Fonts?.rounded,
								},
							]}
						>
							Add Exercise
						</Text>
					</TouchableOpacity>
				</ScrollView>

				<ExerciseModal
					setWorkout={setWorkout}
					visible={modalVisible}
					setVisible={setModalVisible}
				/>
			</View>
		</Modal>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingTop: Spacing.xxxl,
		paddingHorizontal: Spacing.md,
		backgroundColor: Colors.background,
	},

	headerRow: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "flex-start",
		marginBottom: Spacing.md,
	},

	button: {
		borderRadius: Radius.md,
		paddingVertical: Spacing.sm,
		paddingHorizontal: Spacing.md,
		alignItems: "center",
		justifyContent: "center",
	},

	buttonText: {
		color: Colors.text,
		fontSize: 20,
		fontWeight: "700",
		textAlign: "center",
		fontFamily: Fonts?.rounded,
	},

	text: {
		color: Colors.text,
		fontSize: 20,
		fontFamily: Fonts?.sans,
	},

	header: {
		fontSize: 28,
		fontWeight: "900",
		color: Colors.text,
		fontFamily: Fonts?.rounded,
	},
});
