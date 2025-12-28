import { supabase } from "@/supabase-client.ts";

export async function signIn(email: string, password: string) {
	const { error: signInError } = await supabase.auth.signInWithPassword({
		email,
		password,
	});
	if (signInError) {
		console.error("Error signing up: ", signInError.message);
	}
}

export async function signUp(email: string, password: string) {
	const { error: signUpError } = await supabase.auth.signUp({
		email,
		password,
	});
	if (signUpError) {
		console.error("Error signing up: ", signUpError.message);
	}
}
