import {
  Pressable,
  Alert,
  StyleSheet,
  Text,
  View,
  PressableProps,
} from "react-native";
import React from "react";
type CustomButton = {
  title: string;
  right_icon: React.ReactNode;
} & PressableProps;
// or
// } & React.ComponentProps <typeof Component> if the React native does not have any built in data type
const CustomButton = ({
  title,
  right_icon,
  ...PressableProps
}: CustomButton) => {
  return (
    <Pressable {...PressableProps} style={styles.buttonContainer}>
      <Text style={styles.buttonText}>{title}</Text>
      <View style={styles.buttonIcon}>{right_icon}</View>
    </Pressable>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
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
