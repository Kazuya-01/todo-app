import React from "react";
import { View, Text, StyleSheet } from "react-native";

const AboutApps = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tentang Aplikasi</Text>
      <Text style={styles.description}>
        Aplikasi Todo ini memungkinkan pengguna untuk mengelola daftar tugas
        dengan fitur menambahkan, menandai selesai, dan menghapus tugas.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#f8f9fa",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    textAlign: "center",
  },
});

export default AboutApps;
