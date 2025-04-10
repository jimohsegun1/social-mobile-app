import { useAuth } from "@clerk/clerk-expo";
import { Stack, useRouter, useSegments } from "expo-router";
import { useEffect } from "react";

export default function InitialLayout() {
  const { isLoaded, isSignedIn } = useAuth();
  const segments = useSegments();
  const router = useRouter();

  useEffect(() => {
    if (!isLoaded) return; // if clerk is not loaded, do nothing

    const inAuthScreen = segments[0] === "(auth)"; // if the first segment is (auth), we are in the auth screen
    if (!isSignedIn && !inAuthScreen) {
      router.push("/(auth)/login");
    } else if (isSignedIn && inAuthScreen) {
      router.push("/(tabs)");
    }
  }, [isLoaded, isSignedIn, segments]); // run this effect every time isLoaded, isSignedIn, or segments change

  if (!isLoaded) return null;

  return <Stack screenOptions={{ headerShown: false }} />;
}
