import { Text, View, StyleSheet } from 'react-native';

function TodoItem({ text }) {
  return (
    <View style={styles.todoItem}>
      <Text style={styles.todoText}>{text}</Text>
    </View>
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
});
