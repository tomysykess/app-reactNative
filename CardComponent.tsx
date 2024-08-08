import { Text, View, StyleSheet } from "react-native";
import React, { Component } from "react";
import { Products } from "./Products";

export class CardComponent extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Lista Cards Components</Text>
        <View>
          <Text>acá van a ir las cards de productos</Text>
        </View>
      </View>
    );
  }
}

export default CardComponent;

const styles = StyleSheet.create({
  container: {
    padding: 5,
    backgroundColor: "#ffff",
    width: 300,
  },
  text: { fontWeight: "bold" },
});
