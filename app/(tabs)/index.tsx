import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, FlatList } from 'react-native';
import GoalItem from './goalItem';
import GoalInput from './goalInput';

export default function App() {
  const [goals, setGoals] = useState<string[]>([]);
  const [isModelVisible, setIsModelVisible] = useState(false);

  const addGoalHandler = (text: string) => {
    setGoals((currentGoals) => [...currentGoals, text]);
  };

  const deleteGoalHandler = (index: number) => {
    setGoals((currentGoals) => currentGoals.filter((_, i) => i !== index));
  };

  const startAddGoalHandler = () => {
    setIsModelVisible(true);
  };

  const closeGoalHandler = () => {
    setIsModelVisible(false);
  };

  return (
    <View style={styles.appContainer}>
      <Button title='Add New Goal' color='purple' onPress={startAddGoalHandler} />
      <GoalInput onclose={closeGoalHandler} visible={isModelVisible} onAddGoal={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => <GoalItem text={itemData.item} ondelete={() => deleteGoalHandler(itemData.index)} />}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 50,
    flex: 1
  },
  goalsContainer: {
    flex: 4
  }
});
