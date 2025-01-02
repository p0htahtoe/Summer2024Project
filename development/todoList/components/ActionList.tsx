import React from 'react';
import { View, Text, FlatList } from 'react-native';

const actions = [
  { id: '1', title: 'Action 1', deadline: '2023-12-31' },
  { id: '2', title: 'Action 2', deadline: '2023-12-31' },
];

export default function ActionList() {
  return (
    <View>
      <Text>Actions</Text>
      <FlatList
        data={actions}
        renderItem={({ item }) => (
          <View>
            <Text>{item.title}</Text>
            <Text>Deadline: {item.deadline}</Text>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </View>
  );
}