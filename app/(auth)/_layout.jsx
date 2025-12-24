import { Stack } from "expo-router";

export default function Auth() {
	return (
		<Stack>
			<Stack.Screen
				name="sign-in"
				options={{
					title: "Sign In",
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name="sign-up"
				options={{
					title: "Sign Up",
					headerShown: false,
				}}
			/>
		</Stack>
	);
}
