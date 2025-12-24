import { Stack } from "expo-router";

export default function Third() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Third",
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
