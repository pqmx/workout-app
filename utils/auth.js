import { supabase } from "@/supabase-client.ts";

export async function signIn(email, password) {
	const { error: signInError } = await supabase.auth.signInWithPassword({
		email,
		password,
	});
	if (signInError) {
		console.error("Error signing up: ", signInError.message);
	}
}

export async function signUp(email, password) {
	const { error: signUpError } = await supabase.auth.signUp({
		email,
		password,
	});
	if (signUpError) {
		console.error("Error signing up: ", signUpError.message);
	}
}
