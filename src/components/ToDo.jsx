import React from 'react';
import Proptypes from 'prop-types';

const Todo = props =>{
    return(
        <div className="todo">
            <span className="todo-text">{props.text}</span>
        </div>
    )
}

Todo.propTypes = {
    text: Proptypes.string.isRequired
};

export default Todo;