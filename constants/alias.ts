type SetWorkout = React.Dispatch<React.SetStateAction<ExerciseData[]>>;

export interface Set {
	key: string;
	weight: string;
	reps: string;
}

export interface ExerciseData {
	key: string;
	name: string;
	sets: Set[];
}

export interface exerciseProps {
	exerciseData: ExerciseData;
	addSet: (exerciseKey: string) => void;
	deleteSet: (exerciseKey: string, setKey: string) => void;
	setWorkout: SetWorkout;
	deleteExercise: (exerciseKey: string) => void;
}

export interface UpdateSet {
	(exerciseKey: string, setKey: string, type: "weight" | "reps", value: string);
}

export interface propsModal {
	visible: boolean;
	setWorkout: SetWorkout;
	setVisible: React.Dispatch<React.SetStateAction<boolean>>;
}
