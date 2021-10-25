import React from 'react';
import { StyleSheet, Image, TouchableOpacity, Text, View } from 'react-native';

export default function Results(props) {
  const params = props.route.params
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Results</Text>
      </View>
      <View style={styles.results}>
        <View style={[styles.resultsPill, styles.resultsPillGreen]}>
          <Text style={styles.resultsPillText}>Not Hotdog!</Text>
        </View>
      </View>
      <View style={styles.imageContainer}>
        <Image source={{ uri: params.uri }} style={styles.image} />
      </View>
      <View style={styles.body}>
        <TouchableOpacity 
          activeOpacity={0.7} 
          style={styles.button}
        >
          <Text style={styles.buttonText}>Scan Again</Text>
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  results: {
    flex: 1
  },
  resultsPill: {
    paddingHorizontal: 30,
    paddingVertical: 18,
    borderRadius: 30
  },
  resultsPillRed: { backgroundColor: "#FF8B60" },
  resultsPillGreen: { backgroundColor: "#78D769", color: "#606060" },
  resultsPillNeutral: { backgroundColor: "#808080" },
  resultsPillText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#f8f8f8"
  }, 
  imageContainer: {
    flex: 3
  },
  image: {
    width: 300,
    height: 350,
  },
  body: {
    flex: 1
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#303030',
    marginVertical: 10
  },
  subtitle: {
    fontSize: 18,
    color: '#606060'
  },
  button: {
    padding: 12,
    backgroundColor: '#5A7EFC',
    borderRadius: 8,
    borderStyle: "solid",
    borderWidth: 3,
    borderColor: "#435EC0",
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
