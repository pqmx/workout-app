import { Tabs } from "expo-router";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";
import { StatusBar } from "react-native";

const colors = {
	input: "#1A4C5F",
	modal: "#2C3E50",
	accent: "#3BFB00",
	background: "#04161C",
	cyan: "#00FFC6",
};

export default function RootLayout() {
	return (
		<>
			<StatusBar barStyle="light-content" />
			<Tabs
				screenOptions={{
					tabBarStyle: {
						backgroundColor: "#04161C",
					},
					tabBarActiveTintColor: colors.accent,
					headerShown: false,
				}}
			>
				<Tabs.Screen
					name="(home)"
					options={{
						title: "Home",
						tabBarIcon: ({ size, color }) => {
							return (
								<Entypo
									name="home"
									size={size}
									color={color}
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					name="second"
					options={{
						title: "Workout History",
						tabBarIcon: ({ size, color }) => {
							return (
								<AntDesign
									name="clock-circle"
									size={size}
									color={color}
								/>
							);
						},
					}}
				/>
				<Tabs.Screen
					name="third"
					options={{
						title: "Profile",
						tabBarIcon: ({ size, color }) => {
							return (
								<FontAwesome
									name="user-circle-o"
									size={size}
									color={color}
								/>
							);
						},
					}}
				/>
			</Tabs>
		</>
	);
}
