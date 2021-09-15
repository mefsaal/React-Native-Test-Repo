import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList( { todos, toogleTodo }) {
    return (
        <ul>
        {todos.map((todo) => (
            <TodoItem  key={todo.id} todo={todo} toogleTodo={toogleTodo} />
            ))} 
        </ul>
    )
}
