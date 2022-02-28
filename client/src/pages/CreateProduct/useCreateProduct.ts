import axios from "axios";
import { useState } from "react";

type FormData = {
  productName: string;
  productPrice: string;
  productTag: string;
  productDescription: string;
  productImageURL: string;
}

export function useCreateProduct() {
  const [ openModal, setOpenModal ] = useState(false); 
  const [modalMessage, setModalMessage] = useState('');

  async function onCreateProduct({productName, productPrice, productTag, productDescription, productImageURL}: FormData) {           
    try {      
      await axios.post('http://localhost:3000/market-items', {
        name: productName,
        price: productPrice,
        tag: productTag,        
        description: productDescription,
        image_url: productImageURL
      },
      {
        headers: {
          'Content-Type': 'application/json',                   
        }
      }
      )      
    } catch(error) {
      setOpenModal(true);
      setModalMessage('Error trying to create a new product!')
    }    
  }

  return {
    onCreateProduct,
    openModal,
    setOpenModal,
    modalMessage    
  }
} 