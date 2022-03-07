import Header from './components/Header';
import LaunchDetails from './screens/LaunchDetails';
import LaunchList from './screens/LaunchList';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <Header></Header>

      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="launch-list" component={LaunchList}></Stack.Screen>
          <Stack.Screen name="launch-details" component={LaunchDetails}></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;