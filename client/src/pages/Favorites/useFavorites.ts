import { useState, useEffect } from 'react';
import axios from "axios";
import { Categories } from '../../interfaces/categorie';

export function useFavorites() {
  const [ favoritesData, setFavoritesData ] = useState([] as Categories[])
  const [ openModal, setOpenModal ] = useState(false); 
  const [modalMessage, setModalMessage] = useState('');

  useEffect(() => {
    (async function getFavoriteProducts() {
      try {
        const { data } = await axios.get('http://localhost:3000/market-items/favorites')

        setFavoritesData(data);        
      } catch(error) {
        setModalMessage('Error trying to search your favorite products!')
        setOpenModal(true)
      }
    })()
  }, [])

  return {
    favoritesData,
    openModal,
    setOpenModal,
    modalMessage
  }
}