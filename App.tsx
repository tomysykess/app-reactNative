import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={textStyles.container}>App Mobile with React-Native!</Text>
      <Image
        source={{
          uri: "https://www.shinyhunters.com/images/shiny/769.gif",
        }}
        style={{ width: 200, height: 200 }}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    justifyContent: "center",
  },
});
const textStyles = StyleSheet.create({
  container: {
    color: "#ffff",
  },
});
