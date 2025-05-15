import LandingPage from "@/components/landingPage";
import * as Google from "expo-auth-session/providers/google";
import * as WebBrowser from "expo-web-browser";
import { GoogleAuthProvider, signInWithCredential } from "firebase/auth";
import * as React from "react";
import { StatusBar, View } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { auth } from "../firebase.client";

WebBrowser.maybeCompleteAuthSession();

export default function Index() {
  const [userInfo, setUserInfo] = React.useState();
  const [request, response, promptAsync] = Google.useAuthRequest({
    androidClientId:
      "657656599605-p4vd805q7bgcqrcdp74tc9n48bba2773.apps.googleusercontent.com",
  });

  React.useEffect(() => {
    if (response?.type == "success") {
      const { id_token } = response.params;
      const credential = GoogleAuthProvider.credential(id_token);
      signInWithCredential(auth, credential);
    }
  }, [response]);

  return (
    <SafeAreaProvider>
      <StatusBar type="dark" backgroundColor="#121212" />
      <View
        style={{
          flex: 1,
        }}
      >
        <LandingPage promptAsync={promptAsync} />
        {/* <BottomLoginSheet /> */}
      </View>
    </SafeAreaProvider>
  );
}
