import './App.css';
import Todolist from './components/todo-list';
import React, { useState, useRef } from 'react';
import { v4 as uuidv4 } from "uuid";

function App() {

  const init = [
    { text: "Levantarme", color: 'blue', state: false }
  ];
  const [items, setItems] = useState(init);

  //Llamo la referencia
  const InputRef = useRef();

  const add = () => {
    let value = InputRef.current.value;
    //si esta vacio no retorna nada
    if (value === "") return;

    //una manera de modificar el setItems
    // let oldItems=items;
    // oldItems.push({text:value, color:'blue',state:false});
    // setItems(oldItems);

    // ...items = es un split operator
    setItems([...items, { text: value, color: 'blue', state: false }]);
    InputRef.current.value=null;
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <div class="input-group mb-3">
            <input ref={InputRef} type="text" class="form-control" placeholder="Agregue una lista de tareas" aria-label="Agregue una lista de tareas" aria-describedby="button-addon2" />
            <button onClick={add} class="btn btn-outline-primary" type="button" id="button-addon2">Add</button>
          </div>
        </div>
        <div className="col-6">
          <Todolist items={items} />
        </div>
      </div>
    </div>
  );
}

export default App;
