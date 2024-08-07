import React , {useState} from "react";
import CounterCard from "./components/counterCard";

const App = () => {
  const [counters,setCounters] = useState({});
 
  const handleCounterChange = (name, isInc) => {
  if(isInc){
      setCounters(prev => {
      return {
        ...prev, 
        [name] : prev[name] ? prev[name] + 1  : 1
      }
    });
  } else {
    setCounters(prev => {
      return {
        ...prev,
        [name] : prev[name] ? prev[name] - 1  : 0
      }
    });
  }
  }

  const handleResetCounter = (name) => {
    setCounters((prev) => {
      return {
        ...prev,
        [name]: 0
      };
    });
  };
  const total = Object.values(counters).reduce((partialSum, a) => partialSum + a, 0);

  return(
  <div>
    <h1 className="total-title">Total {total}</h1>
    {[...Array(3)].map((_, index) => (
    <CounterCard 
    key={index} 
    name={`counter ${index + 1}`} 
    count={counters[`counter ${index + 1}`] || 0}
    setCount={handleCounterChange}
    resetCount={handleResetCounter}
    /> ))}
  </div>
)};

export default App;