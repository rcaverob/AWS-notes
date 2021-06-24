import React from 'react';
import { Text, View, TextInput, Button, StyleSheet } from 'react-native';

function EditNoteModal({
  handleEditConfirm,
  closeEditModal,
  editFormState,
  setEditFormState,
}) {
  return (
    <View style={styles.modalBg}>
      <View style={styles.modalContent}>
        <Text>Note Title</Text>
        <TextInput
          onChangeText={(text) =>
            setEditFormState({ ...editFormState, title: text })
          }
          placeholder="Note title"
          value={editFormState.title}
          style={styles.input}
        />
        <Text>Note Content</Text>
        <TextInput
          onChangeText={(text) =>
            setEditFormState({ ...editFormState, content: text })
          }
          placeholder="Note content"
          value={editFormState.content}
          style={styles.input}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.modalButton}>
            <Button title="Cancel" onPress={closeEditModal} />
          </View>
          <View style={styles.modalButton}>
            <Button title="Confirm" onPress={handleEditConfirm} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { padding: 15, paddingTop: 30 },
  input: { marginBottom: 10, padding: 7, backgroundColor: '#eee' },
  modalBg: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: '100 %',
    backgroundColor: '#444444dd',
  },
  modalContent: {
    display: 'flex',
    borderRadius: 5,
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#fff',
    width: '95%',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  modalButton: {
    width: '45%',
  },
});

export default EditNoteModal;
