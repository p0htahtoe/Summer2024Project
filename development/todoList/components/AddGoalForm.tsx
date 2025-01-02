import React, { useState } from 'react';
import { View, TextInput, Button } from 'react-native';

export default function AddGoalForm() {
  const [goal, setGoal] = useState('');

  const handleAddGoal = () => {
    // Add goal to the list (this should be connected to your state management)
    console.log('Goal added:', goal);
    setGoal('');
  };

  return (
    <View>
      <TextInput
        placeholder="Enter your goal"
        value={goal}
        onChangeText={setGoal}
      />
      <Button title="Add Goal" onPress={handleAddGoal} />
    </View>
  );
}