import {
  Alert,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import QuestionCard from "../components/QuestionCard";
import FontAwesome6 from "@expo/vector-icons/FontAwesome6";
import questions from "../questions";
import CustomButton from "../components/CustomButton";
const Question = questions[0];
// console.log(Question);

export default function QuizScreen() {
  return (
    <SafeAreaView style={styles.page}>
      <View style={styles.container}>
        <View>
          <Text style={styles.title}>Question 1/5</Text>
        </View>
        <View>
          <QuestionCard question={Question} />
          <Text style={styles.timer}>20 sec</Text>
        </View>
        <CustomButton
          title="Next"
          onPress={() => {
            Alert.alert("next button is presed");
          }}
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
