import { Pressable, Text } from "react-native";
import { supabase } from "../supabase-client";

async function logout() {
	await supabase.auth.signOut();
}

export default function LogOut() {
	return (
		<Pressable
			onPress={logout}
			style={{
				padding: 12,
				backgroundColor: "#e53935",
				borderRadius: 6,
				alignItems: "center",
			}}
		>
			<Text style={{ color: "white", fontWeight: "600" }}>Log Out</Text>
		</Pressable>
	);
}
