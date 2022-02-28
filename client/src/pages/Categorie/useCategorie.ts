import { useState, useEffect } from 'react';
import axios from "axios";
import { Categories } from '../../interfaces/categorie';
import { useParams } from 'react-router';

export function useCategorie() {  
  const { name } = useParams();
  
  const [ categorieData, setCategorieData ] = useState([] as Categories[]);
  const [ openModal, setOpenModal ] = useState(false); 
  const [ modalMessage, setModalMessage ] = useState('');    
  
  useEffect(() => {
    (async function getCategoriesByTag() {
      try {
        const { data } = await axios.get(`http://localhost:3000/market-items/${name}`);

        setCategorieData(data);                
      } catch(error) {
        setOpenModal(true)
        setModalMessage('Error trying to search for this category!')
      }
    })()
  }, [name])

  return {
    categorieData,
    openModal,
    setOpenModal,
    modalMessage        
  }
}