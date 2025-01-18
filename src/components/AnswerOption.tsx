import { Pressable, StyleSheet, Text, View } from "react-native";
import { useQuizContext } from "../providers/QuizProvider";
type AnswerOption = {
  option: string;
};
export default function AnswerOption({ option }: AnswerOption) {
  const { selectedOption, setSelectedOption } = useQuizContext();
  const isSelected = selectedOption === option;

  return (
    <Pressable
      onPress={() => {
        setSelectedOption(option);
      }}
      style={styles.container}
    >
      <Text
        style={[
          styles.title,
          isSelected && {
            backgroundColor: "#E1F396",
            borderColor: "yellow",
          },
        ]}
      >
        {option}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    padding: 20,
    borderRadius: 100,
    borderColor: "lightgray",
    borderWidth: 1,
  },
});
