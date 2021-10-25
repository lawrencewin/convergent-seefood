import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';
import cameraLogo from "../camera.png"

export default function Home({ navigation }) {
  const onButtonPress = () => {
    navigation.navigate("Results")
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>SeeFood</Text>
        <Text style={styles.subtitle}>The Shazam for Foods</Text>
      </View>
      <View style={styles.body}>
        <TouchableOpacity 
          activeOpacity={0.7} 
          style={styles.button}
          onPress={onButtonPress}
        >
          <Image source={cameraLogo} style={styles.buttonIcon} />
          <Text style={styles.buttonText}>Scan</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: "#FFE58C"
  },
  header: {
    flex: 1,
    display: 'center',
    alignItems: 'center',
    justifyContent: 'center'
  },
  body: {
    flex: 1
  },
  title: {
    fontSize: 64,
    fontWeight: 'bold',
    color: '#303030',
    marginVertical: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#606060'
  },
  button: {
    padding: 24,
    backgroundColor: '#5A7EFC',
    borderRadius: 60,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#435EC0",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: 100,
    height: 100,
    shadowColor: "#606060",
    shadowRadius: 4
  },
  buttonText: {
    color: '#fff'
  },
  buttonIcon: {
    width: 32,
    height: 32
  }
});
