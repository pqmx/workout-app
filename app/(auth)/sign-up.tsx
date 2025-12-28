import {
	StyleSheet,
	Text,
	TouchableOpacity,
	TextInput,
	View,
	Pressable,
} from "react-native";
import { Colors, Fonts, Spacing, Radius } from "@/constants/theme";
import { Image } from "expo-image";
import { signUp } from "../../utils/auth";
import { useState } from "react";
import { Link } from "expo-router";

export default function Index() {
	let [email, setEmail] = useState("");
	let [password, setPassword] = useState("");
	return (
		<View style={styles.container}>
			<View style={styles.content}>
				<View style={styles.intro}>
					<Text style={styles.create}>Create your account</Text>
					<Text style={{ textAlign: "center", fontSize: Spacing.sm * 1.5 }}>
						Welcome! Please fill in the details to get started.
					</Text>
				</View>

				<View>
					<Pressable style={styles.button}>
						<View style={styles.alt}>
							<Image
								source={require("@/assets/google.svg")}
								style={{ width: 24, height: 24 }}
							/>
							<Text style={styles.continue}>Sign up with Google</Text>
						</View>
					</Pressable>
					<Pressable style={styles.button}>
						<View style={styles.alt}>
							<Image
								source={require("@/assets/apple.svg")}
								style={{ width: 24, height: 24 }}
							/>
							<Text style={[styles.continue, { marginRight: 5, marginTop: 1 }]}>
								Sign up with Apple{" "}
							</Text>
						</View>
					</Pressable>
				</View>

				<View style={styles.dividerContainer}>
					<View style={styles.divider} />
					<Text style={styles.dividerText}>or</Text>
					<View style={styles.divider} />
				</View>

				<View style={styles.survey}>
					<View>
						<Text style={styles.surveyText}>Email Address</Text>
						<TextInput
							style={styles.input}
							placeholder="Enter your email"
							onChangeText={setEmail}
						/>
					</View>
					<View>
						<Text style={styles.surveyText}>Password</Text>
						<TextInput
							style={styles.input}
							placeholder="Enter your password"
							onChangeText={setPassword}
						/>
					</View>
				</View>

				<Pressable
					style={[
						styles.button,
						styles.continueButton,
						{ marginTop: Spacing.xl },
					]}
					onPress={async () => {
						await signUp(email, password);
					}}
				>
					<Text style={{ textAlign: "center" }}>Continue</Text>
				</Pressable>

				<View
					style={{
						flexDirection: "row",
						alignItems: "center",
						justifyContent: "center",
						marginTop: Spacing.md,
					}}
				>
					<Text style={{ textAlign: "center" }}>Already have an account?</Text>
					<Link
						href="/sign-in"
						push
						asChild
					>
						<Pressable>
							<Text style={{ marginLeft: 5, fontWeight: "700" }}>Sign In</Text>
						</Pressable>
					</Link>
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	//whole container
	container: {
		flex: 1,
		alignItems: "center",
		marginHorizontal: Spacing.xl,
		marginVertical: Spacing.xxxl * 2,
		borderRadius: 5,
		borderWidth: 1,
		borderColor: "#ddd",
	},
	content: {
		width: "100%",
		padding: Spacing.sm,
	},

	// first text
	intro: {
		alignItems: "center",
		marginBottom: Spacing.md,
	},
	create: {
		marginTop: Spacing.lg,
		marginBottom: Spacing.sm,
		fontWeight: 700,
		fontSize: Spacing.lg,
		textAlign: "center",
	},

	//alternative sign in

	alt: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: Spacing.xxxl * 1.25,
		paddingVertical: Spacing.sm,
	},
	continue: {
		fontWeight: "600",
	},

	// or divider text

	dividerContainer: {
		flexDirection: "row",
		alignItems: "center",
		justifyContent: "center",
		marginTop: Spacing.xl,
		paddingHorizontal: Spacing.lg,
	},
	dividerText: {
		textAlign: "center",
		marginHorizontal: Spacing.sm,
		color: "#666",
	},
	divider: {
		flex: 1,
		height: 1,
		backgroundColor: "#666",
	},

	// Entering info
	survey: {
		justifyContent: "flex-start",
		marginTop: Spacing.lg,
	},
	surveyText: {
		marginTop: Spacing.sm,
		fontWeight: 600,
	},
	input: {
		marginTop: Spacing.sm,
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 10,
		borderColor: "#ddd",
		paddingVertical: Spacing.sm * 1.5,
		paddingHorizontal: Spacing.sm,
	},

	//continue button
	continueButton: {
		paddingVertical: Spacing.sm * 1.5,
		paddingHorizontal: Spacing.sm,
	},
	// misc

	button: {
		marginTop: Spacing.sm,
		borderWidth: 1,
		borderStyle: "solid",
		borderRadius: 10,
		justifyContent: "center",
		borderColor: "#ddd",
	},
});
