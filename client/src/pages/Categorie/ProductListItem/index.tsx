import { useState } from 'react';
import axios from 'axios';
import { Container, HeartIcon } from './styles'

type ProductListItemProps = {
  _id: string;
  image_url: string;
  title: string;
  price: string;
  isFavorite: boolean;
}

export function ProductListItem({_id, image_url, title, price, isFavorite}: ProductListItemProps) {  
  const [currentStatus, setCurrentStatus] = useState(isFavorite);              

  async function handleFavoriteOption() {                                
    try {
      setCurrentStatus(!currentStatus)                
      const response = await axios.patch('http://localhost:3000/market-items', {
        id: _id,
        status: !currentStatus
      },
      {
        headers: {
          'Content-Type': 'application/json',
        }
      }
      ) 

      console.log(response.data)
    } catch(error) {
      console.log(error)
    }
  }

  return (
    <Container>
      <div>
        <HeartIcon status={currentStatus} onClick={handleFavoriteOption}/>
      </div>
      <img src={image_url} alt="A tech product image"/>
      <section>
        <h1>{title}</h1>
        <span>USD {price}</span>
      </section>
    </Container>
  )
}