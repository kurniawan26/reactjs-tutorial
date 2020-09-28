import React from 'react'

import Todo from './ToDo'

const Todos = () => {
  const todos = [
    {
      text: "Belajar react"
    },
    {
      text: "Belajar props"
    },
    {
      text: "Belajar hok"
    },
    {
      text: "Belajar state"
    },
    {
      text: "Belajar apalah"
    },
    {
      text: "Belajar react"
    },
    {
      text: "Belajar props"
    },
    {
      text: "Belajar hok"
    },
    {
      text: "Belajar state"
    },
    {
      text: "Belajar apalah"
    },
  ]

    return(
        <section className="todos">
        {todos.map(todo => {
          return <Todo text={todo.text}/> 
        })}
        </section>
    );
}

export default Todos;