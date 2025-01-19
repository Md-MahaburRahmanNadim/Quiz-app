import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
// import { useContext, useState } from "react";
// import { QuizContext } from "../providers/QuizProvider";
// this 2 line going to convert with the below custom hocks
import { useQuizContext } from "../providers/QuizProvider";
import { useEffect, useRef, useState } from "react";
import { useTimer } from "../hooks/useTimer";
export default function QuizScreen() {
  // Quizcontent hook data
  const {
    question,
    questionIndex,
    onNext,
    scoure,
    totalQuestion,
    bestScoure,
    isFinished,
  } = useQuizContext();
  const { timer, startTimer, clearTimer } = useTimer(20, isFinished);
  useEffect(() => {
    // const clear = startTimer();
    startTimer();
    return () => {
      // clear();
      clearTimer();
    };
  }, [question]);
  useEffect(() => {
    if (timer <= 0) {
      onNext();
    }
  }, [timer]);

  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>
            Question {questionIndex + 1}/{totalQuestion}
          </Text>
        </View>
        {question ? (
          <View>
            <QuestionCard question={question} />
            <Text style={styles.timer}>{timer} sec</Text>
          </View>
        ) : (
          <Card title="Well Done">
            <Text>
              Out of {scoure}/{totalQuestion}
            </Text>
            <Text>Best scoure :{bestScoure}</Text>
          </Card>
        )}
        <CustomButton
          title="Next"
          onPress={onNext}
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
