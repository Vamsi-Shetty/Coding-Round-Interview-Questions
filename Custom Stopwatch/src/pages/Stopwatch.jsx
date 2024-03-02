import React, {useState} from 'react'

const Stopwatch = () => {

    const [count, setCount] = useState(0);

    const inc = () => {
        
        setInterval(() => {
            console.log(count);
            setCount(count+1);
        }, 1000);
    }

    const handleClick = () => {
        if(count === 0) {
            setInterval(inc(), 1000);
            // setTimeout(() => {
            //     console.log(count); () =>  setCount(count + 1)
            // }, 1000);
        }
    }

  return (
    <div>
        <h1>StopWatch</h1>
        <h3>{count}</h3>
        <button onClick={handleClick}>Start</button>
    </div>
  )
}

export default Stopwatch