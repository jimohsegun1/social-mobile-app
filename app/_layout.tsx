import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useCallback, useEffect } from "react";

import * as NavigationBar from "expo-navigation-bar";
import { Platform } from "react-native";

export default function RootLayout() {
  // update the native navigation bar on Android.
  useEffect(() => {
    if (Platform.OS === "android") {
      NavigationBar.setBackgroundColorAsync("#000000");
      NavigationBar.setButtonStyleAsync("light");
    }
  }, []);

  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <Stack screenOptions={{ headerShown: false }}></Stack>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
