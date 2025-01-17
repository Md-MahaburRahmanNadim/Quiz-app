import { Pressable, StyleSheet, Text, View } from "react-native";
type AnswerOption = {
  option: string;
  isSelected: boolean;
  onPress: () => void;
};
export default function AnswerOption({
  option,
  isSelected,
  onPress,
}: AnswerOption) {
  // console.log(option);
  return (
    <Pressable onPress={onPress} style={styles.container}>
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
