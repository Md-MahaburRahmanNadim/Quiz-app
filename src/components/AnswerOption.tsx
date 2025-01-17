import { StyleSheet, Text, View } from "react-native";

export default function AnswerOption() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This is an option</Text>
    </View>
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
