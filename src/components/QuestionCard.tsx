import { StyleSheet, Text, View } from "react-native";
import AnswerOption from "./AnswerOption";

export default function QuestionCard() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>What is html?</Text>
      <AnswerOption />
      <AnswerOption />
      <AnswerOption />
      <AnswerOption />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    borderRadius: 20,
    paddingVertical: 40,
    backgroundColor: "#fff",
    gap: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
    lineHeight: 30,
  },
});
