import { FlatList, StyleSheet, Text, View } from "react-native";
import MyModal from "./MyModal";

const ListaItems = ({
  openModal,
  closeModal,
  itemList,
  selectedItemId,
}: any) => {
  console.log(selectedItemId);
  return (
    <FlatList
      data={itemList}
      renderItem={({ item }) => (
        <View>
          <Text onPress={() => openModal(item.id)} style={styles.listItem}>
            {item.value}
          </Text>

          <MyModal
            modalVisible={selectedItemId === item.id}
            setModalVisible={closeModal}
            name={item.value}
          />
        </View>
      )}
      keyExtractor={(item) => item.id}
    />
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#6A0E77",
    borderRadius: 5,
    color: "#fff",
  },
});

export default ListaItems;
