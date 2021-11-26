import './App.css';
import Todolist from './components/todo-list';
import React, { useState,useRef } from 'react';

function App() {

  const init = [
    {text: "Levantarme", color: 'blue',state:false}
  ];
  const [items, setItems] = useState(init);

  //
  // const taskRef = useRef();

  

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-6">
          <div class="input-group mb-3">
            <input type="text" class="form-control" placeholder="Agregue una lista de tareas" aria-label="Agregue una lista de tareas" aria-describedby="button-addon2" />
            <button class="btn btn-outline-primary" type="button" id="button-addon2">Add</button>
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
