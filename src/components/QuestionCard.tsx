import { Alert, StyleSheet, Text, View } from "react-native";
import AnswerOption from "./AnswerOption";
import { Question } from "../types";
import Card from "./Card";
import { useState } from "react";
type QuestionCard = {
  question: Question;
};
export default function QuestionCard({ question }: QuestionCard) {
  return (
    <Card title={question.title}>
      {question.options.map((option) => {
        return <AnswerOption key={option} option={option} />;
      })}
    </Card>
    // <View style={styles.container}>
    //   <Text style={styles.title}>{question.title}</Text>
    //   {question.options.map((option) => {
    //     return (
    //       <AnswerOption
    //         key={option}
    //         option={option}
    //         isSelected={option === SelectedOption}
    //         onPress={() => {
    //           Alert.alert(option, "option is pressed");
    //         }}
    //       />
    //     );
    //   })}
    // </View>
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
