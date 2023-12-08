import React from 'react';
import { View, Text, Button } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  const handleCategorySelection = (category) => {
    navigation.navigate('Home', { category });
  };
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 20 }}>Choose a Category</Text>
      <View style={{ marginVertical: 20 }}>
        <Button title="Inspirational" onPress={() => handleCategorySelection('inspirational')} />
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button title="Motivational" onPress={() => handleCategorySelection('motivational')} />
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button title="Success" onPress={() => handleCategorySelection('success')} />
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button title="Love" onPress={() => handleCategorySelection('love')} />
      </View>
      <View style={{ marginVertical: 20 }}>
        <Button title="Wisdom" onPress={() => handleCategorySelection('wisdom')} />
      </View>
      /* Add more buttons for different categories */
    </View>
  );
};

export default CategoryScreen;
