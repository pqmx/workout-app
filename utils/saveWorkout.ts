import { v4 as uuidv4 } from "uuid";
import { supabase } from "../supabase-client";
import { ExerciseData } from "@/constants/alias";

export default async function saveWorkout(workout: ExerciseData[]) {
	const {
		data: { user },
	} = await supabase.auth.getUser();

	const now = new Date();
	const workoutId = uuidv4();

	await supabase
		.from("workouts")
		.insert([
			{
				id: workoutId,
				user_id: user.id, //will not work if we disable authentication.

				date: now,
			},
		])
		.single();

	let exerciseOrder = 0;
	for (const [i, exercise] of Object.entries(workout)) {
		exerciseOrder = Number(i) + 1;
		const { data, error } = await supabase.from("exercises").insert([
			{
				id: exercise.key,
				workout_id: workoutId,
				exercise_name: exercise.name,
				order_index: exerciseOrder,
			},
		]);

		let setOrder = 0;
		for (const [j, set] of Object.entries(exercise.sets)) {
			setOrder = Number(j) + 1;
			await supabase.from("sets").insert([
				{
					id: set.key,
					exercise_id: exercise.key,
					weight: set.weight,
					reps: set.reps,
					order_index: setOrder,
				},
			]);
		}
	}
}
