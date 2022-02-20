import { useState } from 'react'
import Home from './pages/Home'
import { GlobalStyles } from './styles/global'


function App() {
  const [count, setCount] = useState(0)   

  return (    
    <>
      <Home />
      <GlobalStyles />
    </>
  )
}

export default App
