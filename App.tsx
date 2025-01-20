import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QuizScreen from "./src/app/QuizScreen";
import QuizContextProvider from "./src/providers/QuizProvider";

export default function App() {
  return (
    <>
      <QuizContextProvider>
        <QuizScreen />
      </QuizContextProvider>
      <StatusBar style="auto" />
    </>
  );
}
