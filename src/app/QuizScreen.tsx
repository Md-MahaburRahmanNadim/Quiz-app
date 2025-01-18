import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import questions from "../questions";
import CustomButton from "../components/CustomButton";
import { useState } from "react";
import Card from "../components/Card";
// const Question = questions[0];
// console.log(Question);

export default function QuizScreen() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const onPress = () => {
    setQuestionIndex(questionIndex + 1);
  };
  const Question = questions[questionIndex];

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Question {questionIndex ? questionIndex : 1}/5
          </Text>
        </View>
        {Question ? (
          <View>
            <QuestionCard question={Question} />
            <Text style={styles.timer}>20 sec</Text>
          </View>
        ) : (
          <Card title="Well Done">
            <Text>Out of 3/5</Text>
            <Text>Best course</Text>
          </Card>
        )}
        <CustomButton
          title="Next"
          onPress={onPress}
          right_icon={
            <FontAwesome6 name="arrow-right-long" size={16} color="white" />
          }
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#FDFEF4",
    flex: 1,
  },
  container: {
    justifyContent: "space-between",
    padding: 20,
    flex: 1,
  },
  title: {
    textAlign: "center",
    fontWeight: "500",
    color: "#005055",
  },
  timer: {
    textAlign: "center",
    fontWeight: "500",
    color: "#005055",
    marginTop: 20,
  },
  buttonContainer: {
    backgroundColor: "#005055",
    padding: 20,
    borderRadius: 20,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    textAlign: "center",
    color: "#fff",
  },
  buttonIcon: {
    color: "#fff",
    position: "absolute",
    right: 20,
  },
});
