import Amplify from '@aws-amplify/core';
import config from './src/aws-exports';
Amplify.configure(config);

import React, { useState, useEffect } from 'react';
import NoteComponent from './src/components/NoteComponent';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet,
  LogBox,
} from 'react-native';
import { DataStore } from '@aws-amplify/datastore';
import { Note } from './src/models';

// To ignore Android warning about using long timers (used by AWS Datastore observe)
LogBox.ignoreLogs(['Setting a timer']);

const initialFormState = {
  title: '',
  content: '',
};

export default function App() {
  const [formState, setFormState] = useState(initialFormState);
  const [notes, setNotes] = useState([]);

  // Synchronize with the cloud Datastore
  useEffect(() => {
    // Initial fetch
    fetchNotes();
    const subscription = DataStore.observe(Note).subscribe(() => fetchNotes());
    return () => subscription.unsubscribe();
  });

  function onFormChange(key, value) {
    setFormState({ ...formState, [key]: value });
  }

  async function fetchNotes() {
    const notes = await DataStore.query(Note);
    setNotes(notes);
  }

  async function createNote() {
    if (!formState.title) return;
    await DataStore.save(new Note({ ...formState }));
    setFormState(initialFormState);
  }

  async function deleteNote(note) {
    await DataStore.delete(note);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>My Notes</Text>
      <TextInput
        onChangeText={(text) => onFormChange('title', text)}
        placeholder="Note title"
        value={formState.title}
        style={styles.input}
      />
      <TextInput
        onChangeText={(text) => onFormChange('content', text)}
        placeholder="Note content"
        value={formState.content}
        style={styles.input}
      />
      <Button onPress={createNote} title="Create Note" />

      {notes.map((note) => (
        <NoteComponent
          key={note.id}
          title={note.title}
          content={note.content}
          deleteNote={() => deleteNote(note)}
        />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, paddingTop: 30 },
  input: { marginBottom: 10, padding: 7, backgroundColor: '#eee' },
  heading: { fontSize: 35 },
  noteBg: { backgroundColor: 'white' },
  noteStyle: { padding: 20, marginTop: 7, borderRadius: 4 },
  noteTitle: { margin: 0, padding: 9, fontSize: 20 },
});
