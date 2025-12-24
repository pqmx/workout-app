import { StatusBar } from "expo-status-bar";
import { useState } from "react";

import {
	StyleSheet,
	Text,
	TouchableOpacity,
	Modal,
	FlatList,
} from "react-native";
Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { color: "white" };
import "react-native-get-random-values";
import { v4 as uuidv4 } from "uuid";
import exercises from "../data/exercises.json";
import { Colors, Fonts, Spacing } from "@/constants/theme";

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.style = { color: Colors.text };

function capitalize(str) {
	return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

export default function ExerciseModal(props) {
	return (
		<Modal
			animationType="slide"
			transparent={false}
			visible={props.visible}
		>
			<FlatList
				style={{ paddingTop: 60, backgroundColor: Colors.background }}
				data={exercises}
				renderItem={({ item: exercise }) => {
					return (
						<TouchableOpacity
							style={styles.exercise}
							onPress={() => {
								props.setWorkout((prev) => [
									...prev,
									{ key: uuidv4(), name: exercise.name, sets: [] },
								]);
								props.setVisible(false);
							}}
						>
							<Text style={styles.name}>{exercise.name}</Text>
							<Text style={styles.subtitle}>
								{capitalize(exercise.muscle)} | {capitalize(exercise.equipment)}
							</Text>
						</TouchableOpacity>
					);
				}}
			/>
		</Modal>
	);
}

const styles = StyleSheet.create({
	exercise: {
		paddingVertical: Spacing.sm,
		paddingHorizontal: Spacing.md,
		backgroundColor: Colors.modal,
		flex: 1,
		borderBottomWidth: 1,
		borderBottomColor: Colors.input, // subtle divider between exercises
	},

	name: {
		fontSize: 24,
		fontWeight: "600",
		color: Colors.text,
		fontFamily: Fonts?.rounded,
	},

	subtitle: {
		fontSize: 20,
		color: Colors.text,
		fontFamily: Fonts?.sans,
		marginTop: Spacing.xs,
	},
});
