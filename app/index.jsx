import { Text, View } from "react-native";
import LandingPage from "@/components/landingPage";
import BottomLoginSheet from "@/components/bottomLogin";

export default function Index() {
return (
    <View
      style={{
        flex: 1,
      }}
    >
      <LandingPage />
      <BottomLoginSheet />
    </View>
  );
}