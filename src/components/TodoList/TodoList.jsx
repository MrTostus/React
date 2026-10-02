import TodoItem from '../TodoItem/TodoItem.jsx'
import { useState } from 'react';
function TodoList( { todos }) {

    console.log(todos); 
    return (
        <section>
            <TodoItem text="Nauczyć się Reacta" />
            <TodoItem text="Zrobić zadanie domowe" />
            <TodoItem text="Powtórzyć JavaScript" />
            {todos.map((el, index) => (
                <todoItem key={index} text={el} />
            ))}
        </section>
    );
}
export default TodoList;