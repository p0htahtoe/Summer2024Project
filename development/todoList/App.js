import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomePage from './views/HomePage';
import ToDoListPage from './views/ToDoListPage';
import LogsPage from './views/LogsPage';
import IdentityPage from './views/IdentityPage';
import ForgeTeamPage from './views/ForgeTeamPage';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomePage">
        <Stack.Screen name="HomePage" component={HomePage} />
        <Stack.Screen name="ToDoListPage" component={ToDoListPage} />
        <Stack.Screen name="LogsPage" component={LogsPage} />
        <Stack.Screen name="IdentityPage" component={IdentityPage} />
        <Stack.Screen name="ForgeTeamPage" component={ForgeTeamPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}