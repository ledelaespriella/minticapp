import './App.css';
import Todolist from './components/todo-list';
import React, { useState, useRef } from 'react';

function App() {

  const init = [
    { id: 0, text: "Levantarme", color: 'blue', state: false }
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
    setItems([...items, { id: items.length, text: value, color: 'blue', state: false }]);

    InputRef.current.value = null;
  };

  const checked = (id) => {
    let value = items;
    let index = value.findIndex(e => e.id === id);
    if (index !== -1) {
      value[index].state = !value[index].state;
      value[index].color = value[index].state ? 'green' : 'blue';

      setItems([...value]);
    };

  };

  const endChecked = () => {
    let value = items;
    value.map((e) => {
      e.state = true;
      e.color = 'green';
    });
    setItems([...value]);
  };

  const unverify = () => {
    let value = items;
    value.map((e) => {
      e.state = false;
      e.color = 'blue';
    });
    setItems([...value]);
  };

  


  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <div className="input-group mb-3">
            <input ref={InputRef} type="text" className="form-control" placeholder="Agregue una lista de tareas" aria-label="Agregue una lista de tareas" aria-describedby="button-addon2" />
            <button onClick={add} className="btn btn-outline-primary" type="button" id="button-addon2">Add</button>
          </div>
          <div className="">
            <p>Hay {items.filter(e => !e.state).length} tareas pendientes por finalizar</p>
          </div>
        </div>
        <div className="col-6">
          <div className="row justify-content-start">
            <div className="col-auto">
              <button type="button" className="btn btn-primary mb-2" onClick={endChecked}>End All</button>
            </div>
            <div className="col-auto">
              <button type="button" className="btn btn-primary mb-2" onClick={unverify}>unverify</button>
            </div>
          </div>
          <Todolist items={items} funChecked={checked} />
        </div>
      </div>
    </div>
  );
}

export default App;
