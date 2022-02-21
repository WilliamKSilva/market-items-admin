import { useState } from 'react'
import Categories from './pages/Categories'
import Home from './pages/Home'
import { GlobalStyles } from './styles/global'


function App() {
  const [count, setCount] = useState(0)   

  return (    
    <>
      <Categories />
      <GlobalStyles />
    </>
  )
}

export default App
