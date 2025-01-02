import React from 'react';
import { View, Text, FlatList } from 'react-native';

const goals = [
  { id: '1', title: 'Goal 1' },
  { id: '2', title: 'Goal 2' },
];

export default function GoalList() {
  return (
    <View>
      <Text>Goals</Text>
      <FlatList
        data={goals}
        renderItem={({ item }) => <Text>{item.title}</Text>}
        keyExtractor={item => item.id}
      />
    </View>
  );
}