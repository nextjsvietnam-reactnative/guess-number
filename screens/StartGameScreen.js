import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { Colors } from "../config/constants";

function StartGameScreen() {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCorrect={false}
        autoCapitalize="none"
      />
      <View style={styles.buttonGroup}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
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
