import { View, Text, StyleSheet, Pressable } from "react-native";
import { Colors } from "../config/constants";

function PrimaryButton({ children, pressHandler }) {
  return (
    <View style={styles.outerContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.innerContainer, styles.pressed]
            : styles.innerContainer
        }
        onPress={pressHandler}
        // android_ripple={{ color: "#0c909c" }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  outerContainer: {
    borderRadius: 24,
    margin: 4,
    overflow: "hidden",
  },
  innerContainer: {
    backgroundColor: Colors.thirdColor,
    paddingVertical: 8,
    paddingHorizontal: 16,
    elevation: 2,
  },
  buttonText: {
    color: Colors.whiteColor,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
    backgroundColor: Colors.thirdColor,
  },
});

export default PrimaryButton;
