import { useState, Fragment } from "react";

import "./App.css"; // Importamos el archivo de estilos locales

const App = () => {
    // Creamos un estado para el contador
    const [count, setCount] = useState(50);
    // const [count, setCount] = useState(0);
    // setTimeout(() => {
    //   setCount(count + 1);
    // }, 1000);
    const handleAdd = () => {
      setCount(count + 1);
    };

    const handleSubtract = () => {
      setCount(count - 1);
    };

    const handleReset = () => {
      setCount(50);
    };

    //Devolvemos el JSX a renderizar en el navegador
  return (
    //podemos usar Fragment o <></>
    <Fragment>
      <div className="container">
        <h1>Counter: {count}</h1>
        <hr />
        <button onClick={handleAdd}>+</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handleSubtract}>-</button> 
      </div>
    </Fragment>

  );
};

export default App;