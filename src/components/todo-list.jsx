import React from 'react';
import TodoItem from './todo-items'

const Todolist = ({ items }) => {
    return (
        <div>
            <p>Todo List</p>
            <ul>
                {
                    items.map(e => (<TodoItem title={e.text} style={{ color: e.color }} />))
                }
            </ul>
        </div>

    );
};

export default Todolist;