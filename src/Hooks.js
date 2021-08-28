import React, {useState} from "react";

function Hooks () {
  const [counter, setCounter] = useState(0);

  function increment() {
    setCounter(counter+1)
  }

  function decrement() {
    setCounter(counter-1)
  }


  return (
    <div>
      <h1>Счетчик: {counter}</h1>
      <button onClick={increment} className='btn btn-success'>Добавит</button>
      <button onClick={decrement} className='btn btn-danger'>Убрать</button>
    </div>
  )
}

export default Hooks;
