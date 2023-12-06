import { Text, SafeAreaView, StyleSheet, View, Button } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={({ navigation }) => ({
              title: 'Home'
            })}
          />
          <Stack.Screen
            name="Category"
            component={CategoryScreen}
            options={({ navigation }) => ({
              title: 'Find your type of quote',
              headerRight: () => (
                <View>
                  <Button title="Go Back" onPress={() => navigation.goBack()} />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="Journal"
            component={JournalScreen}
            options={({ navigation }) => ({
              title: 'How do you feel today?',
              headerRight: () => (
                <View>
                  <Button title="Go Back" onPress={() => navigation.goBack()} />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="SavedQuotes"
            component={SavedQuotesScreen}
            options={({ navigation }) => ({
              title: 'Your encyclopedia of inspiration',
              headerRight: () => (
                <View>
                  <Button title="Go Back" onPress={() => navigation.goBack()} />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="Settings"
            component={SettingsScreen}
            options={({ navigation }) => ({
              title: 'Settings',
              headerRight: () => (
                <View>
                  <Button title="Go Back" onPress={() => navigation.goBack()} />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="Login"
            component={LoginScreen}
            options={({ navigation }) => ({
              title: 'Have an account? Login',
              headerRight: () => (
                <View>
                  <Button title="Go Back" onPress={() => navigation.goBack()} />
                </View>
              ),
            })}
          />
          <Stack.Screen
            name="Register"
            component={SignUpScreen}
            options={({ navigation }) => ({
              title: 'Don\'t have an account? Register',
              headerRight: () => (
                <View>
                  <Button title="Go Back" onPress={() => navigation.goBack()} />
                </View>
              ),
            })}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
