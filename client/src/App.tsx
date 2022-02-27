import { useState } from 'react'
import { Header } from './components/Header'
import { useWindowSize } from './hooks/useWindowSize'
import { BrowserRouter as Router } from 'react-router-dom'
import MainRoutes from './routes'
import { GlobalStyles } from './styles/global'

interface Size {
  width: number | undefined;
  height: number | undefined;
}


function App() {
  const size: Size = useWindowSize();
  
  return (    
    <>
      <Router>
        {size.width! >= 1080 ? <Header /> : null}      
        <MainRoutes />
        <GlobalStyles />
      </Router>      
    </>
  )
}

export default App
