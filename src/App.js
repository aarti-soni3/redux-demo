import './App.css';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './reduxToolKit/Slices/Counter/CounterSlice';

function App() {

  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const [number,setNumber] = useState(0);

  const handleIncrement = () => {
    dispatch(increment(Number(number)))
  }

  const handleDecrement = () => {
    dispatch(decrement(Number(number)))
  }

  return (
    <div className="App">
      <div>
        {console.log(count)}
        <h1>Count : {count === undefined ? "undefined" : count}</h1>
      </div><br />
      <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
      <button onClick={handleIncrement}>inc</button>
      <button onClick={handleDecrement}>dec</button>
      {/*
        The problem is that you're invoking the function immediately and then what's left is the return value,
        which might not be a function!

        What you can do instead is wrap that function call inside an arrow function to solve your problem. 
        It'll call the inner function once you onClick:

        https://stackoverflow.com/questions/44833583/expected-onclick-listener-to-be-a-function-instead-got-type-object-react-redu
       */}
    </div>
  );
}

export default App;
