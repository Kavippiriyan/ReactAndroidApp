import React from 'react';
import { Text, View, StyleSheet, Pressable } from 'react-native';

interface GoalItemProps {
  text: string;
  ondelete: () => void;
}

const GoalItem: React.FC<GoalItemProps> = ({ text, ondelete }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable onPress={ondelete} android_ripple={{ color: 'green' }}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    padding: 8,
    borderRadius: 6,
    backgroundColor: 'green'
  },
  goalText: {
    color: 'white',
    margin: 8,
    padding: 3
  }
});

export default GoalItem;
