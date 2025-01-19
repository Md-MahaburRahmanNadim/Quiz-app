import { Alert, SafeAreaView, StyleSheet, Text, View } from "react-native";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import CustomButton from "../components/CustomButton";
import Card from "../components/Card";
// import { useContext, useState } from "react";
// import { QuizContext } from "../providers/QuizProvider";
// this 2 line going to convert with the below custom hocks
import { useQuizContext } from "../providers/QuizProvider";
import { useEffect, useState } from "react";

export default function QuizScreen() {
  /* The line `const { question, questionIndex } = useContext(QuizContext);` is using the `useContext`
hook in React to consume the context provided by the `QuizContext` context provider. */

  // const { question, questionIndex } = useContext(QuizContext);

  /* The line `const { question, questionIndex } = useQuizContext();` is using a custom hook
`useQuizContext` to access the values of `question` and `questionIndex` from the context provided by
the `QuizProvider`. This custom hook abstracts away the complexity of using the `useContext` hook
directly and provides an easier way to consume the context values within the `QuizScreen` component. */

  const {
    question,
    questionIndex,
    onNext,
    scoure,
    totalQuestion,
    bestScoure,
    isFinished,
  } = useQuizContext();
  // woking for timer
  const [timer, setTimer] = useState(20);
  useEffect(() => {
    /* The line `if (isFinished) return;` in the `useEffect` hook is checking if the `isFinished` flag
    is true. If `isFinished` is true, it means that the quiz has been completed or finished. In that
    case, the `return` statement is used to exit early from the `useEffect` hook without executing
    the rest of the code inside it. This helps in preventing unnecessary operations or side effects
    from running when the quiz is already finished. */

    if (isFinished) return;
    setTimer(20);
    const interval = setInterval(() => {
      setTimer((t) => t - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
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
