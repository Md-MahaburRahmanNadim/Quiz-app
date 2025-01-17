import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import React from "react";
import QuizScreen from "./src/app/QuizScreen";

export default function App() {
  return (
    <>
      <QuizScreen />
      <StatusBar style="auto" />
    </>
  );
}
