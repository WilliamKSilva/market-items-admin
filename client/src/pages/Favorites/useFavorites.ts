import { useState, useEffect } from 'react';
import axios from "axios";
import { Categories } from '../../interfaces/categorie';

export function useFavorites() {
  const [ favoritesData, setFavoritesData ] = useState([] as Categories[])

  useEffect(() => {
    (async function getFavoriteProducts() {
      try {
        const { data } = await axios.get('http://localhost:3000/market-items/favorites')

        setFavoritesData(data);
      } catch(error) {
        console.log(error)
      }
    })()
  })

  return {
    favoritesData
  }
}