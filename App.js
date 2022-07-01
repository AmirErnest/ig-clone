import * as React from 'react'
import { SafeAreaView } from "react-native";
import HomeScreen from "./screens/HomeScreen";
import GlobalStyles from './GlobalStyles';
import NewPostScreen from './screens/NewPostScreen';

export default function App() {
  return (
    <SafeAreaView style={GlobalStyles.droidSafeArea}>
      <NewPostScreen />
    </SafeAreaView>
  );
}

