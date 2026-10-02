function TodoForm({ setTodos }) {
    return (
        <div>
            <input placeholder="Wpisz zadanie..." id= 'todo-input'/>
            <button onClick={() => {
                setTodos(prevTodos => [...prevTodos, value]);
                value = ' ';
            }}> 
            Dodaj
            </button>
        </div>
    );
}
export default TodoForm;