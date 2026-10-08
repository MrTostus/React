import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos })  => {
  return (
    <section>
      {todos.length > 0
        ? todos.map((el, index) => <TodoItem key={index} text={el} />)
        : 'Dodaj zadania aby zobaczyć je na liście'}

      {/* {isNotificationShown && toast} */}
    </section>
  );
}
export default TodoList;