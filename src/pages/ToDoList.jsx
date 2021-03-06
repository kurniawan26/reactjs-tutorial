import React, {useState} from "react";


import Paper from '../components/Paper';
import Header from '../components/Header';
import ToDoForm from '../components/ToDoForm';
import Todos from '../components/Todos';

const ToDoList = () => {

  const [todos, setTodos ] = useState([
    { text: "Learning React!", isCompleted: false},
    { text: "Learning React & Hooks!", isCompleted: false},
    { text: "Learning styling in React!", isCompleted: false}
  ]);

  const [showAdd, setShowAdd] = useState(false);

  const addTodo = value =>{
    if(todos.length < 10){const addedTodo = [...todos, {text:value, isCompleted: false}];

    setTodos(addedTodo);
      
    } else {
      alert("Only 10 todos is allowed")
    }
    const addedTodo = [...todos, {text:value, isCompleted: false}];

    setTodos(addedTodo);
  };

  const completeTodo = (index) =>{
    const addedTodo = [...todos]
    addedTodo[index].isCompleted = !addedTodo[index].isCompleted;

    setTodos(addedTodo);
  }

  const clearTodos = () => setTodos([]);
  const showAddToggle = () => setShowAdd(!showAdd);
  
  console.log("todos", todos);

  return (
    <Paper>
      <Header showAddToggle={showAddToggle} showAdd={showAdd} clearTodos={clearTodos}/>
      <ToDoForm addTodo={addTodo} showAdd={showAdd}/>
      <Todos todos={todos} completeTodo={completeTodo}/>
      </Paper>
  );
};

export default ToDoList;
