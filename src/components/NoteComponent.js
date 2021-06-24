import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

function NoteComponent({ title, content }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.content}>{content}</Text>
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
