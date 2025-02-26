import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-center text-3xl bg-red-500  w-full text-white h-96'>Hello World!</h1>
    </>
  )
}

export default App
