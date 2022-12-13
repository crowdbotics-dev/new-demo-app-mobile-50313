import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.nUaTyDHa}></View></ScrollView>
    </SafeAreaView>;
};

const styles = StyleSheet.create({
  safeArea: {
    height: '100%'
  },
  aHVeCVpB: {
    width: 107,
    height: 62,
    left: 35,
    top: 56,
    transform: "rotate(8deg)"
  },
  nUaTyDHa: {
    width: 80,
    height: 80,
    backgroundColor: "#E4E4E4",
    borderRadius: 40
  }
});
export default Untitled2;