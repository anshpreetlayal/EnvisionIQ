import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  const handleCategorySelection = (category) => {
    navigation.navigate('Home', { category });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Choose a Category</Text>
      <View style={styles.buttonContainer}>
        <Button title="Inspirational" onPress={() => handleCategorySelection('inspirational')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Motivational" onPress={() => handleCategorySelection('motivational')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Success" onPress={() => handleCategorySelection('success')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Love" onPress={() => handleCategorySelection('love')} />
      </View>
      <View style={styles.buttonContainer}>
        <Button title="Wisdom" onPress={() => handleCategorySelection('wisdom')} />
      </View>
      /* Add more buttons for different categories */
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 20,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    marginVertical: 10,
    width: '60%',
  },
});

export default CategoryScreen;
