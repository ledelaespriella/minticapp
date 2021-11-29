import React from 'react';

const TodoItem = ({ title, style, funChecked,state}) => {
    return (
        <tr style={style}>
            <th scope="row"><input checked={state} onChange={funChecked} className="form-check-input me-1" type="checkbox" /></th>
            <td>{title}</td>
        </tr>
        // <label class="list-group-item" style={style}>
        //     <input class="form-check-input me-1" type="checkbox" /> {title}
        // </label>
    );
};

export default TodoItem;