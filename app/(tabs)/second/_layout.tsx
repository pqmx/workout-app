import { Stack } from "expo-router";

export default function Second() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Second",
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
