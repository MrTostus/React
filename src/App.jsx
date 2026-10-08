import { useEffect, useState } from 'react';
import Header from './components/header/Header.jsx'
import './App.css'
import UserInfo from './components/UserInfo/UserInfo.jsx'
import TodoForm from './components/TodoForm/TodoForm.jsx'
import TodoList from './components/TodoList/TodoList.jsx'

function App() {
  const name = "Janusz";
  const age = 20;
  
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
      setTodos([
        'nauczyć się Reacta',
        'Zrobić zadanie domowe',
        'Powtórzyć JavaScript',
      ]);
    }, []);

  return (
    <>
    <Header/>
    <UserInfo name={name} age={age}/>
      <TodoForm setTodos={setTodos}/>
      <TodoList todos = {todos}/>
    </>
  );
}

export default App