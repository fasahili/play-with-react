import React  from "react";  
import "./counterCard.css"; 

const CounterCard = ({ name, count, setCount, resetCount }) => {
    return (
      <div className="card">
        <h1 className="nameOfCounter">{name}</h1>
        <p className="numOfCounter">You clicked {count} times</p>
        <button onClick={() => setCount(name, true)}>+</button>
        <button onClick={() => setCount(name, false)}>-</button>
        <button onClick={() => resetCount(name)}>Reset</button>
      </div>
    );
  };

export default CounterCard;