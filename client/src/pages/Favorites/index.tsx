import { useNavigate, useParams } from 'react-router'
import { ProductListItem } from '../Categorie/ProductListItem';
import { ArrowIcon, Container, Content, Heading, WrapperCategoriesCards } from './styles'
import { useFavorites } from './useFavorites';

export function Favorites() {
  const navigate = useNavigate();
  const { favoritesData } = useFavorites();          

  return (
    <Container>
      <Content>
        <Heading>
          <ArrowIcon onClick={() => navigate('/categories')}/>
          <h1>Favorites</h1>
        </Heading>
        <WrapperCategoriesCards>
          {favoritesData.map((product) => (
            <ProductListItem
              _id={product._id}
              key={product._id} 
              image_url={product.image_url} 
              price={product.price} 
              title={product.name}
              isFavorite={product.status}              
            />
          ))}
        </WrapperCategoriesCards>        
      </Content>
    </Container>
  )
}