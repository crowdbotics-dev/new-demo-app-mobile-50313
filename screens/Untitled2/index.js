import { CheckBox } from "react-native-elements";
import { ActivityIndicator } from "react-native";
import React from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";

const Untitled2 = () => {
  return <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={{
      backgroundColor: '#f0f0f1',
      padding: 10,
      position: 'relative',
      flex: 1
    }}><View style={styles.nUaTyDHa}></View><ActivityIndicator style={styles.aZBfuuub}></ActivityIndicator><CheckBox style={styles.YHjubdPG} title="Main check" size={44}></CheckBox></ScrollView>
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
  },
  aZBfuuub: {
    width: 132,
    height: 158,
    position: "absolute",
    left: 43,
    top: 131,
    backgroundColor: "#a31ed1",
    color: "#b65b5b"
  },
  YHjubdPG: {
    width: 183,
    height: 69,
    position: "absolute",
    left: 35,
    top: 355
  }
});
export default Untitled2;