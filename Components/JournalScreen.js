import React from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity } from 'react-native';

const JournalScreen = () => {
  const journalEntries = [
    { id: '1', title: 'Entry 1', content: 'This is the content of entry 1.' },
    { id: '2', title: 'Entry 2', content: 'This is the content of entry 2.' },
  ];

  const renderJournalEntry = ({ item }) => {
    return (
      <TouchableOpacity style={styles.entryContainer}>
        <Text style={styles.entryTitle}>{item.title}</Text>
        <Text style={styles.entryContent}>{item.content}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Journal Screen</Text>
      <FlatList
        data={journalEntries}
        keyExtractor={(item) => item.id}
        renderItem={renderJournalEntry}
        style={styles.entryList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#f0f0f0',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
  },
  entryList: {
    flex: 1,
    marginTop: 10,
  },
  entryContainer: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#fff',
  },
  entryTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  entryContent: {
    fontSize: 16,
  },
});

export default JournalScreen;