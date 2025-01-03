import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";

const App = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Aplikasi Todo</Text>
      <Link href="/pages/daftar-tugas" style={styles.link}>
        <Text style={styles.linkText}>Ke Daftar Tugas</Text>
      </Link>
      <Link href="/pages/about/page" style={styles.link}>
        <Text style={styles.linkText}>Tentang Aplikasi</Text>
      </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f8f9fa",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  link: {
    marginVertical: 10,
  },
  linkText: {
    fontSize: 18,
    color: "#007bff",
  },
});

export default App;
