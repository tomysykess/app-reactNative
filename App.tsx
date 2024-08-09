import { StatusBar } from "expo-status-bar";
import {
  Alert,
  Button,
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
  Modal,
  Pressable,
} from "react-native";
import { useState } from "react";
import MyModal from "./components/MyModal";
import ListaItems from "./components/ListaItems";

export default function App() {
  const [number, setNumber] = useState<string>("");
  const [textItem, setTextItem] = useState<string>("");
  const [itemList, setItemList] = useState<{ id: string; value: string }[]>([]);
  const [selectedItemId, setSelectedItemId] = useState<string | null>(null);

  const onHandlerChangeItem = (t: string) => setTextItem(t);

  const add = () => {
    if (textItem !== "") {
      setItemList((currentItems) => [
        ...currentItems,
        { id: Math.random().toString(), value: textItem },
      ]);
      setTextItem("");
    } else {
      Alert.alert("Campo vacío", "llenalo bldo");
    }
  };

  const addNumber = () => {
    if (number !== "") {
      setItemList((currentItems) => [
        ...currentItems,
        { id: Math.random().toString(), value: number },
      ]);
      setNumber("");
    } else {
      Alert.alert("Campo num vacío", "llenalo bldo");
    }
  };

  const openModal = (id: string) => {
    setSelectedItemId(id);
  };

  const closeModal = () => {
    setSelectedItemId(null);
  };

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <Text style={textStyles.header}>Componente Core #1</Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Insertar Texto"
            style={inputStyles.textInput}
            onChangeText={onHandlerChangeItem}
            value={textItem}
          />
          <Pressable style={buttonStyles.button} onPress={add}>
            <Text style={buttonStyles.buttonText}>ADD</Text>
          </Pressable>
        </View>

        <Text style={textStyles.header}>Componente Core #2</Text>

        <View style={styles.inputContainer}>
          <TextInput
            placeholder="Insertar número"
            style={inputStyles.textInput}
            onChangeText={setNumber}
            value={number}
            keyboardType="numeric"
          />
          <Pressable style={buttonStyles.button} onPress={addNumber}>
            <Text style={buttonStyles.buttonText}>ADD</Text>
          </Pressable>
        </View>
        <Text style={textStyles.title}>App Mobile with React-Native!</Text>
        <Image
          source={{
            uri: "https://www.shinyhunters.com/images/shiny/769.gif",
          }}
          style={imageStyles.image}
        />
        <ListaItems
          openModal={openModal}
          closeModal={closeModal}
          itemList={itemList}
          selectedItemId={selectedItemId}
        />
      </SafeAreaView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#282C35",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
    backgroundColor: "#3A3F47",
    borderRadius: 10,
    padding: 10,
  },
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#6A0E77",
    borderRadius: 5,
    color: "#fff",
  },
});

const textStyles = StyleSheet.create({
  header: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  title: {
    color: "#fff",
    fontSize: 16,
    marginBottom: 20,
    textAlign: "center",
  },
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

const inputStyles = StyleSheet.create({
  textInput: {
    flex: 1,
    paddingVertical: 8,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    marginRight: 10,
  },
});

const buttonStyles = StyleSheet.create({
  button: {
    backgroundColor: "#6A0E77",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

const imageStyles = StyleSheet.create({
  image: {
    width: 300,
    height: 250,
    marginVertical: 20,
    borderRadius: 10,
  },
});
