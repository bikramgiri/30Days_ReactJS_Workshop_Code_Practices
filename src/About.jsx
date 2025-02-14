import { useState } from "react"

const About = () => {
  // const state = useState("Bikram")
  // const firstItem = state[0]
  // const secondItem = state[1]

  // var count = 0

  // const state = useState(0)
  // const firstItem = state[0]
  // const secondItem = state[1]

  const [number, setNumber] = useState({
    name: "Bikram",
    address: "Kathmandu"
  }) // [0, function], syntax for array destructuring

  const decreaseCount = () => {
    setNumber(number - 1) 
  }

  return (
    <div>
      <h1>{number.name}</h1>
      <button onClick={decreaseCount}>-</button>
    </div>
  )
}

export default About 