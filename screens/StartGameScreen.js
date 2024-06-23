import { Alert, StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { Colors } from "../config/constants";
import { useState } from "react";

function StartGameScreen() {
  const [userInput, setUserInput] = useState("");

  // handlers
  const onUserInputChanged = (value) => {
    setUserInput(value);
  };

  const onResetUserInput = () => {
    setUserInput("");
  };

  const onConfirmUserInput = () => {
    const value = parseInt(userInput);
    if (isNaN(value) || value <= 0 || value > 99) {
      Alert.alert(
        "Invalid number",
        "Number has to a number between 1 and 99.",
        [{ text: "Okay", style: "destructive", onPress: onResetUserInput }]
      );
    }
  };

  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
        value={userInput}
        onChangeText={onUserInputChanged}
      />
      <View style={styles.buttonGroup}>
        <View style={styles.buttonContainer}>
          <PrimaryButton pressHandler={onResetUserInput}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton pressHandler={onConfirmUserInput}>
            Confirm
          </PrimaryButton>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 16,
    borderRadius: 8,
    padding: 16,
    backgroundColor: Colors.secondaryColor,
    // android shadow
    elevation: 4,
    // ios shadow
    shadowColor: "black",
    shadowOffset: {
      width: 4,
      height: 4,
    },
    shadowRadius: 4,
    shadowOpacity: 0.25,
    // justifyContent: "center",
    alignItems: "center",
  },
  numberInput: {
    width: 48,
    height: 48,
    fontSize: 32,
    borderBottomColor: Colors.mainColor,
    borderBottomWidth: 2,
    color: Colors.mainColor,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
