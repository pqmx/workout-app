import { Stack, useRouter, useSegments } from "expo-router";
import { StatusBar } from "react-native";
import { supabase } from "../supabase-client";
import React from "react";

export default function RootLayout() {
	const [session, setSession] = React.useState(null);
	const [isLoading, setIsLoading] = React.useState(true);
	const segments = useSegments();
	const router = useRouter();

	React.useEffect(() => {
		// Fetch initial session
		supabase.auth.getSession().then(({ data: { session } }) => {
			setSession(session);
			setIsLoading(false);
		});

		const { data: authListener } = supabase.auth.onAuthStateChange(
			(_event, session) => {
				setSession(session);
			}
		);

		return () => {
			authListener.subscription.unsubscribe();
		};
	}, []);

	React.useEffect(() => {
		if (isLoading) return;

		const inAuthGroup = segments[0] === "(auth)";

		if (!session && !inAuthGroup) {
			router.replace("/(auth)/sign-in");
		} else if (session && inAuthGroup) {
			// Redirect to tabs if authenticated
			router.replace("/(tabs)");
		}
	}, [session, segments, isLoading]);

	return (
		<>
			<StatusBar barStyle="light-content" />
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(auth)" />
				<Stack.Screen name="(tabs)" />
			</Stack>
		</>
	);
}
