import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/screens/Home';
import Booking from './src/screens/Booking';
import Details from './src/screens/Details';
import Checkout from './src/screens/Checkout';
import Success from './src/screens/Success';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator 
      initialRouteName='Home' 
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Details" component={Details} />
      <Stack.Screen name="Booking" component={Booking} />
      <Stack.Screen name="Checkout" component={Checkout} />
      <Stack.Screen name="Success" component={Success} />
    </Stack.Navigator>
    <StatusBar style="auto" />
  </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
