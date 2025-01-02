import React from 'react';
import { View } from 'react-native';
import GoalList from '../components/GoalList';
import ActionList from '../components/ActionList';
import AddGoalForm from '../components/AddGoalForm';

export default function ToDoListPage() {
  return (
    <View>
      <AddGoalForm />
      <GoalList />
      <ActionList />
    </View>
  );
}