import { StatusBar } from "expo-status-bar";
import { Button, Image, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function App() {
  const [text, onChangeText] = React.useState<string>("texto inicial");
  const [number, onChangeNumber] = React.useState<string>("");
  const [textItem, setTextItem] = React.useState<string>("");
  const [itemList, setItemList] = React.useState<
    { id: string; value: string }[]
  >([]);

  const onHandlerChangeItem = (t: string) => setTextItem(t);

  const add = () => {
    setItemList((currentItems) => [
      ...currentItems,
      { id: Math.random().toString(), value: textItem },
    ]);
    setTextItem("");
    onChangeNumber("");
  };

  return (
    <View style={styles.container}>
      <Text style={textStyles.container}>Componente Core #1</Text>

      <View style={styles.containerProduct}>
        <TextInput
          placeholder="Insertar Texto"
          style={inputStyles.container}
          onChangeText={onHandlerChangeItem}
          value={textItem}
        />
        <Button title="ADD" onPress={add}></Button>
      </View>

      <Text style={textStyles.container}>Componente Core #2</Text>

      <View style={styles.containerProduct}>
        <TextInput
          placeholder="Insertar numero"
          style={inputStyles.container}
          onChangeText={onChangeNumber}
          value={number}
          keyboardType="numeric"
        />
        <Button title="ADD" onPress={add}></Button>
      </View>

      <Text style={textStyles.container}>App Mobile with React-Native!</Text>

      <Image
        source={{
          uri: "https://www.shinyhunters.com/images/shiny/769.gif",
        }}
        style={imageStyles.image}
      />
      <View>
        {itemList.map((item) => (
          <View style={styles.containerProduct} key={item.id}>
            <Text>{item.value}</Text>
          </View>
        ))}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ab307e",
    alignItems: "center",
    justifyContent: "center",
  },
  containerProduct: {
    flexDirection: "row",
    padding: 5,
    backgroundColor: "#ffff",
    width: 300,
    borderRadius: 5,
    justifyContent: "space-between",
  },
});

const textStyles = StyleSheet.create({
  container: {
    color: "#000000",
    fontWeight: "bold",
    alignItems: "center",
  },
});

const inputStyles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    color: "#9b9b9b",
    fontWeight: "ultralight",
    padding: 5,
    borderRadius: 2,
    alignItems: "center",
  },
});
const imageStyles = StyleSheet.create({
  image: {
    width: 350,
    height: 300,
    backgroundColor: "#ab307e",
  },
});
