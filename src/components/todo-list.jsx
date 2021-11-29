import React from 'react';
import TodoItem from './todo-items'

const Todolist = ({ items ,funChecked}) => {
    return (
        <>
            <table className="table table-responsive table-bordered ">
                <thead>
                    <tr>
                        <th className="col-2" scope="col">Check</th>
                        <th className="col-10" scope="col">Todo List</th>
                    </tr>
                </thead>
                <tbody>
                    {items.map((e) => (<TodoItem key={e.id} state={e.state} funChecked={()=>funChecked(e.id)} title={e.text} style={{ color: e.color }} />))}
                </tbody>
            </table>
        </>
    );
};

export default Todolist;