import React from 'react';
import { View, Text, Button } from 'react-native';

const CategoryScreen = ({ navigation }) => {
  const handleCategorySelection = (category) => {
    navigation.navigate('Home', { category });
  };
  
}