import React, {useState} from "react";


import Paper from '../components/Paper';
import Header from '../components/Header';
import ToDoForm from '../components/ToDoForm';
import Todos from '../components/Todos';

const ToDoList = () => {

  const [todos, setTodos ] = useState([
    { text: "Learning React!"},
    { text: "Learning React & Hooks!"},
    { text: "Learning styling in React!"}
  ]);

  const addTodo = value =>{
    const addedTodo = [...todos, {text:value}];

    setTodos(addedTodo);
  };

  console.log("todos", todos);

  return (
    <Paper>
      <Header/>
      <ToDoForm addTodo={addTodo}/>
      <Todos todos={todos}/>
      </Paper>
  );
};

export default ToDoList;
