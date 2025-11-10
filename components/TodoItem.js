import { Text, StyleSheet, Pressable } from 'react-native';

function TodoItem({ text, id, onDelete }) {
  return (
    <Pressable
      onPress={() => onDelete(id)}
      style={({ pressed }) => [
        styles.todoItem,
        pressed && styles.pressedItem,
      ]}
    >
      <Text style={styles.todoText}>{text}</Text>
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
    backgroundColor: '#dddddd',
  },
});
