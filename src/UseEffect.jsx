import { useEffect, useState } from 'react'

const UseEffect = () => {
      const [count, setCount] = useState(0)
      const [count2, setCount2] = useState(0)
// // 1. useEffect with Empty Dependency Array:

//       useEffect(() => {
//             console.log("First Type UseEffect")
//       },[])



// // 2. useEffect with Dependencies:

//        useEffect(() => {
//             console.log("Second Type UseEffect")
//       },[count, count2])


// 3. useEffect with No Dependencies:

      useEffect(() => {
            console.log("Third Type UseEffect")
      })

      const incrementCount = () => {
            setCount(count + 1)
      } 

      const decrementCount = () => {
            setCount2(count2 - 1)
      } 
      
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={incrementCount}>-</button>

      <h1>{count2}</h1>
      <button onClick={decrementCount}>+</button>
    </div>
  )
}

export default UseEffect