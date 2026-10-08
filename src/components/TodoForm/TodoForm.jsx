import { useState  } from "react";

function TodoForm({ setTodos }) {
    const [value, setValue] = useState('')
    return (
        <div>
            <input 
                placeholder="Wpisz zadanie..." 
                value={value} 
                onChange={e => setValue(e.target.value)}
            />
            <button onClick={() => {
                setTodos(prevTodos => [...prevTodos, value]);
                setValue = ('');
            }}> 
            Dodaj
            </button>
        </div>
    );
}
export default TodoForm;