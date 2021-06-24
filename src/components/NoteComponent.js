import React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';

function NoteComponent({ title, content, deleteNote, openEditModal }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
      <View style={styles.footer}>
        <View style={styles.buttonContainer}>
          <Button title="Delete" onPress={deleteNote}></Button>
        </View>
        <View style={styles.buttonContainer}>
          <Button
            title="Edit"
            onPress={() => openEditModal(title, content)}
          ></Button>
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
    fontSize: 16,
  },
  content: {
    padding: 8,
    fontSize: 14,
  },
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  buttonContainer: {
    width: '45%',
  },
});

export default NoteComponent;
