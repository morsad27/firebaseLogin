import LandingPage from "@/components/landingPage";
import { StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaProvider>
      <StatusBar type="dark" backgroundColor="#121212"/>
      <View
        style={{
          flex: 1,
        }}
      >
        <LandingPage />
        {/* <BottomLoginSheet /> */}
      </View>
    </SafeAreaProvider>
  );
}
