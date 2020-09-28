import React from 'react'

const ToDoForm = () => {
    return(
        <section className="add">
          <form className="add-form">
            <input type="text" className="add-input" />
            <button className="add-btn thirdty">Add</button>
          </form>
        </section>
    );
}

export default ToDoForm;