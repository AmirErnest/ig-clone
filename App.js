import * as React from 'react'
import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import GlobalStyles from './GlobalStyles';

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <HomeScreen/>
    </SafeAreaView>
  );
}

