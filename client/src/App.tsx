import { useState } from 'react'
import { Categorie } from './pages/Categorie'
import CategorieSelect from './pages/CategorieSelect'
import CreateProduct from './pages/CreateProduct'
import Home from './pages/Home'
import { GlobalStyles } from './styles/global'


function App() {     
  return (    
    <>      
      <CreateProduct />
      <GlobalStyles />
    </>
  )
}

export default App
