import React from 'react';
import { View, Text, Button } from 'react-native';

export default function HomePage({ navigation }) {
  return (
    <View>
      <Text>Welcome to your discipleship helper App. Our goal is for you to and your friends to keep focused on the good fight, away from the distractions which do not lead to eternal fruits</Text>
      <Button title="View Goals" onPress={() => navigation.navigate('ToDoListPage')} />
      <Button title="View Logs" onPress={() => navigation.navigate('LogsPage')} />
      <Button title="View Identity" onPress={() => navigation.navigate('IdentityPage')} />
      <Button title="View Forge Team" onPress={() => navigation.navigate('ForgeTeamPage')} />
    </View>
  );
}