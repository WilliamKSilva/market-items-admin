import axios from "axios";

type FormData = {
  productName: string;
  productPrice: string;
  productTag: string;
  productDescription: string;
  productImageURL: string;
}

export function useCreateProduct() {

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
      console.log(error)
    }    
  }

  return {
    onCreateProduct
  }
} 