import React, { useState } from 'react'

const Prime = (props) => {
  //js code
  const isPrime = (num) => {
    for (let i = 2; i < num; i++) if (num % i === 0) return false
    return num > 1
  }
  const [counter, setCounter] = useState(0)

  const add1 = () => {
    setCounter((prev) => (prev += 1))
  }
  const subtract1 = () => {
    setCounter((prev) => (prev -= 1))
  }
  return (
    <section>
      <h3 className={isPrime(counter) ? 'red' : ''}>{counter}</h3>
      <button onClick={add1}>Increase</button>
      <button onClick={subtract1}>Decrease</button>
    </section>
  )
}

export default Prime
