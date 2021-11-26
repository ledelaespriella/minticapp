import React from 'react';

const TodoItem= ({title,style})=> {
    return (
        <li style={style}>{title}</li>
    );
};

export default TodoItem;