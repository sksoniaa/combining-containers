// useContext() -- React Hook that allows you to share values
// between multiple levels of components
// without passing props through each level

import { useState } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'
import ComponentC from './ComponentC'
import ComponentD from './ComponentD'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <ComponentA />
    </>
  )
}

export default App
