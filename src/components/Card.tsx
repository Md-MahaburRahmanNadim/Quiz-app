import { StyleSheet, Text, View } from "react-native";
import { PropsWithChildren } from "react";
type Card = {
  title: string;
};
const Card = ({ children, title }: PropsWithChildren<Card>) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      {children}
    </View>
  );
};

export default Card;

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
