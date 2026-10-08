import { useEffect, useState } from 'react';
import TodoItem from '../TodoItem/TodoItem';

const TodoList = ({ todos })  => {
    const [isNotificationShown, setisNotificationShown] = useState(false);
    const [toastText, setToastText] = useState('');

    useEffect(() => {
      if (todos.length === 0) return;
      setToastText(todos[todos.length - 1]);
      
      const listUpdated = text => {
        setToastText(text);
        setisNotificationShown(true);
      };

      listUpdated(todos[todos.length - 1]);
    }, [todos])
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