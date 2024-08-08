import { Modal, Pressable, Text, View, StyleSheet } from "react-native";
import React from "react";

const MyModal = ({ modalVisible, setModalVisible, name }: any) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => setModalVisible(!modalVisible)}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalView}>
          <Text style={textStyles.modalText}>Hello World!</Text>
          <Pressable
            style={buttonStyles.button}
            onPress={() => setModalVisible(!modalVisible)}
          >
            <Text style={buttonStyles.buttonText}>Hide Modal {name}</Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    backgroundColor: "#fff",
    borderRadius: 20,
    padding: 35,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
});

const textStyles = StyleSheet.create({
  modalText: {
    fontSize: 18,
    fontWeight: "bold",
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

export default MyModal;
