import { Stack } from "expo-router";
import { FC } from "react";

export default function Home() {
	return (
		<Stack>
			<Stack.Screen
				name="index"
				options={{
					title: "Main",
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
