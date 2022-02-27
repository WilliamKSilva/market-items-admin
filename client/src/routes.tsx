import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { Categorie } from './pages/Categorie'
import { CreateProduct } from './pages/CreateProduct'
import { CategorieSelect } from './pages/CategorieSelect'

export default function MainRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<CategorieSelect />}/>
        <Route path="/categories/:name" element={<Categorie />} />
        <Route path="/create-product" element={<CreateProduct />} />
      </Routes>
    </>
  )
}