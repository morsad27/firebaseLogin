import { Text, View } from "react-native";
import AnimatedIntro from "@/components/animatedIntro";
import BottomLoginSheet from "@/components/bottomLogin";

export default function Index() {
return (
    <View
      style={{
        flex: 1,
      }}
    >
      <AnimatedIntro />
      <BottomLoginSheet />
    </View>
  );
}