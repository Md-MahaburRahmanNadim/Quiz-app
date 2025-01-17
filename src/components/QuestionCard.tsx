import { Alert, StyleSheet, Text, View } from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";
type QuestionCard = {
  question: Question;
};
export default function QuestionCard({ question }: QuestionCard) {
  const SelectedOption = question.options[2];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{question.title}</Text>
      <AnswerOption
        option={question.options[0]}
        isSelected={question.options[0] === SelectedOption}
        onPress={() => {
          Alert.alert(question.options[0], "option is pressed");
        }}
      />
      <AnswerOption
        option={question.options[1]}
        isSelected={question.options[1] === SelectedOption}
        onPress={() => {
          Alert.alert(question.options[1], "option is pressed");
        }}
      />
      <AnswerOption
        option={question.options[2]}
        isSelected={question.options[2] === SelectedOption}
        onPress={() => {
          Alert.alert(question.options[2], "option is pressed");
        }}
      />
      <AnswerOption
        option={question.options[3]}
        isSelected={question.options[3] === SelectedOption}
        onPress={() => {
          Alert.alert(question.options[3], "option is pressed");
        }}
      />
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
    paddingLeft: 13,
  },
});
