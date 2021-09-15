import React from 'react';

export function TodoItem({ todo, toogletodo }) {
const { id, task, completed } = todo;

const handleTodoClick = () => {
    toogletodo(id);};

return(
    <li> 
        <input type= "checkbox"  checked={completed} onChange={handleTodoClick} /> 
        {task}
    </li>
 );
}