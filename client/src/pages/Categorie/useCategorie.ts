import { useState, useEffect } from 'react';
import axios from "axios";
import { Categories } from '../../interfaces/categorie';
import { useParams } from 'react-router';

export function useCategorie() {  
  const [ categorieData, setCategorieData ] = useState([] as Categories[]) 
  const { name } = useParams();  
  
  useEffect(() => {
    (async function getCategoriesByTag() {
      try {
        const { data } = await axios.get(`http://localhost:3000/market-items/${name}`);

        setCategorieData(data);
        console.log(categorieData)        
      } catch(error) {
        console.log(error)
      }
    })()
  }, [name])

  return {
    categorieData,        
  }
}