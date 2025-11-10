import { Text, View, StyleSheet, Pressable } from 'react-native';

function TodoItem({ text, onDelete }) {
  return (
    <Pressable 
      onPress={onDelete}
      android_ripple={{ color: '#b3b3b3' }}
      style={({ pressed }) => pressed && styles.pressedItem}
    >
      <View style={styles.todoItem}>
        <Text style={styles.todoText}>{text}</Text>
      </View>
    </Pressable>
  );
}

export default TodoItem;

const styles = StyleSheet.create({
  todoItem: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 8,
    marginVertical: 6,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  todoText: {
    fontSize: 16,
  },
  pressedItem: {
    opacity: 0.5,
  }
});
