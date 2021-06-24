import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

function NoteComponent({ title, content, deleteNote }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <Button title="Delete" onPress={deleteNote}></Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    padding: 8,
    backgroundColor: '#f2f2f2',
  },
  title: {
    padding: 5,
    fontWeight: 'bold',
    fontSize: 13,
  },
  content: {
    padding: 8,
    fontSize: 11,
  },
});

export default NoteComponent;
